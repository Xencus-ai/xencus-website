import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram } from "lucide-react";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import { FOOTER_LINKS } from "./footer-data";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/xencus/",
    icon: Linkedin,
    id: "footer-linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/xencus_tech",
    icon: Instagram,
    id: "footer-instagram",
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-auto bg-brand-secondary text-white"
      id="site-footer"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top: logo + tagline + CTA */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="inline-flex w-fit items-center transition-opacity hover:opacity-90"
              aria-label={`${SITE_NAME} home`}
              id="footer-brand"
            >
              <Image
                src="/Assets/xencus-logo.svg"
                alt=""
                width={120}
                height={52}
                className="h-10 w-auto"
              />
            </Link>
            <p className="max-w-sm text-sm text-white/70">{SITE_TAGLINE}</p>
            <ul className="mt-2 flex items-center gap-3" aria-label="Social links">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon, id }) => (
                <li key={id}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors hover:text-white"
                    aria-label={label}
                    id={id}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="#contact"
            className="w-fit rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-brand-secondary transition-opacity hover:opacity-90"
            id="footer-cta"
          >
            Talk to us
          </Link>
        </div>

        {/* Link columns */}
        <nav
          className="grid gap-8 pt-10 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Footer navigation"
        >
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/90">
              {FOOTER_LINKS.services.title}
            </h3>
            <ul className="mt-4 flex flex-col gap-3" role="list">
              {FOOTER_LINKS.services.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/90">
              {FOOTER_LINKS.solutions.title}
            </h3>
            <ul className="mt-4 flex flex-col gap-3" role="list">
              {FOOTER_LINKS.solutions.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/90">
              {FOOTER_LINKS.company.title}
            </h3>
            <ul className="mt-4 flex flex-col gap-3" role="list">
              {FOOTER_LINKS.company.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Bottom: copyright + legal */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/60">
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <li>
              <Link
                href="#privacy"
                className="text-white/60 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#terms"
                className="text-white/60 transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
