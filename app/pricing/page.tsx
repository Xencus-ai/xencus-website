import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, SlidersHorizontal, TrendingUp, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import {
  pricingHero,
  pricingPillars,
  pricingFaq,
  pricingCta,
} from "@/content/pricing";

type StageFeature = { name: string; description: string; icon: LucideIcon };

const STAGE_FEATURES: StageFeature[] = [
  {
    name: "Scoped to your stage.",
    description:
      "We start with what you actually need right now — not a package priced for a company twice your size.",
    icon: SlidersHorizontal,
  },
  {
    name: "Adjusts as you grow.",
    description:
      "As you add cohorts, programs, and learners, your engagement updates — no switching vendors or renegotiating terms.",
    icon: TrendingUp,
  },
  {
    name: "One partner across all functions.",
    description:
      "Delivery, legal, HR, finance, and tech — coordinated through a single owner so nothing falls through the cracks.",
    icon: Layers,
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Pricing",
  description:
    "Xencus pricing scales with your business — from startup to enterprise. Custom engagement scoped to your size, volume, and goals. Get a quote.",
  path: "/pricing",
});

const COMPARISON_ROWS = [
  {
    feature: "Time to go live",
    inhouse: "3–6 months",
    agencies: "4–8 weeks",
    xencus: "2–3 weeks",
  },
  {
    feature: "Curriculum & trainer ops",
    inhouse: "Hire and build yourself",
    agencies: "Fragmented vendors",
    xencus: "End-to-end, managed",
  },
  {
    feature: "LMS management",
    inhouse: "Buy, configure, maintain",
    agencies: "Yet another vendor",
    xencus: "Fully handled",
  },
  {
    feature: "EdTech-specific legal",
    inhouse: "Generic retainer",
    agencies: "Not EdTech-aware",
    xencus: "EdTech-specific lawyers",
  },
  {
    feature: "HR & hiring",
    inhouse: "Build HR function",
    agencies: "Slow, generic agencies",
    xencus: "EdTech-focused HR",
  },
  {
    feature: "Finance & compliance",
    inhouse: "Internal CA",
    agencies: "Generic accounting",
    xencus: "EdTech-aligned finance ops",
  },
  {
    feature: "Your brand on everything",
    inhouse: "Full control",
    agencies: "Inconsistent across vendors",
    xencus: "100% white-label",
  },
  {
    feature: "Cost model",
    inhouse: "High fixed salaries",
    agencies: "Unpredictable",
    xencus: "Scales with your volume",
  },
  {
    feature: "Single point of contact",
    inhouse: "You coordinate all",
    agencies: "Multiple vendor contacts",
    xencus: "One dedicated owner",
  },
  {
    feature: "Scales without switching",
    inhouse: "Hire more people",
    agencies: "Add more vendors",
    xencus: "Adjust scope, same partner",
  },
] as const;

