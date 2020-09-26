package main

import (
	"log"
	"os"

	"github.com/urfave/cli"
)

var (
	debug bool
	port  int

	flagConfig = cli.StringFlag{
		Name:  "config",
		Usage: "load config file",
	}
	flagDebug = cli.BoolFlag{
		Name:        "debug",
		Usage:       "run in debug mode",
		Destination: &debug,
	}
	flagDev = cli.BoolFlag{
		Name:   "dev",
		Usage:  "run in development mode",
		EnvVar: "DEV_MODE",
	}
	flagPort = cli.IntFlag{
		Name:        "port",
		Usage:       "listen on this port",
		Value:       9090,
		EnvVar:      "PORT",
		Destination: &port,
	}

	appFlags = []cli.Flag{flagConfig, flagDebug}

	appCommands = []cli.Command{
		{
			Name:  "serve",
			Usage: "start the server",
			Flags: []cli.Flag{
				flagDev,
				flagPort,
			},
			Action: serveCommand,
		},
	}
)

func main() {
	app := cli.NewApp()
	app.Name = "chassis"
	app.Usage = ""
	app.Flags = appFlags
	app.Commands = appCommands

	err := app.Run(os.Args)
	if err != nil {
		log.Fatalf("ERROR: %s\n", err.Error())
	}
}
