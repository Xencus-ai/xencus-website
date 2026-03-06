import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Users, Video, BarChart3, ClipboardList } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  edtechCta,
  edtechGettingStarted,
  edtechIntegrations,
  edtechMetrics,
} from "@/content/edtech-partners";
import { edtechAnalytics, edtechLiveClass, edtechLmsOps } from "@/content/edtech-services";
import { upcomingBatches } from "@/content/upcoming-batches";
import { buildPageMetadata } from "@/lib/seo";
import { getNextBatchStartDate } from "@/lib/next-batch-date";
import { getEdtechFaqSchema, getEdtechServiceSchema } from "@/lib/structured-data";

type EdtechCard = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const EDTECH_CARDS: EdtechCard[] = [
  {
    id: "program-design",
    title: "Program design & planning",
    description:
      "We help you structure programs into clear modules, milestones, and outcomes so every cohort knows exactly what they\u2019ll achieve.",
    image: "/Assets/edutech/illustrations/planning.avif",
  },
  {
    id: "trainer-network",
    title: "Trainer & mentor network",
    description:
      "We source, onboard, and manage industry trainers and mentors for each domain, and maintain backups so your calendar never goes dark.",
    image: "/Assets/edutech/illustrations/trainer.avif",
  },
  {
    id: "live-delivery",
    title: "Live cohort delivery",
    description:
      "Timetables, links, reminders, moderation and recordings for live sessions across all the domains you sell.",
    image: "/Assets/edutech/illustrations/livecasses.avif",
  },
  {
    id: "recorded-libraries",
    title: "Recorded libraries & replays",
    description:
      "We curate and upload recordings and pre-recorded lessons into structured libraries so learners can revisit content anytime.",
    image: "/Assets/edutech/illustrations/recorded.avif",
  },
  {
    id: "doubt-sessions",
    title: "Doubt sessions & support",
    description:
      "We schedule recurring doubt-clearing slots and mentor hours so learners can get quick, personalised help instead of waiting in support queues.",
    image: "/Assets/edutech/illustrations/doubtSession.avif",
  },
  {
    id: "projects-assessments",
    title: "Projects & assessments",
    description:
      "Hands-on projects, graded assignments, and clear rubrics that turn learning into portfolio-ready work.",
    image: "/Assets/edutech/illustrations/projects.avif",
  },
  {
    id: "analytics",
    title: "Learner & cohort analytics",
    description:
      "Dashboards for enrolments, attendance, completions, and feedback that your leadership and sales teams can actually act on.",
    image: "/Assets/edutech/illustrations/analytics.avif",
  },
  {
    id: "certification",
    title: "Certification & proof of skill",
    description:
      "We handle completion rules and certificate generation so learners graduate with branded, verifiable proof of their skills.",
    image: "/Assets/edutech/illustrations/certificate.avif",
  },
];

