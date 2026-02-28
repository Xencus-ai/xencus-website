# Xencus Website

Marketing website for Xencus — an EdTech operations platform.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| UI | React 19 |
| Styling | Tailwind CSS v4.2 |
| Animations | Framer Motion v12 |
| Icons | Lucide React |
| Font | Google Sans via `next/font/google` |
| Deployment | Vercel (primary) |

---

## Getting Started

**Requirements:** Node.js ≥ 20, npm ≥ 10

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint       # ESLint
```

### Environment Variables

Copy `.env.example` and fill in values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_BASE_URL` | Production domain e.g. `https://xencus.com` |

---

## Project Structure

```
app/                        # Next.js App Router pages
  layout.tsx                # Root layout — font, metadata, JSON-LD, Header, Footer
  page.tsx                  # Homepage (static Server Component)
  globals.css               # Tailwind @theme tokens + global styles
  robots.ts                 # /robots.txt (auto-generated)
  sitemap.ts                # /sitemap.xml (auto-generated)
  contact/
    layout.tsx              # Contact metadata + Calendly script (Server Component)
    page.tsx                # Contact page ("use client" — Calendly popup)
  services/edtech-companies/
    page.tsx                # EdTech services page + JSON-LD schemas

components/
  layout/
    Header.tsx              # Navbar with mega menu + mobile drawer ("use client")
    Footer.tsx              # Footer (Server Component)
  sections/                 # Homepage sections (Server Components unless noted)
    Hero.tsx
    AnimatedStatCounter.tsx # "use client" — count-up animation (IntersectionObserver)
    WhatWeDo.tsx
    CertificatePlatform.tsx # Loads DashboardMockup via dynamic() + Suspense
    DashboardMockup.tsx     # "use client" — framer-motion tilt/scroll/cursor
    HowWeWork.tsx
    HowWeScale.tsx
    OtherServices.tsx       # Wraps HorizontalScrollContainer
    Testimonials.tsx
  ui/
    HorizontalScrollContainer.tsx  # "use client" — generic scroll wrapper
  seo/
    JsonLd.tsx              # Renders <script type="application/ld+json">

content/                    # All page copy as typed `as const` objects
  hero.ts, what-we-do.ts, how-we-work.ts, how-we-scale.ts
  certificate-platform.ts, other-services.ts, stats.ts
  nav.ts, footer.ts, site.ts

lib/
  constants.ts              # SITE_NAME, SITE_DESCRIPTION, BASE_URL
  seo.ts                    # buildPageMetadata() — reusable metadata builder
  structured-data.ts        # ALL JSON-LD schemas (Organization, Website, Service, FAQ)
```

---

## Design System

All design tokens live in [`app/globals.css`](app/globals.css) — there is **no** `tailwind.config.ts`.

### Colors

```css
--brand: #facc48          /* amber — use for backgrounds, borders, icons */
--brand-secondary: #151515
--heading: #171717         /* primary text */
--paragraph: #707070       /* body text */
--paragraph-secondary: #525252
```

Tailwind utilities generated: `bg-brand`, `text-brand`, `border-brand`, `text-heading`, `text-paragraph-secondary`, etc.

### Font

Google Sans loaded via `next/font/google` in `app/layout.tsx`. Weights available: 400, 500, 600, 700.
Use standard Tailwind font-weight utilities (`font-normal`, `font-medium`, `font-semibold`, `font-bold`).

### Navbar — DO NOT MODIFY

The navbar (`components/layout/Header.tsx`) has its own isolated design system using **liquid glass** CSS classes (`.nav-liquid`, `.nav-liquid-panel`). These are defined under the `/* LIQUID GLASS */` section in `globals.css`. Do not touch these classes or the Header component's styling — any change breaks the glass effect across all viewports.

---

## Content Editing

**Never hardcode copy in JSX.** All text lives in `content/*.ts` files as typed `as const` objects.

To update text on a section, find the matching file:

