import { test } from "@playwright/test";
import { expect } from "chai";

test.skip(true, "Skipping signup tests for now");

test.use({ storageState: "emptyStorageState.json" });

test.describe("Test suite for login feature", () => {
  test("User logs-in with valid credentials", async ({ page }) => {
    test.setTimeout(60000);
    await page.goto("https://www.capcut.com/login");
    await page.getByRole("textbox", { name: "Enter email" }).click();
    await page
      .getByRole("textbox", { name: "Enter email" })
      .fill("orvelatester@gmail.com");
    await page.getByRole("button", { name: "Continue" }).click();
    await page.getByRole("textbox", { name: "Enter password" }).click();
    await page
      .getByRole("textbox", { name: "Enter password" })
      .fill("orvela123!!!");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.waitForURL(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );
    const userHomePageUrl = await page.url();
    expect(userHomePageUrl).to.include("start_tab=video");
  });
});
