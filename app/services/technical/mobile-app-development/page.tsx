import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import { mobileAppDevPage } from "@/content/services-pages";

export const metadata: Metadata = buildPageMetadata({
  title: "Mobile App Development",
  description:
    "Mobile app development for learning experiences: MVP to launch, product quality, and ongoing iterations—without juggling multiple teams.",
  path: "/services/technical/mobile-app-development",
});

export default function MobileAppDevelopmentPage() {
  return <ServiceLandingPage content={mobileAppDevPage} />;
}

