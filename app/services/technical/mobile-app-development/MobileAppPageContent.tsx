"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Layers,
  Code2,
  Smartphone,
  Zap,
  Globe,
  Star,
  CreditCard,
  WifiOff,
  ClipboardList,
  Paintbrush,
  Rocket,
  RefreshCw,
} from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { mobileAppDevPage as ma } from "@/content/services-pages";

/* ── Carousel images ─────────────────────────────────────────── */
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
const IMG = (f: string) => `${BASE}/${f}`;

/* ── Metric radials ──────────────────────────────────────────── */
const METRIC_RADIALS = [
  { displayVal: "24h", pct: 90 },
  { displayVal: "2×",  pct: 100 },
  { displayVal: "API", pct: 75 },
  { displayVal: "∞",   pct: 85 },
];

/* ── Motion ──────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

/* ── Radial metric ───────────────────────────────────────────── */
const radialCfg = { value: { label: "Value", color: "#FAAB4E" } } satisfies ChartConfig;

function MetricRadial({ displayVal, label, pct }: { displayVal: string; label: string; pct: number }) {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Container sized so the chart isn't clipped */}
      <ChartContainer config={radialCfg} className="h-[160px] w-[160px] sm:h-[180px] sm:w-[180px]">
        <RadialBarChart
          data={[{ value: pct, fill: "#FAAB4E" }]}
          endAngle={Math.round(pct * 3.6)}
          innerRadius={62}
          outerRadius={88}
          width={180}
          height={180}
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-zinc-100 last:fill-white"
            polarRadius={[70, 58]}
          />
          <RadialBar dataKey="value" background cornerRadius={8} />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        style={{ fill: "#171717", fontSize: "1.25rem", fontWeight: 800 }}
                      >
                        {displayVal}
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
      <p className="max-w-[140px] text-center text-xs leading-5 text-[#707070] sm:text-sm sm:leading-6">
        {label}
      </p>
    </div>
  );
}

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

