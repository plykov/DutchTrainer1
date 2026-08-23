import { expect, test } from "@playwright/test";
import { PRACTICE_ITEMS } from "../lib/content/items";
import { ShortWriteItem } from "../lib/types";

const WRITE_ITEMS = PRACTICE_ITEMS.filter((item) => item.taskType === "short_write") as ShortWriteItem[];

async function activeWriteItem(page: import("@playwright/test").Page): Promise<ShortWriteItem> {
  const prompt = await page.getByTestId("writing-task-prompt").innerText();
  const item = WRITE_ITEMS.find((candidate) => candidate.taskPrompt === prompt);
  expect(item, `No authored writing item matched prompt: ${prompt}`).toBeDefined();
  return item!;
}

test("a learner can onboard, navigate, and choose the external writing check", async ({ page }) => {
  await page.goto("/onboarding");

  await expect(page.getByRole("heading", { name: /welkom/i })).toBeVisible();
  const english = page.getByRole("button", { name: "English" });
  await english.click();
  await expect(english).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: "Начать / Beginnen" }).click();

  await expect(page).toHaveURL(/\/dashboard/);
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
  await page.getByRole("link", { name: "Schrijven" }).click();
  await expect(page).toHaveURL(/\/write/);
  await expect(page.getByRole("heading", { name: "Schrijven" })).toBeVisible();

  const externalCheck = page.getByRole("checkbox");
  await expect(externalCheck).not.toBeChecked();
  await expect(page.getByText(/отправляется в публичный сервис LanguageTool/i)).toBeVisible();

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
  await page.getByRole("button", { name: "Проверить" }).click();
  await expect(page.getByText(/явных ошибок.*не найдено/i)).toBeVisible();
  expect(languageToolRequests).toBe(0);

  await page.getByRole("link", { name: "Overzicht" }).click();
  await expect(page).toHaveURL(/\/dashboard/);
  await page.evaluate(() => {
    Math.random = () => 0;
  });
  await page.getByRole("link", { name: "Schrijven" }).click();
  const optedInItem = await activeWriteItem(page);
  const optedInCheck = page.getByRole("checkbox");
  await expect(optedInCheck).not.toBeChecked();
  await optedInCheck.check();
  await expect(optedInCheck).toBeChecked();
  await page.getByRole("textbox").fill(optedInItem.modelAnswer);
  await page.getByRole("button", { name: "Проверить" }).click();
  await expect(page.getByText(/явных ошибок.*не найдено/i)).toBeVisible();

  expect(languageToolRequests).toBe(1);
  expect(submittedText).toBe(optedInItem.modelAnswer);
});
