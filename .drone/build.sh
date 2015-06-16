#!/bin/bash

env
if echo "${DRONE_BRANCH}" | grep -i feature; then
  npm install
  npm test
fi
