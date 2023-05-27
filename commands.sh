docker login -u fergut
docker build -t traffic-test-service .
docker image tag traffic-test-service fergut/traffic-test-service:latest
docker image push fergut/traffic-test-service:latest

docker pull fergut/traffic-test-service:latest
docker run -p 7000:7000 fergut/traffic-test-service:latest


