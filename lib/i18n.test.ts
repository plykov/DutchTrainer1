import { describe, expect, it } from "vitest";
import { t, type I18nKey } from "./i18n";

describe("English learner-facing chrome", () => {
  it("has English labels for the module navigation", () => {
    const expected: Array<[I18nKey, string]> = [
      ["nav_practice", "Practice"],
      ["nav_vocab", "Vocabulary"],
      ["nav_reading", "Reading"],
      ["nav_listening", "Listening"],
      ["nav_writing", "Writing"],
      ["nav_speaking", "Speaking"],
      ["nav_interaction", "Interaction"],
      ["nav_exam", "Exam simulation"],
    ];

    for (const [key, label] of expected) expect(t("en", key)).toBe(label);
  });

  it("interpolates English exam and writing status text", () => {
    expect(t("en", "exam_demo_knm", { count: t("en", "exam_question_count", { n: 41 }) })).toBe(
      "KNM demo simulation (41 questions)",
    );
    expect(t("en", "exam_speaking_summary", { n: 16 })).toContain("16-task demo");
    expect(t("en", "writing_no_errors")).toContain("No clear errors");
  });
});
