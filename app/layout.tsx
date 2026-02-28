import type { Metadata, Viewport } from "next";
import { Google_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { BASE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/structured-data";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// next/font/google downloads Google Sans at build time and serves it from the
// same origin — no cross-origin round-trip at runtime. Only the latin subset
// is fetched, cutting font payload from ~2 MB to a fraction of that.
const xencusSans = Google_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-xencus",
  display: "swap",
  adjustFontFallback: false, // Next.js has no built-in metrics for Google Sans
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
        <main id="main-content" className="min-w-0 flex-1">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
