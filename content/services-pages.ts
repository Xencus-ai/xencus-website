/**
 * Service pages: content, copy, and structure for each service page.
 * Each service has unique tagline, metrics, and target audience profiles.
 */

export type ServiceFaqItem = { q: string; a: string };

export type ServicePageContent = {
  slug: string;
  label: string;
  title: string;
  subtitle: string;
  /**
   * Short 3–6 word phrase displayed as the LARGE gradient hero heading
   * (the "poster line" — unique per service, punchy and benefit-led).
   */
  heroAccent: string;
  /** A bold, opinionated positioning statement shown in a tinted band below the hero. */
  tagline: string;
  icon: { src: string; alt: string };
  heroImage: { src: string; alt: string };
  /** Four key metrics specific to this service. */
  metrics: { value: string; label: string }[];
  /**
   * Real pain points this service solves. Shown before Outcomes so visitors
   * immediately recognise their own situation.
   */
  problems: { title: string; description: string }[];
  outcomes: { title: string; description: string }[];
  subServices?: { title: string; points: string[] }[];
  howItWorks: { step: number; title: string; text: string }[];
  /** Three buyer or user profiles this service is specifically designed for. */
  targetAudience: { title: string; description: string }[];
  faq: { title: string; items: ServiceFaqItem[] };
  cta: { title: string; description: string; buttonText: string; buttonHref: string };
};

const heroImages = {
  corporateLd: {
    src: "/Assets/edutech/illustrations/planning.avif",
    alt: "Structured learning programme delivery for corporate teams",
  },
  universities: {
    src: "/Assets/upcomingclasse/upcomingClass.avif",
    alt: "Industry trainers delivering sessions to university students",
  },
  legal: {
    src: "/Assets/service/legal.svg",
    alt: "Legal contracts and compliance documentation for EdTech",
  },
  hr: {
    src: "/Assets/service/hr.svg",
    alt: "People operations and hiring support for EdTech businesses",
  },
  finance: {
    src: "/Assets/service/finance.svg",
    alt: "Finance operations and reporting for education businesses",
  },
  digitalMarketing: {
    src: "/Assets/dashboard/dashboard.png",
    alt: "Performance marketing analytics for EdTech growth",
  },
  graphicDesign: {
    src: "/Assets/edutech/course.png",
    alt: "Brand and campaign design assets for education companies",
  },
  websiteDesign: {
    src: "/Assets/hero/hero.avif",
    alt: "Modern conversion-focused website for an education brand",
  },
  mobileApp: {
    src: "/Assets/edutech/illustrations/analytics.avif",
    alt: "Mobile learning app product analytics and delivery",
  },
} as const;

export const corporateLdPage: ServicePageContent = {
  slug: "/services/corporate-ld",
  label: "Corporate L&D",
  title: "Upskilling programmes, delivered end to end",
  heroAccent: "Cohort delivery at scale",
  subtitle:
    "Design, run, and track cohort-based learning for your employees without building an internal delivery team. We handle trainers, sessions, content operations, and reporting while your L&D leaders stay focused on strategy and business outcomes.",
  tagline:
    "Most L&D programmes fail not because of poor design, but because delivery breaks down somewhere in execution.",
  icon: { src: "/Assets/service/corporate.svg", alt: "Corporate learning icon" },
  heroImage: heroImages.corporateLd,
  metrics: [
    { value: "2–3 weeks", label: "From brief to first live cohort, no long onboarding" },
    { value: "30+ domains", label: "Skill tracks across technology, data, design, and management" },
    { value: "3-tier reports", label: "Separate summaries for learners, managers, and leadership" },
    { value: "100% your brand", label: "Sessions, certificates, and comms under your identity" },
  ],
  problems: [
    {
      title: "Freshers and laterals need domain training but you have no internal trainer",
      description:
        "Most Indian companies, especially startups and mid-size businesses, hire from tier-2 and tier-3 colleges where practical skills are limited. Building an internal L&D team is expensive and most organisations cannot justify it until they are much larger.",
    },
    {
      title: "You rely on one-off workshops that produce no measurable outcome",
      description:
        "A two-day external workshop every quarter does not build skills. Without structured cohorts, assessments, and follow-through, the spend rarely translates into improvement in how employees do their actual work.",
    },
    {
      title: "L&D is managed manually through spreadsheets and WhatsApp groups",
      description:
        "HR teams spend hours every week coordinating trainers, tracking attendance, and compiling reports. This manual overhead means programmes never scale beyond a handful of cohorts without dedicated ops bandwidth.",
    },
    {
      title: "Programmes stall when a trainer cancels with no backup plan",
      description:
        "Finding, vetting, and retaining good domain trainers is a full-time job. When a trainer drops out mid-cohort, learners lose momentum and HR has no contingency. Without backup trainer systems, this happens far more often than it should.",
    },
  ],
  outcomes: [
    {
      title: "Role-based cohorts that run without your intervention",
      description:
        "We design structured learning journeys for specific roles, technology stacks, or skill areas and then own the execution. Each cohort has a calendar, checkpoints, milestones, and reminders so learners and managers always know where the programme stands. Completion tracking and certificates are built into the process so there is a clear, documented record of outcomes for HR and business leaders.",
    },
    {
      title: "Domain experts and mentors who show up prepared",
      description:
        "We source and vet industry trainers who can both teach and mentor, matching them carefully to your specific domain and learner profile. Every session slot has a backup trainer assigned in advance so programmes continue even when plans change at short notice. Trainers operate under your brand and curriculum guidelines, not ours, so your L&D team retains full visibility and control.",
    },
    {
      title: "Reporting that your leadership team will actually read",
      description:
        "After every session and at the end of each cohort, we share attendance, progress, and completion data in a format that managers and HR leaders can use directly without reformatting. We align report structures to what your business stakeholders expect, whether that is a live dashboard, a weekly email summary, or a formatted PDF for quarterly reviews. No chasing numbers at the end of the quarter.",
    },
  ],
  subServices: [
    {
      title: "Programme design and structure",
      points: [
        "Role-based and skill-based learning journeys mapped to business goals",
        "Cohort calendars with milestones, checkpoints, and attendance systems",
        "Alignment with manager expectations and L&D strategy priorities",
      ],
    },
    {
      title: "Delivery operations",
      points: [
        "Trainer and mentor scheduling with backup assignments for continuity",
        "Live session links, reminders, recordings, and doubt session management",
        "Project, assignment, and assessment execution with grading workflows",
      ],
    },
    {
      title: "Reporting and stakeholder updates",
      points: [
        "Cohort-level and programme-level dashboards updated weekly",
        "Progress snapshots formatted for managers and leadership reviews",
        "Certificate generation and completion documentation for compliance",
      ],
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: "We align on outcomes and scope",
      text: "We start by understanding your roles, skill gaps, business timelines, and reporting requirements. Instead of a long discovery process, we align scope in the first week and propose a programme plan you can review and approve quickly.",
    },
    {
      step: 2,
      title: "We deploy trainers and run operations",
      text: "Once scope is confirmed, we assign trainers, set up the cohort calendar, and handle every operational detail from session links to learner communication. Your team is kept informed but not burdened with coordination.",
    },
    {
      step: 3,
      title: "We report on outcomes and iterate",
      text: "We share regular updates on attendance, progress, and completion. At the end of each cohort, we review what worked and what to improve, then apply those learnings to the next cycle without a full re-scoping exercise.",
    },
  ],
  targetAudience: [
    {
      title: "L&D Heads and Programme Managers",
      description:
        "You have a mandate to build skills across the organisation but limited bandwidth to manage delivery logistics for every cohort. We own the execution layer so your team can stay focused on programme strategy, stakeholder relationships, and measuring impact rather than chasing trainers and compiling attendance reports.",
    },
    {
      title: "HR Directors and Chief People Officers",
      description:
        "You are being asked to demonstrate return on investment from learning budgets. We give you the reporting infrastructure, completion documentation, and quality assurance to show that every programme delivered actually moved the needle on skills and business outcomes.",
    },
    {
      title: "Business Unit Leaders with Specific Skill Gaps",
      description:
        "You have identified a capability gap in your team and a business outcome tied to closing it. We help you launch targeted cohort programmes within weeks, without waiting for central L&D cycles to accommodate your timeline or budget planning to be resolved.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Can you work with our existing LMS, Zoho People, or internal HR systems?",
        a: "Yes. We plug into your existing LMS, HRMS, and reporting tools. If you are starting from scratch, we can recommend a cost-effective setup that grows with your programmes without adding unnecessary technical complexity.",
      },
      {
        q: "Do you issue certificates that are GST-compliant and usable for compliance records?",
        a: "Yes. We generate completion certificates that include the necessary details for your internal HR records. For GST purposes, we can structure the engagement so invoicing and documentation align with your finance team's requirements.",
      },
      {
        q: "How do you handle trainers from a contractual and tax perspective?",
        a: "Trainers are engaged as independent contractors under proper agreements that include IP assignment, confidentiality, and scope of work clauses. TDS is handled correctly based on the nature of payment. We take care of this so you do not have to manage individual contractor relationships.",
      },
      {
        q: "Can you support programmes for teams across multiple cities in India?",
        a: "Yes. We run programmes for teams in metros, tier-2, and tier-3 cities. Sessions are online or hybrid depending on what works best for your learner profile, and the operations model stays consistent regardless of geography.",
      },
      {
        q: "We are a startup with fewer than 50 employees. Is this for us?",
        a: "Absolutely. We work with companies at all stages. Startups often benefit most from structured upskilling because the team is small and the cost of someone not knowing how to do their job is high. We can start with a single cohort and scale from there.",
      },
    ],
  },
  cta: {
    title: "Ready to run cohorts without the operational overhead?",
    description:
      "Share your team size, target skills, and timeline with us. We will propose a programme plan and engagement model you can take to your leadership team within days.",
    buttonText: "Start the conversation",
    buttonHref: "/contact",
  },
};

