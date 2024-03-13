#!/usr/bin/env bash


while true; do
  python3 main.py &> output.log &
  PID_PYTHON = $!
  sleep 30
  kill -9 "$PID_PYTHON"
done

