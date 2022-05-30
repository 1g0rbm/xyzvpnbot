start-docker: docker-down docker-pull docker-build docker-up

docker-up:
	docker-compose --env-file .env up --build -d

docker-down:
	docker-compose --env-file .env down --remove-orphans

docker-pull:
	docker-compose --env-file .env pull

docker-build:
	docker-compose --env-file .env build

start-node-dev:
	npm run dev

start-ngrok:
	ngrok http 8080

test:
	npm run test
