import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
} from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import {
  aboutHero,
  aboutMission,
  aboutVision,
  aboutWhatWeDo,
  aboutHowWeWork,
  aboutValues,
  aboutDifference,
  aboutStats,
  aboutCta,
} from "@/content/about";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us",
  description:
    "Xencus is the operations backbone for scalable EdTech. We run delivery, legal, HR, finance, and tech so education businesses can focus on product and growth.",
  path: "/about",
});

const VALUE_ICONS: Record<string, LucideIcon> = {
  quality: ShieldCheck,
  "brand-first": Layers,
  speed: Zap,
  partnership: Users,
};
const DIFFERENCE_ICONS = [Network, BookOpen, Target] as const;
const WHAT_WE_DO_ICONS = [LayoutDashboard, Briefcase, ClipboardList, Globe] as const;

/* shared container — matches ServiceLandingPage */
function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden bg-white">

      {/* ── Hero — full viewport, starts behind navbar ─────────────────────── */}
      <section
        aria-labelledby="about-hero-title"
        className="relative overflow-hidden bg-white -mt-[var(--header-offset)]"
        style={{ minHeight: "100dvh" }}
      >
        {/* decorative backgrounds */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-4/5 bg-[radial-gradient(ellipse_85%_70%_at_50%_0%,rgba(250,171,78,0.18),transparent_80%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-20 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_30%,transparent_100%)]"
        />

        {/* centering wrapper — starts below navbar, fills visible viewport */}
        <div
          className="relative flex items-center justify-center px-5 py-10 sm:px-8 sm:py-12 lg:px-10"
          style={{
            marginTop: "var(--header-offset)",
            minHeight: "calc(100dvh - var(--header-offset))",
          }}
        >
          <div className="mx-auto w-full max-w-5xl">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Text */}
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-brand-secondary/40">
                  {aboutHero.label}
                </p>
                <h1
                  id="about-hero-title"
                  className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-heading sm:text-5xl lg:text-6xl"
                >
                  {aboutHero.title}
                </h1>
                <p className="mt-5 text-base leading-7 text-paragraph-secondary sm:text-lg">
                  {aboutHero.subtitle}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-secondary px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-zinc-700"
                  >
                    Work with us
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-heading shadow-sm transition hover:bg-gray-50"
                  >
                    See what we do
                  </Link>
                </div>

                {/* Stats — glassmorphism bar */}
                <div className="mt-8 rounded-2xl border border-white/70 bg-white/60 px-5 py-4 shadow-lg shadow-gray-200/60 backdrop-blur-md sm:px-6 sm:py-5">
                  <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-0">
                    {aboutStats.map((stat, i) => (
                      <div
                        key={stat.label}
                        className={`text-center ${i > 0 ? "sm:border-l sm:border-gray-200" : ""}`}
                      >
                        <dt className="text-base font-extrabold text-brand-secondary sm:text-lg">
                          {stat.value}
                        </dt>
                        <dd className="mt-0.5 text-[10px] font-medium leading-snug text-paragraph-secondary sm:text-[11px]">
                          {stat.label}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              {/* Illustration */}
              <div className="flex items-center justify-center hero-illustration-float">
                <Image
                  src="/Assets/ABOUT/Team%20work-pana.svg"
                  alt="Xencus team working together"
                  width={520}
                  height={520}
                  className="w-full max-w-xs sm:max-w-sm lg:max-w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission + Vision ───────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-amber-50 py-16 sm:py-20"
        aria-labelledby="about-mission-title"
      >
        {/* edge fades to white */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />

        <Container className="relative">
          <div className="mb-10 text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-secondary/40">
              Purpose
            </p>
            <h2
              id="about-mission-title"
              className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              Mission &amp; vision
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-brand/15 sm:p-8">
              <span className="block h-1 w-12 rounded-full bg-brand" aria-hidden />
              <p className="mt-5 text-[11px] font-bold uppercase tracking-widest text-brand-secondary/40">
                Mission
              </p>
              <h3 className="mt-2 text-lg font-bold text-heading">{aboutMission.title}</h3>
              <p className="mt-3 text-sm leading-7 text-paragraph-secondary">
                {aboutMission.description}
              </p>
            </div>
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-brand/15 sm:p-8">
              <span className="block h-1 w-12 rounded-full bg-brand" aria-hidden />
              <p className="mt-5 text-[11px] font-bold uppercase tracking-widest text-brand-secondary/40">
                {aboutVision.label}
              </p>
              <h3 className="mt-2 text-lg font-bold text-heading">{aboutVision.title}</h3>
              <p className="mt-3 text-sm leading-7 text-paragraph-secondary">
                {aboutVision.description}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── What we do ─────────────────────────────────────────────────────── */}
      <section
        className="bg-white py-16 sm:py-20"
        aria-labelledby="about-what-title"
      >
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Illustration */}
            <div className="flex items-center justify-center">
              <Image
                src="/Assets/ABOUT/Seminar-bro.svg"
                alt="EdTech delivery operations"
                width={460}
                height={380}
                className="w-full max-w-xs sm:max-w-sm lg:max-w-full"
              />
            </div>
            {/* Content */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-brand-secondary/40">
                What we do
              </p>
              <h2
                id="about-what-title"
                className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
              >
                {aboutWhatWeDo.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-paragraph-secondary">
                {aboutWhatWeDo.subtitle}
              </p>
              <ul className="mt-8 space-y-5">
                {aboutWhatWeDo.items.map((item, idx) => {
                  const Icon = WHAT_WE_DO_ICONS[idx];
                  return (
                    <li key={item.title} className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/15">
                        <Icon className="size-4 text-brand-secondary" aria-hidden />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-heading">{item.title}</p>
                        <p className="mt-1 text-sm leading-6 text-paragraph-secondary">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Values ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-amber-50 py-16 sm:py-20"
        aria-labelledby="about-values-title"
      >
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />

        <Container className="relative">
          <div className="mb-10 text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-secondary/40">
              What we stand for
            </p>
            <h2
              id="about-values-title"
              className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              The principles that shape how we work
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutValues.map((value) => {
              const Icon = VALUE_ICONS[value.id] ?? ShieldCheck;
              return (
                <article
                  key={value.id}
                  className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand/15 transition hover:shadow-md"
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-brand/15 transition group-hover:bg-brand/25">
                    <Icon className="size-5 text-brand-secondary" aria-hidden />
                  </div>
                  <h3 className="text-sm font-bold text-heading">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-paragraph-secondary">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── How we work — step cards ────────────────────────────────────────── */}
      <section
        className="bg-white py-16 sm:py-20"
        aria-labelledby="about-how-title"
      >
        <Container>
          <div className="mb-12 text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-secondary/40">
              Our operating model
            </p>
            <h2
              id="about-how-title"
              className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              {aboutHowWeWork.heading}
            </h2>
          </div>

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aboutHowWeWork.steps.map((step, idx) => (
              <li key={step.number} className="group relative flex flex-col">
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  {/* ghost large number */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-1 -bottom-2 select-none text-[7rem] font-black leading-none text-gray-100"
                  >
                    {step.number}
                  </span>

                  {/* top accent bar */}
                  <div
                    className="mb-5 h-0.5 w-full rounded-full"
                    style={{
                      background:
                        idx === 0
                          ? "linear-gradient(to right, #faab4e, #faab4e60)"
                          : idx === 1
                          ? "linear-gradient(to right, #faab4e60, #faab4e, #faab4e60)"
                          : idx === 2
                          ? "linear-gradient(to right, #faab4e60, #faab4e, #faab4e60)"
                          : "linear-gradient(to right, #faab4e60, #faab4e)",
                    }}
                    aria-hidden
                  />

                  {/* step badge */}
                  <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand/20 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-secondary">
                    Step {step.number}
                  </span>

                  <h3 className="text-base font-bold leading-snug text-heading sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="relative mt-2 flex-1 text-sm leading-7 text-paragraph-secondary">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── What makes us different ────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-amber-50 py-16 sm:py-20"
        aria-labelledby="about-diff-title"
      >
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />

        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-brand-secondary/40">
                Why Xencus
              </p>
              <h2
                id="about-diff-title"
                className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
              >
                {aboutDifference.heading}
              </h2>
              <p className="mt-4 text-sm leading-7 text-paragraph-secondary">
                {aboutDifference.description}
              </p>
              <ul className="mt-8 space-y-5">
                {aboutDifference.items.map((item, idx) => {
                  const Icon = DIFFERENCE_ICONS[idx];
                  return (
                    <li key={item.title} className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-brand/20">
                        <Icon className="size-4 text-brand-secondary" aria-hidden />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-heading">{item.title}</p>
                        <p className="mt-1 text-sm leading-6 text-paragraph-secondary">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Illustration */}
            <div className="flex items-center justify-center">
              <Image
                src="/Assets/ABOUT/Team%20work-rafiki.svg"
                alt="How Xencus is different"
                width={460}
                height={380}
                className="w-full max-w-xs sm:max-w-sm lg:max-w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10" aria-labelledby="about-cta-title">
        <div className="mx-auto max-w-5xl">
          <div className="relative isolate overflow-hidden rounded-3xl bg-gray-900 px-8 py-16 text-center shadow-2xl sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-1/2 left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-1/3 right-0 -z-10 size-[24rem] rounded-full bg-brand/10 blur-3xl"
            />
            <h2
              id="about-cta-title"
              className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {aboutCta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-300 sm:text-base">
              {aboutCta.description}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={aboutCta.buttonHref}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-secondary shadow-lg shadow-brand/20 transition hover:opacity-90"
              >
                {aboutCta.buttonText}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="/solutions"
                className="text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                See our solutions <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
