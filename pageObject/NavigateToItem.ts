import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class NavigateToItem extends BasePage{

    private get dashboard(){
        return this.page.locator('[href="#/dashboard"]');
    }

    private get clientList(){
        return this.page.locator('[href="#/clients/list/myclients"]');
    }

    private get applications(){
        return this.page.locator('[href="#/applications/list/allapplications"]');
    }

    private get agencyManagement(){
        return this.page.locator('[href="#/agencies/list"]');
    }

    private get permissionManagement(){
        return this.page.locator('[href="#/templates/list"]');
    }

    private get userManagemnet(){
        return this.page.locator('[href="#/users/list"]');
    }

    private get importsAndExports(){
        return this.page.locator('[href="#/imports/list/imports"]');
    }

    private get formManagemnet(){
        return this.page.locator('[href="#/forms/list"]');
    }

    private get programManagement(){
        return this.page.locator('[href="#/programs/list"]');
    }

    async clickOnClientList(){
      await this.clientList.click({noWaitAfter:true});
    }

    async assertAllNavBar(){
        await this.page.waitForSelector(`//p[text()='The Coordinating Center ']`)
        await expect(this.dashboard).toBeVisible();
        await expect(this.clientList).toBeVisible();
        await expect(this.applications).toBeVisible();
        await expect(this.agencyManagement).toBeVisible();
        await expect(this.permissionManagement).toBeVisible();
        await expect(this.userManagemnet).toBeVisible();
        await expect(this.importsAndExports).toBeVisible();
        await expect(this.formManagemnet).toBeVisible();
        await expect(this.programManagement).toBeVisible();
    }
}