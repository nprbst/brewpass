package graph

import "github.com/nprbst/chassis/graph/resolvers"

//go:generate go run github.com/99designs/gqlgen

// This file will not be regenerated automatically.

// Resolver serves as dependency injection for your app.
// Add any dependencies you require here.
type Resolver struct {
	Todos *resolvers.TodosResolver
}
