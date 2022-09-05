import {test} from '@playwright/test';
import { expect } from "@playwright/test";
import  LoginPage from '../pages/Login.page';
import ENV from '../data/Logindata/environment';
let page:Page;
let browser:Browser;
let context:BrowserContext;
let login:LoginPage;
test.beforeAll(async({browser}) =>{
   context = await browser.newContext();
   page = await context.newPage();
   login =  new LoginPage(page);
});

test('Happy Path for Login',async ()=>
{

  await login.goto(ENV.url);
  await expect(page).toHaveTitle(/OWASP Juice Shop/);
  console.log (await page.title());
  await login.login_function(ENV.email,ENV.password);
  await login.validating_Login();
  await login.logout();

  });

  test('Negative test for Login',async ()=>
  {

    await login.goto(ENV.url);
    await expect(page).toHaveTitle(/OWASP Juice Shop/);
    console.log (await page.title());
    await login.login_function(ENV.invalid_email,ENV.invalid_password);
    await login.invalidate_login();
   });
