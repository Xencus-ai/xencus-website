import Image from "next/image";
import { whatWeDo } from "@/content/what-we-do";
import {
  Award,
  BookOpen,
  Calendar,
  ClipboardCheck,
  FolderKanban,
  Users,
} from "lucide-react";

const itemIcons: Record<
  (typeof whatWeDo.items)[number]["id"],
  React.ComponentType<{ className?: string }>
> = {
  curriculum: BookOpen,
  trainers: Users,
  scheduling: Calendar,
  projects: FolderKanban,
  quizzes: ClipboardCheck,
  certifications: Award,
};

export function WhatWeDo() {
  return (
    <section
      className="bg-background py-12 sm:py-16"
      id="what-we-do"
      aria-labelledby="what-we-do-title"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="what-we-do-title"
            className="text-4xl font-bold tracking-tight text-heading sm:text-5xl lg:text-6xl"
          >
            {whatWeDo.titleBefore}
            <span className="text-brand">{whatWeDo.titleHighlight}</span>
            {whatWeDo.titleAfter}
          </h2>
          <p className="mt-4 text-sm font-medium leading-snug text-paragraph-secondary sm:text-base lg:text-lg max-w-2xl mx-auto">
            {whatWeDo.subtitle}
          </p>
        </header>

        <div
          className="twist-callout relative mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-transparent p-5 sm:mt-12 sm:p-6 lg:p-8"
          aria-labelledby="what-we-do-twist-heading"
        >
          {[
            {
              pos: "-bottom-20 -right-20 h-44 w-44 sm:-bottom-24 sm:-right-24 sm:h-56 sm:w-56",
              gradient:
                "linear-gradient(135deg, rgba(255, 230, 150, 0.45) 0%, rgba(250, 204, 72, 0.15) 50%, transparent 70%)",
            },
            {
              pos: "-bottom-16 -right-12 h-40 w-40 sm:-bottom-20 sm:-right-16 sm:h-48 sm:w-48",
              gradient:
                "linear-gradient(135deg, rgba(250, 204, 72, 0.4) 0%, rgba(250, 204, 72, 0.12) 50%, transparent 70%)",
            },
            {
              pos: "-bottom-10 -right-8 h-32 w-32 sm:-bottom-14 sm:-right-10 sm:h-40 sm:w-40",
              gradient:
                "linear-gradient(135deg, rgba(245, 196, 60, 0.35) 0%, rgba(230, 180, 50, 0.1) 50%, transparent 70%)",
            },
            {
              pos: "-bottom-6 -right-4 h-24 w-24 sm:-bottom-8 sm:-right-6 sm:h-32 sm:w-32",
              gradient:
                "linear-gradient(135deg, rgba(230, 190, 60, 0.35) 0%, rgba(250, 204, 72, 0.08) 50%, transparent 70%)",
            },
            {
              pos: "bottom-0 right-0 h-16 w-16 sm:h-24 sm:w-24",
              // Last circle: strongest brand color when at full opacity (grow phase)
              gradient:
                "linear-gradient(135deg, rgba(250, 204, 72, 0.9) 0%, rgba(250, 204, 72, 0.4) 40%, transparent 80%)",
            },
          ].map((circle, i) => (
            <div
              key={i}
              className={`twist-callout-circle ${circle.pos}`}
              aria-hidden
              style={{
                background: circle.gradient,
                animation: "twist-circle-grow-shrink 5s ease-in-out infinite",
              }}
            />
          ))}
          <div className="relative z-10 text-center">
            <h3
              id="what-we-do-twist-heading"
              className="text-xl font-bold text-heading sm:text-2xl lg:text-3xl"
            >
              {whatWeDo.twistHeading}
            </h3>
            <p className="mt-2 text-sm font-normal leading-relaxed text-paragraph-secondary sm:text-base">
              {whatWeDo.twistDescription}
            </p>
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
          {whatWeDo.items.map((item) => {
            const Icon = itemIcons[item.id];
            const hasIllustration = item.illustration && item.illustration.length > 0;

            return (
              <li key={item.id}>
                <article
                  className="flex h-full flex-row overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                  aria-labelledby={`what-we-do-${item.id}-title`}
                >
                  <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
                    <div className="flex shrink-0 items-center text-brand">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
                    </div>
                    <h3
                      id={`what-we-do-${item.id}-title`}
                      className="mt-3 text-base font-semibold text-heading sm:text-lg"
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm font-normal leading-relaxed text-paragraph-secondary">
                      {item.description}
                    </p>
                  </div>
                  {hasIllustration && (
                    <div className="hidden w-2/5 shrink-0 items-center justify-center p-4 sm:flex">
                      <Image
                        src={item.illustration}
                        alt=""
                        width={140}
                        height={120}
                        className="h-20 w-auto object-contain sm:h-24"
                      />
                    </div>
                  )}
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
