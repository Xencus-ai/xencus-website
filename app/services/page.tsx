import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = buildPageMetadata({
  title: "Services",
  description:
    "End-to-end operations for EdTech companies — live classes, LMS, certificates, legal, HR, finance, and technical services. One partner for every need.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesPageContent />;
}
