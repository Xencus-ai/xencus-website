/**
 * Pricing page: company-size-based tiers, no fixed prices.
 */

export const pricingHero = {
  label: "Pricing",
  title: "Pricing that scales with your business",
  subtitle:
    "We don't use one-size-fits-all pricing. Whether you're a startup running your first cohort or a large EdTech with dozens of programs, we tailor engagement to your size, scope, and goals.",
  ctaText: "Get a quote",
  ctaHref: "/contact",
} as const;

/** Company size tiers: no fixed amounts, custom pricing per segment. */
export const pricingTiers = [
  {
    id: "startup",
    name: "Startup",
    description: "Early-stage EdTechs and teams launching their first few cohorts. We keep setup light and costs aligned to your current volume.",
    highlights: [
      "First 1–3 domains or programs",
      "Quick go-live (2–3 weeks)",
      "Delivery ops + optional legal/HR support",
      "Flexible terms",
    ],
    ctaLabel: "Talk to us",
  },
  {
    id: "growth",
    name: "Growth",
    description: "Scaling EdTechs adding domains, geographies, or cohort frequency. We scale with you so cost tracks usage, not fixed headcount.",
    highlights: [
      "Multiple domains and cohorts",
      "LMS, analytics, certifications",
      "Legal, HR, finance as needed",
      "Dedicated ops contact",
    ],
    ctaLabel: "Get a quote",
  },
  {
    id: "scale",
    name: "Scale",
    description: "Established EdTechs running many programs and learners. Enterprise-grade operations, SLAs, and integrated legal, HR, and tech.",
    highlights: [
      "High volume, multi-domain",
      "SLAs and reporting",
      "Full stack: delivery + legal + HR + finance",
      "Custom workflows",
    ],
    ctaLabel: "Get a quote",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Large EdTechs and institutions with complex requirements, multiple brands, or global delivery. Bespoke engagement and dedicated teams.",
    highlights: [
      "Multi-brand or institution-wide",
      "Dedicated delivery and support",
      "Custom integrations and compliance",
      "Strategic partnership",
    ],
    ctaLabel: "Contact us",
  },
] as const;

export const pricingFaq = {
  title: "Common questions",
  items: [
    {
      q: "Is there a minimum commitment?",
      a: "It depends on your tier. Startups often start with a single cohort or domain; scale and enterprise engagements typically have longer terms. We'll outline options when we talk.",
    },
    {
      q: "What's included in the quote?",
      a: "We scope based on your domains, cohort frequency, and which services you need (delivery only, or delivery + legal, HR, finance, tech). You get a clear proposal before you commit.",
    },
    {
      q: "Can we change tiers as we grow?",
      a: "Yes. Many partners start in Startup or Growth and move to Scale or Enterprise as they add programs and learners. We design for that path.",
    },
    {
      q: "How do you price when scope changes mid-way?",
      a: "We keep scope transparent. If you add programs, cohorts, domains, or extra services, we revise the engagement with clear deltas so you stay in control.",
    },
    {
      q: "Do you offer SLAs for larger partners?",
      a: "Yes. Scale and enterprise engagements can include SLAs, escalation paths, and reporting rhythms depending on your requirements.",
    },
  ],
} as const;

export const pricingCta = {
  title: "Not sure which tier fits?",
  description: "Tell us about your company and goals. We'll recommend a fit and share next steps.",
  buttonText: "Get in touch",
  buttonHref: "/contact",
} as const;
