import { test, expect } from "@playwright/test";

test.describe("should not be able to register with existing user", () => {
  const userDetails = [
    {
      name: "firstUser",
      email: "test@gmail.com",
      password: "Hello@123",
    },
    {
      name: "secondUser",
      email: "test@gmail.com",
      password: "Hello@123",
      exist: true,
    },
  ].forEach((userDetails) => {
    test(`should not able to register with existing user${userDetails.name}`, async ({
      page,
    }) => {
      await page.goto("http://localhost:3000/#/login");
      await page.locator('[aria-label="Close Welcome Banner"]').click();
      await page.locator('[aria-label="Show\\/hide account menu"]').click();
      await page
        .locator('button[role="menuitem"]:has-text("exit_to_app Login")')
        .click();
      await expect(page).toHaveURL("http://localhost:3000/#/login");
      await page.locator("text=Not yet a customer?").click();
      await expect(page).toHaveURL("http://localhost:3000/#/register");
      await page.locator('[aria-label="Email address field"]').click;
      await page
        .locator('[aria-label="Email address field"]')
        .fill(userDetails.email);
      await page.locator('[aria-label="Field for the password"]').click();
      await page
        .locator('[aria-label="Field for the password"]')
        .fill(userDetails.password);
      await page
        .locator('[aria-label="Field to confirm the password"]')
        .click();
      await page
        .locator('[aria-label="Field to confirm the password"]')
        .fill("Hello@123");
      await page
        .locator('[aria-label="Selection list for the security question"] div')
        .nth(3)
        .click();
      await page.locator("text=Your eldest siblings middle name?").click();
      await page
        .locator('[placeholder="Answer to your security question"]')
        .fill("shravan");
      await page
        .locator('[aria-label="Button to complete the registration"]')
        .click();
      if (userDetails.exist == true) {
        await page
          .locator('[aria-label="Button to complete the registration"]')
          .click();
        await expect(page.locator(".error")).toHaveText("Email must be unique");
      }
    });
  });
  test("Should Not Be Able To Register When Register Button Is Disabled", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/#/register");
    await page.locator("input#emailControl").type("xyz");
    await page.locator("input#passwordControl").type("xyz123");
    await page.locator("input#repeatPasswordControl").type("xyz123");
    await page.locator("input#securityAnswerControl").type("mumma");
    const register = page.locator("button#registerButton");
    await expect(register).toBeDisabled();
  });
});
