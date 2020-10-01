package main

import (
	"fmt"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/gin-contrib/gzip"
	"github.com/gin-gonic/gin"
	"github.com/nprbst/brewpass/graph"
	"github.com/nprbst/brewpass/graph/server"
	cors "github.com/rs/cors/wrapper/gin"
	"github.com/urfave/cli"
)

var (
	devEndpoints = map[string]gin.HandlerFunc{
		"/playground": playgroundHandler(),
	}
)

func serveCommand(c *cli.Context) error {
	// ctx := context.Background()

	r := gin.Default()
	r.Use(cors.New(cors.Options{
		// TODO: Configure AllowedOrigins
		AllowedOrigins:   []string{"*"},
		AllowCredentials: true,
	}))
	// TODO: Use Firebase Auth
	r.Use(gzip.Gzip(gzip.DefaultCompression))

	resolver := &graph.Resolver{}
	r.POST("/graphql", graphqlHandler(resolver))

	if c.Bool(flagDev.Name) {
		for route, handler := range devEndpoints {
			r.Any(route, handler)
		}
	}

	r.GET("/", func(c *gin.Context) {
		c.String(200, "ok")
	})

	return r.Run(fmt.Sprintf(":%d", port))
}

func graphqlHandler(resolver *graph.Resolver) gin.HandlerFunc {
	h := handler.NewDefaultServer(
		server.NewExecutableSchema(server.Config{Resolvers: resolver}))

	return func(c *gin.Context) {
		h.ServeHTTP(c.Writer, c.Request)
	}
}

func playgroundHandler() gin.HandlerFunc {
	h := playground.Handler("GraphQL", "/graphql")

	return func(c *gin.Context) {
		h.ServeHTTP(c.Writer, c.Request)
	}
}
