import { Browser, expect, Page } from '@playwright/test';
import fs from 'fs';

export const compareDownloadedFileToLocal = (localFileName: string, downloadedFileName: string, localFilePath = 'data/uploadFiles/') => {
    const localFileContent = fs.readFileSync(`${localFilePath}${localFileName}`);
    const downloadedFileContent = fs.readFileSync(`downloads/${downloadedFileName}`);

    expect(localFileContent).toEqual(downloadedFileContent);
};

export const downloadFile = async (page: Page, buttonClickCallback: () => Promise<void>, filePath: string) => {
    const downloadPromise = page.waitForEvent('download');
    await buttonClickCallback();
    const download = await downloadPromise;
    await download.path();
    await download.saveAs(`${filePath}`);
};

export const assertFileExist = async(filePath:string)=>{
     expect(fs.existsSync(filePath)).toBe(true);
}