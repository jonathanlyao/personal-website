# Portfolio image map

The site publishes only confirmed project evidence and does not use stand-in
artwork. Add future assets at the documented paths, then add the matching
`src` in `src/data/projectMedia.ts`.

## Brand

- `/images/brand/raw-to-reliable-hero.webp`
- `/images/brand/raw-to-reliable-og.webp`
  - Hero engineering visual: approximately 1600 × 1000
  - Open Graph image: 1200 × 630
  - Do not configure the Open Graph path until the real file exists

## About

- `/images/about/lee-yao-portrait.webp`
  - Recommended crop: 4:5 portrait, approximately 1200 × 1500
  - Use a current, professional photograph with a quiet background

## Work index thumbnails

- `/images/projects/sec-platform/thumbnail.webp`
- `/images/projects/cms-medicare/thumbnail.webp`
- `/images/projects/olist/thumbnail.webp`
- `/images/projects/flights/thumbnail.webp`
- `/images/projects/nyc-taxi/thumbnail.webp`
  - Recommended crop: 16:10, approximately 1200 × 750
  - Add the corresponding `media` object to the project in
    `src/data/projects.ts`

## SEC Financial Data Platform

- `/images/projects/sec-platform/overview.webp`
- `/images/projects/sec-platform/architecture.webp`
- `/images/projects/sec-platform/validation.webp`
- `/images/projects/sec-platform/data-model.webp`
- `/images/projects/sec-platform/dashboard.webp`
- `/images/projects/sec-platform/implementation-evidence.webp`

## Job Search OS

- `/images/projects/job-search-os/overview.webp`
- `/images/projects/job-search-os/scoring.webp`
- `/images/projects/job-search-os/profile.webp`
- `/images/projects/job-search-os/application-tracker.webp`
  - These four confirmed product screenshots are integrated into the case
    study in narrative order.

## Other documented projects

- `/images/projects/cms-medicare/overview.webp`
- `/images/projects/cms-medicare/architecture.webp`
- `/images/projects/cms-medicare/dashboard.webp`
- `/images/projects/olist/overview.webp`
- `/images/projects/olist/architecture.webp`
- `/images/projects/olist/dashboard.webp`
- `/images/projects/flights/overview.webp`
- `/images/projects/flights/architecture.webp`
- `/images/projects/flights/dashboard.webp`
- `/images/projects/nyc-taxi/overview.webp`
- `/images/projects/nyc-taxi/architecture.webp`
- `/images/projects/nyc-taxi/dashboard.webp`

## Asset guidance

- Prefer WebP or AVIF for screenshots and photography.
- Export case-study screenshots around 1600 × 1000 when the source permits.
- Crop out secrets, personal application data, tokens, browser chrome, and
  unrelated desktop content.
- Keep interface text readable and avoid decorative mockups that obscure the
  product.
- Write concise, factual alt text in `src/data/projectMedia.ts`.
- Add a source note when an image includes third-party data or a supplied
  reference.
- Never add an empty stand-in file. A slot without `src` renders
  nothing.
