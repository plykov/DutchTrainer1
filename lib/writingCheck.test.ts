import { describe, expect, it } from "vitest";
import { checkAdequacy, detectErrors, detectErrorsCombined } from "./writingCheck";

describe("checkAdequacy", () => {
  it("rejects an answer that is too short or misses a required topic", () => {
    const result = checkAdequacy("Ik wil graag komen.", ["vraagt om de afspraak te verzetten"], 8);

    expect(result.passed).toBe(false);
    expect(result.missing).toContain("ответ короче 8 слов");
    expect(result.missing).toContain("vraagt om de afspraak te verzetten");
  });

  it("accepts a response that meets the specialised rescheduling requirement", () => {
    const result = checkAdequacy(
      "Ik wil de afspraak graag naar een andere dag verzetten, alstublieft.",
      ["vraagt om de afspraak te verzetten"],
      8
    );

    expect(result).toEqual({ passed: true, missing: [] });
  });
});

describe("error detection", () => {
  it("detects local word-order errors without any network service", async () => {
    expect(detectErrors("Morgen ik ga naar school.").map((error) => error.code)).toContain("ERR_V2_POS");

    const combined = await detectErrorsCombined("Morgen ik ga naar school.");
    expect(combined.map((error) => error.code)).toContain("ERR_V2_POS");
  });
});
