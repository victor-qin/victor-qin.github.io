# victor-qin.com

Personal site, built with [Astro](https://astro.build).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve dist/ locally
```

## Structure

```
src/
  content/technical/   Projects       -> /technical/<slug>/, listed at /projects/
  content/work/        Non-technical  -> /work/<slug>/,      listed at /work/
  content.config.ts    Frontmatter schemas (validated at build time)
  assets/img/          Images processed + optimized by Astro
  data/reading.ts      Reading list entries
  layouts/             Base (shell) and Post (article)
  components/          ProjectCard
  pages/               Routes
public/                Served verbatim at the site root (PDFs, large media)
```

## Adding an entry

Drop a Markdown file into `src/content/technical/` or `src/content/work/`:

```md
---
title: Thing I Did
description: One line for the card.
date: 2026-01-15
image: ../../assets/img/thing.png   # optional
skills: [Python, Optimization]      # optional
role: Project Lead                  # optional, work only
link: https://example.com           # optional
linkLabel: Read more                # optional
draft: false                        # true hides it from the site entirely
---

Body in Markdown. Relative image paths get optimized automatically.
```

The schema in `src/content.config.ts` is enforced — a missing `description` or a
malformed `date` fails the build rather than rendering an empty card.

## URLs

Old Jekyll dated URLs redirect to the new slugs via `redirects` in
`astro.config.mjs`. The CV and résumé are also duplicated under
`public/public/files/` so the pre-existing `/public/files/VictorQin_CV.pdf`
links keep resolving.

## Deploy

`.github/workflows/deploy.yml` builds on push to `master` and publishes to
GitHub Pages. Enable it once under **Settings → Pages → Source → GitHub Actions**.
