## Goal

Recreate the Einklang Academy website (content from einklang-academy.com) in our TanStack Start project, styled to match the provided design reference HTML (dark-on-light, large serif/bold headlines, paired "problem → solution" cards with primary-color blocks, Material Symbols icons, label-nav uppercase eyebrows).

## Pages (each its own route, with unique `head()` SEO)

```
src/routes/
  index.tsx          /            Home: hero, transformation, why Einklang, results, enterprise-ready, CTA
  case-studies.tsx   /case-studies   Listing of the two case studies
  case-studies.swiss-bank.tsx       /case-studies/swiss-bank
  case-studies.swissmem.tsx         /case-studies/swissmem
  contact.tsx        /contact     "Book a demo / Start a pilot" page (Calendly link)
```

A shared header (links: Home, Case studies, Contact, "Book a demo" CTA) and footer live in `__root.tsx`.

## Design system (src/styles.css)

Replace placeholder tokens with the reference's palette and type tokens, all in `oklch`:

- `--background`, `--surface`, `--surface-container-lowest`, `--surface-container-low` (warm off-white scale)
- `--primary` (deep navy/near-black), `--primary-foreground` (white)
- `--on-surface-variant` (muted grey text)
- `--outline-variant` (hairline borders)
- `--accent` for the eyebrow/label color (primary tone)

Typography utility classes mirroring the reference:
- `.txt-primary-headline` — large, tight, semi-bold serif-ish display
- `.txt-section-title` — medium bold heading
- `.txt-label-nav` — uppercase, wide tracking, small
- `.txt-body` — comfortable reading paragraph

Buttons: `.btn-primary` (solid primary), `.btn-secondary` (outline). Implemented as Tailwind `@layer components` classes so JSX stays clean.

Material Symbols loaded via `<link>` in `__root.tsx` head.

## Home page sections (mapping content → design)

1. **Hero** — eyebrow "THE PLATFORM", headline "Operational Excellence, finally scalable.", body copy, two CTAs (Book a demo / Start a pilot). Right column: oversized "30%+" stat with "PRODUCTIVITY GAIN" label, plus 5:1 ROI / 160+ Leaders / 60 yrs sub-stats stacked.
2. **Operating regions** strip — small tagline "Operating in Switzerland (DACH) · Germany / Austria · Brazil · LatAm · EU / UK".
3. **Transformation** — eyebrow + headline, 3 paired cards (white problem card on top, primary-colored solution card on bottom, downward arrow chip between). Content from the reference HTML, but updated to match einklang-academy copy (Consulting doesn't scale / Training doesn't stick / AI feels abstract).
4. **Why Einklang** — two-column: long paragraph + 4 bullet highlights (60 years cumulative OE, Method-first, Sector-specific, Built to transfer capability).
5. **Proven results** — 4 stat tiles (30%+, 5:1, CHF 3.8m+, 160+) then 2 case-study preview cards linking to the case study routes.
6. **Enterprise ready** — 4 feature tiles (Microsoft Teams, EU GDPR, Four languages, Benefit reporting).
7. **Final CTA** — centered headline + two CTAs.

## Case study pages

Simple long-form layout: eyebrow, headline, key stats row, body paragraphs, back link. Content seeded from the source page summaries; placeholder copy clearly marked where the source page wasn't fetched.

## Contact page

Headline + short copy + two big CTA buttons linking to `https://calendly.com/aslamjilani-einklangacademy/30min` (open in new tab). Email mailto fallback.

## Header / Footer (in __root.tsx)

- Header: wordmark "Einklang", nav links, primary "Book a demo" button.
- Footer: brand line, region list, copyright, small legal links (placeholders).

## Images

Hotlink any decorative images from einklang-academy.com via direct `<img src="https://einklang-academy.com/...">`. The hero/right column is typography-driven (no large photo needed), matching the reference HTML.

## SEO per route

Each route file sets `head()` with a route-specific title (`"<Page> — Einklang Academy"`), description, og:title, og:description. Single H1 per page.

## Out of scope (this pass)

- Cookie consent banner
- Multilingual (DE/EN/PT/ES) switcher
- Working contact form (Calendly link only)
- CMS / Lovable Cloud (no backend needed)

## Technical notes

- Pure frontend; no Lovable Cloud.
- New `@layer components` classes in `src/styles.css` for button + typography utilities.
- All colors via semantic tokens — no raw hex in JSX.
- Material Symbols via Google Fonts CDN link in `__root.tsx` head.
