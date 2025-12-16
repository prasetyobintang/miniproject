// Import necessary modules and dependencies
import { test, expect } from '@playwright/test';

// Define the test suite for Cart functionality
test.describe('User berhasil menghapus dari button label "Remove"', () => {
    // Define the individual test case
    test('TC-02 Cart - Remove from Label Product Page', async ({ page }) => {
        // Identify Credential:
        const username = 'standard_user';   // init credential
        const password = 'secret_sauce';   // init credential

        // Step 1: Navigate to the login page
        await page.goto('https://www.saucedemo.com/');
        // Step 2: Enter valid username and password
        await page.fill('#user-name', username);
        // Optional Screenshot after filling username
        await page.screenshot({ path: 'screenshots/Cart/TC-02-username-filled.png' });

        await page.fill('#password', password);
        // Optional Screenshot after filling password
        await page.screenshot({ path: 'screenshots/Cart/TC-02-password-filled.png' });

        // Step 3: Click the login button
        await page.click('#login-button');

        // Step 4: Verify successful login by checking the presence of the products page
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(page.locator('.title')).toHaveText('Products');

        // Step 5: Add an item to the cart
        await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');

        // Step 6: Remove the item from the cart by clicking the "Remove" button
        await page.click('button[data-test="remove-sauce-labs-backpack"]');

        // Step 7: Verify the item is removed from the cart by checking the absence of the cart badge and label change back to "Add to cart"
        const cartBadge = page.locator('.shopping_cart_badge');
        await expect(cartBadge).toHaveCount(0);
        const addToCartButton = page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]');
        await expect(addToCartButton).toHaveText('Add to cart');
    })
})
