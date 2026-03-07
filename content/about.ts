/**
 * About Us page: who we are, mission, and values.
 */

export const aboutHero = {
  label: "About us",
  title: "The operations backbone behind scalable EdTech",
  subtitle:
    "Xencus exists so education businesses can focus on product, learners, and growth instead of building and maintaining large delivery, legal, HR, finance, and technology teams in-house.",
} as const;

export const aboutMission = {
  title: "Our mission",
  description:
    "Our mission is to make reliable, scalable learning delivery accessible to every EdTech organisation—from the first cohort to mature, multi-program portfolios. We do this by becoming the single partner that runs operations, compliance, and support, so founders and L&D leaders can focus on strategy and outcomes.",
} as const;

export const aboutWhatWeDo = {
  title: "What we actually do",
  subtitle:
    "Xencus is built to run the work that leaders cannot afford to get wrong: delivery quality, reliability, and the operational details that protect your brand in front of learners and partners.",
  items: [
    {
      title: "Run delivery operations",
      description:
        "Curriculum structure, trainer coordination, live sessions, recordings, projects, assessments, certificates, and learner reporting—delivered under your brand.",
    },
    {
      title: "Bring specialised business services",
      description:
        "Legal, HR, finance, and technical services that support growth while keeping the operating model consistent and manageable.",
    },
    {
      title: "Create predictable execution",
      description:
        "Clear ownership, timelines, weekly reporting, and continuity practices so internal stakeholders can rely on us in the same way they rely on their own teams.",
    },
  ],
} as const;

export const aboutValues = [
  {
    id: "quality",
    title: "Quality at scale",
    description:
      "One classroom per domain across partners—no unnecessary duplicate batches, no diluted quality. We maintain standards whether you run a single cohort or many cohorts in parallel.",
  },
  {
    id: "brand-first",
    title: "Your brand, our execution",
    description:
      "Learners see your brand, your curriculum, and your certificates. We operate behind the scenes, so your identity remains at the centre of every interaction.",
  },
  {
    id: "speed",
    title: "Ship fast",
    description:
      "Weeks to first cohort, not months. We align quickly, plug into your stack, and go live so you can validate, learn, and scale without long implementation cycles.",
  },
  {
    id: "partnership",
    title: "Partnership over vendor",
    description:
      "We grow with you. Our success is tied to your outcomes, so we are invested in delivery quality, learner success, and long-term scalability—not just short-term projects.",
  },
] as const;

export const aboutStats = [
  { value: "2–3 weeks", label: "From alignment to first live cohort" },
  { value: "1000s", label: "Learners taught and certified across partners" },
  { value: "Multi-domain", label: "Technology, data, design, management, and more" },
] as const;

export const aboutCta = {
  title: "Ready to scale delivery?",
  description:
    "Whether you are launching your first program or managing dozens of cohorts, we can help you build a delivery layer you can trust.",
  buttonText: "Talk to us",
  buttonHref: "/contact",
} as const;
