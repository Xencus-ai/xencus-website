import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      {/* Next sections will go below; white bg so hero fade blends in */}
      <section className="bg-background" aria-label="Page content">
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6 lg:px-8">
          {/* Placeholder for next sections */}
        </div>
      </section>
    </>
  );
}
