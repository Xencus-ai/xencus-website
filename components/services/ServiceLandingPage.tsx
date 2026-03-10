"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import type { ServicePageContent } from "@/content/services-pages";

/* ─── motion preset ─────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

/* ─── shared container ──────────────────────────────────────────────────── */
function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10 xl:max-w-7xl ${className}`}>
      {children}
    </div>
  );
}

/* ─── section label ─────────────────────────────────────────────────────── */
function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] ${light ? "text-amber-300" : "text-amber-700"}`}>
      <span aria-hidden className={`inline-block h-px w-6 ${light ? "bg-amber-400/50" : "bg-amber-500/50"}`} />
      {children}
    </span>
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
    <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
      <SectionLabel light={light}>{eyebrow}</SectionLabel>
      <h2 className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? "text-white" : "text-[#171717]"}`}>
        {title}
      </h2>
      {body && (
        <p className={`mt-4 text-sm leading-7 sm:text-base ${light ? "text-zinc-400" : "text-[#525252]"}`}>
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
        <span className="text-sm font-semibold text-[#171717] sm:text-base">{q}</span>
        <ChevronDown
          className={`mt-0.5 size-5 shrink-0 text-[#707070] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open && <p className="pb-5 text-sm leading-7 text-[#707070]">{a}</p>}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════════════════ */
export function ServiceLandingPage({ content }: { content: ServicePageContent }) {
  return (
    <div className="bg-white">

      {/* ════════════════════════════════════════════════════════════════
          §1  HERO  —  About-page style, full viewport
      ════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="service-hero-title"
        className="relative flex min-h-screen w-full flex-col items-center justify-center -mt-[var(--header-offset)] pt-[var(--header-offset)]"
        style={{
          background: "linear-gradient(135deg, #fffcf0 0%, #ffffff 45%, #fff8ef 75%, #fffdf8 100%)",
        }}
      >
        {/* Spinning conic gradient glow blobs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="about-hero-spin absolute -right-48 -top-48 h-[800px] w-[800px] rounded-full opacity-25"
            style={{ filter: "blur(100px)" }}
          />
          <div
            className="about-hero-spin absolute -left-48 bottom-0 h-[560px] w-[560px] rounded-full opacity-15"
            style={{ filter: "blur(110px)", animationDelay: "-4s" }}
          />
        </div>
        {/* Bottom fade to white */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />

        <div className="relative w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <Container>
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10">

              {/* Left: Copy — centred on mobile, left on lg */}
              <motion.div
                initial="initial"
                animate="animate"
                variants={{ animate: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } } }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                {/* Service badge */}
                <motion.span
                  variants={fadeUp}
                  className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-white/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-700 shadow-sm backdrop-blur-sm"
                >
                  {content.label}
                </motion.span>

                <motion.h1
                  id="service-hero-title"
                  variants={fadeUp}
                  className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[#171717] sm:text-5xl lg:text-[clamp(2.6rem,3.8vw,3.6rem)]"
                >
                  {content.heroAccent}
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-4 max-w-lg text-sm leading-relaxed text-[#525252] sm:text-base"
                >
                  {content.subtitle}
                </motion.p>

                <motion.div variants={fadeUp} className="mt-7">
                  <div className="cta-spin-wrap">
                    <div className="cta-spin-border" aria-hidden />
                    <Link
                      href={content.cta.buttonHref}
                      className="group relative z-10 inline-flex items-center gap-2 rounded-xl bg-[#151515] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-zinc-800"
                    >
                      {content.cta.buttonText}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right: Illustration — desktop only */}
              <motion.div
                initial={{ opacity: 0, x: 36 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="relative hidden items-center justify-center lg:flex"
              >
                {/* Decorative rings */}
                <div aria-hidden className="absolute inset-0 flex items-center justify-center">
                  <div className="h-[480px] w-[480px] rounded-full border border-amber-200/40" />
                </div>
                <div aria-hidden className="absolute inset-0 flex items-center justify-center">
                  <div className="h-[580px] w-[580px] rounded-full border border-amber-100/25" />
                </div>
                <div aria-hidden className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-amber-200/50 via-amber-100/30 to-transparent blur-3xl" />

                <Image
                  src={content.heroImage.src}
                  alt={content.heroImage.alt}
                  width={580}
                  height={580}
                  className="relative z-10 w-full max-w-[520px]"
                  priority
                />
              </motion.div>

            </div>
          </Container>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          §2  METRICS  —  neomorphism cards below hero
      ════════════════════════════════════════════════════════════════ */}
      <section aria-label="Key metrics" className="bg-white py-10 sm:py-14">
        <Container>
          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5"
          >
            {content.metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="flex flex-col items-center rounded-2xl px-4 py-6 text-center sm:px-6 sm:py-8"
                style={{
                  background: "#ffffff",
                  boxShadow: "20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff",
                }}
              >
                <dd className="text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl">
                  {m.value}
                </dd>
                <dt className="mt-1.5 text-xs font-medium leading-snug text-[#707070] sm:text-[13px]">
                  {m.label}
                </dt>
              </motion.div>
            ))}
          </motion.dl>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          §3  TAGLINE  —  amber-tinted band
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-amber-50 py-10 sm:py-14">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,rgba(250,204,72,0.25),transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <blockquote className="text-xl font-semibold leading-snug tracking-tight text-[#171717] sm:text-2xl lg:text-3xl lg:leading-snug">
              &ldquo;{content.tagline}&rdquo;
            </blockquote>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          §4  PROBLEMS WE SOLVE
      ════════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="service-problems-title" className="bg-white py-14 sm:py-20">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-14">
            {/* sticky left heading */}
            <div className="mb-10 lg:col-span-4 lg:mb-0">
              <div className="lg:sticky lg:top-[calc(var(--header-offset)+2rem)]">
                <SectionLabel>Sound familiar?</SectionLabel>
                <h2
                  id="service-problems-title"
                  className="mt-3 text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl"
                >
                  The problems we help you solve
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#525252] sm:text-base">
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
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[11px] font-black text-red-500"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-[#171717] sm:text-base">{problem.title}</p>
                      <p className="mt-2 text-sm leading-7 text-[#707070]">{problem.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-3 rounded-xl border border-amber-200/60 bg-amber-50/50 px-5 py-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <CheckCircle2 className="size-4" aria-hidden />
                </span>
                <p className="text-sm font-medium text-[#171717]">
                  We handle all of this so you do not have to build the internal capacity yourself.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          §5  OUTCOMES  —  numbered rows
      ════════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="service-outcomes-title" className="bg-white py-14 sm:py-20">
        <div aria-hidden className="pointer-events-none mb-14 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent sm:mb-16" />
        <Container>
          <SectionHead eyebrow="Outcomes" title="What working with us actually delivers" />
          <ol className="divide-y divide-gray-100">
            {content.outcomes.map((outcome, i) => (
              <li
                key={outcome.title}
                className="group grid gap-x-6 gap-y-3 py-10 first:pt-0 last:pb-0 sm:gap-x-10 lg:grid-cols-[64px_1fr_2fr]"
              >
                <span
                  aria-hidden
                  className="select-none text-5xl font-black leading-none text-gray-100 transition-colors group-hover:text-amber-200/70 sm:text-6xl lg:text-7xl"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="self-center text-lg font-bold text-[#171717] sm:text-xl">{outcome.title}</h3>
                <p className="self-center text-sm leading-7 text-[#707070] sm:text-base">{outcome.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          §6  SCOPE OF WORK
      ════════════════════════════════════════════════════════════════ */}
      {content.subServices && content.subServices.length > 0 && (
        <section aria-labelledby="service-scope-title" className="bg-white py-14 sm:py-20">
          <div aria-hidden className="pointer-events-none mb-14 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent sm:mb-16" />
          <Container>
            <SectionHead
              eyebrow="Scope of work"
              title="Everything included in this engagement"
              body="A clear picture of what we own and deliver, so there are no surprises after the work begins."
            />
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {content.subServices.map((group, idx) => (
                <article
                  key={group.title}
                  className="flex flex-col rounded-2xl bg-[#fafaf8] p-6 transition-colors hover:bg-amber-50/60 sm:p-7"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-[11px] font-black text-amber-700">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-bold text-[#171717] sm:text-base">{group.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {group.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-[#707070]">
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
          §7  PROCESS  —  step cards
      ════════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="service-process-title" className="bg-white py-14 sm:py-20">
        <div aria-hidden className="pointer-events-none mb-14 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent sm:mb-16" />
        <Container>
          <SectionHead
            eyebrow="The process"
            title="From first conversation to live delivery"
            body="A clear, repeatable path. No long procurement cycles or months of onboarding before you see results."
          />
          <ol className="grid gap-4 sm:grid-cols-3 sm:gap-5">
            {content.howItWorks.map((step, idx) => (
              <li key={step.step} className="group relative flex flex-col">
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-[#fafaf8] p-6 transition-colors hover:bg-amber-50/50 sm:p-7">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-2 -bottom-3 select-none text-[7rem] font-black leading-none text-zinc-100 sm:text-[8rem]"
                  >
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <div
                    className="mb-5 h-0.5 w-full rounded-full"
                    style={{
                      background:
                        idx === 0
                          ? "linear-gradient(to right, #FAAB4E, #FAAB4E60)"
                          : idx === 1
                          ? "linear-gradient(to right, #FAAB4E60, #FAAB4E, #FAAB4E60)"
                          : "linear-gradient(to right, #FAAB4E60, #FAAB4E)",
                    }}
                    aria-hidden
                  />
                  <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-amber-700">
                    Step {String(step.step).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-bold leading-snug text-[#171717] sm:text-lg">{step.title}</h3>
                  <p className="relative mt-2 flex-1 text-sm leading-7 text-[#707070]">{step.text}</p>
                  {idx < content.howItWorks.length - 1 && (
                    <div aria-hidden className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 sm:flex">
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
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          §8  WHO IT'S FOR  —  amber-tinted, sticky left
      ════════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="service-audience-title" className="relative overflow-hidden bg-amber-50/60 py-14 sm:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
        <Container className="relative">
          <div className="lg:grid lg:grid-cols-12 lg:gap-14">
            <div className="mb-10 lg:col-span-4 lg:mb-0">
              <div className="lg:sticky lg:top-[calc(var(--header-offset)+2rem)]">
                <SectionLabel>Who this is built for</SectionLabel>
                <h2
                  id="service-audience-title"
                  className="mt-3 text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl"
                >
                  The roles we work with most
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#525252] sm:text-base">
                  People who get the most value share a common challenge: clear outcomes in mind
                  but limited capacity to execute reliably.
                </p>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#151515] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-zinc-800"
                >
                  Talk to us <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-4">
                {content.targetAudience.map((audience, i) => (
                  <li key={audience.title} className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm sm:p-6">
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-[11px] font-black text-amber-700">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-[#171717] sm:text-base">{audience.title}</p>
                        <p className="mt-2 text-sm leading-7 text-[#707070]">{audience.description}</p>
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
          §9  FAQ  —  accordion, sticky header left
      ════════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="service-faq-title" className="bg-white py-14 sm:py-20">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-14">
            <div className="mb-10 lg:col-span-4 lg:mb-0">
              <div className="lg:sticky lg:top-[calc(var(--header-offset)+2rem)]">
                <SectionLabel>Common questions</SectionLabel>
                <h2
                  id="service-faq-title"
                  className="mt-3 text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl"
                >
                  {content.faq.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#707070]">
                  If your question is not answered here, reach out and we will respond the same day.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#171717] hover:underline"
                >
                  Ask a question <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="rounded-2xl bg-white px-6 py-1 shadow-sm ring-1 ring-gray-100 sm:px-8">
                {content.faq.items.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          §10  CTA  —  dark, full-bleed card (About-page style)
      ════════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="service-cta-title" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative isolate overflow-hidden rounded-2xl bg-[#151515] px-6 py-10 shadow-2xl sm:rounded-[2rem] sm:px-10 sm:py-14 lg:flex lg:items-center lg:gap-12 lg:px-14 lg:py-16"
          >
            <div aria-hidden className="pointer-events-none absolute -top-1/2 left-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-amber-500/15 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-1/3 right-0 -z-10 h-[22rem] w-[22rem] rounded-full bg-amber-400/10 blur-3xl" />

            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
                {content.label}
              </p>
              <h2
                id="service-cta-title"
                className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl"
              >
                {content.cta.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                {content.cta.description}
              </p>
              <div className="mt-8">
                <Link
                  href={content.cta.buttonHref}
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#FAAB4E] px-7 py-3.5 text-sm font-bold text-[#151515] transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20"
                >
                  {content.cta.buttonText}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </div>
            </div>

            {/* Illustration */}
            <div className="mt-10 hidden flex-shrink-0 lg:mt-0 lg:block">
              <Image
                src={content.heroImage.src}
                alt={content.heroImage.alt}
                width={380}
                height={380}
                className="w-[22rem] xl:w-[24rem]"
              />
            </div>
          </motion.div>
        </Container>
      </section>

    </div>
  );
}
