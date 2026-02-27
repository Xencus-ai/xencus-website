import type { Metadata } from "next";
import { BASE_URL, DEFAULT_OG_IMAGE, SITE_NAME } from "./constants";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

/**
 * Build metadata for a page. Use in layout/page metadata or generateMetadata.
 * Titles should be under 60 chars; descriptions under 160.
 */
export function buildPageMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: PageMeta): Metadata {
  const url = path ? `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}` : BASE_URL;
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}
