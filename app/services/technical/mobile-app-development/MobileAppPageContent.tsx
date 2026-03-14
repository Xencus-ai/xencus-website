"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Layers,
  Code2,
  Smartphone,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { mobileAppDevPage as ma } from "@/content/services-pages";

/* ── Carousel images — local assets ─────────────────────────── */
const DATA = [
  "10175385_4154951.avif",
  "9307840_4144891.avif",
  "9452183_4183095.avif",
  "9461448_4193307.avif",
  "9468173_4176259.avif",
  "9626654_4205436.avif",
  "9643035_4230558.avif",
  "9713597_4206574.avif",
  "9907842_4313045.avif",
];
const BASE = "/Assets/illustrations/services/technical/mobile-app-development";

/* ── Motion ──────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

/* ── FAQ item ────────────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-zinc-100 last:border-0">
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
      {open && <p className="pb-5 text-sm leading-7 text-[#525252]">{a}</p>}
    </div>
  );
}

/* ── Sub-service icons ───────────────────────────────────────── */
const SUB_ICONS = [Layers, Code2, Smartphone] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════ */
export default function MobileAppPageContent() {
  return (
    <div className="bg-white">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO — 3D carousel + copy below
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        aria-labelledby="ma-hero-title"
        className="relative flex min-h-screen w-full flex-col -mt-[var(--header-offset)] pt-[var(--header-offset)] bg-white overflow-x-hidden"
      >
        {/* Corner fades — white radial overlay at all four corners */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: [
              "radial-gradient(ellipse 30% 30% at 0% 0%, white 0%, transparent 100%)",
              "radial-gradient(ellipse 30% 30% at 100% 0%, white 0%, transparent 100%)",
              "radial-gradient(ellipse 30% 30% at 0% 100%, white 0%, transparent 100%)",
              "radial-gradient(ellipse 30% 30% at 100% 100%, white 0%, transparent 100%)",
            ].join(", "),
          }}
        />

        {/* 3D Carousel — full viewport width, edge to edge */}
        <div className="carousel-scene flex-1 min-h-0 py-8 pt-14">
          <div
            className="carousel-3d"
            style={{ "--n": DATA.length } as React.CSSProperties}
          >
            {DATA.map((file, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={file}
                className="carousel-card"
                src={`${BASE}/${file}`}
                alt=""
                aria-hidden
                draggable={false}
                style={{ "--i": i } as React.CSSProperties}
              />
            ))}
          </div>
        </div>

        {/* Copy — centred below carousel */}
        <div className="w-full shrink-0 pb-12 text-center">
          <Container>
            <motion.div
              initial="initial"
              animate="animate"
              variants={{
                animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
              }}
              className="flex flex-col items-center"
            >
              <motion.h1
                id="ma-hero-title"
                variants={fadeUp}
                className="text-2xl font-extrabold leading-[1.15] tracking-tight text-[#171717] sm:text-3xl lg:text-4xl"
              >
                Learning apps{" "}
                <span className="text-[#FAAB4E]">learners come back to</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-3 max-w-lg text-xs leading-6 text-[#525252] sm:text-sm sm:leading-7"
              >
                From MVP to production-grade mobile product — iOS and Android,
                built for the learner experience that earns 4-star reviews.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8">
                <div className="cta-spin-wrap">
                  <div className="cta-spin-border" aria-hidden />
                  <Link
                    href="/contact"
                    className="group relative z-10 inline-flex items-center gap-2 rounded-xl bg-[#151515] px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-zinc-800"
                  >
                    Start your project
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </Container>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          METRICS STRIP
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-10 sm:py-12">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {ma.metrics.map((m, idx) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="rounded-2xl p-5 text-center"
                style={{ boxShadow: "8px 8px 24px #e8e8e8, -8px -8px 24px #ffffff" }}
              >
                <p className="text-xl font-extrabold text-[#171717] sm:text-2xl">{m.value}</p>
                <p className="mt-1 text-xs leading-5 text-[#707070] sm:text-sm">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PROBLEMS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-14 sm:py-20" aria-labelledby="ma-problems-title">
        <Container>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: "-60px" }}
            transition={fadeUp.transition}
            className="mb-10"
          >
            <SectionLabel>The real problem</SectionLabel>
            <h2
              id="ma-problems-title"
              className="mt-3 text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl"
            >
              Why most EdTech mobile apps don&apos;t earn learner trust
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#707070]">
              These are the patterns we see across every EdTech team we work with.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {ma.problems.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="flex gap-4 rounded-2xl border border-zinc-100 p-5 sm:p-6"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-red-50 text-xs font-black text-red-400">
                  {idx + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold leading-snug text-[#171717]">{p.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#707070]">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          WHAT WE DO — sub-services
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-14 sm:py-20" aria-labelledby="ma-services-title">
        <Container>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: "-60px" }}
            transition={fadeUp.transition}
            className="mb-10 sm:mb-12"
          >
            <SectionLabel>What we cover</SectionLabel>
            <h2
              id="ma-services-title"
              className="mt-3 text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl"
            >
              End-to-end mobile delivery, from idea to store
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-3">
            {ma.subServices?.map((ss, idx) => {
              const Icon = SUB_ICONS[idx] ?? Zap;
              return (
                <motion.div
                  key={ss.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col rounded-2xl border border-zinc-100 p-6 sm:p-7"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100">
                    <Icon className="size-5 text-amber-700" aria-hidden />
                  </div>
                  <h3 className="text-base font-bold text-[#171717] sm:text-lg">{ss.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {ss.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-[#525252]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HOW IT WORKS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-14 sm:py-20" aria-labelledby="ma-how-title">
        <Container>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: "-60px" }}
            transition={fadeUp.transition}
            className="mb-10"
          >
            <SectionLabel>How we work</SectionLabel>
            <h2
              id="ma-how-title"
              className="mt-3 text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl"
            >
              From scoping call to live on the store
            </h2>
          </motion.div>

          <ol className="relative max-w-2xl space-y-0">
            <div aria-hidden className="absolute left-[1.1rem] top-5 h-[calc(100%-2.5rem)] w-px bg-amber-200" />
            {ma.howItWorks.map((step, idx) => (
              <motion.li
                key={step.step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative flex gap-5 pb-8 last:pb-0"
              >
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400 text-xs font-black text-white ring-4 ring-white">
                  {idx + 1}
                </span>
                <div className="pt-0.5">
                  <p className="text-sm font-bold text-[#171717] sm:text-base">{step.title}</p>
                  <p className="mt-1.5 text-sm leading-6 text-[#707070]">{step.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          OUTCOMES
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-14 sm:py-20" aria-labelledby="ma-outcomes-title">
        <Container>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: "-60px" }}
            transition={fadeUp.transition}
            className="mb-10"
          >
            <SectionLabel>What you get</SectionLabel>
            <h2
              id="ma-outcomes-title"
              className="mt-3 text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl"
            >
              Results that matter for your learners and your business
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-3">
            {ma.outcomes.map((o, idx) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.09 }}
                className="flex flex-col gap-3 rounded-2xl border border-zinc-100 p-5 sm:p-6"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100">
                  <Zap className="size-4 text-amber-700" aria-hidden />
                </div>
                <p className="text-sm font-bold text-[#171717] sm:text-base">{o.title}</p>
                <p className="text-sm leading-6 text-[#707070]">{o.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FAQ
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white pb-14 sm:pb-20" aria-labelledby="ma-faq-title">
        <Container>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: "-60px" }}
            transition={fadeUp.transition}
            className="mb-8"
          >
            <SectionLabel>FAQ</SectionLabel>
            <h2
              id="ma-faq-title"
              className="mt-3 text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl"
            >
              {ma.faq.title}
            </h2>
          </motion.div>

          <div className="mx-auto max-w-2xl divide-y divide-zinc-100 rounded-2xl border border-zinc-100 px-5 sm:px-8">
            {ma.faq.items.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CTA — dark closer
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8" aria-labelledby="ma-cta-title">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative isolate overflow-hidden rounded-2xl bg-[#151515] px-6 py-10 text-center shadow-2xl sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-16 lg:py-16"
          >
            <div aria-hidden className="pointer-events-none absolute -top-1/2 left-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-amber-500/15 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-1/3 right-0 -z-10 h-[20rem] w-[20rem] rounded-full bg-amber-400/10 blur-3xl" />

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
              Ready to build?
            </p>
            <h2
              id="ma-cta-title"
              className="mx-auto mt-3 max-w-2xl text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              {ma.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              {ma.tagline}
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#FAAB4E] px-7 py-3.5 text-sm font-bold text-[#151515] transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20"
              >
                Start your project
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold text-zinc-400 transition hover:text-white"
              >
                All services <span aria-hidden>→</span>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
