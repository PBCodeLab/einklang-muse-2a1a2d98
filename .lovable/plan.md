## 1. Logo — never squeeze on iPad

In `src/routes/__root.tsx`, the logo `<img>` currently uses `h-12 md:h-14 w-auto`. On iPad widths the parent flex row shrinks it. Fix:

- Add `shrink-0` to both the `<Link>` wrapper and the `<img>` so flexbox cannot squeeze it.
- Keep `w-auto` and an explicit height; add `object-contain` as a guard so aspect ratio is always preserved.

## 2. Logo — match header background (remove white box)

The logo PNG ships with a white background; the header uses `--background` (warm off-white). Apply `style={{ mixBlendMode: "multiply" }}` to the `<img>` so the white pixels disappear and the dark mark blends cleanly into the header. Zero-cost, reversible, no asset regeneration.

## 3. Who we are — real content + founder photos

Replace the stub in `src/routes/about.tsx` with the real content from einklang-academy.com/en/about, using existing typography tokens (`txt-label-nav`, `txt-primary-headline`, `txt-body`).

### Founder photos
Download the four headshots from the source site into `src/assets/team/` and import them as ES modules so Vite fingerprints them:
- `aslam.jpeg` ← https://einklang-academy.com/wp-content/uploads/2026/05/Aslam.jpeg
- `andre.jpeg` ← https://einklang-academy.com/wp-content/uploads/2026/05/Andre-short-2.jpeg
- `diego.jpeg` ← https://einklang-academy.com/wp-content/uploads/2026/05/Diego.jpeg
- `philipp.jpeg` ← https://einklang-academy.com/wp-content/uploads/2026/05/Philipp.jpeg

Each founder card: round photo (`w-28 h-28 rounded-full object-cover`) on top, then name · role · location · bio.

### Page sections (in order)
1. **Hero** — eyebrow "About Einklang" · H1 "Built by practitioners, for practitioners — with a clear purpose." · lead paragraph from source.
2. **Why we exist — Our vision & mission** (2-col grid): Vision "OE for everyone" + Mission "Embed AI into how work improves", with the source descriptions verbatim.
3. **The team — Founders** (responsive grid: 1 col mobile, 2 col md, 4 col lg) — Aslam Jilani (CEO & Founder, Zurich), Andre Andreazzi (LatAm Lead & Co-Founder, São Paulo), Diego Castillo (CTO & Co-Founder, Utrecht), Philipp Bubenzer (Co-Founder & Academic Lead, HEG-FR / ETH Zurich), with source bios.
4. **Ecosystem — Partners & advisors**: intro line + 3 cards (Swissmem, Brilliant Working Ltd, kyro) verbatim.
5. **Where we operate — DACH and LatAm, with global reach**: intro + 3 cards (Switzerland, Brazil, EU/UK) verbatim.
6. **CTA**: "Want to know more about Einklang?" · "Book a 30-minute call with Aslam — no commitment, just a conversation." · primary "Book a call" button → existing Calendly URL.

Also update the route's `head()` meta: title "Who we are — Einklang Academy" + matching description.

## Out of scope
- Header `Book a demo` button, footer, other routes.
