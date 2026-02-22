"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { SITE_NAME } from "@/lib/constants";
import { MAIN_NAV, SERVICES_MEGA_MENU } from "./header-data";

const GLASS_CLASSES =
  "bg-glass-white border border-glass-border shadow-glass-pill backdrop-blur-[20px] backdrop-saturate-[1.8]";

/* Variant: navbar = brand secondary (dark), CTA = brand (yellow) */
const NAVBAR_CLASSES =
  "bg-brand-secondary border border-white/10 shadow-glass-pill rounded-full";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const onEscape = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!megaOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        megaRef.current &&
        navRef.current &&
        !megaRef.current.contains(e.target as Node) &&
        !navRef.current.contains(e.target as Node)
      ) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [megaOpen]);

  return (
    <>
      {/* Desktop: sticky pill nav (≥1000px) */}
      <header
        className="sticky top-0 z-50 mx-auto mt-6 w-full max-w-[calc(100vw-48px)] px-0 max-[999px]:hidden"
        style={{ width: "min(100% - 48px, 1200px)" }}
        id="main-header"
      >
        <nav
          ref={navRef}
          className={`${NAVBAR_CLASSES} flex items-center justify-between gap-8 px-6 py-2.5`}
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="relative flex shrink-0 items-center transition-opacity hover:opacity-80"
            id="header-brand"
            aria-label={`${SITE_NAME} home`}
            onMouseEnter={() => setMegaOpen(false)}
          >
            <Image
              src="/Assets/xencus-logo.svg"
              alt={`${SITE_NAME} - The Backbone of Scalable EdTech`}
              width={110}
              height={48}
              className="h-9 w-auto"
              priority
            />
          </Link>

          <div className="flex items-center gap-1">
            {MAIN_NAV.map((item) => (
              <div key={item.label} className="relative flex">
                {"hasMega" in item && item.hasMega ? (
                  <button
                    type="button"
                    onMouseEnter={() => setMegaOpen(true)}
                    onClick={() => setMegaOpen((v) => !v)}
                    className="rounded-full px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
                    id={`nav-${item.label.toLowerCase().replace(/\s+/, "-")}`}
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="rounded-full px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
                    id={`nav-${item.label.toLowerCase().replace(/\s+/, "-")}`}
                    onMouseEnter={() => setMegaOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <Link
            href="#contact"
            className="shrink-0 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-brand-secondary transition-opacity hover:opacity-90"
            id="cta-talk-to-us"
            onMouseEnter={() => setMegaOpen(false)}
          >
            Talk to us
          </Link>
        </nav>

        {/* Mega menu (desktop) */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              ref={megaRef}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="absolute left-1/2 top-full z-50 mt-2 w-[min(90vw,720px)] -translate-x-1/2 rounded-2xl p-6"
              style={{
                background: "rgba(255, 255, 255, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
                backdropFilter: "blur(20px) saturate(180%)",
              }}
              role="menu"
              aria-label="Services submenu"
            >
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <ul className="flex flex-col gap-2" role="none">
                    {SERVICES_MEGA_MENU.column1.items.map((link) => (
                      <li key={link.label} role="none">
                        <Link
                          href={link.href}
                          className="block rounded-lg px-3 py-2 text-sm text-heading transition-colors hover:bg-white/50"
                          role="menuitem"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col gap-2" role="none">
                    {SERVICES_MEGA_MENU.column2.items.map((link) => (
                      <li key={link.label} role="none">
                        <Link
                          href={link.href}
                          className="block rounded-lg px-3 py-2 text-sm text-heading transition-colors hover:bg-white/50"
                          role="menuitem"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  {SERVICES_MEGA_MENU.column3.title && (
                    <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-paragraph-secondary">
                      {SERVICES_MEGA_MENU.column3.title}
                    </p>
                  )}
                  <ul className="flex flex-col gap-2" role="none">
                    {SERVICES_MEGA_MENU.column3.items.map((link) => (
                      <li key={link.label} role="none">
                        <Link
                          href={link.href}
                          className="block rounded-lg px-3 py-2 text-sm text-heading transition-colors hover:bg-white/50"
                          role="menuitem"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile: hamburger + drawer (<1000px) */}
      <div className="min-[1000px]:hidden">
        <div className="sticky top-0 z-50 flex items-center p-4">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-secondary shadow-glass-pill border border-white/10"
            aria-label="Open menu"
            id="mobile-menu-toggle"
          >
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[60] bg-black/20"
                aria-hidden
                onClick={() => setMobileOpen(false)}
              />
              <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 400, damping: 40 }}
                className="fixed inset-y-0 left-0 z-[70] w-[min(100vw-48px,320px)] overflow-y-auto bg-brand-secondary p-6 shadow-glass-pill border-r border-white/10"
                role="dialog"
                aria-label="Mobile menu"
              >
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <Link
                    href="/"
                    className="relative flex items-center"
                    id="mobile-header-brand"
                    onClick={() => setMobileOpen(false)}
                    aria-label={`${SITE_NAME} home`}
                  >
                    <Image
                      src="/Assets/xencus-logo.svg"
                      alt={`${SITE_NAME} - The Backbone of Scalable EdTech`}
                      width={110}
                      height={48}
                      className="h-8 w-auto"
                    />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-full p-2 text-white hover:bg-white/20"
                    aria-label="Close menu"
                    id="mobile-menu-close"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile navigation">
                  {MAIN_NAV.map((item) =>
                    "hasMega" in item && item.hasMega ? (
                      <div key={item.label} className="flex flex-col gap-2">
                        <span className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white/70">
                          {item.label}
                        </span>
                        <ul className="flex flex-col gap-0.5 pl-2">
                          {SERVICES_MEGA_MENU.column1.items.map((link) => (
                            <li key={link.label}>
                              <Link
                                href={link.href}
                                className="block rounded-lg px-3 py-2 text-sm text-white hover:bg-white/20"
                                onClick={() => setMobileOpen(false)}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                          {SERVICES_MEGA_MENU.column2.items.map((link) => (
                            <li key={link.label}>
                              <Link
                                href={link.href}
                                className="block rounded-lg px-3 py-2 text-sm text-white hover:bg-white/20"
                                onClick={() => setMobileOpen(false)}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                          {SERVICES_MEGA_MENU.column3.title && (
                            <li className="mt-2 px-3 text-xs font-semibold text-white/70">
                              {SERVICES_MEGA_MENU.column3.title}
                            </li>
                          )}
                          {SERVICES_MEGA_MENU.column3.items.map((link) => (
                            <li key={link.label}>
                              <Link
                                href={link.href}
                                className="block rounded-lg px-3 py-2 text-sm text-white hover:bg-white/20"
                                onClick={() => setMobileOpen(false)}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="rounded-lg px-3 py-2.5 text-sm font-medium text-white hover:bg-white/20"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                  <Link
                    href="#contact"
                    className="mt-4 rounded-full bg-brand px-5 py-3 text-center text-sm font-medium text-brand-secondary hover:opacity-90"
                    id="mobile-cta-talk-to-us"
                    onClick={() => setMobileOpen(false)}
                  >
                    Talk to us
                  </Link>
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
