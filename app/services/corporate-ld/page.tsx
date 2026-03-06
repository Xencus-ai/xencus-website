import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import { corporateLdPage } from "@/content/services-pages";

export const metadata: Metadata = buildPageMetadata({
  title: "Corporate L&D",
  description:
    "Cohort-based upskilling programs delivered end-to-end: trainers, sessions, content ops, and reporting—so L&D teams can focus on strategy.",
  path: "/services/corporate-ld",
});

export default function CorporateLdPage() {
  return <ServiceLandingPage content={corporateLdPage} />;
}

