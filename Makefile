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

# Name of target
NAME ?= 

# Install the hygen tool
hygen-install:
	@npm install -g hygen
	@hygen init self
.PHONY: hygen-install

# Create a new hygen generator
hygen-new:
	@hygen generator new $(NAME)
.PHONY: hygen-new

# Generate sources from 
graphql-gen:
	@cd go;  make graphql-gen
	@cd web; make mst-gql-gen
.PHONY: graphql-gen


# Build the necessary images for Docker Compose
backend-build:
	@docker-compose build
	# TODO: Could add gcloud setup here...
.PHONY: backend-build

# Start the backend services
backend-up:
	@docker-compose up --detach postgres hasura nginx
.PHONY: backend-up

# Tail running docker-compose containers
backend-logs: 
	@docker-compose logs -f --tail=50 $(NAME)
.PHONY: backend-logs

# Show the running docker-compose containers
backend-ps:
	@docker-compose ps
.PHONY: backend-ps

# Stop the backend services
backend-down:
	@docker-compose down
.PHONY: backend-down

# Clean up backend docker volumes
backend-clean:
	@docker volume rm brewpass_postgres_data
.PHONY: backend-clean

# Restart the backend services
backend-restart:
	@docker-compose restart
.PHONY: backend-restart


# Install dependencies for the frontend
web-install:
	@cd web && yarn install
.PHONY: web-install

# Start the frontend in development mode
web-dev:
	@cd web && yarn dev
.PHONY: web-dev

# Build the frontend in production mode
web-build:
	@cd web && yarn build
.PHONY: web-build

# Start the frontend in production mode
web-start:
	@cd web && yarn start
.PHONY: web-start

# Boot the iOS Simulator and open webapp
ios-sim:
	@echo Starting iOS Simulator...
	@/Applications/Xcode.app/Contents/Developer/Applications/Simulator.app/Contents/MacOS/Simulator &
	@sleep 5
	@echo Booting iPhone 11...
	@xcrun simctl boot "iPhone 11" ||:
	@echo Opening Safari...
	@xcrun simctl openurl booted http://localhost:3000/
.PHONY: web-start