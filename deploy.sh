#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

PYTHON_BIN="${PYTHON_BIN:-python3}"
VENV_DIR="${VENV_DIR:-.venv}"

if ! command -v "$PYTHON_BIN" >/dev/null 2>&1; then
  echo "ERROR: '$PYTHON_BIN' not found. Install Python 3 or set PYTHON_BIN=python." >&2
  exit 1
fi

if [ ! -d "$VENV_DIR" ]; then
  "$PYTHON_BIN" -m venv "$VENV_DIR"
fi

# shellcheck disable=SC1091
source "$VENV_DIR/bin/activate"

python -m pip install --upgrade pip >/dev/null
pip install -r requirements.txt

echo
echo "Deploying MkDocs site to 'gh-pages' branch..."
echo "This will push generated static files to origin/gh-pages."
echo

mkdocs gh-deploy --force


