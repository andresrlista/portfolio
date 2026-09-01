# Andrés Lista — Portfolio

A minimalist, bilingual (English/Spanish) personal portfolio, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Inspired by the clean, content-first look of GitHub and Apple's product pages.

## Features

- 🌐 **Bilingual** — English at `/`, Spanish at `/es/`, via Astro's built-in i18n routing.
- 🌓 **Light & dark themes** — toggled client-side, persisted in `localStorage`, respects `prefers-color-scheme`, no flash of unstyled content.
- 📱 **Fully responsive** — mobile-first layout with a collapsible nav.
- ⚡ **Fast & static** — no client-side framework, just Astro + a sprinkle of vanilla JS.
- ♿ **Accessible & resilient** — content and animations degrade gracefully without JavaScript.

## Project structure

```text
src/
├── components/     UI sections (Hero, Experience, Skills, Projects, Contact, …)
├── i18n/           en.ts / es.ts content dictionaries + locale helpers
├── layouts/        Shared page shell (Layout.astro)
├── pages/          index.astro (EN), es/index.astro (ES)
└── styles/         Tailwind entrypoint + theme tokens (global.css)
```

Site content (name, experience, skills, projects) lives entirely in `src/i18n/en.ts` and `src/i18n/es.ts` — edit those to update the copy in both languages.

## Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                      |
| :------------------ | :------------------------------------------- |
| `npm install`        | Install dependencies                        |
| `npm run dev`         | Start local dev server at `localhost:4321`  |
| `npm run build`       | Build production site to `./dist/`          |
| `npm run preview`     | Preview the production build locally        |
