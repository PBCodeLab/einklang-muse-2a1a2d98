## Goal

Add three product sub-pages under the existing "Products" nav entry, summarising content from einklang-academy.com:

1. **Agent** → `/products/agent`
2. **Academy** → `/products/academy`
3. **Custom Development** → `/products/custom`

## Navigation change

Replace the single "Products" link in `src/routes/__root.tsx` (currently → `/solutions`) with a hover/click dropdown that lists the three sub-pages. Desktop: hover dropdown styled to match the existing minimalist nav. Mobile: the three links surface as inline items (mobile nav is already collapsed by viewport).

The current `/solutions` route stays as a thin overview page (or redirects to `/products/agent`) — open question below.

## Route files (TanStack flat naming)

```
src/routes/products.agent.tsx
src/routes/products.academy.tsx
src/routes/products.custom.tsx
```

Each file:
- `createFileRoute` with unique `head()` (title, description, og:title, og:description).
- Reuses existing design tokens and section patterns from `index.tsx` (`MAX`, `txt-primary-headline`, `txt-body`, `bg-surface-container-lowest`, `border-outline-variant`, primary CTA pill).
- Closes with the same final-CTA block style ("Book a demo" → existing Calendly URL).

## Page content (succinct, redundancy removed)

Shared elements (Microsoft Teams deployment, EU GDPR / Swiss data protection, Calendly CTA, the four-language note, Einklang Agent description) are written once on the Agent page and **referenced briefly** on the other two with a link back, instead of repeated in full.

### 1. Agent (`/products/agent`)

- Hero: "Einklang Agent — Your AI-powered OE advisor, inside Microsoft Teams." Sub-line + Start a pilot / Book a demo CTAs. Trust strip: "Microsoft Teams & Copilot · EU GDPR · Swiss data protection".
- **What it does** — 8 capability tiles (Waste ID, VSM, Root cause, Benefit realisation, Value drivers & KPIs, AI-native improvement planning, Methodology support, Multilingual 24/7) with the existing Core / Differentiator / Support tags.
- **How it works** — 4 steps (Connect tenant · Configure · Train · Measure & realise).
- **Pricing** — two tiles: Enterprise flat rate CHF 2,500/mo unlimited seats; Team licence CHF 149/seat (min 3).
- **Proven ROI** — 30% cost reduction · 5:1 ROI · <1 week to first independent practitioner.
- **FAQ** — 6 condensed Q&As (Microsoft 365 fit · Data & GDPR · Benefit realisation · Implementation time · Languages · Support).
- Final CTA.

### 2. Academy (`/products/academy`)

- Hero: "Skill Build Academy — Build real OE capability: certified, practical, AI-native." Stats strip: 160+ certified · CHF 3.8m+ impact · 5:1 ROI · DE/EN.
- **Two pathways** — Practitioner (AI-Native Green Belt, joins at Sprint 3) and Orchestrator (AI-Native Black Belt, full 6 sprints). Languages note: DE/EN now, PT/ES coming.
- One-line callout: "Both programmes use the Einklang Agent as your 24/7 OE coach." with link → `/products/agent`.
- **Swissmem partnership** — short note + two enrolment links.
- **Programme deliverables** — 6 outcomes grid (Certification · Equipped team · Transformation roadmap · AI-Native process redesign · KPI framework · Guaranteed 5:1 ROI).
- "Notify me of next cohort" → CTA button to Calendly (no form built in this pass).
- Final CTA.

### 3. Custom Development (`/products/custom`)

- Hero: "Custom Agents — Your methodology. Your knowledge. Embedded in AI." Trust strip: Sara reference · Azure · Teams · EU GDPR.
- **What it is** — short paragraph + 4 bullets (Methodology embedded · Context aware · Human expertise amplified · Methodology becomes a digital asset).
- **Einklang Agent vs Custom Agent** — small comparison table linking standard offering to `/products/agent`.
- **Who it's for** — 3 tiles (Large enterprises · Consulting firms — Sara reference · Industry associations) + transferable domains line.
- **Process** — 5 steps (Discovery · Knowledge build · Build & test · Deploy · Run & evolve).
- **Pricing** — Build CHF 28k–45k one-off; Run CHF 590/mo.
- Final CTA + secondary link "Read the Sara case study".

Shared boilerplate (Teams deployment, EU GDPR) is mentioned once per page in a single trust strip rather than repeated in every section.

## Open question

What should happen to the existing `/solutions` route?

A. **Redirect** `/solutions` → `/products/agent` (cleanest, removes duplicate).
B. Keep `/solutions` as a short overview page that links to the three product pages.
C. Delete the route file entirely.

Default if you don't pick: **A (redirect)**.

## Files touched

- new: `src/routes/products.agent.tsx`, `src/routes/products.academy.tsx`, `src/routes/products.custom.tsx`
- edit: `src/routes/__root.tsx` (nav: replace single Products link with dropdown of the 3 sub-pages)
- edit or delete: `src/routes/solutions.tsx` (per open question)
