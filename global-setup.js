// global-setup.js
import { chromium } from "@playwright/test";

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.capcut.com/login");

  // Perform login steps:
  await page
    .getByRole("textbox", { name: "Enter email" })
    .fill("orvelatester@gmail.com");
  await page.getByRole("button", { name: "Continue" }).click();
  await page
    .getByRole("textbox", { name: "Enter password" })
    .fill("orvela123!!!");
  await page.getByRole("button", { name: "Sign in" }).click();

  // Wait until navigation confirms login
  await page.waitForURL(
    "https://www.capcut.com/my-edit?enter_from=login&start_tab=video"
  );

  // Save the authenticated state
  await context.storageState({ path: "storageState.json" });
  await browser.close();
}

export default globalSetup;
