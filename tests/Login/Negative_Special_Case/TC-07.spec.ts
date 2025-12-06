import { test, expect } from '@playwright/test';

test.describe('TC-01 - Negative Special Case Login', () => {
    test('TC-07 - login dengan locked_out_user', async ({ page }) => {
        // Identify Credential:
        const username = 'locked_out_user';
        const password = 'secret_sauce';


        // Step 1: Navigate to the login page
        await page.goto('https://www.saucedemo.com/');

        // Step 2: Enter locked out username and valid password
        await page.fill('#user-name', username);
        // Optional Screenshot after filling username
        await page.screenshot({ path: 'screenshots/TC-07-username-filled.png' });

        await page.fill('#password', password);
        // Optional Screenshot after filling password
        await page.screenshot({ path: 'screenshots/TC-07-password-filled.png' });

        // Step 3: Click the login button
        await page.click('#login-button');

        // Step 4: Verify unsuccessful login by checking the error message
        const errorMessage = page.locator('[data-test="error"]');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
        // Take a screenshot of the error message
        await page.screenshot({ path: 'screenshots/TC-07-login-failed-locked-out.png' });
    });

})
