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
        className="scroll-mt-[var(--header-offset)] bg-white py-20 sm:py-28 lg:py-32"
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
        className="scroll-mt-[var(--header-offset)] bg-white py-20 sm:py-28 lg:py-32"
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
        className="scroll-mt-[var(--header-offset)] bg-background py-20 sm:py-28 lg:py-32"
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
            {/* Delivery operations (left, tall) */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-2xl bg-white lg:rounded-l-3xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl lg:rounded-l-3xl">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-1 text-lg font-semibold tracking-tight text-heading max-lg:text-center">
                    Delivery operations
                  </p>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-paragraph-secondary max-lg:text-center">
                    Live classes, trainers, LMS operations, projects, assessments, and certifications
                    delivered under your brand—with a single team accountable for outcomes.
                  </p>
                </div>
                <div className="relative min-h-[18rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-8 top-8 bottom-6 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(250,204,72,0.16),_transparent_60%)]" />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl shadow-sm ring-1 ring-black/5 lg:rounded-l-3xl" />
            </div>

            {/* Legal & HR (top middle) */}
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-2xl bg-white max-lg:rounded-t-3xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl max-lg:rounded-t-3xl">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-1 text-lg font-semibold tracking-tight text-heading max-lg:text-center">
                    Legal and HR for EdTech
                  </p>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-paragraph-secondary max-lg:text-center">
                    EdTech-specific contracts, policies, compliance, and people operations that keep
                    your programs and teams running safely.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 pb-8 pt-4 sm:px-10 lg:pb-4">
                  <ul className="space-y-2 text-sm text-paragraph-secondary">
                    <li>• Trainer and vendor agreements aligned to your model</li>
                    <li>• HR processes for both full-time and contract roles</li>
                    <li>• Compliance support for learners, partners, and data</li>
                  </ul>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl shadow-sm ring-1 ring-black/5 max-lg:rounded-t-3xl" />
            </div>

            {/* Finance (bottom middle) */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-2xl bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-1 text-lg font-semibold tracking-tight text-heading max-lg:text-center">
                    Finance and reporting
                  </p>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-paragraph-secondary max-lg:text-center">
                    Finance operations and reporting that match how education revenue works—cohorts,
                    subscriptions, and instalments.
                  </p>
                </div>
                <div className="flex flex-1 flex-wrap items-center justify-center gap-3 px-6 pb-6 pt-4 lg:pb-4">
                  <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-center">
                    <p className="text-sm font-semibold text-heading">Clean books</p>
                    <p className="mt-1 text-xs text-paragraph-secondary">Reconciled to your tools</p>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-center">
                    <p className="text-sm font-semibold text-heading">Compliance</p>
                    <p className="mt-1 text-xs text-paragraph-secondary">Filings and documentation</p>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-center">
                    <p className="text-sm font-semibold text-heading">Reporting</p>
                    <p className="mt-1 text-xs text-paragraph-secondary">Views leaders can use</p>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl shadow-sm ring-1 ring-black/5" />
            </div>

            {/* Technical services (right, tall) */}
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
                <div className="relative min-h-[18rem] w-full grow">
                  <div className="absolute top-8 right-6 bottom-6 left-8 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200">
                    <div className="flex h-full items-center justify-center px-6 py-4">
                      <p className="text-sm font-medium leading-relaxed text-paragraph-secondary text-center">
                        Campaigns, creatives, and products run by a team that understands how education
                        businesses grow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl shadow-sm ring-1 ring-black/5 max-lg:rounded-b-3xl lg:rounded-r-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Xencus vs others */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-white py-20 sm:py-28 lg:py-32"
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
        className="scroll-mt-[var(--header-offset)] bg-background py-20 sm:py-28 lg:py-32"
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

      {/* CTA */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-white py-20 sm:py-28 lg:py-32"
        aria-labelledby="solutions-cta-title"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            id="solutions-cta-title"
            className="text-3xl font-bold tracking-tight text-heading sm:text-4xl"
          >
            {solutionsCta.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-paragraph-secondary">
            {solutionsCta.description}
          </p>
          <Link
            href={solutionsCta.buttonHref}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-secondary shadow-lg shadow-brand/25 transition-all hover:opacity-90 hover:shadow-xl hover:shadow-brand/30"
          >
            {solutionsCta.buttonText}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </main>
  );
}
