import { expect, test } from "@playwright/test";

test("a learner can onboard, navigate, and choose the external writing check", async ({ page }) => {
  await page.goto("/onboarding");

  await expect(page.getByRole("heading", { name: /welkom/i })).toBeVisible();
  await page.getByRole("button", { name: "English" }).click();
  await page.getByRole("button", { name: "Начать / Beginnen" }).click();

  await expect(page).toHaveURL(/\/dashboard/);
  await expect(page.getByRole("heading", { name: "Overview" })).toBeVisible();

  await page.getByRole("link", { name: "Schrijven" }).click();
  await expect(page).toHaveURL(/\/write/);
  await expect(page.getByRole("heading", { name: "Schrijven" })).toBeVisible();

  const externalCheck = page.getByRole("checkbox");
  await expect(externalCheck).not.toBeChecked();
  await expect(page.getByText(/отправляется в публичный сервис LanguageTool/i)).toBeVisible();
  await externalCheck.check();
  await expect(externalCheck).toBeChecked();
});
