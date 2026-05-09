## Issue
The About page (`/about`, "Who we are") uses `max-w-6xl` for its outer container, while all other main pages (home, products, case studies index, header/footer) use `max-w-7xl`. This makes About look narrower than the rest of the site.

## Change
In `src/routes/about.tsx`, line 79:

- Before: `<div className="max-w-6xl mx-auto px-6 lg:px-10 py-20">`
- After: `<div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">`

No other edits needed — inner sections use their own narrower constraints (`max-w-3xl`, `max-w-2xl`) which remain appropriate for readability.