import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import { graphicDesignPage } from "@/content/services-pages";

export const metadata: Metadata = buildPageMetadata({
  title: "Graphic Designing",
  description:
    "Design support for EdTech growth: brand assets, marketing creatives, templates, and fast iteration cycles with consistent quality.",
  path: "/services/technical/graphic-designing",
});

export default function GraphicDesigningPage() {
  return <ServiceLandingPage content={graphicDesignPage} />;
}

