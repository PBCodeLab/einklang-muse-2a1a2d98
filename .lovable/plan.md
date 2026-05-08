Replace the "Einklang Academy" wordmark in the site header with the official Einklang AI logo.

## Source
`https://einklang-academy.com/wp-content/uploads/2026/05/einklang_ai_logo_header.png`

## Steps
1. Download the logo to `src/assets/einklang-logo.png` so it's bundled (faster, cached, works offline of the source CDN).
2. In `src/routes/__root.tsx`, update the `SiteHeader` brand `<Link to="/">`:
   - Replace the text wordmark with `<img>` of the imported logo.
   - `alt="Einklang Academy"`, `height: 32px` (auto width) so it sits cleanly in the 64px-tall header.
3. Footer keeps the text wordmark "Einklang Academy" (typographic balance in the footer column).

No other files change.
