// Import necessary modules and dependencies
import { test, expect } from '@playwright/test';

// Define the test suite for negative login case TC-06
// This test checks the behavior when both username and password fields are left empty
test.describe('User gagal login menggunakan username kosong dan password kosong', () => {
    // Define the individual test
    // Both username and password fields are empty
    test('TC-06 Login - Negative Login Empty Username and Password', async ({ page }) => {
        // Identify Credential: 
        const username = 'standard_user';   // init credential
        const password = 'secret_sauce';    // init credential

        // Step 1: Navigate to the login page
        await page.goto('https://www.saucedemo.com/');

        // Step 2: Empty username and empty password
        await page.fill('#user-name', '');

        // Optional Screenshot after filling username
        await page.screenshot({ path: 'screenshots/Login/TC-06-username-filled.png' });

        await page.fill('#password', '');
        // Optional Screenshot after filling password
        await page.screenshot({ path: 'screenshots/Login/TC-06-password-filled.png' });

        // Step 3: Click the login button
        await page.click('#login-button');

        /*
        Verify the condition if:
        a. Both username and password are empty, the error message should indicate that the username is required.
        b. If only the username is empty, the error message should indicate that the username is required.
        c. If only the password is empty, the error message should indicate that the password is required.
        */

        // Condition a: Both username and password are empty
        const errorMessage = page.locator('[data-test="error"]');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Epic sadface: Username is required');

        // Condition b and c
        // (These conditions are already covered in TC-04 and TC-05 respectively)

        // Take a screenshot of the error message
        await page.screenshot({ path: 'screenshots/Login/TC-06-login-failed-username-password-empty.png' });
    })
})