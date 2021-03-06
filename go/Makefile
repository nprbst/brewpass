include ../mk/Makefile.help

# Generate sources from schema.graphql
graphql-gen:
	@go generate gql/resolver.go
.PHONY: graphql-gen

# Build api-server binary
build: bin/api-server
.PHONY: build

SOURCES = $(wildcard **/*.go)
bin/api-server: ${SOURCES}
	@mkdir -p ./bin
	@go build -o ./bin/api-server ./api-server/cmd/api-server

# Clean up
clean: 
	@rm bin/api-server
.PHONY: clean

# Run air to hot-rebuild the api-server project
dev: clean
	@mkdir -p tmp/
	@echo -n "${PG_URL}" > tmp/postgres-url
	@air -c .air.conf
.PHONY: dev

# Run air to hot-rebuild the scratch project
scratch:
	@cd scratch; air -c ./.air.conf
.PHONY: scratch


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
