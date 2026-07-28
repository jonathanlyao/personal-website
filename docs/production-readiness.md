# Production readiness

Use this checklist before importing or promoting the portfolio on a production
host.

## Public surface

- [x] `/`
- [x] `/about`
- [x] `/work`
- [x] `/work/sec-financial-data-platform`
- [x] `/lab`
- [x] `/lab/job-search-os`
- [x] `/writing`
- [x] `/resume`
- [x] Custom 404 for invalid routes
- [x] `sitemap.xml` contains only the eight public routes
- [x] `robots.txt` allows the public site and references the sitemap
- [x] `icon.svg` uses the LY monogram

## Build and environment

Run:

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

Production builds outside Vercel require:

```text
NEXT_PUBLIC_SITE_URL
```

Set it to the final HTTPS origin without a path, query, or hash. Vercel’s
production URL variable is supported as a fallback, but the explicit value is
preferred once the final URL is known. The site requires no runtime secret,
database, local service, or application API.

## Metadata and crawling

- [x] Every public route has a distinct title and description
- [x] Every public route has an Open Graph title and description
- [x] Canonical URLs resolve through the environment-driven metadata base
- [x] No fake production domain is committed
- [x] No localhost URL is emitted by a production build with the required
      environment configured
- [ ] Add a branded Open Graph image in a future content/design phase

## Quality checks

- [x] Shared navigation order is About, Work, Lab, Writing, Resume, Contact
- [x] Contact points to `/#contact`
- [x] Skip link targets the main landmark
- [x] Visible focus styles and reduced-motion handling are present
- [x] External new-tab links announce their behavior
- [x] Diagrams retain captions and textual implementation states
- [x] Responsive checks cover 1440, 1280, 1024, 900, 768, 430, 390, and 360px
- [x] No page-level horizontal overflow
- [x] Résumé print layout uses Letter paper and remains three pages
- [x] Print output hides navigation, footer, and controls
- [x] Direct email, LinkedIn, and GitHub links use confirmed public values
- [x] No phone number is rendered
- [x] No analytics, form endpoint, or tracking script is installed

## Vercel preparation

1. Select the production Vercel URL or independent domain.
2. Set `NEXT_PUBLIC_SITE_URL` in the Vercel production environment.
3. Use the Next.js framework preset and `npm run build`.
4. Confirm `/sitemap.xml`, `/robots.txt`, the favicon, deep-route refreshes,
   invalid-route 404 responses, and résumé printing on the production URL.
5. Add analytics only in a separately approved privacy-review phase.

The final production URL remains the only deployment decision intentionally
left unresolved by this repository.

## Non-blocking follow-ups

- The production dependency audit currently reports zero advisories. The full
  audit reports development-only advisories through the ESLint
  `minimatch`/`brace-expansion` toolchain; reassess them with a compatible
  tooling release instead of forcing a major upgrade.
- A branded Open Graph image, Apple touch icon, and web app manifest are not
  required for the current static portfolio but may be added in a separately
  approved asset phase.
- `Design-Documents` contains historical creative-brief artifacts that use an
  earlier draft identity. They are not referenced by source code or copied into
  the static output. Decide whether to retain them before making the source
  repository public.
- Run Lighthouse after deployment when the CLI or hosting integration is
  available; the local production audit covers equivalent route, metadata,
  accessibility, responsive, console, resource, and crawlability checks but
  does not assign Lighthouse scores.
