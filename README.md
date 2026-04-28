# whoami

A personal CV / résumé website built with React, TypeScript, and Vite. Presents career history, education, non-profit work, and a tech stack — all in a clean, animated single-page layout with bilingual support.

## Sections

- **About me** — short bio and LinkedIn contact link
- **Career** — work history with employer logos, roles, and bullet-point descriptions
- **Education** — academic and vocational qualifications
- **Non-profit** — voluntary organisation roles and board positions
- **Tech Stack** — interactive flip-card grid of tools and technologies

## Features

- Bilingual (English / Swedish) via a simple i18n dictionary
- Language persisted in the URL query string (`?lang=en` / `?lang=sv`) and `localStorage`
- Entrance and section-transition animations powered by [anime.js](https://animejs.com/)
- Animated floating star particles and octagonal dot-grid background
- Responsive layout for desktop and mobile
- Deployed to GitHub Pages via GitHub Actions

## Scripts

```bash
npm run dev      # start local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## i18n

Translations live in `src/i18n/`:

| File | Purpose |
|------|---------|
| `en.ts` | English copy |
| `sv.ts` | Swedish copy |
| `index.ts` | Shared types, combined translations, locale helpers |

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy-static.yml`), which builds the app and deploys the `dist/` folder to GitHub Pages.
