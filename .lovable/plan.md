## Stylize founder portraits — pencil sketch, greyscale + green accent

Yes, this is something I can do professionally in-tool. I'll use the image-edit model (Nano banana) to restyle each of the four existing founder headshots so they read as a coherent set, matching the site's calm, editorial tone.

### Approach

For each of the four existing portraits in `src/assets/team/` (Aslam, Andre, Diego, Philipp), run an image edit with a single shared prompt so the set feels like one series, not four separate experiments. Save as new files (`*-sketch.jpeg`) so we keep originals as a fallback and can A/B if needed.

### Style brief (applied identically to all four)

- Hand-drawn graphite pencil portrait, soft cross-hatching, visible paper grain
- Greyscale base — warm off-white paper tone (matches site `--background`)
- Single accent: muted sage/forest green (pulled from the site's primary token in `src/styles.css`) used sparingly — e.g. a subtle wash on clothing or a thin underline shape, not on skin
- Bust framing, neutral background, soft vignette
- Consistent line weight, lighting direction, and contrast across all four so they sit as a row

### Files

1. Generate four new images via `imagegen--edit_image`:
   - `src/assets/team/aslam-sketch.jpeg`
   - `src/assets/team/andre-sketch.jpeg`
   - `src/assets/team/diego-sketch.jpeg`
   - `src/assets/team/philipp-sketch.jpeg`
2. Update imports in `src/routes/about.tsx` to point at the `-sketch` versions. No layout changes — same `w-28 h-28 rounded-full object-cover` treatment.
3. QA: view each output, confirm consistency across the set; iterate the prompt if any one drifts (e.g. too dark, wrong green, photographic instead of drawn).

### Out of scope

Originals stay on disk untouched. No changes to partner/region cards, header, or other routes.

### Honest caveat

AI image edits on real faces are good but not perfect — likeness usually holds at thumbnail size (which is how they're used here, 112px round). If any single result loses likeness badly, I'll re-run that one with a tighter prompt rather than ship it.
