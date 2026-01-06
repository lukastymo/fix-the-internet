# Fix the Internet Wiki

Practical, step-by-step fixes for frustrating “hidden” settings and dark patterns across the internet.

## Browse (curated)

- **Start here**: `docs/index.md`
- **How-to**
  - X (Twitter): Disable autoplay → `docs/how-to/x-disable-autoplay.md`
- **Guides**: `docs/guides/`
- **Reference**: `docs/reference/`
- **Troubleshooting**: `docs/troubleshooting/`

## Website (optional, recommended)

This repo is set up for an MkDocs Material site. If published via GitHub Pages, the site becomes the main “public wiki” UI (navigation + search).

## Preview locally

Requires **Python 3** (MkDocs is a Python tool).

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Then open the URL it prints (usually `http://127.0.0.1:8000/`). It auto-reloads when you edit files under `docs/`.

## Create a new post

You can do this either via GitHub Issues (recommended for coordination) or directly via a PR.

### Option A: Open an Issue (uses the template)

1. Go to **Issues** → **New issue**
2. Choose **New article request**
3. Fill in the goal + platforms + any notes

### Option B: Add the page in a PR

1. Copy the template: `docs/_templates/how-to.md`
2. Create a new file under the right folder (usually `docs/how-to/`)
3. Add it to navigation:
   - GitHub browsing: add a link in `docs/index.md`
   - Website nav: add it under `nav:` in `mkdocs.yml`
4. Open a PR

## Contributing

PRs welcome—especially updates when UIs change. See `CONTRIBUTING.md`.
