## 1. Container alignment
Currently `LogoMarquee` is wrapped in `-mx-6 lg:-mx-10` to bleed full-width. Remove that wrapper. The marquee will live inside the same `max-w-7xl mx-auto px-6 lg:px-10` column as the stat tiles and case-study cards — its left/right edges align exactly with those bordered boxes.

## 2. New visual treatment
Drop the full-width fade band. Replace with a **bordered card matching the rest of the section**:

- Container: `bg-surface border border-outline-variant` (same treatment as the stat tiles and case-study cards above/below it).
- Layout: a fixed left column with the label, separated by a vertical divider from the scrolling logo strip on the right.
  - Left column (~220px, hidden on small screens, stacked above on mobile): `EINKLANG SOLUTIONS · TRUSTED BY MEMBERS OF` in `txt-label-nav text-on-surface-variant`, vertically centered.
  - Vertical divider: `border-l border-outline-variant`.
  - Right column: the marquee track, vertical padding `py-6`, fade masks shortened to ~5% so they read as a soft inner edge rather than a vignette.
- Logos: drop the `hover:opacity-90` lift (no other hover micro-interactions on this page); keep `grayscale opacity-70` constant for a cohesive muted-green tone consistent with the stat tile typography color.
- Animation pauses on hover (already in CSS).

This makes the band feel like a deliberate component in the section's grid instead of a marketing banner that fades out.

## 3. Logo size rebalance
Re-pass each logo so the perceived wordmark height matches Accelleron. Current heights felt off because some logos contain more whitespace or non-text marks than others. Revised plan:

| Logo | Before | After | Reason |
|---|---|---|---|
| UBS | h-8 md:h-10 | h-7 md:h-8 | shrink (too dominant) |
| PwC | h-11 md:h-12 | h-10 md:h-11 | slight shrink |
| Pilatus | h-4 md:h-5 | h-5 md:h-6 | nudge up (was barely visible) |
| Swissmem | h-10 md:h-11 | h-10 md:h-11 | keep |
| Komax | h-12 md:h-14 | h-16 md:h-20 | grow significantly (portrait logo, wordmark is a small portion) |
| ABB | h-7 md:h-8 | h-10 md:h-12 | grow (square mark, text reads small) |
| Accelleron | h-6 md:h-7 | h-6 md:h-7 | reference, unchanged |
| Hitachi | h-9 md:h-10 | h-12 md:h-14 | grow (curved wordmark inside square viewbox) |

The marquee track gets a fixed inner row height (`h-20`) so all logos vertically center against the same baseline regardless of their individual heights. Gap reduced slightly (`gap-10 md:gap-12`) to keep more logos visible per viewport now that several are larger.

## 4. Mobile
On `<md` viewports, label sits above the marquee inside the same card, divider becomes a horizontal `border-t`. Card edges still match the stat tile column.

## Files touched
- `src/components/LogoMarquee.tsx` — new layout (label column + divider + marquee), constant opacity, rebalanced heights, fixed row height.
- `src/routes/index.tsx` — remove `-mx-6 lg:-mx-10` wrapper around `<LogoMarquee />`.
- `src/styles.css` — shorten the `marquee-mask` gradient transparency to ~5% / 95% (softer inner fade, not a banner vignette).