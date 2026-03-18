# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CI Lawn is a static marketing website for a lawn care service in Edmonton, Canada. Built with Vite + React + Bootstrap 5, deployed to Google Cloud Storage.

## Commands

All commands run from `ci_lawn_web/`:

```bash
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run lint       # ESLint check
```

**Deploy to GCS** (from repo root):
```bash
cd ci_lawn_web && npm run build
bash ../deploy-gcs.sh                         # uses defaults: bucket=ci_lawn, project=ci-project-489202
bash ../deploy-gcs.sh [BUCKET_NAME] [PROJECT_ID]  # override defaults
```

gcloud SDK lives at `~/google-cloud-sdk/bin/` — if `gcloud` is not in PATH, `deploy-gcs.sh` handles this via `export PATH`.

## Architecture

### CSS Layer Order (critical — must stay in this order in `main.jsx`)
1. `index.css` — global reset
2. `styles/variables.css` — CSS custom properties (colors, shadows, transitions)
3. `styles/bootstrap-override.scss` — overrides Bootstrap `$primary` before `@import bootstrap` (requires sass)
4. `styles/animations.css` — `.reveal` / `.reveal-left` / `.reveal-right` scroll classes
5. `styles/navbar.css`, `hero.css`, `services.css`, `sections.css` — component styles
6. `styles/responsive.css` — **must be last** to override Bootstrap and component styles via media queries

### Styling Conventions
- All colors reference CSS vars from `variables.css` (`--color-primary`, `--color-primary-dark`, etc.), not hardcoded hex.
- `--section-py: 5rem` controls vertical padding for all sections; `responsive.css` overrides it to `3.5rem`/`3rem` on mobile.
- Bootstrap `$primary` is overridden to `#1A7A3E` via SCSS — do not use Bootstrap's default green utilities expecting the original color.
- Hover `transform` effects are disabled on touch devices via `@media (hover: none)` in `responsive.css`.

### Data → Component Flow
Static data in `src/data/` drives multiple components — edit data files, not JSX, to change content:
- `services.js` → `Services.jsx` (cards on Home) + `ServicesPage.jsx` (detail alternating layout)
- `pricing.js` → `Pricing.jsx`
- `testimonials.js` → `Testimonials.jsx`
- `serviceAreas.js` → `ServiceArea.jsx`

### Routing
React Router with `BrowserRouter`. The `#pricing` and `#contact` navbar links use smooth-scroll via `document.getElementById().scrollIntoView()` — they are not routes. Only 4 actual routes exist: `/`, `/services`, `/about`, `/contact`.

### Scroll Reveal
`ScrollReveal` component (`src/components/ui/ScrollReveal.jsx`) wraps `useInView` from `react-intersection-observer`. It adds `.reveal`, `.reveal-left`, or `.reveal-right` + `.visible` classes; animation is pure CSS in `animations.css`. Use `delay={1..5}` prop for staggered children.

### GCS Deployment Notes
- `vite.config.js` has `base: './'` — **do not change to `/`**. GCS serves from `storage.googleapis.com/ci_lawn/`, so absolute paths break asset loading.
- `index.html` is uploaded with `Cache-Control: no-cache`; assets in `/assets/` get `max-age=31536000, immutable` (safe because Vite hashes filenames).
- The bucket is configured with `index.html` as both the main page and 404 page to support client-side routing.
