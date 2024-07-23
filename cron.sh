#!/usr/bin/env bash

cd /home/debian/skoh-dev
git fetch


if git status | grep -q 'Your branch is behind'; then
  echo "Updating repo skoh-dev"

  git reset --hard
  git pull

  docker compose down
  docker compose build
  docker compose up -d
fi
