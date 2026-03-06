/**
 * Service pages (non-EdTech): copy and structure only.
 *
 * These routes are linked from the mega menu and homepage "Other services".
 */

export type ServiceFaqItem = { q: string; a: string };

export type ServicePageContent = {
  slug: string;
  label: string;
  title: string;
  subtitle: string;
  icon: { src: string; alt: string };
  heroImage: { src: string; alt: string };
  outcomes: { title: string; description: string }[];
  howItWorks: { step: number; title: string; text: string }[];
  faq: { title: string; items: ServiceFaqItem[] };
  cta: { title: string; description: string; buttonText: string; buttonHref: string };
};

const sharedHeroImage = {
  src: "/Assets/edutech/edutech-hero.avif",
  alt: "Operations and delivery support for education businesses",
} as const;

export const corporateLdPage: ServicePageContent = {
  slug: "/services/corporate-ld",
  label: "Corporate L&D",
  title: "Upskilling programs, delivered end-to-end",
  subtitle:
    "Design, run, and track cohort-based learning for employees—without building a delivery team in-house. We handle trainers, sessions, content ops, and reporting while you lead L&D strategy.",
  icon: { src: "/Assets/service/corporate.svg", alt: "Corporate learning icon" },
  heroImage: sharedHeroImage,
  outcomes: [
    {
      title: "Role-based cohorts",
      description:
        "Structured learning journeys per role or tech stack with calendars, reminders, and completion tracking.",
    },
    {
      title: "Domain experts & mentors",
      description:
        "Curated trainers who can teach and mentor—plus backups so programs keep running smoothly.",
    },
    {
      title: "Reporting that leaders use",
      description:
        "Attendance, progress, and completion reports you can share with business heads and HR.",
    },
  ],
  howItWorks: [
    { step: 1, title: "Align outcomes", text: "We map roles, skills, timelines, and success metrics." },
    { step: 2, title: "Run cohorts", text: "We schedule sessions, manage trainers, and run delivery ops." },
    { step: 3, title: "Track impact", text: "We share reporting and iterate on cohorts for measurable outcomes." },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Do you work with our internal LMS?",
        a: "Yes. We can plug into your existing LMS and reporting flow, or recommend a simple setup if you’re starting fresh.",
      },
      {
        q: "Can you run programs across multiple time zones?",
        a: "Yes. We build the trainer plan and schedule across geographies and keep the ops layer consistent.",
      },
      {
        q: "Is this only for tech teams?",
        a: "No. We support tech, data, design, management, and other functional upskilling tracks based on your needs.",
      },
    ],
  },
  cta: {
    title: "Want to run cohorts without the ops headache?",
    description: "Tell us your teams, skills, and timelines—we’ll propose a program plan and engagement model.",
    buttonText: "Talk to us",
    buttonHref: "/contact",
  },
} as const;

export const universitiesPage: ServicePageContent = {
  slug: "/services/universities-training-institutions",
  label: "Universities & Training Institutions",
  title: "Industry-led programs for students—at scale",
  subtitle:
    "Expand domains and delivery capacity without hiring a large training team. We bring trainers, projects, assessments, and operations so students learn from practitioners with consistent quality.",
  icon: { src: "/Assets/service/university.svg", alt: "University icon" },
  heroImage: sharedHeroImage,
  outcomes: [
    {
      title: "More domains, faster",
      description:
        "Launch new programs without waiting for hiring cycles—add trainers per domain as you expand.",
    },
    {
      title: "Hands-on learning",
      description:
        "Projects, labs, and assessments designed to build real skills and portfolio-ready outcomes.",
    },
    {
      title: "Reliable delivery operations",
      description:
        "Scheduling, coordination, recordings, and progress tracking—so programs run without disruption.",
    },
  ],
  howItWorks: [
    { step: 1, title: "Scope programs", text: "We align on domains, curriculum outline, and academic calendar." },
    { step: 2, title: "Deploy trainers", text: "We assign industry trainers and set up sessions and assessments." },
    { step: 3, title: "Run & report", text: "We manage delivery ops and share student progress and completion data." },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Can you align with our university curriculum?",
        a: "Yes. We map our delivery to your curriculum and add hands-on components that improve outcomes.",
      },
      {
        q: "Do you provide assessments and grading support?",
        a: "Yes. We can run quizzes, assignments, rubrics, and grading workflows depending on your program.",
      },
      {
        q: "Can you support multiple campuses?",
        a: "Yes. We can run multi-campus delivery with a consistent operating model and reporting.",
      },
    ],
  },
  cta: {
    title: "Looking to expand programs this semester?",
    description: "Share your domains and calendar—we’ll propose a delivery and trainer plan.",
    buttonText: "Talk to us",
    buttonHref: "/contact",
  },
} as const;

