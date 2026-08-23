import { expect, test } from "@playwright/test";
import { PRACTICE_ITEMS } from "../lib/content/items";
import { ShortWriteItem } from "../lib/types";

const WRITE_ITEMS = PRACTICE_ITEMS.filter((item) => item.taskType === "short_write") as ShortWriteItem[];

async function onboardInEnglish(page: import("@playwright/test").Page) {
  await page.goto("/onboarding");

  await expect(page.getByRole("heading", { name: /welkom/i })).toBeVisible();
  const english = page.getByRole("button", { name: "English", exact: true });
  await english.click();
  await expect(english).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: "Начать / Beginnen" }).click();
  await expect(page).toHaveURL(/\/dashboard/);
}

async function activeWriteItem(page: import("@playwright/test").Page): Promise<ShortWriteItem> {
  const prompt = await page.getByTestId("writing-task-prompt").innerText();
  const item = WRITE_ITEMS.find((candidate) => candidate.taskPrompt === prompt);
  expect(item, `No authored writing item matched prompt: ${prompt}`).toBeDefined();
  return item!;
}

test("a learner can onboard, navigate, and choose the external writing check", async ({ page }) => {
  await onboardInEnglish(page);
  await expect(page.getByRole("heading", { name: "Overview" })).toBeVisible();
  const storedExplanationLanguage = await page.evaluate(() => {
    const persisted = JSON.parse(localStorage.getItem("dutch-a2b1-store") ?? "null");
    return persisted?.state?.profile?.explanationLanguage;
  });
  expect(storedExplanationLanguage).toBe("en");

  // Keep the network-boundary assertion deterministic by selecting the
  // original vetted short-write task (the first item in the filtered bank).
  await page.evaluate(() => {
    Math.random = () => 0;
  });
  await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Writing" }).click();
  await expect(page).toHaveURL(/\/write/);
  await expect(page.getByRole("heading", { name: "Writing" })).toBeVisible();

  const externalCheck = page.getByRole("checkbox");
  await expect(externalCheck).not.toBeChecked();
  await expect(page.getByText(/sent to LanguageTool's public service/i)).toBeVisible();

  let languageToolRequests = 0;
  let submittedText = "";
  await page.route("https://api.languagetool.org/v2/check", async (route) => {
    languageToolRequests++;
    submittedText = new URLSearchParams(route.request().postData() ?? "").get("text") ?? "";
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      headers: { "access-control-allow-origin": "*" },
      body: JSON.stringify({ matches: [] }),
    });
  });

  const firstItem = await activeWriteItem(page);
  await page.getByRole("textbox").fill(firstItem.modelAnswer);
  await page.getByRole("button", { name: "Check" }).click();
  await expect(page.getByText(/No clear errors from the tracked categories/i)).toBeVisible();
  expect(languageToolRequests).toBe(0);

  await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Overview" }).click();
  await expect(page).toHaveURL(/\/dashboard/);
  await page.evaluate(() => {
    Math.random = () => 0;
  });
  await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: "Writing" }).click();
  const optedInItem = await activeWriteItem(page);
  const optedInCheck = page.getByRole("checkbox");
  await expect(optedInCheck).not.toBeChecked();
  await optedInCheck.check();
  await expect(optedInCheck).toBeChecked();
  await page.getByRole("textbox").fill(optedInItem.modelAnswer);
  await page.getByRole("button", { name: "Check" }).click();
  await expect(page.getByText(/No clear errors from the tracked categories/i)).toBeVisible();

  expect(languageToolRequests).toBe(1);
  expect(submittedText).toBe(optedInItem.modelAnswer);
});

test("English chrome covers every learning module and the exam runners", async ({ page }) => {
  await onboardInEnglish(page);
  const navigation = page.getByRole("navigation", { name: "Main navigation" });

  for (const name of [
    "Practice",
    "Vocabulary",
    "Reading",
    "Listening",
    "Writing",
    "Speaking",
    "Interaction",
    "Exam simulation",
  ]) {
    await expect(navigation.getByRole("link", { name, exact: true })).toBeVisible();
  }

  const pages = [
    ["/practice", "Practice"],
    ["/vocab", "Vocabulary"],
    ["/reading", "Reading"],
    ["/listening", "Listening"],
    ["/speaking", "Speaking"],
    ["/interaction", "Interaction"],
  ] as const;
  for (const [path, heading] of pages) {
    await page.goto(path);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  }

  await page.goto("/exam");
  await expect(page.getByRole("heading", { name: "Exam constraints" })).toBeVisible();
  await page.getByRole("button", { name: /Schrijven demo simulation/i }).click();
  await expect(page.getByRole("button", { name: "Show sample" }).first()).toBeVisible();

  await page.goto("/exam");
  await page.getByRole("button", { name: /Luisteren demo simulation/i }).click();
  await expect(page.getByText(/Read the question first/i)).toBeVisible();
});

test("English explanation language renders English learning feedback", async ({ page }) => {
  await onboardInEnglish(page);
  await page.evaluate(() => {
    Math.random = () => 0;
  });
  await page.goto("/practice");

  const firstRadio = page.getByRole("radio").first();
  const firstTextbox = page.getByRole("textbox").first();
  await expect(firstRadio.or(firstTextbox)).toBeVisible();
  if (await firstRadio.isVisible()) {
    await firstRadio.check();
  } else {
    await firstTextbox.fill("test");
  }
  await page.getByRole("button", { name: "Check" }).click();

  const explanation = page.getByTestId("instruction-explanation");
  await expect(explanation).toBeVisible();
  await expect(explanation).not.toHaveText(/[А-Яа-яЁё]/);
});

test("legal and version information is public before onboarding", async ({ page }) => {
  await page.goto("/onboarding");

  const privacyLink = page.getByRole("link", { name: /Privacy \/ Конфиденциальность/i });
  await expect(privacyLink).toBeVisible();
  await expect(page.getByRole("link", { name: "v0.2.0-beta.1" })).toBeVisible();
  await privacyLink.click();

  await expect(page).toHaveURL(/\/privacy\/?$/);
  await expect(page.getByRole("heading", { name: /Privacy notice/i })).toBeVisible();
  await expect(page.getByText(/GitHub Pages hosts the static site/i)).toBeVisible();
  await expect(page.getByText(/checkbox is off on every new writing screen/i)).toBeVisible();
  await expect(page.getByRole("heading", { name: /Полная версия на русском/i })).toBeVisible();

  await page.getByRole("link", { name: /Terms \/ Условия/i }).click();
  await expect(page).toHaveURL(/\/terms\/?$/);
  await expect(page.getByRole("heading", { name: /Terms of use/i })).toBeVisible();
  await expect(page.getByText(/not affiliated with, approved by, or endorsed by DUO/i)).toBeVisible();
  await expect(page.getByRole("heading", { name: /Полная версия на русском/i })).toBeVisible();
});
