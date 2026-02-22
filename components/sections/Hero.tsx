import Image from "next/image";
import Link from "next/link";
import { hero } from "@/content/hero";
import { site } from "@/content/site";

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
        className="absolute inset-0 bg-white/15 backdrop-blur-[8px] backdrop-saturate-[1.2] pointer-events-none"
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

      {/* Content overlay — no panel, just text and CTA; extra pt so content clears header */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-28 pt-32 sm:px-6 sm:pb-32 sm:pt-36 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1
            className="text-5xl font-black tracking-tight text-heading sm:text-6xl lg:text-7xl"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.08), 0 4px 28px rgba(0,0,0,0.06)" }}
          >
            {hero.headline.before}{" "}
            <span className="text-white">{hero.headline.highlight}</span>{" "}
            {hero.headline.after}
          </h1>
          <p className="mt-5 text-lg font-medium leading-relaxed text-heading sm:text-xl">
            {hero.subtext}
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="#contact"
              className="inline-flex min-w-[180px] justify-center rounded-full border border-white/50 bg-white/30 px-10 py-3 text-base font-semibold text-brand-secondary backdrop-blur-[10px] backdrop-saturate-[1.4] transition-opacity hover:bg-white/40"
              id="hero-cta"
            >
              {hero.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
