#!/bin/bash

env
if echo "${DRONE_BRANCH}" | grep -i feature; then
  npm install
  npm test
  git checkout integration
  git merge "${DRONE_BRANCH}" .
  git push origin integration
elif [ "${DRONE_BRANCH}" == "integration" ]; then
  curl -sv "${ELASTICSEARCH_PORT_9200_TCP_ADDR}:${ELASTICSEARCH_PORT_9200_TCP_PORT}/health" || exit 1
  git checkout integration
  git merge "${DRONE_BRANCH}" .
  git push origin master 
fi
