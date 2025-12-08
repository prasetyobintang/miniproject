// Import necessary modules and dependencies
import { test, expect } from '@playwright/test';

// Define the test suite for negative login case TC-06
// This test checks the behavior when both username and password fields are left empty
test.describe('TC-06 - Negative Login', () => {
    // Define the individual test
    // Both username and password fields are empty
    test('User gagal login menggunakan username kosong dan password kosong', async ({ page }) => {
        // Identify Credential: 
        const username = 'standard_user';   // init credential
        const password = 'secret_sauce';    // init credential

        // Step 1: Navigate to the login page
        await page.goto('https://www.saucedemo.com/');

        // Step 2: Empty username and empty password
        await page.fill('#user-name', '');

        // Optional Screenshot after filling username
        await page.screenshot({ path: 'screenshots/TC-06-username-filled.png' });

        await page.fill('#password', '');
        // Optional Screenshot after filling password
        await page.screenshot({ path: 'screenshots/TC-06-password-filled.png' });


        // Step 3: Click the login button
        await page.click('#login-button');

        // Step 4: Validate if username empty will appear message : 'Epic sadface: Username is required'
        const errorMessage = page.locator('[data-test="error"]');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Epic sadface: Username is required');
        // Take a screenshot of the error message
        await page.screenshot({ path: 'screenshots/TC-06-login-failed-username-password-empty.png' });

        // Step 5: Validate if password empty will appear message : 'Epic sadface: Password is required'
        // Clear the username field to test password empty scenario
        await page.fill('#user-name', username);
        await page.fill('#password', '');
        await page.click('#login-button');
        // Take a screenshot of the error message
        await page.screenshot({ path: 'screenshots/TC-06-login-failed-password-empty.png' });
    })
})