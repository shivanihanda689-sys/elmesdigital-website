#!/usr/bin/env bash
set -euo pipefail

DEPLOY_DIR="/var/www/semleb/ElmesDigital"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "Building..."
npm run build --prefix "$SCRIPT_DIR"

echo "Deploying to $DEPLOY_DIR..."
sudo rm -rf "$DEPLOY_DIR/assets"
sudo cp -r "$SCRIPT_DIR/dist/assets" "$DEPLOY_DIR/assets"
sudo cp "$SCRIPT_DIR/dist/index.html" "$DEPLOY_DIR/index.html"

echo "Done. Deployed to $DEPLOY_DIR"
