#!/bin/bash

env
if echo "${DRONE_BRANCH}" | grep -i feature; then
  npm install
  npm test
elif [ "${DRONE_BRANCH}" == "integration" ]; then
  npm install
  npm integration
  curl -sv "${ELASTICSEARCH_PORT_9200_TCP_ADDR}:${ELASTICSEARCH_PORT_9200_TCP_PORT}/health"
fi
