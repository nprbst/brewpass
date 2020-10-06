include ../../mk/Makefile.help

NAME = beertruck

# Install query-overpass cli
query-overpass-install:
	@npm install -g query-overpass
.PHONY: query-overpass-install

# Query the OSM Overpass API
query-overpass: osm/result.osm.json
osm/result.osm.json: osm/query.ql
	@query-overpass osm/query.ql > osm/result.osm.json

# Clean up from previous builds
clean:
	@rm -f ../bin/${NAME} ||:

# Build binary
build: ../bin/${NAME}

SOURCES = $(wildcard *.go) $(wildcard */*.go) $(wildcard */*/*.go) $(wildcard **/*.go)
../bin/${NAME}: ${SOURCES}
	@mkdir -p ../bin
	@go build -o ../bin/${NAME} ./cmd/${NAME}

# Arguments for the target
ARGS?=""

# Run the binary with args
run: build
	@../bin/${NAME} ${ARGS}

# Generate venues from OpenStreetMap data
venues: build
	@../bin/${NAME} generate venues --file osm/result.osm.json ${ARGS}

# Generate menu items for each venue
menus: build
	@../bin/${NAME} generate menus ${ARGS}

# Generate order activity within a time distortion field
orders: build
	@../bin/${NAME} generate orders ${ARGS}

# Show help for `make orders`
orders-help: build
	@../bin/${NAME} generate orders --help