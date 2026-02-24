export type OtherService = {
  id: string;
  label: string;
  description: string;
  href: string;
  illustration: string;
  bullets: { id: string; title: string }[];
};

export const otherServices: OtherService[] = [
  {
    id: "corporate-ld",
    label: "Corporate L&D",
    description:
      "We arrange mentors and domain experts to upskill your employees on the latest technologies and in-demand skills.",
    href: "/services/corporate-ld",
    illustration: "/Assets/service/corporate.svg",
    bullets: [
      { id: "mentors", title: "Curated mentors for each tech stack" },
      { id: "programs", title: "Role-based learning journeys and cohorts" },
      { id: "reporting", title: "Progress reports back to L&D and leaders" },
    ],
  },
  {
    id: "universities-training",
    label: "Universities & Training Institutions",
    description:
      "We provide trainers who run domain-specific programs so your students learn directly from industry practitioners.",
    href: "/services/universities-training-institutions",
    illustration: "/Assets/service/university.svg",
    bullets: [
      { id: "domains", title: "Domain-wise trainers across technologies" },
      { id: "labs", title: "Hands-on labs, projects, and assessments" },
      { id: "industry", title: "Industry-aligned curricula and sessions" },
    ],
  },
  {
    id: "edtech-legal",
    label: "EdTech Legal Services",
    description:
      "We connect you with corporate lawyers who understand EdTech so contracts and compliance are handled end to end.",
    href: "/services/edtech-legal-services",
    illustration: "/Assets/service/legal.svg",
    bullets: [
      { id: "contracts", title: "Drafting and reviewing contracts and policies" },
      { id: "compliance", title: "Compliance for learners, partners, and data" },
      { id: "advice", title: "Ongoing legal advisory as you scale" },
    ],
  },
  {
    id: "hr-edtech",
    label: "HR Services for EdTech",
    description:
      "We provide HR specialists who handle hiring, onboarding, and workforce operations for EdTech teams.",
    href: "/services/hr-services-for-edtech",
    illustration: "/Assets/service/hr.svg",
    bullets: [
      { id: "hiring", title: "Sourcing and screening talent by role" },
      { id: "ops", title: "End-to-end workforce operations and support" },
      { id: "policies", title: "HR policies tuned for modern EdTech teams" },
    ],
  },
  {
    id: "finance-edtech",
    label: "Finance Solutions for EdTech",
    description:
      "We work with CAs and finance experts who manage your taxation, compliance, and financial reporting.",
    href: "/services/finance-solutions-for-edtech",
    illustration: "/Assets/service/finance.svg",
    bullets: [
      { id: "tax", title: "Tax filings and statutory compliance" },
      { id: "books", title: "Day-to-day bookkeeping and reconciliations" },
      { id: "insights", title: "Simple dashboards for financial health" },
    ],
  },
  {
    id: "technical-services",
    label: "Technical Services for EdTech",
    description:
      "We run your growth and product stack—from marketing to design to web and app development.",
    href: "/services/technical/digital-marketing",
    illustration: "/Assets/service/technology.svg",
    bullets: [
      { id: "marketing", title: "Performance marketing and campaign management" },
      { id: "design", title: "Brand, graphic, and creative design support" },
      { id: "product", title: "Websites and mobile apps built for EdTech" },
    ],
  },
];

