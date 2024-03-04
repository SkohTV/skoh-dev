#!/usr/bin/env bash

PID=$(lsof -t -i:443)

if [ -n "$PID" ]; then
  kill -9 $PID
fi

nix develop --command python main.py &> output.log
