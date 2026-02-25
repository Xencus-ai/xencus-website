import Image from "next/image";
import Link from "next/link";

type AvatarConfig = {
  src: string;
  sizeClass: string;
  offsetClass: string;
};

// Staggered, curved gallery: larger cards toward the middle columns,
// slight vertical offsets to give a "curved screen" feel.
const AVATARS: AvatarConfig[] = [
  {
    src: "/Assets/testimonial/connor-wilkins-2crxTr4jCkc-unsplash.jpg",
    sizeClass: "h-32 w-28 sm:h-36 sm:w-32 lg:h-40 lg:w-36",
    offsetClass: "translate-y-4",
  },
  {
    src: "/Assets/testimonial/lucas-gouvea-aoEwuEH7YAs-unsplash.jpg",
    sizeClass: "h-28 w-24 sm:h-32 sm:w-28 lg:h-36 lg:w-32",
    offsetClass: "translate-y-1",
  },
  {
    src: "/Assets/testimonial/ali-morshedlou-WMD64tMfc4k-unsplash.jpg",
    sizeClass: "h-32 w-28 sm:h-36 sm:w-32 lg:h-40 lg:w-36",
    offsetClass: "-translate-y-1",
  },
  {
    src: "/Assets/testimonial/mark-farias-dt60oksDTx8-unsplash.jpg",
    sizeClass: "h-28 w-24 sm:h-32 sm:w-28 lg:h-36 lg:w-32",
    offsetClass: "translate-y-1",
  },
  {
    src: "/Assets/testimonial/robert-godwin-cdksyTqEXzo-unsplash.jpg",
    sizeClass: "h-32 w-28 sm:h-36 sm:w-32 lg:h-40 lg:w-36",
    offsetClass: "translate-y-4",
  },
  {
    src: "/Assets/testimonial/stefan-stefancik-QXevDflbl8A-unsplash.jpg",
    sizeClass: "h-28 w-24 sm:h-32 sm:w-28 lg:h-36 lg:w-32",
    offsetClass: "translate-y-6",
  },
  {
    src: "/Assets/testimonial/jack-finnigan-rriAI0nhcbc-unsplash.jpg",
    sizeClass: "h-32 w-28 sm:h-36 sm:w-32 lg:h-40 lg:w-36",
    offsetClass: "translate-y-3",
  },
  {
    src: "/Assets/testimonial/rafaella-mendes-diniz-et_78QkMMQs-unsplash.jpg",
    sizeClass: "h-28 w-24 sm:h-32 sm:w-28 lg:h-36 lg:w-32",
    offsetClass: "translate-y-5",
  },
  {
    src: "/Assets/testimonial/jimmy-fermin-bqe0J0b26RQ-unsplash.jpg",
    sizeClass: "h-28 w-24 sm:h-32 sm:w-28 lg:h-36 lg:w-32",
    offsetClass: "translate-y-5",
  },
  {
    src: "/Assets/testimonial/alyona-grishina-BBmi4nJjKk8-unsplash.jpg",
    sizeClass: "h-32 w-28 sm:h-36 sm:w-32 lg:h-40 lg:w-36",
    offsetClass: "translate-y-7",
  },
];

type MiniTestimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: string;
};