export default function PricingPage() {
  return (
    <main className="bg-background">
      {/* ------------------------------------------------------------------ */}
      {/* Hero — keep exact design                                            */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="relative isolate flex min-h-[calc(100vh-var(--header-offset))] w-full items-center justify-center overflow-hidden px-6 py-24 sm:py-32 lg:px-8 lg:py-40 -mt-[var(--header-offset)]"
        aria-labelledby="pricing-hero-title"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#facc48] to-[#f97316] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              {pricingHero.label}
            </p>
            <h1
              id="pricing-hero-title"
              className="mt-4 text-5xl font-extrabold tracking-tight text-balance text-heading sm:text-6xl lg:text-7xl"
            >
              {pricingHero.title}
            </h1>
            <p className="mt-6 text-lg font-medium text-pretty text-paragraph-secondary sm:text-xl">
              {pricingHero.subtitle}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={pricingHero.ctaHref}
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-secondary shadow-sm hover:opacity-90"
              >
                {pricingHero.ctaText}
              </Link>
              <Link href="/contact" className="text-sm font-semibold text-heading">
                Talk to our team <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-18rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#f97316] to-[#facc48] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.92) 55%, #ffffff 100%)",
          }}
        />
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Who we work with — 2-column feature layout                        */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="scroll-mt-[var(--header-offset)] overflow-hidden bg-white py-12 sm:py-16"
        aria-labelledby="pricing-stages-title"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Left: text + feature list */}
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
                  Who we work with
                </p>
                <h2
                  id="pricing-stages-title"
                  className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-heading sm:text-5xl"
                >
                  From first cohort to enterprise scale
                </h2>
                <p className="mt-6 text-lg/8 text-paragraph-secondary">
                  Regardless of where you are today, we scope your engagement to fit — and adjust it
                  as you grow. There&apos;s no plan to pick, just a conversation about what you need.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-paragraph-secondary lg:max-w-none">
                  {STAGE_FEATURES.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-heading">
                        <feature.icon
                          aria-hidden
                          className="absolute top-1 left-1 size-5 text-brand-secondary"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-secondary shadow-sm hover:opacity-90"
                  >
                    Get a custom quote
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: image — intentionally wider than column to bleed right */}
            <Image
              src="/Assets/pricing/2151492150.avif"
              alt="Xencus scoping and planning an EdTech engagement"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Why custom pricing — bento grid                                    */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-gray-50 py-12 sm:py-16"
        aria-labelledby="pricing-pillars-title"
      >
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-brand-secondary">
            How it works
          </p>
          <h2
            id="pricing-pillars-title"
            className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-heading sm:text-5xl"
          >
            Why we don&apos;t use fixed plans
          </h2>

          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">

            {/* Cell 1 — Left tall, row-span-2: Pillar 1 + image */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-heading max-lg:text-center">
                    {pricingPillars[0].heading}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-paragraph-secondary max-lg:text-center">
                    {pricingPillars[0].body}
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <Image
                    src="/Assets/pricing/pricingBento.avif"
                    alt="Custom EdTech engagement scoped to your stage"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-[2rem]" />
            </div>

            {/* Cell 2 — Middle top: Pillar 2 + image */}
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-heading max-lg:text-center">
                    {pricingPillars[1].heading}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-paragraph-secondary max-lg:text-center">
                    {pricingPillars[1].body}
                  </p>
                </div>
                <div className="relative mt-4 min-h-[12rem] flex-1 overflow-hidden max-lg:mx-auto max-lg:w-full">
                  <Image
                    src="/Assets/pricing/pricingBento2.avif"
                    alt="Engagement costs that scale with your volume"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-[2rem]" />
            </div>

            {/* Cell 3 — Middle bottom: Pillar 3 + service tags */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-heading max-lg:text-center">
                    {pricingPillars[2].heading}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-paragraph-secondary max-lg:text-center">
                    {pricingPillars[2].body}
                  </p>
                </div>
                <div className="flex flex-1 flex-wrap content-start items-start justify-start gap-2 px-8 pt-6 max-lg:pb-8 lg:pb-6">
                  {["Delivery", "Legal", "HR", "Finance", "Tech"].map((service) => (
                    <span
                      key={service}
                      className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-sm font-medium text-brand-secondary"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
            </div>

            {/* Cell 4 — Right tall, row-span-2: How it starts (dark panel) */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-heading max-lg:text-center">
                    How it starts
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-paragraph-secondary max-lg:text-center">
                    From conversation to going live — three steps, no lengthy procurement.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl outline outline-white/10">
                    <div className="flex bg-gray-900 outline outline-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                          Getting started
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6 px-6 pt-6 pb-14">
                      {[
                        {
                          step: "01",
                          title: "Tell us your setup",
                          text: "Share your domains, volume, and what you need — takes 15 minutes.",
                        },
                        {
                          step: "02",
                          title: "We scope your engagement",
                          text: "You get a clear proposal with deliverables, timelines, and costs.",
                        },
                        {
                          step: "03",
                          title: "Go live in 2–3 weeks",
                          text: "We handle curriculum, trainers, and ops under your brand.",
                        },
                      ].map((item) => (
                        <div key={item.step} className="flex gap-3">
                          <span className="mt-0.5 shrink-0 text-xs font-bold text-brand-secondary">
                            {item.step}
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-white">{item.title}</p>
                            <p className="mt-1 text-xs/5 text-gray-400">{item.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Comparison table                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-white py-12 sm:py-16"
        aria-labelledby="pricing-comparison-title"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              How we compare
            </p>
            <h2
              id="pricing-comparison-title"
              className="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              Xencus vs. the alternatives
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paragraph-secondary">
              See how Xencus stacks up against building in-house or working with multiple agencies.
            </p>
          </header>

          <div className="mt-14 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm lg:mt-18">
            <table className="w-full min-w-[580px] text-sm">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-[34%] rounded-tl-2xl border-b border-gray-200 bg-gray-50 px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-paragraph-secondary"
                  >
                    What you need
                  </th>
                  <th
                    scope="col"
                    className="w-[22%] border-b border-gray-200 bg-gray-50 px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-paragraph-secondary"
                  >
                    In-house team
                  </th>
                  <th
                    scope="col"
                    className="w-[22%] border-b border-gray-200 bg-gray-50 px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-paragraph-secondary"
                  >
                    Multiple agencies
                  </th>
                  <th
                    scope="col"
                    className="w-[22%] rounded-tr-2xl border-b border-brand/20 bg-brand px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-brand-secondary"
                  >
                    Xencus
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="group">
                    <td className="px-6 py-4 text-sm font-medium text-heading">{row.feature}</td>
                    <td className="px-4 py-4 text-center text-sm text-paragraph-secondary">
                      {row.inhouse}
                    </td>
                    <td className="px-4 py-4 text-center text-sm text-paragraph-secondary">
                      {row.agencies}
                    </td>
                    <td className="bg-brand/8 px-4 py-4 text-center text-sm font-semibold text-heading">
                      {row.xencus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ                                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-background py-12 sm:py-16"
        aria-labelledby="pricing-faq-title"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            id="pricing-faq-title"
            className="text-center text-2xl font-bold tracking-tight text-heading sm:text-3xl"
          >
            {pricingFaq.title}
          </h2>
          <dl className="mt-12 space-y-8">
            {pricingFaq.items.map((item) => (
              <div key={item.q} className="border-b border-gray-200 pb-8 last:border-0 last:pb-0">
                <dt className="text-base font-semibold text-heading">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-paragraph-secondary">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CTA                                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-background py-12 sm:py-16"
        aria-labelledby="pricing-cta-title"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden rounded-3xl bg-gray-900 px-8 py-16 text-center sm:px-16 sm:py-20">
            {/* Ambient brand glow */}
            <div
              aria-hidden="true"
              className="absolute -top-1/2 left-1/2 -z-10 size-[40rem] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-1/3 right-0 -z-10 size-[28rem] rounded-full bg-brand/10 blur-3xl"
            />
            <p className="mb-4 text-sm font-semibold tracking-widest text-brand uppercase">
              {pricingHero.label}
            </p>
            <h2
              id="pricing-cta-title"
              className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              {pricingCta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base/7 text-gray-300">
              {pricingCta.description}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={pricingCta.buttonHref}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-secondary shadow-lg shadow-brand/20 transition hover:opacity-90"
              >
                {pricingCta.buttonText}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                Talk to our team <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
