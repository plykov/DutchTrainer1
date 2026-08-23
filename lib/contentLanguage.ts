import type { ExplanationLanguage } from "@/lib/types";

/**
 * Select learner-facing instructional copy independently from the UI locale.
 * Russian remains the fallback until a reviewed translation is available.
 */
export function instructionFor(
  language: ExplanationLanguage | undefined,
  russian: string,
  english?: string,
): string {
  return language === "en" && english?.trim() ? english : russian;
}
