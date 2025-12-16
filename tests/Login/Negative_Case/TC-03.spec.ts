import { test, expect } from '@playwright/test';

test.describe('User gagal login menggunakan username valid dan password salah', () => {
    test('TC-03 Login - Negative Login Invalid Password', async ({ page }) => {
        // Identify Credential:
        const username = 'standard_user';   // init credential
        const password = 'secret_sauce';    // init credential

        // Step 1: Navigate to the login page
        await page.goto('https://www.saucedemo.com/');
        // Step 2: Enter valid username and invalid password
        await page.fill('#user-name', username);
        // Optional Screenshot after filling username
        await page.screenshot({ path: 'screenshots/Login/TC-03-username-filled.png' });

        await page.fill('#password', "password");
        // Optional Screenshot after filling password
        await page.screenshot({ path: 'screenshots/Login/TC-03-password-filled.png' });
        // Step 3: Click the login button
        await page.click('#login-button');
        // Step 4: Verify unsuccessful login by checking the error message
        const errorMessage = page.locator('[data-test="error"]');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
        // Take a screenshot of the error message
        await page.screenshot({ path: 'screenshots/Login/TC-03-login-failed-password.png' });
    })
})
