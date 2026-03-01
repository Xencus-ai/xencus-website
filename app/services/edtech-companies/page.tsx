import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Users, Video, BarChart3, ClipboardList } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
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
  return (
    <main className="bg-background">
      <JsonLd data={getEdtechFaqSchema()} />
      <JsonLd data={getEdtechServiceSchema()} />
      {/* Hero: overview of how we serve EdTech companies */}
      <section
        className="relative flex w-full min-h-[92vh] items-center justify-center overflow-hidden -mt-[5.5rem] pb-24 pt-24 sm:pb-28 sm:pt-32 lg:pb-32 lg:pt-36"
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
        className="bg-background py-12 sm:py-16"
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

          <ul className="mx-auto mt-8 grid w-full max-w-4xl grid-cols-1 justify-items-center gap-x-4 gap-y-4 px-0 sm:mt-10 sm:gap-x-6 sm:gap-y-4 md:grid-cols-2">
            {EDTECH_CARDS.map((card) => (
              <EdtechServiceCard key={card.id} card={card} />
            ))}
          </ul>
        </div>
      </section>

      {/* Section: Live class operations */}
      <section
        className="bg-background py-12 sm:py-16"
        aria-labelledby="live-class-ops-title"
      >
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-[90vw]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] lg:items-center">
            <div>
              <h2
                id="live-class-ops-title"
                className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl lg:text-4xl"
              >
                Live classes, run for you
              </h2>
              <p className="mt-3 max-w-xl text-sm font-medium leading-relaxed text-paragraph-secondary sm:text-base">
                From trainer rosters to reminders and recordings, we manage the full lifecycle of
                every live session, across all the domains you sell.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-paragraph-secondary sm:text-base">
                <li className="flex items-start gap-2">
                  <Video className="mt-0.5 h-4 w-4 text-brand-secondary" aria-hidden />
                  <span>
                    Cohort-wise timetables, links, and reminders set up on Zoom and Google Meet.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="mt-0.5 h-4 w-4 text-brand-secondary" aria-hidden />
                  <span>
                    Trainer assignment, backups, and escalation paths so classes never get cancelled.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-secondary" aria-hidden />
                  <span>
                    Attendance and completion captured session-wise, ready to sync with your CRM or
                    LMS.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white/90 p-3 shadow-sm backdrop-blur-sm">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                <Image
                  src="/Assets/edutech/live-class.avif"
                  alt="Dashboard view of live class scheduling and attendance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 45vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: LMS & content operations */}
      <section
        className="bg-background py-12 sm:py-16"
        aria-labelledby="lms-ops-title"
      >
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-[90vw]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-paragraph-secondary">
                <ClipboardList className="h-3.5 w-3.5 text-brand-secondary" aria-hidden />
                <span>LMS & course operations</span>
              </div>
              <h2
                id="lms-ops-title"
                className="mt-3 text-2xl font-semibold tracking-tight text-heading sm:text-3xl lg:text-4xl"
              >
                Courses and LMS, kept in sync
              </h2>
              <p className="mt-3 max-w-xl text-sm font-medium leading-relaxed text-paragraph-secondary sm:text-base">
                We maintain your course structures, cohorts, and learner journeys inside your LMS so
                learners always see exactly what they&apos;re supposed to—no broken links or
                missing modules.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-paragraph-secondary sm:text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-secondary" aria-hidden />
                  <span>Domain-wise course templates configured for each new cohort.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ClipboardList className="mt-0.5 h-4 w-4 text-brand-secondary" aria-hidden />
                  <span>
                    Projects, quizzes, and assignments set up with clear grading and deadlines.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="mt-0.5 h-4 w-4 text-brand-secondary" aria-hidden />
                  <span>
                    Enrolment, access, and completion rules implemented so support tickets go down.
                  </span>
                </li>
              </ul>
            </div>

            <div className="order-1 rounded-2xl border border-gray-200 bg-white/90 p-3 shadow-sm backdrop-blur-sm lg:order-2">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                <Image
                  src="/Assets/edutech/course.png"
                  alt="LMS dashboard showing courses and learner progress"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 45vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Analytics & reporting */}
      <section
        className="bg-background pb-12 pt-2 sm:pb-14 sm:pt-4"
        aria-labelledby="analytics-ops-title"
      >
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-[90vw]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-paragraph-secondary">
                <BarChart3 className="h-3.5 w-3.5 text-brand-secondary" aria-hidden />
                <span>Analytics & reporting</span>
              </div>
              <h2
                id="analytics-ops-title"
                className="mt-3 text-2xl font-semibold tracking-tight text-heading sm:text-3xl lg:text-4xl"
              >
                One view of your learner outcomes
              </h2>
              <p className="mt-3 max-w-xl text-sm font-medium leading-relaxed text-paragraph-secondary sm:text-base">
                We pull together attendance, completion, projects, and feedback so your leadership
                team gets a clean picture of how every cohort is performing.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-paragraph-secondary sm:text-base">
                <li className="flex items-start gap-2">
                  <BarChart3 className="mt-0.5 h-4 w-4 text-brand-secondary" aria-hidden />
                  <span>Program-wise dashboards for enrolments, live hours, and completions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-secondary" aria-hidden />
                  <span>Export-ready views for investors, enterprise clients, and partners.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ClipboardList className="mt-0.5 h-4 w-4 text-brand-secondary" aria-hidden />
                  <span>Exception reports so your team can intervene before cohorts slip.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white/90 p-3 shadow-sm backdrop-blur-sm">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                <Image
                  src="/Assets/edutech/analytics.png"
                  alt="Analytics dashboard showing learner and cohort performance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 45vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section
        className="bg-background pb-16 pt-4 sm:pb-20 sm:pt-6"
        aria-labelledby="edtech-faq-title"
      >
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-[90vw]">
          <header className="mx-auto max-w-3xl text-center">
            <h2
              id="edtech-faq-title"
              className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl lg:text-4xl"
            >
              Frequently asked questions
            </h2>
            <p className="mt-3 text-sm font-medium leading-relaxed text-paragraph-secondary sm:text-base">
              A few of the questions EdTech founders and operations heads ask us before we start
              working together.
            </p>
          </header>

          <dl className="mx-auto mt-8 max-w-3xl space-y-5 divide-y divide-gray-200 rounded-2xl bg-white/80 p-5 shadow-sm backdrop-blur-sm sm:mt-10 sm:p-6">
            <div className="pt-1">
              <dt className="text-sm font-semibold text-heading sm:text-base">
                Do you work with early-stage EdTechs or only large ones?
              </dt>
              <dd className="mt-2 text-sm text-paragraph-secondary sm:text-base">
                Both. We partner with early-stage teams that are just setting up their first domains,
                and with scaled players running dozens of cohorts at once. We design the operating
                model based on your current volume and where you want to be in 12–18 months.
              </dd>
            </div>
            <div className="pt-4">
              <dt className="text-sm font-semibold text-heading sm:text-base">
                Which tools and platforms do you plug into?
              </dt>
              <dd className="mt-2 text-sm text-paragraph-secondary sm:text-base">
                We typically host live classes on Zoom or Google Meet and work with your existing
                LMS, CRM, and payment stack. If you don&apos;t have tooling in place yet, we&apos;ll
                recommend a simple setup based on your volumes.
              </dd>
            </div>
            <div className="pt-4">
              <dt className="text-sm font-semibold text-heading sm:text-base">
                How long does it take to go live with Xencus?
              </dt>
              <dd className="mt-2 text-sm text-paragraph-secondary sm:text-base">
                For a single domain, we can usually go live within 2–3 weeks once we&apos;ve aligned
                on curriculum, outcomes, and tools. For larger multi-domain setups, we phase the
                rollout so you see value in the first month.
              </dd>
            </div>
            <div className="pt-4">
              <dt className="text-sm font-semibold text-heading sm:text-base">
                Will learners know that Xencus is running the operations?
              </dt>
              <dd className="mt-2 text-sm text-paragraph-secondary sm:text-base">
                No. From the learner&apos;s point of view everything stays under your brand—your
                website, your emails, your certificates. Xencus operates as the invisible backbone so
                your brand remains front and center.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}

