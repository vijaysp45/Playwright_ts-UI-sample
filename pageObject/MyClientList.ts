import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MyClientList extends BasePage{

  constructor(page: Page){
    super(page)
  }

    private get ClientListHeader(){
        return this.page.locator(`//div[text()='Client List']`);
    }

    private get tbody(){
        return this.page.locator('//tbody/tr')
    }

    private get registerClient(){
        return this.page.locator(`//button[text()='Register Client']`);
    }

    private getClientNameHeader(clientName:string){
        return this.page.locator(`//div[text()='${clientName}']`);
      }

      private get theCoordinatingCenterClients(){
return this.page.locator('[id="The Coordinating Center  Clients"]');
      }

      private get searchField(){
        return this.page.locator('[aria-label="Search"]');
      }

      async clickOnClient(clientName:string){
        await this.page.locator(`div`).getByText(clientName).click();
      }

      async searchClient(clientName:string){
        await this.searchField.click();
        await this.page.keyboard.type(clientName, {delay:20});
      }

    async clickOnRegisterClient(){
      await this.registerClient.click();
    }

    async clickOnTheCoordinatingCenterClients(){
        await this.theCoordinatingCenterClients.click();
    }

    async assertClientListHeader(header:string){
        await expect(this.ClientListHeader).toContainText(header, {timeout:20000});
    }

    async assertClientName(clientName:string){
        await expect(this.getClientNameHeader(clientName)).toHaveText(clientName);
    }

    async assertTheCoordinatingCenterClientsTab(header:string){
        await expect(this.theCoordinatingCenterClients).toHaveText(header);
        await expect(this.theCoordinatingCenterClients).toHaveAttribute('aria-selected', 'true');
       
    }

    async assertClientDetails(clientDetails:any){
        await expect(this.tbody).toHaveCount(1);
       if(clientDetails.firstName){
        await expect(this.tbody).toContainText(clientDetails.firstName);
       }
      if(clientDetails.lastName){
        await expect(this.tbody).toContainText(clientDetails.lastName);
      }
      if(clientDetails.dateOfBirth){
        await expect(this.tbody).toContainText(clientDetails.dateOfBirth);
      }
    }
}