"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

const CALENDLY_URL =
  "https://calendly.com/xencus-info/scale-your-edtech-with-xencus?hide_event_type_details=1&hide_gdpr_banner=1&text_color=151515&primary_color=facc48";

function openCalendlyPopup(event: MouseEvent<HTMLButtonElement>) {
  event.preventDefault();
  if (typeof window !== "undefined" && (window as any).Calendly?.initPopupWidget) {
    (window as any).Calendly.initPopupWidget({ url: CALENDLY_URL });
  } else {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  }
}

export default function ContactPage() {
  return (
    <section
      className="bg-background py-12 sm:py-16"
      aria-labelledby="contact-page-title"
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-[90vw]">
        <header className="mx-auto max-w-3xl text-center">
          <h1
            id="contact-page-title"
            className="text-3xl font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl"
          >
            Talk to our team at {SITE_NAME}
          </h1>
          <p className="mt-3 text-sm font-medium leading-relaxed text-paragraph-secondary sm:text-base lg:text-lg">
            Book a call or reach us directly. We&apos;ll help you understand how Xencus can run your
            operations so you can focus on growth.
          </p>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] lg:items-start">
          {/* Left: direct contact details */}
          <div className="space-y-6 rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-8">
            <h2 className="text-lg font-semibold text-heading sm:text-xl">
              Reach us directly
            </h2>

            <ul className="space-y-4 text-sm sm:text-base text-paragraph-secondary">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-brand" aria-hidden />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-paragraph-secondary">
                    Contact number
                  </p>
                  <a href="tel:+919610352015" className="mt-0.5 inline-block font-medium text-heading">
                    +91 9610352015
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-brand" aria-hidden />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-paragraph-secondary">
                    Email
                  </p>
                  <a
                    href="mailto:hr@xencus.com"
                    className="mt-0.5 inline-block font-medium text-heading break-all"
                  >
                    hr@xencus.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-brand" aria-hidden />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-paragraph-secondary">
                    Address
                  </p>
                  <p className="mt-0.5 font-medium text-heading">
                    BHIVE Workspace - No.112, AKR Tech Park, B Block, 7th Mile Hosur Rd, Kudlu Gate,
                    Bengaluru, Karnataka 560068
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-4 rounded-xl border border-dashed border-gray-200 bg-gray-50/80 p-4 text-xs text-paragraph-secondary sm:text-sm">
              <p>
                Prefer email or WhatsApp? Share your use case and we&apos;ll respond with a tailored
                plan and timelines for your EdTech.
              </p>
            </div>
          </div>

          {/* Right: Calendly trigger */}
          <div className="space-y-4 rounded-2xl border border-gray-200 bg-white/80 p-6 text-center shadow-sm backdrop-blur-sm sm:p-8">
            <h2 className="text-lg font-semibold text-heading sm:text-xl">
              Book a time with us
            </h2>
            <p className="text-sm text-paragraph-secondary sm:text-base">
              Pick a slot that works for your team. Calendly will open in a popup so you never leave
              the site.
            </p>
            <button
              type="button"
              onClick={openCalendlyPopup}
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-brand-secondary shadow-sm transition hover:brightness-105"
            >
              Open Calendly
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

