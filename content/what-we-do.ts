/**
 * What We Do section: full EdTech operations (except sales).
 * One classroom per domain across partner companies.
 * Add illustration path (e.g. "/Assets/what-we-do/1.svg") when you have the asset.
 */

export const whatWeDo = {
  titleBefore: "What We ",
  titleHighlight: "Do",
  titleAfter: "",
  subtitle:
    "We run the complete operations of an EdTech so you can focus on sales and brand. From curriculum to live classes to projects and quizzes—we run it all. You sell.",
  twistHeading: "One classroom per domain",
  twistDescription:
    "When multiple EdTech companies use our services, we host one live class per domain. Students who bought that domain from any partner join the same cohort. No duplicate batches, no wasted capacity—consistent quality at scale.",
  items: [
    {
      id: "curriculum",
      title: "Course curriculum",
      description:
        "We design and maintain course curricula for each domain so every cohort follows a clear, industry-aligned learning path.",
      illustration: "/Assets/what-we-do/1.svg",
      illustrationPosition: "right",
    },
    {
      id: "trainers",
      title: "Trainer sourcing",
      description:
        "We source and onboard expert trainers by domain so your learners get industry practitioners without you managing recruitment.",
      illustration: "/Assets/what-we-do/2.svg",
      illustrationPosition: "left",
    },
    {
      id: "scheduling",
      title: "Class scheduling",
      description:
        "We schedule live classes across domains and cohorts so calendars, sessions, and reminders run from one place.",
      illustration: "/Assets/what-we-do/3.svg",
      illustrationPosition: "right",
    },
    {
      id: "projects",
      title: "Hands-on projects",
      description:
        "We provide domain-specific projects after course completion so students apply what they learned in real-world scenarios.",
      illustration: "/Assets/what-we-do/4.svg",
      illustrationPosition: "left",
    },
    {
      id: "quizzes",
      title: "Quizzes and practice",
      description:
        "We create and run quizzes and practice exercises per domain so learners get hands-on reinforcement throughout the course.",
      illustration: "/Assets/what-we-do/5.svg",
      illustrationPosition: "right",
    },
    {
      id: "certifications",
      title: "Certifications & completion",
      description:
        "We support completion tracking and certification workflows so learners get recognized credentials and you maintain a clear record of outcomes.",
      illustration: "/Assets/what-we-do/6.svg",
      illustrationPosition: "left",
    },
  ],
} as const;