export const legalServicesPage: ServicePageContent = {
  slug: "/services/edtech-legal-services",
  label: "EdTech Legal Services",
  title: "Legal support built for EdTech operations",
  subtitle:
    "Contracts, compliance, and ongoing advisory so you scale cohorts and partnerships confidently. We help remove legal bottlenecks from growth and delivery.",
  icon: { src: "/Assets/service/legal.svg", alt: "Legal icon" },
  heroImage: sharedHeroImage,
  outcomes: [
    {
      title: "Faster partnerships",
      description:
        "Clean, review-ready contracts for trainers, institutions, enterprise clients, and vendors.",
    },
    {
      title: "Compliance confidence",
      description:
        "Policy and documentation support tuned to how EdTechs run programs, cohorts, and learner data.",
    },
    {
      title: "Ongoing advisory",
      description:
        "Practical guidance as you expand domains, geographies, and delivery models.",
    },
  ],
  howItWorks: [
    { step: 1, title: "Understand your model", text: "We map your business, delivery, and partner workflows." },
    { step: 2, title: "Draft & review", text: "We prepare and review documents with clear, business-friendly language." },
    { step: 3, title: "Operate safely", text: "We support ongoing changes as you scale and evolve." },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "What kinds of documents do you handle?",
        a: "Commonly: trainer agreements, vendor contracts, client/MSA/SOW, policies, and compliance documentation.",
      },
      {
        q: "Do you work with in-house legal teams?",
        a: "Yes. We can support your legal team with drafting, review, and ops-aligned inputs.",
      },
      {
        q: "Can you handle urgent reviews?",
        a: "Yes. We can prioritise urgent items based on your business timelines.",
      },
    ],
  },
  cta: {
    title: "Need a legal partner who understands EdTech?",
    description: "Tell us what you’re launching—cohorts, partnerships, or enterprise deals—and we’ll help you move faster.",
    buttonText: "Talk to us",
    buttonHref: "/contact",
  },
} as const;

export const hrServicesPage: ServicePageContent = {
  slug: "/services/hr-services-for-edtech",
  label: "HR Services for EdTech",
  title: "Hiring and people ops—without building a full HR team",
  subtitle:
    "We help you hire, onboard, and support teams that run education businesses: trainers, ops, support, marketing, and more—plus the policies and processes to scale smoothly.",
  icon: { src: "/Assets/service/hr.svg", alt: "HR icon" },
  heroImage: sharedHeroImage,
  outcomes: [
    {
      title: "Faster hiring cycles",
      description:
        "Sourcing and screening aligned to EdTech roles so you build teams without slow pipelines.",
    },
    {
      title: "Clean onboarding",
      description:
        "Structured onboarding so teams become productive quickly and delivery doesn’t suffer.",
    },
    {
      title: "Scalable HR ops",
      description:
        "Policies, templates, and people workflows tuned for modern EdTech teams and contractors.",
    },
  ],
  howItWorks: [
    { step: 1, title: "Define roles", text: "We align on roles, scorecards, and hiring timelines." },
    { step: 2, title: "Build pipeline", text: "We source, screen, and coordinate interviews." },
    { step: 3, title: "Operate", text: "We support onboarding and people ops as you scale." },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Do you hire trainers as well as full-time roles?",
        a: "Yes. We support both contractor/trainer hiring and full-time hiring depending on your model.",
      },
      {
        q: "Can you help set up HR policies and documents?",
        a: "Yes. We can provide HR policy templates and tune them to your team and delivery model.",
      },
      {
        q: "Do you handle ongoing HR operations?",
        a: "Yes. We can run ongoing people ops support depending on your engagement scope.",
      },
    ],
  },
  cta: {
    title: "Want HR that scales with delivery?",
    description: "Share the roles you’re hiring for and your growth plan—we’ll propose the right engagement.",
    buttonText: "Talk to us",
    buttonHref: "/contact",
  },
} as const;

