import { describe, it, expect } from "vitest";
import {
  getOrganizationSchema,
  getWebsiteSchema,
  getHomepageServiceListSchema,
  getEdtechServiceSchema,
  getEdtechFaqSchema,
  EDTECH_FAQ_ITEMS,
} from "./structured-data";
import { BASE_URL, SITE_NAME, SITE_DESCRIPTION } from "./constants";

describe("structured-data organization schema", () => {
  it("includes basic organization fields wired to site constants", () => {
    const org = getOrganizationSchema();

    expect(org["@context"]).toBe("https://schema.org");
    expect(org["@type"]).toBe("Organization");
    expect(org.name).toBe(SITE_NAME);
    expect(org.url).toBe(BASE_URL);
    expect(org.description).toBe(SITE_DESCRIPTION);
    expect(org.logo?.url).toBe(`${BASE_URL}/Assets/xencus-logo.svg`);
  });
});

describe("structured-data website schema", () => {
  it("describes the website with correct URL and description", () => {
    const site = getWebsiteSchema();

    expect(site["@type"]).toBe("WebSite");
    expect(site.name).toBe(SITE_NAME);
    expect(site.url).toBe(BASE_URL);
    expect(site.description).toBe(SITE_DESCRIPTION);
    expect(site.potentialAction?.target?.urlTemplate).toBe(`${BASE_URL}/contact`);
  });
});

describe("structured-data homepage service list schema", () => {
  it("is an ItemList with items pointing at known service URLs", () => {
    const list = getHomepageServiceListSchema();

    expect(list["@type"]).toBe("ItemList");
    expect(list.name).toContain(SITE_NAME);
    expect(list.description).toBe(SITE_DESCRIPTION);
    expect(list.url).toBe(BASE_URL);

    const items = list.itemListElement;
    expect(Array.isArray(items)).toBe(true);
    expect(items.length).toBeGreaterThanOrEqual(3);
    // Basic sanity: first item has required fields and uses BASE_URL
    expect(items[0].url.startsWith(BASE_URL)).toBe(true);
    expect(typeof items[0].name).toBe("string");
  });
});

describe("structured-data EdTech service schema", () => {
  it("describes EdTech service with provider wired to SITE_NAME", () => {
    const service = getEdtechServiceSchema();

    expect(service["@type"]).toBe("Service");
    expect(service.provider?.name).toBe(SITE_NAME);
    expect(service.url).toBe(`${BASE_URL}/services/edtech-companies`);
    expect(service.hasOfferCatalog?.itemListElement?.length).toBeGreaterThan(0);
  });
});

describe("structured-data FAQ schema", () => {
  it("maps EDTECH_FAQ_ITEMS into FAQPage mainEntity correctly", () => {
    const faq = getEdtechFaqSchema();

    expect(faq["@type"]).toBe("FAQPage");
    expect(Array.isArray(faq.mainEntity)).toBe(true);
    expect(faq.mainEntity.length).toBe(EDTECH_FAQ_ITEMS.length);

    faq.mainEntity.forEach((entity, index) => {
      expect(entity["@type"]).toBe("Question");
      expect(entity.name).toBe(EDTECH_FAQ_ITEMS[index].q);
      expect(entity.acceptedAnswer?.["@type"]).toBe("Answer");
      expect(entity.acceptedAnswer?.text).toBe(EDTECH_FAQ_ITEMS[index].a);
    });
  });
});

