import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import { digitalMarketingPage } from "@/content/services-pages";

export const metadata: Metadata = buildPageMetadata({
  title: "Digital Marketing",
  description:
    "Performance marketing for education growth: campaign strategy, creatives, landing pages, and transparent reporting to improve conversion and efficiency.",
  path: "/services/technical/digital-marketing",
});

export default function DigitalMarketingPage() {
  return <ServiceLandingPage content={digitalMarketingPage} />;
}

