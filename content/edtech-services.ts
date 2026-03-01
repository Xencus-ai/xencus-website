/**
 * EdTech services page: operations sections (Live class, LMS, Analytics).
 * Copy only — no structural or layout data.
 */

export const edtechLiveClass = {
  label: "Live class operations",
  title: "Live classes, run for you",
  description:
    "From trainer rosters to reminders and recordings, we manage the full lifecycle of every live session, across all the domains you sell.",
  listItems: [
    {
      name: "Zoom & Google Meet.",
      description:
        "Cohort-wise timetables, links, and reminders on the platforms you already use.",
    },
    {
      name: "Trainer backup.",
      description: "Dedicated assignment and backups so classes never get cancelled.",
    },
    {
      name: "Attendance & completion.",
      description: "Session-wise capture ready to sync with your CRM or LMS.",
    },
    {
      name: "One operations layer.",
      description: "All your live delivery in one place—scalable and reliable.",
    },
  ],
  image: {
    src: "/Assets/edutech/live-class.avif",
    alt: "Dashboard view of live class scheduling and attendance",
  },
} as const;

export const edtechLmsOps = {
  label: "LMS & course operations",
  title: "Courses and LMS, kept in sync",
  description:
    "We maintain your course structures, cohorts, and learner journeys inside your LMS so learners always see exactly what they're supposed to—no broken links or missing modules.",
  listItems: [
    {
      text: "Domain-wise course templates configured for each new cohort.",
    },
    {
      text: "Projects, quizzes, and assignments set up with clear grading and deadlines.",
    },
    {
      text: "Enrolment, access, and completion rules implemented so support tickets go down.",
    },
  ],
  image: {
    src: "/Assets/edutech/course.png",
    alt: "LMS dashboard showing courses and learner progress",
  },
} as const;

export const edtechAnalytics = {
  label: "Analytics & reporting",
  title: "One view of your learner outcomes",
  description:
    "We pull together attendance, completion, projects, and feedback so your leadership team gets a clean picture of how every cohort is performing.",
  listItems: [
    {
      text: "Program-wise dashboards for enrolments, live hours, and completions.",
    },
    {
      text: "Export-ready views for investors, enterprise clients, and partners.",
    },
    {
      text: "Exception reports so your team can intervene before cohorts slip.",
    },
  ],
  image: {
    src: "/Assets/edutech/analytics.png",
    alt: "Analytics dashboard showing learner and cohort performance",
  },
} as const;
