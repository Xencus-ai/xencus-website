/**
 * Structured data (JSON-LD) schemas for the entire site.
 *
 * Keeping schemas here — rather than inline in page/layout files — means:
 * - Page files stay focused on rendering concerns
 * - Schemas are discoverable, testable, and editable in one place
 * - SITE_NAME / BASE_URL changes propagate automatically
 */

import { BASE_URL, SITE_NAME, SITE_DESCRIPTION, SITE_TAGLINE } from "./constants";

// ---------------------------------------------------------------------------
// Global schemas (used in root layout)
// ---------------------------------------------------------------------------

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: `${SITE_NAME} — ${SITE_TAGLINE}`,
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/Assets/xencus-logo.svg`,
      caption: SITE_NAME,
    },
    description: SITE_DESCRIPTION,
    areaServed: ["IN", "SG", "AE", "US"],
    sameAs: [
      "https://www.linkedin.com/company/xencus/",
      "https://www.instagram.com/xencus_tech",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9610352015",
      email: "hr@xencus.com",
      contactType: "customer service",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "BHIVE Workspace - No.112, AKR Tech Park, B Block, 7th Mile Hosur Rd, Kudlu Gate",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560068",
      addressCountry: "IN",
    },
    knowsAbout: [
      "EdTech Operations",
      "Online Learning Management",
      "Corporate Training",
      "Certificate Generation",
      "Curriculum Design",
      "Live Cohort Delivery",
    ],
  } as const;
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: BASE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/contact`,
      },
      "query-input": "required name=search_term_string",
    },
  } as const;
}

// ---------------------------------------------------------------------------
// Homepage schemas
// ---------------------------------------------------------------------------

export function getHomepageServiceListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE_NAME} Services`,
    description: SITE_DESCRIPTION,
    url: BASE_URL,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "EdTech Operations",
        url: `${BASE_URL}/services/edtech-companies`,
        description:
          "End-to-end operations for EdTech companies—curriculum, trainer networks, live cohort delivery, LMS management, analytics, and certifications.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Corporate L&D",
        url: `${BASE_URL}/services/corporate-ld`,
        description:
          "Curated mentors and domain experts to upskill employees on the latest technologies.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Universities & Training Institutions",
        url: `${BASE_URL}/services/universities-training-institutions`,
        description:
          "Domain-specific trainers who run programs so students learn from industry practitioners.",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "EdTech Legal Services",
        url: `${BASE_URL}/services/edtech-legal-services`,
        description:
          "Corporate lawyers who understand EdTech for contracts, compliance, and legal advisory.",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "HR Services for EdTech",
        url: `${BASE_URL}/services/hr-services-for-edtech`,
        description:
          "HR specialists who handle hiring, onboarding, and workforce operations for EdTech teams.",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Finance Solutions for EdTech",
        url: `${BASE_URL}/services/finance-solutions-for-edtech`,
        description:
          "CAs and finance experts who manage taxation, compliance, and financial reporting.",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Technical Services for EdTech",
        url: `${BASE_URL}/services/technical/digital-marketing`,
        description:
          "Growth and product stack—performance marketing, design, web, and app development.",
      },
    ],
  } as const;
}

// ---------------------------------------------------------------------------
// /services/edtech-companies schemas
// ---------------------------------------------------------------------------

export function getEdtechServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "EdTech Operations & Delivery",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
    },
    serviceType: "EdTech Operations Management",
    description:
      "End-to-end operations for EdTech companies: curriculum design, trainer networks, live cohort delivery, LMS management, learner analytics, and certificate generation—delivered under your brand.",
    areaServed: ["IN", "SG", "AE", "US"],
    url: `${BASE_URL}/services/edtech-companies`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "EdTech Operations Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Program Design & Planning" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Trainer & Mentor Network" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Live Cohort Delivery" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "LMS & Course Operations" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Learner & Cohort Analytics" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Certification & Proof of Skill" },
        },
      ],
    },
  } as const;
}

export function getEdtechFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you work with early-stage EdTechs or only large ones?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both. We partner with early-stage teams that are just setting up their first domains, and with scaled players running dozens of cohorts at once. We design the operating model based on your current volume and where you want to be in 12–18 months.",
        },
      },
      {
        "@type": "Question",
        name: "Which tools and platforms do you plug into?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We typically host live classes on Zoom or Google Meet and work with your existing LMS, CRM, and payment stack. If you don't have tooling in place yet, we'll recommend a simple setup based on your volumes.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to go live with Xencus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For a single domain, we can usually go live within 2–3 weeks once we've aligned on curriculum, outcomes, and tools. For larger multi-domain setups, we phase the rollout so you see value in the first month.",
        },
      },
      {
        "@type": "Question",
        name: "Will learners know that Xencus is running the operations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. From the learner's point of view everything stays under your brand—your website, your emails, your certificates. Xencus operates as the invisible backbone so your brand remains front and center.",
        },
      },
    ],
  } as const;
}
