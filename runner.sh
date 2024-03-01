#!/usr/bin/env bash

nohup nix develop --command python main.py > output.log 2>&1 &
