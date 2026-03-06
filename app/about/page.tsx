import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import {
  aboutHero,
  aboutMission,
  aboutValues,
  aboutStats,
  aboutCta,
} from "@/content/about";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us",
  description:
    "Xencus is the operations backbone for scalable EdTech. We run delivery, legal, HR, and tech so EdTech companies can focus on product and growth.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section
        className="relative flex min-h-[calc(100vh-var(--header-offset))] w-full items-center justify-center overflow-hidden pb-24 pt-20 sm:pb-32 sm:pt-28 lg:pt-32"
        aria-labelledby="about-hero-title"
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
            {aboutHero.label}
          </p>
          <h1
            id="about-hero-title"
            className="mt-2 text-4xl font-extrabold tracking-tight text-heading sm:text-5xl lg:text-6xl"
          >
            {aboutHero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-paragraph-secondary sm:text-xl">
            {aboutHero.subtitle}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-white py-20 sm:py-28 lg:py-32"
        aria-labelledby="about-mission-title"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="about-mission-title"
            className="text-center text-2xl font-bold tracking-tight text-heading sm:text-3xl lg:text-4xl"
          >
            {aboutMission.title}
          </h2>
          <p className="mt-8 text-center text-base leading-relaxed text-paragraph-secondary sm:text-lg">
            {aboutMission.description}
          </p>
        </div>
      </section>

      {/* Values */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-background py-20 sm:py-28 lg:py-32"
        aria-labelledby="about-values-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="about-values-title"
            className="text-center text-2xl font-bold tracking-tight text-heading sm:text-3xl"
          >
            What we believe
          </h2>
          <ul className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:mt-18 lg:grid-cols-4 lg:gap-8">
            {aboutValues.map((value) => (
              <li key={value.id}>
                <article className="flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm">
                  <span className="mb-4 block h-1 w-12 rounded-full bg-brand" aria-hidden />
                  <h3 className="text-lg font-semibold text-heading">{value.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-paragraph-secondary">
                    {value.description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-white py-20 sm:py-28 lg:py-32"
        aria-label="Key outcomes"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-brand-secondary sm:text-3xl">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-paragraph-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-background py-20 sm:py-28 lg:py-32"
        aria-labelledby="about-cta-title"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            id="about-cta-title"
            className="text-3xl font-bold tracking-tight text-heading sm:text-4xl"
          >
            {aboutCta.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-paragraph-secondary">
            {aboutCta.description}
          </p>
          <Link
            href={aboutCta.buttonHref}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-secondary shadow-lg shadow-brand/25 transition-all hover:opacity-90 hover:shadow-xl hover:shadow-brand/30"
          >
            {aboutCta.buttonText}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </main>
  );
}