export const universitiesPage: ServicePageContent = {
  slug: "/services/universities-training-institutions",
  label: "Universities and Training Institutions",
  title: "Industry-led programmes for students, at scale",
  heroAccent: "Industry learning for students",
  subtitle:
    "Expand your domain coverage and delivery capacity without building a large internal training team. We bring vetted industry trainers, structured projects, hands-on assessments, and operations so your students learn from practitioners who are doing the work today.",
  tagline:
    "Students remember the experiences that felt real. Classroom theory is easier to forget than a project that challenged them.",
  icon: { src: "/Assets/service/university.svg", alt: "University and institutions icon" },
  heroImage: heroImages.universities,
  metrics: [
    { value: "4–8 weeks", label: "From programme brief to first live session" },
    { value: "10+ domains", label: "Industry tracks ready for immediate deployment" },
    { value: "Pilot or full rollout", label: "Start with one batch and expand without re-procurement" },
    { value: "Project-based", label: "Every programme includes hands-on work and assessment" },
  ],
  problems: [
    {
      title: "Students have degrees but cannot clear industry interviews or get placed in good roles",
      description:
        "The gap between what Indian universities teach and what companies actually need has never been wider. Students graduating with B.Tech, BCA, or BBA degrees often lack the practical skills, portfolio work, and domain knowledge that employers in technology, finance, and product roles require.",
    },
    {
      title: "Faculty teach theory but have not worked in industry for a decade or more",
      description:
        "A professor who last worked in software in 2012 cannot teach cloud architecture, data engineering, or product management. Industry-relevant skills require active practitioners, and most institutions cannot afford to hire full-time industry faculty for every emerging domain.",
    },
    {
      title: "Placement teams struggle because students are not interview-ready despite good grades",
      description:
        "Strong academic scores do not translate to strong interview performance. Students who have never worked on a real problem, built a project from scratch, or articulated their thinking to a technical interviewer consistently underperform in campus placements.",
    },
    {
      title: "NEP 2020 requires industry integration but there is no practical execution support",
      description:
        "The National Education Policy 2020 specifically mandates industry linkages and experiential learning. Most institutions understand the requirement and want to comply but do not have a structured partner to bring industry trainers, projects, and certification into the actual curriculum.",
    },
  ],
  outcomes: [
    {
      title: "More domains without more faculty hiring",
      description:
        "You can expand your programme catalogue without waiting for full-time faculty hires or a semester-long onboarding process. We deploy vetted industry trainers per domain within weeks, covering technology, data, design, product management, and more. This lets your institution respond to employer demand and evolving accreditation requirements in real time rather than at the next annual planning cycle.",
    },
    {
      title: "Hands-on work that produces portfolio-ready outcomes",
      description:
        "Every programme we deliver includes structured project work, lab sessions, and assessments designed around what practitioners actually do in professional settings. Students build artefacts they can include in their portfolios and discuss confidently in interviews. The practical component is what employers consistently say differentiates candidates, and it is what makes your institution's graduates stand out.",
    },
    {
      title: "Delivery operations that do not burden your faculty",
      description:
        "Session scheduling, trainer coordination, attendance recording, recordings, and progress tracking are all handled by our operations team, not your faculty or administrative staff. You can add more batches or new domains without adding administrative load to your department. We align our delivery operations to your academic calendar so nothing conflicts with exams, semester breaks, or institutional commitments.",
    },
  ],
  subServices: [
    {
      title: "Programme formats",
      points: [
        "Short-term bootcamps, workshops, and intensive modules",
        "Semester-long industry integration programmes",
        "Capstone projects with practitioner mentorship",
      ],
    },
    {
      title: "Delivery and assessment",
      points: [
        "Industry trainer assignment per domain and batch",
        "Project, lab, and assignment execution with rubric-based grading",
        "Attendance, participation, and completion documentation",
      ],
    },
    {
      title: "Coordination and reporting",
      points: [
        "Scheduling aligned to your academic calendar and infrastructure",
        "Programme summaries and student progress reports for academic leadership",
        "Structured feedback loops to improve each cohort",
      ],
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: "We scope the programme together",
      text: "We start by understanding the domains you want to add, your existing curriculum structure, and your academic calendar constraints. We align on programme format, student profile, and assessment design so the first cohort reflects your institution's standards from day one.",
    },
    {
      step: 2,
      title: "We deploy trainers and set up delivery",
      text: "We assign domain-matched industry trainers, set up the session calendar, and prepare all delivery materials and assessments. Students receive a clear schedule with session links, project briefs, and submission instructions before the programme begins.",
    },
    {
      step: 3,
      title: "We run, track, and report",
      text: "We manage every aspect of live delivery, from session operations to progress monitoring, and share structured reports for your academic leadership at defined intervals. After each programme, we review outcomes and refine for the next cohort.",
    },
  ],
  targetAudience: [
    {
      title: "Academic Coordinators and Heads of Departments",
      description:
        "You are responsible for programme quality and student experience across a large department. We handle the operational load of coordinating trainers, sessions, and assessments so you can focus on curriculum oversight and student outcomes rather than logistics.",
    },
    {
      title: "Placement and Industry Connect Teams",
      description:
        "You want students to be genuinely work-ready before graduation. Our trainer network brings real practitioner experience into the classroom, covering the tools, workflows, and problem-solving approaches that employers look for when they are shortlisting candidates.",
    },
    {
      title: "Department Heads Expanding Domain Coverage",
      description:
        "You want to offer more programmes than your current hiring budget allows. We expand your domain coverage by deploying experienced trainers without the overhead of full-time faculty positions, giving you flexibility to respond to student demand and industry trends.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Can you align the programme content with our existing curriculum and AICTE or UGC requirements?",
        a: "Yes. We map our delivery to your curriculum and add practical components that deepen understanding without conflicting with your academic calendar or regulatory requirements. We have worked within AICTE and UGC aligned frameworks and understand what documentation institutions need.",
      },
      {
        q: "Do the programmes help with placement preparation specifically?",
        a: "Yes. Our programmes are designed with placement outcomes in mind. Projects, assessments, and mentor feedback are structured so students build portfolio work they can present in technical interviews. We can also run specific placement preparation tracks as part of the engagement.",
      },
      {
        q: "Can you support multiple campuses or departments running the same programme?",
        a: "Yes. We run multi-campus delivery with consistent operating models, shared assessments, and unified reporting. This is common for institutions with multiple campuses across states who want consistent quality without duplicating coordination effort at each location.",
      },
      {
        q: "Do your trainers have experience working with Indian students specifically?",
        a: "Yes. All our trainers have experience in the Indian education context. They understand the starting point of most Indian engineering or commerce graduates and structure their teaching accordingly, which produces better outcomes than international trainers who assume a different baseline.",
      },
    ],
  },
  cta: {
    title: "Looking to expand programmes this semester?",
    description:
      "Tell us the domains you want to add and your academic calendar constraints. We will propose a trainer plan and delivery structure within days.",
    buttonText: "Start the conversation",
    buttonHref: "/contact",
  },
};

