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
      { label: "EdTech Companies", href: "#" },
      { label: "Corporate L&D", href: "#" },
      { label: "Coaching & Training Institutes", href: "#" },
      { label: "Universities & Institutions", href: "#" },
    ],
  },
  column2: {
    title: null,
    items: [
      { label: "EdTech Legal Services", href: "#" },
      { label: "HR Services for EdTech", href: "#" },
      { label: "Finance Solutions for EdTech", href: "#" },
    ],
  },
  column3: {
    title: "Technical Services",
    items: [
      { label: "Digital Marketing", href: "#" },
      { label: "Graphic Designing", href: "#" },
      { label: "Website Designing", href: "#" },
    ],
  },
} as const;
