import { test, expect } from "@playwright/test";

test.describe("Homepage smoke", () => {
  test("loads and has correct title", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));

    await page.goto("/");
    await expect(page).toHaveTitle(/Xencus/i);
    expect(errors).toHaveLength(0);
  });

  test("skip-to-main link is present", async ({ page }) => {
    await page.goto("/");
    const skip = page.locator("a[href='#main-content']").first();
    await expect(skip).toBeAttached();
  });

  test("hero section renders h1", async ({ page }) => {
    await page.goto("/");
    const h1 = page.locator("h1").first();
    await expect(h1).toBeVisible();
  });

  test("nav CTA link goes to /contact", async ({ page }) => {
    await page.goto("/");
    // Desktop nav CTA is visible at ≥1000px; on mobile it is CSS-hidden (max-[999px]:hidden)
    // so we verify it exists in DOM and has the correct href regardless of viewport.
    const cta = page.locator("#cta-talk-to-us");
    await expect(cta).toBeAttached();
    await expect(cta).toHaveAttribute("href", "/contact");
  });

  test("testimonials section is present", async ({ page }) => {
    await page.goto("/");
    const section = page.locator("#testimonials");
    await expect(section).toBeAttached();
  });

  test("stats section is present", async ({ page }) => {
    await page.goto("/");
    const stats = page.locator("#stats");
    await expect(stats).toBeAttached();
  });
});

test.describe("Contact page smoke", () => {
  test("loads and has heading", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));

    await page.goto("/contact");
    const h1 = page.locator("h1").first();
    await expect(h1).toBeVisible();
    await expect(h1).toContainText("Xencus");
    expect(errors).toHaveLength(0);
  });

  test("phone link is correct", async ({ page }) => {
    await page.goto("/contact");
    const phone = page.locator("a[href='tel:+919610352015']");
    await expect(phone).toBeVisible();
  });

  test("email link is correct", async ({ page }) => {
    await page.goto("/contact");
    const email = page.locator("a[href='mailto:hr@xencus.com']");
    await expect(email).toBeVisible();
  });

  test("Calendly button is present", async ({ page }) => {
    await page.goto("/contact");
    const btn = page.getByRole("button", { name: /calendly/i });
    await expect(btn).toBeVisible();
  });
});

test.describe("EdTech services page smoke", () => {
  test("loads and has correct h1", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));

    await page.goto("/services/edtech-companies");
    const h1 = page.locator("h1").first();
    await expect(h1).toBeVisible();
    expect(errors).toHaveLength(0);
  });

  test("renders 8 service cards", async ({ page }) => {
    await page.goto("/services/edtech-companies");
    const cards = page.locator("ul.grid article");
    await expect(cards).toHaveCount(8);
  });
});

test.describe("Navigation smoke", () => {
  test("mobile menu opens and closes", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    const toggle = page.locator("#mobile-menu-toggle");
    await toggle.click();
    const drawer = page.locator("[aria-modal='true']");
    await expect(drawer).toBeVisible();
    const close = page.locator("#mobile-menu-close");
    await close.click();
    await expect(drawer).not.toBeVisible();
  });

  test("robots.txt is served", async ({ page }) => {
    const res = await page.request.get("/robots.txt");
    expect(res.status()).toBe(200);
    const body = await res.text();
    expect(body).toContain("Sitemap");
  });

  test("sitemap.xml is served", async ({ page }) => {
    const res = await page.request.get("/sitemap.xml");
    expect(res.status()).toBe(200);
    const body = await res.text();
    expect(body).toContain("xencus.com");
  });
});
