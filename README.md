# Lee Yao — Personal Website

Lee Yao’s professional portfolio, built around the Editorial Data Systems
direction. The site presents data engineering work through structured project
evidence, architecture figures, technical labels, case studies, and a
print-ready résumé.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS with a custom token-based CSS system
- React Server Components by default
- `next/font` for Geist Sans, IBM Plex Sans, and JetBrains Mono
- Static export with no database or runtime API dependency

## Public routes

- `/`
- `/about`
- `/work`
- `/work/sec-financial-data-platform`
- `/lab`
- `/lab/job-search-os`
- `/writing`
- `/resume`

The build also generates `/sitemap.xml`, `/robots.txt`, and a custom 404 page.

## Local setup

```bash
npm install
npm run dev
```

The development server is available at `http://localhost:3000`.

## Validation

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

`npm run build` performs the static Next.js export and prepares the existing
static-hosting artifact. `npm run start` serves that artifact for local
production-mode verification.

## Production environment

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS site origin before a production
build. The value must contain only the origin, with no path, query, or hash.
It is used for the metadata base, canonical URLs, sitemap entries, and the
robots sitemap reference.

Vercel system URL variables are supported as a fallback during Vercel builds,
but `NEXT_PUBLIC_SITE_URL` should be set when the final production URL or
independent domain is known. No runtime secrets are required.

Copy `.env.example` to a local environment file when validating a production
build. Environment files remain ignored; `.env.example` is the only tracked
environment template.

## Deployment readiness

- Framework preset: Next.js
- Build command: `npm run build`
- Static output: `out`
- Production URL input: `NEXT_PUBLIC_SITE_URL` outside Vercel; Vercel’s
  production URL variable is an automatic fallback
- Database: none
- Runtime API: none
- Analytics or tracking: none
- Contact backend: none; the site uses confirmed direct contact links

The repository is suitable for a separate Vercel import after the production
site URL is selected and configured. This repository does not require a custom
base path, rewrite, redirect, database, or serverless API for ordinary site
rendering.

See [docs/production-readiness.md](docs/production-readiness.md) for the
maintained release checklist.
