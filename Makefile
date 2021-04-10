SHELL := /bin/bash # Use bash syntax
CURRENT_DIR := $(shell pwd)
RUNNING_NETWORK := $(shell sudo docker network ls -f name=lendit_gateway | grep lendit_gateway )


build:
	sudo docker-compose -f docker-compose.dev.yml build

run:
	@if [[ -n "${RUNNING_NETWORK}" ]]; then \
		sudo docker-compose -f docker-compose.dev.yml up; \
	else \
		sudo docker network create lendit_gateway; \
		sudo docker-compose -f docker-compose.dev.yml up; \
	fi
	

run-silent:
	@if [[ -n "${RUNNING_NETWORK}" ]]; then \
		sudo docker-compose -f docker-compose.dev.yml up -d; \
	else \
		sudo docker network create lendit_gateway; \
		sudo docker-compose -f docker-compose.dev.yml up -d; \
	fi

run-build:
	@if [[ -n "${RUNNING_NETWORK}" ]]; then \
		sudo docker-compose -f docker-compose.dev.yml up --build; \
	else \
		sudo docker network create lendit_gateway; \
		sudo docker-compose -f docker-compose.dev.yml up --build; \
	fi

down:
	sudo docker-compose -f docker-compose.dev.yml down

lint: 
	sudo docker-compose -f docker-compose.dev.yml run user npm run lint

test:
	sudo docker-compose -f docker-compose.dev.yml run user npm run test-ci

check-db:
	sudo docker-compose -f docker-compose.dev.yml exec db psql -U postgres

cov:
	sudo docker-compose -f docker-compose.dev.yml run user npm run cov
