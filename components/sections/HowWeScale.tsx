import Image from "next/image";
import { howWeScale } from "@/content/how-we-scale";

const cardBase =
  "relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm";

function ScaleCard({
  step,
  imageHeight = "h-48 sm:h-56",
}: {
  step: (typeof howWeScale.steps)[number];
  imageHeight?: string;
}) {
  return (
    <div className="card-border-animated flex h-full min-h-0 flex-col">
      <div className="card-border-gradient" aria-hidden />
      <article
        className={`${cardBase} card-border-animated-inner flex min-h-full flex-col`}
        aria-labelledby={`scale-${step.id}-title`}
      >
        <div className="relative z-10 flex flex-1 flex-col bg-white p-5 sm:p-6">
          <h3
            id={`scale-${step.id}-title`}
            className="text-xl font-semibold text-heading sm:text-2xl"
          >
            {step.title}
          </h3>
          <div className="mt-3 flex-1 space-y-3 text-sm font-normal leading-relaxed text-paragraph-secondary">
            {step.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
        <div className={`relative w-full shrink-0 ${imageHeight}`}>
          <Image
            src={step.image}
            alt={step.imageAlt}
            fill
            className="object-contain object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjMiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjMiIGZpbGw9IiNmNWYwZTgiLz48L3N2Zz4="
          />
        </div>
      </article>
    </div>
  );
}

export function HowWeScale() {
  const [step1, step2, step3, step4] = howWeScale.steps;

  return (
    <section
      className="min-h-[calc(100vh-var(--header-offset))] bg-background py-12 sm:py-16"
      id="how-we-scale"
      aria-labelledby="how-we-scale-title"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="how-we-scale-title"
            className="text-4xl font-bold tracking-tight text-heading sm:text-5xl lg:text-6xl"
          >
            {howWeScale.titleBefore}
            <span className="text-brand-secondary">{howWeScale.titleHighlight}</span>
            {howWeScale.titleAfter}
          </h2>
          <p className="mt-4 text-sm font-medium leading-snug text-paragraph-secondary sm:text-base lg:text-lg max-w-2xl mx-auto">
            {howWeScale.subtitle}
          </p>
        </header>

        {/* Row 1: 70% | 30% */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-[6fr_4fr] lg:items-stretch">
          <ScaleCard step={step1} imageHeight="h-44 sm:h-52" />
          <ScaleCard step={step2} />
        </div>

        {/* Row 2: 30% | 70% */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 sm:gap-8 lg:grid-cols-[4fr_6fr] lg:items-stretch">
          <ScaleCard step={step3} />
          <ScaleCard step={step4} imageHeight="h-44 sm:h-52" />
        </div>
      </div>
    </section>
  );
}
