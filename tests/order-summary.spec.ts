import test, { expect } from "@playwright/test";

test.describe("Order summary", function () {
  test("Should be able to register with new user", async ({ page }) => {
    await page.goto("https://juice-shop.herokuapp.com/#/");
    await page.locator('[aria-label="Close Welcome Banner"]').click();
    await page.locator('[aria-label="Show\\/hide account menu"]').click();
    await page
      .locator('button[role="menuitem"]:has-text("exit_to_app Login")')
      .click();
    await expect(page).toHaveURL("https://juice-shop.herokuapp.com/#/login");
    await page.locator("text=Not yet a customer?").click();
    await expect(page).toHaveURL("https://juice-shop.herokuapp.com/#/register");
    await page.locator('[aria-label="Email address field"]').click();
    await page
      .locator('[aria-label="Email address field"]')
      .fill("test8@abc.com");
    await page.locator('[aria-label="Field for the password"]').click();
    await page
      .locator('[aria-label="Field for the password"]')
      .fill("Abc1Abc*1");
    await page.locator('[aria-label="Field to confirm the password"]').click();
    await page
      .locator('[aria-label="Field to confirm the password"]')
      .fill("Abc1Abc*1");
    await page.locator(".mat-slide-toggle-bar").click();
    await page
      .locator('[aria-label="Selection list for the security question"] span')
      .click();
    await page.locator("text=Your eldest siblings middle name?").click();
    await page
      .locator('[placeholder="Answer to your security question"]')
      .click();
    await page
      .locator('[placeholder="Answer to your security question"]')
      .fill("John");
    await page
      .locator('[aria-label="Button to complete the registration"]')
      .click();
    await expect(page).toHaveURL("https://juice-shop.herokuapp.com/#/login");
  });
});
