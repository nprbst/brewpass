package main

import (
	"context"
	"fmt"
	"math"
	"math/rand"
	"time"

	"github.com/benbjohnson/clock"
	"github.com/nprbst/brewpass/beertruck/db"
	"github.com/urfave/cli"
)

var (
	ordersCommand = cli.Command{
		Name:   "orders",
		Usage:  "simulate order activity",
		Flags:  []cli.Flag{flagLimit, flagRate, flagStart, flagWarp},
		Action: generateOrders,
	}
)

func generateOrders(c *cli.Context) error {
	rate := c.Int64(flagRate.Name)
	warp := c.Int64(flagWarp.Name)
	limit := c.Int(flagLimit.Name)

	fmt.Printf("Generating activity every %d seconds, warp factor %d, limit %d.\n", rate, warp, limit)

	pgURI := c.GlobalString(flagPosgtresURI.Name)
	store, err := db.New(pgURI)
	if err != nil {
		return err
	}

	mock := clock.NewMock()
	mock.Set(time.Now().Add(c.Duration(flagStart.Name)))
	tick := mock.Ticker(time.Duration(rate) * time.Second)
	defer tick.Stop()

	// time-warp
	go func(warpFactor int64) {
		step := 100 * time.Millisecond
		steps := time.NewTicker(step)
		for range steps.C {
			fmt.Print(".")
			mock.Add(time.Duration(warpFactor) * step)
		}
	}(warp)

	ctx := context.Background()
	count := 1
	for t := range tick.C {
		count++
		if count > limit {
			fmt.Print("\n\nDone.\n")
			break
		}
		venue, err := randVenue(ctx, store)
		if err != nil {
			return err
		}

		om := &orderMaker{venue: venue, store: store}
		order, err := om.makeOrder(t)
		if len(order.Items) > 0 {
			ord, err := store.CreateOrder(ctx, *order)
			if err != nil {
				fmt.Printf("\nERROR: %s\n", err)
			} else {
				fmt.Printf("\n%s - Order [%d]: %s", t.Format(time.RFC3339), ord.ID, ord.Display)
			}
		}
	}

	return nil
}

type orderMaker struct {
	venue *db.Venue
	store *db.DB
}

func randIndex(len int) int {
	max := float64(len - 1)
	div := 4.0 / float64(len)
	norm := rand.NormFloat64()
	return int(
		math.Min(max,
			math.Ceil(
				math.Abs(norm/div))))
}

func randVenue(ctx context.Context, store *db.DB) (*db.Venue, error) {
	// NOTE: This is terribly inefficient. But for this use-case it doesn't matter.
	venues, err := store.AllVenues(ctx)
	if err != nil {
		return nil, err
	}

	return venues[randIndex(len(venues))], nil
}

func (om *orderMaker) makeOrder(t time.Time) (*db.CreateOrderRequest, error) {
	switch t.Hour() {
	case 6, 7, 8:
		return om.orderBeerWith(db.MenuItemTypeBreakfast, t)
	case 11, 12, 13:
		return om.orderBeerWith(db.MenuItemTypeLunch, t)
	case 17, 18, 19:
		return om.orderBeerWith(db.MenuItemTypeDinner, t)
	case 20, 21:
		return om.orderBeerWith(db.MenuItemTypeDessert, t)
	case 0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 16, 22, 23:
		return om.orderBeerWith(db.MenuItemTypeSnack, t)
	default:
		return &db.CreateOrderRequest{}, nil
	}
}

func (om *orderMaker) orderBeerWith(itemType db.MenuItemType, t time.Time) (*db.CreateOrderRequest, error) {
	var items []*db.MenuItem

	beers, err := om.store.AllMenuItemsByVenueAndType(context.Background(), om.venue.ID, db.MenuItemTypeBeer)
	if err != nil {
		return nil, err
	}

	// 1 beer...always
	items = append(items, beers[randIndex(len(beers))])

	menuItems, err := om.store.AllMenuItemsByVenueAndType(context.Background(), om.venue.ID, itemType)
	if err != nil {
		return nil, err
	}

	// 1-3 menuItems
	for i := rand.Intn(2) + 1; i > 0; i-- {
		items = append(items, menuItems[randIndex(len(menuItems))])
	}

	return &db.CreateOrderRequest{
		Venue:     om.venue,
		Items:     items,
		OrderedAt: t,
	}, nil
}
