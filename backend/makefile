include .env
export

gin:
	@pp=$(shell python3 -c "print (${PORT} + 1)");  \
	gin --build cmd -i --bin bin/server --port $${pp} --appPort ${PORT}

run:
	@echo "building..."
	go build -o bin/ cmd/*	&& ./bin/server
	
test:
	# go test -v --failfast ./... -coverpkg ./... 
	gotest -failfast ./...

testv:
	gotest -v -failfast ./...


.PHONY: coverage
coverage:
	@mkdir -p coverage
	@go test -coverpkg=`go list ./... | grep -v "mocks"| tr '\n' ','` -coverprofile=coverage/cover.out ./... > /dev/null && go tool cover -func coverage/cover.out

docker-build:
	docker build -t wahidx/go_ws .

