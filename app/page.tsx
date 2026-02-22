import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Next sections will go below; white bg so hero fade blends in */}
      <section className="bg-background" aria-label="Page content">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Placeholder for next sections */}
        </div>
      </section>
    </>
  );
}
