/**
 * Footer link groups and labels.
 */

export const footerLinks = {
  services: {
    title: "Services",
    items: [
      { label: "EdTech Companies", href: "/services/edtech-companies" },
      { label: "Corporate L&D", href: "/services/corporate-ld" },
      { label: "Universities & Training Institutions", href: "/services/universities-training-institutions" },
    ],
  },
  solutions: {
    title: "Solutions",
    items: [
      { label: "EdTech Legal Services", href: "/services/edtech-legal-services" },
      { label: "HR Services for EdTech", href: "/services/hr-services-for-edtech" },
      { label: "Finance Solutions for EdTech", href: "/services/finance-solutions-for-edtech" },
    ],
  },
  company: {
    title: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
} as const;
