#!/usr/bin/env bash
set -e

npm run build
surge dist/cad-board cad-board.surge.sh