export const legalServicesPage: ServicePageContent = {
  slug: "/services/edtech-legal-services",
  label: "EdTech Legal Services",
  title: "Legal clarity built for EdTech operations",
  heroAccent: "Legal clarity for EdTech",
  subtitle:
    "Contracts, compliance documentation, and ongoing advisory designed around how EdTech businesses actually run. We help you remove legal bottlenecks from growth and delivery so partnerships close faster and programmes launch with confidence.",
  tagline:
    "Legal contracts and compliance are not administrative overhead. They are the infrastructure that determines whether you can grow confidently.",
  icon: { src: "/Assets/service/legal.svg", alt: "Legal services icon" },
  heroImage: heroImages.legal,
  metrics: [
    { value: "5–7 days", label: "Turnaround on most standard agreements and policies" },
    { value: "Startup to enterprise", label: "Engagement scales with your organisation and deal size" },
    { value: "3 practice areas", label: "Contracts, compliance documentation, and advisory" },
    { value: "Ongoing retainer", label: "Available beyond one-off drafts as your model evolves" },
  ],
  problems: [
    {
      title: "You are using copy-paste contracts from the internet that are not valid under Indian law",
      description:
        "Most Indian startups and education businesses use free templates from international websites. These contracts often reference foreign law, lack clauses required under the Indian Contract Act 1872, and create disputes about jurisdiction that are expensive to resolve in Indian courts.",
    },
    {
      title: "You are not sure whether your educational services attract GST at 18 percent or are exempt",
      description:
        "GST treatment of educational services in India is genuinely complex. Some programmes qualify for exemption, others are taxable. Getting this wrong means either overcharging students, creating a GST liability you were not aware of, or triggering a notice from the tax department.",
    },
    {
      title: "Your trainer agreements have no IP assignment clause and no clarity on content ownership",
      description:
        "When a trainer creates curriculum, assessments, or video content for your platform, who legally owns it? Most Indian education businesses operate without a clear IP assignment agreement, which creates expensive disputes if the trainer leaves or joins a competitor.",
    },
    {
      title: "Your website has no DPDP Act 2023 compliant privacy policy or consent mechanism",
      description:
        "The Digital Personal Data Protection Act 2023 requires specific disclosures, consent flows, and data handling practices. A privacy policy copied from another website does not fulfil these requirements. As enforcement begins, this creates regulatory risk for any business collecting user data.",
    },
  ],
  outcomes: [
    {
      title: "Agreements that close partnerships faster",
      description:
        "Clean, well-structured agreements mean you can finalise trainer relationships, institutional partnerships, and enterprise contracts without legal back-and-forth adding weeks to the process. We prepare documents in plain language that both parties can read, understand, and approve without unnecessary negotiation rounds. When counterparties raise changes, we help you review and respond promptly without losing momentum.",
    },
    {
      title: "Compliance documentation that holds up to scrutiny",
      description:
        "We make sure your policies, data practices, and operational documentation are aligned to how your programmes actually run, not just generic templates sourced from the internet. This matters when institutional partners, enterprise clients, or investor advisors ask to review your compliance position before signing. We keep your documentation current as your business model evolves and as regulations change.",
    },
    {
      title: "Advisory that fits into how your team works",
      description:
        "Legal questions in EdTech do not stop after the first set of contracts is drafted. As you expand to new geographies, structure new programme types, or enter new partnership categories, new questions arise. We provide ongoing guidance at a pace and depth that suits your business, so you have a knowledgeable perspective available without retaining expensive external counsel for every query.",
    },
  ],
  subServices: [
    {
      title: "Contracts and documentation",
      points: [
        "Trainer and mentor agreements, vendor contracts, and NDAs",
        "Enterprise MSAs, SOWs, and partnership agreements",
        "Learner policies, website terms, and data privacy documentation",
      ],
    },
    {
      title: "Compliance and risk",
      points: [
        "Operational and data compliance review for programme structures",
        "Documentation reviews when you add new domains or geographies",
        "Guidance on risk exposure in new partnership and delivery models",
      ],
    },
    {
      title: "Ongoing advisory",
      points: [
        "Support for edge cases and escalations as they arise",
        "Periodic document and process reviews as the business grows",
        "Input on legal structure for new business and partnership models",
      ],
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: "We understand your business model",
      text: "We start by mapping how your programmes are structured, who your partners and counterparties are, and where your current documentation has gaps. This context ensures the agreements and policies we produce actually reflect how your business operates.",
    },
    {
      step: 2,
      title: "We prepare and review documents",
      text: "We draft or review agreements in business-friendly language with clear, unambiguous terms. Our default is documents that both parties can read and sign without specialist interpretation, reducing the back-and-forth that delays closures.",
    },
    {
      step: 3,
      title: "We provide ongoing support as you scale",
      text: "As your business grows, we remain available for new agreements, compliance questions, and model changes. The goal is a long-term relationship where your legal function scales with your delivery operations rather than lagging behind them.",
    },
  ],
  targetAudience: [
    {
      title: "EdTech Founders and Co-founders",
      description:
        "You are moving fast and you cannot afford to have partnerships stall on legal review. We prepare and review agreements in business-friendly language that is aligned to how EdTech delivery actually works, so you can close deals faster without compromising on the protections your business needs.",
    },
    {
      title: "Operations Heads Managing Partner Relationships",
      description:
        "You are handling trainer agreements, institutional contracts, and vendor terms simultaneously across a growing portfolio. We give you a structured process for managing these documents and a reliable partner to review new ones as your partnership list expands.",
    },
    {
      title: "In-house Legal Teams Needing EdTech Context",
      description:
        "Your legal team understands law but may not be familiar with EdTech-specific delivery models, cohort structures, or the compliance considerations unique to education businesses. We provide operational context so your team can draft, review, and negotiate agreements that accurately reflect how your business runs.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Do you draft agreements under Indian law specifically?",
        a: "Yes. All documents we prepare are drafted under and compliant with Indian law, including the Indian Contract Act 1872, the Information Technology Act, and relevant sector-specific regulations. We do not use international templates that require significant rework for the Indian context.",
      },
      {
        q: "Can you help us become DPDP Act 2023 compliant?",
        a: "Yes. We help you draft a privacy policy, consent mechanisms, and data handling practices that align with the Digital Personal Data Protection Act 2023. This includes reviewing your current website and app data collection practices and advising on what needs to change.",
      },
      {
        q: "Do you understand the GST implications for educational services?",
        a: "Yes. Educational services in India have specific GST treatment depending on the type of programme, the provider, and who the recipients are. We can advise on whether your specific offering qualifies for exemption and help you structure agreements and invoicing accordingly.",
      },
      {
        q: "Can you handle urgent contract reviews when a deal is closing quickly?",
        a: "Yes. We are structured to operate at business pace, not at a traditional law firm pace. When a partnership or enterprise deal has a tight timeline, we prioritise the review and turnaround the document within the timeframe your business requires.",
      },
      {
        q: "We are an early-stage startup. Do you work with small companies?",
        a: "Yes. Many of our clients are early-stage companies that need proper legal foundations without the cost of a full retainer with a law firm. We scale the engagement to your current stage and complexity.",
      },
    ],
  },
  cta: {
    title: "Need a legal partner who understands how EdTech actually works?",
    description:
      "Tell us what you are building, launching, or negotiating. We will help you move forward without legal becoming the bottleneck.",
    buttonText: "Start the conversation",
    buttonHref: "/contact",
  },
};

