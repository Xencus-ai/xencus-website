import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import { legalServicesPage } from "@/content/services-pages";

export const metadata: Metadata = buildPageMetadata({
  title: "EdTech Legal Services",
  description:
    "Legal support built for EdTech operations: contracts, compliance, and ongoing advisory so you scale confidently without legal bottlenecks.",
  path: "/services/edtech-legal-services",
});

export default function EdtechLegalServicesPage() {
  return <ServiceLandingPage content={legalServicesPage} />;
}

