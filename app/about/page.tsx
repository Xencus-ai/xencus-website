import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us",
  description:
    "Xencus is the operations backbone for scalable EdTech. We run delivery, legal, HR, finance, and tech so education businesses can focus on product and growth.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
