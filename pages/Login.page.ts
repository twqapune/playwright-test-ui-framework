import {test} from '@playwright/test';
import { expect } from "@playwright/test";

export default class LoginPage{
 private page:page;
 private LoginButton:LoginButton;
 private password:password;
 private popup:popup;
 private navigateToAccount:navigateToAccount;
 private navigateToLogin:navigateToLogin;
 private logoutButton:logoutButton;
constructor(page){
        this.page =page;
        this.LoginButton= page.locator('#loginButton');
        this.email=page.locator('#email');
        this.password=page.locator('#password');
        this.popup=page.locator('[aria-label="Close Welcome Banner"]');
        this.navigateToAccount= page.locator('#navbarAccount');
        this.navigateToLogin=page.locator('#navbarLoginButton');
        this.logoutButton=page.locator('#navbarLogoutButton');
}

public async goto(url){
         await this.page.goto(url);
         await this.popup.click();
}
public async login_function(valid_email,valid_password){
       await this.navigateToAccount.click();
       await this.navigateToLogin.click();
       await this.email.fill(valid_email);
       await this.password.fill(valid_password);
       await this.LoginButton.click();
}
public async validating_Login(){
     await this.navigateToAccount.click();
     await this.page.locator("[aria-label='Go to user profile']").nth(1).click();
     await expect(this.page).toHaveURL('https://juice-shop.herokuapp.com/profile');
     await this.page.locator('span:has-text("Back")').click();
    }


public async invalidate_login(){
      console.log(await this.page.locator('text=Invalid email or password.').textContent());
      await expect(this.page.locator('text=Invalid email or password.')).toBeVisible();

}

public async logout(){
     await this.navigateToAccount.click();
     await this.logoutButton.click();
}

}
//module.export={LoginPage};