#!/usr/bin/env bash
set -e

npm run build:prod
surge dist/cad-screen cad-screen.surge.sh
