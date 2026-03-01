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
    "We maintain your course structures, cohorts, and learner journeys so learners always see the right content at the right time—no broken links or missing modules. Use your existing LMS or our white-label LMS.",
  listItems: [
    {
      name: "Your LMS or ours.",
      description:
        "We integrate with your existing LMS or provide a white-label LMS so everything stays under your brand.",
    },
    {
      name: "Course templates.",
      description: "Domain-wise templates configured for each new cohort with clear milestones.",
    },
    {
      name: "Projects & assessments.",
      description: "Quizzes, assignments, and grading set up with clear deadlines and rubrics.",
    },
    {
      name: "Enrolment & completion.",
      description: "Access and completion rules implemented so support tickets go down.",
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
    "We pull attendance, completion, projects, and feedback into a single view so your leadership and sales teams see exactly how every cohort is performing—without digging through spreadsheets.",
  listItems: [
    {
      name: "Program dashboards.",
      description: "Enrolments, live hours, and completions by program and cohort.",
    },
    {
      name: "Export-ready views.",
      description: "Clean reports for investors, enterprise clients, and partners.",
    },
    {
      name: "Exception reports.",
      description: "Flags so your team can intervene before cohorts slip.",
    },
    {
      name: "Actionable insights.",
      description: "Metrics that tie directly to revenue and retention.",
    },
  ],
  image: {
    src: "/Assets/edutech/analytics.png",
    alt: "Analytics dashboard showing learner and cohort performance",
  },
} as const;
