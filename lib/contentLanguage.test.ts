import { describe, expect, it } from "vitest";
import { instructionFor } from "./contentLanguage";

describe("instructionFor", () => {
  it("uses English instructional copy for English learners", () => {
    expect(instructionFor("en", "Русский текст", "English text")).toBe("English text");
  });

  it("keeps Russian as the fallback for missing or unsupported translations", () => {
    expect(instructionFor("en", "Русский текст")).toBe("Русский текст");
    expect(instructionFor("ru", "Русский текст", "English text")).toBe("Русский текст");
    expect(instructionFor("nl", "Русский текст", "English text")).toBe("Русский текст");
  });
});
