# Architecture rules

- Retired public pages use redirect-only TanStack route files with HTTP 301 responses, so existing public URLs remain valid without retaining obsolete page content.
- Redirect regression tests live in `tests/` and exercise the running app over HTTP with Python's standard-library unittest, so permanent redirect destinations are checked without adding browser or server dependencies.