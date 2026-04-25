# whoami

A baseline React + TypeScript app built with Vite.

## Features

- Left sidebar navigation for:
  - Career
  - Education
  - Non-profit
- Simple i18n dictionary with English (`en`) and Swedish (`sv`)
- Language persistence via query string (`?lang=en` / `?lang=sv`) and local storage fallback
- Responsive layout for desktop and mobile

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## i18n

Translations are split by locale in `src/i18n/`:

- `src/i18n/en.ts`
- `src/i18n/sv.ts`
- `src/i18n/index.ts`

`src/i18n/index.ts` exports shared types, combined translations, and locale helpers.
