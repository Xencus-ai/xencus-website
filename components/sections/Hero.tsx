"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { hero } from "@/content/hero";
import { stats } from "@/content/stats";
import { ctaBlock, site } from "@/content/site";

const glassCard =
  "rounded-2xl border border-white/50 bg-white/30 backdrop-blur-[10px] backdrop-saturate-[1.4] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]";

const dock =
  "mx-auto flex w-full max-w-2xl flex-col items-center gap-3 rounded-2xl border border-white/50 bg-white/25 px-5 py-3 backdrop-blur-[12px] backdrop-saturate-[1.4] shadow-[0_12px_40px_rgba(0,0,0,0.15)] sm:flex-row sm:justify-between sm:gap-2 sm:px-6 sm:py-2.5";

type StatFormat = "millions" | "thousands" | "plain";

type AnimatedStatProps = {
  target: number;
  format: StatFormat;
};

function AnimatedStat({ target, format }: AnimatedStatProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let frame: number;
    const duration = 1400;
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
    <span className="text-2xl font-black tracking-tight text-brand-secondary sm:text-3xl lg:text-4xl">
      {formatted}
    </span>
  );
}

export function Hero() {
  return (
    <section
      className="relative flex w-full min-h-[85vh] flex-col justify-end overflow-hidden -mt-[5.5rem]"
      id="hero"
      aria-label="Hero"
    >
      {/* Full-width hero image */}
      <div className="absolute inset-0">
        <Image
          src="/Assets/hero/hero.jpg"
          alt={hero.image.alt}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>

      {/* Full-bleed light glass over entire hero — image still visible */}
      <div
        className="absolute inset-0 bg-white/15 backdrop-blur-[4px] backdrop-saturate-[1.2] pointer-events-none"
        aria-hidden
      />

      {/* Bottom fade to white — soft, cloud-like gradient */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/5 min-h-[180px] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgb(255 255 255) 0%, rgb(255 255 255 / 0.9) 12%, rgb(255 255 255 / 0.5) 35%, rgb(255 255 255 / 0.15) 60%, transparent 100%)",
        }}
        aria-hidden
      />

      {/* Content overlay: headline → subtext → stats → CTA */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-28 pt-32 sm:px-6 sm:pb-32 sm:pt-36 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1
            className="text-5xl font-black tracking-tight text-heading sm:text-6xl lg:text-7xl"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.08), 0 4px 28px rgba(0,0,0,0.06)" }}
          >
            {hero.headline.before}{" "}
            <span className="text-brand">{hero.headline.highlight}</span>{" "}
            {hero.headline.after}
          </h1>
          <p className="mt-5 text-sm font-semibold leading-snug text-heading sm:text-base md:text-lg">
            {hero.subtext}
          </p>
        </div>

        {/* Stats — between subtext and CTA */}
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

        {/* Dock: text + Book a demo CTA */}
        <div className="mt-8 flex justify-center">
          <div className={dock} id="hero-cta-dock">
            <p className="text-center text-sm font-medium text-heading sm:text-left sm:text-base">
              {ctaBlock.heading}
            </p>
            <Link
              href="/contact"
              className="shrink-0 rounded-full border border-white/50 bg-white/40 px-4 py-1.5 text-sm font-semibold text-brand-secondary backdrop-blur-[10px] transition-opacity hover:bg-white/50"
              id="hero-cta"
            >
              {site.ctaBookDemo}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
