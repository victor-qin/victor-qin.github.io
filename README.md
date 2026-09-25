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
  data/publications.ts   The publication list (single source of truth)
  data/research.ts       Research directions; ids link to publication topics
  data/reading.ts        Reading list entries
  assets/img/            Images processed + optimized by Astro
  layouts/Base.astro     Page shell, nav, meta
  components/            PublicationList
  pages/
    index.astro          Bio + full publication list
    research.astro       Research directions, each with its own papers
    zreading.astro       Reading list
public/                  Served verbatim at the site root (PDFs, large media)
```

## Adding a publication

Append to `publications` in `src/data/publications.ts`:

```ts
{
  id: 'qin-venue-2027',
  title: 'Paper Title',
  authors: ['V. Qin', 'H. Balakrishnan'],   // 'V. Qin' is bolded automatically
  venueShort: 'ICRAT 2027',                 // left gutter
  venue: 'Full venue name, City ST',
  year: 2027,
  type: 'conference',                       // or 'journal'
  coFirst: true,                            // adds the * on your name
  toAppear: true,                           // optional
  note: 'Best Paper Award',                 // optional pill
  url: 'https://doi.org/...',               // optional
  pdf: '/files/paper.pdf',                  // optional
  topics: ['market-structures'],            // ids from research.ts
}
```

`topics` is what makes a paper appear under a research direction — the two files
stay in sync through those ids, so a paper is never listed in two places by hand.

## URLs

Old Jekyll dated URLs redirect to the new slugs via `redirects` in
`astro.config.mjs`. The CV and résumé are also duplicated under
`public/public/files/` so the pre-existing `/public/files/VictorQin_CV.pdf`
links keep resolving.

## Deploy

`.github/workflows/deploy.yml` builds on push to `master` and publishes to
GitHub Pages. Enable it once under **Settings → Pages → Source → GitHub Actions**.