export const hrServicesPage: ServicePageContent = {
  slug: "/services/hr-services-for-edtech",
  label: "HR Services for EdTech",
  title: "Hiring and people operations for education businesses",
  heroAccent: "Hire, onboard and grow",
  subtitle:
    "We help you build and manage the teams that run education businesses: trainers, operations, support, marketing, and leadership. This includes the policies, onboarding workflows, and people processes to grow without the chaos that typically accompanies rapid hiring.",
  tagline:
    "The quality of your delivery team is the first product of any education business. Hire and support them accordingly.",
  icon: { src: "/Assets/service/hr.svg", alt: "HR services icon" },
  heroImage: heroImages.hr,
  metrics: [
    { value: "2–4 weeks", label: "From role brief to a shortlisted set of candidates" },
    { value: "Full-time + contract", label: "Both hiring models supported in one engagement" },
    { value: "Any team size", label: "From a 2-person founding team to a 100-person organisation" },
    { value: "Day-one ready", label: "Onboarding documentation and checklists from day one" },
  ],
  problems: [
    {
      title: "You are hiring through personal networks and missing good candidates on Naukri and LinkedIn",
      description:
        "Most early-stage Indian companies rely on founder networks for hiring. This produces a shallow candidate pool, misses qualified people who are not in the network, and creates bias toward familiar profiles rather than the best fit for the actual role.",
    },
    {
      title: "New employees join without proper appointment letters, contracts, or NDAs",
      description:
        "Many Indian startups onboard employees informally without appointment letters, employment contracts, or non-disclosure agreements. This creates serious legal exposure if a dispute arises and makes it harder to maintain professional standards as the team grows.",
    },
    {
      title: "You do not know when PF and ESI registration becomes mandatory or how to structure it",
      description:
        "Provident Fund registration is mandatory once you have 20 or more employees. ESI applies at different thresholds. Many founders are unaware of these obligations, the applicable salary limits, and the contribution rates. Non-compliance attracts penalties and employee disputes.",
    },
    {
      title: "Your full-time employees and contractors are structured identically, creating tax and compliance risk",
      description:
        "In India, the distinction between an employee and an independent contractor has significant TDS, PF, and labour law implications. Using the same structure for both creates liability that surfaces during an audit or when a contractor claims employment benefits.",
    },
  ],
  outcomes: [
    {
      title: "Hiring cycles that do not stall your growth",
      description:
        "We define clear role criteria, write job descriptions that attract the right candidates, and run screening so you only spend time with people who are a genuine fit for your stage and culture. Most roles are filled within two to four weeks from initial briefing to offer stage. We coordinate interviews, consolidate feedback, and manage the candidate experience so the process does not stall because of scheduling or communication gaps.",
    },
    {
      title: "Onboarding that makes people productive from week one",
      description:
        "New joiners receive a structured onboarding plan with documentation, system access, introductions, and role-specific checklists tailored to how your organisation works. This reduces the time between someone joining and becoming genuinely productive. It also sets the tone for how your organisation manages and supports people, which has a measurable effect on retention over the following months.",
    },
    {
      title: "HR infrastructure that holds up as you scale",
      description:
        "We build policy frameworks, contract templates, and people workflows that remain functional as you add headcount and as your delivery model grows more complex. The goal is to give you an HR foundation you can rely on rather than a collection of ad-hoc decisions that need to be revisited every few months. We review and update policies as labour regulations change and as your team structure evolves.",
    },
  ],
  subServices: [
    {
      title: "Hiring support",
      points: [
        "Job descriptions and role scorecards tailored to EdTech functions",
        "Sourcing, shortlisting, and candidate screening per role",
        "Interview coordination, feedback consolidation, and offer management",
      ],
    },
    {
      title: "Onboarding and people operations",
      points: [
        "Structured onboarding checklists and documentation for new joiners",
        "Policy communication and rollout across the team",
        "Ongoing people ops including attendance management and HR letters",
      ],
    },
    {
      title: "HR systems and policies",
      points: [
        "Employment and contractor policy templates aligned to EdTech models",
        "Guidance on structuring contracts for different team types",
        "HR process support as your organisation evolves",
      ],
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: "We define what you actually need",
      text: "We start by mapping the roles you are hiring for, the team structure you are building toward, and the timelines you are working within. This shapes the JDs, sourcing strategy, and screening criteria so we are not just filling seats but building the team your business needs.",
    },
    {
      step: 2,
      title: "We run the hiring process",
      text: "We source candidates, screen for fit and capability, and coordinate interviews with your team. You review a shortlist of qualified candidates rather than managing an inbox of unfiltered applications. Offer management and reference checks are handled within the same workflow.",
    },
    {
      step: 3,
      title: "We support onboarding and ongoing operations",
      text: "Once someone joins, we ensure their onboarding experience is structured and complete. For ongoing engagements, we provide HR operations support as your team grows, covering everything from policy updates to employee documentation.",
    },
  ],
  targetAudience: [
    {
      title: "Founders Building Their First Structured Team",
      description:
        "You are transitioning from a small founding team to a structured organisation and you need help getting the hiring process right. We help you define the roles you actually need at this stage, write job descriptions that attract the right people, and run the hiring process so you can stay focused on the product and customers.",
    },
    {
      title: "COOs and Operations Leads Scaling Up",
      description:
        "You need to add headcount quickly without compromising on quality or creating people-management problems downstream. We give you a repeatable hiring process and the HR infrastructure to support a growing team, including the policies and workflows that prevent the common issues that arise when organisations grow without putting people systems in place.",
    },
    {
      title: "L&D Managers Expanding Trainer Networks",
      description:
        "You need to source domain experts who can both teach and maintain learner engagement across multi-week programmes. We help you find, screen, and onboard trainers who understand how to work within a structured delivery programme and who are reliable enough to hold a cohort calendar.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Do you source candidates on Naukri, LinkedIn, and other Indian platforms?",
        a: "Yes. We source across Naukri, LinkedIn, Apna, and other platforms relevant to the role and seniority. We write JDs optimised for each platform and manage the full sourcing and screening process so you only spend time with qualified shortlisted candidates.",
      },
      {
        q: "Can you help us set up PF and ESI registration and compliance?",
        a: "Yes. We advise on PF and ESI registration requirements based on your employee count and salary structure, help you set up the compliance process, and coordinate with your CA or payroll system so deductions and filings are handled correctly from the start.",
      },
      {
        q: "Do you draft appointment letters and employment contracts for Indian law?",
        a: "Yes. We prepare appointment letters, employment agreements, and NDA templates compliant with Indian employment law. These include the relevant clauses for notice periods, IP ownership, non-solicitation, and grounds for termination that Indian employers need.",
      },
      {
        q: "We are a three-person startup. Is this too early to engage HR support?",
        a: "Not at all. Getting the foundations right early is much cheaper than fixing problems after you have grown. We help early-stage teams define roles, structure compensation, and put basic documentation in place so you are not scrambling when you need to scale quickly.",
      },
    ],
  },
  cta: {
    title: "Ready to build a team that grows with your delivery?",
    description:
      "Share the roles you are hiring for and where you are in your growth journey. We will propose the right engagement to help you build quickly without building badly.",
    buttonText: "Start the conversation",
    buttonHref: "/contact",
  },
};

