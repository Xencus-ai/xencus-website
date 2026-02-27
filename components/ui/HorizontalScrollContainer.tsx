"use client";

import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  scrollAmount?: number;
  className?: string;
};

export function HorizontalScrollContainer({
  children,
  scrollAmount = 340,
  className = "",
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () =>
    scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });

  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });

  return (
    <div className={`group relative mt-8 sm:mt-10 overflow-visible ${className}`}>
      <div className="pb-2">
        <div ref={scrollRef} className="overflow-x-auto scrollbar-hidden -mb-6">
          {children}
        </div>
      </div>
      <button
        type="button"
        aria-label="Scroll left"
        className="pointer-events-auto absolute left-6 top-1/2 hidden h-9 w-9 -translate-x-full -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-700 shadow-sm transition hover:bg-white sm:flex"
        onClick={scrollLeft}
      >
        <span aria-hidden>←</span>
      </button>
      <button
        type="button"
        aria-label="Scroll right"
        className="pointer-events-auto absolute right-6 top-1/2 hidden h-9 w-9 translate-x-full -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-700 shadow-sm transition hover:bg-white sm:flex"
        onClick={scrollRight}
      >
        <span aria-hidden>→</span>
      </button>
    </div>
  );
}
