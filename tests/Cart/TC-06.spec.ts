// Import necessary modules and dependencies
import { test, expect } from '@playwright/test';

// Define the test suite for Cart functionality
test.describe('User kembali ke halaman Product setelah menghapus item dari halaman Cart', () => {
    // Define the individual test case
    test('TC-06 Cart - Remove Item and Return to Products Page', async ({ page }) => {
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

        // Step 6: Click on the cart icon to view the cart
        await page.click('.shopping_cart_link');

        // Step 7: Verify that the cart page is displayed and contains the added item
        await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
        await expect(page.locator('.title')).toHaveText('Your Cart');

        // Step 8: Remove item from cart by clicking "Remove" button
        await page.click('button[data-test="remove-sauce-labs-backpack"]');

        // Step 9: Verify that item is removed from cart and user is navigated back to products page
        const cartBadge = page.locator('.shopping_cart_badge');
        await expect(cartBadge).toHaveCount(0);

        // Step 10: Click Cart icon to check item removal
        await page.click('.shopping_cart_link');
        await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
        const cartItem = page.locator('.cart_item');
        await expect(cartItem).toHaveCount(0);
    })
})