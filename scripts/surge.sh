#!/usr/bin/env bash
set -e

npm run build
surge dist/cad-screen cad-screen.surge.sh
