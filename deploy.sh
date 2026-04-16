#!/usr/bin/env bash
set -euo pipefail

DEPLOY_DIR="/var/www/semleb/ElmesDigital"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "Building..."
npm run build --prefix "$SCRIPT_DIR"

echo "Deploying to $DEPLOY_DIR..."
sudo rsync -a --delete "$SCRIPT_DIR/dist/" "$DEPLOY_DIR/"

echo "Done. Deployed to $DEPLOY_DIR"
