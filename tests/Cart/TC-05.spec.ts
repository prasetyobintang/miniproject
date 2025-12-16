// Import necessary modules and dependencies
import { test, expect } from '@playwright/test';

// Define the test suite for Cart functionality
test.describe('User kembali ke halaman produk dengan menekan tombol "Continue Shopping" dari halaman Cart', () => {
    // Define the individual test case
    test('TC-05 Cart - Continue Shopping to Products Page', async ({ page }) => {
        // Identify Credential:
        const username = 'standard_user';   // init credential
        const password = 'secret_sauce';   // init credential

        // Step 1: Navigate to the login page
        await page.goto('https://www.saucedemo.com/');

        // Step 2: Enter valid username and password
        await page.fill('#user-name', username);
        // Optional Screenshot after filling username
        await page.screenshot({ path: 'screenshots/Cart/TC-05-username-filled.png' });
        await page.fill('#password', password);
        // Optional Screenshot after filling password
        await page.screenshot({ path: 'screenshots/Cart/TC-05-password-filled.png' });

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
        const cartItem = page.locator('.cart_item');
        await expect(cartItem).toHaveCount(1);
        await expect(cartItem.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

        // Step 8: Click the "Continue Shopping" button to return to the products page
        await page.click('button[data-test="continue-shopping"]');

        // Step 9: Verify that the user is navigated back to the products page and Cart badge is still present
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(page.locator('.title')).toHaveText('Products');
        const cartBadge = page.locator('.shopping_cart_badge');
        await expect(cartBadge).toHaveText('1');
    })

})