const SUB_ICONS = [Layers, Code2, Smartphone] as const;
const PROBLEM_ICONS = [Globe, Star, CreditCard, WifiOff] as const;
const HOW_ICONS = [ClipboardList, Paintbrush, Code2, Rocket, RefreshCw] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════ */
export default function MobileAppPageContent() {
  return (
    <div className="bg-white">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO — 3D carousel + copy
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        aria-labelledby="ma-hero-title"
        className="relative flex min-h-screen w-full flex-col -mt-[var(--header-offset)] pt-[var(--header-offset)] bg-white overflow-x-hidden"
      >
        {/* Background glows — clipped to carousel band only, overflow hidden prevents bleed into text */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[72%] overflow-hidden">
          {/* Amber center glow */}
          <div className="absolute left-1/2 top-1/2 h-[260px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/30 blur-[55px]" />
          {/* Violet — upper left */}
          <div className="absolute left-[8%] top-[20%] h-[180px] w-[220px] rounded-full bg-violet-400/20 blur-[40px]" />
          {/* Cyan — right */}
          <div className="absolute right-[8%] top-[40%] h-[180px] w-[220px] rounded-full bg-cyan-300/20 blur-[40px]" />
        </div>

        {/* Edge fades — white at top, bottom and corners — z-10 to sit above carousel */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: [
              /* top fade */
              "linear-gradient(to bottom, white 0%, transparent 28%)",
              /* bottom fade */
              "linear-gradient(to top, white 0%, transparent 28%)",
              /* corner radials */
              "radial-gradient(ellipse 22% 22% at 0% 0%, white 0%, transparent 100%)",
              "radial-gradient(ellipse 22% 22% at 100% 0%, white 0%, transparent 100%)",
              "radial-gradient(ellipse 22% 22% at 0% 100%, white 0%, transparent 100%)",
              "radial-gradient(ellipse 22% 22% at 100% 100%, white 0%, transparent 100%)",
            ].join(", "),
          }}
        />
        <div className="carousel-scene flex-1 min-h-0 py-8 pt-14">
          <div className="carousel-3d" style={{ "--n": DATA.length } as React.CSSProperties}>
            {DATA.map((file, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={file}
                className="carousel-card"
                src={IMG(file)}
                alt=""
                aria-hidden
                draggable={false}
                style={{ "--i": i } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
        <div className="w-full shrink-0 pb-12 text-center">
          <Container>
            <motion.div
              initial="initial"
              animate="animate"
              variants={{ animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
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
              <motion.p variants={fadeUp} className="mt-3 max-w-lg text-xs leading-6 text-[#525252] sm:text-sm sm:leading-7">
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
          METRICS — radial arc charts
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: "-60px" }}
            transition={fadeUp.transition}
            className="mb-12 text-center"
          >
            <SectionLabel>By the numbers</SectionLabel>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl">
              What working with us looks like
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-10 sm:gap-12 lg:grid-cols-4">
            {ma.metrics.map((m, idx) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
              >
                <MetricRadial
                  displayVal={METRIC_RADIALS[idx].displayVal}
                  label={m.label}
                  pct={METRIC_RADIALS[idx].pct}
                />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PROBLEMS — copy left, phones right
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="ma-problems-title">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">

            {/* Left — label, heading, feature list */}
            <motion.div
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true, margin: "-60px" }}
              transition={fadeUp.transition}
              className="lg:pr-8 lg:pt-4"
            >
              <div className="lg:max-w-lg">
                <SectionLabel>The real problem</SectionLabel>
                <h2
                  id="ma-problems-title"
                  className="mt-3 text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl"
                >
                  Why most EdTech mobile apps don&apos;t earn learner trust
                </h2>
                <p className="mt-4 text-base leading-7 text-[#707070]">
                  These are the patterns we see across every EdTech team we work with.
                </p>

                <dl className="mt-10 max-w-xl space-y-8 text-sm leading-7 text-[#707070] lg:max-w-none">
                  {ma.problems.map((p, idx) => {
                    const Icon = PROBLEM_ICONS[idx] ?? Zap;
                    return (
                      <motion.div
                        key={p.title}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.09 }}
                        className="relative pl-10"
                      >
                        <dt className="inline font-semibold text-[#171717]">
                          <Icon
                            aria-hidden
                            className="absolute left-1 top-1 size-5 text-[#FAAB4E]"
                          />
                          {p.title}{" "}
                        </dt>
                        <dd className="inline">{p.description}</dd>
                      </motion.div>
                    );
                  })}
                </dl>
              </div>
            </motion.div>

            {/* Right — single screenshot, overflows like the reference design */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src={IMG("10175385_4154951.avif")}
                alt="Mobile app screen"
                width={880}
                height={1560}
                className="h-[36rem] w-auto max-w-none rounded-xl shadow-xl ring-1 ring-zinc-900/10 sm:h-[48rem] md:-ml-4 lg:-ml-0"
                aria-hidden
              />
            </motion.div>

          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          WHAT WE COVER — cards with screenshots
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="ma-services-title">
        <Container>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: "-60px" }}
            transition={fadeUp.transition}
            className="mb-12"
          >
            <SectionLabel>What we cover</SectionLabel>
            <h2
              id="ma-services-title"
              className="mt-3 text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl"
            >
              End-to-end mobile delivery, from idea to store
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3">
            {ma.subServices?.map((ss, idx) => {
              const Icon = SUB_ICONS[idx] ?? Zap;
              const imgs = ["9307840_4144891.avif", "9468173_4176259.avif", "9643035_4230558.avif"];
              return (
                <motion.div
                  key={ss.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col overflow-hidden rounded-2xl border border-zinc-100"
                >
                  {/* Tall screenshot */}
                  <div className="relative h-72 w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={IMG(imgs[idx])}
                      alt=""
                      fill
                      className="object-cover object-top"
                      aria-hidden
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FAAB4E]">
                      <Icon className="size-5 text-white" aria-hidden />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-base font-bold text-[#171717]">{ss.title}</h3>
                    <ul className="mt-4 flex-1 space-y-2.5">
                      {ss.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5 text-sm text-[#525252]">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FAAB4E]" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HOW IT WORKS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="ma-how-title">
        <Container>
          {/* Centered heading block */}
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: "-60px" }}
            transition={fadeUp.transition}
            className="mx-auto max-w-2xl text-center"
          >
            <SectionLabel>How we work</SectionLabel>
            <h2
              id="ma-how-title"
              className="mt-2 text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl lg:text-balance"
            >
              From scoping call to live on the store
            </h2>
            <p className="mt-4 text-base leading-7 text-[#707070]">
              A structured process that keeps you informed at every stage and removes the usual chaos of software delivery.
            </p>
          </motion.div>

          {/* Feature grid */}
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-14">
              {ma.howItWorks.map((step, idx) => {
                const Icon = HOW_ICONS[idx] ?? Zap;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.1 }}
                    className="relative pl-16"
                  >
                    <dt className="text-base font-bold leading-7 text-[#171717]">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#FAAB4E]">
                        <Icon aria-hidden className="size-5 text-white" />
                      </div>
                      {step.title}
                    </dt>
                    <dd className="mt-2 text-sm leading-7 text-[#707070]">{step.text}</dd>
                  </motion.div>
                );
              })}
            </dl>
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          OUTCOMES — bento with screenshot
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="ma-outcomes-title">
        <Container>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: "-60px" }}
            transition={fadeUp.transition}
            className="mb-12"
          >
            <SectionLabel>What you get</SectionLabel>
            <h2
              id="ma-outcomes-title"
              className="mt-3 text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl"
            >
              Results that matter for your learners and your business
            </h2>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-5">
            {/* Screenshot card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative min-h-[340px] overflow-hidden rounded-2xl lg:col-span-2"
            >
              <Image
                src={IMG("9713597_4206574.avif")}
                alt="Mobile learning app UI"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/85 via-zinc-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-400">Built for learners</p>
                <p className="mt-2 text-base font-bold leading-snug text-white">
                  Every screen designed for completion, not just access
                </p>
              </div>
            </motion.div>

            {/* Outcomes list */}
            <div className="flex flex-col gap-5 lg:col-span-3">
              {ma.outcomes.map((o, idx) => (
                <motion.div
                  key={o.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="flex gap-4 rounded-2xl border border-zinc-100 p-5 sm:p-6"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100">
                    <Zap className="size-4 text-amber-700" aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#171717] sm:text-base">{o.title}</p>
                    <p className="mt-1.5 text-sm leading-6 text-[#707070]">{o.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FAQ
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white pb-16 sm:pb-24" aria-labelledby="ma-faq-title">
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
