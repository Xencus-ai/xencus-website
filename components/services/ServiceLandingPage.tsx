import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";
import type { ServicePageContent } from "@/content/services-pages";

type Props = {
  content: ServicePageContent;
};

export function ServiceLandingPage({ content }: Props) {
  return (
    <main className="bg-background">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative flex min-h-[calc(100vh-var(--header-offset))] w-full items-center justify-center overflow-hidden px-4 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8 lg:pb-32 lg:pt-32 -mt-[var(--header-offset)]"
        aria-labelledby="service-hero-title"
      >
        <div className="absolute inset-0 bg-white" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,72,0.18),transparent_52%)]"
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="grid min-h-0 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left: text */}
            <div className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:max-w-xl lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/15 bg-white px-4 py-1.5 shadow-sm">
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
              </div>
              <h1
                id="service-hero-title"
                className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-heading sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                {content.title}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-paragraph-secondary sm:text-lg lg:text-xl">
                {content.subtitle}
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href={content.cta.buttonHref}
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-secondary shadow-lg transition-opacity hover:opacity-90 sm:px-7 sm:py-3.5"
                >
                  {content.cta.buttonText}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border-2 border-brand-secondary px-5 py-2.5 text-sm font-semibold text-brand-secondary transition-colors hover:bg-brand-secondary hover:text-brand sm:px-6 sm:py-3"
                >
                  Request a proposal
                </Link>
              </div>
              {/* Metric pills */}
              <dl className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                {[
                  { dt: "Go-live", dd: "2–3 weeks" },
                  { dt: "Model", dd: "SLA-ready" },
                  { dt: "Reporting", dd: "Weekly" },
                ].map((m) => (
                  <div
                    key={m.dt}
                    className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm sm:p-4"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wider text-paragraph-secondary">
                      {m.dt}
                    </dt>
                    <dd className="mt-1 text-base font-bold text-brand-secondary">{m.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Right: illustration */}
            <div className="flex min-h-[280px] w-full items-center justify-center sm:min-h-[320px] lg:min-h-[380px] hero-illustration-float">
              <div className="relative h-full w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
                <div className="relative aspect-[4/3] w-full sm:aspect-[16/11]">
                  <Image
                    src={content.heroImage.src}
                    alt={content.heroImage.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 45vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-40"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.88) 50%, #ffffff 100%)",
          }}
        />
      </section>

      {/* ── Tagline / position statement ─────────────────────────────────── */}
      <section className="bg-zinc-900 px-4 py-14 sm:px-6 sm:py-20 lg:px-8" aria-hidden="false">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand">
            {content.label}
          </p>
          <blockquote className="text-xl font-semibold italic leading-relaxed text-white sm:text-2xl lg:text-3xl">
            &ldquo;{content.tagline}&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── Key metrics strip ─────────────────────────────────────────────── */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
        aria-label="Key metrics"
      >
        <div className="mx-auto max-w-6xl">
          <dl className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4 lg:gap-12">
            {content.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <dt className="text-2xl font-extrabold text-brand-secondary sm:text-3xl lg:text-4xl">
                  {metric.value}
                </dt>
                <dd className="mt-2 text-sm font-medium leading-snug text-paragraph-secondary">
                  {metric.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Outcomes ─────────────────────────────────────────────────────── */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
        aria-labelledby="service-outcomes-title"
      >
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Sticky label column */}
            <div className="mb-12 lg:col-span-4 lg:mb-0">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
                Outcomes
              </p>
              <h2
                id="service-outcomes-title"
                className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
              >
                What you get when you work with us
              </h2>
              <p className="mt-5 text-base leading-relaxed text-paragraph-secondary">
                A clean operating model built around your goals, your tools, and the outcomes that
                matter to your business and your stakeholders.
              </p>
            </div>

            {/* Feature list */}
            <div className="lg:col-span-8">
              <ol className="space-y-10">
                {content.outcomes.map((outcome, i) => (
                  <li key={outcome.title} className="flex gap-6">
                    <span
                      className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-brand-secondary"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-heading sm:text-xl">
                        {outcome.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-paragraph-secondary">
                        {outcome.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── In practice: sticky split ─────────────────────────────────────── */}
      <section
        className="scroll-mt-[var(--header-offset)] relative isolate overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-28 lg:overflow-visible lg:px-0 lg:py-32"
        aria-label="How this service fits in practice"
      >
        {/* Subtle grid background */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          {/* Text: top */}
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
                  In practice
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
                  From scope to steady-state delivery
                </h2>
                <p className="mt-6 text-base leading-relaxed text-paragraph-secondary">
                  We align on where this service fits in your organisation today, the risks you want
                  to remove, and the outcomes you need over the next six to twelve months. Then we
                  take ownership of the day-to-day work while your team keeps control of strategy
                  and stakeholder relationships.
                </p>
              </div>
            </div>
          </div>

          {/* Sticky image */}
          <div className="-mt-8 -ml-4 lg:sticky lg:top-6 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:p-6">
            <div className="relative mx-auto flex w-full max-w-md items-center justify-center sm:max-w-lg hero-illustration-float">
              <div className="relative aspect-[16/11] w-full">
                <Image
                  src={content.heroImage.src}
                  alt={content.heroImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Text: bottom */}
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-relaxed text-paragraph-secondary lg:max-w-lg">
                <p>
                  In practice this means we own the recurring operational work while you stay in
                  charge of the goals and direction. The exact activities depend on the specific
                  service but broadly fall into three recurring themes.
                </p>
                {content.subServices && content.subServices.length >= 3 && (
                  <ul role="list" className="mt-8 space-y-5">
                    {content.subServices.slice(0, 3).map((group) => (
                      <li key={group.title} className="flex gap-4">
                        <CheckCircle2
                          aria-hidden
                          className="mt-0.5 size-5 shrink-0 text-brand-secondary"
                        />
                        <span>
                          <strong className="font-semibold text-heading">{group.title}. </strong>
                          {group.points[0]}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                <p className="mt-6">
                  As we work together we adjust the mix of activities and reporting cadence based
                  on what your teams and stakeholders find most valuable, without changing the
                  underlying operating model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What is included ──────────────────────────────────────────────── */}
      {content.subServices && content.subServices.length > 0 && (
        <section
          className="scroll-mt-[var(--header-offset)] bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
          aria-labelledby="service-included-title"
        >
          <div className="mx-auto max-w-7xl">
            <header className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
                Scope of work
              </p>
              <h2
                id="service-included-title"
                className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
              >
                What is included in this service
              </h2>
              <p className="mt-4 text-base leading-relaxed text-paragraph-secondary">
                The building blocks of how we deliver this service. Each area contributes to a
                consistent, predictable operating model you can rely on.
              </p>
            </header>

            <div className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
              {content.subServices.map((group, idx) => (
                <article
                  key={group.title}
                  className="relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8"
                >
                  {/* Accent stripe */}
                  <span
                    className="absolute top-0 left-0 h-1 w-full bg-brand"
                    aria-hidden
                  />
                  <span className="mb-4 inline-block text-4xl font-black text-brand/20">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold text-heading">{group.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {group.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-paragraph-secondary">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-secondary" aria-hidden />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Process timeline ──────────────────────────────────────────────── */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
        aria-labelledby="service-process-title"
      >
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              The process
            </p>
            <h2
              id="service-process-title"
              className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              How we get you from alignment to execution
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paragraph-secondary">
              A clear, predictable path that gets you moving quickly without long procurement
              cycles, multiple stakeholder presentations, or extended onboarding periods.
            </p>
          </header>

          {/* Timeline */}
          <div className="mx-auto mt-16 max-w-5xl">
            <ol className="relative">
              {/* Vertical connector line */}
              <div
                className="absolute top-5 bottom-5 left-5 w-0.5 bg-gray-200 sm:left-8 lg:left-1/2 lg:-translate-x-px"
                aria-hidden
              />

              {content.howItWorks.map((item, idx) => (
                <li
                  key={item.step}
                  className={`relative mb-12 last:mb-0 pl-14 sm:pl-20 lg:mb-16 lg:pl-0 ${
                    idx % 2 === 0 ? "lg:pr-1/2 lg:text-right" : "lg:ml-1/2 lg:pl-12 lg:text-left"
                  }`}
                >
                  {/* Circle */}
                  <span
                    className={`absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-brand-secondary ring-4 ring-white sm:h-16 sm:w-16 sm:text-lg lg:left-auto ${
                      idx % 2 === 0
                        ? "lg:right-[calc(50%-2rem)]"
                        : "lg:left-[calc(50%-2rem)]"
                    }`}
                    aria-hidden
                  >
                    {item.step}
                  </span>

                  <article
                    className={`lg:max-w-xs ${idx % 2 === 0 ? "lg:mr-16" : "lg:ml-16"}`}
                  >
                    <h3 className="text-lg font-semibold text-heading sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-paragraph-secondary">
                      {item.text}
                    </p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Target audience ───────────────────────────────────────────────── */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
        aria-labelledby="service-audience-title"
      >
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              Who this is built for
            </p>
            <h2
              id="service-audience-title"
              className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              The roles and teams we work with most
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paragraph-secondary">
              While we adapt to different organisations and structures, the people who get the most
              value from this service tend to share a common set of challenges and priorities.
            </p>
          </header>

          <div className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
            {content.targetAudience.map((audience) => (
              <article
                key={audience.title}
                className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200/80 sm:p-8"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/15">
                    <Users className="size-5 text-brand-secondary" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold leading-snug text-heading">
                    {audience.title}
                  </h3>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-paragraph-secondary">
                  {audience.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Is this the right fit ─────────────────────────────────────────── */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
        aria-labelledby="service-fit-title"
      >
        <div className="mx-auto max-w-6xl">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              Honest assessment
            </p>
            <h2
              id="service-fit-title"
              className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              When this engagement works best
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paragraph-secondary">
              We believe in being direct about fit from the start rather than discovering a mismatch
              three months in. Here is an honest picture of when this service creates the most value.
            </p>
          </header>

          <div className="mx-auto mt-12 grid gap-6 md:grid-cols-2 lg:mt-14 lg:gap-8">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 sm:p-8">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                <CheckCircle2 className="size-3.5" aria-hidden />
                A strong fit
              </p>
              <ul className="space-y-4 text-sm leading-relaxed text-gray-700">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden />
                  <span>
                    You have clear goals but limited internal capacity to execute on the day-to-day
                    delivery work consistently.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden />
                  <span>
                    You want a partner who can own operations, not just advise on what to do and
                    leave execution to your team.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden />
                  <span>
                    You value predictable weekly reporting and a single point of contact who is
                    accountable for outcomes.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden />
                  <span>
                    You are comfortable with an iterative operating model where we improve together
                    based on what the data and feedback tell us.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-6 sm:p-8">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
                Worth knowing
              </p>
              <ul className="space-y-4 text-sm leading-relaxed text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" aria-hidden />
                  <span>
                    If you are looking for one-off freelancers for narrow, isolated tasks only, a
                    managed engagement model may not be the right structure.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" aria-hidden />
                  <span>
                    If there is no clear internal owner for outcomes and decisions, delivery quality
                    tends to suffer regardless of who is executing the work.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" aria-hidden />
                  <span>
                    If your goal is to build a large internal team in the near term, the right
                    approach may be a hybrid model where we support the transition.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" aria-hidden />
                  <span>
                    If timelines and scope are entirely undefined, we find it useful to have at least
                    one scoping conversation before proposing an engagement.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
        aria-labelledby="service-faq-title"
      >
        <div className="mx-auto max-w-4xl">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              Common questions
            </p>
            <h2
              id="service-faq-title"
              className="mt-3 text-2xl font-bold tracking-tight text-heading sm:text-3xl lg:text-4xl"
            >
              {content.faq.title}
            </h2>
          </header>

          <dl className="mt-12 divide-y divide-gray-200">
            {content.faq.items.map((item) => (
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

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-brand-secondary px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
        aria-labelledby="service-cta-title"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="service-cta-title"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {content.cta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {content.cta.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={content.cta.buttonHref}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-brand-secondary shadow-lg shadow-brand/30 transition-opacity hover:opacity-90"
            >
              {content.cta.buttonText}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
            >
              Request a proposal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
