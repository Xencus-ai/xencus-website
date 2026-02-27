"use client";

/**
 * DashboardMockup
 *
 * The only client-side piece of the CertificatePlatform section.
 * Contains all framer-motion scroll/spring/tilt logic and the custom cursor.
 * Isolated here so CertificatePlatform.tsx can be a Server Component —
 * keeping the section header and feature list in the initial server HTML.
 */

import { useRef, useState } from "react";
import type { MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useScroll, useTransform, useSpring } from "framer-motion";

export function DashboardMockup() {
  const mockupRef = useRef<HTMLDivElement | null>(null);

  // Scroll-based zoom & fade
  const { scrollYProgress } = useScroll({
    target: mockupRef,
    offset: ["start 80%", "end 10%"],
  });
  const baseScrollScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.06, 0.9]);
  const scrollScale = useSpring(baseScrollScale, { stiffness: 120, damping: 18, mass: 0.4 });

  // Apple-like 3D tilt on hover
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const baseRotateX = useTransform(tiltY, [-0.5, 0.5], [10, -10]);
  const baseRotateY = useTransform(tiltX, [-0.5, 0.5], [-10, 10]);
  const baseTranslateX = useTransform(tiltX, [-0.5, 0.5], [-16, 16]);
  const baseTranslateY = useTransform(tiltY, [-0.5, 0.5], [-10, 10]);
  const rotateX = useSpring(baseRotateX, { stiffness: 140, damping: 20, mass: 0.6 });
  const rotateY = useSpring(baseRotateY, { stiffness: 140, damping: 20, mass: 0.6 });
  const translateX = useSpring(baseTranslateX, { stiffness: 140, damping: 20, mass: 0.6 });
  const translateY = useSpring(baseTranslateY, { stiffness: 140, damping: 20, mass: 0.6 });

  // Custom cursor
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
    <div ref={mockupRef} className="relative mx-auto w-full max-w-6xl xl:max-w-[90vw]">
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
            sizes="(max-width: 1024px) 100vw, 90vw"
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
            <div className="relative h-5 w-5">
              <div className="absolute left-0 top-1/2 h-[2px] w-3 -translate-y-1/2 rounded-full bg-brand-secondary" />
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
  );
}