export const financeSolutionsPage: ServicePageContent = {
  slug: "/services/finance-solutions-for-edtech",
  label: "Finance Solutions for EdTech",
  title: "Finance ops that keep up with cohorts and subscriptions",
  subtitle:
    "From bookkeeping to compliance to reporting, we help EdTech teams stay on top of finances so founders can focus on product and growth—not spreadsheets and filings.",
  icon: { src: "/Assets/service/finance.svg", alt: "Finance icon" },
  heroImage: sharedHeroImage,
  outcomes: [
    {
      title: "Compliance done right",
      description:
        "Regular filings and statutory compliance support so you avoid surprises as you scale.",
    },
    {
      title: "Clean books",
      description:
        "Bookkeeping and reconciliations that match how education revenue works—cohorts, instalments, subscriptions.",
    },
    {
      title: "Founder-ready reporting",
      description:
        "Simple reporting to track financial health and plan growth confidently.",
    },
  ],
  howItWorks: [
    { step: 1, title: "Assess current state", text: "We map revenue flows, tools, and compliance requirements." },
    { step: 2, title: "Run finance ops", text: "We manage books, reconciliations, and filings on schedule." },
    { step: 3, title: "Report and improve", text: "We provide dashboards and recommendations as you scale." },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Do you support startups as well as large EdTechs?",
        a: "Yes. We tailor the engagement based on volume and complexity—start lean and scale up over time.",
      },
      {
        q: "Do you work with our existing CA or finance team?",
        a: "Yes. We can complement your existing team or run the entire finance ops based on what you need.",
      },
      {
        q: "Can you create finance reporting for leadership?",
        a: "Yes. We provide clean reporting that leaders can use to make decisions quickly.",
      },
    ],
  },
  cta: {
    title: "Want finance clarity without overhead?",
    description: "Tell us your revenue model and tools—we’ll propose a finance ops plan.",
    buttonText: "Talk to us",
    buttonHref: "/contact",
  },
} as const;

export const digitalMarketingPage: ServicePageContent = {
  slug: "/services/technical/digital-marketing",
  label: "Digital Marketing",
  title: "Performance marketing for education growth",
  subtitle:
    "Campaign planning, creatives, landing pages, and reporting—so you grow efficiently without assembling a full in-house marketing org.",
  icon: { src: "/Assets/service/technology.svg", alt: "Technology icon" },
  heroImage: sharedHeroImage,
  outcomes: [
    { title: "Campaign strategy", description: "Clear channel strategy aligned to your programs, cohorts, and CAC targets." },
    { title: "Creative production", description: "Ad creatives, landing pages, and iteration loops that improve conversion." },
    { title: "Reporting & optimisation", description: "Transparent reporting so spend maps to pipeline and outcomes." },
  ],
  howItWorks: [
    { step: 1, title: "Audit & plan", text: "We align your goals, audience, and funnel tracking." },
    { step: 2, title: "Launch & iterate", text: "We run experiments, scale winners, and fix leaks." },
    { step: 3, title: "Report", text: "Weekly reporting with clear next actions." },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      { q: "Do you handle creatives as well?", a: "Yes. We can support design/creative alongside campaign management." },
      { q: "Can you work with our internal team?", a: "Yes. We can run execution or partner with your team." },
      { q: "Do you set up tracking?", a: "Yes. We help set up tracking and reporting so you see real ROI." },
    ],
  },
  cta: {
    title: "Want to improve your growth engine?",
    description: "Tell us your programs and goals—we’ll propose a performance plan.",
    buttonText: "Talk to us",
    buttonHref: "/contact",
  },
} as const;

