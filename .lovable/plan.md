## Changes

**1. Move the marquee.** Remove `<LogoMarquee />` from between the Hero and Transformation sections. Re-render it inside the "Proven Results" section in `src/routes/index.tsx`, placed directly under the 3-stat grid (30%+ / 5:1 / 160+) and above the two case-study cards. This keeps the social-proof story tight: stats → who → case studies.

**2. Use real logos instead of wordmarks.**
- Source SVGs (preferred) or transparent PNGs for: UBS, PwC, Pilatus, Swissmem, Komax, ABB, Accelleron, Hitachi.
- Acquisition order I'll try, stopping at the first that returns a clean file per brand:
  1. Wikimedia Commons (free SVGs for ABB, Hitachi, UBS, PwC, Pilatus, Swissmem, Accelleron typically available)
  2. simple-icons npm package (covers some of these as monochrome SVGs)
  3. Each company's official press/brand page via `fetch_website`
- Save under `src/assets/logos/{name}.svg` (or `.png`).
- Render in `LogoMarquee.tsx` as `<img src={…} alt="UBS" className="h-6 md:h-7 w-auto opacity-70 grayscale hover:opacity-100" />`. The `grayscale` filter + opacity guarantees the muted look even for color logos. Heights tuned per logo if some look visually larger/smaller than others.

**3. Fallback.** If a particular logo can't be sourced cleanly (vector unavailable, PNG too low-res, or you'd prefer not to use it for legal reasons), I'll keep its stylized wordmark in the same slot so the band stays full.

## Open question
Confirm you're OK proceeding with real logos (your assumption being these are real client/training participants and standard B2B "trusted by" usage is acceptable). If you'd rather avoid any specific brand, name them and I'll keep wordmarks for those.

## Files touched
- `src/routes/index.tsx` — remove `<LogoMarquee />` from hero area, add it inside the Proven Results section.
- `src/components/LogoMarquee.tsx` — replace text spans with `<img>` tags pointing at imported logo files.
- `src/assets/logos/*.svg|png` — new files (8).