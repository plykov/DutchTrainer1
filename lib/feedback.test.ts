import { describe, expect, it } from "vitest";
import { buildFeedbackIssueUrl, buildFeedbackMailtoUrl } from "./feedback";

describe("feedback destinations", () => {
  it("addresses email feedback to the maintainer", () => {
    const url = buildFeedbackMailtoUrl({ category: "general", message: "Test feedback", page: "/settings" });
    const params = new URLSearchParams(url.split("?")[1]);

    expect(url).toMatch(/^mailto:plykov@gmail\.com\?/);
    expect(params.get("body")).toContain("Test feedback");
  });

  it("makes the public GitHub destination explicit in the URL", () => {
    const url = buildFeedbackIssueUrl({ category: "bug", message: "Test bug", page: "/write" });
    const params = new URL(url).searchParams;

    expect(url).toMatch(/^https:\/\/github\.com\/plykov\/DutchTrainer1\/issues\/new\?/);
    expect(params.get("body")).toContain("Test bug");
  });
});
