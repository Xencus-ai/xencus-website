/**
 * Site-wide copy: CTAs, legal links, and shared labels.
 */

export const site = {
  ctaTalkToUs: "Talk to us",
  ctaBookDemo: "Book a demo",
  legal: {
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
} as const;

/**
 * CTA block: "Want to know how we can help" + search bar + Book a demo.
 */
export const ctaBlock = {
  heading: "Want to know how we can help your business?",
  searchPlaceholder: "Tell us what you're looking for...",
} as const;
