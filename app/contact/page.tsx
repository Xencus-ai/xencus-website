import { Phone, Mail, MapPin } from "lucide-react";

const CALENDLY_INLINE_URL =
  "https://calendly.com/xencus-info/scale-your-edtech-with-xencus?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=ffca48";

export default function ContactPage() {
  return (
    <main>
      {/* ------------------------------------------------------------------ */}
      {/* Header                                                              */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="bg-background pt-16 pb-10 text-center"
        aria-labelledby="contact-title"
      >
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Contact
          </p>
          <h1
            id="contact-title"
            className="mt-3 text-4xl font-bold tracking-tight text-heading sm:text-5xl"
          >
            Talk to our team
          </h1>
          <p className="mt-4 text-base/7 text-paragraph-secondary">
            Pick a time that works for you. We&apos;ll walk you through how Xencus can handle
            your EdTech operations — trainers, LMS, certifications, and more.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Calendly inline embed                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-background pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_INLINE_URL}
            style={{ minWidth: "320px", height: "900px" }}
          />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Contact details                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-gray-50 py-14" aria-labelledby="contact-details-title">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="contact-details-title"
            className="mb-8 text-center text-lg font-semibold text-heading"
          >
            Or reach us directly
          </h2>

          <div className="grid gap-4 sm:grid-cols-3">
            {/* Phone */}
            <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-xs ring-1 ring-gray-200">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand/10">
                <Phone className="size-5 text-brand-secondary" aria-hidden="true" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-widest text-paragraph-secondary">
                Phone
              </p>
              <a
                href="tel:+919610352015"
                className="text-sm font-medium text-heading transition-colors hover:text-brand-secondary"
              >
                +91 9610352015
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-xs ring-1 ring-gray-200">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand/10">
                <Mail className="size-5 text-brand-secondary" aria-hidden="true" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-widest text-paragraph-secondary">
                Email
              </p>
              <a
                href="mailto:hr@xencus.com"
                className="break-all text-sm font-medium text-heading transition-colors hover:text-brand-secondary"
              >
                hr@xencus.com
              </a>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-xs ring-1 ring-gray-200">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand/10">
                <MapPin className="size-5 text-brand-secondary" aria-hidden="true" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-widest text-paragraph-secondary">
                Address
              </p>
              <p className="text-sm font-medium leading-relaxed text-heading">
                BHIVE Workspace, AKR Tech Park, B Block, 7th Mile Hosur Rd, Bengaluru 560068
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
