/**
 * Pricing page content.
 * Xencus uses fully custom pricing — no fixed plans.
 */

export const pricingHero = {
  label: "Pricing",
  title: "Built for your stage, not a plan",
  subtitle:
    "No fixed plans. No rigid tiers. Your engagement is scoped to your current setup, volume, and goals — then adjusts as you grow.",
  ctaText: "Get a custom quote",
  ctaHref: "/contact",
} as const;

export const pricingPillars = [
  {
    heading: "Scoped to where you are today",
    body: "We start with what you actually need right now — not a package priced for a company twice your size.",
  },
  {
    heading: "Costs that track your usage",
    body: "As you add cohorts, programs, and learners, your costs scale with volume — not with fixed salaries or retainers.",
  },
  {
    heading: "One partner across all functions",
    body: "Delivery, legal, HR, finance, and tech — you don't pay to coordinate four separate agencies.",
  },
] as const;

export const pricingStages = [
  {
    id: "first-cohort",
    tag: "First cohort",
    name: "Just getting started",
    description:
      "You have a program idea and need to launch your first 1–3 cohorts without building a full ops team from scratch.",
    highlights: [
      "Go live in 2–3 weeks",
      "Curriculum and trainer setup",
      "Flexible, low-commitment terms",
      "Add legal or HR support as needed",
    ],
  },
  {
    id: "scaling",
    tag: "Scaling up",
    name: "Adding domains and cohorts",
    description:
      "You've launched and want to add domains, run more cohorts, and layer in LMS, analytics, and certifications.",
    highlights: [
      "Multiple domains and cohort frequency",
      "LMS and course ops management",
      "Learner analytics and certifications",
      "Dedicated ops point of contact",
    ],
  },
  {
    id: "high-volume",
    tag: "High volume",
    name: "Running at scale",
    description:
      "You're running dozens of cohorts across domains and need SLA-backed delivery, clear reporting, and full-stack ops.",
    highlights: [
      "SLA-ready execution and escalation paths",
      "Full stack: delivery + legal + HR + finance",
      "Backup delivery and continuity",
      "Custom workflows and integrations",
    ],
  },
  {
    id: "enterprise",
    tag: "Enterprise",
    name: "Multi-brand or institution-wide",
    description:
      "Large EdTechs or institutions with complex delivery needs, multiple brands, or global program requirements.",
    highlights: [
      "Dedicated delivery and support team",
      "Multi-brand, multi-geography ops",
      "Custom compliance and integrations",
      "Strategic long-term partnership",
    ],
  },
] as const;

export const pricingFaq = {
  title: "Common questions",
  items: [
    {
      q: "What does a custom quote actually mean?",
      a: "We scope your engagement based on what you need: which services, how many domains and cohorts, and your team's current setup. You get a clear proposal with deliverables, timelines, and costs before you commit.",
    },
    {
      q: "Is there a minimum commitment?",
      a: "Early-stage engagements are flexible — many startups begin with a single cohort or domain. Larger engagements typically run on quarterly or annual terms. We'll lay out options when we talk.",
    },
    {
      q: "What happens as we add more programs?",
      a: "Many partners start small and expand as they grow. We revise scope transparently — no surprises when volume changes.",
    },
    {
      q: "Can we start with delivery and add HR or finance later?",
      a: "Yes. Many partners launch with EdTech delivery operations and layer in legal, HR, finance, or tech as they scale. We're built for that path.",
    },
    {
      q: "Do you offer SLAs?",
      a: "Yes, for high-volume and enterprise engagements. SLAs, escalation paths, and reporting rhythms are available depending on your requirements.",
    },
  ],
} as const;

export const pricingCta = {
  title: "Tell us about your EdTech",
  description:
    "Share your setup and goals. We'll recommend a scope and send you a clear proposal with no obligation.",
  buttonText: "Get a custom quote",
  buttonHref: "/contact",
} as const;
