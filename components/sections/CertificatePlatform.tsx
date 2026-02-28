import { Suspense } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Zap, ShieldCheck, BarChart3 } from "lucide-react";
import { certificatePlatform } from "@/content/certificate-platform";

// framer-motion code-split into a separate chunk — loaded lazily.
// Server Component can use dynamic() without ssr:false because framer-motion v12
// handles SSR gracefully. The section header and feature list remain in SSR HTML.
const DashboardMockup = dynamic(
  () => import("./DashboardMockup").then((m) => m.DashboardMockup)
);

export function CertificatePlatform() {
  return (
    <section
      className="bg-background py-12 sm:py-16"
      id="certificate-platform"
      aria-labelledby="certificate-platform-title"
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-[90vw]">
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center">
            <div className="badge-liquid-animated">
              <span className="badge-liquid-animated-inner inline-flex items-center px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand">
                {certificatePlatform.badge}
              </span>
            </div>
          </div>
          <p className="mt-2 flex items-center justify-center gap-1 text-xs font-medium text-paragraph-secondary">
            <span>Launching on 31 March 2026</span>
            <span aria-hidden="true" className="party-popper-animate">
              🎉
            </span>
          </p>
          <h2
            id="certificate-platform-title"
            className="mt-4 text-3xl font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl"
          >
            <span className="text-brand-text">Certificate</span> Generator for EdTech
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm font-medium leading-relaxed text-paragraph-secondary sm:text-base lg:text-lg">
            {certificatePlatform.subtitle}
          </p>
        </header>

        {/* Interactive dashboard — client-only, framer-motion deferred */}
        <div className="mt-10 sm:mt-12">
          <Suspense fallback={<div className="h-[420px] animate-pulse rounded-2xl bg-gray-100 sm:h-[480px]" />}>
            <DashboardMockup />
          </Suspense>
        </div>

        {/* Feature list — server-rendered, zero client JS */}
        <article className="mt-10 flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white/80 text-left shadow-sm backdrop-blur-sm sm:mt-12 md:flex-row">
          <div className="relative w-full min-h-[160px] md:w-2/5">
            <Image
              src="/Assets/dashboard/completion.svg"
              alt="Certificate completion illustration"
              fill
              className="object-cover object-left"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          <div className="flex flex-1 flex-col justify-center p-5 sm:p-6 lg:p-7 sm:pl-8 md:pl-10 lg:pl-12">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center">
                  <Zap className="h-5 w-5 text-brand" aria-hidden />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-heading sm:text-base">
                    {certificatePlatform.highlights.find((h) => h.id === "bulk")?.title}
                  </h3>
                  <p className="mt-1 max-w-lg text-xs leading-relaxed text-paragraph-secondary sm:text-sm">
                    {certificatePlatform.highlights.find((h) => h.id === "bulk")?.description}
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-brand" aria-hidden />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-heading sm:text-base">
                    {certificatePlatform.highlights.find((h) => h.id === "qr")?.title}
                  </h3>
                  <p className="mt-1 max-w-md text-xs leading-relaxed text-paragraph-secondary sm:text-sm">
                    {certificatePlatform.highlights.find((h) => h.id === "qr")?.description}
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center">
                  <Image
                    src="/Assets/dashboard/email.svg"
                    alt="Email delivery icon"
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-heading sm:text-base">
                    {certificatePlatform.highlights.find((h) => h.id === "email")?.title}
                  </h3>
                  <p className="mt-1 max-w-md text-xs leading-relaxed text-paragraph-secondary sm:text-sm">
                    {certificatePlatform.highlights.find((h) => h.id === "email")?.description}
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center">
                  <Image
                    src="/Assets/dashboard/WhatsApp.svg"
                    alt="WhatsApp delivery icon"
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-heading sm:text-base">
                    {certificatePlatform.highlights.find((h) => h.id === "whatsapp")?.title}
                  </h3>
                  <p className="mt-1 max-w-md text-xs leading-relaxed text-paragraph-secondary sm:text-sm">
                    {certificatePlatform.highlights.find((h) => h.id === "whatsapp")?.description}
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-brand" aria-hidden />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-heading sm:text-base">
                    {certificatePlatform.highlights.find((h) => h.id === "analytics")?.title}
                  </h3>
                  <p className="mt-1 max-w-md text-xs leading-relaxed text-paragraph-secondary sm:text-sm">
                    {certificatePlatform.highlights.find((h) => h.id === "analytics")?.description}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
