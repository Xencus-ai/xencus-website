import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { getHomepageServiceListSchema } from "@/lib/structured-data";

// Lazy load below-the-fold sections to reduce Total Blocking Time on initial load
const WhatWeDo = dynamic(() => import("@/components/sections/WhatWeDo").then((m) => m.WhatWeDo), {
  loading: () => <section className="min-h-[320px] bg-background" aria-hidden />,
});
const CertificatePlatform = dynamic(
  () => import("@/components/sections/CertificatePlatform").then((m) => m.CertificatePlatform),
  { loading: () => <section className="min-h-[280px] bg-background" aria-hidden /> }
);
const HowWeWork = dynamic(
  () => import("@/components/sections/HowWeWork").then((m) => m.HowWeWork),
  { loading: () => <section className="min-h-[280px] bg-background" aria-hidden /> }
);
const OtherServices = dynamic(
  () => import("@/components/sections/OtherServices").then((m) => m.OtherServices),
  { loading: () => <section className="min-h-[320px] bg-background" aria-hidden /> }
);
const HowWeScale = dynamic(
  () => import("@/components/sections/HowWeScale").then((m) => m.HowWeScale),
  { loading: () => <section className="min-h-[320px] bg-background" aria-hidden /> }
);
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials").then((m) => m.Testimonials),
  { loading: () => <section className="min-h-[360px] bg-background" aria-hidden /> }
);

export default function Home() {
  return (
    <>
      <JsonLd data={getHomepageServiceListSchema()} />
      <Hero />
      <WhatWeDo />
      <CertificatePlatform />
      <HowWeWork />
      <OtherServices />
      <HowWeScale />
      <Testimonials />
    </>
  );
}
