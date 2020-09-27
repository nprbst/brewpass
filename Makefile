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

# Generate sources from 
graphql-gen:
	@cd go;  make graphql-gen
	@cd web; yarn codegen
.PHONY: graphql-gen


# Build the necessary images for Docker Compose
backend-build:
	@docker-compose build
	# TODO: Could add gcloud setup here...
.PHONY: backend-build

# Start the backend services
backend-up:
	@docker-compose up --detach postgres hasura api-server nginx
.PHONY: backend-up

# Tail running docker-compose containers
backend-tail: 
	@docker-compose logs -f --tail=50 $(name)
.PHONY: backend-tail

# Show the running docker-compose containers
backend-ps:
	@docker-compose ps
.PHONY: backend-ps

# Stop the backend services
backend-down:
	@docker-compose down
.PHONY: backend-down

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
web-start: web-build
	@cd web && yarn start
.PHONY: web-start