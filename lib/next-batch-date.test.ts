import { describe, it, expect, vi } from "vitest";
import { getNextBatchStartDate } from "./next-batch-date";

// Helper to freeze Date.now / new Date for deterministic tests
const mockNow = (iso: string) => {
  const fixed = new Date(iso);
  vi.setSystemTime(fixed);
};

describe("getNextBatchStartDate", () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("returns a date in the first week (1–7) of the next month", () => {
    mockNow("2026-03-10T12:00:00.000Z"); // March 10, 2026

    const result = getNextBatchStartDate();

    expect(result.month).toBe(4); // April
    expect(result.year).toBe(2026);
    expect(result.day).toBeGreaterThanOrEqual(1);
    expect(result.day).toBeLessThanOrEqual(7);
    expect(typeof result.label).toBe("string");
    expect(result.label).toContain("2026");
  });

  it("rolls over correctly at year boundary", () => {
    mockNow("2026-12-20T00:00:00.000Z");

    const result = getNextBatchStartDate();

    expect(result.year).toBe(2027);
    expect(result.month).toBe(1);
    expect(result.day).toBeGreaterThanOrEqual(1);
    expect(result.day).toBeLessThanOrEqual(7);
  });

  it("is deterministic for a given month/year", () => {
    mockNow("2026-05-05T00:00:00.000Z");
    const first = getNextBatchStartDate();

    // Same month/year context → same result
    mockNow("2026-05-25T00:00:00.000Z");
    const second = getNextBatchStartDate();

    expect(second).toEqual(first);
  });
});

