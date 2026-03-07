import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { ServicePageContent } from "@/content/services-pages";

const TRUST_ITEMS = [
  {
    title: "Single point of contact",
    description:
      "One owner who coordinates trainers, schedules, deliverables, and updates—so nothing slips.",
  },
  {
    title: "SLA-ready execution",
    description:
      "Clear timelines, escalation paths, and predictable delivery rhythms suited for business stakeholders.",
  },
  {
    title: "Backup and continuity",
    description:
      "Redundancy in trainers and operations so classes and deliverables don't stop when plans change.",
  },
  {
    title: "Audit-friendly reporting",
    description:
      "Weekly progress updates, completion tracking, and documentation that supports internal reviews.",
  },
] as const;

type Props = {
  content: ServicePageContent;
};

export function ServiceLandingPage({ content }: Props) {
  return (
    <main className="bg-background">
      {/* Hero */}
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
                className="mt-6 text-4xl font-extrabold tracking-tight text-balance text-heading sm:text-5xl lg:text-6xl xl:text-7xl"
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
              <dl className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm sm:p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-paragraph-secondary">
                    Typical go-live
                  </dt>
                  <dd className="mt-1 text-base font-bold text-brand-secondary">2–3 weeks</dd>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm sm:p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-paragraph-secondary">
                    Operating model
                  </dt>
                  <dd className="mt-1 text-base font-bold text-brand-secondary">SLA-ready</dd>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm sm:p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-paragraph-secondary">
                    Reporting
                  </dt>
                  <dd className="mt-1 text-base font-bold text-brand-secondary">Weekly</dd>
                </div>
              </dl>
            </div>

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

      {/* How this service works in practice */}
      <section
        className="scroll-mt-[var(--header-offset)] relative isolate overflow-hidden bg-white px-6 py-20 sm:py-28 lg:overflow-visible lg:px-0"
        aria-label="How this service works"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute top-0 left-[max(50%,18rem)] h-64 w-[32rem] -translate-x-1/2 mask-[radial-gradient(18rem_18rem_at_top,white,transparent)] stroke-gray-200"
          >
            <defs>
              <pattern
                id="service-grid-pattern"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#service-grid-pattern)" width="100%" height="100%" strokeWidth={0} />
          </svg>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-sm font-semibold leading-7 text-brand-secondary">
                  How this service fits into your business
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
                  From scope to steady-state delivery
                </h2>
                <p className="mt-6 text-base leading-7 text-paragraph-secondary">
                  We align on where this service sits in your organisation today, the risks you want to
                  remove, and the outcomes you need in the next 6–12 months. Then we take ownership of
                  the day-to-day work while your team keeps control of strategy and stakeholder
                  relationships.
                </p>
              </div>
            </div>
          </div>

          <div className="-mt-12 -ml-6 p-6 lg:sticky lg:top-6 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <div className="relative mx-auto flex w-full max-w-md items-center justify-center sm:max-w-lg hero-illustration-float">
              <div className="relative aspect-[16/11] w-full max-w-md">
                <Image
                  src={content.heroImage.src}
                  alt={content.heroImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-sm leading-7 text-paragraph-secondary lg:max-w-lg">
                <p>
                  In practice, this means we own the recurring operational work, while you stay in
                  charge of the goals and direction. The exact activities depend on the service, but
                  broadly fall into three themes:
                </p>
                <ul role="list" className="mt-6 space-y-4">
                  {(content.subServices ?? []).slice(0, 3).map((group) => (
                    <li key={group.title} className="flex gap-x-3">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-1 size-4 shrink-0 text-brand-secondary"
                      />
                      <span>
                        <strong className="font-semibold text-heading">{group.title}.</strong>{" "}
                        {group.points[0]}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6">
                  As we work together, we adjust the mix of activities and reporting based on what your
                  teams and stakeholders find most valuable, without changing the underlying operating
                  model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services / what's included */}
      {content.subServices && content.subServices.length > 0 && (
        <section
          className="scroll-mt-[var(--header-offset)] bg-background py-20 sm:py-28 lg:py-32"
          aria-labelledby="service-subservices-title"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <header className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
                What&apos;s included
              </p>
              <h2
                id="service-subservices-title"
                className="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
              >
                The building blocks of the service
              </h2>
            </header>

            <div className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:mt-18 lg:grid-cols-3 lg:gap-8">
              {content.subServices.map((group) => (
                <article
                  key={group.title}
                  className="flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8"
                >
                  <h3 className="text-base font-semibold text-heading sm:text-lg">
                    {group.title}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-paragraph-secondary">
                    {group.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
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

      {/* Trust & governance */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-background py-20 sm:py-28 lg:py-32"
        aria-labelledby="service-trust-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              Trust built in
            </p>
            <h2
              id="service-trust-title"
              className="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              A corporate-grade operating model
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paragraph-secondary">
              Clear scope, strong execution, and predictable reporting—so you can rely on delivery
              like an internal team.
            </p>
          </header>

          <ul className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:mt-18 lg:grid-cols-4 lg:gap-8">
            {TRUST_ITEMS.map((item) => (
              <li key={item.title}>
                <article className="h-full rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
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

      {/* Example engagements */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-white py-20 sm:py-28 lg:py-32"
        aria-labelledby="service-examples-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              Example engagements
            </p>
            <h2
              id="service-examples-title"
              className="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              Ways teams typically work with us
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paragraph-secondary">
              We adapt scope and rhythms to how your organisation actually runs, while keeping the same
              underlying operating model.
            </p>
          </header>

          <div className="mx-auto mt-14 grid gap-6 sm:grid-cols-3 lg:mt-18 lg:gap-8">
            <article className="flex h-full flex-col rounded-2xl border border-gray-200/80 bg-background p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-semibold text-heading">Pilot for a single function</h3>
              <p className="mt-3 text-sm leading-relaxed text-paragraph-secondary">
                Start with one geography, function, or program to prove value quickly before expanding.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-paragraph-secondary">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-secondary" aria-hidden />
                  <span>Clear scope, weekly reporting, and a defined success metric.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-secondary" aria-hidden />
                  <span>Good for testing fit with internal teams and tools.</span>
                </li>
              </ul>
            </article>

            <article className="flex h-full flex-col rounded-2xl border border-gray-200/80 bg-background p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-semibold text-heading">Multi-program steady state</h3>
              <p className="mt-3 text-sm leading-relaxed text-paragraph-secondary">
                A recurring engagement across multiple teams, regions, or business lines.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-paragraph-secondary">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-secondary" aria-hidden />
                  <span>Rolling calendar, capacity planning, and shared delivery dashboards.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-secondary" aria-hidden />
                  <span>Designed to feel like an extension of your internal team.</span>
                </li>
              </ul>
            </article>

            <article className="flex h-full flex-col rounded-2xl border border-gray-200/80 bg-background p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-semibold text-heading">Program or initiative launch</h3>
              <p className="mt-3 text-sm leading-relaxed text-paragraph-secondary">
                Support for launching a new initiative, product, or program where timelines are tight.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-paragraph-secondary">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-secondary" aria-hidden />
                  <span>Intensive setup, then a smooth handover into ongoing delivery.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-secondary" aria-hidden />
                  <span>Works well when leadership wants confidence in the first wave of delivery.</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Tools & integrations */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-background py-20 sm:py-28 lg:py-32"
        aria-labelledby="service-tools-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              Tools & integrations
            </p>
            <h2
              id="service-tools-title"
              className="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              We plug into your existing stack
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paragraph-secondary">
              We work with the tools you already use for communication, HR, finance, learning, and
              reporting—so you do not have to rebuild processes.
            </p>
          </header>

          <div className="mx-auto mt-14 grid gap-6 md:grid-cols-3 lg:mt-18 lg:gap-8">
            <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-base font-semibold text-heading sm:text-lg">Collaboration & comms</h3>
              <p className="mt-3 text-sm leading-relaxed text-paragraph-secondary">
                We align with your channels, groups, and cadences so stakeholders and learners are kept
                in the loop without extra noise.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-paragraph-secondary">
                <li>• Email and calendars</li>
                <li>• Slack, Teams, or similar tools</li>
                <li>• Internal dashboards and trackers</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-base font-semibold text-heading sm:text-lg">Systems of record</h3>
              <p className="mt-3 text-sm leading-relaxed text-paragraph-secondary">
                We can plug into HR, finance, LMS, or CRM systems so data flows where your teams expect
                it to be.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-paragraph-secondary">
                <li>• HRIS and payroll tools</li>
                <li>• Finance and billing systems</li>
                <li>• LMS, SIS, or CRM platforms</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-base font-semibold text-heading sm:text-lg">Lightweight tracking</h3>
              <p className="mt-3 text-sm leading-relaxed text-paragraph-secondary">
                If you are earlier stage, we help set up lightweight tooling so you still get reliable
                reporting without a heavy system rollout.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-paragraph-secondary">
                <li>• Shared trackers and dashboards</li>
                <li>• Simple status rituals and check-ins</li>
                <li>• Clear ownership and escalation paths</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Is this a fit? */}
      <section
        className="scroll-mt-[var(--header-offset)] bg-white py-20 sm:py-28 lg:py-32"
        aria-labelledby="service-fit-title"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              Is this the right fit?
            </p>
            <h2
              id="service-fit-title"
              className="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl"
            >
              When this service works best
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paragraph-secondary">
              A quick way to see whether this type of engagement is likely to be a match for your team
              right now.
            </p>
          </header>

          <div className="mx-auto mt-12 grid gap-8 md:grid-cols-2 lg:mt-16">
            <div className="rounded-2xl border border-gray-200/80 bg-background p-6 shadow-sm sm:p-8">
              <h3 className="text-base font-semibold text-heading sm:text-lg">A strong fit if…</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-paragraph-secondary">
                <li>• You have clear goals but limited internal capacity to execute.</li>
                <li>• You want a partner who can own day-to-day operations, not just advise.</li>
                <li>• You value predictable reporting and a single point of contact.</li>
                <li>• You are comfortable iterating together based on what works.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200/80 bg-background p-6 shadow-sm sm:p-8">
              <h3 className="text-base font-semibold text-heading sm:text-lg">May not be ideal if…</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-paragraph-secondary">
                <li>• You are looking for one-off freelancers for narrow tasks only.</li>
                <li>• You do not have internal owners for outcomes or decision-making.</li>
                <li>• You prefer to build a large internal team immediately.</li>
                <li>• You are not yet ready to commit to any recurring operating rhythm.</li>
              </ul>
            </div>
          </div>
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

