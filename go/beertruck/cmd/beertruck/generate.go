package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"math/rand"
	"strings"
	"time"

	"github.com/benbjohnson/clock"
	"github.com/brianvoe/gofakeit/v5"
	fake "github.com/brianvoe/gofakeit/v5"
	"github.com/nprbst/brewpass/beertruck/db"
	"github.com/nprbst/brewpass/beertruck/osm"
	"github.com/urfave/cli"
)

var (
	generateCommand = cli.Command{
		Name:    "generate",
		Aliases: []string{"gen"},
		Subcommands: []cli.Command{
			venuesCommand,
			menusCommand,
			activityCommand,
		},
	}

	venuesCommand = cli.Command{
		Name:   "venues",
		Usage:  "Add venues to database",
		Flags:  []cli.Flag{flagFile, flagLimit, flagPosgtresURI},
		Action: loadvenues,
	}

	menusCommand = cli.Command{
		Name:   "menus",
		Usage:  "Add menu items to database",
		Flags:  []cli.Flag{flagItems, flagPosgtresURI},
		Action: fakeMenus,
	}

	activityCommand = cli.Command{
		Name:    "activity",
		Aliases: []string{"act"},
		Usage:   "simulate purchase activity",
		Flags:   []cli.Flag{flagLimit, flagRate, flagStart, flagWarp},
		Action:  generateActivity,
	}
)

func loadvenues(c *cli.Context) error {
	f := c.String(flagFile.Name)
	fmt.Printf("Importing from: %s\n", f)

	data, err := ioutil.ReadFile(f)
	if err != nil {
		return err
	}

	results := &osm.QueryResults{}
	if err := json.Unmarshal(data, results); err != nil {
		return err
	}

	limit := c.Int(flagLimit.Name)
	if limit > 0 {
		results.Features = results.Features[:limit]
	}

	// insert into DB
	fmt.Printf("OSM Features: %d\n", len(results.Features))

	pgURI := c.String(flagPosgtresURI.Name)
	store, err := db.New(pgURI)
	if err != nil {
		return err
	}

	ctx := context.Background()
	count := 0
	for _, f := range results.Features {
		name := f.Properties.Tags["name"]
		if name == "" {
			continue
		}
		venue := db.Venue{
			OsmID: f.ID,
			Name:  name,
			Tags:  f.Properties.Tags,
			Long:  f.Geometry.Coordinates.Long(),
			Lat:   f.Geometry.Coordinates.Lat(),
		}
		_, err := store.CreateVenue(ctx, venue)
		if err != nil && err != db.ErrNoRowsCreated {
			fmt.Printf("\nErrorred inserting Venue: %#v\n", venue)
			return err
		}
		count++
	}
	fmt.Printf("Venues Created: %d\n", count)

	return nil
}

func addMenuItem(ctx context.Context, store *db.DB, venueID uint64, itemType db.MenuItemType, itemName string) error {
	_, err := store.CreateMenuItem(ctx, db.MenuItem{
		VenueID:  venueID,
		ItemType: itemType,
		Name:     itemName,
	})
	return err
}

func fakeMenus(c *cli.Context) error {
	items := c.Int(flagItems.Name)
	fmt.Printf("Faking up to %d menu items...\n", items)

	pgURI := c.String(flagPosgtresURI.Name)
	store, err := db.New(pgURI)
	if err != nil {
		return err
	}

	fake.Seed(rand.Int63())

	ctx := context.Background()
	venues, err := store.AllVenues(ctx)
	for _, v := range venues {
		fmt.Printf("%0.5d - %s\n", v.ID, v.Name)
		for i := 0; i < items; i++ {
			// There will be some ignore duplicate conflicts, so up-to items limit, but not always
			addMenuItem(ctx, store, v.ID, db.MenuItemTypeBeer, fake.BeerName())
			addMenuItem(ctx, store, v.ID, db.MenuItemTypeBreakfast, strings.Title(fake.Breakfast()))
			addMenuItem(ctx, store, v.ID, db.MenuItemTypeSnack, strings.Title(fake.Snack()))
			addMenuItem(ctx, store, v.ID, db.MenuItemTypeLunch, strings.Title(fake.Lunch()))
			addMenuItem(ctx, store, v.ID, db.MenuItemTypeDinner, strings.Title(fake.Dinner()))
			addMenuItem(ctx, store, v.ID, db.MenuItemTypeDessert, strings.Title(fake.Dessert()))
		}

	}

	// fmt.Println("\nBreakfast")
	// for i := 0; i < items; i++ {
	// 	food := gofakeit.Breakfast()
	// 	fmt.Println(food)
	// }

	// fmt.Println("\nLunch")
	// for i := 0; i < items; i++ {
	// 	food := gofakeit.Lunch()
	// 	fmt.Println(food)
	// }

	// fmt.Println("\nSnacks")
	// for i := 0; i < items; i++ {
	// 	food := gofakeit.Snack()
	// 	fmt.Println(food)
	// }

	// fmt.Println("\nDinner")
	// for i := 0; i < items; i++ {
	// 	food := gofakeit.Dinner()
	// 	fmt.Println(food)
	// }

	// fmt.Println("\nDesert")
	// for i := 0; i < items; i++ {
	// 	food := gofakeit.Dessert()
	// 	fmt.Println(food)
	// }

	// fmt.Println("\nBeverages")
	// for i := 0; i < items; i++ {
	// 	bev := gofakeit.BeerName()
	// 	fmt.Println(bev)
	// }

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
