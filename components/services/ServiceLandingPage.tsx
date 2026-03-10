"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import type { ServicePageContent } from "@/content/services-pages";

/* ─── shared container ──────────────────────────────────────────────────── */
/* Default is max-w-5xl (1024 px) so body text stays readable on wide screens.
   Pass className="max-w-7xl" etc. to override for wider sections (e.g. hero). */
function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

/* ─── section heading ───────────────────────────────────────────────────── */
function SectionHead({
  eyebrow,
  title,
  body,
  light = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p
        className={`text-xs font-bold uppercase tracking-widest ${
          light ? "text-brand/70" : "text-brand-secondary/40"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-heading"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p
          className={`mt-4 text-base leading-7 ${
            light ? "text-zinc-400" : "text-paragraph-secondary"
          }`}
        >
          {body}
        </p>
      )}
    </div>
  );
}

/* ─── FAQ accordion item ────────────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-heading sm:text-base">{q}</span>
        <ChevronDown
          className={`mt-0.5 size-5 shrink-0 text-paragraph-secondary transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>
      {open && (
        <p className="pb-5 text-sm leading-7 text-paragraph-secondary">{a}</p>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════════════════ */
export function ServiceLandingPage({ content }: { content: ServicePageContent }) {
  return (
    <main className="bg-white">

      {/* ════════════════════════════════════════════════════════════════
          §1  HERO
          • min-h fills viewport minus the header that <main> already offsets
          • flex + items-center + justify-center keeps content truly centred
          • No negative margin needed — <main> pt-[var(--header-offset)] handles offset
          • overflow-visible so nothing is clipped
      ════════════════════════════════════════════════════════════════ */}
      {/*
        ── HERO ──────────────────────────────────────────────────────
        Full-screen, content centred in the VISIBLE area below navbar.

        Layout trick (same pattern as homepage Hero):
          1. section: min-h-screen flex-col -mt-[var(--header-offset)]
             → section background fills from y=0 (behind navbar) to 100vh
          2. spacer div: height = var(--header-offset)
             → "consumes" the hidden-behind-navbar area, so…
          3. flex-1 wrapper: takes exactly (100vh − header) height
             → items-center/justify-center centre content in the
                VISIBLE viewport, not the full 100vh
        ─────────────────────────────────────────────────────────────
      */}
      <section
        aria-labelledby="service-hero-title"
        className="relative overflow-hidden bg-white -mt-[var(--header-offset)]"
        style={{ minHeight: "100dvh" }}
      >
        {/* decorative backgrounds fill the full section (y=0 → 100dvh) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-4/5 bg-[radial-gradient(ellipse_85%_70%_at_50%_0%,rgba(250,204,72,0.16),transparent_80%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-30 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_30%,transparent_100%)]"
        />

        {/*
          ── centering wrapper ─────────────────────────────────────
          • margin-top = header-offset  → starts below the navbar
          • min-height = 100dvh - header-offset  → fills the exact
            visible viewport (dvh accounts for mobile browser chrome)
          • flex items-center justify-center  → centres the content
            column in this explicitly-sized area, so vertical
            centring always has a concrete height to work against.
          ─────────────────────────────────────────────────────────
        */}
        <div
          className="relative flex items-center justify-center px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
          style={{
            marginTop: "var(--header-offset)",
            minHeight: "calc(100dvh - var(--header-offset))",
          }}
        >
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">

            {/* service badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-brand-secondary shadow-sm">
              <Image
                src={content.icon.src}
                alt={content.icon.alt}
                width={13}
                height={13}
                className="size-[13px] object-contain"
              />
              {content.label}
            </span>

            {/* ── heading ── */}
            <h1
              id="service-hero-title"
              className="mt-5 font-extrabold tracking-tight"
            >
              {/* line 1: full service title, small + muted */}
              <span className="mb-1.5 block text-lg font-semibold leading-snug text-paragraph-secondary sm:text-xl lg:text-2xl">
                {content.title}
              </span>

              {/* line 2: heroAccent — warm gradient, large */}
              <span className="block bg-gradient-to-r from-amber-500 via-brand to-orange-400 bg-clip-text text-3xl leading-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
                {content.heroAccent}
              </span>

              {/* line 3: "starting in weeks, not months." with SVG wavy underline */}
              <span className="mt-2 block text-lg font-semibold leading-snug text-heading sm:text-xl lg:text-2xl">
                starting in{" "}
                <span className="relative inline-block whitespace-nowrap text-brand-secondary">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute top-[105%] left-0 right-0 mx-auto h-[0.45em] w-full fill-brand/60"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                  </svg>
                  <span className="relative">weeks, not months.</span>
                </span>
              </span>
            </h1>

            {/* subtitle — 2 lines capped on mobile to save height */}
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-paragraph-secondary [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden sm:mt-5 sm:text-base sm:leading-7 sm:overflow-visible sm:[display:block]">
              {content.subtitle}
            </p>

            {/* CTAs */}
            <div className="mt-5 flex flex-wrap justify-center gap-3 sm:mt-6">
              <Link
                href={content.cta.buttonHref}
                className="inline-flex items-center gap-2 rounded-full bg-brand-secondary px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-zinc-700"
              >
                {content.cta.buttonText}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-heading shadow-sm transition-colors hover:bg-gray-50"
              >
                Request a proposal
              </Link>
            </div>

            {/* metrics strip — glassmorphism card */}
            <div className="mt-6 w-full sm:mt-8">
              <div className="rounded-2xl border border-white/70 bg-white/50 px-5 py-4 shadow-lg shadow-gray-200/60 backdrop-blur-md sm:px-6 sm:py-5">
                <dl className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4 sm:gap-x-6">
                  {content.metrics.map((m, i) => (
                    <div key={m.label} className="relative text-left">
                      {/* vertical divider between columns on sm+ */}
                      {i > 0 && (
                        <span
                          aria-hidden
                          className="absolute -left-2 top-1 hidden h-[calc(100%-8px)] w-px bg-gray-200/80 sm:block sm:-left-3"
                        />
                      )}
                      <dd className="text-base font-extrabold tracking-tight text-brand-secondary sm:text-lg lg:text-xl">
                        {m.value}
                      </dd>
                      <dt className="mt-0.5 text-[10px] font-medium leading-snug text-paragraph-secondary sm:text-[11px]">
                        {m.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          §2  TAGLINE  —  light brand-tinted band
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-amber-50 py-10 sm:py-16">
        {/* centre radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,rgba(250,204,72,0.25),transparent_70%)]"
        />
        {/* full-width top fade — merges cleanly into white above */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-20"
          style={{ background: "linear-gradient(to bottom, white 0%, transparent 100%)" }}
        />
        {/* full-width bottom fade — merges cleanly into white below */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
          style={{ background: "linear-gradient(to top, white 0%, transparent 100%)" }}
        />
        {/* soft left/right edge rounding */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: [
              "radial-gradient(ellipse 25% 70% at left, white 0%, transparent 55%)",
              "radial-gradient(ellipse 25% 70% at right, white 0%, transparent 55%)",
            ].join(", "),
          }}
        />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-brand-secondary shadow-sm">
              {content.label}
            </p>
            <blockquote className="text-xl font-semibold leading-snug tracking-tight text-heading sm:text-2xl lg:text-3xl lg:leading-snug">
              &ldquo;{content.tagline}&rdquo;
            </blockquote>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          §3  PROBLEMS WE SOLVE  —  recognition-first section
          Visitors see their own pain point immediately, building trust
          before outcomes and scope are presented.
      ════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="service-problems-title"
        className="bg-white py-16 sm:py-24 lg:py-28"
      >
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            {/* sticky left heading */}
            <div className="mb-12 lg:col-span-4 lg:mb-0">
              <div className="lg:sticky lg:top-[calc(var(--header-offset)+2rem)]">
                <p className="text-[11px] font-bold uppercase tracking-widest text-brand-secondary/40">
                  Sound familiar?
                </p>
                <h2
                  id="service-problems-title"
                  className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
                >
                  The problems we help you solve
                </h2>
                <p className="mt-4 text-sm leading-7 text-paragraph-secondary sm:text-base">
                  Most businesses that come to us are dealing with one or more of these situations.
                  If any of these sound familiar, you are in the right place.
                </p>
              </div>
            </div>

            {/* problem items */}
            <div className="lg:col-span-8">
              <ul className="space-y-0 divide-y divide-gray-100">
                {content.problems.map((problem, i) => (
                  <li key={problem.title} className="flex gap-5 py-7 first:pt-0 last:pb-0">
                    {/* number badge */}
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[11px] font-black text-red-500"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-heading sm:text-base">
                        {problem.title}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-paragraph-secondary">
                        {problem.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* nudge — connects problems to outcomes below */}
              <div className="mt-8 flex items-center gap-3 rounded-xl border border-brand/20 bg-amber-50/50 px-5 py-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand-secondary">
                  <CheckCircle2 className="size-4" aria-hidden />
                </span>
                <p className="text-sm font-medium text-heading">
                  We handle all of this so you do not have to build the internal capacity yourself.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          §4  OUTCOMES  —  editorial numbered rows, no cards
      ════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="service-outcomes-title"
        className="bg-white py-16 sm:py-24 lg:py-28"
      >
        <Container>
          <SectionHead
            eyebrow="Outcomes"
            title="What working with us actually delivers"
          />
          <ol className="divide-y divide-gray-100">
            {content.outcomes.map((outcome, i) => (
              <li
                key={outcome.title}
                className="group grid gap-x-6 gap-y-3 py-10 first:pt-0 last:pb-0 sm:gap-x-10 lg:grid-cols-[64px_1fr_2fr]"
              >
                {/* large ghost number */}
                <span
                  aria-hidden
                  className="select-none text-5xl font-black leading-none text-gray-100 transition-colors group-hover:text-brand/40 sm:text-6xl lg:text-7xl"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* title */}
                <h3 className="self-center text-lg font-bold text-heading sm:text-xl">
                  {outcome.title}
                </h3>
                {/* description */}
                <p className="self-center text-sm leading-7 text-paragraph-secondary sm:text-base">
                  {outcome.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          §4  SCOPE OF WORK  —  numbered cards, 3-col grid
      ════════════════════════════════════════════════════════════════ */}
      {content.subServices && content.subServices.length > 0 && (
        <section
          aria-labelledby="service-scope-title"
          className="bg-white py-16 sm:py-24 lg:py-28"
        >
          <Container>
            <SectionHead
              eyebrow="Scope of work"
              title="Everything included in this engagement"
              body="A clear picture of what we own and deliver, so there are no surprises after the work begins."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {content.subServices.map((group, idx) => (
                <article
                  key={group.title}
                  className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/80 sm:p-7"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand text-[11px] font-black text-brand-secondary">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-bold text-heading sm:text-base">{group.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {group.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-paragraph-secondary">
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-500" aria-hidden />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════════════
          §5  PROCESS  —  modern dark step cards
      ════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="service-process-title"
        className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28"
      >

        <Container className="relative">
          {/* section header */}
          <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-secondary/40">
              The process
            </p>
            <h2
              id="service-process-title"
              className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              From first conversation to live delivery
            </h2>
            <p className="mt-4 text-sm leading-7 text-paragraph-secondary sm:text-base">
              A clear, repeatable path. No long procurement cycles or months of onboarding
              before you see results.
            </p>
          </div>

          {/* step cards */}
          <ol className="grid gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
            {content.howItWorks.map((step, idx) => (
              <li key={step.step} className="group relative flex flex-col">
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7">

                  {/* ghost large number — decorative background */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-2 -bottom-3 select-none text-[7rem] font-black leading-none text-gray-100 sm:text-[8rem]"
                  >
                    {String(step.step).padStart(2, "0")}
                  </span>

                  {/* top accent bar — gradient flows across steps */}
                  <div
                    className="mb-6 h-0.5 w-full rounded-full"
                    style={{
                      background:
                        idx === 0
                          ? "linear-gradient(to right, #facc48, #facc4860)"
                          : idx === 1
                          ? "linear-gradient(to right, #facc4860, #facc48, #facc4860)"
                          : "linear-gradient(to right, #facc4860, #facc48)",
                    }}
                    aria-hidden
                  />

                  {/* step badge */}
                  <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand/20 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-secondary">
                    Step {String(step.step).padStart(2, "0")}
                  </span>

                  {/* title */}
                  <h3 className="text-lg font-bold leading-snug text-heading sm:text-xl">
                    {step.title}
                  </h3>

                  {/* description */}
                  <p className="relative mt-3 flex-1 text-sm leading-7 text-paragraph-secondary sm:text-base">
                    {step.text}
                  </p>

                  {/* connecting arrow to next card */}
                  {idx < content.howItWorks.length - 1 && (
                    <div
                      aria-hidden
                      className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 sm:flex"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm">
                        <svg viewBox="0 0 16 16" className="h-3 w-3 fill-current" aria-hidden>
                          <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06L7.28 12.78a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>

          {/* bottom CTA nudge */}
          <div className="mt-12 flex items-center justify-center gap-4 sm:mt-14">
            <div className="h-px flex-1 bg-gray-200" aria-hidden />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-heading shadow-sm transition hover:border-brand/40 hover:bg-amber-50"
            >
              Start the process
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <div className="h-px flex-1 bg-gray-200" aria-hidden />
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          §6  WHO IT'S FOR  —  light brand-tinted, sticky left
      ════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="service-audience-title"
        className="relative overflow-hidden bg-amber-50/60 py-16 sm:py-24 lg:py-28"
      >
        {/* subtle brand radial warmth */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_0%_50%,rgba(250,204,72,0.18),transparent_70%)]"
        />
        {/* Full-width linear fades at top and bottom — covers the centre strip that
            corner radial fades cannot reach, ensuring clean transitions to white. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-28"
          style={{ background: "linear-gradient(to bottom, white 0%, transparent 100%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
          style={{ background: "linear-gradient(to top, white 0%, transparent 100%)" }}
        />
        {/* Soft corner rounding to prevent hard left/right edges */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: [
              "radial-gradient(ellipse 35% 60% at left, white 0%, transparent 55%)",
              "radial-gradient(ellipse 35% 60% at right, white 0%, transparent 55%)",
            ].join(", "),
          }}
        />
        <Container className="relative">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            {/* sticky left */}
            <div className="mb-12 lg:col-span-4 lg:mb-0">
              <div className="lg:sticky lg:top-[calc(var(--header-offset)+2rem)]">
                <p className="text-[11px] font-bold uppercase tracking-widest text-brand-secondary/40">
                  Who this is built for
                </p>
                <h2
                  id="service-audience-title"
                  className="mt-4 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
                >
                  The roles we work with most
                </h2>
                <p className="mt-4 text-sm leading-7 text-paragraph-secondary sm:text-base">
                  People who get the most value share a common challenge: clear outcomes in mind
                  but limited capacity to execute reliably.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-700"
                >
                  Talk to us <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>

            {/* audience rows */}
            <div className="lg:col-span-8">
              <ul className="space-y-4">
                {content.targetAudience.map((audience, i) => (
                  <li
                    key={audience.title}
                    className="rounded-2xl border border-brand/20 bg-white p-5 shadow-sm sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/25 text-[11px] font-black text-brand-secondary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-heading sm:text-base">
                          {audience.title}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-paragraph-secondary">
                          {audience.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          §7  FIT  —  two-panel comparison
      ════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="service-fit-title"
        className="bg-white py-16 sm:py-24 lg:py-28"
      >
        <Container>
          <SectionHead
            eyebrow="Honest assessment"
            title="When this engagement works best"
            body="We believe clarity about fit matters more from the start than discovering a mismatch months in."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
            {/* good fit */}
            <div className="rounded-2xl bg-emerald-50 p-6 ring-1 ring-emerald-200/70 sm:p-8">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-bold text-emerald-700">
                <CheckCircle2 className="size-3.5" aria-hidden />
                Strong fit
              </p>
              <ul className="space-y-3.5 text-sm leading-7 text-gray-700">
                {[
                  "You have clear outcomes but limited capacity to execute day-to-day work reliably.",
                  "You want a partner who owns operations, not just advises on what to do.",
                  "You value predictable weekly reporting and one accountable point of contact.",
                  "You are comfortable with an iterative model where both sides improve over time.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-1 size-3.5 shrink-0 text-emerald-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* worth knowing */}
            <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-200/70 sm:p-8">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-gray-200/80 px-3 py-1 text-[11px] font-bold text-gray-600">
                Worth knowing
              </p>
              <ul className="space-y-3.5 text-sm leading-7 text-gray-600">
                {[
                  "If you need one-off freelancers for narrow tasks, a managed model may not match.",
                  "Without a clear internal owner for decisions, delivery quality is hard to sustain.",
                  "If you plan to hire a large in-house team immediately, a hybrid transition may fit better.",
                  "We find it most useful to scope together before proposing when requirements are undefined.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          §8  FAQ  —  accordion, sticky header left
      ════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="service-faq-title"
        className="bg-white py-16 sm:py-24 lg:py-28"
      >
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            {/* sticky left */}
            <div className="mb-10 lg:col-span-4 lg:mb-0">
              <div className="lg:sticky lg:top-[calc(var(--header-offset)+2rem)]">
                <p className="text-[11px] font-bold uppercase tracking-widest text-brand-secondary/40">
                  Common questions
                </p>
                <h2
                  id="service-faq-title"
                  className="mt-3 text-2xl font-bold tracking-tight text-heading sm:text-3xl"
                >
                  {content.faq.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-paragraph-secondary">
                  If your question is not answered here, reach out and we will respond the same day.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-secondary hover:underline"
                >
                  Ask a question <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>

            {/* accordion panel */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl bg-white px-6 py-1 shadow-sm ring-1 ring-gray-200 sm:px-8">
                {content.faq.items.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          §9  CTA  —  light brand-tinted card
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="relative isolate overflow-hidden rounded-3xl bg-amber-50 px-8 py-16 text-center ring-1 ring-brand/20 shadow-lg sm:px-12 sm:py-20 lg:px-16">
            {/* warm radial glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-brand/30 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 right-0 -z-10 h-48 w-48 rounded-full bg-brand/20 blur-3xl"
            />
            {/* 4-corner white vignette — softens card edges */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{
                background: [
                  "radial-gradient(ellipse 50% 45% at top left, rgba(255,255,255,0.85) 0%, transparent 60%)",
                  "radial-gradient(ellipse 50% 45% at top right, rgba(255,255,255,0.85) 0%, transparent 60%)",
                  "radial-gradient(ellipse 50% 45% at bottom left, rgba(255,255,255,0.85) 0%, transparent 60%)",
                  "radial-gradient(ellipse 50% 45% at bottom right, rgba(255,255,255,0.85) 0%, transparent 60%)",
                ].join(", "),
              }}
            />

            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-brand-secondary shadow-sm">
              {content.label}
            </p>
            <h2
              id="service-cta-title"
              className="text-balance text-3xl font-extrabold tracking-tight text-heading sm:text-4xl lg:text-5xl"
            >
              {content.cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-paragraph-secondary sm:text-base sm:leading-8">
              {content.cta.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={content.cta.buttonHref}
                className="inline-flex items-center gap-2 rounded-full bg-brand-secondary px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-zinc-700"
              >
                {content.cta.buttonText}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/20 bg-white px-6 py-3.5 text-sm font-semibold text-heading shadow-sm transition hover:border-brand-secondary/40 hover:bg-gray-50"
              >
                Request a proposal
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
