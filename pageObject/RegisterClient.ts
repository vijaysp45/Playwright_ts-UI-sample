import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegisterClient extends BasePage{

 private get registerClientHeader(){
  return  this.page.locator(`//div[text()='Register Client']`);
 }

 private get firstName(){
   return this.page.locator("[name='firstName']");
 }

 private get middleName(){
   return this.page.locator("[name='middleName']");
 }

 private get lastName(){
   return this.page.locator("[name='lastName']");
 }

 private get suffix(){
   return this.page.locator("[name='nameSuffix']");
 }

 private get prefereedName(){
   return this.page.locator("[name='preferredName']");
 }

 private getSelectGenderAtBirth(gender:string){
   return this.page.locator(`//span[text()='${gender}']/../span/input[@name="birthGenderId"]`);
 }

 private getSelectCurrentGender(gender:string){
   return this.page.locator(`//span[text()='${gender}']/../span/input[@name="currentGenderIdentityId"]`);
 }

 private get genderPronouns(){
   return this.page.locator("[name='genderPronouns']");
 }

 private getSelectSocialSecurityNumber(data:string){
   return this.page.locator(`[name="hasSocialSecurityNumber"][value="${data}"]`);
 }

 private get primayAddressOne(){
   return this.page.locator("[name='primaryAddress.address1']");
 }

 private get primaryAddressTwo(){
   return this.page.locator("[name='primaryAddress.address2']");
 }

 private get city(){
   return this.page.locator("[name='primaryAddress.city']");
 }

 private get state(){
   return this.page.locator(`//label[text()='State']/../div/input`);
 }

 private get country(){
   return this.page.locator(`//label[text()='County']/../div/input`);
 }

 private get primaryPhoneType(){
   return this.page.locator(`[id="mui-component-select-primaryPhoneTypeId"]`);
 }

 private get zipCode(){
   return this.page.locator("[name='primaryAddress.zip']");
 }

 private get emailAddress(){
   return this.page.locator("[name='emailAddress']");
 }

 private get cellPhone(){
   return this.page.locator("[name='cellPhone']");
 }

 private get homePhone(){
   return this.page.locator("[name='homePhone']");
 }

 private get workPhone(){
   return this.page.locator("[name='workPhone']");
 }

 private get otherPhone(){
   return this.page.locator("[name='otherPhone']");
 }

 private get save(){
  return this.page.locator('//button/h6[text()="Save"]');
 }

 private get dateOfBirth(){
   return this.page.locator(`[id=":ri:"]`);
 }

 private getStateDropdownOption(state:string){
  return this.page.locator(`//li[text()='${state}']`);
 }

 private getDropdownOption(state:string){
  return this.page.locator(`//li/p[text()='${state}']`);
 }

 private get socialSecurityNumber(){
  return this.page.locator(`[name="socialSecurityNumber"]`);
 }

 private get reasonForNoSSn(){
  return this.page.locator('[id="mui-component-select-missingSsnReasonId"]')
 }

 async createNewClient(clientData:any){
  await this.firstName.fill(clientData.firstName);
  await this.middleName.fill(clientData.middleName);
  await this.lastName.fill(clientData.lastName);
  await this.suffix.fill(clientData.suffix);
  await this.prefereedName.fill(clientData.preferredName);
  await this.dateOfBirth.fill(clientData.dateOfBirth);
  await this.getSelectGenderAtBirth(clientData.gender).click();
  await this.getSelectCurrentGender(clientData.currentGender).click();
  await this.genderPronouns.fill(clientData.genderPronouns);
  await this.getSelectSocialSecurityNumber(clientData.SSNRequired).click();
  await this.reasonForNoSSn.click();
  await this.getDropdownOption(clientData.reasonForNoSSN).click();
  await this.primayAddressOne.fill(clientData.primaryAddressOne);
  await this.primaryAddressTwo.fill(clientData.primaryAddressTwo);
  await this.city.fill(clientData.city);
  await this.state.click();
  await this.getStateDropdownOption(clientData.state).click();
  await this.zipCode.fill(clientData.zipCode);
  await this.emailAddress.fill(clientData.emailAddress);
  await this.primaryPhoneType.click();
  await this.getDropdownOption(clientData.phoneType).click();
  await this.cellPhone.fill(clientData.cellPhone);
  await this.homePhone.fill(clientData.homePhone);
  await this.workPhone.fill(clientData.workPhone);
  await this.otherPhone.fill(clientData.otherPhone);
  await this.save.click();
 }

 async assertRegisterClientHeader(header:string){
    await expect(this.registerClientHeader).toContainText(header);
 }
}