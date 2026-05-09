The header currently uses a single horizontal row at all viewport sizes, with the nav hidden below `md` (768px). On the current 825px tablet preview, the row is cramped: logo (h-14) + 4 nav links + button compete for the same line.

## Changes in `src/routes/__root.tsx`

**1. Responsive logo size**
Replace `h-12 md:h-14` with a tighter scale:
- `h-9 sm:h-10 md:h-12 lg:h-14`
- Logo shrinks gracefully on phones and small tablets, keeps the prominent size on desktop.

**2. Responsive nav spacing & sizing**
- Show the nav from the `sm` breakpoint instead of `md` so tablets get the full menu, but use a compact size: `hidden sm:flex items-center gap-3 md:gap-5 lg:gap-8`.
- Use `whitespace-nowrap` on each link and shrink font with `text-[11px] md:text-xs lg:text-sm` so labels never wrap and breathe at all widths.
- Outer wrapper: change `gap-8` → `gap-3 md:gap-5 lg:gap-8`.

**3. Responsive Book-a-demo button**
- `px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm lg:px-5` so it doesn't dominate small screens.
- Add `whitespace-nowrap` to keep it on one line.

**4. Container padding**
- `px-4 md:px-6 lg:px-10` (small reduction on mobile to claw back room).
- `h-16 md:h-20` so header height scales too.

**5. Mobile (<sm, ~640px)**
At the smallest sizes there isn't room for 4 links plus the CTA. Two options:
- **(a) Hide nav, show only logo + CTA below `sm`** (current behavior, just with smaller pieces).
- **(b) Add a hamburger menu** that opens a simple dropdown panel with the four links.

I recommend **(a)** for simplicity and to match the minimal aesthetic — the page is short, primary CTA is "Book a demo", and adding a hamburger introduces state + a11y plumbing for marginal gain. If you'd prefer (b), say so and I'll add it.

## Files touched
- `src/routes/__root.tsx` — `SiteHeader` only. No other components, no CSS changes.