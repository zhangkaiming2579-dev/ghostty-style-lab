#!/bin/zsh
set -euo pipefail

cd -- "$(dirname "$0")"

PORT="${PORT:-5129}"
URL="http://localhost:${PORT}"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is required."
  echo "Install it from https://nodejs.org/ or run: brew install node"
  echo
  read -k 1 "?Press any key to close..."
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is required. It is usually installed with Node.js."
  echo
  read -k 1 "?Press any key to close..."
  exit 1
fi

echo "Starting Ghostty Style Lab..."
echo "URL: ${URL}"
echo

(
  for _ in {1..30}; do
    if curl -fsS "${URL}" >/dev/null 2>&1; then
      open "${URL}"
      exit 0
    fi
    sleep 0.3
  done
  open "${URL}"
) &

PORT="${PORT}" npm start
