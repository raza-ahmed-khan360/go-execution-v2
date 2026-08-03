# Go Execution — Next.js

Modern Next.js App Router implementation of the Go Execution website. The UI, interactions, contact delivery, and responsive behavior are implemented as React and Next.js components; no WordPress, jQuery, or legacy browser bundles are loaded.

## Project structure

- `app/` — routes, root layout, global styles, metadata, and the contact API route
- `components/` — reusable server and client UI components
- `lib/` — typed application data and the branded contact-email template
- `public/assets/images/` — static brand and portfolio imagery
- `public/assets/videos/` — optimized local video assets
- `scripts/` — one-time WordPress content extraction utilities retained for traceability

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Global styling is bundled from `app/globals.css`; migrated WordPress content lives in `lib/wp-content.json`.
