/**
 * Solutions page: who we serve, what we deliver, and how to get started.
 */

export const solutionsHero = {
  label: "How we help",
  title: "Solutions that scale with you",
  subtitle:
    "Whether you're an EdTech scaling delivery, a corporate L&D team running cohorts, or an institution expanding programs—we provide the operations, legal, HR, and tech backbone so you focus on growth.",
  ctaText: "Talk to us",
  ctaHref: "/contact",
} as const;

/** Who we serve: segments with short blurbs and links to service pages. */
export const solutionsSegments = [
  {
    id: "edtech",
    title: "EdTech Companies",
    description:
      "End-to-end delivery operations under your brand: curriculum, trainers, live classes, LMS, doubt sessions, certifications, and analytics. Scale cohorts without scaling headcount.",
    href: "/services/edtech-companies",
    linkLabel: "Explore EdTech solutions",
  },
  {
    id: "corporate",
    title: "Corporate L&D",
    description:
      "Run upskilling and reskilling programs for your workforce with the same rigour as external academies. We handle design, delivery, and tracking so your L&D team leads strategy.",
    href: "/services/corporate-ld",
    linkLabel: "Explore corporate L&D",
  },
  {
    id: "institutions",
    title: "Universities & Training Institutions",
    description:
      "Extend capacity and domain coverage without building new teams. We plug into your curriculum and systems so you offer more programs and geographies with consistent quality.",
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
      "Live classes, trainer network, LMS ops, recordings, doubt sessions, projects, assessments, and certifications—all under your brand.",
    href: "/services/edtech-companies",
    linkLabel: "Explore delivery ops",
  },
  {
    id: "legal",
    title: "Legal services for EdTech",
    description: "Contracts, compliance, and regulatory support so you launch and scale without legal bottlenecks.",
    href: "/services/edtech-legal-services",
    linkLabel: "Explore legal services",
  },
  {
    id: "hr",
    title: "HR for EdTech",
    description: "Hiring, onboarding, and people operations tailored to education and training businesses.",
    href: "/services/hr-services-for-edtech",
    linkLabel: "Explore HR services",
  },
  {
    id: "finance",
    title: "Finance solutions for EdTech",
    description: "Financial planning, billing, and reporting built for subscription and cohort-based revenue.",
    href: "/services/finance-solutions-for-edtech",
    linkLabel: "Explore finance solutions",
  },
  {
    id: "tech",
    title: "Technical services",
    description: "Digital marketing, design, web and mobile development to support your product and go-to-market.",
    href: "/services/technical/digital-marketing",
    linkLabel: "Explore technical services",
  },
] as const;

/** Xencus vs others: comparison rows for the table. */
export const solutionsComparison = {
  title: "Xencus vs building in-house or using multiple vendors",
  subtitle: "One partner for delivery, legal, HR, and tech—without the cost or complexity of doing it yourself.",
  usLabel: "Xencus",
  themLabel: "Others / In-house",
  rows: [
    {
      aspect: "Time to first cohort",
      us: "2–3 weeks to go live",
      them: "Months to hire, train, and set up",
    },
    {
      aspect: "Cost model",
      us: "Scale with cohorts—pay for what you run",
      them: "Fixed cost of full-time team or multiple vendor contracts",
    },
    {
      aspect: "Scope",
      us: "Delivery + legal + HR + finance + tech in one place",
      them: "Often one function per vendor or team",
    },
    {
      aspect: "Brand & control",
      us: "Your brand, your curriculum—we run operations",
      them: "White-label possible but coordination across vendors is on you",
    },
    {
      aspect: "Scaling",
      us: "Add domains and cohorts without re-procurement",
      them: "New hires or new vendor negotiations each time",
    },
  ],
} as const;

/** How it works: three steps. */
export const solutionsHowItWorks = {
  title: "How we work with you",
  subtitle: "From first conversation to live cohorts in weeks.",
  steps: [
    {
      step: 1,
      title: "Align",
      text: "We understand your segment, outcomes, and current stack. No long RFPs—we scope in days.",
    },
    {
      step: 2,
      title: "Go live",
      text: "First cohort or program runs with our operations in place. Your brand, our execution.",
    },
    {
      step: 3,
      title: "Scale",
      text: "Add domains, geographies, and cohorts as you grow. We scale with you.",
    },
  ],
} as const;

export const solutionsCta = {
  title: "Ready to scale delivery?",
  description: "Tell us your segment and goals. We'll outline how we can help and what going live looks like.",
  buttonText: "Get in touch",
  buttonHref: "/contact",
} as const;
