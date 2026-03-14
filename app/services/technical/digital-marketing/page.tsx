import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import DigitalMarketingPageContent from "./DigitalMarketingPageContent";

export const metadata: Metadata = buildPageMetadata({
  title: "Digital Marketing",
  description:
    "Performance marketing for education growth: campaign strategy, creatives, landing pages, and transparent reporting to improve conversion and efficiency.",
  path: "/services/technical/digital-marketing",
});

export default function DigitalMarketingPage() {
  return <DigitalMarketingPageContent />;
}

