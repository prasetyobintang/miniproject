import { test, expect } from '@playwright/test';

test.describe('TC-01 - Positive Login', () => {
    test('User berhasil login menggunakan credential valid', async ({ page }) => {
        // Identify Credential:
        const username = 'standard_user';   // init credential
        const password = 'secret_sauce';   // init credential

        // Step 1: Navigate to the login page
        await page.goto('https://www.saucedemo.com/');

        // Step 2: Enter valid username and password
        await page.fill('#user-name', username);
        // Optional Screenshot after filling username
        await page.screenshot({ path: 'screenshots/TC-01-username-filled.png' });

        await page.fill('#password', password);
        // Optional Screenshot after filling password
        await page.screenshot({ path: 'screenshots/TC-01-password-filled.png' });

        // Step 3: Click the login button
        await page.click('#login-button');

        // Step 4: Verify successful login by checking the presence of the products page
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(page.locator('.title')).toHaveText('Products');

        // Step 5: Optional - Take a screenshot after login
        await page.screenshot({ path: 'screenshots/TC-01-login-success.png' });
    })
})
