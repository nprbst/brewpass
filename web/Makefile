include ../mk/Makefile.help

# Run in development mode
dev:
	@yarn dev
.PHONY: dev

# Build dist
build: 
	@yarn build
.PHONY: build

# Serve dist
start: 
	@yarn start
.PHONY: start

# Scaffold mst-gql generated sources
mst-gql-gen: 
	@yarn mst-gql \
		--roots 'order_items_by_hour' \
		--excludes 'nearby_venues,venues,venues_by_pk,venues_aggregate,venues_var_samp_fields' \
		--format ts \
		http://localhost:8080/v1/graphql
.PHONY: mst-gql-gen