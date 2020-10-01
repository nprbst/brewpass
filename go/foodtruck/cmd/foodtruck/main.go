package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"math/rand"
	"os"
	"strings"
	"time"

	"github.com/benbjohnson/clock"
	"github.com/brianvoe/gofakeit/v5"
	"github.com/urfave/cli"
)

var (
	debug bool

	flagConfig = cli.StringFlag{
		Name:  "config",
		Usage: "load config file",
	}
	flagDebug = cli.BoolFlag{
		Name:        "debug",
		Usage:       "run in debug mode",
		Destination: &debug,
	}
	flagFile = cli.StringFlag{
		Name:  "file",
		Usage: "input file",
	}
	flagItems = cli.IntFlag{
		Name:  "items",
		Usage: "limit items",
		Value: 20,
	}
	flagLimit = cli.IntFlag{
		Name:  "limit",
		Usage: "limit inputs",
		Value: 50,
	}
	flagRate = cli.IntFlag{
		Name:  "rate",
		Usage: "seconds between purchases",
		Value: 15,
	}
	flagStart = cli.DurationFlag{
		Name:  "start",
		Usage: "start at time offset",
	}
	flagWarp = cli.Int64Flag{
		Name:  "warp",
		Usage: "factor by which to warp time",
		Value: 10,
	}

	appFlags = []cli.Flag{flagConfig}

	appCommands = []cli.Command{
		restaurantsCommand,
		menusCommand,
		generateCommand,
	}
)

func main() {
	app := cli.NewApp()
	app.Name = "foodtruck"
	app.Usage = "Deliver the goods!"
	app.Flags = appFlags
	app.Commands = appCommands

	err := app.Run(os.Args)
	if err != nil {
		log.Fatalf("ERROR: %s\n", err.Error())
	}
}

var (
	restaurantsCommand = cli.Command{
		Name:    "restaurants",
		Usage:   "Operate on restaurants",
		Aliases: []string{"r"},
		Subcommands: []cli.Command{
			{
				Name:   "import",
				Usage:  "load restaurants into database",
				Flags:  []cli.Flag{flagFile, flagLimit},
				Action: loadRestaurants,
			},
		},
	}

	menusCommand = cli.Command{
		Name:    "menus",
		Usage:   "Operate on menus",
		Aliases: []string{"m"},
		Subcommands: []cli.Command{
			{
				Name:   "fake",
				Usage:  "insert fake menus into database",
				Flags:  []cli.Flag{flagItems},
				Action: fakeMenus,
			},
		},
	}

	generateCommand = cli.Command{
		Name:    "generate",
		Aliases: []string{"gen"},
		Subcommands: []cli.Command{
			{
				Name:    "activity",
				Aliases: []string{"act"},
				Usage:   "simulate purchase activity",
				Flags:   []cli.Flag{flagLimit, flagRate, flagStart, flagWarp},
				Action:  generateActivity,
			},
		},
	}
)

// Generated at https://mholt.github.io/json-to-go/
type OSM struct {
	Type     string `json:"type"`
	Features []struct {
		Type       string `json:"type"`
		ID         string `json:"id"`
		Properties struct {
			Type string `json:"type"`
			ID   string `json:"id"`
			Tags struct {
				Amenity string `json:"amenity"`
				Name    string `json:"name"`
			} `json:"tags"`
			Relations []interface{} `json:"relations"`
			Meta      struct {
			} `json:"meta"`
		} `json:"properties"`
		Geometry struct {
			Type        string    `json:"type"`
			Coordinates []float64 `json:"coordinates"`
		} `json:"geometry"`
	} `json:"features"`
}

func loadRestaurants(c *cli.Context) error {
	f := c.String(flagFile.Name)
	fmt.Printf("Importing from: %s\n", f)

	data, err := ioutil.ReadFile(f)
	if err != nil {
		return err
	}

	osm := &OSM{}
	if err := json.Unmarshal(data, osm); err != nil {
		return err
	}

	limit := c.Int(flagLimit.Name)
	if limit > 0 {
		osm.Features = osm.Features[:limit]
	}

	// insert into DB
	fmt.Printf("n%+v\n\nOSM Features: %d\n", osm.Features, len(osm.Features))

	return nil
}

func fakeMenus(c *cli.Context) error {
	items := c.Int(flagItems.Name)
	fmt.Printf("Faking %d menu items...\n", items)

	gofakeit.Seed(rand.Int63())

	fmt.Println("\nBreakfast")
	for i := 0; i < items; i++ {
		food := gofakeit.Breakfast()
		fmt.Println(food)
	}

	fmt.Println("\nLunch")
	for i := 0; i < items; i++ {
		food := gofakeit.Lunch()
		fmt.Println(food)
	}

	fmt.Println("\nSnacks")
	for i := 0; i < items; i++ {
		food := gofakeit.Snack()
		fmt.Println(food)
	}

	fmt.Println("\nDinner")
	for i := 0; i < items; i++ {
		food := gofakeit.Dinner()
		fmt.Println(food)
	}

	fmt.Println("\nDesert")
	for i := 0; i < items; i++ {
		food := gofakeit.Dessert()
		fmt.Println(food)
	}

	fmt.Println("\nBeverages")
	for i := 0; i < items; i++ {
		bev := gofakeit.BeerName()
		fmt.Println(bev)
	}

	return nil
}

func generateActivity(c *cli.Context) error {
	rate := c.Int64(flagRate.Name)
	warp := c.Int64(flagWarp.Name)
	limit := c.Int(flagLimit.Name)

	fmt.Printf("Generating activity every %d seconds, warp factor %d, limit %d.\n", rate, warp, limit)

	mock := clock.NewMock()
	mock.Set(time.Now().Add(c.Duration(flagStart.Name)))
	// TODO: mock.Set if start-time is set
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

	fmt.Printf("\n%s - Purchased %+v", time.Now().Format(time.RFC3339),
		strings.Join(fakeOrder(time.Now()), " and "))

	count := 1
	for t := range tick.C {
		count++
		if count > limit {
			fmt.Print("\n\nDone.\n")
			break
		}
		order := strings.Join(fakeOrder(t), " and ")
		if len(order) > 0 {
			fmt.Printf("\n%s - Purchased %s", t.Format(time.RFC3339), order)
		}
	}

	return nil
}

func fakeOrder(t time.Time) []string {
	switch t.Hour() {
	case 0, 1, 2, 3, 4, 5:
		return []string{}
	case 6, 7, 8:
		return fakeBreakfast()
	case 9, 10, 14, 15, 16, 22, 23:
		return fakeSnacks()
	case 11, 12, 13:
		return fakeLunch()
	case 17, 18, 19:
		return fakeDinner()
	case 20, 21:
		return fakeDessert()
	default:
		return []string{}
	}
}

func fakeBreakfast() (order []string) {
	return []string{
		gofakeit.Breakfast(),
		gofakeit.BeerName(),
	}
}

func fakeSnacks() (order []string) {
	return []string{
		gofakeit.Snack(),
		gofakeit.Snack(),
		gofakeit.BeerName(),
	}
}

func fakeLunch() (order []string) {
	return []string{
		gofakeit.Lunch(),
		gofakeit.BeerName(),
	}
}

func fakeDinner() (order []string) {
	return []string{
		gofakeit.Dinner(),
		gofakeit.BeerName(),
	}
}

func fakeDessert() (order []string) {
	return []string{
		gofakeit.Dessert(),
		gofakeit.BeerName(),
		gofakeit.BeerName(),
	}
}
