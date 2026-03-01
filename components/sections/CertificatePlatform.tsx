import Image from "next/image";
import { Zap, ShieldCheck, BarChart3 } from "lucide-react";
import { certificatePlatform } from "@/content/certificate-platform";
import { IntersectionMockup } from "./IntersectionMockup";

export function CertificatePlatform() {
  const [bulk, qr, email, whatsapp, analytics] = certificatePlatform.highlights;

  return (
    <section
      className="min-h-[calc(100vh-var(--header-offset))] bg-background py-12 sm:py-16"
      id="certificate-platform"
      aria-labelledby="certificate-platform-title"
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-[90vw]">
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center">
            <div className="badge-liquid-animated">
              <span className="badge-liquid-animated-inner inline-flex items-center px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-secondary">
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
            <span className="text-brand-secondary">Certificate</span> Generator for EdTech
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm font-medium leading-relaxed text-paragraph-secondary sm:text-base lg:text-lg">
            {certificatePlatform.subtitle}
          </p>
        </header>

        {/* Interactive dashboard — deferred until section enters viewport */}
        <div className="mt-10 sm:mt-12">
          <IntersectionMockup />
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
                  <Zap className="h-5 w-5 text-brand-secondary" aria-hidden />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-heading sm:text-base">{bulk.title}</h3>
                  <p className="mt-1 max-w-lg text-xs leading-relaxed text-paragraph-secondary sm:text-sm">
                    {bulk.description}
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-brand-secondary" aria-hidden />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-heading sm:text-base">{qr.title}</h3>
                  <p className="mt-1 max-w-md text-xs leading-relaxed text-paragraph-secondary sm:text-sm">
                    {qr.description}
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
                  <h3 className="text-sm font-semibold text-heading sm:text-base">{email.title}</h3>
                  <p className="mt-1 max-w-md text-xs leading-relaxed text-paragraph-secondary sm:text-sm">
                    {email.description}
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
                  <h3 className="text-sm font-semibold text-heading sm:text-base">{whatsapp.title}</h3>
                  <p className="mt-1 max-w-md text-xs leading-relaxed text-paragraph-secondary sm:text-sm">
                    {whatsapp.description}
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-brand-secondary" aria-hidden />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-heading sm:text-base">{analytics.title}</h3>
                  <p className="mt-1 max-w-md text-xs leading-relaxed text-paragraph-secondary sm:text-sm">
                    {analytics.description}
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
