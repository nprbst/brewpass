# Show this help prompt.
help:
	@ echo
	@ echo '  Usage:'
	@ echo ''
	@ echo '    make <target> [flags...]'
	@ echo ''
	@ echo '  Targets:'
	@ echo ''
	@ awk '/^#/{ comment = substr($$0,3) } comment && /^[a-zA-Z][a-zA-Z0-9_-]+ ?:/{ print "   ", $$1, comment }' $(MAKEFILE_LIST) | column -t -s ':' | sort
	@ echo ''
	@ echo '  Flags:'
	@ echo ''
	@ awk '/^#/{ comment = substr($$0,3) } comment && /^[a-zA-Z][a-zA-Z0-9_-]+ ?\?=/{ print "   ", $$1, $$2, comment }' $(MAKEFILE_LIST) | column -t -s '?=' | sort
	@ echo ''
.PHONY: help
# CREDIT: https://github.com/ianstormtaylor/makefile-help

# Generate sources from schema.graphql
graphql-gen:
	@go generate gql/resolver.go
.PHONY: graphql-gen

# Build api-server binary
api-server: bin/api-server
.PHONY: api-server

SOURCES = $(wildcard **/*.go)
bin/api-server: ${SOURCES}
	@mkdir -p ./bin
	@go build -o ./bin/api-server ./api-server/cmd/api-server

# Clean up
clean: 
	@rm bin/api-server
.PHONY: clean

# Run air to hot-rebuild this project
dev: clean
	@mkdir -p tmp/
	@echo -n "${PG_URL}" > tmp/postgres-url
	@air
.PHONY: dev


# Build the Docker image
docker-build:
	@docker build
.PHONY: docker-build

# Go run api-server
run:
	@go run api-server/cmd/api-server/*
.PHONY: run

# Go mod tidy
tidy:
	@go mod tidy
.PHONY: tidy
