import Image from "next/image";
import { stats } from "@/content/stats";

const glassCard =
  "rounded-2xl border border-white/50 bg-white/30 backdrop-blur-[10px] backdrop-saturate-[1.4] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]";

export function Stats() {
  return (
    <section
      className="relative z-10 -mt-16 px-4 py-6 sm:px-6 lg:px-8"
      id="stats"
      aria-label="Our impact"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className={`${glassCard} flex min-h-full flex-col justify-center px-6 py-6 text-center sm:py-8`}
            >
              {item.illustration ? (
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
                  <Image
                    src={item.illustration}
                    alt=""
                    width={64}
                    height={64}
                    className="h-full w-full object-contain"
                  />
                </div>
              ) : null}
              <span className="stats-number-gradient text-3xl font-black tracking-tight sm:text-4xl">
                {item.value}
              </span>
              <span className="mt-1.5 text-sm font-medium text-paragraph sm:text-base">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
