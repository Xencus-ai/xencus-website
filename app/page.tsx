import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { CertificatePlatform } from "@/components/sections/CertificatePlatform";
import { OtherServices } from "@/components/sections/OtherServices";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { HowWeScale } from "@/components/sections/HowWeScale";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
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
