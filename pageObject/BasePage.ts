import { Page } from '@playwright/test';
import path from 'path';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    protected get backgroundIframe() {
        return this.page.frameLocator('#DataIF').first();
    }

    protected get body() {
        return this.page.locator('body');
    }

    async uploadFile(filePath:string){
        await this.page
        .locator('[name="files"]')
        .setInputFiles(filePath);
    }
}
