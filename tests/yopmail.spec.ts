import test from '@playwright/test';
import easyYOPmail from 'easy-yopmail';

test('Reset Password', async ({ page }) => {
    // const responsePromise = page.waitForResponse('api/environment/variables');
    // await page.goto(process.env.BASE_URL!);
    // await responsePromise;

    // await page.waitForLoadState('networkidle'); // <-  until there are no network connections for at least 500 ms.
    // await page.getByRole('button', { name: 'Reset password' }).waitFor();
    // // await page.waitForTimeout(2000);
    // await Promise.all([await page.getByRole('button', { name: 'Reset password' }).click({ force: true })]);
    // await page.locator('#resetEmail').fill('subbuqsg21+completeuser25@yopmail.com');
    // await page.locator('[type="submit"]').click();
    try {
        const jsonData = await easyYOPmail.getInbox('subbuqsg21+completeuser25@yopmail.com');

        if (jsonData && jsonData.inbox && jsonData.inbox.length > 0) {
            jsonData.inbox.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

            // Get the latest email
            const latestEmail = jsonData.inbox[0];

            console.log(latestEmail);
        } else {
            console.log('No emails found in the inbox.');
        }
    } catch (error) {
        console.error('An error occurred while fetching or processing the inbox data:', error);
    }
    // const jsonData = await easyYOPmail.getInbox('******+completeuser25@yopmail.com')!;
    // jsonData.inbox.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    // // Get the latest email
    // const latestEmail = jsonData.inbox[0];

    // console.log(latestEmail);
    // console.log(inbox);
    //  .then((inbox) => {
    //     console.log(inbox);
    //     //Output:
    //     //{
    //     //  settings: {},
    //     //  search: {},
    //     //  totalInbox: 271,
    //     //  totalPages: 19,
    //     //  mailFromPage: { page_1: 15 },
    //     //  totalGetMails: 15,
    //     //  inbox: [
    //     //       {
    //     //         id: 'e_ZwZjAGVlZGHlZQR1ZQNjAwZ5AQp4ZD==',
    //     //         from: 'Ola no-reply',
    //     //         subject: 'this is example message...',
    //     //         timestamp: '10:20'
    //     //       }
    //     //  ]
    //     //}
    // });
});