function EdtechServiceCard({ card }: { card: EdtechCard }) {
  return (
    <li className="flex w-full justify-center">
      <article className="edtech-card group group/card relative flex aspect-[3/4] w-full max-w-[18rem] flex-col overflow-hidden rounded-[1rem] border border-gray-200 pt-3 px-3 pb-0 transition-shadow duration-200 hover:shadow-md">
        <div className="card-splash z-0 rounded-[0.65rem]" aria-hidden />
        <div className="absolute inset-0 z-0 rounded-[0.65rem] bg-white/30 backdrop-blur-sm" aria-hidden />
        <div className="absolute top-3 left-3 right-3 bottom-16 z-[1] overflow-hidden rounded-[0.8rem] transition-[bottom] duration-200 ease-out group-hover/card:bottom-[10rem]">
          <Image
            src={card.image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 767px) 100vw, 18rem"
          />
        </div>
        <div
          className="absolute top-3 left-3 right-3 bottom-16 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-[0.8rem] transition-[bottom] duration-200 ease-out group-hover/card:bottom-[10rem]"
          aria-hidden
        />
        <div className="absolute -left-3 -right-3 bottom-0 top-[calc(100%-4rem)] z-10 flex flex-col justify-start rounded-b-[1rem] bg-white/15 pt-2 shadow-lg backdrop-blur-sm transition-[top] duration-200 ease-out group-hover/card:justify-center group-hover/card:bg-white/90 group-hover/card:pt-0 group-hover/card:top-[calc(100%-10rem)]">
          <div className="w-full rounded-t-[0.8rem] rounded-b-[1rem] border border-t-0 border-b-0 border-white/20 px-5 pt-3 pb-5 text-center transition-colors duration-200 group-hover/card:border-gray-200/80">
            <h3 className="text-xs font-semibold text-heading sm:text-sm">{card.title}</h3>
            <div className="edtech-card-desc-wrap w-full">
              <p className="edtech-card-desc pt-1 text-xs leading-snug text-gray-600">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}

export const metadata: Metadata = buildPageMetadata({
  title: "EdTech Operations & Services",
  description:
    "Xencus runs end-to-end operations for EdTech companies—curriculum design, trainer networks, live cohort delivery, LMS management, analytics, and certifications under your brand.",
  path: "/services/edtech-companies",
});

export default function EdtechCompaniesPage() {
  const nextBatchStart = getNextBatchStartDate();
  return (
    <main className="bg-background">
      <JsonLd data={getEdtechFaqSchema()} />
      <JsonLd data={getEdtechServiceSchema()} />
      {/* Hero: overview of how we serve EdTech companies */}
      <section
        className="relative flex min-h-screen w-full items-center justify-center overflow-hidden -mt-[var(--header-offset)] pb-24 pt-24 sm:pb-28 sm:pt-32 lg:pb-32 lg:pt-36"
        aria-labelledby="edtech-services-hero-title"
      >
        <div className="absolute inset-0">
          <Image
            src="/Assets/edutech/edutech-hero.avif"
            alt="Learners attending a live online class"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjMiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjMiIGZpbGw9IiNmNWYwZTgiLz48L3N2Zz4="
          />
          <div
            className="absolute inset-0 bg-white/10"
            aria-hidden
          />
        </div>

        {/* Bottom zig-zag fade into page background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.96) 65%, #ffffff 100%)",
            clipPath:
              "polygon(0 55%, 5% 65%, 10% 55%, 15% 65%, 20% 55%, 25% 65%, 30% 55%, 35% 65%, 40% 55%, 45% 65%, 50% 55%, 55% 65%, 60% 55%, 65% 65%, 70% 55%, 75% 65%, 80% 55%, 85% 65%, 90% 55%, 95% 65%, 100% 55%, 100% 100%, 0 100%)",
          }}
        />

        <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-[90vw]">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              id="edtech-services-hero-title"
              className="mt-4 text-4xl font-extrabold tracking-tight text-heading sm:text-5xl lg:text-6xl"
              style={{
                textShadow:
                  "0 2px 10px rgba(21,21,21,0.35), 0 4px 18px rgba(21,21,21,0.25)",
              }}
            >
              The operations backbone
              <br />
              <span className="text-brand-secondary">for modern EdTech companies</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Section: What we run for your EdTech (similar to homepage "What We Do") */}
      <section
        id="edtech-what-we-run"
        className="min-h-[calc(100vh-var(--header-offset))] bg-background py-12 sm:py-16"
        aria-labelledby="edtech-what-we-run-title"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 sm:px-6 lg:px-8 xl:max-w-[90vw]">
          <header className="mx-auto max-w-3xl text-center">
            <h2
              id="edtech-what-we-run-title"
              className="text-3xl font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl"
            >
              What we run{" "}
              <span className="text-brand-secondary">for your EdTech</span>
            </h2>
            <p className="mt-4 text-sm font-medium leading-snug text-paragraph-secondary sm:text-base lg:text-lg max-w-2xl mx-auto">
              The same operations layer we use across partners—course design, live delivery,
              projects, quizzes, and completion—plugged directly into your brand.
            </p>
          </header>

          <ul className="mx-auto mt-8 grid w-full max-w-4xl grid-cols-1 justify-items-center gap-x-4 gap-y-3 px-0 sm:mt-10 sm:gap-x-6 sm:gap-y-2 md:grid-cols-2 md:gap-y-1.5">
            {EDTECH_CARDS.map((card) => (
              <EdtechServiceCard key={card.id} card={card} />
            ))}
          </ul>
        </div>
      </section>

      {/* Section: Live class operations — Tailwind 4.2 reference layout */}
      <section
        className="min-h-[calc(100vh-var(--header-offset))] overflow-hidden bg-white py-24 sm:py-32"
        aria-labelledby="live-class-ops-title"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-brand-secondary">
                  {edtechLiveClass.label}
                </p>
                <h2
                  id="live-class-ops-title"
                  className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-heading sm:text-5xl"
                >
                  {edtechLiveClass.title}
                </h2>
                <p className="mt-6 text-lg leading-8 text-paragraph-secondary">
                  {edtechLiveClass.description}
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-paragraph-secondary lg:max-w-none">
                  {edtechLiveClass.listItems.map((item, index) => (
                    <div
                      key={item.name}
                      className={index === 0 ? "relative pl-14" : "relative pl-9"}
                    >
                      <dt className="inline font-semibold text-heading">
                        {index === 0 ? (
                          <span className="absolute left-0 top-1 flex gap-1.5">
                            <Image
                              src="/Assets/edutech/zoom.svg"
                              alt=""
                              width={20}
                              height={20}
                              className="h-5 w-5 object-contain"
                              aria-hidden
                            />
                            <Image
                              src="/Assets/edutech/google-meet.svg"
                              alt=""
                              width={20}
                              height={20}
                              className="h-5 w-5 object-contain"
                              aria-hidden
                            />
                          </span>
                        ) : (
                          <CheckCircle2
                            aria-hidden
                            className="absolute left-0 top-1 h-5 w-5 text-brand-secondary"
                          />
                        )}
                        {item.name}
                      </dt>{" "}
                      <dd className="inline">{item.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="relative w-full max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl shadow-xl ring-1 ring-gray-400/10">
                <Image
                  src={edtechLiveClass.image.src}
                  alt={edtechLiveClass.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 57rem"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Upcoming batches */}
      <section
        className="min-h-[calc(100vh-var(--header-offset))] overflow-hidden bg-background py-24 sm:py-32"
        aria-labelledby="upcoming-batch-title"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-12 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0">
            {/* Image left — vertically centered in section */}
            <div className="flex min-w-0 items-center justify-center lg:py-4">
              <div className="relative aspect-[16/10] w-full max-w-xl overflow-hidden rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:max-w-none">
                <Image
                  src={upcomingBatches.image.src}
                  alt={upcomingBatches.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Table and content right */}
            <div className="min-w-0 lg:py-4">
              <p className="text-base font-semibold leading-7 text-brand-secondary">
                {upcomingBatches.sectionLabel}
              </p>
              <h2
                id="upcoming-batch-title"
                className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-heading sm:text-5xl"
              >
                {upcomingBatches.title}
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-paragraph-secondary">
                {upcomingBatches.description}
              </p>
              <p className="mt-4 text-base font-semibold text-heading">
                Next batch:{" "}
                <time
                  dateTime={`${nextBatchStart.year}-${String(nextBatchStart.month).padStart(2, "0")}-${String(nextBatchStart.day).padStart(2, "0")}`}
                >
                  {nextBatchStart.label}
                </time>
              </p>
              <div className="mt-6 min-w-0 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm ring-1 ring-gray-900/5">
                <div className="max-h-[26rem] overflow-y-auto overflow-x-hidden scroll-smooth overscroll-contain py-1">
                  <table className="min-w-full divide-y divide-gray-100">
                    <thead className="sticky top-0 z-10 bg-gray-50/95 backdrop-blur-sm">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-heading sm:px-5"
                        >
                          Course
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-heading sm:px-5"
                        >
                          Duration
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                      {upcomingBatches.batches.map((batch) => (
                        <tr key={batch.name} className="transition-colors hover:bg-gray-50/80">
                          <td className="px-4 py-2.5 text-sm text-paragraph-secondary sm:px-5">
                            {batch.name}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2.5 text-sm font-medium text-heading sm:px-5">
                            {batch.duration}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: LMS & course operations — same layout as Live class (content left, image right) */}
      <section
        className="min-h-[calc(100vh-var(--header-offset))] overflow-hidden bg-white py-24 sm:py-32"
        aria-labelledby="lms-ops-title"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-brand-secondary">
                  {edtechLmsOps.label}
                </p>
                <h2
                  id="lms-ops-title"
                  className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-heading sm:text-5xl"
                >
                  {edtechLmsOps.title}
                </h2>
                <p className="mt-6 text-lg leading-8 text-paragraph-secondary">
                  {edtechLmsOps.description}
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-paragraph-secondary lg:max-w-none">
                  {edtechLmsOps.listItems.map((item) => (
                    <div key={item.name} className="relative pl-9">
                      <dt className="inline font-semibold text-heading">
                        <CheckCircle2
                          aria-hidden
                          className="absolute left-0 top-1 h-5 w-5 text-brand-secondary"
                        />
                        {item.name}
                      </dt>{" "}
                      <dd className="inline">{item.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex min-w-0 items-center justify-center lg:py-4">
              <div className="relative aspect-[16/10] w-full max-w-xl overflow-hidden rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:max-w-none">
                <Image
                  src={edtechLmsOps.image.src}
                  alt={edtechLmsOps.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Analytics & reporting — image left, content right */}
      <section
        className="min-h-[calc(100vh-var(--header-offset))] overflow-hidden bg-background py-24 sm:py-32"
        aria-labelledby="analytics-ops-title"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Image left — vertically centered */}
            <div className="flex min-w-0 items-center justify-center lg:py-4">
              <div className="relative aspect-[16/10] w-full max-w-xl overflow-hidden rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:max-w-none">
                <Image
                  src={edtechAnalytics.image.src}
                  alt={edtechAnalytics.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
              </div>
            </div>
            <div className="lg:pt-4 lg:pl-8">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-brand-secondary">
                  {edtechAnalytics.label}
                </p>
                <h2
                  id="analytics-ops-title"
                  className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-heading sm:text-5xl"
                >
                  {edtechAnalytics.title}
                </h2>
                <p className="mt-6 text-lg leading-8 text-paragraph-secondary">
                  {edtechAnalytics.description}
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-paragraph-secondary lg:max-w-none">
                  {edtechAnalytics.listItems.map((item) => (
                    <div key={item.name} className="relative pl-9">
                      <dt className="inline font-semibold text-heading">
                        <CheckCircle2
                          aria-hidden
                          className="absolute left-0 top-1 h-5 w-5 text-brand-secondary"
                        />
                        {item.name}
                      </dt>{" "}
                      <dd className="inline">{item.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid — partner value (Tailwind 4.2 reference) */}
      <section
        className="min-h-[calc(100vh-var(--header-offset))] bg-background py-24 sm:py-32"
        aria-labelledby="edtech-bento-title"
      >
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p className="text-center text-base font-semibold leading-7 text-brand-secondary">
            For EdTech partners
          </p>
          <h2
            id="edtech-bento-title"
            className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-heading sm:text-5xl"
          >
            Everything you need to scale delivery
          </h2>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            {/* Cell 1: Getting started — row-span-2 left */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-2xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1rem+1px)] lg:rounded-l-[calc(1rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-heading max-lg:text-center">
                    {edtechGettingStarted.title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-paragraph-secondary max-lg:text-center">
                    {edtechGettingStarted.description}
                  </p>
                  <ol className="mt-4 space-y-2">
                    {edtechGettingStarted.steps.map((item) => (
                      <li key={item.step} className="flex gap-2 text-sm text-paragraph-secondary max-lg:justify-center">
                        <span className="shrink-0 font-semibold text-heading">{item.step}.</span>
                        <span>{item.title}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="relative min-h-[18rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-4 top-4 bottom-0 overflow-hidden rounded-t-xl border border-gray-200 bg-white shadow-lg">
                    <Image
                      src={edtechGettingStarted.image.src}
                      alt={edtechGettingStarted.image.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-2xl" />
            </div>

            {/* Cell 2: Integrations — top middle */}
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-2xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1rem+1px)] max-lg:rounded-t-[calc(1rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-heading max-lg:text-center">
                    {edtechIntegrations.title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-paragraph-secondary max-lg:text-center">
                    {edtechIntegrations.description}
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-6 max-lg:pb-10 sm:px-10 lg:pb-2">
                  <div className="relative h-32 w-full max-lg:max-w-xs">
                    <Image
                      src={edtechIntegrations.image.src}
                      alt={edtechIntegrations.image.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-2xl" />
            </div>

            {/* Cell 3: Metrics — bottom middle */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-heading max-lg:text-center">
                    {edtechMetrics.title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-paragraph-secondary max-lg:text-center">
                    {edtechMetrics.description}
                  </p>
                </div>
                <div className="flex flex-1 flex-wrap items-center justify-center gap-3 px-6 max-lg:py-6 lg:pb-4">
                  {edtechMetrics.metrics.map((m) => (
                    <div key={m.label} className="rounded-lg border border-gray-200 bg-gray-50/80 px-4 py-2 text-center">
                      <p className="text-lg font-bold text-brand-secondary">{m.value}</p>
                      <p className="text-xs font-medium text-paragraph-secondary">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
            </div>

            {/* Cell 4: CTA — row-span-2 right */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-2xl lg:rounded-r-2xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1rem+1px)] max-lg:rounded-b-[calc(1rem+1px)] lg:rounded-r-[calc(1rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-heading max-lg:text-center">
                    {edtechCta.title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-paragraph-secondary max-lg:text-center">
                    {edtechCta.description}
                  </p>
                  <div className="mt-6 flex justify-center max-lg:pb-6">
                    <Link
                      href={edtechCta.buttonHref}
                      className="inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-secondary shadow-sm transition-opacity hover:opacity-90"
                    >
                      {edtechCta.buttonText}
                    </Link>
                  </div>
                </div>
                <div className="relative min-h-[18rem] w-full grow">
                  <div className="absolute top-4 right-0 bottom-0 left-4 overflow-hidden rounded-tl-xl border border-gray-200 bg-white shadow-lg">
                    <Image
                      src={edtechCta.image.src}
                      alt={edtechCta.image.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-2xl lg:rounded-r-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs — simple grid */}
      <section
        className="min-h-[calc(100vh-var(--header-offset))] bg-white"
        aria-labelledby="edtech-faq-title"
      >
        <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div className="text-center">
            <p className="mb-1 text-sm font-bold uppercase tracking-wider text-orange-600">
              We Answer
            </p>
            <h2
              id="edtech-faq-title"
              className="text-4xl font-black text-heading"
            >
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-paragraph-secondary sm:text-base">
              A few of the questions EdTech founders and operations heads ask us before we start
              working together.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="mb-2 font-semibold text-heading">
                Do you work with early-stage EdTechs or only large ones?
              </h3>
              <p className="leading-relaxed text-paragraph-secondary">
                Both. We partner with early-stage teams that are just setting up their first domains,
                and with scaled players running dozens of cohorts at once. We design the operating
                model based on your current volume and where you want to be in 12–18 months.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-heading">
                Which tools and platforms do you plug into?
              </h3>
              <p className="leading-relaxed text-paragraph-secondary">
                We typically host live classes on Zoom or Google Meet and work with your existing
                LMS, CRM, and payment stack. If you don&apos;t have tooling in place yet, we&apos;ll
                recommend a simple setup based on your volumes.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-heading">
                How long does it take to go live with Xencus?
              </h3>
              <p className="leading-relaxed text-paragraph-secondary">
                For a single domain, we can usually go live within 2–3 weeks once we&apos;ve aligned
                on curriculum, outcomes, and tools. For larger multi-domain setups, we phase the
                rollout so you see value in the first month.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-heading">
                Will learners know that Xencus is running the operations?
              </h3>
              <p className="leading-relaxed text-paragraph-secondary">
                No. From the learner&apos;s point of view everything stays under your brand—your
                website, your emails, your certificates. Xencus operates as the invisible backbone so
                your brand remains front and center.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold leading-6 text-heading shadow-sm transition-colors hover:border-gray-300 hover:text-gray-900 hover:shadow focus:outline-none focus:ring-2 focus:ring-gray-300/25 active:border-gray-200"
            >
              <svg
                className="size-5 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Go to support center</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

