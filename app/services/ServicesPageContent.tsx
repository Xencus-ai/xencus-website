"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Building2,
  GraduationCap,
  Scale,
  Users,
  BarChart3,
  Megaphone,
  Palette,
  Globe,
  Smartphone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { otherServices } from "@/content/other-services";

/* ── Motion presets ─────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

/* ── Service icon map ───────────────────────────────────────────── */
const SERVICE_ICONS: Record<string, React.ElementType> = {
  "corporate-ld": Building2,
  "universities-training": GraduationCap,
  "edtech-legal": Scale,
  "hr-edtech": Users,
  "finance-edtech": BarChart3,
  "technical-services": Cpu,
};

/* ── Technical sub-services ─────────────────────────────────────── */
const TECH_SERVICES = [
  {
    label: "Digital Marketing",
    href: "/services/technical/digital-marketing",
    icon: Megaphone,
    description: "Performance campaigns, SEO, and growth for EdTech brands.",
  },
  {
    label: "Graphic Designing",
    href: "/services/technical/graphic-designing",
    icon: Palette,
    description: "Brand identity, course creatives, and UI/UX design assets.",
  },
  {
    label: "Website Designing",
    href: "/services/technical/website-designing",
    icon: Globe,
    description: "Conversion-focused websites built for education brands.",
  },
  {
    label: "Mobile App Development",
    href: "/services/technical/mobile-app-development",
    icon: Smartphone,
    description: "Native and cross-platform learning apps for your students.",
  },
] as const;

