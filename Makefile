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
	@cd go && go generate gql/resolver.go
	# TODO: Add generation for web here...
.PHONY: graphql-gen

# Build the necessary images for Docker Compose
docker-build:
	@docker-compose build
	# TODO: Could add gcloud setup here...
.PHONY: docker-build

# Start the backend services: nginx, api-server, hasura, postgres, db-migrations
backend-start:
	@docker-compose up --detach
.PHONY: backend-start

# Stop the backend services: nginx, api, hasura, postgres, db-migrations
backend-stop:
	@docker-compose down
.PHONY: backend-stop


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
