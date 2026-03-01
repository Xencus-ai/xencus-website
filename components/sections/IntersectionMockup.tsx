"use client";

/**
 * IntersectionMockup
 *
 * Defers DashboardMockup hydration until the section is within 400 px of
 * the viewport. This prevents Framer Motion (~100 KB gz) from initialising
 * during page load, directly reducing First Input Delay (FID).
 *
 * Users who never scroll past the fold pay zero cost for the dashboard.
 */

import { Suspense, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const DashboardMockup = dynamic(
  () => import("./DashboardMockup").then((m) => m.DashboardMockup)
);

const SKELETON = (
  <div className="h-[420px] animate-pulse rounded-2xl bg-gray-100 sm:h-[480px]" />
);

export function IntersectionMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true);
          obs.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {ready ? <Suspense fallback={SKELETON}><DashboardMockup /></Suspense> : SKELETON}
    </div>
  );
}
