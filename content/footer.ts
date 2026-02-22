/**
 * Footer link groups and labels.
 */

export const footerLinks = {
  services: {
    title: "Services",
    items: [
      { label: "EdTech Companies", href: "#" },
      { label: "Corporate L&D", href: "#" },
      { label: "Coaching & Training", href: "#" },
      { label: "Universities & Institutions", href: "#" },
    ],
  },
  solutions: {
    title: "Solutions",
    items: [
      { label: "Legal Services", href: "#" },
      { label: "HR for EdTech", href: "#" },
      { label: "Finance Solutions", href: "#" },
    ],
  },
  company: {
    title: "Company",
    items: [
      { label: "About Us", href: "#about" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ],
  },
} as const;
