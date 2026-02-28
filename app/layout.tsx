import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { BASE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/structured-data";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// Bold is declared first so next/font/local preloads it — the hero headline
// uses font-black (→ Bold 700) and is the primary above-the-fold text.
// adjustFontFallback generates a metric-matched Arial fallback that prevents
// layout shift (CLS) when the custom font swaps in.
const xencusSans = localFont({
  src: [
    { path: "../fonts/XencusSans-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/XencusSans-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/XencusSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/XencusSans-Regular.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-xencus",
  display: "swap",
  preload: true,
  fallback: ["Arial", "system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    path: "/",
  }),
  metadataBase: new URL(BASE_URL),
};

const organizationJsonLd = getOrganizationSchema();
const websiteJsonLd = getWebsiteSchema();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${xencusSans.variable}`}>
      <head>
        {/* Warm connection to Speed Insights beacon before first user interaction */}
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
      </head>
      <body
        className="flex min-h-screen flex-col bg-background text-foreground font-sans antialiased"
        suppressHydrationWarning
      >
        {/* Skip navigation — visible on focus for keyboard/screen-reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-secondary focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
