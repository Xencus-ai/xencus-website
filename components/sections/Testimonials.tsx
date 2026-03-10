type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  /** Optional: "edtech" | "university" | "corporate" for accent color */
  type?: "edtech" | "university" | "corporate";
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Akhilesh",
    role: "Founder & CEO",
    company: "Acadme",
    type: "edtech",
    quote:
      "Xencus runs our cohorts end‑to‑end. It feels like we added a full delivery team without the hiring overhead.",
  },
  {
    name: "Gaurav",
    role: "Founder & CEO",
    company: "Gladify",
    type: "edtech",
    quote:
      "Having a partner who understands both academic rigor and ops at scale has made it easier to launch new programs.",
  },
  {
    name: "Aditya",
    role: "MD",
    company: "GradMantra",
    type: "edtech",
    quote:
      "We rely on Xencus to keep batches on track and learner experience consistent while we focus on distribution.",
  },
  {
    name: "Vishwajeet",
    role: "Founder & CEO",
    company: "InternsForge",
    type: "edtech",
    quote:
      "From trainers to schedules to reporting, Xencus is the backbone of our program delivery engine.",
  },
  {
    name: "Ranjith",
    role: "Head of HR",
    company: "Talentled",
    type: "corporate",
    quote:
      "They make it simple to run outcome‑driven learning journeys for our teams without stretching our internal ops.",
  },
  {
    name: "TPO",
    role: "Training & Placement Officer",
    company: "GEC Bhojpur",
    type: "university",
    quote:
      "Our students get structured, industry‑aligned sessions while our faculty stays focused on core academics.",
  },
  {
    name: "HOD, BCA & MCA",
    role: "Department Head",
    company: "Uttranchal University",
    type: "university",
    quote:
      "Xencus helps us bridge classroom learning with practical exposure through well‑run industry programs.",
  },
];

/* Initials from company name */
function getInitials(company: string) {
  return company
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/* Per-type accent styles */
const TYPE_STYLES = {
  edtech: {
    avatar: "bg-amber-500 text-white",
    badge: "bg-amber-50 text-amber-700 border-amber-200/60",
    quote: "text-amber-400",
  },
  university: {
    avatar: "bg-blue-600 text-white",
    badge: "bg-blue-50 text-blue-700 border-blue-200/60",
    quote: "text-blue-400",
  },
  corporate: {
    avatar: "bg-emerald-600 text-white",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    quote: "text-emerald-400",
  },
};

const TYPE_LABEL = {
  edtech: "EdTech",
  university: "University",
  corporate: "Corporate",
};

/* Five filled stars */
function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="size-3.5 fill-amber-400" viewBox="0 0 20 20" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Subtle top divider */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10 xl:max-w-7xl">

        {/* ── Header ── */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
            <span aria-hidden className="inline-block h-px w-6 bg-amber-500/50" />
            What our partners say
            <span aria-hidden className="inline-block h-px w-6 bg-amber-500/50" />
          </span>
          <h2
            id="testimonials-title"
            className="mt-4 text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl"
          >
            Trusted by founders, HR leaders
            <br className="hidden sm:block" /> and academic heads
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#707070] sm:text-base">
            Real people running real programs — this is what they say about working with Xencus.
          </p>
        </div>

        {/* ── Masonry-style grid ── */}
        {/* Mobile: single column | sm: 2 col | lg: 3 col */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {TESTIMONIALS.map((t) => {
            const type = t.type ?? "edtech";
            const styles = TYPE_STYLES[type];
            return (
              <figure
                key={`${t.company}-${t.name}`}
                className="card-spin-figure group mb-5 flex h-full break-inside-avoid flex-col rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              >
                {/* Top row: avatar + info + type badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-black ${styles.avatar}`}
                    >
                      {getInitials(t.company)}
                    </div>
                    <div>
                      <p className="text-sm font-bold leading-tight text-[#171717]">
                        {t.company}
                      </p>
                      <p className="mt-0.5 text-xs text-[#707070]">
                        {t.name} · {t.role}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${styles.badge}`}
                  >
                    {TYPE_LABEL[type]}
                  </span>
                </div>

                {/* Stars */}
                <div className="mt-4">
                  <Stars />
                </div>

                {/* Quote */}
                <blockquote className="relative mt-3">
                  {/* Decorative opening quote */}
                  <span
                    aria-hidden
                    className={`absolute -top-1 -left-0.5 text-4xl font-black leading-none ${styles.quote} opacity-30`}
                  >
                    &ldquo;
                  </span>
                  <p className="pl-4 text-sm leading-7 text-[#525252]">
                    {t.quote}
                  </p>
                </blockquote>
              </figure>
            );
          })}
        </div>

        {/* ── Bottom trust bar ── */}
        <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
          <div className="flex items-center gap-2.5">
            <div className="flex -space-x-2">
              {["A", "G", "V", "R"].map((l, i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-amber-500 text-[10px] font-black text-white"
                >
                  {l}
                </div>
              ))}
            </div>
            <p className="text-sm font-semibold text-[#171717]">
              300+ active partners
            </p>
          </div>
          <div className="hidden h-4 w-px bg-zinc-200 sm:block" aria-hidden />
          <div className="flex items-center gap-2">
            <Stars />
            <p className="text-sm font-semibold text-[#171717]">4.8 average rating</p>
          </div>
          <div className="hidden h-4 w-px bg-zinc-200 sm:block" aria-hidden />
          <p className="text-sm text-[#707070]">
            EdTech · Corporate · Universities
          </p>
        </div>

      </div>
    </section>
  );
}
