include ../mk/Makefile.help

# Generate sources from schema.graphql
graphql-gen:
	
.PHONY: graphql-gen

# Run air to hot-rebuild the api-server project
dev:
	@yarn dev
.PHONY: dev

# Build api-server binary
build: 
	@yarn build
.PHONY: build

# Go run api-server
start: build
	@yarn start
.PHONY: start
