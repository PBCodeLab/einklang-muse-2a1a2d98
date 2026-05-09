## Placement
Insert a new "logo marquee" band in `src/routes/index.tsx`, **immediately after the Hero `<section>` and before the Transformation `<section>`**. This puts social proof in the first scroll, where it has the biggest credibility impact.

## Visual design
- Full-width band, `bg-surface-container-lowest`, top + bottom border `border-outline-variant`.
- Vertical padding ~`py-10`.
- Small uppercase label centered above: "Trusted by teams at" (`txt-label-nav text-on-surface-variant`).
- Logos: ~36–44px tall, horizontal row, evenly spaced (~64px gap).
- All logos rendered greyscale via `filter grayscale opacity-60`, hover lifts to `opacity-100` (subtle, even though the marquee keeps moving).
- Soft fade masks on the left + right edges (CSS `mask-image: linear-gradient`) so logos don't hard-cut at the viewport edge — matches the muted website palette.

## Motion
- Continuous right-to-left scroll using a CSS `@keyframes marquee` animation (translateX 0 → -50%).
- Track contains the logo list duplicated twice so the loop is seamless.
- Duration ~40s linear infinite; pauses on hover.
- Respects `prefers-reduced-motion` (animation disabled, logos shown statically wrapped).

Animation keyframes added to `src/styles.css` (the project uses Tailwind v4 via styles.css, not a config file):
```css
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.animate-marquee { animation: marquee 40s linear infinite; }
.animate-marquee:hover { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) { .animate-marquee { animation: none; } }
```

## Logos / assets
Companies: UBS, PwC, Pilatus, Swissmem, Komax, ABB, Accelleron, Hitachi.

We don't have these logo files in the repo. Two options:
1. **Generate stylized monochrome wordmark SVGs** for each (safe, brand-neutral grey text in the website font). Fast, no licensing risk, looks intentional.
2. **Use the official logos** (PNG/SVG sourced from each brand). Stronger recognition, but technically requires permission for marketing use — and we don't have the files locally yet.

I recommend **option 1** as the default (cleanly fits the muted aesthetic, avoids legal ambiguity), and we can swap in real logos later by dropping files into `src/assets/logos/`.

Component: a small `<LogoMarquee />` in `src/components/LogoMarquee.tsx` that takes the array of company names and renders the duplicated track.

## Files touched
- `src/components/LogoMarquee.tsx` (new) — marquee component.
- `src/assets/logos/*.svg` (new, 8 files) — greyscale wordmarks.
- `src/styles.css` — add `@keyframes marquee` + utility class.
- `src/routes/index.tsx` — import and render `<LogoMarquee />` between Hero and Transformation.

## Open question
Do you want stylized text wordmarks (option 1, ship now) or should I hold and ask you to upload the real client logos (option 2, more recognizable)?