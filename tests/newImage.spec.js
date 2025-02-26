import { test } from "@playwright/test";
import { expect } from "chai";

test.describe("Test suite for Image editing feature", () => {
  test("User tries to create new image", async ({ page }) => {
    test.setTimeout(60000);
    await page.goto(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );

    await page.locator("#start-page-tab-image").click();
    const page2Promise = page.waitForEvent("popup");
    await page.locator(".image-LwB0PG > img").first().click();
    const page2 = await page2Promise;
    await page2.getByRole("dialog").getByText("Create").click();
    const redirectUrl = await page2.url();
    expect(redirectUrl).to.include("editor-graphic");
  });
});
