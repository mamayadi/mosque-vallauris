# CLAUDE.md — Mosquée de Vallauris

## Project overview

Static one-page website for the Grande Mosquée de Vallauris (06220, France).
Primary goal: fundraising campaign for buying the ground floor of the building.
Deployed at **<https://mosquee-vallauris.fr>** via GitHub Pages.

## Tech stack

| Layer     | Choice                                                                 |
| --------- | ---------------------------------------------------------------------- |
| Framework | Astro 6 (static output)                                                |
| Styles    | Tailwind CSS v4 (`@tailwindcss/vite` plugin — no `tailwind.config.js`) |
| Icons     | `astro-icon` with Phosphor (`ph:*`) icon set                           |
| Sitemap   | `@astrojs/sitemap`                                                     |
| Fonts     | Amiri (Arabic/serif headings) + Nunito (body) — Google Fonts via CSS   |
| Deploy    | GitHub Actions → GitHub Pages (`dist/`)                                |

## Project structure

```plaintext
src/
  assets/
    logo.svg                  # Mosque icon used in nav (imported ?raw)
    mosque-illustration.svg   # Hero illustration (imported ?raw)
  layouts/
    Layout.astro              # <head>, JSON-LD PlaceOfWorship, OG tags, favicon
  pages/
    index.astro               # Entire site — single page
  styles/
    global.css                # Tailwind import + design tokens + component classes
public/
  CNAME                       # mosquee-vallauris.fr (GitHub Pages custom domain)
  robots.txt
  favicon.svg
```

## Key conventions

### SVG imports

SVGs in `src/assets/` are imported with Vite's `?raw` suffix and rendered with
`<Fragment set:html={svgVar} />`. This preserves `fill="currentColor"` so the
icon inherits CSS colour from its parent element.

```astro
import logoSvg from '../assets/logo.svg?raw';
<Fragment set:html={logoSvg} />
```

### Arabic text

Always add `lang="ar" dir="rtl"` to any element containing Arabic text.
Use the `font-amiri` class for Arabic content.

### Campaign numbers

All fundraising figures live at the top of `index.astro`:

```ts
const campaign = {
  achatRdC : 300_000,   // purchase price of ground floor
  travaux  : 150_000,   // renovation costs
  objectif : 450_000,   // total target
  collecte :  85_000,   // amount raised so far  ← update this regularly
  get reste() { return this.objectif - this.collecte; },
  get pct()   { return Math.round((this.collecte / this.objectif) * 100); },
};
```

Only `collecte` needs updating when new donations come in. `reste` and `pct`
are computed automatically.

### Structured data

- `Layout.astro` always emits a `PlaceOfWorship` JSON-LD block.
- `index.astro` passes a `FAQPage` schema via the `additionalSchema` prop.
- Keep both in sync if content changes.

### Design tokens (global.css)

Custom colours defined as Tailwind theme extensions:

- `green-800` / `green-950` — primary dark green (Islamic theme)
- `gold` / `gold-light` — accent (#c9a84c / #e0c070)
- `beige-100` / `beige-300` / `beige-400` — light background tones

Component classes: `btn-gold`, `btn-outline`, `card-arabesque`,
`heading-ornament`, `divider-gold`, `bg-pattern-dark`, `bg-pattern-beige`.

## Favicon generation

Favicons are generated from `public/favicon.svg` at build time:

```bash
npm run favicon   # generates favicon-32.png, apple-touch-icon.png, etc.
```

This script runs automatically in the GitHub Actions deploy pipeline.

## Deployment

Push to `main` → GitHub Actions builds and deploys automatically.
Pipeline: install → `npm run favicon` → `npm run build` → upload `dist/`.

## Content update checklist

- **Campaign amount raised** → `collecte` in `index.astro` frontmatter
- **Address / contact email** → top constants in `index.astro`
- **FAQ** → `faqItems` array (also updates the FAQPage JSON-LD automatically)
- **History text** → `#histoire` section
- **Prayer times** → live via Mawaqit iframe (no manual update needed)
