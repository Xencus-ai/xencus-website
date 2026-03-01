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
            <span className="text-brand-secondary">{whatWeDo.titleHighlight}</span>
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
          {/* Static soft circle for depth */}
          <div
            className="twist-callout-circle -bottom-20 -right-20 h-56 w-56 sm:-bottom-24 sm:-right-24 sm:h-72 sm:w-72"
            aria-hidden
            style={{
              backgroundColor: "rgba(250, 204, 72, 0.18)",
            }}
          />
          {/* Single animated circle: grows then shrinks */}
          <div
            className="twist-callout-circle -bottom-10 -right-8 h-32 w-32 sm:-bottom-14 sm:-right-10 sm:h-44 sm:w-44"
            aria-hidden
            style={{
              backgroundColor: "rgba(250, 204, 72, 0.5)",
              animation: "twist-circle-pulse-single 4.2s ease-in-out infinite",
            }}
          />
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
                    <div className="flex shrink-0 items-center text-brand-secondary">
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
                    <div className="flex w-1/4 shrink-0 items-center justify-center p-3 sm:w-2/5 sm:p-4">
                      <Image
                        src={item.illustration}
                        alt=""
                        width={140}
                        height={120}
                        className="h-16 w-auto object-contain sm:h-20 md:h-24"
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
