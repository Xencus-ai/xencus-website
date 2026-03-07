import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import {
  aboutHero,
  aboutMission,
  aboutWhatWeDo,
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
        className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-24 sm:py-32 lg:px-8 lg:py-40 -mt-[var(--header-offset)]"
        aria-labelledby="about-hero-title"
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
              {aboutHero.label}
            </p>
            <h1
              id="about-hero-title"
              className="mt-4 text-5xl font-extrabold tracking-tight text-balance text-heading sm:text-6xl lg:text-7xl"
            >
              {aboutHero.title}
            </h1>
            <p className="mt-6 text-lg font-medium text-pretty text-paragraph-secondary sm:text-xl">
              {aboutHero.subtitle}
            </p>
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

      {/* What we do */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-background py-20 sm:py-28 lg:py-32"
        aria-labelledby="about-what-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              Clarity
            </p>
            <h2
              id="about-what-title"
              className="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              {aboutWhatWeDo.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paragraph-secondary">
              {aboutWhatWeDo.subtitle}
            </p>
          </header>

          <ul className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:mt-18 lg:grid-cols-3 lg:gap-8">
            {aboutWhatWeDo.items.map((item) => (
              <li key={item.title}>
                <article className="h-full rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
                  <span className="mb-4 block h-1 w-12 rounded-full bg-brand" aria-hidden />
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
