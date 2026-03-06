import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { ServicePageContent } from "@/content/services-pages";

type Props = {
  content: ServicePageContent;
};

export function ServiceLandingPage({ content }: Props) {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section
        className="relative flex min-h-[calc(100vh-var(--header-offset))] w-full items-center justify-center overflow-hidden pb-24 pt-20 sm:pb-32 sm:pt-28 lg:pt-32"
        aria-labelledby="service-hero-title"
      >
        <div className="absolute inset-0">
          <Image
            src={content.heroImage.src}
            alt={content.heroImage.alt}
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

        <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-brand-secondary/15 bg-white/90 px-4 py-1.5 shadow-sm">
              <Image
                src={content.icon.src}
                alt={content.icon.alt}
                width={18}
                height={18}
                className="h-[18px] w-[18px] object-contain"
              />
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-secondary">
                {content.label}
              </p>
            </div>
            <h1
              id="service-hero-title"
              className="mt-6 text-4xl font-extrabold tracking-tight text-heading sm:text-5xl lg:text-6xl"
            >
              {content.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-paragraph-secondary sm:text-xl">
              {content.subtitle}
            </p>
            <Link
              href={content.cta.buttonHref}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-secondary shadow-lg shadow-brand/25 transition-all hover:opacity-90 hover:shadow-xl hover:shadow-brand/30"
            >
              {content.cta.buttonText}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-white py-20 sm:py-28 lg:py-32"
        aria-labelledby="service-outcomes-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              Outcomes
            </p>
            <h2
              id="service-outcomes-title"
              className="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              What you get
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paragraph-secondary">
              A clean operating model that makes the work repeatable and scalable.
            </p>
          </header>

          <ul className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:mt-18 lg:grid-cols-3 lg:gap-8">
            {content.outcomes.map((o) => (
              <li key={o.title}>
                <article className="flex h-full flex-col rounded-2xl border border-gray-200/80 bg-background p-6 shadow-sm sm:p-8">
                  <span className="mb-4 block h-1 w-12 rounded-full bg-brand" aria-hidden />
                  <h3 className="text-lg font-semibold text-heading">{o.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-paragraph-secondary">
                    {o.description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-background py-20 sm:py-28 lg:py-32"
        aria-labelledby="service-how-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              How it works
            </p>
            <h2
              id="service-how-title"
              className="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              From alignment to execution
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paragraph-secondary">
              A simple flow that gets you moving quickly—without long procurement cycles.
            </p>
          </header>

          <ol className="mx-auto mt-14 grid gap-8 sm:grid-cols-3 lg:mt-18 lg:gap-10">
            {content.howItWorks.map((item) => (
              <li key={item.step} className="relative">
                <article className="relative flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
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

      {/* FAQ */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-white py-20 sm:py-28 lg:py-32"
        aria-labelledby="service-faq-title"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            id="service-faq-title"
            className="text-center text-2xl font-bold tracking-tight text-heading sm:text-3xl"
          >
            {content.faq.title}
          </h2>
          <dl className="mt-12 space-y-8">
            {content.faq.items.map((item) => (
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
        className="scroll-mt-[var(--header-offset)] bg-background py-20 sm:py-28 lg:py-32"
        aria-labelledby="service-cta-title"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2
            id="service-cta-title"
            className="text-3xl font-bold tracking-tight text-heading sm:text-4xl"
          >
            {content.cta.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-paragraph-secondary">
            {content.cta.description}
          </p>
          <Link
            href={content.cta.buttonHref}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-secondary shadow-lg shadow-brand/25 transition-all hover:opacity-90 hover:shadow-xl hover:shadow-brand/30"
          >
            {content.cta.buttonText}
            <ArrowRight className="size-4" aria-hidden />
          </Link>

          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex size-9 items-center justify-center rounded-xl bg-brand/15">
                <CheckCircle2 className="size-5 text-brand-secondary" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-semibold text-heading">Fast start</p>
                <p className="text-sm leading-relaxed text-paragraph-secondary">
                  Most partners can go live in weeks once scope is aligned.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-brand-secondary px-4 py-2 text-sm font-semibold text-brand-secondary transition-colors hover:bg-brand-secondary hover:text-brand"
            >
              Book a call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

