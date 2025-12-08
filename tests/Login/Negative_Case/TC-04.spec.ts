import { test, expect } from '@playwright/test';

test.describe('TC-04 - Negative Login', () => {
    test('User gagal login menggunakan username kosong dan password valid', async ({ page }) => {
        // Identify Credential:
        const username = 'standard_user';   // init credential
        const password = 'secret_sauce';    // init credential

        // Step 1: Navigate to the login page
        await page.goto('https://www.saucedemo.com/');

        // Step 2: empty username and valid password
        await page.fill('#user-name', '');
        // Optional Screenshot after filling username
        await page.screenshot({ path: 'screenshots/TC-04-username-filled.png' });

        await page.fill('#password', password);
        // Optional Screenshot after filling password
        await page.screenshot({ path: 'screenshots/TC-04-password-filled.png' });
        // Step 3: Click the login button
        await page.click('#login-button');

        // Step 4: Verify unsuccessful login by checking the error message
        const errorMessage = page.locator('[data-test="error"]');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Epic sadface: Username is required');
        // Take a screenshot of the error message
        await page.screenshot({ path: 'screenshots/TC-04-login-failed-username-empty.png' });
    })
})
