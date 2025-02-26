import { test } from "@playwright/test";
import { expect } from "chai";

test.describe("Test suite for workspace feature", () => {
  test("User tries to create Work Space", async ({ page }) => {
    test.setTimeout(60000);

    await page.goto(
      "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
    );

    await page.getByText("Create new space").click();
    const createSpaceBtn = await page.getByRole("button", {
      name: "Create space",
    });
    expect(await createSpaceBtn.isVisible()).to.be.true;
  });
});
