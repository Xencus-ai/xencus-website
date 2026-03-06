/**
 * EdTech partners page: additional sections for partners (getting started,
 * integrations, case study, metrics, testimonials, CTA).
 */

export const edtechGettingStarted = {
  label: "How we work with you",
  title: "Getting started",
  description:
    "We align on your curriculum and tools, then go live in weeks—not months. No long RFPs or custom builds.",
  steps: [
    { step: 1, title: "Discovery call", text: "We understand your domains, outcomes, and current tooling." },
    { step: 2, title: "Curriculum & tools", text: "Align on modules, milestones, and LMS/meet stack." },
    { step: 3, title: "Go live in 2–3 weeks", text: "First cohort runs with trainers and ops in place." },
    { step: 4, title: "Scale", text: "Add domains and cohorts as you grow." },
  ],
  image: { src: "/Assets/edutech/live-class.avif", alt: "Team planning and delivery" },
} as const;

export const edtechYouBringWeBring = {
  label: "Clear roles",
  title: "What you bring vs what we bring",
  youBring: [
    "Your brand and positioning",
    "Curriculum outline and learning outcomes",
    "Tools (LMS, CRM, payments) or we recommend",
    "Go-to-market and sales",
  ],
  weBring: [
    "End-to-end delivery and trainer network",
    "Live classes, recordings, and doubt sessions",
    "LMS ops, white-label or your instance",
    "Analytics, completion, and certificates",
  ],
  engagementNote: "Flexible engagement—per cohort, retainer, or hybrid. We fit your stage.",
  image: { src: "/Assets/edutech/course.png", alt: "Course and operations" },
} as const;

export const edtechIntegrations = {
  label: "Integrations & tech",
  title: "Works with your stack",
  description:
    "We plug into the tools you already use so you don't rip and replace. Add or change tools as you scale.",
  stack: [
    "Zoom & Google Meet",
    "Moodle, Canvas, LearnDash, or your LMS",
    "CRM (HubSpot, Salesforce, etc.)",
    "Payments (Razorpay, Stripe, etc.)",
  ],
  security: [
    "Learner data handled per your policy and region",
    "No learner data used for our own marketing",
    "Access controls and audit-friendly setup",
  ],
  image: { src: "/Assets/edutech/analytics.png", alt: "Integrations and reporting" },
} as const;

export const edtechWhyPartner = {
  label: "Why partner",
  title: "Partner with Xencus vs build in-house",
  description:
    "Scaling delivery is hard. We give you a proven operations layer so you focus on product and growth.",
  comparison: [
    { inHouse: "Months to hire and train ops", partner: "Weeks to first cohort" },
    { inHouse: "Fixed cost of full-time team", partner: "Scale cost with cohorts" },
    { inHouse: "Single geography or time zone", partner: "Multi-domain, multi-trainer network" },
  ],
  image: { src: "/Assets/edutech/edutech-hero.avif", alt: "EdTech operations" },
} as const;

export const edtechDomains = {
  label: "Domains we run",
  title: "From tech to management",
  description:
    "We run live cohorts across the domains EdTechs sell most—so you can launch new programs without building delivery from scratch.",
  domains: [
    "Tech & programming",
    "Data science & analytics",
    "Design (UI/UX, graphic)",
    "Management & HR",
    "Finance & business",
    "Marketing & growth",
  ],
  image: { src: "/Assets/upcomingclasse/upcomingClass.avif", alt: "Cohorts and domains" },
} as const;

export const edtechCaseStudy = {
  label: "Success story",
  title: "How we helped an EdTech scale delivery",
  quote:
    "We went from running 2 cohorts a quarter to 20 without hiring a single ops person. Xencus runs the entire backend—trainers, live classes, LMS, certificates—so we focus on product and sales.",
  author: "EdTech founder",
  role: "Operations & growth",
  outcome: "2 → 20 cohorts per quarter in 12 months",
  image: { src: "/Assets/edutech/live-class.avif", alt: "Success and scale" },
} as const;

export const edtechMetrics = {
  label: "Outcomes",
  title: "What partners see",
  description: "Representative outcomes from EdTechs we run operations for.",
  metrics: [
    { value: "2–3 weeks", label: "To first cohort live" },
    { value: "50%+", label: "Less ops time vs in-house" },
    { value: "1000s", label: "Learners certified" },
  ],
  image: { src: "/Assets/edutech/analytics.png", alt: "Metrics and outcomes" },
} as const;

export const edtechTrustedBy = {
  label: "Trusted by",
  title: "EdTechs we run operations for",
  description: "We work with growing EdTech brands across India and beyond.",
  logoPlaceholder: "Partner logos (add when approved)",
  image: { src: "/Assets/edutech/course.png", alt: "Partners" },
} as const;

export const edtechTestimonials = {
  label: "What partners say",
  title: "EdTech leaders on working with Xencus",
  items: [
    {
      quote: "They took over our entire delivery—live classes, LMS, certificates. We just focus on acquisition now.",
      author: "Head of Product",
      company: "EdTech, upskilling",
    },
    {
      quote: "We needed to scale to 5 domains in 6 months. Xencus had trainers and ops ready. No way we could have built that in-house in time.",
      author: "Founder",
      company: "Learning platform",
    },
  ],
  image: { src: "/Assets/edutech/edutech-hero.avif", alt: "Testimonials" },
} as const;

export const edtechCta = {
  label: "Next step",
  title: "Ready to run your first cohort with us?",
  description: "Book a 30-minute discovery call. We'll align on your domains, outcomes, and timeline—no commitment.",
  buttonText: "Book a discovery call",
  buttonHref: "/contact",
  image: { src: "/Assets/upcomingclasse/upcomingClass.avif", alt: "Get started" },
} as const;
