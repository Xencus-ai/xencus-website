/* eslint-disable react/jsx-no-useless-fragment */
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, GraduationCap, Scale, Users, PiggyBank, Code2 } from "lucide-react";
import { otherServices } from "@/content/other-services";

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "corporate-ld": Briefcase,
  "universities-training": GraduationCap,
  "edtech-legal": Scale,
  "hr-edtech": Users,
  "finance-edtech": PiggyBank,
  "technical-services": Code2,
};

export function OtherServices() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = 340;

  const handleScrollLeft = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: scrollByAmount, behavior: "smooth" });
  };

  return (
    <section
      className="bg-background py-12 sm:py-16"
      id="services"
      aria-labelledby="other-services-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="other-services-title"
            className="text-3xl font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl"
          >
            Beyond operations,{" "}
            <span className="text-brand">specialised services</span> for EdTech
          </h2>
          <p className="mt-4 text-sm font-medium leading-snug text-paragraph-secondary sm:text-base lg:text-lg max-w-2xl mx-auto">
            Alongside running your classrooms, we plug in experts for corporate L&amp;D, universities,
            legal, HR, finance, and technical services—so every part of your education business is
            covered.
          </p>
        </header>

        <div className="group relative mt-8 sm:mt-10 overflow-visible">
          <div className="pb-2">
            <div
              ref={scrollRef}
              className="overflow-x-auto scrollbar-hidden -mb-6"
            >
              <ul className="flex gap-4 px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8 sm:gap-6 snap-x snap-mandatory">
                {otherServices.map((service, index) => {
                const Icon = serviceIcons[service.id] ?? Briefcase;
                return (
                  <li
                    key={service.id}
                    className="snap-start shrink-0 basis-[78%] sm:basis-[55%] lg:basis-[32%]"
                  >
                    <article className="group/card relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-transparent text-center backdrop-blur-sm transition-transform duration-300 ease-out hover:-translate-y-1.5">
                      <div className="flex h-full flex-col">
                        <div className="relative h-32 bg-[#92E3A9]/15 sm:h-40">
                          <Image
                            src={service.illustration}
                            alt=""
                            width={240}
                            height={160}
                            className="h-full w-full object-contain"
                          />
                        </div>

                        <div className="flex flex-1 flex-col items-center p-4 text-center sm:p-5">
                          <div className="flex items-center justify-center gap-2 text-brand">
                            <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
                            <span className="text-xs font-semibold uppercase tracking-wide">
                              Service
                            </span>
                          </div>
                          <h3 className="mt-2 max-w-xs text-base font-semibold text-heading sm:text-lg mx-auto">
                            {service.label}
                          </h3>
                          <p className="mt-2 max-w-xs text-sm font-normal leading-relaxed text-paragraph-secondary group-hover/card:hidden mx-auto">
                            {service.description}
                          </p>

                          <ul className="mt-3 hidden w-full max-w-xs space-y-2 text-sm text-paragraph-secondary group-hover/card:block mx-auto text-left">
                            {service.bullets.map((bullet) => (
                              <li key={bullet.id} className="flex items-start gap-2">
                                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                                <span className="leading-snug">{bullet.title}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="border-t border-gray-100 p-4 sm:p-5">
                          <Link
                            href={service.href}
                            className="inline-flex items-center justify-center rounded-full border border-brand/40 bg-white/80 px-4 py-2 text-sm font-semibold text-brand shadow-sm transition-colors duration-200 group-hover/card:bg-brand group-hover/card:text-cta-text"
                          >
                            Learn more
                            <span aria-hidden="true" className="ml-1">
                              →
                            </span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </li>
                );
              })}
              </ul>
            </div>
          </div>
          <button
            type="button"
            aria-label="Scroll services left"
            className="pointer-events-auto absolute left-6 top-1/2 hidden h-9 w-9 -translate-x-full -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-700 shadow-sm transition hover:bg-white sm:flex"
            onClick={handleScrollLeft}
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            aria-label="Scroll services right"
            className="pointer-events-auto absolute right-6 top-1/2 hidden h-9 w-9 translate-x-full -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-700 shadow-sm transition hover:bg-white sm:flex"
            onClick={handleScrollRight}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

