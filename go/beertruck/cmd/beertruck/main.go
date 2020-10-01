package main

import (
	"log"
	"os"

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
	flagPosgtresURI = cli.StringFlag{
		Name:   "postgres-uri",
		Usage:  "connection string for postgres db",
		EnvVar: "PG_URL",
		Value:  "postgres://brewpass-dev:brewpass-dev@postgres:5432/brewpass-dev?sslmode=disable",
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
		generateCommand,
	}
)

func main() {
	app := cli.NewApp()
	app.Name = "beertruck"
	app.Usage = "Deliver the goods!"
	app.Flags = appFlags
	app.Commands = appCommands

	err := app.Run(os.Args)
	if err != nil {
		log.Fatalf("ERROR: %s\n", err.Error())
	}
}
