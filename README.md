# MI Engineers Website

Premium App Router website for MI Engineers & Services, focused on HVAC, electrical works, fire protection systems, lead capture, and local SEO.

## Stack

- Next.js App Router
- React + TypeScript
- CSS Modules + global design tokens
- Framer Motion
- Zustand
- React Hook Form + Zod
- TanStack Query
- Appwrite-ready client utilities

## Run locally

1. Copy `.env.example` to `.env.local` and fill the Appwrite values.
2. Install dependencies with `npm install`.
3. Start the dev server with `npm run dev`.

## Scripts

- `npm run dev`
- `npm run lint`
- `npm run typecheck`
- `npm run build`

## Appwrite notes

If Appwrite environment variables are missing, contact and feedback submissions are queued locally in the browser so the UI still works during development. Add the real Appwrite project, database, collection, and bucket IDs to enable live submissions.

## Implemented areas

- Premium glassmorphism landing page with motion-rich hero
- Service category tabs and specialization showcase
- Trust counters and brand marquee
- Contact, quick-quote, and feedback capture flows
- Local business and FAQ JSON-LD
- `robots.txt` and `sitemap.xml`
