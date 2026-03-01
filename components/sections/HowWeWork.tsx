import Image from "next/image";
import { howWeWork } from "@/content/how-we-work";

const cardBase = "relative flex flex-col overflow-hidden bg-white shadow-sm";
const BLUR_SVG =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjMiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjMiIGZpbGw9IiNmNWYwZTgiLz48L3N2Zz4=";

export function HowWeWork() {
  const [pillar1, pillar2, pillar3] = howWeWork.pillars;

  return (
    <section
      className="min-h-[calc(100vh-var(--header-offset))] bg-background py-12 sm:py-16"
      id="how-we-work"
      aria-labelledby="how-we-work-title"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="how-we-work-title"
            className="text-4xl font-bold tracking-tight text-heading sm:text-5xl lg:text-6xl"
          >
            {howWeWork.titleBefore}
            <span className="text-brand-secondary">{howWeWork.titleHighlight}</span>
            {howWeWork.titleAfter}
          </h2>
          <p className="mt-4 text-sm font-medium leading-snug text-paragraph-secondary sm:text-base lg:text-lg max-w-2xl mx-auto">
            {howWeWork.subtitle}
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 grid-rows-auto gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-2">
          {/* Row 1: first two cards — equal height */}
          <div className="card-border-animated flex h-full min-h-0 flex-col">
            <div className="card-border-gradient" aria-hidden />
            <article
              className={`${cardBase} card-border-animated-inner flex min-h-full flex-col pb-5 sm:pb-6`}
              aria-labelledby={`pillar-${pillar1.id}-title`}
            >
            <div className="relative z-10 flex flex-1 flex-col bg-white p-6 sm:p-8">
              <h3
                id={`pillar-${pillar1.id}-title`}
                className="text-2xl font-semibold text-heading sm:text-3xl"
              >
                {pillar1.title}
              </h3>
              <div className="mt-3 flex-1 space-y-3 text-sm font-normal leading-relaxed text-paragraph-secondary">
                {pillar1.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <div className="relative h-56 w-full shrink-0 sm:h-64">
              <Image
                src={pillar1.image}
                alt={pillar1.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) calc(100vw - 2rem), 480px"
                placeholder="blur"
                blurDataURL={BLUR_SVG}
              />
            </div>
          </article>
          </div>

          <div className="card-border-animated flex h-full min-h-0 flex-col">
            <div className="card-border-gradient" aria-hidden />
            <article
              className={`${cardBase} card-border-animated-inner flex min-h-full flex-col pb-5 sm:pb-6`}
              aria-labelledby={`pillar-${pillar2.id}-title`}
            >
            <div className="relative z-10 flex flex-1 flex-col bg-white p-6 sm:p-8">
              <h3
                id={`pillar-${pillar2.id}-title`}
                className="text-2xl font-semibold text-heading sm:text-3xl"
              >
                {pillar2.title}
              </h3>
              <div className="mt-3 flex-1 space-y-3 text-sm font-normal leading-relaxed text-paragraph-secondary">
                {pillar2.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <div className="relative h-48 w-full shrink-0 sm:h-56">
              <Image
                src={pillar2.image}
                alt={pillar2.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) calc(100vw - 2rem), 480px"
                placeholder="blur"
                blurDataURL={BLUR_SVG}
              />
            </div>
          </article>
          </div>

          {/* Row 2: third card */}
          <div className="card-border-animated lg:col-span-2">
            <div className="card-border-gradient" aria-hidden />
            <article
              className={`${cardBase} card-border-animated-inner pb-5 sm:pb-6`}
              aria-labelledby={`pillar-${pillar3.id}-title`}
            >
            <div className="relative z-10 flex flex-1 flex-col bg-white p-6 sm:p-8">
              <h3
                id={`pillar-${pillar3.id}-title`}
                className="text-2xl font-semibold text-heading sm:text-3xl"
              >
                {pillar3.title}
              </h3>
              <div className="mt-3 max-w-4xl flex-1 space-y-3 text-sm font-normal leading-relaxed text-paragraph-secondary">
                {pillar3.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <div className="relative h-56 w-full shrink-0 sm:h-64 lg:h-72">
              <Image
                src={pillar3.image}
                alt={pillar3.imageAlt}
                fill
                className="object-cover object-center"
                sizes="100vw"
                placeholder="blur"
                blurDataURL={BLUR_SVG}
              />
            </div>
          </article>
          </div>
        </div>
      </div>
    </section>
  );
}
