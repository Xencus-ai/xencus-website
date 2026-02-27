"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { stats } from "@/content/stats";

const glassCard =
  "rounded-2xl border border-white/50 bg-white/30 backdrop-blur-[10px] backdrop-saturate-[1.4] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]";

type StatFormat = "millions" | "thousands" | "plain";

function AnimatedStat({ target, format }: { target: number; format: StatFormat }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let frame: number;
    const duration = 2200;
    const start = performance.now();

    const animate = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(target * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  let formatted: string;
  if (format === "millions") {
    formatted = `${current.toFixed(1)}M+`;
  } else if (format === "thousands") {
    formatted = `${Math.round(current)}K+`;
  } else {
    formatted = `${Math.round(current)}+`;
  }

  return (
    <span
      className="text-2xl font-black tracking-tight text-brand-secondary sm:text-3xl lg:text-4xl"
      suppressHydrationWarning
    >
      {formatted}
    </span>
  );
}

export function AnimatedStatCounter() {
  return (
    <div
      className="mx-auto mt-8 grid max-w-6xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
      id="stats"
      aria-label="Our impact"
    >
      {stats.map((item) => (
        <div
          key={item.label}
          className={`${glassCard} flex min-h-full flex-col justify-center px-4 py-5 text-center sm:px-6 sm:py-6`}
        >
          {item.illustration ? (
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
              <Image
                src={item.illustration}
                alt=""
                width={56}
                height={56}
                className="h-full w-full object-contain"
              />
            </div>
          ) : null}
          <AnimatedStat target={item.target} format={item.format} />
          <span className="mt-1 text-sm font-semibold text-brand-secondary sm:text-base">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
