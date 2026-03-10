"use client";

import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Layers,
  Zap,
  Users,
  Network,
  BookOpen,
  Target,
  LayoutDashboard,
  Briefcase,
  ClipboardList,
  Globe,
  MessageCircle,
  Award,
  RefreshCw,
  Clock,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import {
  aboutHero,
  aboutNarrative,
  aboutMission,
  aboutVision,
  aboutWhatWeDo,
  aboutHowWeWork,
  aboutValues,
  aboutDifference,
  aboutCulture,
  aboutCta,
} from "@/content/about";

/* ── Icon maps ───────────────────────────────────────────────────── */
const VALUE_ICONS: Record<string, LucideIcon> = {
  quality: ShieldCheck,
  "brand-first": Layers,
  speed: Zap,
  partnership: Users,
};
const CULTURE_ICONS = [MessageCircle, Award, RefreshCw, Clock] as const;
const DIFFERENCE_ICONS = [Network, BookOpen, Target] as const;
const WHAT_WE_DO_ICONS = [LayoutDashboard, Briefcase, ClipboardList, Globe] as const;

/* ── Motion presets ──────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

/* ═══════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════ */
export default function AboutPageContent() {
  return (
    <div className="bg-white">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO — glassmorphism light
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        aria-labelledby="about-hero-title"
        className="relative flex min-h-screen w-full flex-col items-center justify-center -mt-[var(--header-offset)] pt-[var(--header-offset)]"
        style={{
          background:
            "linear-gradient(135deg, #fffcf0 0%, #ffffff 45%, #fff8ef 75%, #fffdf8 100%)",
        }}
      >
        {/* Spinning conic gradient glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="about-hero-spin absolute -right-48 -top-48 h-[900px] w-[900px] rounded-full opacity-30"
            style={{ filter: "blur(100px)" }}
          />
          <div
            className="about-hero-spin absolute -left-48 bottom-0 h-[600px] w-[600px] rounded-full opacity-20"
            style={{ filter: "blur(110px)", animationDelay: "-4s" }}
          />
        </div>
        {/* Bottom fade */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />

        <div className="relative w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <Container>
            {/* ── Two-column grid ── */}
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-8">

              {/* Left: Copy — centered on mobile, left-aligned on lg */}
              <motion.div
                initial="initial"
                animate="animate"
                variants={{ animate: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } } }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <motion.h1
                  id="about-hero-title"
                  variants={fadeUp}
                  className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#171717] sm:text-5xl lg:text-[clamp(2.6rem,3.8vw,3.8rem)]"
                >
                  The operations backbone behind{" "}
                  <span className="relative whitespace-nowrap">
                    {/* Wax crayon zigzag underline */}
                    <svg
                      aria-hidden
                      className="absolute -bottom-1 left-0 w-full overflow-visible"
                      viewBox="0 0 200 12"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M1,8 C8,3 14,10 22,6 C30,2 38,9 48,5 C58,1 66,8 76,5 C86,2 94,9 104,5 C114,1 122,8 132,4 C142,1 152,7 162,4 C172,1 182,7 192,5 C196,4 199,5 199,5"
                        stroke="#FAAB4E"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.75"
                      />
                    </svg>
                    <span className="relative">scalable EdTech</span>
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-4 max-w-lg text-sm leading-relaxed text-[#525252] sm:text-base"
                >
                  {aboutHero.subtitle}
                </motion.p>

                <motion.div variants={fadeUp} className="mt-6">
                  <div className="cta-spin-wrap">
                    <div className="cta-spin-border" aria-hidden />
                    <Link
                      href="/services"
                      className="group relative z-10 inline-flex items-center gap-2 rounded-xl bg-[#151515] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-zinc-800 sm:px-7 sm:py-3.5"
                    >
                      See what we do
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
                  <div className="h-[520px] w-[520px] rounded-full border border-amber-200/40" />
                </div>
                <div aria-hidden className="absolute inset-0 flex items-center justify-center">
                  <div className="h-[630px] w-[630px] rounded-full border border-amber-100/25" />
                </div>
                {/* Glow */}
                <div aria-hidden className="absolute h-80 w-80 rounded-full bg-gradient-to-br from-amber-200/50 via-amber-100/30 to-transparent blur-3xl" />

                <Image
                  src="/Assets/ABOUT/about.svg"
                  alt="Xencus operating backbone for scalable EdTech"
                  width={680}
                  height={680}
                  className="relative z-10 w-full max-w-[600px]"
                  priority
                />

                {/* Glass badge — top-right */}
                <motion.div
                  initial={{ opacity: 0, y: -14, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.85, duration: 0.5 }}
                  className="absolute right-4 top-0 rounded-2xl border border-amber-200/60 bg-amber-50/80 px-5 py-3.5 shadow-xl shadow-amber-900/8 backdrop-blur-xl"
                >
                  <p className="text-lg font-extrabold text-amber-900">1 partner</p>
                  <p className="mt-0.5 text-xs text-amber-700/80">For all operations</p>
                </motion.div>
              </motion.div>
            </div>

          </Container>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          WHY WE EXIST
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="relative overflow-hidden bg-white py-12 sm:py-16"
        aria-labelledby="about-narrative-title"
      >
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />

        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none"
            >
              <div aria-hidden className="absolute -inset-6 rounded-[3rem] bg-amber-100/50 blur-3xl" />
              <Image
                src="/Assets/ABOUT/Data%20extraction-rafiki.svg"
                alt=""
                aria-hidden
                width={600}
                height={600}
                className="relative w-full"
              />
            </motion.div>

            {/* Copy */}
            <motion.div
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true, margin: "-80px" }}
              transition={fadeUp.transition}
              className="mx-auto w-full max-w-xl lg:max-w-none"
            >
              <SectionLabel>{aboutNarrative.label}</SectionLabel>
              <h2
                id="about-narrative-title"
                className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-[#171717] sm:text-3xl lg:text-4xl"
              >
                {aboutNarrative.heading}
              </h2>
              <div className="mt-6 space-y-5">
                {aboutNarrative.paragraphs.slice(0, 2).map((para, idx) => (
                  <p
                    key={idx}
                    className="border-l-2 border-amber-400/60 pl-4 text-sm leading-7 text-[#525252] sm:text-base sm:leading-8"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MISSION & VISION
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="relative overflow-hidden bg-white py-12 sm:py-16"
        aria-labelledby="about-mission-title"
      >
        <Container>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: "-80px" }}
            transition={fadeUp.transition}
            className="mx-auto mb-8 max-w-xl sm:mb-12 lg:max-w-none"
          >
            <SectionLabel>Purpose</SectionLabel>
            <h2
              id="about-mission-title"
              className="mt-3 text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl"
            >
              Mission &amp; Vision
            </h2>
          </motion.div>

          {/* Unified split panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl border border-zinc-100 shadow-[0_4px_32px_rgba(0,0,0,0.06)] sm:rounded-3xl"
          >
            <div className="grid divide-y divide-zinc-100 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
              {/* Mission */}
              <div className="relative overflow-hidden bg-amber-50/60 p-6 sm:p-10">
                <div aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-amber-200/30 blur-3xl" />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">
                  Mission
                </p>
                <h3 className="mt-3 text-xl font-extrabold leading-snug text-[#171717] sm:text-2xl">
                  {aboutMission.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#525252]">
                  {aboutMission.description}
                </p>
              </div>

              {/* Vision */}
              <div className="relative overflow-hidden bg-white p-6 sm:p-10">
                <div aria-hidden className="pointer-events-none absolute -left-12 -top-12 h-48 w-48 rounded-full bg-zinc-100/60 blur-3xl" />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                  Vision
                </p>
                <h3 className="mt-3 text-xl font-extrabold leading-snug text-[#171717] sm:text-2xl">
                  {aboutVision.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#525252]">
                  {aboutVision.description}
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          WHAT WE DO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="relative overflow-hidden bg-white py-12 sm:py-16"
        aria-labelledby="about-what-title"
      >
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative order-2 mx-auto w-full max-w-[300px] sm:max-w-[380px] lg:order-1 lg:max-w-none"
            >
              <div aria-hidden className="absolute -inset-8 rounded-[3rem] bg-amber-50/80 blur-3xl" />
              <Image
                src="/Assets/ABOUT/Seminar-bro.svg"
                alt="EdTech delivery operations"
                width={620}
                height={560}
                className="relative w-full"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true, margin: "-80px" }}
              transition={fadeUp.transition}
              className="order-1 mx-auto w-full max-w-xl lg:order-2 lg:max-w-none"
            >
              <SectionLabel>What we do</SectionLabel>
              <h2
                id="about-what-title"
                className="mt-3 text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl"
              >
                {aboutWhatWeDo.title}
              </h2>

              <ul className="mt-8 space-y-4">
                {aboutWhatWeDo.items.map((item, idx) => {
                  const Icon = WHAT_WE_DO_ICONS[idx];
                  return (
                    <li key={item.title} className="flex gap-3 sm:gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100 sm:h-10 sm:w-10">
                        <Icon className="size-4 text-amber-700 sm:size-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#171717] sm:text-base">{item.title}</p>
                        <p className="mt-0.5 text-sm leading-6 text-[#707070]">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          VALUES
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="relative overflow-hidden bg-white py-12 sm:py-16"
        aria-labelledby="about-values-title"
      >
        <Container>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: "-80px" }}
            transition={fadeUp.transition}
            className="mx-auto mb-8 max-w-xl sm:mb-12 lg:max-w-none"
          >
            <SectionLabel>What we stand for</SectionLabel>
            <h2
              id="about-values-title"
              className="mt-3 text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl"
            >
              The principles that shape how&nbsp;we&nbsp;work
            </h2>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {aboutValues.map((value, idx) => {
              const Icon = VALUE_ICONS[value.id] ?? ShieldCheck;
              return (
                <motion.article
                  key={value.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                  className="group relative overflow-hidden rounded-2xl bg-[#fafaf8] p-6 transition-colors hover:bg-amber-50/60 sm:p-7"
                >
                  {/* Faint bg number */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-2 -top-4 select-none text-[6rem] font-black leading-none text-zinc-100 transition-colors group-hover:text-amber-100"
                  >
                    {idx + 1}
                  </span>
                  <div className="relative">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 transition-colors group-hover:bg-amber-200">
                      <Icon className="size-5 text-amber-700" aria-hidden />
                    </div>
                    <h3 className="text-sm font-bold text-[#171717] sm:text-base">{value.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#707070]">
                      {value.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HOW WE WORK
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="relative overflow-hidden bg-white py-12 sm:py-16"
        aria-labelledby="about-how-title"
      >
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Steps — timeline */}
            <motion.div
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true, margin: "-80px" }}
              transition={fadeUp.transition}
              className="mx-auto w-full max-w-xl lg:max-w-none"
            >
              <SectionLabel>Our operating model</SectionLabel>
              <h2
                id="about-how-title"
                className="mt-3 text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl"
              >
                {aboutHowWeWork.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#525252] sm:text-base">
                {aboutHowWeWork.description}
              </p>

              <ol className="relative mt-8 space-y-0">
                {/* Connecting line */}
                <div
                  aria-hidden
                  className="absolute left-[1.1rem] top-5 h-[calc(100%-2.5rem)] w-px bg-amber-200"
                />
                {aboutHowWeWork.steps.map((step, idx) => (
                  <motion.li
                    key={step.number}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.09 }}
                    className="relative flex gap-4 pb-7 last:pb-0 sm:gap-5"
                  >
                    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400 text-xs font-black text-white ring-4 ring-white">
                      {idx + 1}
                    </span>
                    <div className="pt-1">
                      <p className="text-sm font-semibold text-[#171717] sm:text-base">{step.title}</p>
                      <p className="mt-1 text-sm leading-6 text-[#707070]">{step.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[280px] sm:max-w-[360px] lg:flex lg:max-w-none lg:items-center lg:justify-center"
            >
              <div aria-hidden className="absolute -inset-8 rounded-[3rem] bg-amber-50/80 blur-3xl" />
              <Image
                src="/Assets/ABOUT/At%20the%20office-bro.svg"
                alt="Xencus team at work"
                width={580}
                height={520}
                className="relative w-full"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          WHAT MAKES US DIFFERENT
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="relative overflow-hidden bg-white py-12 sm:py-16"
        aria-labelledby="about-diff-title"
      >
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true, margin: "-80px" }}
              transition={fadeUp.transition}
              className="mx-auto w-full max-w-xl lg:max-w-none"
            >
              <SectionLabel>Why Xencus</SectionLabel>
              <h2
                id="about-diff-title"
                className="mt-3 text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl"
              >
                {aboutDifference.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#525252] sm:text-base">
                {aboutDifference.description}
              </p>

              <ul className="mt-8 space-y-4">
                {aboutDifference.items.map((item, idx) => {
                  const Icon = DIFFERENCE_ICONS[idx];
                  return (
                    <li key={item.title} className="flex gap-3 sm:gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100 sm:h-10 sm:w-10">
                        <Icon className="size-4 text-amber-700 sm:size-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#171717] sm:text-base">{item.title}</p>
                        <p className="mt-0.5 text-sm leading-6 text-[#707070]">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-[280px] sm:max-w-[360px] lg:flex lg:max-w-none lg:items-center lg:justify-center"
            >
              <div aria-hidden className="absolute -inset-8 rounded-[3rem] bg-amber-50/80 blur-3xl" />
              <Image
                src="/Assets/ABOUT/Team%20work-rafiki.svg"
                alt="How Xencus is different"
                width={600}
                height={560}
                className="relative w-full"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CULTURE
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="relative overflow-hidden bg-white py-12 sm:py-16"
        aria-labelledby="about-culture-title"
      >
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
            {/* Content */}
            <motion.div
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true, margin: "-80px" }}
              transition={fadeUp.transition}
              className="mx-auto w-full max-w-xl lg:max-w-none"
            >
              <SectionLabel>{aboutCulture.label}</SectionLabel>
              <h2
                id="about-culture-title"
                className="mt-3 text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl"
              >
                {aboutCulture.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#525252] sm:text-base">
                {aboutCulture.description}
              </p>

              <div className="mt-8 space-y-4">
                {aboutCulture.traits.map((trait, idx) => {
                  const Icon = CULTURE_ICONS[idx];
                  return (
                    <motion.div
                      key={trait.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.07 }}
                      className="flex gap-3 sm:gap-4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100 sm:h-10 sm:w-10">
                        <Icon className="size-4 text-amber-700 sm:size-5" aria-hidden />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-[#171717] sm:text-base">{trait.title}</h3>
                        <p className="mt-0.5 text-sm leading-6 text-[#707070]">{trait.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[280px] sm:max-w-[360px] lg:flex lg:max-w-none lg:items-center lg:justify-center"
            >
              <div aria-hidden className="absolute -inset-8 rounded-[3rem] bg-amber-50/80 blur-3xl" />
              <Image
                src="/Assets/ABOUT/Team%20spirit-bro.svg"
                alt="Xencus culture"
                width={580}
                height={520}
                className="relative w-full"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CTA — dark closer
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
        aria-labelledby="about-cta-title"
      >
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
                Let&rsquo;s work together
              </p>
              <h2
                id="about-cta-title"
                className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl"
              >
                {aboutCta.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                {aboutCta.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Link
                  href={aboutCta.buttonHref}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#FAAB4E] px-6 py-3 text-sm font-bold text-[#151515] transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20"
                >
                  {aboutCta.buttonText}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
                <Link
                  href="/solutions"
                  className="text-center text-sm font-semibold text-zinc-400 transition hover:text-white sm:text-left"
                >
                  See our solutions <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            {/* Illustration — hidden on small, shown on lg */}
            <div className="mt-10 hidden flex-shrink-0 lg:mt-0 lg:block">
              <Image
                src="/Assets/ABOUT/Good%20team-rafiki.svg"
                alt="Team collaboration"
                width={420}
                height={420}
                className="w-[22rem] xl:w-[26rem]"
              />
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
