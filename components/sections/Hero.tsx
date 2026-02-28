import Image from "next/image";
import Link from "next/link";
import { hero } from "@/content/hero";
import { ctaBlock, site } from "@/content/site";
import { AnimatedStatCounter } from "./AnimatedStatCounter";

const dock =
  "mx-auto flex w-full max-w-2xl flex-col items-center gap-3 rounded-2xl border border-white/50 bg-white/25 px-5 py-3 backdrop-blur-[12px] backdrop-saturate-[1.4] shadow-[0_12px_40px_rgba(0,0,0,0.15)] sm:flex-row sm:justify-between sm:gap-2 sm:px-6 sm:py-2.5";

export function Hero() {
  return (
    <section
      className="relative flex w-full min-h-[max(85vh,100vh)] flex-col justify-start sm:justify-end overflow-visible -mt-[5.5rem]"
      id="hero"
      aria-label="Hero"
    >
      {/* Full-width hero image — overflow-hidden so image doesn’t spill when section grows */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/Assets/hero/hero.avif"
          alt={hero.image.alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 100vw"
          priority
          fetchPriority="high"
          decoding="async"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjMiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjMiIGZpbGw9IiNmNWYwZTgiLz48L3N2Zz4="
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

      {/* Content overlay: headline → subtext → stats → CTA. pt on mobile clears nav + extra gap so title isn’t cramped. */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-28 pt-[12rem] sm:px-6 sm:pb-32 sm:pt-32 lg:pt-36 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1
            className="text-5xl font-black tracking-tight text-heading sm:text-6xl lg:text-7xl"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.08), 0 4px 28px rgba(0,0,0,0.06)" }}
          >
            {hero.headline.before}{" "}
            <span className="text-brand-secondary">{hero.headline.highlight}</span>{" "}
            {hero.headline.after}
          </h1>
          <p className="mt-5 text-sm font-semibold leading-snug text-heading sm:text-base md:text-lg">
            {hero.subtext}
          </p>
        </div>

        {/* Stats — animated on client, real values on server */}
        <AnimatedStatCounter />

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
