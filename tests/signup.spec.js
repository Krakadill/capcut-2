import { test } from "@playwright/test";
import { expect } from "chai";

test.skip(false, "Skipping signup tests for now");

test.use({ storageState: "emptyStorageState.json" });

test.describe("Test suite for sign-up functionality", () => {
  test("User should get error message for entering invalid Email", async ({
    page,
  }) => {
    await page.goto("https://www.capcut.com/signup");
    await page.getByRole("textbox", { name: "Enter email" }).click();
    await page
      .getByRole("textbox", { name: "Enter email" })
      .fill("Wrong credential");
    await page.getByRole("button", { name: "Continue" }).click();
    const errMsg = await page.getByText("Enter a valid email address");
    expect(await errMsg.isVisible()).to.be.true;
  });
});
