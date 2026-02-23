import Image from "next/image";
import { howWeWork } from "@/content/how-we-work";

const cardBase =
  "relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm";

export function HowWeWork() {
  const [pillar1, pillar2, pillar3] = howWeWork.pillars;

  return (
    <section
      className="bg-background py-16 sm:py-20"
      id="how-we-work"
      aria-labelledby="how-we-work-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="how-we-work-title"
            className="text-4xl font-bold tracking-tight text-heading sm:text-5xl lg:text-6xl"
          >
            {howWeWork.titleBefore}
            <span className="text-brand">{howWeWork.titleHighlight}</span>
            {howWeWork.titleAfter}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-paragraph sm:text-lg">
            {howWeWork.subtitle}
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-2">
          {/* Row 1: first two cards — text on top, illustration as background at bottom */}
          <article
            className={cardBase}
            aria-labelledby={`pillar-${pillar1.id}-title`}
          >
            <div className="relative z-10 flex flex-1 flex-col bg-white p-6 sm:p-8">
              <h3
                id={`pillar-${pillar1.id}-title`}
                className="text-2xl font-semibold text-heading sm:text-3xl"
              >
                {pillar1.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-paragraph">
                {pillar1.description}
              </p>
            </div>
            <div className="relative h-48 w-full shrink-0 sm:h-56">
              <Image
                src={pillar1.image}
                alt={pillar1.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </article>

          <article
            className={cardBase}
            aria-labelledby={`pillar-${pillar2.id}-title`}
          >
            <div className="relative z-10 flex flex-1 flex-col bg-white p-6 sm:p-8">
              <h3
                id={`pillar-${pillar2.id}-title`}
                className="text-2xl font-semibold text-heading sm:text-3xl"
              >
                {pillar2.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-paragraph">
                {pillar2.description}
              </p>
            </div>
            <div className="relative h-48 w-full shrink-0 sm:h-56">
              <Image
                src={pillar2.image}
                alt={pillar2.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </article>

          {/* Row 2: third card */}
          <article
            className={`${cardBase} lg:col-span-2`}
            aria-labelledby={`pillar-${pillar3.id}-title`}
          >
            <div className="relative z-10 flex flex-1 flex-col bg-white p-6 sm:p-8">
              <h3
                id={`pillar-${pillar3.id}-title`}
                className="text-2xl font-semibold text-heading sm:text-3xl"
              >
                {pillar3.title}
              </h3>
              <p className="mt-3 max-w-4xl flex-1 text-sm leading-relaxed text-paragraph">
                {pillar3.description}
              </p>
            </div>
            <div className="relative h-56 w-full shrink-0 sm:h-64 lg:h-72">
              <Image
                src={pillar3.image}
                alt={pillar3.imageAlt}
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
