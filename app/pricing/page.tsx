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
        className="relative flex min-h-[calc(100vh-var(--header-offset))] w-full items-center justify-center overflow-hidden pb-24 pt-20 sm:pb-32 sm:pt-28 lg:pt-32"
        aria-labelledby="pricing-hero-title"
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
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
            {pricingHero.label}
          </p>
          <h1
            id="pricing-hero-title"
            className="mt-2 text-4xl font-extrabold tracking-tight text-heading sm:text-5xl lg:text-6xl"
          >
            {pricingHero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-paragraph-secondary sm:text-xl">
            {pricingHero.subtitle}
          </p>
          <Link
            href={pricingHero.ctaHref}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-secondary shadow-lg shadow-brand/25 transition-all hover:opacity-90 hover:shadow-xl hover:shadow-brand/30"
          >
            {pricingHero.ctaText}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
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
