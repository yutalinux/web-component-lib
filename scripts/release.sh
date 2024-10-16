#!/bin/bash

if [ $# -eq 1 ]; then
  if [[ $1 =~ v([0-9]+\.){1}[0-9]+(\.[0-9]+) ]]; then
    ./scripts/check.sh
    git tag -a $1
    git push origin $1
  fi
fi

exit 1