export const financeSolutionsPage: ServicePageContent = {
  slug: "/services/finance-solutions-for-edtech",
  label: "Finance Solutions for EdTech",
  title: "Finance operations that match how education revenue actually works",
  heroAccent: "Finance built for cohorts",
  subtitle:
    "From bookkeeping and reconciliations to compliance filings and founder-ready reporting, we help EdTech teams maintain clean financials and stay on top of statutory obligations so founders can focus on product and growth rather than spreadsheets and tax calendars.",
  tagline:
    "Education revenue is complex. Your finance partner needs to understand cohorts, instalments, and programme cycles to be genuinely useful to your business.",
  icon: { src: "/Assets/service/finance.svg", alt: "Finance solutions icon" },
  heroImage: heroImages.finance,
  metrics: [
    { value: "Monthly cycle", label: "Bookkeeping, reconciliation, and reporting on schedule" },
    { value: "Seed to growth", label: "Scales from early-stage books to investor-grade reporting" },
    { value: "Cohort-accurate", label: "Revenue tracked the way education businesses actually earn" },
    { value: "Filing support", label: "Statutory deadlines coordinated with your CA or auditor" },
  ],
  problems: [
    {
      title: "GST filings are delayed, filed incorrectly, or not filed at all",
      description:
        "GSTR-1 and GSTR-3B must be filed every month. Late or incorrect filing attracts penalties, blocks input tax credit for your vendors, and can trigger a notice from the GST department. Many Indian startups do not have a process that guarantees timely, accurate filing.",
    },
    {
      title: "TDS is not being deducted on trainer and contractor payments, creating audit risk",
      description:
        "Payments to trainers, freelancers, and professional service providers in India attract TDS under Section 194C or 194J depending on the nature of work. Not deducting TDS at all or deducting at the wrong rate creates a liability that surfaces during an income tax assessment or CA-led audit.",
    },
    {
      title: "You have no monthly P&L or cash flow view and are making decisions on the bank balance alone",
      description:
        "Running a business without a monthly profit and loss statement means you cannot see if you are actually making money or just generating revenue. Decisions about hiring, marketing spend, and new programmes made on the bank balance alone frequently lead to cash flow crises.",
    },
    {
      title: "Your books are not ready for due diligence and you are approaching a fundraise",
      description:
        "When an angel investor or fund asks for financial statements, many founders discover their books have not been maintained properly, reconciliations are months behind, and the figures their CA produces do not tell a coherent story. Cleaning up books under due diligence pressure is expensive and stressful.",
    },
  ],
  outcomes: [
    {
      title: "Compliance managed proactively, not reactively",
      description:
        "We track statutory deadlines, coordinate with your CA, and ensure filings are completed on time with proper supporting documentation. This eliminates the risk of penalties, late fees, and compliance gaps that typically emerge when finance is handled reactively during growth phases. We maintain a compliance calendar so nothing is missed even during busy periods when your attention is elsewhere.",
    },
    {
      title: "Books that reflect how your education business actually earns",
      description:
        "We maintain your books with education-specific revenue structures in mind, properly accounting for cohort fees, instalment schedules, deferred revenue, and subscription models. Reconciliations are done on a defined cycle so your financial data is always current and accurate. When your CA, auditor, or investor requests supporting documentation, it is ready to provide immediately.",
    },
    {
      title: "Reporting that helps you make decisions, not just file returns",
      description:
        "You receive clear, concise dashboards showing revenue by cohort and programme, cash position, outstanding receivables, and key trends without needing to dig through a spreadsheet or request a report from your finance team. Reporting is structured so you can use it in investor meetings, board updates, and internal planning sessions without preparation. As you grow, we evolve the reporting format to match what your business actually needs.",
    },
  ],
  subServices: [
    {
      title: "Core finance operations",
      points: [
        "Day-to-day bookkeeping, accounts payable, and accounts receivable",
        "Invoicing, payment tracking, and reconciliations",
        "Payroll coordination with your HR team or CA",
      ],
    },
    {
      title: "Compliance and filings",
      points: [
        "Statutory and tax filing support in coordination with your CA",
        "Compliance calendar management and deadline tracking",
        "Audit-ready documentation and supporting schedules",
      ],
    },
    {
      title: "Reporting and planning",
      points: [
        "Cohort and programme-level revenue dashboards",
        "Cash flow summaries for founder and leadership decision-making",
        "Inputs into budget planning and investor reporting cycles",
      ],
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: "We assess your current financial state",
      text: "We map your revenue model, payment flows, existing tools, and compliance calendar. This gives us a clear picture of where the gaps are and what needs to be set up or improved before we take over ongoing operations.",
    },
    {
      step: 2,
      title: "We take over finance operations",
      text: "We manage bookkeeping, reconciliations, invoicing, and compliance coordination on a defined schedule. You receive regular updates so you always know your financial position without having to dig for it.",
    },
    {
      step: 3,
      title: "We report and improve as you grow",
      text: "We provide monthly dashboards and periodic planning inputs. As your revenue model evolves and your reporting requirements increase, we adjust the finance operations to match without requiring a full re-engagement.",
    },
  ],
  targetAudience: [
    {
      title: "EdTech Founders Managing Their First Finance Setup",
      description:
        "You are spending too much time on financial admin and not enough time on building the product and acquiring customers. We take over the day-to-day finance operations so you have clean books, timely filings, and a clear picture of your financial health without becoming a part-time accountant.",
    },
    {
      title: "Growth-stage Teams Preparing for Investor Scrutiny",
      description:
        "You are approaching a fundraising round and your financials need to be clean, well-documented, and clearly structured. We help you get your books in order, establish the reporting structure that investors expect, and ensure your compliance is up to date so due diligence does not produce surprises.",
    },
    {
      title: "Finance Leads Who Need EdTech-specific Support",
      description:
        "Your finance team understands accounting but may not be familiar with EdTech-specific revenue recognition, instalment structures, or the compliance considerations unique to education businesses in your geography. We bring that context so your finance function works for your business model, not against it.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Can you handle GST filing including GSTR-1 and GSTR-3B every month?",
        a: "Yes. Monthly GST filing is a core part of what we do. We maintain a compliance calendar, coordinate with your CA where needed, and ensure GSTR-1 and GSTR-3B are filed accurately and on time every month. We also advise on input tax credit reconciliation and GST treatment specific to educational services.",
      },
      {
        q: "Can you manage TDS deductions and quarterly TDS returns?",
        a: "Yes. We track all payments attracting TDS, ensure correct deduction at source under the applicable section, and coordinate with your CA for quarterly TDS return filing. This covers trainer payments, professional fees, rent, and other applicable categories.",
      },
      {
        q: "Do you work with Tally, Zoho Books, or QuickBooks?",
        a: "Yes. We work with Tally, Zoho Books, QuickBooks, and other common accounting tools used in India. If you are not using any tool yet, we can recommend the most appropriate one based on your transaction volume and reporting needs.",
      },
      {
        q: "Can you work alongside our existing CA instead of replacing them?",
        a: "Yes. Many of our clients have a CA who handles their annual audit, income tax returns, and complex statutory matters. We handle the ongoing operational finance work, including bookkeeping, reconciliation, and GST, so your CA can focus on the work that requires their expertise.",
      },
      {
        q: "We are a private limited company. What annual compliances do we need and can you support them?",
        a: "Pvt Ltd companies in India need to file Form AOC-4 and MGT-7 annually with the Ministry of Corporate Affairs, maintain statutory registers, hold board meetings, and file income tax returns. We coordinate all of this with your CA so nothing is missed and no penalties are incurred.",
      },
    ],
  },
  cta: {
    title: "Ready to get financial clarity without the overhead?",
    description:
      "Tell us your revenue model, current tools, and biggest finance pain points. We will propose a finance operations plan that addresses them directly.",
    buttonText: "Start the conversation",
    buttonHref: "/contact",
  },
};

