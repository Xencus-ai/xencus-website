"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { MouseEvent } from "react";
import { motion, useMotionValue, useScroll, useTransform, useSpring } from "framer-motion";
import { certificatePlatform } from "@/content/certificate-platform";
import { Zap, ShieldCheck, BarChart3 } from "lucide-react";

export function CertificatePlatform() {
  const mockupRef = useRef<HTMLDivElement | null>(null);

  // Scroll-based zoom & fade: zoom in when entering section, zoom out when leaving
  const { scrollYProgress } = useScroll({
    target: mockupRef,
    offset: ["start 80%", "end 10%"],
  });
  const baseScrollScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.06, 0.9]);
  const baseScrollOpacity = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0, 0.6, 1, 0.7]);
  const scrollScale = useSpring(baseScrollScale, { stiffness: 120, damping: 18, mass: 0.4 });
  const scrollOpacity = useSpring(baseScrollOpacity, { stiffness: 120, damping: 18, mass: 0.4 });

  // Apple-like 3D tilt parallax on hover: small but noticeable
  const tiltX = useMotionValue(0); // horizontal: -0.5..0.5
  const tiltY = useMotionValue(0); // vertical: -0.5..0.5
  const baseRotateX = useTransform(tiltY, [-0.5, 0.5], [10, -10]); // move mouse up => tilt towards user
  const baseRotateY = useTransform(tiltX, [-0.5, 0.5], [-10, 10]);
  const baseTranslateX = useTransform(tiltX, [-0.5, 0.5], [-16, 16]);
  const baseTranslateY = useTransform(tiltY, [-0.5, 0.5], [-10, 10]);
  const rotateX = useSpring(baseRotateX, { stiffness: 140, damping: 20, mass: 0.6 });
  const rotateY = useSpring(baseRotateY, { stiffness: 140, damping: 20, mass: 0.6 });
  const translateX = useSpring(baseTranslateX, { stiffness: 140, damping: 20, mass: 0.6 });
  const translateY = useSpring(baseTranslateY, { stiffness: 140, damping: 20, mass: 0.6 });

  // Custom cursor inside the dashboard area
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothCursorX = useSpring(cursorX, { stiffness: 200, damping: 24, mass: 0.4 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 200, damping: 24, mass: 0.4 });
  const [cursorVisible, setCursorVisible] = useState(false);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!mockupRef.current) return;
    const rect = mockupRef.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    tiltX.set(px);
    tiltY.set(py);
    cursorX.set(event.clientX - rect.left);
    cursorY.set(event.clientY - rect.top);
    setCursorVisible(true);
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
    setCursorVisible(false);
  };

  return (
    <section
      className="bg-background py-12 sm:py-16"
      id="certificate-platform"
      aria-labelledby="certificate-platform-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center">
            <div className="badge-liquid-animated">
              <span className="badge-liquid-animated-inner inline-flex items-center px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand">
                {certificatePlatform.badge}
              </span>
            </div>
          </div>
          <p className="mt-2 flex items-center justify-center gap-1 text-xs font-medium text-paragraph-secondary">
            <span>Launching on 31 March 2026</span>
            <span aria-hidden="true" className="party-popper-animate">
              🎉
            </span>
          </p>
          <h2
            id="certificate-platform-title"
            className="mt-4 text-3xl font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl"
          >
            {certificatePlatform.title}
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm font-medium leading-relaxed text-paragraph-secondary sm:text-base lg:text-lg">
            {certificatePlatform.subtitle}
          </p>
        </header>

        {/* Animated dashboard mockup */}
        <div className="mt-10 sm:mt-12">
          <div ref={mockupRef} className="relative mx-auto max-w-6xl">
            <div
              className="relative mx-auto flex justify-center cursor-none"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                className="relative"
                style={{
                  transformOrigin: "center center",
                  perspective: 1200,
                  scale: scrollScale,
                  opacity: scrollOpacity,
                  rotateX,
                  rotateY,
                  x: translateX,
                  y: translateY,
                }}
              >
                <Image
                  src="/Assets/dashboard/dashboard.png"
                  alt="Certificate generator dashboard preview"
                  priority={false}
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  className="h-auto w-full object-contain"
                  width={1920}
                  height={1080}
                />
              </motion.div>

              {cursorVisible && (
                <motion.div
                  className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2"
                  style={{ x: smoothCursorX, y: smoothCursorY }}
                >
                  {/* Arrow pointer composed of brand primary + secondary, no background box */}
                  <div className="relative h-5 w-5">
                    {/* Arrow shaft */}
                    <div className="absolute left-0 top-1/2 h-[2px] w-3 -translate-y-1/2 rounded-full bg-brand-secondary" />
                    {/* Arrow head */}
                    <div
                      className="absolute right-0 top-1/2 -translate-y-1/2"
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "5px solid transparent",
                        borderBottom: "5px solid transparent",
                        borderLeft: "9px solid var(--brand)",
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* One big feature card with completion background on the left */}
        <article className="mt-10 flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white/80 text-left shadow-sm backdrop-blur-sm sm:mt-12 md:flex-row">
          {/* Left: completion illustration taking full height/left edge */}
          <div className="relative w-full min-h-[160px] md:w-2/5">
            <Image
              src="/Assets/dashboard/completion.svg"
              alt="Certificate completion illustration"
              fill
              className="object-cover object-left"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {/* Right: key capabilities list */}
          <div className="flex flex-1 flex-col justify-center p-5 sm:p-6 lg:p-7 sm:pl-8 md:pl-10 lg:pl-12">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center">
                  <Zap className="h-5 w-5 text-brand" aria-hidden />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-heading sm:text-base">
                    {certificatePlatform.highlights.find((h) => h.id === "bulk")?.title}
                  </h3>
                  <p className="mt-1 max-w-lg text-xs leading-relaxed text-paragraph-secondary sm:text-sm">
                    {certificatePlatform.highlights.find((h) => h.id === "bulk")?.description}
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-brand" aria-hidden />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-heading sm:text-base">
                    {certificatePlatform.highlights.find((h) => h.id === "qr")?.title}
                  </h3>
                  <p className="mt-1 max-w-md text-xs leading-relaxed text-paragraph-secondary sm:text-sm">
                    {certificatePlatform.highlights.find((h) => h.id === "qr")?.description}
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center">
                  <Image
                    src="/Assets/dashboard/email.svg"
                    alt="Email delivery icon"
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-heading sm:text-base">
                    {certificatePlatform.highlights.find((h) => h.id === "email")?.title}
                  </h3>
                  <p className="mt-1 max-w-md text-xs leading-relaxed text-paragraph-secondary sm:text-sm">
                    {certificatePlatform.highlights.find((h) => h.id === "email")?.description}
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center">
                  <Image
                    src="/Assets/dashboard/WhatsApp.svg"
                    alt="WhatsApp delivery icon"
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-heading sm:text-base">
                    {certificatePlatform.highlights.find((h) => h.id === "whatsapp")?.title}
                  </h3>
                  <p className="mt-1 max-w-md text-xs leading-relaxed text-paragraph-secondary sm:text-sm">
                    {certificatePlatform.highlights.find((h) => h.id === "whatsapp")?.description}
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-brand" aria-hidden />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-heading sm:text-base">
                    {certificatePlatform.highlights.find((h) => h.id === "analytics")?.title}
                  </h3>
                  <p className="mt-1 max-w-md text-xs leading-relaxed text-paragraph-secondary sm:text-sm">
                    {certificatePlatform.highlights.find((h) => h.id === "analytics")?.description}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

