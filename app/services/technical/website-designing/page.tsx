import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import { websiteDesignPage } from "@/content/services-pages";

export const metadata: Metadata = buildPageMetadata({
  title: "Website Designing",
  description:
    "Websites built to convert learners: landing pages, full marketing sites, performance and SEO—design + build in one team.",
  path: "/services/technical/website-designing",
});

export default function WebsiteDesigningPage() {
  return <ServiceLandingPage content={websiteDesignPage} />;
}

