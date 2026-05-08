## Header navigation update

Replace the two CTA buttons in `src/routes/__root.tsx` header with a real nav menu plus a single "Book a demo" CTA.

### Layout (left → right)
- Logo (unchanged, far left)
- Nav links (centered/right of logo): **Solutions** · **Select Cases** · **Letter to our CEO clients** · **Who we are**
- "Book a demo" button (far right, solid primary, unchanged style)
- Remove "Start a pilot" entirely

### Routes
Wire each nav link to a route. New route files to create as minimal stubs (headline + short intro + matching `head()` meta) so navigation doesn't 404:

| Label | Path | Route file |
|---|---|---|
| Solutions | `/solutions` | `src/routes/solutions.tsx` (new) |
| Select Cases | `/case-studies` | existing `src/routes/case-studies.index.tsx` |
| Letter to our CEO clients | `/letter` | `src/routes/letter.tsx` (new) |
| Who we are | `/about` | `src/routes/about.tsx` (new) |

Each new page uses the existing typography tokens (`txt-primary-headline`, `txt-body`, `txt-label-nav`) and the same page chrome as `/contact`. Real content can be added later.

### Styling
- Nav links: `txt-label-nav` style, `text-primary`, hover underline.
- Hidden on small screens (`hidden md:flex`); on mobile only the logo + Book a demo show. (No hamburger for now — can add later if requested.)
- Active link: subtle underline via `activeProps`.

### Out of scope
- Mobile drawer / hamburger menu
- Real content for the three new pages (stub only)
- Footer changes
