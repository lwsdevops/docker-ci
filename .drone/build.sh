#!/bin/bash

env
if echo "${DRONE_BRANCH}" | grep -i feature; then
  npm install
  npm test
  curl -sv "${ELASTICSEARCH_PORT_9200_TCP_ADDR}:${ELASTICSEARCH_PORT_9200_TCP_PORT}"
elif [ "${DRONE_BRANCH}" == "integration" ]; then
  curl -sv "${ELASTICSEARCH_PORT}"
fi
