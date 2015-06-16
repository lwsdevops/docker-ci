#!/bin/bash

env
if echo "${DRONE_BRANCH}" | grep -i feature; then
  npm install
  npm test
elif [ "${DRONE_BRANCH}" == "integration" ]; then
  curl -sv "${ELASTICSEARCH_PORT}"i
fi
