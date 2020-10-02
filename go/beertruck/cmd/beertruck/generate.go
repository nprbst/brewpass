package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"math/rand"
	"strings"
	"time"

	fake "github.com/brianvoe/gofakeit/v5"
	"github.com/nprbst/brewpass/beertruck/db"
	"github.com/nprbst/brewpass/beertruck/osm"
	"github.com/urfave/cli"
)

func init() {
	rand.Seed(time.Now().UnixNano())
}

var (
	generateCommand = cli.Command{
		Name:    "generate",
		Aliases: []string{"gen"},
		Flags:   []cli.Flag{flagPosgtresURI},
		Subcommands: []cli.Command{
			venuesCommand,
			menusCommand,
			ordersCommand,
		},
	}

	venuesCommand = cli.Command{
		Name:   "venues",
		Usage:  "Add venues to database",
		Flags:  []cli.Flag{flagFile, flagLimit},
		Action: loadvenues,
	}

	menusCommand = cli.Command{
		Name:   "menus",
		Usage:  "Add menu items to database",
		Flags:  []cli.Flag{flagItems},
		Action: fakeMenus,
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

	pgURI := c.GlobalString(flagPosgtresURI.Name)
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

	pgURI := c.GlobalString(flagPosgtresURI.Name)
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

	return nil
}
