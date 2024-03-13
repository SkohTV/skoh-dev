#!/usr/bin/env bash


PID=$(lsof -t -i :443)

if [[ -n "$PID" ]]; then
  kill -9 "$PID"
fi


python3 main.py &> output.log