export const digitalMarketingPage: ServicePageContent = {
  slug: "/services/technical/digital-marketing",
  label: "Digital Marketing",
  title: "Performance marketing designed for education growth",
  heroAccent: "Marketing that converts learners",
  subtitle:
    "Campaign planning, channel management, creative production, and weekly reporting so you can grow your programme enrolments efficiently without assembling a full in-house marketing operation. We function as an embedded growth team rather than an external agency.",
  tagline:
    "EdTech growth requires understanding both performance marketing and how learners make decisions. Most agencies do one or the other, not both.",
  icon: { src: "/Assets/service/technology.svg", alt: "Digital marketing icon" },
  heroImage: heroImages.digitalMarketing,
  metrics: [
    { value: "All channels", label: "Meta, Google, organic, email, and programmatic" },
    { value: "Weekly reports", label: "Performance updates with prioritised next actions" },
    { value: "CAC-first", label: "Spend tied to cost per lead and cost per conversion" },
    { value: "Creative included", label: "Ad visuals, copy, and landing pages in scope" },
  ],
  problems: [
    {
      title: "You are spending on Meta and Google ads but cannot tell which campaigns are generating enrolments",
      description:
        "Most Indian education businesses run paid campaigns without proper conversion tracking. Leads come in but there is no way to connect them to specific campaigns, creatives, or audience segments. Spend decisions are made on incomplete data, which means budget is consistently wasted on what does not work.",
    },
    {
      title: "Your cost per lead is high and most leads do not convert to paid enrolments",
      description:
        "Without structured audience testing, creative iteration, and landing page optimisation, cost per lead stays stubbornly high. Improving it requires a systematic approach to finding the right message for the right audience, which most small teams do not have the bandwidth to run properly.",
    },
    {
      title: "Your creatives look generic and disappear into a crowded feed of EdTech ads",
      description:
        "Indian learners see dozens of education ads every day. A generic banner with a course logo and a discount offer is invisible. Converting requires creatives that speak specifically to a learner's goal and outcomes, and most companies do not have the creative strategy or production capacity to produce that consistently.",
    },
    {
      title: "You have no WhatsApp nurture strategy and leads that do not convert immediately go cold",
      description:
        "WhatsApp is the primary communication channel for most Indian learners. Without a structured WhatsApp follow-up sequence alongside email and retargeting, leads that do not enrol within the first 48 hours are effectively lost. This wastes a significant portion of what you spent to acquire them.",
    },
  ],
  outcomes: [
    {
      title: "A channel strategy grounded in your specific programme economics",
      description:
        "We build a channel and budget plan based on your programmes, learner profiles, price points, and enrolment timelines. This means you invest in channels and audience segments with a realistic path to conversion, not just the ones with the highest traffic volume. We revisit the strategy each month based on what the data tells us is actually working and what needs to change.",
    },
    {
      title: "Creative that speaks to how learners make enrolment decisions",
      description:
        "Effective EdTech advertising requires messaging that speaks to a learner's goal, not just their interest in a subject. We develop ad copy, visuals, and landing page content that maps to the specific decision your prospective learner is weighing. Iteration is built into our process so we improve based on performance data rather than creative opinions alone.",
    },
    {
      title: "Reporting that tells you what to do next, not just what happened",
      description:
        "Every week you receive a performance report with spend, results, conversion metrics, and clear recommended next actions from our team. We track metrics that matter to your business, primarily cost per lead and cost per enrolment, rather than impressions and reach figures that do not translate to revenue. When something is not working, we say so and we adjust quickly.",
    },
  ],
  subServices: [
    {
      title: "Strategy and planning",
      points: [
        "Channel and budget allocation per programme and cohort launch",
        "Creative strategy, messaging frameworks, and audience segmentation",
        "Analytics setup and conversion tracking implementation",
      ],
    },
    {
      title: "Campaign execution",
      points: [
        "Paid campaign creation and ongoing management across platforms",
        "Landing page collaboration and conversion rate improvement",
        "Iterative creative and audience testing with structured learning",
      ],
    },
    {
      title: "Reporting and insights",
      points: [
        "Weekly performance snapshots with prioritised next actions",
        "Insight sharing with sales and product teams where relevant",
        "Documentation of learnings for each campaign cycle",
      ],
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: "We audit your current marketing and align on goals",
      text: "We start by reviewing your existing campaigns, conversion data, and programme economics. We identify what is working, what is costing money without returning it, and what is missing. From there we align on goals, channels, and the metrics that will define success.",
    },
    {
      step: 2,
      title: "We launch campaigns and iterate toward performance",
      text: "We set up or take over campaigns across your target channels, launch creative, and begin the iteration process. The first few weeks are about learning what your audience responds to. The following weeks are about scaling what works and cutting what does not.",
    },
    {
      step: 3,
      title: "We report weekly and optimise continuously",
      text: "You receive a weekly report with performance data and a recommended focus for the following week. We do not wait for a monthly review to make changes. When data suggests something needs to shift, we make the adjustment and document the decision.",
    },
  ],
  targetAudience: [
    {
      title: "Growth Leads at EdTech Companies",
      description:
        "You are accountable for enrolment numbers and cost per acquisition and you need an execution partner who can move at the pace your business requires. We partner as an embedded growth team, owning campaign execution and optimisation while you focus on strategy, product positioning, and business goals.",
    },
    {
      title: "Founders Running Marketing with a Small Team",
      description:
        "Marketing is not getting the attention it deserves because too many things are competing for your time. We take over execution and reporting so you can show up at leadership and investor reviews with data-backed performance updates rather than updates based on gut instinct.",
    },
    {
      title: "Programme Marketing Teams Launching New Cohorts",
      description:
        "You have a new cohort or programme to launch with a short runway to generate demand. We move quickly from brief to campaign, with creative production and channel setup ready from day one rather than requiring a long onboarding and planning phase.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Do you run WhatsApp marketing campaigns alongside Meta and Google?",
        a: "Yes. WhatsApp is a critical channel for Indian education audiences and we integrate WhatsApp campaigns into the overall marketing strategy. This includes broadcast campaigns, drip sequences for leads, and re-engagement for past inquiries.",
      },
      {
        q: "Do you set up conversion tracking including Meta Pixel and Google Tag Manager?",
        a: "Yes. We set up or audit your full tracking infrastructure before any spend begins. This includes Meta Pixel, Google Tag Manager, GA4, and goal configuration so every rupee of spend is measurable against actual enrolments rather than vanity metrics.",
      },
      {
        q: "Can you manage campaigns in Hindi or regional languages as well?",
        a: "Yes. If you are targeting audiences in Hindi, Tamil, Telugu, Kannada, or other regional languages, we can create and manage campaigns in those languages. Regional language campaigns often deliver significantly lower CPLs than English-only campaigns for the right audience.",
      },
      {
        q: "How do you approach SEO for Indian education search queries?",
        a: "We focus on high-intent search queries relevant to your programmes and audience, including queries specific to certifications, placements, and job outcomes that Indian learners search for. We combine technical SEO with content that answers the specific questions your prospective learners are asking.",
      },
    ],
  },
  cta: {
    title: "Ready to build a growth engine that converts?",
    description:
      "Tell us your programmes, current challenges, and growth goals. We will propose a performance marketing plan with a clear path to improved enrolment costs.",
    buttonText: "Start the conversation",
    buttonHref: "/contact",
  },
};

export const graphicDesignPage: ServicePageContent = {
  slug: "/services/technical/graphic-designing",
  label: "Graphic Design",
  title: "Design that builds trust at every learner touchpoint",
  heroAccent: "Design that earns trust",
  subtitle:
    "Brand assets, marketing creatives, and course visuals produced on short turnarounds with consistent quality. We remove design bottlenecks so your campaigns launch on schedule, your brand stays coherent, and your product looks as professional as the experience it delivers.",
  tagline:
    "Every touchpoint in the learner journey is an opportunity to build trust. Design is how you take it or waste it.",
  icon: { src: "/Assets/service/technology.svg", alt: "Graphic design icon" },
  heroImage: heroImages.graphicDesign,
  metrics: [
    { value: "48-hr turnaround", label: "Standard assets delivered from an approved brief" },
    { value: "Brand + campaign", label: "Visual systems and creative production both covered" },
    { value: "Template kits", label: "Reusable design systems your team can extend" },
    { value: "Startup to scale", label: "From a first brand identity to a full campaign programme" },
  ],
  problems: [
    {
      title: "Your brand looks different on every channel and nothing feels professional",
      description:
        "When your Instagram page looks different from your website, your website looks different from your pitch deck, and your deck looks different from your course materials, prospects lose confidence before they even consider your product. Brand inconsistency is one of the clearest signals that a company is not yet operating professionally.",
    },
    {
      title: "Your in-house team takes days to produce a single creative and campaigns are delayed",
      description:
        "Small teams with one designer or no dedicated designer create a bottleneck that slows every campaign. When a webinar promotion needs to go out within 24 hours and the designer is tied up, the campaign goes out late or with assets that look rushed.",
    },
    {
      title: "You have no template system and every new asset starts from scratch",
      description:
        "Without a proper visual system, every social post, email banner, and presentation requires building from scratch. This is slow, expensive, and produces inconsistent results. A properly built template kit lets any team member produce on-brand assets in minutes.",
    },
    {
      title: "Your marketing materials look good but do not convert because they do not communicate value clearly",
      description:
        "Indian learners make enrolment decisions based on specific outcomes, recognisable proof points, and clear programme details. Design that looks visually impressive but buries the value proposition behind aesthetics consistently underperforms in Indian markets.",
    },
  ],
  outcomes: [
    {
      title: "A brand that looks the same everywhere it appears",
      description:
        "A coherent visual identity across your ads, social posts, pitch decks, course materials, and product surfaces tells learners and partners that you are a professional, established organisation. We build visual systems that are practical to apply consistently, not just a style guide that sits in a folder and gets ignored when deadlines arrive. Your team can extend the system as you add new campaigns and product areas.",
    },
    {
      title: "Creative production that does not hold up your campaigns",
      description:
        "When you have a cohort launching in ten days or a campaign brief that arrived yesterday, you cannot wait two weeks for a creative agency turnaround cycle. We work on short windows by default, with a structured briefing process that gets us to first-round designs quickly. Revision cycles are defined so feedback loops do not extend timelines unnecessarily.",
    },
    {
      title: "Design decisions tied to conversion and comprehension",
      description:
        "Design for EdTech is not purely about visual appeal. It is about communicating value clearly enough that a prospective learner decides to act and clearly enough that an enrolled learner keeps progressing. We apply a performance and clarity lens to creative work, asking whether every design choice is helping or hindering the outcome your business needs.",
    },
  ],
  subServices: [
    {
      title: "Brand and visual systems",
      points: [
        "Brand kits and UI component libraries for consistent application",
        "Template sets for social media, ads, decks, and email communications",
        "Brand guidelines that are practical enough for non-designers to follow",
      ],
    },
    {
      title: "Campaign creatives",
      points: [
        "Static and motion assets for acquisition campaigns and retention communications",
        "Creative iteration informed by performance data",
        "Ad, landing page, and email visual production",
      ],
    },
    {
      title: "Course and product visuals",
      points: [
        "Illustrations and icons for modules, learning tracks, and product features",
        "Interface assets for learner-facing product screens",
        "Scalable visual systems that grow with new content",
      ],
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: "We align on brand and use cases",
      text: "We start by understanding your existing brand system, the specific design needs you have right now, and how design work typically gets used in your organisation. This shapes how we approach the brief and what we produce first.",
    },
    {
      step: 2,
      title: "We design and iterate with your feedback",
      text: "We produce designs on short timelines and bring them to you for a structured round of feedback. We apply revisions clearly and quickly, with a defined number of revision rounds per brief to keep timelines predictable.",
    },
    {
      step: 3,
      title: "We build systems that make future work faster",
      text: "Where it makes sense, we invest in creating templates, component libraries, and reusable assets so each project builds on the last. This compounds over time into a design infrastructure your team can use independently.",
    },
  ],
  targetAudience: [
    {
      title: "Marketing Teams at EdTech Companies",
      description:
        "You have campaigns to run and content to produce at a pace your in-house design capacity cannot sustain. We become your production partner, turning around high-quality creative assets within short timelines while maintaining brand consistency across every piece.",
    },
    {
      title: "Product Teams Building Learner-facing Interfaces",
      description:
        "You need illustrations, icons, and interface assets that feel cohesive and professional. We work within your existing design system or help you build one so every screen in your product reinforces trust and clarity rather than raising questions.",
    },
    {
      title: "Founders Who Need Professional Design Without Hiring",
      description:
        "You know that design quality affects how your brand and product are perceived but you are not at the stage to hire a full design team. We give you access to a professional design function on a flexible basis covering brand, marketing, and product needs as your business grows.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Can you work with our existing brand guidelines?",
        a: "Yes. We follow your brand system and extend it within the established guidelines. If your guidelines are incomplete or outdated, we can help you fill in the gaps.",
      },
      {
        q: "Do you produce template sets for our team to use?",
        a: "Yes. For ongoing clients, we build reusable template sets in Figma, Canva, or the tools your team already uses, so you can produce consistent assets internally when needed.",
      },
      {
        q: "Is this structured as a monthly retainer or a per-project arrangement?",
        a: "Both structures are possible depending on your design volume and consistency of need. We can advise on which makes more sense for your current stage.",
      },
      {
        q: "Can you produce motion graphics and video assets as well?",
        a: "Yes. We produce simple motion assets for ads and social content. Complex video production is scoped separately based on requirements.",
      },
    ],
  },
  cta: {
    title: "Need design support that keeps pace with your business?",
    description:
      "Share your current design needs and team structure. We will suggest the engagement model that gives you consistent quality without bottlenecks.",
    buttonText: "Start the conversation",
    buttonHref: "/contact",
  },
};

