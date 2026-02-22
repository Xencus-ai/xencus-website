import type { ReactNode } from "react";

type JsonLdProps = {
  data: object;
};

/**
 * Renders JSON-LD structured data for SEO.
 * Use for Organization, WebSite, Article, FAQPage, Product, etc.
 */
export function JsonLd({ data }: JsonLdProps): ReactNode {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
