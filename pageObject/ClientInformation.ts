import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ClientInformation extends BasePage{

    private get clientInformationHeader(){
return this.page.locator(`[id="Client Information"]`);
    }

    async clickOnClientInformation(){
      await this.clientInformationHeader.click();
    }

    async assertClientInfromationHeader(header:string){
        await expect(this.clientInformationHeader).toHaveText(header, {timeout:20000});
    }
}