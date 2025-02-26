import { test } from "@playwright/test";
import { expect } from "chai";

test.describe("Test suite for templates feature", () => {
  test("User navigates to search-bar for templates", async ({ page }) => {
    test.setTimeout(60000);

    await page.goto(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );
    await page.getByText("Templates", { exact: true }).click();
    const templateSearchBar = await page.locator(".lv-template__search__bg");
    expect(await templateSearchBar.isVisible()).to.be.true;
  });
});
