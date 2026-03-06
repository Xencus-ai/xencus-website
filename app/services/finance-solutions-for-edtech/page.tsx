import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import { financeSolutionsPage } from "@/content/services-pages";

export const metadata: Metadata = buildPageMetadata({
  title: "Finance Solutions for EdTech",
  description:
    "Finance ops for EdTech businesses: bookkeeping, compliance, and reporting aligned to cohort and subscription revenue models.",
  path: "/services/finance-solutions-for-edtech",
});

export default function FinanceSolutionsForEdtechPage() {
  return <ServiceLandingPage content={financeSolutionsPage} />;
}

