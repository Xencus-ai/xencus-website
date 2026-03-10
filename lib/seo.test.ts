import { describe, it, expect } from "vitest";
import { buildPageMetadata } from "./seo";
import { BASE_URL, DEFAULT_OG_IMAGE, SITE_NAME } from "./constants";

describe("buildPageMetadata", () => {
  it("builds basic metadata with canonical URL and OG/Twitter defaults", () => {
    const meta = buildPageMetadata({
      title: "About",
      description: "About page",
      path: "/about",
    });

    const expectedUrl = `${BASE_URL}/about`;
    const expectedTitle = `About | ${SITE_NAME}`;

    expect(meta.title).toBe(expectedTitle);
    expect(meta.description).toBe("About page");
    expect(meta.alternates?.canonical).toBe(expectedUrl);
    expect(meta.openGraph?.url).toBe(expectedUrl);
    expect(meta.openGraph?.title).toBe(expectedTitle);
    expect(meta.openGraph?.images?.[0]?.url).toBe(DEFAULT_OG_IMAGE);
    expect(meta.twitter?.card).toBe("summary_large_image");
    expect(meta.twitter?.images?.[0]).toBe(DEFAULT_OG_IMAGE);
  });

  it("uses bare SITE_NAME without suffix when title equals site name", () => {
    const meta = buildPageMetadata({
      title: SITE_NAME,
      description: "Home",
    });

    expect(meta.title).toBe(SITE_NAME);
    expect(meta.openGraph?.title).toBe(SITE_NAME);
    expect(meta.twitter?.title).toBe(SITE_NAME);
  });

  it("normalises path without leading slash", () => {
    const meta = buildPageMetadata({
      title: "Pricing",
      description: "Pricing page",
      path: "pricing",
    });

    expect(meta.alternates?.canonical).toBe(`${BASE_URL}/pricing`);
  });

  it("adds robots noindex when requested", () => {
    const meta = buildPageMetadata({
      title: "Internal",
      description: "Hidden page",
      path: "/internal",
      noIndex: true,
    });

    expect(meta.robots).toEqual({ index: false, follow: false });
  });
});

