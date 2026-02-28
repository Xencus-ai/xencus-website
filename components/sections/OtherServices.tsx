import Image from "next/image";
import Link from "next/link";
import { Briefcase, GraduationCap, Scale, Users, PiggyBank, Code2 } from "lucide-react";
import { otherServices } from "@/content/other-services";
import { HorizontalScrollContainer } from "@/components/ui/HorizontalScrollContainer";

// Icon map is a compile-time lookup — no client runtime needed
const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "corporate-ld": Briefcase,
  "universities-training": GraduationCap,
  "edtech-legal": Scale,
  "hr-edtech": Users,
  "finance-edtech": PiggyBank,
  "technical-services": Code2,
};

export function OtherServices() {
  return (
    <section
      className="bg-background py-12 sm:py-16"
      id="services"
      aria-labelledby="other-services-title"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 xl:max-w-[85vw]">
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

        <HorizontalScrollContainer>
          <ul className="flex gap-4 px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8 sm:gap-6 snap-x snap-mandatory">
            {otherServices.map((service) => {
              const Icon = serviceIcons[service.id] ?? Briefcase;
              return (
                <li
                  key={service.id}
                  className="snap-start shrink-0 basis-[90%] sm:basis-[60%] lg:basis-[30%] max-w-[90vw] lg:max-w-sm"
                >
                  <article className="group/card relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-transparent text-center backdrop-blur-sm transition-transform duration-300 ease-out hover:-translate-y-1.5">
                    <div className="flex h-full flex-col">
                      <div className="relative h-40 bg-[#92E3A9]/15 sm:h-44">
                        <Image
                          src={service.illustration}
                          alt=""
                          width={240}
                          height={160}
                          className="mx-auto h-full w-auto object-contain"
                        />
                      </div>

                      <div className="flex flex-1 flex-col items-center p-4 text-center sm:p-5">
                        <div className="flex items-center justify-center gap-2">
                          <Icon className="h-4 w-4 text-brand sm:h-5 sm:w-5" aria-hidden />
                          <span className="text-xs font-semibold uppercase tracking-wide text-paragraph-secondary">
                            Service
                          </span>
                        </div>
                        <div className="mt-2 flex max-w-xs flex-wrap items-baseline justify-center gap-x-1.5 gap-y-0 mx-auto">
                          <h3 className="text-base font-semibold text-heading sm:text-lg md:text-xl">
                            {service.label}
                          </h3>
                          <p className="text-xs font-normal leading-snug text-paragraph-secondary group-hover/card:hidden sm:text-sm line-clamp-2">
                            {service.description}
                          </p>
                        </div>

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
                          aria-label={`Learn more about ${service.label}`}
                          className="inline-flex items-center justify-center rounded-full border border-brand/40 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-secondary shadow-sm transition-colors duration-200 group-hover/card:bg-brand group-hover/card:text-cta-text"
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
        </HorizontalScrollContainer>
      </div>
    </section>
  );
}