| Section | Content file |
|---|---|
| Hero | `content/hero.ts` |
| What We Do | `content/what-we-do.ts` |
| How We Work | `content/how-we-work.ts` |
| How We Scale | `content/how-we-scale.ts` |
| Certificate Platform | `content/certificate-platform.ts` |
| Other Services | `content/other-services.ts` |
| Stats (hero numbers) | `content/stats.ts` |
| Navigation | `content/nav.ts` |
| Footer | `content/footer.ts` |

---

## SEO

### Metadata
Use `buildPageMetadata()` from `lib/seo.ts` on every page. It generates title, description, Open Graph, and Twitter Card tags consistently.

```ts
export const metadata: Metadata = buildPageMetadata({
  title: "Page Title",
  description: "Page description",
  path: "/page-path",
});
```

### JSON-LD Structured Data
All schemas live in `lib/structured-data.ts`. **Never write inline JSON-LD in page files.**

Available schema builders: `getOrganizationSchema()`, `getWebsiteSchema()`, `getItemListSchema()`, `getServiceSchema()`, `getFAQSchema()`.

Render with: `<JsonLd data={schema} />`

### Missing Asset
`/public/og.png` (1200×630 PNG) needs to be created — it's the default Open Graph image referenced in metadata. Until it exists, social share previews will show a broken image.

---

## Server vs Client Components

This project follows strict RSC boundaries — `"use client"` only at leaf components.

| Component | Type | Why |
|---|---|---|
| All section wrappers | Server | No hooks, no interactivity |
| `Header.tsx` | Client | Mobile/mega menu state, framer-motion |
| `AnimatedStatCounter.tsx` | Client | Count-up animation (IntersectionObserver) |
| `DashboardMockup.tsx` | Client | Framer-motion tilt, scroll, cursor |
| `HorizontalScrollContainer.tsx` | Client | Scroll state + arrow buttons |
| `contact/page.tsx` | Client | Calendly popup trigger |
| `contact/layout.tsx` | Server | Metadata wrapper for client page |

**Rule:** Never add `ssr: false` to `dynamic()` inside a Server Component — Next.js 16 will throw a build error.

---

## Performance

### Image Guidelines
- Use AVIF format for hero/large images (`/public/Assets/`)
- Always set the `sizes` prop on `<Image>` — wrong sizes = oversized downloads on mobile
- LCP image (Hero) must have `priority` and `fetchPriority="high"`
- `placeholder="blur"` + `blurDataURL` on all below-fold images

### Framer Motion
`DashboardMockup.tsx` is the only heavy client component. It's loaded via `dynamic()` with a `<Suspense>` skeleton fallback in `CertificatePlatform.tsx` so it doesn't block first paint.

### Browser Targets
`package.json` `browserslist`: Chrome/Edge 94+, Firefox 93+, Safari 15.4+. Do not lower these — it increases transpilation output and polyfill size.

---

## Deployment

### Vercel (primary)
1. Connect GitHub repo to Vercel — Next.js is auto-detected
2. Add environment variable: `NEXT_PUBLIC_BASE_URL = https://xencus.com`
3. Add custom domain `xencus.com` + `www.xencus.com`
4. Every push to `main` triggers a production deploy

Config: [`vercel.json`](vercel.json) — sets framework to `nextjs`.
Node version: pinned to 20 via `.nvmrc` and `package.json` `engines`.

### Hostinger (static fallback)
```bash
npm run build:static   # sets EXPORT=true → produces /out directory
```
Upload the `/out` folder via FTP. Images will be unoptimized (no Next.js image server).

---

## Key Rules for New Developers

1. **Content goes in `content/*.ts`** — never hardcode strings in JSX
2. **JSON-LD goes in `lib/structured-data.ts`** — never inline in page files
3. **Don't touch `Header.tsx` styling** — the liquid glass navbar is isolated by design
4. **Don't add `ssr: false` in `dynamic()`** inside Server Components — it throws in Next.js 16
5. **No `tailwind.config.ts`** — all Tailwind config is in `app/globals.css` via `@theme`
6. **New pages need metadata** — use `buildPageMetadata()` and add the route to `app/sitemap.ts`
7. **`"use client"` only at leaf level** — section wrappers must stay as Server Components
