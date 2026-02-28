import type { Metadata } from "next";
import Script from "next/script";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Book a Demo",
  description:
    "Book a call with the Xencus team. We'll show you how Xencus can run your EdTech operations—trainers, live classes, LMS, and certifications—under your brand.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Calendly widget — loaded only on the contact route, not site-wide */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      {children}
    </>
  );
}
