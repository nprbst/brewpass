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


# Install the hasura CLI
install:
	@curl -L https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh | INSTALL_PATH=${HOME}/bin bash
.PHONY: install

# Export Hasura metadata
console:
	@hasura console
.PHONY: console

# Export Hasura metadata
export:
	@hasura metadata export --skip-update-check
.PHONY: export

# Create a new migration with name=<name>
migrate-create:
	@hasura migrate create $(name) --up-sql "" --down-sql ""
.PHONY: migrate-create

# Apply all 'up' migrations
migrate-apply:
	@hasura migrate apply
.PHONY: migrate-apply

# Status of migrations
migrate-status:
	@hasura migrate status
.PHONY: migrate-status