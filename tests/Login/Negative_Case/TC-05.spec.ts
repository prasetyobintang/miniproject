// Import necessary modules and dependencies
import { test, expect } from '@playwright/test';

// Define the test case for negative scenario
test.describe('User gagal login menggunakan username valid dan password kosong', () => {
    // Define the individual test
    // Empty password field with valid username
    test('TC-05 Login - Negative Login Empty Password', async ({ page }) => {
        // Identify Credential: 
        const username = 'standard_user';   // init credential
        const password = 'secret_sauce';    // init credential

        // Step 1: Navigate to the login page
        await page.goto('https://www.saucedemo.com/');

        // Step 2: valid username and empty password
        await page.fill('#user-name', username);
        // Optional Screenshot after filling username
        await page.screenshot({ path: 'screenshots/Login/TC-05-username-filled.png' });

        await page.fill('#password', '');
        // Optional Screenshot after filling password
        await page.screenshot({ path: 'screenshots/Login/TC-05-password-filled.png' });
        // Step 3: Click the login button
        await page.click('#login-button');
        // Step 4: Verify unsuccessful login by checking the error message
        const errorMessage = page.locator('[data-test="error"]');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Epic sadface: Password is required');
        // Take a screenshot of the error message
        await page.screenshot({ path: 'screenshots/Login/TC-05-login-failed-password-empty.png' });
    })
})
