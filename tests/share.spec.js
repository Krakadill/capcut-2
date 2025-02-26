import { test } from "@playwright/test";
import { expect } from "chai";

test.describe("Test suite for file and media sharing feature", () => {
  test("User clicks on share button to choose share option", async ({
    page,
  }) => {
    test.setTimeout(60000);
    await page.goto(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );
    await page.getByText("Share and schedule").click();
    await page.getByRole("button", { name: "Share files" }).click();
    await page.getByRole("menuitem", { name: "From space" }).click();
    const shareWindow = await page.getByText("Share", { exact: true });
    expect(await shareWindow.isVisible()).to.be.true;
  });
});
