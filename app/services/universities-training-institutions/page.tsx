import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import { universitiesPage } from "@/content/services-pages";

export const metadata: Metadata = buildPageMetadata({
  title: "Universities & Training Institutions",
  description:
    "Industry-led programs delivered at scale with trainers, projects, assessments, and operations—so institutions expand capacity without hiring large teams.",
  path: "/services/universities-training-institutions",
});

export default function UniversitiesTrainingInstitutionsPage() {
  return <ServiceLandingPage content={universitiesPage} />;
}

