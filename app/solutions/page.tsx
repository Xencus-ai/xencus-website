import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, X, Sparkles } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import {
  solutionsHero,
  solutionsTrust,
  solutionsSegments,
  solutionsCapabilities,
  solutionsComparison,
  solutionsHowItWorks,
  solutionsCta,
} from "@/content/solutions";

export const metadata: Metadata = buildPageMetadata({
  title: "Solutions",
  description:
    "Xencus solutions for EdTech companies, corporate L&D, and institutions: delivery operations, legal, HR, finance, and tech—so you scale without scaling headcount.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section
        className="relative isolate flex min-h-[calc(100vh-var(--header-offset))] w-full items-center justify-center overflow-hidden px-6 py-24 sm:py-32 lg:px-8 lg:py-40 -mt-[var(--header-offset)]"
        aria-labelledby="solutions-hero-title"
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
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-secondary/20 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-secondary shadow-sm">
              <Sparkles className="size-3.5" aria-hidden />
              {solutionsHero.label}
            </span>
          </div>
          <div className="mt-10 text-center">
            <h1
              id="solutions-hero-title"
              className="text-5xl font-extrabold tracking-tight text-balance text-heading sm:text-6xl lg:text-7xl"
            >
              {solutionsHero.title}
            </h1>
            <p className="mt-6 text-lg font-medium text-pretty text-paragraph-secondary sm:text-xl">
              {solutionsHero.subtitle}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={solutionsHero.ctaHref}
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-secondary shadow-sm hover:opacity-90"
              >
                {solutionsHero.ctaText}
              </Link>
              <Link href="/contact" className="text-sm font-semibold text-heading">
                Learn more <span aria-hidden="true">→</span>
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

      {/* Trust */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-white py-12 sm:py-16"
        aria-labelledby="solutions-trust-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              Trust & reliability
            </p>
            <h2
              id="solutions-trust-title"
              className="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              {solutionsTrust.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paragraph-secondary">
              {solutionsTrust.subtitle}
            </p>
          </header>

          <ul className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:mt-18 lg:grid-cols-4 lg:gap-8">
            {solutionsTrust.items.map((item) => (
              <li key={item.title}>
                <article className="h-full rounded-2xl border border-gray-200/80 bg-background p-6 shadow-sm sm:p-8">
                  <span className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-brand/15">
                    <CheckCircle2 className="size-5 text-brand-secondary" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-heading">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-paragraph-secondary">
                    {item.description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who we serve */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-white py-12 sm:py-16"
        aria-labelledby="solutions-segments-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              Who we serve
            </p>
            <h2
              id="solutions-segments-title"
              className="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              Built for every stage of learning at scale
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paragraph-secondary">
              Whether you sell to learners, train employees, or run accredited programs—we adapt to
              your segment and tools.
            </p>
          </header>
          <ul className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:mt-18 lg:grid-cols-3 lg:gap-8">
            {solutionsSegments.map((segment) => (
              <li key={segment.id}>
                <Link
                  href={segment.href}
                  className="group flex h-full flex-col rounded-2xl border border-gray-200/80 bg-background p-6 shadow-sm transition-all hover:border-brand/40 hover:shadow-md hover:shadow-gray-200/50 sm:p-8"
                >
                  <span
                    className="mb-4 block h-1 w-12 rounded-full bg-brand"
                    aria-hidden
                  />
                  <h3 className="text-xl font-semibold text-heading">{segment.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-paragraph-secondary">
                    {segment.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-secondary">
                    {segment.linkLabel}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What we deliver */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-background py-12 sm:py-16"
        aria-labelledby="solutions-capabilities-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              What we deliver
            </p>
            <h2
              id="solutions-capabilities-title"
              className="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              Operations, legal, HR, finance, and tech
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paragraph-secondary">
              One operating layer that combines delivery, business services, and technology—so you do
              not need to assemble and manage multiple vendors yourself.
            </p>
          </header>

          {/* Bento grid overview */}
          <div className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            {/* ── Delivery operations (left, tall 2-row) ── */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-2xl bg-white lg:rounded-l-3xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl lg:rounded-l-3xl">
                {/* text */}
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-1 text-lg font-semibold tracking-tight text-heading max-lg:text-center">
                    Delivery operations
                  </p>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-paragraph-secondary max-lg:text-center">
                    Live classes, trainers, LMS operations, projects, assessments, and certifications
                    delivered under your brand with a single team accountable for outcomes.
                  </p>
                </div>
                {/* illustration fills the remaining card space */}
                <div className="relative min-h-[18rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  {/* warm glow behind image */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_60%,rgba(250,204,72,0.14),transparent_80%)]"
                  />
                  <Image
                    src="/Assets/edutech/illustrations/planning.avif"
                    alt="Structured learning programme delivery illustration"
                    fill
                    sizes="(max-width: 1024px) 80vw, 33vw"
                    className="object-contain p-6 sm:p-8 drop-shadow-md"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl shadow-sm ring-1 ring-black/5 lg:rounded-l-3xl" />
            </div>

            {/* ── Legal & HR (top middle) ── */}
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-2xl bg-white max-lg:rounded-t-3xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl max-lg:rounded-t-3xl">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-1 text-lg font-semibold tracking-tight text-heading max-lg:text-center">
                    Legal and HR
                  </p>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-paragraph-secondary max-lg:text-center">
                    Contracts, compliance, policies, and people operations that keep your programmes
                    and teams running without legal or HR surprises.
                  </p>
                </div>
                {/* side-by-side legal + HR illustrations */}
                <div className="flex flex-1 items-center justify-center gap-4 px-8 pb-6 pt-4 sm:px-10 lg:pb-4">
                  <div className="relative h-20 w-20 shrink-0 sm:h-24 sm:w-24">
                    <Image
                      src="/Assets/service/legal.svg"
                      alt="Legal services illustration"
                      fill
                      className="object-contain drop-shadow-sm"
                    />
                  </div>
                  <span aria-hidden className="h-12 w-px bg-gray-200" />
                  <div className="relative h-20 w-20 shrink-0 sm:h-24 sm:w-24">
                    <Image
                      src="/Assets/service/hr.svg"
                      alt="HR services illustration"
                      fill
                      className="object-contain drop-shadow-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl shadow-sm ring-1 ring-black/5 max-lg:rounded-t-3xl" />
            </div>

            {/* ── Finance (bottom middle) ── */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-2xl bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-1 text-lg font-semibold tracking-tight text-heading max-lg:text-center">
                    Finance and reporting
                  </p>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-paragraph-secondary max-lg:text-center">
                    GST, TDS, bookkeeping, and monthly reporting designed for how education
                    businesses actually earn.
                  </p>
                </div>
                {/* finance illustration centred in remaining space */}
                <div className="relative flex flex-1 items-center justify-center px-8 pb-6 pt-3 lg:pb-4">
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(250,204,72,0.10),transparent_75%)]"
                  />
                  <div className="relative h-28 w-28 sm:h-32 sm:w-32">
                    <Image
                      src="/Assets/service/finance.svg"
                      alt="Finance operations illustration"
                      fill
                      className="object-contain drop-shadow-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl shadow-sm ring-1 ring-black/5" />
            </div>

            {/* ── Technical services (right, tall 2-row) ── */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-2xl bg-white max-lg:rounded-b-3xl lg:rounded-r-3xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl max-lg:rounded-b-3xl lg:rounded-r-3xl">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-1 text-lg font-semibold tracking-tight text-heading max-lg:text-center">
                    Technical services
                  </p>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-paragraph-secondary max-lg:text-center">
                    Digital marketing, design, websites, and mobile apps that support your learner
                    experience and go-to-market motion.
                  </p>
                </div>
                {/* illustration fills remaining card space */}
                <div className="relative min-h-[18rem] w-full grow">
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_60%,rgba(250,204,72,0.12),transparent_80%)]"
                  />
                  <Image
                    src="/Assets/dashboard/dashboard.png"
                    alt="Performance marketing and analytics dashboard illustration"
                    fill
                    sizes="(max-width: 1024px) 80vw, 33vw"
                    className="object-contain p-6 sm:p-8 drop-shadow-md"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl shadow-sm ring-1 ring-black/5 max-lg:rounded-b-3xl lg:rounded-r-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Xencus vs others */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-white py-12 sm:py-16"
        aria-labelledby="solutions-comparison-title"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              Why Xencus
            </p>
            <h2
              id="solutions-comparison-title"
              className="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              {solutionsComparison.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paragraph-secondary">
              {solutionsComparison.subtitle}
            </p>
          </header>

          {/* Desktop: table (hidden on small screens; use cards below) */}
          <div className="mt-14 hidden overflow-hidden rounded-2xl border border-gray-200 shadow-lg lg:mt-18 lg:block">
            <table className="w-full border-collapse" role="table">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/80">
                  <th
                    scope="col"
                    className="px-5 py-4 text-left text-sm font-semibold text-heading sm:px-6"
                  >
                    Aspect
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 text-left text-sm font-semibold text-paragraph-secondary sm:px-6"
                  >
                    {solutionsComparison.themLabel}
                  </th>
                  <th
                    scope="col"
                    className="bg-brand/10 px-5 py-4 text-left text-sm font-semibold text-brand-secondary sm:px-6"
                  >
                    {solutionsComparison.usLabel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {solutionsComparison.rows.map((row, i) => (
                  <tr
                    key={row.aspect}
                    className={`border-b border-gray-100 ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <td className="px-5 py-4 text-sm font-medium text-heading sm:px-6">
                      {row.aspect}
                    </td>
                    <td className="px-5 py-4 text-sm text-paragraph-secondary sm:px-6">
                      <span className="flex items-start gap-2">
                        <X className="mt-0.5 size-4 shrink-0 text-red-500" aria-hidden />
                        {row.them}
                      </span>
                    </td>
                    <td className="bg-brand/5 px-5 py-4 text-sm font-medium text-heading sm:px-6">
                      <span className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-green-600"
                          aria-hidden
                        />
                        {row.us}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: stacked cards (same content, card per row) */}
          <div className="mt-14 space-y-4 lg:mt-0 lg:hidden">
            {solutionsComparison.rows.map((row) => (
              <div
                key={row.aspect}
                className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <p className="text-sm font-semibold text-heading">{row.aspect}</p>
                <div className="mt-3 space-y-2">
                  <div className="flex gap-2 text-sm text-paragraph-secondary">
                    <X className="mt-0.5 size-4 shrink-0 text-red-500" aria-hidden />
                    <span>
                      <span className="font-medium text-heading">
                        {solutionsComparison.themLabel}:
                      </span>{" "}
                      {row.them}
                    </span>
                  </div>
                  <div className="flex gap-2 text-sm font-medium text-heading">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green-600" aria-hidden />
                    <span>
                      <span className="text-brand-secondary">
                        {solutionsComparison.usLabel}:
                      </span>{" "}
                      {row.us}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-background py-12 sm:py-16"
        aria-labelledby="solutions-how-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-2xl text-center">
            <h2
              id="solutions-how-title"
              className="text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              {solutionsHowItWorks.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paragraph-secondary">
              {solutionsHowItWorks.subtitle}
            </p>
          </header>
          <ol className="mx-auto mt-14 grid gap-8 sm:grid-cols-3 lg:mt-18 lg:gap-10">
            {solutionsHowItWorks.steps.map((item) => (
              <li key={item.step} className="relative">
                <article className="relative flex flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
                  <span
                    className="inline-flex size-14 items-center justify-center rounded-2xl bg-brand text-xl font-bold text-brand-secondary"
                    aria-hidden
                  >
                    {item.step}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-heading">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paragraph-secondary">
                    {item.text}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What running operations with Xencus actually looks like */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-background py-12 sm:py-16"
        aria-labelledby="solutions-in-practice-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              In practice
            </p>
            <h2
              id="solutions-in-practice-title"
              className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              What it actually looks like to work with us
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paragraph-secondary">
              Most partnerships start small and grow. Here is the typical progression from first
              conversation to a full operating relationship.
            </p>
          </header>

          <div className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
            {[
              {
                phase: "Phase 01",
                title: "Scoped engagement to prove the model",
                body: "You start with one programme, one function, or one geography. We align on scope, go live within two to three weeks, and demonstrate that the operating model works before either side commits to a broader engagement. Most clients find the first programme takes significantly less time than expected to set up.",
              },
              {
                phase: "Phase 02",
                title: "Expanded delivery across programmes",
                body: "Once the model is proven, we expand to new cohorts, new domains, or new service areas. The operating model is already in place so expansion does not require re-procurement or lengthy onboarding. New programmes are added to the existing delivery infrastructure rather than requiring a fresh start.",
              },
              {
                phase: "Phase 03",
                title: "Long-term operating partnership",
                body: "In a steady-state engagement we function as an extension of your team. We manage delivery operations on a rolling basis, provide business services as needed, and contribute to planning for the next quarter and the one after that. The relationship becomes less transactional and more like an internal operating function.",
              },
            ].map((item) => (
              <article
                key={item.phase}
                className="relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8"
              >
                <span className="absolute top-0 left-0 h-1 w-full bg-brand" aria-hidden />
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-secondary">
                  {item.phase}
                </p>
                <h3 className="text-lg font-semibold text-heading">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paragraph-secondary sm:text-base">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What makes the model work */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-white py-12 sm:py-16"
        aria-labelledby="solutions-model-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            <div className="mb-10 lg:col-span-4 lg:mb-0">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
                The operating model
              </p>
              <h2
                id="solutions-model-title"
                className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
              >
                What makes this model hold up at scale
              </h2>
              <p className="mt-5 text-base leading-relaxed text-paragraph-secondary">
                Most outsourced services work well at the start and degrade over time. The
                structure below is designed to prevent that.
              </p>
            </div>

            <div className="lg:col-span-8">
              <ol className="space-y-10">
                {[
                  {
                    n: "01",
                    title: "Single point of accountability for all delivery",
                    body: "One operations owner coordinates trainers, sessions, reporting, and escalations across all programmes. There is no confusion about who to contact when something needs to change or when something goes wrong. This single-owner model is what allows us to promise predictable delivery rather than just aspire to it.",
                  },
                  {
                    n: "02",
                    title: "Redundancy built into the trainer and operations layer",
                    body: "Every trainer slot has a backup. Every reporting deliverable has a backup owner. This means cancellations and unexpected absences do not cascade into programme failures. Continuity is designed into the operating model rather than managed reactively after something breaks.",
                  },
                  {
                    n: "03",
                    title: "Reporting as a discipline, not an afterthought",
                    body: "Weekly updates, completion reports, and programme-level summaries are produced on schedule regardless of what else is happening. Stakeholders are never in a position of having to chase for numbers. Reporting quality is treated as a core output, not a secondary task.",
                  },
                  {
                    n: "04",
                    title: "Service areas designed to work together",
                    body: "When legal, HR, finance, and delivery are managed by separate vendors, coordination between them falls on your team. When they operate through a single partner with a shared operating model, coordination happens inside the partner organisation. The difference in management overhead is significant.",
                  },
                ].map((item) => (
                  <li key={item.n} className="flex gap-6">
                    <span
                      className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-brand-secondary"
                      aria-hidden
                    >
                      {item.n}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-heading sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-paragraph-secondary sm:text-base">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Questions people ask before starting */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-background py-12 sm:py-16"
        aria-labelledby="solutions-faq-title"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              Common questions
            </p>
            <h2
              id="solutions-faq-title"
              className="mt-3 text-2xl font-bold tracking-tight text-heading sm:text-3xl lg:text-4xl"
            >
              Questions we hear before people start
            </h2>
          </header>

          <dl className="mt-12 divide-y divide-gray-200">
            {[
              {
                q: "How quickly can we actually get started?",
                a: "For most delivery and business service engagements, the first programme or service area can go live within two to three weeks of the scoping conversation. The fastest starts happen when you already know the scope and we can align on deliverables and reporting without extensive discovery.",
              },
              {
                q: "Do you replace our internal team or work alongside them?",
                a: "We operate alongside your internal team. Your L&D head stays in charge of strategy. Your legal team retains control of complex transactions. Your finance leadership makes the decisions. We handle the operational execution and reporting layer so your team is not burdened by it.",
              },
              {
                q: "What happens when things go wrong during delivery?",
                a: "Escalation paths are defined before delivery begins. When a trainer cancels, a deadline slips, or a compliance question arises, we manage it through the established escalation structure and inform your stakeholder within the agreed window. Problems get handled without requiring you to become the problem-solver.",
              },
              {
                q: "How do you manage confidentiality and data security?",
                a: "We operate under your brand and within the confidentiality requirements appropriate to your business. Learner data, financial information, and legal documentation are handled according to the data practices we align on at the start of the engagement. We document these practices and follow them consistently.",
              },
              {
                q: "Can we start with one service and expand later?",
                a: "Yes. Most clients start with delivery operations or a single business service and expand as the relationship develops and trust is established. The operating model is designed to support expansion without requiring a full re-procurement each time.",
              },
            ].map((item) => (
              <div key={item.q} className="py-6">
                <dt className="text-base font-semibold text-heading sm:text-lg">{item.q}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-paragraph-secondary sm:text-base">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-brand-secondary py-12 sm:py-16"
        aria-labelledby="solutions-cta-title"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            id="solutions-cta-title"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {solutionsCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {solutionsCta.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={solutionsCta.buttonHref}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-brand-secondary shadow-lg transition-opacity hover:opacity-90"
            >
              {solutionsCta.buttonText}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
            >
              Learn about us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
