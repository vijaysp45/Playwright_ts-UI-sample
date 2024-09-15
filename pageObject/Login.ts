import { Page, expect } from '@playwright/test';
import { BasePage } from "./BasePage";

export class Login extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private get loginButton() {
        return this.page.locator('//button[text()="Log In"]');
    }

    private get resetPasswordButton() {
        return this.page.locator(`//button[text()='Reset password']/../../..`);
    }

    private get usernameInput() {
        return this.page.locator('[id="email"]');
    }

    private get passwordInput() {
        return this.page.locator('[id="password"]');
    }

    async open(){
        await this.page.goto('https://orangehrm.com/');
    }

    async login(username: string, password: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await expect(this.page).toHaveURL('/');
    }

    async clickOnReset(){
        await this.resetPasswordButton.click({delay:20});
    }

    async assertLoginPageFields(){
        expect(this.usernameInput).toBeVisible();
        expect(this.passwordInput).toBeVisible();
        expect(this.loginButton).toBeVisible();
        expect(this.resetPasswordButton).toBeVisible();
    }
}