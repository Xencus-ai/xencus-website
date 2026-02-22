import type { Metadata } from "next";
import { BASE_URL, SITE_NAME } from "./constants";

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
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}
