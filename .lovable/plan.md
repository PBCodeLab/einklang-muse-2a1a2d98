## A proper editorial type system

Instead of a binary "revert vs keep", introduce a **6-step type scale** with clear hierarchy. This fixes the two real problems with the current 4-type system: H1 and section titles look too similar (flat hierarchy), and `text-sm` body copy disappeared everywhere.

### The scale

| Token | Use | Font | Weight | Size (mobile → desktop) | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|---|
| `.t-display` | Page H1, hero headline | Inter Tight | 600 | `clamp(2.25rem, 5vw, 4rem)` | 1.05 | `-0.03em` | normal |
| `.t-h2` | Section headline | Inter Tight | 600 | `clamp(1.75rem, 3.2vw, 2.5rem)` | 1.15 | `-0.02em` | normal |
| `.t-h3` | Card heading, sub-section | Inter Tight | 600 | `1.25rem` (20px) | 1.3 | `-0.01em` | normal |
| `.t-body` | Default paragraph | Inter | 400 | `1.0625rem` (17px) | 1.65 | normal | normal |
| `.t-small` | Meta, captions, footnotes | Inter | 400 | `0.875rem` (14px) | 1.55 | normal | normal |
| `.t-eyebrow` | Section labels, nav, button text | Inter | 600 | `0.75rem` (12px) | 1.2 | `0.14em` | UPPERCASE |

Plus the existing one-off **hero "30%+"** statistic (untouched).

### Why this is better UX

1. **Real hierarchy restored.** `t-display` (~64px desktop) vs `t-h2` (~40px) vs `t-h3` (20px) is a clear 1.6× ratio at each step → eyes know where to look. Current system has H1 and H2 nearly identical, so pages read flat.
2. **Two body sizes, not one.** `t-body` (17px) for narrative; `t-small` (14px) for meta/labels/case-study attribution. The current single-size body forces meta text to be the same weight as content.
3. **Eyebrow is calmer.** Tracking dialed back from `0.18em` → `0.14em`, size kept at 12px. The current `0.18em` is shouty for navigation.
4. **Headings unified at weight 600.** Currently `txt-display` is 700, `txt-heading` is 600 — mixing weights inside a single "voice" is the kind of inconsistency you wanted removed. A single weight + size variation = cleaner editorial feel.
5. **Body is 17px, not 16px.** Modern editorial standard (NYT, Stripe, Linear) — improves readability for B2B long-form copy without feeling oversized.

### Color rules (kept simple)

- Headings (`t-display`, `t-h2`, `t-h3`): `var(--primary)` by default. Override with `text-on-primary` on dark cards.
- Body / small: `var(--on-surface-variant)` by default.
- Eyebrow: inherits color so the same class works on light and primary backgrounds. Use with `text-primary` or `text-on-surface-variant` explicitly.

### Stats blocks (case studies + home)

Stat numbers get their own utility, NOT `t-display` shrunk down:

- `.t-stat` → Inter Tight, 600, `clamp(1.75rem, 3vw, 2.25rem)`, tight tracking.

This avoids the current pattern of overriding `txt-display` font-size inline, which defeats the point of a system.

### Nav + buttons

- Header nav links → `t-eyebrow` (kept uppercase — works for this brand's editorial tone).
- "Book a demo" / CTA buttons → `t-eyebrow` for the label.
- Existing `.btn-primary` / `.btn-secondary` keep their padding/background; only the inner label uses `t-eyebrow`.

### Files changed

1. **`src/styles.css`** — Replace the current `.txt-*` block with the new `.t-*` block. Keep aliases on the old class names (`.txt-display`, `.txt-heading`, `.txt-eyebrow`, `.txt-body`) pointing to the new equivalents so nothing visually breaks during the sweep, then remove aliases at the end.
2. **All route files** — Sweep `txt-*` → `t-*` mapping:
   - `txt-display` (when used for H1/H2 headlines) → `t-display` on H1, `t-h2` on H2.
   - `txt-display` (when used for stat numbers) → `t-stat`.
   - `txt-heading` → `t-h3`.
   - `txt-body` → `t-body`, except meta/captions → `t-small`.
   - `txt-eyebrow` → `t-eyebrow`.
3. Remove inline `style={{ fontSize: ... }}` overrides on stats — replaced by `t-stat`.

Routes touched: `__root.tsx`, `index.tsx`, `about.tsx`, `solutions.tsx`, `letter.tsx`, `contact.tsx`, `case-studies.index.tsx`, `case-studies.swiss-bank.tsx`, `case-studies.swissmem.tsx`.

### Out of scope

- Colors, layout, spacing, founder photos, copy.
- The hero "30%+" oversized statistic.
- No new fonts — keeps Inter + Inter Tight.

### Honest trade-off

The result will be visibly different from both "before the sweep" (more consistent) and "after the sweep" (more hierarchy, calmer eyebrow, two body sizes). It is not a literal revert — it is a designed system. If you want a literal revert instead, say the word and I'll switch the plan.
