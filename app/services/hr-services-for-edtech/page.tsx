import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import { hrServicesPage } from "@/content/services-pages";

export const metadata: Metadata = buildPageMetadata({
  title: "HR Services for EdTech",
  description:
    "Hiring and people operations for EdTech teams: sourcing, screening, onboarding, and scalable HR workflows—without building a full HR team.",
  path: "/services/hr-services-for-edtech",
});

export default function HrServicesForEdtechPage() {
  return <ServiceLandingPage content={hrServicesPage} />;
}