export const websiteDesignPage: ServicePageContent = {
  slug: "/services/technical/website-designing",
  label: "Website Design and Development",
  title: "Websites built to convert learners and build trust",
  heroAccent: "Websites that earn enrolments",
  subtitle:
    "From programme landing pages to full marketing sites, we design and build fast, responsive, conversion-focused experiences that are aligned to your brand and optimised for the specific decisions your audience is trying to make.",
  tagline:
    "A website that converts learners is built on one insight: people enrol in programmes they trust, not just programmes they happen to find.",
  icon: { src: "/Assets/service/technology.svg", alt: "Website design icon" },
  heroImage: heroImages.websiteDesign,
  metrics: [
    { value: "End-to-end", label: "Design and development delivered by one team" },
    { value: "Mobile-first", label: "Built for every screen size from day one" },
    { value: "SEO-ready", label: "Core Web Vitals and search structure from the start" },
    { value: "Post-launch support", label: "Iteration and improvements built into the engagement" },
  ],
  problems: [
    {
      title: "Your website is slow on mobile and most of your visitors are browsing on their phones",
      description:
        "More than 70 percent of internet users in India primarily browse on mobile. A website that takes more than three seconds to load on a 4G connection loses most of its visitors before they see the content. Fast, lightweight, mobile-first websites are not optional in the Indian market.",
    },
    {
      title: "A first-time visitor cannot understand what you offer within the first 10 seconds",
      description:
        "Many Indian education websites assume visitors already understand the product. Someone landing on your page for the first time should immediately understand what you offer, who it is for, and why it is worth their time. Most websites fail this test and lose leads that paid advertising spent money to bring.",
    },
    {
      title: "Contact form leads are not being followed up because there is no system connecting them to your sales process",
      description:
        "A website that collects leads without a proper CRM integration, WhatsApp notification, or automated follow-up is a wasted acquisition investment. Indian businesses lose a large portion of leads simply because the follow-up process is slow, manual, or completely absent.",
    },
    {
      title: "Your website was built two years ago and no longer reflects what your business does",
      description:
        "Businesses evolve faster than websites get updated. A website showing outdated services, old pricing, and content that no longer reflects the company creates confusion and erodes credibility, especially when a referral visits your site to validate their decision to reach out.",
    },
  ],
  outcomes: [
    {
      title: "Landing pages structured around how learners decide",
      description:
        "We design and build programme and cohort landing pages that are structured around the specific decision a prospective learner is trying to make, presenting the right information in the right order with proof points and conversion paths placed deliberately. Pages are designed mobile-first because most learners encounter your programmes on their phones. Every element earns its place based on whether it helps conversion.",
    },
    {
      title: "Performance and search visibility built in from the start",
      description:
        "A slow website that ranks poorly is costing you enrolments every day without your knowing it. We build pages with Core Web Vitals and foundational SEO structure in mind from the beginning so you are not paying for a redesign six months later to fix what should have been correct the first time. Clean code, appropriate image optimisation, and semantic structure are defaults, not afterthoughts.",
    },
    {
      title: "A single partner for design and implementation",
      description:
        "We handle the entire process from wireframe to deployed website so you do not need to manage a designer and a developer separately. The transition between design and build happens internally within our team, which means fewer gaps, fewer misinterpretations, and a final product that looks and behaves exactly as designed rather than being modified during implementation.",
    },
  ],
  subServices: [
    {
      title: "Information architecture and structure",
      points: [
        "Page and site structures mapped to your offers and buyer journeys",
        "Navigation design and key conversion path planning",
        "SEO-informed site structure and content hierarchy",
      ],
    },
    {
      title: "UI design and user experience",
      points: [
        "Wireframes and high-fidelity UI designs per page type",
        "Component library for consistent experiences across the site",
        "Responsive design validated across desktop, tablet, and mobile",
      ],
    },
    {
      title: "Build and ongoing optimisation",
      points: [
        "Development in a modern, maintainable stack",
        "Performance, accessibility, and Core Web Vitals improvements",
        "Post-launch iteration based on analytics and user feedback",
      ],
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: "We map your offer, audience, and goals",
      text: "We start by understanding what you are offering, who your prospective learner is, and what conversion action you need the website to drive. This brief shapes the site structure, page hierarchy, and the messaging framework that runs through every page.",
    },
    {
      step: 2,
      title: "We design for your brand and your conversion goals",
      text: "We produce wireframes and UI designs that are reviewed with you before development begins. Design reviews are structured so feedback is applied efficiently, and we do not move to build until the design direction is confirmed.",
    },
    {
      step: 3,
      title: "We build, launch, and improve",
      text: "We implement the approved designs in clean, performant code, conduct pre-launch testing, and support the go-live. Post-launch we continue to iterate based on analytics data and the feedback your team collects from real users.",
    },
  ],
  targetAudience: [
    {
      title: "Marketing Heads and Growth Teams",
      description:
        "You need a website that actively converts visitors into leads and enrolments rather than functioning as a digital brochure. We build with conversion as the primary objective, ensuring every design decision is tied to a measurable outcome rather than a visual preference.",
    },
    {
      title: "Founders Launching or Relaunching Their Platform",
      description:
        "You are building your first serious web presence or overhauling an existing one that no longer reflects your ambitions. We guide you through structure, messaging, and design so the final product represents the business you are building rather than the constraints of your starting point.",
    },
    {
      title: "Product Teams Adding Marketing Pages",
      description:
        "You have an existing product and you need landing pages or a marketing section that matches the quality of the core product experience. We handle design and build so your engineering team can stay focused on the product roadmap rather than building marketing infrastructure.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Which technology stack do you build on?",
        a: "We primarily build with Next.js for marketing sites and landing pages. For specific requirements we adapt to what makes sense for the project. We always prioritise maintainability.",
      },
      {
        q: "Can you improve our existing website rather than rebuilding it?",
        a: "Yes. We can redesign specific sections, improve performance, improve conversion rates, or execute a full redesign depending on where your biggest gaps are.",
      },
      {
        q: "Do you handle website copy as well as design?",
        a: "We can collaborate closely on copy and messaging strategy, or work with copy you provide. For clients who need both, we can scope copywriting as part of the engagement.",
      },
      {
        q: "What does ongoing website support look like after launch?",
        a: "We offer post-launch support for updates, new page builds, performance improvements, and iteration based on analytics. The structure depends on how much ongoing work you expect.",
      },
    ],
  },
  cta: {
    title: "Ready to build a website that actually converts?",
    description:
      "Share your current site, your goals, and the gaps you know exist. We will propose an engagement that addresses them without unnecessary scope.",
    buttonText: "Start the conversation",
    buttonHref: "/contact",
  },
};

