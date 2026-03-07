import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import {
  pricingHero,
  pricingTiers,
  pricingFaq,
  pricingCta,
} from "@/content/pricing";

export const metadata: Metadata = buildPageMetadata({
  title: "Pricing",
  description:
    "Xencus pricing scales with your business—from startup to enterprise. Custom engagement by company size, scope, and goals. Get a quote.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
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

      {/* Company size tiers */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-white py-20 sm:py-28 lg:py-32"
        aria-labelledby="pricing-tiers-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              By company size
            </p>
            <h2
              id="pricing-tiers-title"
              className="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              From startup to large EdTech
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paragraph-secondary">
              We tailor engagement and pricing to where you are today—and where you want to be.
            </p>
          </header>
          <ul className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:mt-18 lg:grid-cols-4 lg:gap-8">
            {pricingTiers.map((tier) => (
              <li key={tier.id}>
                <article className="flex h-full flex-col rounded-2xl border border-gray-200/80 bg-background p-6 shadow-sm transition-all hover:border-brand/30 hover:shadow-md sm:p-8">
                  <span className="mb-4 block h-1 w-12 rounded-full bg-brand" aria-hidden />
                  <h3 className="text-xl font-semibold text-heading">{tier.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-paragraph-secondary">
                    {tier.description}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-paragraph-secondary">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green-600" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={pricingHero.ctaHref}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-secondary bg-transparent px-4 py-2.5 text-sm font-semibold text-brand-secondary transition-colors hover:bg-brand-secondary hover:text-brand"
                  >
                    {tier.ctaLabel}
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Trust strip */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-background py-16 sm:py-20"
        aria-label="Pricing trust points"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:grid-cols-3 sm:gap-6 sm:p-8">
            {[
              {
                title: "Transparent scope",
                text: "You get a clear proposal with deliverables, timelines, and responsibilities before we start.",
              },
              {
                title: "Scales with volume",
                text: "Pricing aligns to cohorts/programs and services—so costs track usage, not fixed headcount.",
              },
              {
                title: "Enterprise-ready",
                text: "For larger partners we can add SLAs, reporting rhythms, and escalation paths.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <span className="mt-0.5 inline-flex size-9 items-center justify-center rounded-xl bg-brand/15">
                  <CheckCircle2 className="size-5 text-brand-secondary" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-heading">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-paragraph-secondary">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-background py-20 sm:py-28 lg:py-32"
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

      {/* CTA */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-white py-20 sm:py-28 lg:py-32"
        aria-labelledby="pricing-cta-title"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            id="pricing-cta-title"
            className="text-3xl font-bold tracking-tight text-heading sm:text-4xl"
          >
            {pricingCta.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-paragraph-secondary">
            {pricingCta.description}
          </p>
          <Link
            href={pricingCta.buttonHref}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-secondary shadow-lg shadow-brand/25 transition-all hover:opacity-90 hover:shadow-xl hover:shadow-brand/30"
          >
            {pricingCta.buttonText}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </main>
  );
}
