build:
	sudo docker-compose -f docker-compose.dev.yml build

run:
	sudo docker-compose -f docker-compose.dev.yml up

run-silent:
	sudo docker-compose -f docker-compose.dev.yml up -d

run-build:
	sudo docker-compose -f docker-compose.dev.yml up --build

test:
	sudo docker-compose -f docker-compose.dev.yml run user npm run test-ci

check-db:
	sudo docker-compose -f docker-compose.dev.yml exec db psql -U postgres

down:
	sudo docker-compose -f docker-compose.dev.yml down