/* ═══════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════ */
export default function ServicesPageContent() {
  // Separate technical from others for grouped display
  const coreServices = otherServices.filter((s) => s.id !== "technical-services");

  return (
    <div className="bg-white">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        aria-labelledby="services-hero-title"
        className="relative flex min-h-screen w-full flex-col items-center justify-center -mt-[var(--header-offset)] pt-[var(--header-offset)]"
        style={{
          background:
            "linear-gradient(135deg, #fffcf0 0%, #ffffff 45%, #fff8ef 75%, #fffdf8 100%)",
        }}
      >
        {/* Spinning conic gradient glow blobs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="about-hero-spin absolute -right-48 -top-48 h-[800px] w-[800px] rounded-full"
            style={{ opacity: 0.25, filter: "blur(100px)" }}
          />
          <div
            className="about-hero-spin absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full"
            style={{ opacity: 0.15, filter: "blur(110px)", animationDelay: "-4s" }}
          />
        </div>
        {/* Bottom fade */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />

        <Container>
          <motion.div
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } } }}
            className="flex flex-col items-center py-12 text-center sm:py-16"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>What we offer</SectionLabel>
            </motion.div>

            <motion.h1
              id="services-hero-title"
              variants={fadeUp}
              className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-[#171717] sm:text-5xl lg:text-6xl"
            >
              One partner for{" "}
              <span className="relative whitespace-nowrap">
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
                <span className="relative">every EdTech need</span>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-sm leading-relaxed text-[#525252] sm:text-base sm:leading-8"
            >
              From live class operations and LMS management to legal, HR, finance, and technical
              growth — Xencus handles it all so you can focus on building great products.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <div className="cta-spin-wrap">
                <div className="cta-spin-border" aria-hidden />
                <Link
                  href="/services/edtech-companies"
                  className="group relative z-10 inline-flex items-center gap-2 rounded-xl bg-[#151515] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-zinc-800 sm:px-7 sm:py-3.5"
                >
                  EdTech operations
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-[#171717] transition-all hover:border-amber-300 hover:bg-amber-50 sm:px-7 sm:py-3.5"
              >
                Talk to us
              </Link>
            </motion.div>

            {/* Stat pills */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            >
              {[
                { v: "300+", l: "Active partners" },
                { v: "40+", l: "Domains covered" },
                { v: "< 24 hrs", l: "To go live" },
                { v: "4.8★", l: "Avg rating" },
              ].map(({ v, l }) => (
                <div
                  key={l}
                  className="rounded-2xl border border-amber-200/60 bg-amber-50/70 px-4 py-2.5 text-center backdrop-blur-sm"
                >
                  <p className="text-base font-extrabold text-amber-900 sm:text-lg">{v}</p>
                  <p className="text-[10px] text-amber-700/70 sm:text-xs">{l}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FEATURED — EdTech Companies
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-14 sm:py-20" aria-labelledby="featured-service-title">
        <Container>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: "-60px" }}
            transition={fadeUp.transition}
            className="mb-3"
          >
            <SectionLabel>Most popular</SectionLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-amber-200/50 bg-gradient-to-br from-amber-50 via-white to-orange-50/40 shadow-[0_4px_40px_rgba(250,171,78,0.12)] sm:rounded-3xl"
          >
            <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:gap-12 lg:p-12">
              {/* Copy */}
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-700">
                  EdTech Companies
                </span>
                <h2
                  id="featured-service-title"
                  className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-[#171717] sm:text-3xl lg:text-4xl"
                >
                  Full-stack operations backbone for your EdTech business
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[#525252] sm:text-base sm:leading-8">
                  Live classes, LMS, certificates, learner support, and data — we run every
                  operational layer so your team focuses on growth and product.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {[
                    "Live class scheduling, trainers & recordings",
                    "LMS and course structure management",
                    "Automated certificate issuance at scale",
                    "Analytics, reports and learner insights",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#525252]">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-400 text-[9px] font-black text-white">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services/edtech-companies"
                  className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#FAAB4E] px-6 py-3 text-sm font-bold text-[#151515] transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-400/25"
                >
                  Explore EdTech operations
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </div>

              {/* Illustration */}
              <div className="flex items-center justify-center lg:w-72 xl:w-96">
                <Image
                  src="/Assets/service/technology.svg"
                  alt="EdTech operations platform"
                  width={420}
                  height={420}
                  className="w-full max-w-[260px] sm:max-w-[320px] lg:max-w-none"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CORE SERVICES GRID
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white pb-14 sm:pb-20" aria-labelledby="core-services-title">
        <Container>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: "-60px" }}
            transition={fadeUp.transition}
            className="mb-8 sm:mb-10"
          >
            <SectionLabel>Business operations</SectionLabel>
            <h2
              id="core-services-title"
              className="mt-3 text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl"
            >
              Everything your EdTech business needs to run
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-7 text-[#707070] sm:text-base">
              Legal, HR, finance, corporate training, and university partnerships — all handled
              by specialists who understand EdTech.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {coreServices.map((service, idx) => {
              const Icon = SERVICE_ICONS[service.id] ?? Cpu;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                >
                  <Link
                    href={service.href}
                    className="group flex h-full flex-col rounded-2xl border border-zinc-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-200/70 hover:bg-amber-50/40 hover:shadow-[0_8px_32px_rgba(250,171,78,0.10)] sm:p-7"
                  >
                    {/* Icon + illustration row */}
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 transition-colors group-hover:bg-amber-200">
                        <Icon className="size-5 text-amber-700" aria-hidden />
                      </div>
                      <Image
                        src={service.illustration}
                        alt=""
                        aria-hidden
                        width={80}
                        height={80}
                        className="h-16 w-16 object-contain opacity-80 transition-opacity group-hover:opacity-100"
                      />
                    </div>

                    <h3 className="text-base font-bold text-[#171717] sm:text-lg">
                      {service.label}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-[#707070]">
                      {service.description}
                    </p>

                    <ul className="mt-4 space-y-1.5">
                      {service.bullets.map((b) => (
                        <li key={b.id} className="flex items-center gap-2 text-xs text-[#525252]">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                          {b.title}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-amber-700 transition-colors group-hover:text-amber-600">
                      Learn more
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TECHNICAL SERVICES
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="bg-white py-14 sm:py-20"
        aria-labelledby="tech-services-title"
      >
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            {/* Left: intro */}
            <motion.div
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true, margin: "-60px" }}
              transition={fadeUp.transition}
            >
              <SectionLabel>Technical services</SectionLabel>
              <h2
                id="tech-services-title"
                className="mt-3 text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl"
              >
                Growth and product stack, built for EdTech
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#707070] sm:text-base">
                From brand awareness to a fully functional learning app — our technical team runs
                your entire digital and product presence.
              </p>
              <Image
                src="/Assets/service/technology.svg"
                alt=""
                aria-hidden
                width={340}
                height={340}
                className="mt-8 hidden w-full max-w-[280px] lg:block"
              />
            </motion.div>

            {/* Right: 2×2 sub-service grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {TECH_SERVICES.map((ts, idx) => {
                const Icon = ts.icon;
                return (
                  <motion.div
                    key={ts.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                  >
                    <Link
                      href={ts.href}
                      className="group flex h-full flex-col rounded-2xl border border-zinc-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-200/70 hover:shadow-[0_6px_24px_rgba(250,171,78,0.10)] sm:p-6"
                    >
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 transition-colors group-hover:bg-amber-200">
                        <Icon className="size-5 text-amber-700" aria-hidden />
                      </div>
                      <h3 className="text-sm font-bold text-[#171717] sm:text-base">{ts.label}</h3>
                      <p className="mt-1.5 flex-1 text-xs leading-5 text-[#707070] sm:text-sm sm:leading-6">
                        {ts.description}
                      </p>
                      <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-amber-700 transition-colors group-hover:text-amber-600">
                        Explore
                        <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" aria-hidden />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CTA — dark closer
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8" aria-labelledby="services-cta-title">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative isolate overflow-hidden rounded-2xl bg-[#151515] px-6 py-10 text-center shadow-2xl sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-16 lg:py-16"
          >
            <div aria-hidden className="pointer-events-none absolute -top-1/2 left-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-amber-500/15 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-1/3 right-0 -z-10 h-[22rem] w-[22rem] rounded-full bg-amber-400/10 blur-3xl" />

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
              Ready to start?
            </p>
            <h2
              id="services-cta-title"
              className="mx-auto mt-3 max-w-2xl text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              Let&rsquo;s build the operations layer your EdTech deserves
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              Talk to us — we&rsquo;ll understand your current setup and show you exactly how
              Xencus can plug in and get you to market faster.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#FAAB4E] px-7 py-3.5 text-sm font-bold text-[#151515] transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20"
              >
                Book a free call
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
              <Link
                href="/solutions"
                className="text-sm font-semibold text-zinc-400 transition hover:text-white"
              >
                See our solutions <span aria-hidden>→</span>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
