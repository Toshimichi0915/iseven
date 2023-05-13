import { describe, it } from "vitest";
import { isEven } from "../src/iseven";

describe("iseven", () => {
  it("number", async ({ expect }) => {
    expect(await isEven(2)).toBe(true);
    expect(await isEven(3)).toBe(false);
  });

  it("string", async ({ expect }) => {
    expect(await isEven("2")).toBe(true);
    expect(await isEven("3")).toBe(false);
  });

  it("function", async ({ expect }) => {
    expect(await isEven(() => 2)).toBe(true);
    expect(await isEven(() => 3)).toBe(false);
  });

  it("async function", async ({ expect }) => {
    expect(await isEven(async () => 2)).toBe(true);
    expect(await isEven(async () => 3)).toBe(false);
  });
});
