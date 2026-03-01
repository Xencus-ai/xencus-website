<p align="center">
  <img src="public/Assets/xencus-logo.svg" alt="Xencus" width="180" />
</p>

# Xencus Website

Production marketing website for **Xencus** — the operations backbone for scalable EdTech companies.
Built with Next.js 16 App Router, React 19, TypeScript strict, and Tailwind CSS v4.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Architecture Overview](#3-architecture-overview)
4. [Folder Structure](#4-folder-structure)
5. [Getting Started](#5-getting-started)
6. [Environment Setup](#6-environment-setup)
7. [Development Workflow](#7-development-workflow)
8. [Testing System](#8-testing-system)
9. [Performance Standards](#9-performance-standards)
10. [Code Quality Rules](#10-code-quality-rules)
11. [Design System](#11-design-system)
12. [Content Editing](#12-content-editing)
13. [SEO & Structured Data](#13-seo--structured-data)
14. [Deployment](#14-deployment)
15. [AI Engineering Workflow](#15-ai-engineering-workflow)
16. [Do's and Don'ts](#16-dos-and-donts)
17. [Troubleshooting](#17-troubleshooting)
18. [Contribution Guide](#18-contribution-guide)

---

## 1. Project Overview

Xencus is an EdTech operations platform that helps EdTech companies scale their delivery without hiring — handling trainer management, live cohort delivery, doubt sessions, certifications, and analytics.

This repository is the company's **public marketing website**. It is a statically generated Next.js app served via Vercel. Every page is pre-rendered at build time. There is no database, no authentication, and no server-side dynamic content.

**Live site:** [xencus.com](https://xencus.com)

---

## 2. Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.1.6 |
| Language | TypeScript (strict) | ^5 |
| UI Library | React | 19.2.3 |
| Styling | Tailwind CSS | v4 |
| Animations | Framer Motion | ^12 |
| Icons | Lucide React | ^0.575 |
| Font | Google Sans via `next/font/google` | — |
| E2E Testing | Playwright | ^1.58 |
| Linting | ESLint + eslint-config-next | 9 |
| Deployment | Vercel (primary) | — |
| Performance | Vercel Speed Insights | ^1.3 |

**Node:** `>=20.0.0` · **npm:** `>=10.0.0`

---

## 3. Architecture Overview

```
Request → Vercel Edge → Pre-rendered Static HTML → Browser
                            ↑
                       next build
                            ↑
               Server Components (default)
               + Client Components (leaf nodes only)
```

### Core principles

- **Zero server-side runtime.** All routes are statically generated (`○ Static` in build output). No API routes, no SSR.
- **RSC boundary discipline.** `"use client"` only at the leaf component level. Section wrappers are always Server Components.
- **Content/UI separation.** All copy lives in `content/*.ts` typed files. JSX contains zero hardcoded strings.
- **Single source of truth for SEO.** `lib/seo.ts` for metadata, `lib/structured-data.ts` for JSON-LD. Never inline either.
- **Security headers at the framework level.** All headers configured in `next.config.ts` — no separate server configuration needed.

---

## 4. Folder Structure

```
xencus-website/
├── app/                            # Next.js App Router
│   ├── layout.tsx                  # Root layout: font, metadata, JSON-LD, Header, Footer
│   ├── page.tsx                    # Homepage (static Server Component)
│   ├── globals.css                 # Tailwind @theme design tokens + global styles
│   ├── robots.ts                   # Auto-generates /robots.txt
│   ├── sitemap.ts                  # Auto-generates /sitemap.xml
│   ├── contact/
│   │   ├── layout.tsx              # Contact metadata + Calendly <Script> (Server Component)
│   │   └── page.tsx                # Contact form ("use client" — Calendly popup)
│   └── services/
│       └── edtech-companies/
│           └── page.tsx            # EdTech page + FAQPage + Service JSON-LD (static)
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Navbar: pill nav + mega menu + mobile drawer ("use client")
│   │   └── Footer.tsx              # Footer (Server Component)
│   ├── sections/                   # One file per homepage section
│   │   ├── Hero.tsx                # Server Component
│   │   ├── AnimatedStatCounter.tsx # "use client" — IntersectionObserver count-up
│   │   ├── WhatWeDo.tsx            # Server Component
│   │   ├── CertificatePlatform.tsx # Server Component — loads DashboardMockup via dynamic()
│   │   ├── DashboardMockup.tsx     # "use client" — framer-motion tilt/scroll/cursor
│   │   ├── HowWeWork.tsx           # Server Component
│   │   ├── HowWeScale.tsx          # Server Component
│   │   ├── OtherServices.tsx       # Server Component — wraps HorizontalScrollContainer
│   │   └── Testimonials.tsx        # Server Component — marquee animation via CSS
│   ├── ui/
│   │   ├── Container.tsx           # Layout primitive
│   │   └── HorizontalScrollContainer.tsx  # "use client" — arrow-driven scroll
│   └── seo/
│       └── JsonLd.tsx              # Renders <script type="application/ld+json">
│
├── content/                        # All page copy — typed `as const` objects
│   ├── hero.ts
│   ├── what-we-do.ts
│   ├── how-we-work.ts
│   ├── how-we-scale.ts
│   ├── certificate-platform.ts
│   ├── other-services.ts
│   ├── stats.ts
│   ├── nav.ts
│   ├── footer.ts
│   └── site.ts
│
├── lib/
│   ├── constants.ts                # SITE_NAME, SITE_DESCRIPTION, BASE_URL
│   ├── seo.ts                      # buildPageMetadata() — reusable metadata builder
│   └── structured-data.ts          # All JSON-LD schemas (Organization, Website, Service, FAQ)
│
├── e2e/
│   └── smoke.spec.ts               # Playwright smoke tests (30 tests, 2 projects)
│
├── public/Assets/                  # Static images (AVIF preferred, WebP fallback)
│   ├── hero/
│   ├── edutech/
│   ├── dashboard/
│   ├── how-we-work/
│   ├── how-we-scale/
│   ├── testimonial/
│   ├── what-we-do/
│   └── xencus-logo.svg
│
├── next.config.ts                  # Security headers, image formats, static export gate
├── playwright.config.ts            # E2E config: Chromium desktop + Pixel 5 mobile
├── tsconfig.json                   # TypeScript strict — e2e/ excluded from Next.js compile
├── eslint.config.mjs               # ESLint 9 flat config (next/core-web-vitals + typescript)
├── postcss.config.mjs              # @tailwindcss/postcss
├── vercel.json                     # Vercel framework hint
└── .nvmrc                          # Node 20 (pinned)
```

---

## 5. Getting Started

> **Requirements:** Node.js ≥ 20, npm ≥ 10

```bash
# 1. Clone
git clone https://github.com/xencus/xencus-website.git
cd xencus-website

# 2. Use correct Node version (if using nvm)
nvm use

# 3. Install dependencies
npm install

# 4. Copy environment variables
cp .env.example .env.local

# 5. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Hot reload is enabled.

---

## 6. Environment Setup

Only one environment variable is required:

| Variable | Description | Example |
|---|---|---|
| `NEXT_PUBLIC_BASE_URL` | Production domain — used for canonical URLs, sitemap, og:image, and JSON-LD | `https://xencus.com` |

For local development the variable can be left as-is from `.env.example`. It only affects metadata output.

```bash
cp .env.example .env.local
# Edit .env.local if needed — the default value works for local dev
```

---

## 7. Development Workflow

### Daily commands

```bash
npm run dev          # Start dev server at localhost:3000 (Turbopack)
npm run build        # Production build — verify before pushing
npm run start        # Serve the production build locally
npm run typecheck    # TypeScript strict check (0 errors required)
npm run lint         # ESLint — 0 errors required, warnings allowed in review
```

### Quality gate (run before every PR)

```bash
npm run check
```

This runs TypeScript → ESLint → Build in sequence and prints a clean summary:

```
  Xencus Quality Gate

  ✓ TypeScript
  ✓ ESLint
  ✓ Build

  All checks passed.
```

### Branch strategy

```
main          production — every push deploys to xencus.com via Vercel
feature/*     new features — open PR against main
fix/*         bug fixes — open PR against main
```

Never push directly to `main`. Always open a PR and let CI verify the quality gate.

---

## 8. Testing System

### E2E Smoke Tests (Playwright)

30 tests across 2 browser projects — Chromium desktop (1280×800) and Chromium mobile (Pixel 5, 393×851).

```bash
npm run test              # All tests, all projects
npm run e2e               # Same as above
npm run e2e:chromium      # Desktop only
npm run e2e:mobile        # Mobile only
```

Tests automatically start the production server via `webServer` config in `playwright.config.ts`.

**Test coverage:**

| Suite | Tests | What it validates |
|---|---|---|
| Homepage smoke | 6 | Title, skip-to-main, h1, CTA href, testimonials, stats |
| Contact page | 4 | Heading, phone link, email link, Calendly button |
| EdTech services page | 2 | h1 renders, exactly 8 service cards present |
| Navigation / infra | 3 | Mobile drawer open/close, /robots.txt 200, /sitemap.xml 200 |

All tests run against the production build — not the dev server — to catch static generation issues.

### TypeScript check

```bash
npm run typecheck    # tsc --noEmit → must exit 0
```

### Linting

```bash
npm run lint         # eslint-config-next/core-web-vitals + typescript rules
```

### Performance check (Lighthouse)

Fully self-contained — builds the project, starts the server, runs the audit, then kills the server automatically.

```bash
npm run lighthouse
# Saves report to .lighthouse-report.html
# Open it with: open .lighthouse-report.html
```

**Targets (desktop preset):**

| Metric | Target |
|---|---|
| Performance | ≥ 90 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |
| LCP | < 2.5s |
| CLS | < 0.1 |

---

## 9. Performance Standards

### Image rules

- **Format:** Use AVIF for hero/large images. WebP as fallback. PNG/JPG only for legacy assets.
- **`sizes` prop:** Always set accurately — wrong value = oversized downloads on mobile.
- **LCP image:** Must have `priority` and `fetchPriority="high"` on the above-fold hero image.
- **Below-fold images:** Use `placeholder="blur"` + `blurDataURL`. Extract shared base64 strings to module constants, never repeat inline.
- **Alt text:** Decorative images use `alt=""`. Informative images must have descriptive alt text.

**Converting images to AVIF:**

Use [Squoosh](https://squoosh.app/) — a free, browser-based image compressor by Google. No install needed.

1. Open [squoosh.app](https://squoosh.app/) and drag in your image.
2. Set the output codec to **AVIF**.
3. Adjust quality (70–80 is a good starting point) and download.
4. Place the `.avif` file in `public/Assets/<folder>/` and update the `src` reference in `content/*.ts` or the component.

```tsx
// Correct — LCP image
<Image src="..." alt="..." fill priority fetchPriority="high" sizes="100vw" />

// Correct — below-fold, shared blur constant
const BLUR_SVG = "data:image/svg+xml;base64,...";
<Image src="..." alt="" fill placeholder="blur" blurDataURL={BLUR_SVG} sizes="..." />
```

### Framer Motion

Framer Motion is the heaviest dependency (~100KB gz). Contain it:

- `DashboardMockup.tsx` is the only allowed heavy client component.
- It is loaded via `dynamic()` inside `CertificatePlatform.tsx` (a Server Component).
- `Header.tsx` uses `AnimatePresence` and `motion.div` — acceptable since the header is always visible.
- Never import from `framer-motion` inside a new Server Component.

### Bundle budget

| Asset | Raw | Gzip |
|---|---|---|
| Total JS chunks | ~725 KB | ~226 KB |
| CSS | ~86 KB | ~12 KB |

Do not let total gzipped JS exceed **250 KB** without explicit review.

### Browser targets

`package.json` `browserslist`: Chrome/Edge 94+, Firefox 93+, Safari 15.4+.
Do not lower these thresholds — wider browser support increases transpilation output and polyfill size.

---

## 10. Code Quality Rules

### TypeScript

- `"strict": true` in `tsconfig.json` — non-negotiable.
- No `any` casts. Use proper type declarations.
- For browser globals (e.g. third-party scripts on `window`), use `declare global { interface Window { ... } }`.
- All content data structures must be typed. Prefer `as const` for static arrays.

```ts
// Wrong
(window as any).Calendly?.initPopupWidget({ url });

// Correct
declare global {
  interface Window {
    Calendly?: { initPopupWidget: (options: { url: string }) => void };
  }
}
window.Calendly?.initPopupWidget({ url });
```

### Component patterns

- **Server Components by default.** Only add `"use client"` when the component needs hooks, browser APIs, or event listeners.
- **`"use client"` at the leaf.** Never bubble `"use client"` up to a section wrapper or layout.
- **DRY data arrays.** If you have more than 2 similar JSX blocks, extract a data array + typed component.
- **No hardcoded strings.** All copy lives in `content/*.ts`. JSX references content file exports.
- **No magic numbers.** Extract named constants.

### Naming conventions

| Thing | Convention | Example |
|---|---|---|
| Components | PascalCase | `DashboardMockup` |
| Files | PascalCase for components | `DashboardMockup.tsx` |
| Content files | kebab-case | `certificate-platform.ts` |
| CSS classes | Tailwind utilities only | `rounded-2xl bg-white/80` |
| Module-level constants | SCREAMING_SNAKE | `BLUR_SVG`, `EDTECH_CARDS` |

### ESLint rules in force

- `next/core-web-vitals` — disallows patterns that harm Core Web Vitals
- `@typescript-eslint` — enforces TypeScript best practices (`prefer-const`, etc.)
- No inline `eslint-disable` unless you can justify in a code comment. Remove stale directives immediately.

---

## 11. Design System

All design tokens live in [`app/globals.css`](app/globals.css) — there is **no** `tailwind.config.ts`.

### Color palette

| Token | Value | Usage |
|---|---|---|
| `--color-brand` | `#FAAB4E` (amber) | Backgrounds, borders, CTA fills |
| `--color-brand-secondary` | `#151515` | Text on brand backgrounds |
| `--color-text-primary` | `#171717` | Headings |
| `--color-text-secondary` | `#707070` | Body text |

Tailwind utilities auto-generated from `@theme`: `bg-brand`, `text-brand`, `text-heading`, `text-paragraph-secondary`, `bg-background`, etc.

### Typography

Google Sans loaded via `next/font/google` in `app/layout.tsx`.
Available weights: 400, 500, 600, 700. Use standard Tailwind weight utilities: `font-normal`, `font-medium`, `font-semibold`, `font-bold`.

### Navbar — DO NOT MODIFY

`components/layout/Header.tsx` uses the **liquid glass** design system — isolated CSS classes `.nav-liquid` and `.nav-liquid-panel` defined under `/* LIQUID GLASS */` in `globals.css`.

**Do not change these classes or the Header's styling.** Any modification breaks the glass blur effect across all viewports. The navbar design is intentionally independent of the rest of the system.

---

## 12. Content Editing

**Never hardcode copy in JSX.** All text lives in `content/*.ts` as typed `as const` objects.

| Section | File |
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
| Site-wide constants | `content/site.ts` |

To update text: edit the content file → TypeScript will catch any type mismatches → the section component auto-reflects the change.

---

## 13. SEO & Structured Data

### Metadata

Use `buildPageMetadata()` from `lib/seo.ts` on every page. It generates title, description, Open Graph, and Twitter Card tags consistently.

```ts
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Page Title",
  description: "Page description.",
  path: "/page-path",           // used for canonical URL + og:url
});
```

### JSON-LD Structured Data

All schemas live in `lib/structured-data.ts`. **Never write inline JSON-LD in page files.**

Available schema builders:

| Function | Schema type |
|---|---|
| `getOrganizationSchema()` | Organization (used in root layout) |
| `getWebsiteSchema()` | Website with SearchAction |
| `getItemListSchema()` | ItemList for service pages |
| `getServiceSchema()` | Service |
| `getFAQSchema()` | FAQPage |

Render with:

```tsx
import { JsonLd } from "@/components/seo/JsonLd";
<JsonLd data={getFAQSchema(faqItems)} />
```

### Adding a new page

1. Create `app/<route>/page.tsx`
2. Export `metadata` using `buildPageMetadata()`
3. Add the route to `app/sitemap.ts`
4. If structured data is needed, add a schema function to `lib/structured-data.ts`

### Missing asset

`/public/og.png` (1200×630 PNG) must be created manually — it is the default Open Graph image. Until it exists, social share previews will show a broken image.

---

## 14. Deployment

### Vercel (primary)

Every push to `main` automatically deploys to production.

```bash
# Manual setup (one time)
# 1. Connect GitHub repo to Vercel — Next.js auto-detected via vercel.json
# 2. Add environment variable in Vercel dashboard:
#    NEXT_PUBLIC_BASE_URL = https://xencus.com
# 3. Add custom domains: xencus.com + www.xencus.com
```

Node version is pinned to 20 via `.nvmrc` and `package.json` `engines`. Do not change either.

### Hostinger (static fallback)

```bash
npm run build:static   # Sets EXPORT=true → produces /out directory
# Upload /out via FTP or Hostinger file manager
```

Images are unoptimized in static export mode (no Next.js image optimization server).

### Pre-deploy checklist

```bash
npm run check          # TypeScript + ESLint + Build — must all pass
npm run e2e:chromium   # Smoke tests — must all pass
```

---

## 15. AI Engineering Workflow

This project uses AI agents as part of the daily engineering cycle. Each agent has a defined role and scope.

### Staff Engineer Agent (Code Review)

**Role:** Daily automated code review — quality, DRY, TypeScript safety, performance.

**What it does:**
- Detects and eliminates copy-paste JSX patterns (extracts data arrays + typed components)
- Enforces TypeScript strict mode — removes `any` casts, adds proper type declarations
- Finds dead code, stale comments, redundant props
- Fixes regex edge cases, unused imports, `prefer-const` violations

**What it does NOT do:** Change any layout, styling, colors, animations, or UX behavior.

**How to invoke:** Paste the "Staff Engineer" role prompt into Claude Code and describe the scope.

---

### QA / DevOps Agent (Testing + Performance)

**Role:** Runs the full quality validation suite using free tools only.

**Phases it runs:**
1. `npm run typecheck` — TypeScript strict
2. `npm run lint` — ESLint
3. `npm audit` — Dependency vulnerability scan
4. `npm run build` — Production build
5. Bundle size analysis (gzip comparison of `.next/static/chunks/`)
6. `npm run e2e` — Playwright smoke tests
7. `npm run lighthouse` — Lighthouse desktop + mobile
8. Daily QA report generation

**Output:** A structured markdown report covering all phases with pass/fail status, bundle metrics, and risk summary.

---

### How to interact with agents

```
1. Open Claude Code in the project root
2. Paste the agent role prompt
3. The agent reads the codebase, runs commands, and makes targeted fixes
4. Review the changes via git diff before committing
5. Run npm run check to verify the quality gate still passes
```

Agents operate under these standing constraints:
- No UI changes (layout, colors, animations, spacing)
- No paid tools or external services
- No breaking changes to existing behavior
- All fixes must be verifiable with `npm run check` + `npm run e2e`

---

## 16. Do's and Don'ts

### Do

- Put all page copy in `content/*.ts` — never hardcode strings in JSX
- Use `buildPageMetadata()` for every new page's metadata export
- Add every new route to `app/sitemap.ts`
- Put JSON-LD schemas in `lib/structured-data.ts` — never inline in page files
- Extract shared constants (base64 strings, repeated literals) to module-level `const`
- Use `"use client"` only at leaf components (not section wrappers or layouts)
- Set the `sizes` prop accurately on every `<Image>` — it determines which resolution is downloaded
- Run `npm run check` before every PR
- Run `npm run e2e` before every PR that touches routing or layout

### Don't

- Don't touch `Header.tsx` styling or the liquid glass CSS classes — it breaks the navbar glass effect
- Don't add `ssr: false` to `dynamic()` inside a Server Component — Next.js 16 throws a build error
- Don't import from `framer-motion` in a new Server Component — keep animations in client leaf components
- Don't create a `tailwind.config.ts` — all Tailwind config lives in `app/globals.css` via `@theme`
- Don't lower the `browserslist` targets — it increases polyfill output
- Don't write inline `<script>` JSON-LD — use `<JsonLd>` component
- Don't use `any` — use `declare global` or proper generics instead
- Don't commit `.env.local` — it is gitignored by default
- Don't skip the quality gate (`npm run check`) before merging

---

## 17. Troubleshooting

### Build fails with "Cannot find module '@playwright/test'"

The Playwright config is accidentally included in the Next.js TypeScript compilation.

**Fix:** Ensure `tsconfig.json` excludes the E2E directory:

```json
{
  "exclude": ["node_modules", "playwright.config.ts", "e2e"]
}
```

---

### `npm run e2e` fails with "Executable doesn't exist"

Playwright browsers are not installed.

```bash
npx playwright install chromium
```

---

### `npm run lighthouse` fails with "connect ECONNREFUSED"

The production server is not running. Start it first:

```bash
npm run build && npm run start
# Then in a separate terminal:
npm run lighthouse
```

---

### TypeScript error: "Property 'X' does not exist on type 'Window'"

Third-party scripts (e.g. Calendly) attach globals to `window`. Don't cast to `any`. Augment the type:

```ts
declare global {
  interface Window {
    Calendly?: { initPopupWidget: (options: { url: string }) => void };
  }
}
```

---

### Images show broken previews on social sharing

`/public/og.png` does not exist yet. Create a 1200×630 PNG and place it at `public/og.png`.

---

### Dev server crashes with port already in use

```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

---

### `ssr: false` in dynamic() throws a build error

`ssr: false` is not allowed inside Server Components in Next.js 16. Use `dynamic()` without `ssr: false` — framer-motion v12 handles SSR gracefully and does not need it.

---

## 18. Contribution Guide

### Before you start

1. Read the [Do's and Don'ts](#16-dos-and-donts) fully.
2. Run `npm install` and `npm run dev` to confirm the project builds locally.
3. Run `npm run check` — it must pass clean before you begin.

### Workflow

```bash
# 1. Create a branch
git checkout -b feature/your-feature-name

# 2. Make your changes
#    — Content changes: edit content/*.ts
#    — New section: add component in components/sections/, reference in app/page.tsx
#    — New page: add page.tsx, layout.tsx if needed, update app/sitemap.ts

# 3. Verify quality gate
npm run check

# 4. Run E2E tests
npm run e2e

# 5. Commit with a clear message
git commit -m "feat: add [what you added]"

# 6. Open a pull request against main
```

### PR requirements

- `npm run check` passes (TypeScript + ESLint + Build)
- `npm run e2e` passes (30/30 tests)
- No layout, color, or animation changes unless explicitly approved
- No new hardcoded strings in JSX
- If adding a new page: metadata exported, route added to sitemap

### Commit message format

```
feat:  new feature
fix:   bug fix
refactor: code change with no behavior change
chore: tooling, deps, config
docs:  documentation only
```

---

## Quick Reference

```bash
npm run dev              # Start dev server (localhost:3000)
npm run build            # Production build
npm run start            # Serve production build
npm run typecheck        # TypeScript strict check
npm run lint             # ESLint
npm run check            # Full quality gate (TS + Lint + Build)
npm run e2e              # All Playwright smoke tests
npm run e2e:chromium     # Desktop tests only
npm run e2e:mobile       # Mobile tests only
npm run lighthouse       # Lighthouse audit (builds + starts server automatically)
npm run build:static     # Static export for Hostinger (sets EXPORT=true)
```
