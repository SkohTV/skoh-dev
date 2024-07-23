#!/usr/bin/env bash

cd ~/skoh-dev
git fetch


if git status | grep -q 'Your branch is behind'; then
  echo "Updating repo skoh-dev"

  git pull

  docker compose down
  docker compose build
  docker compose up -d
fi
