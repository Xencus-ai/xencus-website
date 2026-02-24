import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { CertificatePlatform } from "@/components/sections/CertificatePlatform";
import { OtherServices } from "@/components/sections/OtherServices";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { HowWeScale } from "@/components/sections/HowWeScale";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <CertificatePlatform />
      <HowWeWork />
      <OtherServices />
      <HowWeScale />
      <section className="bg-background" aria-label="Page content">
        <div className="mx-auto max-w-6xl px-4 pt-8 pb-12 sm:px-6 lg:px-8">
          {/* Placeholder for more sections */}
        </div>
      </section>
    </>
  );
}
