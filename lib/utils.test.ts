import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("joins simple string classes", () => {
    expect(cn("a", "b", "c")).toBe("a b c");
  });

  it("filters out falsy values", () => {
    expect(cn("a", false, null, undefined, "", 0 && "x")).toBe("a");
  });

  it("handles numbers by stringifying them", () => {
    expect(cn("a", 1, 2)).toBe("a 1 2");
  });

  it("flattens nested arrays", () => {
    expect(cn(["a", ["b", ["c"]]])).toBe("a b c");
  });

  it("handles objects as conditional classes", () => {
    expect(cn({ a: true, b: false, c: 1, d: 0 })).toBe("a c");
  });

  it("combines heterogeneous inputs correctly", () => {
    expect(cn("base", ["a", { b: true }], { c: true, d: false })).toBe(
      "base a b c",
    );
  });
});

