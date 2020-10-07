# brewpass

> A demonstration and skill-building project incorporating [Docker](https://www.docker.com), [Go](https://golang.org), [PostgreSQL](https://www.postgresql.org), [Hasura](https://hasura.io), [GraphQL](https://graphql.org), [Next.js](https://nextjs.org), [React](https://reactjs.org), [MobX](https://mobx.js.org), [MobX-state-tree](https://mobx-state-tree.js.org), and [Chakra UI](https://chakra-ui.com).

This project began with the [coding challenge](#Challenge) below and is growing into a fun, full-stack technology demonstrator sandbox. The next features to be added: - GitHub Actions + Vercel - Kubernetes - Electron

## Challenge

> Assume the customers around a campus order 5000 orders a day from 50 local restaurants. Each order contains one or multiple products (eg 2 burritos, a soda, and a side of chips).
>
> - Design a full stack application which returns an infinite-scrolling list of trending products to the user.
> - A product can be qualified as trending if it is purchased at least once in last 48 hours
> - Each product should be tagged with two tags:
>   - a recent purchase tag: “5 purchased recently”
>   - a time tag “ordered 3 min ago”
> - Use a heuristic to determine which trending products gets returned higher. Base heuristic on both recency and number of recent purchases.
>
> Requirements:
>
> - Full stack: web server + persistent storage + code
> - Production quality code

## Discussion

[Video Walkthrough - 2020.10.6](https://www.loom.com/share/9e3168d2e85a4251b11d052803e2b6c1)

I live in Fort Collins, Colorado, which is both a college town and a world-famous Microbrewery Mecca. Given this, it wasn’t too hard to imagine a mashup of campus life and microbrew-culture. Thus, we have `brewpass` - the best way to get you brew on (with friends) while sustaining yourself!

### Fake it until you make it

First order of business was to create an interesting, yet realistic set of venues and menus. For venues I [queried](./go/beertruck/osm/query.ql) [OpenStreetMap](https://www.openstreetmap.org/about) for 50 of the finest brew-serving establishments in FoCo. Then we needed to build unique menus for each venue. For this task I built a simple golang cli using the lovely little [gofakeit](https://github.com/brianvoe/gofakeit) package, which conveniently generates fake data for Beers, Breakfast, Lunch, Snacks, Dinner, and Dessert.

With fun menus in-hand, the last task for the cli is to generate meal orders…each of which must include some variety of brew! At this point, it occurred to me that I have menu items for each time of day, and that different foods are more popular (and should thus be featured) near each traditional mealtime. With this in mind, I made the order generator time-of-day aware and ordered beer with breakfast in the morning, beer with lunch around noon, and beer with dessert in the late evening…you get the idea.

### It's easy with GraphQL

Now that we have a solid database of venues, menus, and orders, we need a quick-yet-robust way to access this data from the client. For this need, I turned to [Hasura](https://hasura.io)+[PostgreSQL](https://www.postgresql.org) which yields a full-featured GraphQL API, and does a nice job of managing our database migrations, as a bonus. For the purposes of this challenge, authentication and authorization is ignored, but can be easily added via a selection of auth providers.

### Beauty is only skin deep...

Finally, we are able to assemble a single-purpose frontend using [Next.js](https://nextjs.org), [React](https://reactjs.org), [MobX](https://mobx.js.org), [MobX-state-tree](https://mobx-state-tree.js.org), and [Chakra UI](https://chakra-ui.com). The UI is a simple, infinitely-scrolling list hooked up to a GraphQL subscription with some nice touches like a fun loading animation and ”flash” highlighting of new and promoted items.

### ...but smart is sexy!

The most important aspect of this exercise is the heuristic algorithm. In addition to recency and count of recent purchases (defined as occurring in the last 48 hours), I choose to include time-of-day as a factor. This is simply based on the insight that breakfast foods (and brews) should be featured around breakfast time, and that we can infer which foods those are by looking at purchase frequencies in time buckets. To implement this heuristic efficiently, I used a PostgreSQL Materialized View to “bucket” Order Items by hour-of-day and Venue for only the last 48 hours. Hasura then exposes this view as efficient subscription which can be queried for only specific hours.

> PLEASE NOTE: Because the heuristic and UI are sensitive to time, the app includes some code to maintain "virtual time" based on the most recent order event. You can check the browser console for logs showing the current value of `virtualTime`.

The client subscribes to this view, specifying a time-window of ±2 hours from the current hour. Once the data is received, it is scored using a weighted algorithm and this heuristic scoring is used to sort (and re-sort) the list displayed to the user.

```typescript
    heuristicScore(now: Date) {
      const hourBandBoost = hoursDiff(now, self.hour_of_day) <= 2 ? 1.5 : 1.0;
      const recencyWeight = 0.5;
      const countWeight = 2;

      let score = 0;
      score += countWeight * self.count;
      score += recencyWeight * (60 / (30 + minAgo(now, self.last_order)));
      score *= hourBandBoost;

      return score;
    }
```

This heuristic can certainly be tuned and improved, but it feels pretty solid already.

I hope the above discussion makes sufficient sense. I’d welcome any feedback to help make more clear anything that is still murky.

## Installation

Most of the system is containerized via `docker-compose`, however, the `next`-powered frontend is allowed to run on the local machine for improved performance. All important functions are wrapped in Makefile targets, and the Makefiles are self-describing via a `help` target.

Mac & Linux:

```shell
git clone https://github.com/nprbst/brewpass
cd brewpass
make help              # prints available make targets
make web-install       # install node deps
```

(Not tested on Linux, but should work fine.)

## Usage examples

### Explore the project

```shell
make backend-up               # starts Docker containers, network, etc.
make backend-ps               # show Docker containers status
make backend-logs             # tail Docker container logs
^C # to exit log tailing

make web-dev                  # start next in development-mode
# or
make web-build web-start      # build and serve in production-mode
open http://localhost:3000/   # open your default browser
```

### Fire up the development environment

```shell
make backend-up               # start Docker containers
make web-dev                  # start next in development-mode
```

### Generate test data

```shell
cd go/beertruck
make help                     # prints available make targets
make build                    # build the `beertruck` binary
make venues menus             # generate fake data for Venues and Menus

open http://localhost:3000    # open your default browser
# or
make ios-sim                  # open iOS Simulator (must have XCode installed)

make orders-help              # print `beertruck` usage
make orders                   # generate orders with defaults

# generate orders at warp-speed!
make orders ARGS="--limit 500 --warp 10 --rate 5"
```

While `make orders` is running, you should be able to see the list of featured products updating in your browser.

## Release History

- 0.1.0
  - First proper release
  - Released 2020.10.6