export const mobileAppDevPage: ServicePageContent = {
  slug: "/services/technical/mobile-app-development",
  label: "Mobile App Development",
  title: "Learning apps built to earn and retain user trust",
  heroAccent: "Apps learners come back to",
  subtitle:
    "From MVP to production-grade mobile product, we build learner-facing apps and internal tools with a reliable delivery partner who understands both product quality and education business requirements.",
  tagline:
    "A great learning app eventually becomes invisible. Learners stop thinking about the technology and start thinking about what they are learning. That is the goal.",
  icon: { src: "/Assets/service/technology.svg", alt: "Mobile app development icon" },
  heroImage: heroImages.mobileApp,
  metrics: [
    { value: "8–12 weeks", label: "MVP from scoped brief to testable and deployable build" },
    { value: "iOS + Android", label: "Cross-platform delivery with native-quality performance" },
    { value: "API integrations", label: "LMS, CRM, and payment systems connected" },
    { value: "Post-launch care", label: "Maintenance, updates, and iteration cycles included" },
  ],
  problems: [
    {
      title: "Learners access your content through a browser which creates high dropout rates",
      description:
        "Browser-based learning competes with every other open tab and notification on a learner's phone. A dedicated app with progress tracking, push notifications, and an offline mode creates a focused environment that significantly improves completion rates and learner retention.",
    },
    {
      title: "Your existing app has one-star reviews and learners complain about crashes and slow loading",
      description:
        "A poorly built app is worse than no app. One-star reviews on the Play Store are visible to every prospective learner. Apps built quickly by freelancers without structured testing accumulate bugs that erode trust faster than any marketing campaign can rebuild.",
    },
    {
      title: "You want to accept UPI, Razorpay EMI, and net banking but your current platform does not support it",
      description:
        "Indian learners expect to pay through UPI, net banking, and EMI options. Platforms that support only international payment gateways or credit cards create friction at the point of conversion that directly reduces paid enrolments, particularly from tier-2 and tier-3 city audiences.",
    },
    {
      title: "Your app does not work well on slow connections and you are losing learners in tier-2 and tier-3 cities",
      description:
        "A growing segment of the Indian learner market is in cities and towns with inconsistent mobile connectivity. Apps requiring fast connections to load video and content create an experience that excludes this audience entirely. Offline mode and lightweight builds are essential for this segment.",
    },
  ],
  outcomes: [
    {
      title: "A testable MVP delivered within a predictable timeline",
      description:
        "We take your product brief from concept to a deployable MVP in eight to twelve weeks, with clear milestones and review checkpoints throughout. The goal is to get your app in front of real learners quickly so you can validate assumptions and refine the product direction before committing to the full build. We scope deliberately to avoid building things that are not yet needed.",
    },
    {
      title: "Product quality that earns early positive reviews",
      description:
        "Learner trust is fragile. Crashes, slow loading, and confusing navigation erode it quickly and result in one-star reviews that persist and influence new users for months. We build with quality metrics in mind from the first sprint, including load time, stability, offline behaviour, and accessibility, so your early adopters become advocates rather than churn.",
    },
    {
      title: "Engineering continuity after launch without re-procurement",
      description:
        "The app you ship on day one is not the app you want six months later. We provide ongoing engineering capacity for feature additions, platform updates, dependency upgrades, and bug fixes so you are not starting a new agency search every time you need to make progress. We align development cycles to your product roadmap rather than our convenience.",
    },
  ],
  subServices: [
    {
      title: "Product definition and scope",
      points: [
        "MVP definition, roadmap structure, and milestone planning",
        "Platform and architecture decisions based on your requirements",
        "User flow mapping and core feature prioritisation",
      ],
    },
    {
      title: "Feature design and development",
      points: [
        "Core learning flows including onboarding, content delivery, and progress tracking",
        "Third-party integrations with LMS, CRM, and payment platforms",
        "Analytics instrumentation and feedback collection mechanisms",
      ],
    },
    {
      title: "Launch and ongoing maintenance",
      points: [
        "App store submission support and release management",
        "Bug fixes, stability improvements, and OS compatibility updates",
        "New feature cycles aligned to your product roadmap",
      ],
    },
  ],
  howItWorks: [
    {
      step: 1,
      title: "We scope the product carefully",
      text: "We align on the users you are building for, the core flows the MVP needs to cover, and the success metrics that will tell you whether the product is working. Clear scope at this stage prevents scope creep and timeline slippage during delivery.",
    },
    {
      step: 2,
      title: "We build in defined milestones",
      text: "We deliver the app in structured milestones with review sessions at each checkpoint. You see working software at regular intervals rather than waiting for a big reveal at the end. This allows us to incorporate feedback throughout rather than at the finish.",
    },
    {
      step: 3,
      title: "We support launch and iterate post-release",
      text: "We handle the final testing, release preparation, and store submission process. After launch, we move into a maintenance and iteration cycle, shipping improvements based on user feedback and your evolving product strategy.",
    },
  ],
  targetAudience: [
    {
      title: "Product Leads at EdTech Companies",
      description:
        "You need to ship a learner-facing mobile product but your engineering team is stretched across multiple priorities simultaneously. We provide focused delivery capacity to get your app to market on schedule, with the product quality and technical stability that early learner trust requires.",
    },
    {
      title: "Founders Building Their First Mobile Product",
      description:
        "You have a validated web experience and you want to extend it to mobile in a way that earns positive early reviews. We help you scope the right MVP, make sensible technology choices for your stage, and deliver a product that early adopters recommend rather than abandon.",
    },
    {
      title: "Tech Leads Needing a Focused Delivery Partner",
      description:
        "You have specific features or modules that need to be built outside your core team's current capacity. We plug into your existing architecture and processes, delivering clean and well-documented code that integrates without creating technical debt for your permanent team.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Can you integrate Razorpay, PayU, or other Indian payment gateways into the app?",
        a: "Yes. We integrate Razorpay, PayU, Cashfree, and other Indian payment gateways including UPI, net banking, and EMI options. Proper payment integration is one of the most important conversion levers for Indian learner audiences and we treat it as a core part of the product, not an afterthought.",
      },
      {
        q: "Do you build for Android first given the Indian market?",
        a: "Yes. We build mobile-first with Android as the primary platform for most Indian education audiences. We use cross-platform development so iOS is also covered without duplicating the entire development effort. The final recommendation depends on your specific learner profile.",
      },
      {
        q: "Can you build an offline mode for learners in areas with poor connectivity?",
        a: "Yes. Offline access for video content and course materials is achievable and significantly improves completion rates in tier-2 and tier-3 city markets. We scope and implement offline functionality based on the type of content your learners access.",
      },
      {
        q: "Do you submit the app to the Play Store and App Store?",
        a: "Yes. We handle the complete submission process for both the Google Play Store and the Apple App Store, including compliance with store policies, metadata optimisation, and any review responses required during the approval process.",
      },
    ],
  },
  cta: {
    title: "Ready to build a mobile product without the delays?",
    description:
      "Tell us what you are building, the platform and timelines you have in mind, and the user outcome you are aiming for. We will propose a delivery plan.",
    buttonText: "Start the conversation",
    buttonHref: "/contact",
  },
};
