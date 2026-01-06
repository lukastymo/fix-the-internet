# Contributing

Thanks for helping keep this wiki accurate.

## What makes a good page

- **Clear goal**: state what the reader will achieve.
- **Step-by-step**: numbered steps, one action per step.
- **Platform-specific**: split into sections like Web / iOS / Android.
- **Verified**: include **Last verified: YYYY-MM-DD** near the top (or in front matter).
- **Screenshots**: welcome—place them under `docs/_assets/` and redact personal info.

## Suggested structure

- Tutorials: `docs/how-to/`
- Explanations: `docs/guides/`
- Lookups: `docs/reference/`
- Symptom-based fixes: `docs/troubleshooting/`
- Templates: `docs/_templates/`

## Naming conventions

- File names: `service-action.md` (example: `x-disable-autoplay.md`)
- Titles: “Service: Do the thing”

## Submitting changes

### Option A: Start with an Issue (recommended)

Open an Issue using **New article request** if you want to propose a page first or coordinate on wording/verification.

### Option B: Open a PR

1. Create a branch
2. Add/edit pages under `docs/`
3. If you add a new page, also add it to:
   - `docs/index.md` (GitHub browsing)
   - `mkdocs.yml` under `nav:` (website navigation)
4. Open a PR with:
   - what changed
   - which platforms you verified
   - the verification date


