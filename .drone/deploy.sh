#!/bin/bash
set -e

# set vars
export DOCKER_HOST="tcp://dev-docker-host04.nj01.shuttercorp.net:2375"
DOCKER_REGISTRY="docker-registry.dev.shuttercorp.net"
PROJECT_NAME=${DRONE_BUILD_DIR##*/}
IMAGE_NAME="development/${PROJECT_NAME}"


#pull new build
docker pull "${DOCKER_REGISTRY}/${IMAGE_NAME}:${DRONE_COMMIT}"

# stop already running containers
for i in `docker ps -qa -f "name=${PROJECT_NAME}" -f "status=running"`; do
  docker stop $i
done

# remove existing containers
for i in `docker ps -qa -f "name=${PROJECT_NAME}"`; do
  docker rm -f $i
done

# start new container
docker run --name docker-ci -p 8080:8080 -d "${DOCKER_REGISTRY}/${IMAGE_NAME}:${DRONE_COMMIT}" 
