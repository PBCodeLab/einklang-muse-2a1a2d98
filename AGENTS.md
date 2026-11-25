# Architecture rules

- Retired public pages use redirect-only TanStack route files with HTTP 301 responses, so existing public URLs remain valid without retaining obsolete page content.
- Redirect regression tests live in `tests/` and exercise the running app over HTTP with Python's standard-library unittest, so permanent redirect destinations are checked without adding browser or server dependencies.
- Agent plan rules live in shared JSON data consumed by the pricing page and Python regression tests, so prices, billing terms, and entitlements can be verified without coupling tests to presentation copy.
- Result values and evidence qualifiers live in shared JSON data with browser-safe formatting helpers, so headline stats and programme claims use the same measured figures and cannot drift independently.
- Sharing-image metadata is added through a shared helper on content leaf routes only, so each page gets one matched Open Graph/Twitter image pair without inherited root-level duplicates.
- The book page and homepage teaser reuse one CDN cover pointer, so the image stays consistent without duplicated binaries.
- Shared company facts live in browser-safe JSON reused by About, the footer and factual regression tests, so founding and contact details stay consistent.
- Post cover descriptions live alongside post data and render as image alternatives, so image context stays with each post.