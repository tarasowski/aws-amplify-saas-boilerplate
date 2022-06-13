#!/bin/bash

BRANCH=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

if [[ $BRANCH == "master"  ]] ; then 
  echo "This is our main branch"
  npm run build:master
else 
  echo "This is not our main branch"
  npm run build:develop
fi
