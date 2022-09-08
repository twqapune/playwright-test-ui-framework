import { test, expect } from '@playwright/test';  


test('Should Not Be Able To Register When Register Button Is Disabled', async ({page})=>
{
    await page.goto("http://localhost:3000/#/register");
    await page.locator('input#emailControl').type("xyz");
    await page.locator("input#passwordControl").type("xyz123");
    await page.locator("input#repeatPasswordControl").type("xyz123");
    await page.locator("input#securityAnswerControl").type("mumma");   
    const register =page.locator("button#registerButton");
    await expect(register).toBeDisabled();
});
