import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Layers, Zap, Users, Network, BookOpen, Target } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import {
  aboutHero,
  aboutNarrative,
  aboutMission,
  aboutVision,
  aboutWhatWeDo,
  aboutHowWeWork,
  aboutValues,
  aboutCulture,
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

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-background">
      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative isolate overflow-hidden bg-background" aria-labelledby="about-hero-title">
        {/* Ambient top glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(250,171,78,0.18), transparent)",
          }}
        />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-12">
            {/* Left — text */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                {aboutHero.label}
              </p>
              <h1
                id="about-hero-title"
                className="mt-4 text-balance text-4xl font-bold tracking-tight text-heading sm:text-5xl lg:text-6xl"
              >
                {aboutHero.title}
              </h1>
              <p className="mt-6 max-w-xl text-base/7 text-paragraph-secondary sm:text-lg/8">
                {aboutHero.subtitle}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-secondary shadow-sm transition hover:opacity-90"
                >
                  Work with us
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/solutions"
                  className="text-sm font-semibold text-heading transition hover:underline"
                >
                  See what we do <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Right — illustration */}
            <div className="mt-12 flex items-center justify-center lg:mt-0">
              <Image
                src="/Assets/ABOUT/Team%20work-pana.svg"
                alt="Xencus team working together"
                width={560}
                height={560}
                className="w-full max-w-[460px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Stats                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-gray-50" aria-label="Key outcomes">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white p-6 text-center ring-1 ring-gray-200"
              >
                <dt className="text-xl font-bold text-brand-secondary sm:text-2xl">{stat.value}</dt>
                <dd className="mt-2 text-xs font-medium leading-snug text-paragraph-secondary sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Why we exist                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-background"
        aria-labelledby="about-narrative-title"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-[1fr_380px] lg:items-center lg:gap-x-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                {aboutNarrative.label}
              </p>
              <h2
                id="about-narrative-title"
                className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
              >
                {aboutNarrative.heading}
              </h2>
              <div className="mt-8 space-y-5 text-base/7 text-paragraph-secondary">
                {aboutNarrative.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <div className="mt-12 flex items-center justify-center lg:mt-0">
              <Image
                src="/Assets/ABOUT/At%20the%20office-bro.svg"
                alt="Xencus team at work"
                width={400}
                height={400}
                className="w-full max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Mission + Vision                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-gray-50"
        aria-labelledby="about-mission-title"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Purpose
            </p>
            <h2
              id="about-mission-title"
              className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              Mission and vision
            </h2>
          </header>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Mission */}
            <div className="rounded-2xl bg-white p-8 ring-1 ring-gray-200 sm:p-10">
              <span className="block h-1 w-16 rounded-full bg-brand" aria-hidden="true" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-brand">
                Mission
              </p>
              <h3 className="mt-2 text-xl font-bold text-heading sm:text-2xl">
                {aboutMission.title}
              </h3>
              <p className="mt-4 text-base/7 text-paragraph-secondary">
                {aboutMission.description}
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl bg-white p-8 ring-1 ring-gray-200 sm:p-10">
              <span className="block h-1 w-16 rounded-full bg-brand" aria-hidden="true" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-brand">
                {aboutVision.label}
              </p>
              <h3 className="mt-2 text-xl font-bold text-heading sm:text-2xl">
                {aboutVision.title}
              </h3>
              <p className="mt-4 text-base/7 text-paragraph-secondary">
                {aboutVision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Values                                                              */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-background"
        aria-labelledby="about-values-title"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              What we stand for
            </p>
            <h2
              id="about-values-title"
              className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              The principles that shape how we work
            </h2>
            <p className="mt-4 text-base/7 text-paragraph-secondary">
              These are not values on a slide deck. They determine what we say yes to, what we say
              no to, and how we behave when things get difficult.
            </p>
          </header>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutValues.map((value) => {
              const Icon = VALUE_ICONS[value.id] ?? ShieldCheck;
              return (
                <article
                  key={value.id}
                  className="group rounded-2xl bg-white p-6 ring-1 ring-gray-200 transition hover:ring-brand/30 hover:shadow-sm"
                >
                  <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-brand/10 transition group-hover:bg-brand/20">
                    <Icon className="size-5 text-brand-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-heading">{value.title}</h3>
                  <p className="mt-2 text-sm/6 text-paragraph-secondary">{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Culture                                                             */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-gray-50"
        aria-labelledby="about-culture-title"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-[360px_1fr] lg:items-start lg:gap-x-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                {aboutCulture.label}
              </p>
              <h2
                id="about-culture-title"
                className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
              >
                {aboutCulture.heading}
              </h2>
              <p className="mt-4 text-base/7 text-paragraph-secondary">
                {aboutCulture.description}
              </p>
              <div className="mt-10 hidden lg:block">
                <Image
                  src="/Assets/ABOUT/Team%20spirit-bro.svg"
                  alt="Xencus team culture"
                  width={320}
                  height={320}
                  className="w-full max-w-xs"
                />
              </div>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-0">
              {aboutCulture.traits.map((trait) => (
                <div key={trait.title} className="rounded-2xl bg-white p-6 ring-1 ring-gray-200">
                  <h3 className="text-base font-semibold text-heading">{trait.title}</h3>
                  <p className="mt-2 text-sm/6 text-paragraph-secondary">{trait.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* What we do                                                          */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-background"
        aria-labelledby="about-what-title"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-[360px_1fr] lg:items-start lg:gap-x-16">
            <div className="lg:sticky lg:top-[calc(var(--header-offset)+2rem)]">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                What we do
              </p>
              <h2
                id="about-what-title"
                className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
              >
                {aboutWhatWeDo.title}
              </h2>
              <p className="mt-4 text-base/7 text-paragraph-secondary">{aboutWhatWeDo.subtitle}</p>
              <div className="mt-10 hidden lg:block">
                <Image
                  src="/Assets/ABOUT/Seminar-bro.svg"
                  alt="EdTech delivery operations"
                  width={300}
                  height={300}
                  className="w-full max-w-xs"
                />
              </div>
            </div>

            <div className="mt-12 space-y-5 lg:mt-0">
              {aboutWhatWeDo.items.map((item, idx) => (
                <div
                  key={item.title}
                  className="flex gap-5 rounded-2xl bg-white p-6 ring-1 ring-gray-200 sm:p-8"
                >
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-extrabold text-brand-secondary">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-heading sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm/6 text-paragraph-secondary sm:text-base/7">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* How we work                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-gray-50"
        aria-labelledby="about-how-title"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Our operating model
            </p>
            <h2
              id="about-how-title"
              className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              {aboutHowWeWork.heading}
            </h2>
            <p className="mt-4 text-base/7 text-paragraph-secondary">
              {aboutHowWeWork.description}
            </p>
          </header>

          <div className="relative mt-14">
            {/* Connector line — desktop only */}
            <div
              aria-hidden="true"
              className="absolute top-6 left-6 right-6 hidden h-px bg-gray-200 lg:block"
            />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {aboutHowWeWork.steps.map((step) => (
                <div key={step.number}>
                  <div className="relative z-10 mb-5 inline-flex size-12 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-brand-secondary ring-4 ring-gray-50">
                    {step.number}
                  </div>
                  <h3 className="text-base font-semibold text-heading">{step.title}</h3>
                  <p className="mt-2 text-sm/6 text-paragraph-secondary">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* What makes us different                                             */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="scroll-mt-[var(--header-offset)] overflow-hidden bg-background"
        aria-labelledby="about-diff-title"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Left — text + feature list */}
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <p className="text-base/7 font-semibold text-brand">Why Xencus</p>
                <h2
                  id="about-diff-title"
                  className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-heading sm:text-5xl"
                >
                  {aboutDifference.heading}
                </h2>
                <p className="mt-6 text-lg/8 text-paragraph-secondary">
                  {aboutDifference.description}
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-paragraph-secondary lg:max-w-none">
                  {aboutDifference.items.map((item, idx) => {
                    const Icon = DIFFERENCE_ICONS[idx];
                    return (
                      <div key={item.title} className="relative pl-9">
                        <dt className="inline font-semibold text-heading">
                          <Icon
                            aria-hidden="true"
                            className="absolute top-1 left-1 size-5 text-brand-secondary"
                          />
                          {item.title}
                        </dt>{" "}
                        <dd className="inline">{item.description}</dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </div>

            {/* Right — illustration with bleed */}
            <Image
              src="/Assets/ABOUT/Team%20work-rafiki.svg"
              alt="How Xencus is different from hiring and agencies"
              width={1200}
              height={900}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CTA                                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-background"
        aria-labelledby="about-cta-title"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="relative isolate overflow-hidden rounded-3xl bg-gray-900 px-8 py-16 text-center shadow-2xl sm:px-16 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute -top-1/2 left-1/2 -z-10 size-[40rem] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-1/3 right-0 -z-10 size-[28rem] rounded-full bg-brand/10 blur-3xl"
            />
            <h2
              id="about-cta-title"
              className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              {aboutCta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base/7 text-gray-300">
              {aboutCta.description}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={aboutCta.buttonHref}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-secondary shadow-lg shadow-brand/20 transition hover:opacity-90"
              >
                {aboutCta.buttonText}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/solutions"
                className="text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                See our solutions <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
