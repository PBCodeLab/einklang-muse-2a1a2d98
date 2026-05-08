Realign the site's design tokens and typography to the Stitch template (sampled from the rendered preview at stitch.withgoogle.com/projects/8006616597147189303).

## What changes

### 1. Color tokens (`src/styles.css`)
Repalette around **deep forest green** as `--primary` (instead of navy). Keep warm off-white surfaces.

- `--background`: warm off-white (~oklch 0.985 0.005 95)
- `--surface`: pure white
- `--surface-container-lowest`: very light cream (~oklch 0.975 0.008 95)
- `--surface-container-low`: slightly darker cream (~oklch 0.955 0.012 95)
- `--primary`: deep forest green (~oklch 0.32 0.05 160) — used for headlines, CTA buttons, solution cards, large stats
- `--primary-foreground` / `--on-primary`: off-white
- `--foreground`: same deep green for body headings
- `--on-surface-variant`: warm muted gray (~oklch 0.45 0.015 95)
- `--outline-variant`: hairline warm gray
- `--ring`: muted green

### 2. Typography (`src/styles.css`)
Switch from Fraunces serif to a clean modern sans for headings AND body, matching the screenshot.

- Drop Fraunces import.
- Use **Inter** (already loaded) for body and headings, or swap to **Geist / Manrope** if it reads closer — start with Inter Tight for headlines because the screenshot headlines are tight-tracked sans.
- Add Google Font: `Inter Tight` (weights 500/600/700) for `.txt-primary-headline` and `.txt-section-title`.
- Remove the `font-family: Fraunces` rules from `h1..h4` and from the inline `style={{ fontFamily: "Fraunces..." }}` callsites in `index.tsx`, `case-studies.swiss-bank.tsx`, `case-studies.swissmem.tsx`.
- Adjust `.txt-primary-headline`: `font-family: 'Inter Tight'`, weight 600, letter-spacing -0.03em, line-height 1.05, size clamp 2.25–4rem.
- Adjust `.txt-section-title`: same family, weight 600, size 1.5rem.
- Hero "italic finally scalable" line: drop italic (template doesn't use it), keep the muted color treatment.

### 3. Buttons
Primary button stays solid — but on the new green primary it becomes the green pill / rectangular CTA matching the "BOOK A CALL" in the template (subtle 2px radius, `bg-primary text-on-primary`). No code change needed beyond the new token values.

### 4. Solution cards
Already use `bg-primary text-on-primary` — they will automatically become deep green with white text once the token flips. Same for the final CTA band.

### 5. Hero stat
Currently styled with Fraunces — change to Inter Tight 600, very large, primary green. Same for case-study stats.

### 6. Sweep for stale serif references
Grep for `Fraunces` and `font-family` across `src/routes` and remove every inline override; rely on the type utility classes only.

## Out of scope
- Layout structure (already matches the template).
- Adding new sections.
- Logo (already correct).

## QA after applying
- Open `/`, `/case-studies`, `/case-studies/swiss-bank`, `/case-studies/swissmem`, `/contact`. Visually compare hero, solution-card band, CTA band, and stat blocks against the Stitch screenshot.