const TESTIMONIAL_ROWS: MiniTestimonial[][] = [
  [
    {
      name: "Rahul Mehta",
      role: "Co-founder",
      company: "SkillBridge",
      quote: "Xencus helped us scale cohorts without breaking our trainer ops.",
      rating: "4.9",
    },
    {
      name: "Ananya Iyer",
      role: "Head of Academics",
      company: "LearnSphere",
      quote: "Batch quality stayed consistent even as we doubled enrolments.",
      rating: "5.0",
    },
    {
      name: "Saurabh Kulkarni",
      role: "VP, Operations",
      company: "UpNext Academy",
      quote: "Their team feels like an in-house ops engine for our EdTech.",
      rating: "4.8",
    },
    {
      name: "Neha Kapoor",
      role: "Program Director",
      company: "CampusX",
      quote: "Scheduling, trainers, projects—Xencus runs it, we focus on growth.",
      rating: "4.9",
    },
  ],
  [
    {
      name: "Arjun Nair",
      role: "CEO",
      company: "CodeCraft School",
      quote: "We launched new domains faster because Xencus owned the delivery.",
      rating: "5.0",
    },
    {
      name: "Priya Desai",
      role: "Academic Lead",
      company: "NextWave Learning",
      quote: "Learner experience improved while our internal team shrank.",
      rating: "4.9",
    },
    {
      name: "Kunal Sharma",
      role: "Founder",
      company: "GrowthPath Ed",
      quote: "From 1 batch to 20+—operations just stayed predictable.",
      rating: "4.8",
    },
    {
      name: "Simran Bhatia",
      role: "Program Head",
      company: "FutureEdge",
      quote: "Xencus gave us the confidence to sell bigger enterprise deals.",
      rating: "4.9",
    },
  ],
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="bg-background py-12 sm:py-16"
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-[90vw]">
        <div className="relative pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-12">
          {/* Vertical guide lines behind gallery */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 flex justify-center"
          >
            <div className="mx-auto flex h-64 max-w-5xl items-stretch justify-between opacity-35">
              {[0, 1, 2, 3, 4].map((i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={i} className="h-full border-l border-dashed border-gray-200" />
              ))}
            </div>
          </div>

          {/* Floating headshot gallery — curved, non-overlapping, no cards in the center column where text sits */}
          <div className="relative mx-auto mt-4 flex max-w-5xl justify-center">
            <div className="grid grid-cols-5 gap-x-6 gap-y-6">
              {AVATARS.map((avatar, index) => (
                <div
                  key={avatar.src}
                  className={`relative overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] ring-1 ring-black/5 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1 hover:scale-[1.02] ${avatar.sizeClass} ${avatar.offsetClass} ${
                    // Leave the exact center column of the lower row empty so text area feels clear.
                    index === 2 || index === 7 ? "lg:translate-x-3" : ""
                  }`}
                >
                  <Image
                    src={avatar.src}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 90px, (max-width: 1280px) 130px, 150px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Center content below gallery, clear of any images */}
          <div className="relative mx-auto mt-12 flex max-w-3xl flex-col items-center text-center sm:mt-14 lg:mt-16">
            <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-paragraph-secondary">
              Testimonials
            </span>
            <h2
              id="testimonials-title"
              className="mt-4 text-3xl font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl"
            >
              <span className="text-heading">Trusted by EdTech leaders</span>
              <br />
              <span className="text-gray-500">across India and beyond</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-paragraph-secondary sm:text-base">
              Learn why EdTech founders and teams trust Xencus to run operations while they
              focus on selling and growth.
            </p>

            {/* Horizontal moving testimonial cards (2 rows) */}
            <div className="relative mt-10 w-full overflow-hidden">
              {/* Left / right fade for softness */}
              <div className="pointer-events-none absolute inset-y-2 left-0 w-24 rounded-r-3xl bg-gradient-to-r from-background via-background/70 to-transparent backdrop-blur-sm" />
              <div className="pointer-events-none absolute inset-y-2 right-0 w-24 rounded-l-3xl bg-gradient-to-l from-background via-background/70 to-transparent backdrop-blur-sm" />

              <div className="space-y-4">
                {TESTIMONIAL_ROWS.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className={`flex min-w-[200%] gap-4 sm:gap-6 ${
                      rowIndex === 0 ? "testimonial-marquee" : "testimonial-marquee-reverse"
                    }`}
                  >
                    {[...row, ...row].map((item, idx) => (
                      <div
                        // eslint-disable-next-line react/no-array-index-key
                        key={idx}
                        className="min-w-[320px] max-w-xs shrink-0 rounded-2xl border border-gray-100 bg-white/95 px-4 py-3 text-left shadow-sm backdrop-blur-sm sm:min-w-[360px] sm:px-5 sm:py-4"
                      >
                        <div className="flex items-center justify-between text-xs font-semibold text-paragraph-secondary">
                          <span className="inline-flex items-center gap-1">
                            <span className="text-yellow-500">★</span>
                            <span>{item.rating}</span>
                          </span>
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-200 text-[10px] text-gray-400">
                            ★
                          </span>
                        </div>
                        <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-paragraph-secondary sm:text-sm">
                          “{item.quote}”
                        </p>
                        <div className="mt-3 text-xs font-semibold text-heading sm:text-sm">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-paragraph-secondary sm:text-xs">
                          {item.role} · {item.company}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(0,0,0,0.25)] transition hover:brightness-110"
            >
              Talk to us
              <span aria-hidden className="ml-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

