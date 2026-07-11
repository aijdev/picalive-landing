# PicAlive — Marketing Website

Production-ready, SEO-optimized marketing site for **PicAlive**, an iOS app that
turns a single still photo into a realistic, AI-generated moving video. Built
with Next.js 16 (App Router), React 19, and Tailwind CSS v4.

The site is engineered around two goals: **rank in Google organic search** and
**convert visitors into App Store installs**.

## Getting started

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build (static export to out/)
pnpm start    # serve the production build
```

## Before you deploy

Update the placeholders in [`app/lib/site.ts`](app/lib/site.ts):

| Constant | Replace with |
| --- | --- |
| `SITE_URL` | Your real production origin (also settable via `NEXT_PUBLIC_SITE_URL`) |
| `APP_STORE_URL` | The live App Store listing URL for PicAlive |
| `SUPPORT_EMAIL` | Your real support inbox |
| `TWITTER_HANDLE` | Your real handle |

`SITE_URL` drives canonical URLs, the sitemap, robots, and absolute OpenGraph
image URLs, so it must be correct in production.

## Pages

- `/` — home (hero, pillars, how-it-works, feature highlights, capabilities,
  examples, social proof, pricing teaser, companion apps, FAQ)
- `/how-it-works` — the Make Alive flow explained end to end
- `/examples` — what people bring to life (old photos, portraits, pets, more)
- `/pricing` — free vs PicAlive PRO, plans, and comparison
- `/faq`, `/about`, `/privacy`, `/terms`, `/contact`

## SEO

- Per-page `title`, `description`, canonical, OpenGraph, and Twitter metadata
  via the `buildMetadata` helper ([`app/lib/seo.ts`](app/lib/seo.ts))
- Dynamic OpenGraph/Twitter image ([`app/opengraph-image.tsx`](app/opengraph-image.tsx))
- JSON-LD structured data ([`app/lib/schema.ts`](app/lib/schema.ts)):
  Organization, WebSite, SoftwareApplication, FAQPage, BreadcrumbList
- `robots.ts`, `sitemap.ts`, `manifest.ts`, and branded `app/icon.png` /
  `app/apple-icon.png`
- One `<h1>` per page, semantic headings, descriptive image alt text

## Content

All marketing copy lives in [`app/lib/content.ts`](app/lib/content.ts), extracted
and expanded from `PRODUCT_STORY.md`. Edit it there and every page, sitemap
entry, and schema block stays in sync.

## Images & performance

App Store screenshots (`public/screenshot_0–3.jpg`) already include a device
mockup and marketing headline, so they're shown in a clean elevated frame rather
than a second phone frame. Because the `sharp` optimizer isn't installed,
`next.config.ts` sets `images.unoptimized` and we ship appropriately sized
assets. Pages are statically generated with minimal client JavaScript (only the
header mobile menu is a client component).

## Design

A dark, cinematic theme built on PicAlive's identity — a near-black canvas, white
type, and the vivid red "play button" accent from the app icon, rendered as an
ember → red → hot-red gradient for a sense of motion. Generous whitespace,
subtle animation, full responsiveness, and accessible focus states. The site is
dark-only by design — no light theme or toggle.
