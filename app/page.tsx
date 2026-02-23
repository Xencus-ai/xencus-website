import { Hero } from "@/components/sections/Hero";
import { HowWeWork } from "@/components/sections/HowWeWork";

export default function Home() {
  return (
    <>
      <Hero />
      <HowWeWork />
      <section className="bg-background" aria-label="Page content">
        <div className="mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 lg:px-8">
          {/* Placeholder for more sections */}
        </div>
      </section>
    </>
  );
}
