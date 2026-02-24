/**
 * Navigation and Services mega menu: labels, links, and structure.
 */

export const mainNav = [
  { label: "Services", href: "#services", hasMega: true },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "#about" },
] as const;

export const servicesMegaMenu = {
  column1: {
    title: null,
    items: [
      { label: "EdTech Companies", href: "/services/edtech-companies" },
      { label: "Corporate L&D", href: "/services/corporate-ld" },
      { label: "Universities & Training Institutions", href: "/services/universities-training-institutions" },
    ],
  },
  column2: {
    title: null,
    items: [
      { label: "EdTech Legal Services", href: "/services/edtech-legal-services" },
      { label: "HR Services for EdTech", href: "/services/hr-services-for-edtech" },
      { label: "Finance Solutions for EdTech", href: "/services/finance-solutions-for-edtech" },
    ],
  },
  column3: {
    title: "Technical Services",
    items: [
      { label: "Digital Marketing", href: "/services/technical/digital-marketing" },
      { label: "Graphic Designing", href: "/services/technical/graphic-designing" },
      { label: "Website Designing", href: "/services/technical/website-designing" },
      { label: "Mobile App Development", href: "/services/technical/mobile-app-development" },
    ],
  },
} as const;
