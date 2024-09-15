import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { downloadFile } from "../utils/Common";

export class General extends BasePage{

    private get tbody(){
        return this.page.locator('//tbody/tr')
    }

    private get addressTab(){
        return this.page.locator('[id="Addresses"]');
    }

    private get addDocument(){
        return this.page.locator('button').getByText('Add Documentation');
    }

    private get documentType(){
        return this.page.locator('[id="mui-component-select-documentationTypeId"]');
    }

    private get downloadButton(){
        return this.page.locator('[data-testid="DownloadIcon"]');
    }

    private getDropdownOption(option:string){
        return this.page.locator(`//li/p[text()='${option}']`);
       }

       private get uploadStatus(){
return this.page.locator(`[class="filepond--file-status"] span`);
       }

       private get uploadButton(){
        return this.page.locator('//h6[text()="Upload"]');
       } 

       private getDocumentTypePopUp(popUpHeader:string){
        return this.page.locator(`//h3[text()='${popUpHeader}']`);
       }

    async clickOnAddressTab(){
      await this.addressTab.click();
    }

    async clickOnAddDocument(){
        await this.addDocument.click();
      }

      async uploadDocument(option:string, filePath:string){
        await this.documentType.click()
        await this.getDropdownOption(option).click();
        await this.uploadFile(filePath);
        await expect(this.uploadStatus.getByText('Upload complete')).toBeVisible();
        await this.uploadButton.click();
      }

      async clickOnUploadedFile(option:string){
        await this.tbody.getByText(option).click();
      }


      async downloadFile(fileName: string) {
        await downloadFile(this.page, () => this.downloadButton.click(), fileName);
      }

      async assertDocumentTypePopUp(popUpHeader:string){
        await expect(this.getDocumentTypePopUp(popUpHeader)).toHaveText(popUpHeader);
      }

}