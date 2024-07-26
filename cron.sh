#!/usr/bin/env bash

cd /home/debian/skoh-dev
git fetch


# If branch out of date
if git status | grep -q 'Your branch is behind'; then
  echo "Updating repo skoh-dev"

  # Remove all non-commited modifs
  git reset --hard
  git pull

  docker compose build # rebuild
  docker compose down # down
  docker compose up -d # up
fi
