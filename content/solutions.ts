/**
 * Solutions page: who we serve, what we deliver, and how to get started.
 */

export const solutionsHero = {
  label: "How we help",
  title: "Solutions that scale with you",
  subtitle:
    "We partner with EdTech companies, corporate L&D teams, and institutions to run the delivery, legal, HR, finance, and technology operations behind every cohort—so your leaders can stay focused on product, learners, and growth.",
  ctaText: "Talk to us",
  ctaHref: "/contact",
} as const;

export const solutionsTrust = {
  title: "Designed for leaders who need dependable execution",
  subtitle:
    "Xencus operates as a long-term partner, not a project vendor: clear scope, strong governance, and continuity built into the way we work.",
  items: [
    {
      title: "Brand-first delivery",
      description:
        "From the learner’s point of view, everything remains under your brand—your website, your communication, your certificates. We remain in the background.",
    },
    {
      title: "SLA-ready operations",
      description:
        "Defined timelines, escalation paths, and weekly reporting so internal stakeholders always know what is happening and what comes next.",
    },
    {
      title: "Continuity and backups",
      description:
        "Trainer backups and an operations layer built for scale so sessions and deliverables continue even when plans change at short notice.",
    },
    {
      title: "Audit-friendly reporting",
      description:
        "Attendance, completion, and progress reporting structured for leadership reviews, partner updates, and client conversations.",
    },
  ],
} as const;

/** Who we serve: segments with short blurbs and links to service pages. */
export const solutionsSegments = [
  {
    id: "edtech",
    title: "EdTech Companies",
    description:
      "End-to-end delivery operations under your brand: curriculum, trainers, live classes, LMS, doubt support, certifications, and analytics. Scale cohorts without scaling headcount.",
    href: "/services/edtech-companies",
    linkLabel: "Explore EdTech solutions",
  },
  {
    id: "corporate",
    title: "Corporate L&D",
    description:
      "Run upskilling and reskilling programs for employees with the same rigour as external academies. We manage design, delivery, and tracking so your L&D team can focus on strategy and stakeholder management.",
    href: "/services/corporate-ld",
    linkLabel: "Explore corporate L&D",
  },
  {
    id: "institutions",
    title: "Universities & Training Institutions",
    description:
      "Extend capacity and domain coverage without building large internal teams. We plug into your curriculum and systems so you can offer more programs and locations with consistent quality.",
    href: "/services/universities-training-institutions",
    linkLabel: "Explore institution solutions",
  },
] as const;

/** What we deliver: capability pillars (aligned with nav/services). */
export const solutionsCapabilities = [
  {
    id: "delivery",
    title: "Delivery operations",
    description:
      "Live classes, trainer network, LMS operations, recordings, doubt sessions, projects, assessments, and certifications—run as a single, consistent delivery engine under your brand.",
    href: "/services/edtech-companies",
    linkLabel: "Explore delivery ops",
  },
  {
    id: "legal",
    title: "Legal services for EdTech",
    description:
      "Contracts, policies, and compliance support tailored to EdTech, so you can launch and scale programs without legal bottlenecks.",
    href: "/services/edtech-legal-services",
    linkLabel: "Explore legal services",
  },
  {
    id: "hr",
    title: "HR for EdTech",
    description:
      "Hiring, onboarding, and people operations designed for education and training businesses, including contractors and full-time teams.",
    href: "/services/hr-services-for-edtech",
    linkLabel: "Explore HR services",
  },
  {
    id: "finance",
    title: "Finance solutions for EdTech",
    description:
      "Finance operations, billing, and reporting designed for subscription and cohort-based revenue, working alongside your CA or internal team.",
    href: "/services/finance-solutions-for-edtech",
    linkLabel: "Explore finance solutions",
  },
  {
    id: "tech",
    title: "Technical services",
    description:
      "Digital marketing, design, web, and mobile development to support your product, go-to-market, and learner experiences.",
    href: "/services/technical/digital-marketing",
    linkLabel: "Explore technical services",
  },
] as const;

/** Xencus vs others: comparison rows for the table. */
export const solutionsComparison = {
  title: "Xencus vs building everything in-house",
  subtitle: "One partner for delivery, legal, HR, and tech—without the cost or complexity of doing it yourself.",
  usLabel: "Xencus",
  themLabel: "Others / In-house",
  rows: [
    {
      aspect: "Time to first cohort",
      us: "2–3 weeks from alignment to first live cohort",
      them: "Several months to hire, train, and set up internal operations",
    },
    {
      aspect: "Cost model",
      us: "Scale with cohorts and services—your costs track actual usage",
      them: "Fixed cost of full-time teams or several overlapping vendor contracts",
    },
    {
      aspect: "Scope",
      us: "Delivery, legal, HR, finance, and tech aligned in one operating model",
      them: "Different vendors or internal teams for each function, with coordination on you",
    },
    {
      aspect: "Brand & control",
      us: "Your brand, your curriculum, and your tools—Xencus runs operations behind the scenes",
      them: "White-label possible, but day-to-day coordination and risk management sit with your team",
    },
    {
      aspect: "Scaling",
      us: "Add domains, geographies, and cohorts without re-procurement or re-architecture",
      them: "New hires, new vendors, or re-negotiations each time you expand",
    },
  ],
} as const;

/** How it works: three steps. */
export const solutionsHowItWorks = {
  title: "How we work with you",
  subtitle: "A clear path from first conversation to live cohorts, and then to long-term partnership.",
  steps: [
    {
      step: 1,
      title: "Align",
      text: "We understand your segment, outcomes, and existing tools. Instead of long RFPs, we align scope in days.",
    },
    {
      step: 2,
      title: "Go live",
      text: "Your first cohort or program runs with our operations in place. Your brand and stakeholders, our execution.",
    },
    {
      step: 3,
      title: "Scale",
      text: "We add domains, geographies, and cohorts as you grow, keeping the operating model consistent.",
    },
  ],
} as const;

export const solutionsCta = {
  title: "Ready to scale delivery?",
  description:
    "Share your segment, current challenges, and goals. We will outline a practical way to start and what the first three months look like with Xencus.",
  buttonText: "Get in touch",
  buttonHref: "/contact",
} as const;
