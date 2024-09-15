import test from "@playwright/test";
import { Login } from "../pageObject/Login";
import { NavigateToItem } from "../pageObject/NavigateToItem";
import { MyClientList } from "../pageObject/MyClientList";
import { RegisterClient } from "../pageObject/RegisterClient";
import { ClientInformation } from "../pageObject/ClientInformation";
import { General } from "../pageObject/General";
import { HEADERS } from "../utils/constant";
import { USERDATA } from "../utils/initializeUserData";
import { assertFileExist, compareDownloadedFileToLocal } from "../utils/Common";

test.describe("Register new client", ()=> {

    let clientData:any;

    test.only("Verify that user can register new client.", async({page}) => {
        const login = new Login(page);
        const navigateToItem  = new NavigateToItem(page);
        const myClientList = new MyClientList(page);
        const registerClient = new RegisterClient(page);
        const clientInformation = new ClientInformation(page);

         clientData = {
            firstName: 'Auto'+Date.now(),
            lastName: 'Client'+Date.now(),
            middleName: 'middle',
            suffix: 'Sr.',
            preferredName: 'Auto middle client'+Date.now(),
            dateOfBirth: ' 01/19/1979',
            gender: 'Male',
        currentGender: 'Male',
        genderPronouns: 'Mr',
        SSNRequired: 'false',
        reasonForNoSSN: 'Client applied but did not yet receieve SSN',
        primaryAddressOne: 'WTC main road',
        primaryAddressTwo: '2nd cross',
        city: 'New York',
        state: 'DE',
        zipCode: '2025',
        country: 'New Castle County',
        emailAddress: 'trent@gamil.com',
        phoneType: 'Cell Phone',
        cellPhone: '8587874874 ',
        homePhone: '8569748748',
        workPhone: '8154788748',
        otherPhone: '9548745487'
        };

       await login.open();
       await login.assertLoginPageFields();
       await login.login(USERDATA.SYSTEM_ADMIN.username, USERDATA.SYSTEM_ADMIN.password);
       await navigateToItem.assertAllNavBar();
       await navigateToItem.clickOnClientList();
       await myClientList.assertClientListHeader(HEADERS.CLIENT_LIST);
       await myClientList.clickOnRegisterClient();
       await registerClient.assertRegisterClientHeader(HEADERS.REGISTER_CLIENT);
       await registerClient.createNewClient(clientData);
       await myClientList.assertClientName(clientData.firstName+' '+clientData.lastName);
       await clientInformation.assertClientInfromationHeader(HEADERS.CLIENT_INFORMATION);
       await navigateToItem.clickOnClientList();
       await myClientList.assertClientListHeader(HEADERS.CLIENT_LIST);
       await myClientList.clickOnTheCoordinatingCenterClients();
       await myClientList.assertTheCoordinatingCenterClientsTab(HEADERS.THE_COORDINATING_CENTER_CLIENTS);
       await myClientList.searchClient(clientData.lastName);
       await myClientList.assertClientDetails(clientData);
    })

    test.only('Verify that document can be uploaded in Client Information>>Address Tab', async({page}) => {
        const login = new Login(page);
        const general = new General(page);
        const navigateToItem = new NavigateToItem(page);
        const myClientList = new MyClientList(page);
        const clientInformation = new ClientInformation(page);

        const filePath = `downloads/auto${Date.now()}.csv`;

       await login.open();
       await login.login(USERDATA.SYSTEM_ADMIN.username, USERDATA.SYSTEM_ADMIN.password);
       await navigateToItem.clickOnClientList();
       await myClientList.assertClientListHeader(HEADERS.CLIENT_LIST);
       await myClientList.clickOnTheCoordinatingCenterClients();
       await myClientList.searchClient(clientData.lastName);
       await myClientList.clickOnClient(clientData.lastName);
       await clientInformation.clickOnClientInformation();
       await general.clickOnAddressTab();
       await general.clickOnAddDocument();
       await general.uploadDocument('Utility Bill', './data/uploadFiles/addressFile.xlsx');
       await general.clickOnUploadedFile('Utility Bill');
       await general.assertDocumentTypePopUp('Utility Bill');
       await general.downloadFile(filePath);
     await assertFileExist(filePath);
       
    })

})