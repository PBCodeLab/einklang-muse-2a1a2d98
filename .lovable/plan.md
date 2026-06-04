# Add "Posts" as a sub-menu under AI Strategy

## Current state
"AI Strategy" in the nav currently points to `/letter`. I'll keep that page intact and add **Posts** as a sub-item under it.

## What I'll build

**1. New route `/letter/posts`** (list page)
- Renders cards for each curated LinkedIn post, newest first
- Each card: title, excerpt, date, "Read on LinkedIn →" (opens linkedin.com in new tab)
- Own SEO `head()`: title, description, og tags
- Reuses existing design tokens — no new colors

**2. Posts data file `src/data/posts.ts`**
- Typed array: `{ id, title, excerpt, date, linkedinUrl, coverImage? }`
- To add a new post, you give me URL + title + excerpt + date and I append one entry

**3. Nav sub-menu under "AI Strategy"** (in `src/routes/__root.tsx`)
- Hover/focus on "AI Strategy" opens a small dropdown with two links:
  - **Letter** → `/letter`
  - **Posts** → `/letter/posts`
- Clicking "AI Strategy" itself still goes to `/letter`
- Mobile: expands inline rather than dropdown
- Built with plain Tailwind + existing shadcn primitives; no new deps

## Your first post — what to send me

Paste these 4 things in the chat:
1. LinkedIn post URL (••• → Copy link to post)
2. Title / hook (~6–10 words)
3. Excerpt (1–3 sentences)
4. Publish date
5. *(Optional)* cover image

I'll add it to `src/data/posts.ts` and it appears on `/letter/posts` immediately.

## Files touched
- `src/routes/__root.tsx` — add dropdown sub-menu
- `src/routes/letter.posts.tsx` — new list route
- `src/data/posts.ts` — new data file (starts with your first post once you send it)