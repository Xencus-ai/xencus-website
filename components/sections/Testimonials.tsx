type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Akhilesh",
    role: "Founder & CEO",
    company: "Acadme",
    quote:
      "Xencus runs our cohorts end‑to‑end. It feels like we added a full delivery team without the hiring overhead.",
  },
  {
    name: "Gaurav",
    role: "Founder & CEO",
    company: "Gladify",
    quote:
      "Having a partner who understands both academic rigor and ops at scale has made it easier to launch new programs.",
  },
  {
    name: "Aditya",
    role: "Managing Director",
    company: "GradMantra",
    quote:
      "We rely on Xencus to keep batches on track and learner experience consistent while we focus on distribution.",
  },
  {
    name: "Vishwajeet",
    role: "Founder & CEO",
    company: "InternsForge",
    quote:
      "From trainers to schedules to reporting, Xencus is the backbone of our program delivery engine.",
  },
  {
    name: "Ranjith",
    role: "Head of HR",
    company: "Talentled",
    quote:
      "They make it simple to run outcome‑driven learning journeys for our teams without stretching our internal ops.",
  },
  {
    name: "TPO",
    role: "Training & Placement Officer",
    company: "GEC Bhojpur",
    quote:
      "Our students get structured, industry‑aligned sessions while our faculty stays focused on core academics.",
  },
  {
    name: "HOD, BCA & MCA",
    role: "Department Head",
    company: "Uttarakhand University",
    quote:
      "Xencus helps us bridge classroom learning with practical exposure through well‑run industry programs.",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="bg-background py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-16 lg:px-8">
        <div className="lg:max-w-sm">
          <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-paragraph-secondary">
            Testimonials
          </span>
          <h2
            id="testimonials-title"
            className="mt-4 text-3xl font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl"
          >
            Trusted by{" "}
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
              EdTechs and universities
            </span>
          </h2>
          <p className="mt-4 text-sm font-medium leading-relaxed text-paragraph-secondary sm:text-base">
            Founders, HR leaders, and academic heads use Xencus to run programs
            that feel world‑class for learners and simple for their teams.
          </p>

          <div className="mt-8 grid gap-4 text-sm text-paragraph-secondary sm:grid-cols-3 sm:text-xs lg:grid-cols-1 lg:text-sm">
            <div className="rounded-2xl border border-gray-100 bg-white/80 p-4 shadow-sm backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Partners
              </div>
              <div className="mt-1 text-2xl font-semibold text-heading">7+</div>
              <p className="mt-1 text-xs text-paragraph-secondary">
                Across EdTech, industry and universities
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white/80 p-4 shadow-sm backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Focus
              </div>
              <div className="mt-1 text-2xl font-semibold text-heading">Delivery</div>
              <p className="mt-1 text-xs text-paragraph-secondary">
                You own the brand, we run the ops
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white/80 p-4 shadow-sm backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Confidence
              </div>
              <div className="mt-1 text-2xl font-semibold text-heading">High</div>
              <p className="mt-1 text-xs text-paragraph-secondary">
                Repeat cohorts and long‑term relationships
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <figure
                key={`${testimonial.company}-${testimonial.name}`}
                className="relative flex h-full flex-col rounded-2xl border border-gray-100 bg-white/90 p-5 text-left shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold uppercase text-white">
                    {testimonial.company
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 3)}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-heading">
                      {testimonial.company}
                    </p>
                    <p className="text-xs text-paragraph-secondary">
                      {testimonial.name} · {testimonial.role}
                    </p>
                  </div>
                </div>
                <blockquote className="text-sm leading-relaxed text-paragraph-secondary">
                  “{testimonial.quote}”
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

