import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, X, Sparkles } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import {
  solutionsHero,
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
        className="relative flex min-h-[calc(100vh-var(--header-offset))] w-full items-center justify-center overflow-hidden pb-24 pt-20 sm:pb-32 sm:pt-28 lg:pt-32"
        aria-labelledby="solutions-hero-title"
      >
        <div className="absolute inset-0">
          <Image
            src="/Assets/edutech/edutech-hero.avif"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjMiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjMiIGZpbGw9IiNmNWYwZTgiLz48L3N2Zz4="
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.88) 50%, rgba(255,255,255,0.95) 100%)",
            }}
            aria-hidden
          />
        </div>
        <div className="relative mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-secondary/20 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-secondary shadow-sm">
            <Sparkles className="size-3.5" aria-hidden />
            {solutionsHero.label}
          </span>
          <h1
            id="solutions-hero-title"
            className="mt-6 text-4xl font-extrabold tracking-tight text-heading sm:text-5xl lg:text-6xl"
          >
            {solutionsHero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-paragraph-secondary sm:text-xl">
            {solutionsHero.subtitle}
          </p>
          <Link
            href={solutionsHero.ctaHref}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-secondary shadow-lg shadow-brand/25 transition-all hover:opacity-90 hover:shadow-xl hover:shadow-brand/30"
          >
            {solutionsHero.ctaText}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
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
              One partner for the full stack—so you don&apos;t juggle vendors or build everything
              in-house.
            </p>
          </header>
          <ul className="mx-auto mt-14 grid gap-4 sm:grid-cols-2 lg:mt-18 lg:grid-cols-3 lg:gap-6">
            {solutionsCapabilities.map((cap) => (
              <li key={cap.id}>
                <Link
                  href={cap.href}
                  className="group flex h-full gap-4 rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all hover:border-brand/30 hover:shadow-md"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/15">
                    <CheckCircle2 className="size-5 text-brand-secondary" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-heading">{cap.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-paragraph-secondary">
                      {cap.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-secondary">
                      {cap.linkLabel}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
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