export const graphicDesignPage: ServicePageContent = {
  slug: "/services/technical/graphic-designing",
  label: "Graphic Designing",
  title: "Design support for brand and conversion",
  subtitle:
    "Brand assets, marketing creatives, and course visuals—fast turnaround with consistent quality, so your team ships without bottlenecks.",
  icon: { src: "/Assets/service/technology.svg", alt: "Technology icon" },
  heroImage: sharedHeroImage,
  outcomes: [
    { title: "Brand consistency", description: "A single visual system across ads, social, decks, and course assets." },
    { title: "Fast creative cycles", description: "Rapid design iterations so campaigns and launches don’t stall." },
    { title: "Conversion-first visuals", description: "Design tuned for performance and clarity—not just aesthetics." },
  ],
  howItWorks: [
    { step: 1, title: "Brief", text: "We align on brand and use-cases (ads, decks, course assets)." },
    { step: 2, title: "Design", text: "We produce designs and iterate quickly with your feedback." },
    { step: 3, title: "Systemise", text: "We build templates so your team ships faster over time." },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      { q: "Can you work with our brand guidelines?", a: "Yes. We follow your brand system and extend it when needed." },
      { q: "Do you create templates?", a: "Yes. We can create reusable templates for speed and consistency." },
      { q: "Is this monthly or per project?", a: "Both options are possible depending on your volume." },
    ],
  },
  cta: {
    title: "Need design support that keeps up?",
    description: "Tell us your creative needs and timelines—we’ll suggest the right engagement.",
    buttonText: "Talk to us",
    buttonHref: "/contact",
  },
} as const;

export const websiteDesignPage: ServicePageContent = {
  slug: "/services/technical/website-designing",
  label: "Website Designing",
  title: "Websites built to convert learners",
  subtitle:
    "From landing pages to full marketing sites, we build fast, responsive, conversion-first experiences—aligned to your brand and programs.",
  icon: { src: "/Assets/service/technology.svg", alt: "Technology icon" },
  heroImage: sharedHeroImage,
  outcomes: [
    { title: "Landing pages", description: "High-converting pages for cohorts, programs, and campaigns." },
    { title: "Performance & SEO", description: "Fast load times and clean structure that ranks and converts." },
    { title: "Design + build", description: "We handle UI/UX and implementation so you ship end-to-end." },
  ],
  howItWorks: [
    { step: 1, title: "Structure", text: "We map your offer, audience, and page flow." },
    { step: 2, title: "Design", text: "We design UI that matches your brand and maximises conversion." },
    { step: 3, title: "Build & iterate", text: "We implement, optimise, and iterate based on feedback." },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      { q: "Do you support Next.js sites?", a: "Yes. We can build modern marketing sites and landing pages in Next.js." },
      { q: "Can you improve our existing website?", a: "Yes. We can redesign sections, fix performance, and improve conversion." },
      { q: "Do you handle copy as well?", a: "We can collaborate on copy and structure, or work with your copy team." },
    ],
  },
  cta: {
    title: "Want a website that converts better?",
    description: "Share your current site and goals—we’ll propose improvements and scope.",
    buttonText: "Talk to us",
    buttonHref: "/contact",
  },
} as const;

export const mobileAppDevPage: ServicePageContent = {
  slug: "/services/technical/mobile-app-development",
  label: "Mobile App Development",
  title: "Apps that power learning experiences",
  subtitle:
    "Build learner-facing apps or internal tools with a reliable delivery partner—from MVP to production—without juggling multiple teams.",
  icon: { src: "/Assets/service/technology.svg", alt: "Technology icon" },
  heroImage: sharedHeroImage,
  outcomes: [
    { title: "MVP to launch", description: "Ship an MVP fast, then iterate towards a production-grade app." },
    { title: "Product quality", description: "Clean UX, performance, and stability so learners trust the experience." },
    { title: "Ongoing iterations", description: "Feature delivery and maintenance as you scale usage and scope." },
  ],
  howItWorks: [
    { step: 1, title: "Scope", text: "We align on users, flows, and success metrics." },
    { step: 2, title: "Build", text: "We implement features in milestones with review checkpoints." },
    { step: 3, title: "Maintain", text: "We support releases, fixes, and ongoing improvements." },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      { q: "Do you build iOS and Android?", a: "Yes. We can support cross-platform delivery depending on requirements." },
      { q: "Can you integrate with our backend?", a: "Yes. We work with your backend and APIs, and can support integrations." },
      { q: "Do you maintain the app after launch?", a: "Yes. We can provide ongoing maintenance and iteration support." },
    ],
  },
  cta: {
    title: "Want to build an app without delays?",
    description: "Tell us what you’re building—we’ll propose timelines and an engagement model.",
    buttonText: "Talk to us",
    buttonHref: "/contact",
  },
} as const;

