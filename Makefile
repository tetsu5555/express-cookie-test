# start/stop docker cotnainers by docker-compose
# default command
up: down
	docker-compose up -d
down:
	docker-compose down

# run shell in container
.PHONY: app
app:
	docker exec -it halt-mock-server sh

# run npm install
install:
	docker exec --tty halt-mock-server npm install

# start processes
start:
	docker exec --tty halt-mock-server npm start

# test
test:
	docker exec --tty halt-mock-server npm run test
