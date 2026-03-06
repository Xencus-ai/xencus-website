/**
 * About Us page: who we are, mission, and values.
 */

export const aboutHero = {
  label: "About us",
  title: "The operations backbone for scalable EdTech",
  subtitle:
    "We exist so EdTech companies can focus on product and growth instead of building and running delivery, legal, HR, and tech in-house. We run the operations—you lead the students.",
} as const;

export const aboutMission = {
  title: "Our mission",
  description:
    "To make high-quality, scalable learning delivery accessible to every EdTech—from first cohort to global programs. We do that by being the single partner that handles operations, compliance, and support so founders and L&D leaders can focus on what only they can do: build the product and grow the business.",
} as const;

export const aboutValues = [
  {
    id: "quality",
    title: "Quality at scale",
    description: "One classroom per domain across partners—no duplicate batches, no diluted quality. We maintain standards whether you run one cohort or hundreds.",
  },
  {
    id: "brand-first",
    title: "Your brand, our execution",
    description: "Learners see your brand, your curriculum, your certificates. We stay behind the scenes so your identity stays front and center.",
  },
  {
    id: "speed",
    title: "Ship fast",
    description: "Weeks to first cohort, not months. We align quickly, plug into your stack, and go live so you can validate and scale without long procurement cycles.",
  },
  {
    id: "partnership",
    title: "Partnership over vendor",
    description: "We grow with you. Our success is tied to your outcomes—so we're invested in your delivery quality, learner success, and long-term scale.",
  },
] as const;

export const aboutStats = [
  { value: "2–3 weeks", label: "To first cohort live" },
  { value: "1000s", label: "Learners certified" },
  { value: "Multi-domain", label: "Tech, data, design, management & more" },
] as const;

export const aboutCta = {
  title: "Ready to scale delivery?",
  description: "Whether you're launching your first program or scaling to dozens of cohorts, we're here to help.",
  buttonText: "Talk to us",
  buttonHref: "/contact",
} as const;
