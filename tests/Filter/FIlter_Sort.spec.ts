// Import necessary modules
import { expect, test } from '@playwright/test';

// Describe the test suite for Filter and Sort functionality
test.describe('Filter and Sort', () => {
    test.beforeEach(async ({ page }) => {
        // Navigate to the application before each test
        await page.goto('http://www.saucedemo.com/');

        // Init credentials and log in
        const username = 'standard_user';
        const password = 'secret_sauce';

        // Log in with standard user credentials
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        // Verify successful login by checking the URL
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        // Take Screenshot after login
        await page.screenshot({ path: 'screenshots/Filter/Filter_Sort_beforeEach.png' });
    });

    // Test case for filtering products by "Price (low to high)"
    test('TC-01 Sort: Price (low to high)', async ({ page }) => {
        // Select the filter option "Price (low to high)"
        await page.selectOption('.product_sort_container', 'lohi');
        // Get the prices of the displayed products
        const prices = await page.$$eval('.inventory_item_price', items =>
            items.map(item => parseFloat(item.textContent.replace('$', '')))
        );
        // Check if the prices are sorted in ascending order
        for (let i = 0; i < prices.length - 1; i++) {
            expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
        }
        // Verify that the first product price is $7.99
        expect(prices[0]).toBe(7.99);
        // Take Screenshot after sorting
        await page.screenshot({ path: 'screenshots/Filter/Filter_Sort_TC-01_Price_low_to_high.png' });
    });

    // Test case for filtering products by "Price (high to low)"
    test('TC-02 Sort: Price (high to low)', async ({ page }) => {
        // Select the filter option "Price (high to low)"
        await page.selectOption('.product_sort_container', 'hilo');
        // Get the prices of the displayed products
        const prices = await page.$$eval('.inventory_item_price', items =>
            items.map(item => parseFloat(item.textContent.replace('$', '')))
        );
        // Check if the prices are sorted in descending order
        for (let i = 0; i < prices.length - 1; i++) {
            expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
        }
        // Verify that the first product price is $49.99
        expect(prices[0]).toBe(49.99);
        // Take Screenshot after sorting
        await page.screenshot({ path: 'screenshots/Filter/Filter_Sort_TC-02_Price_high_to_low.png' });
    });

    // Test case for filtering products by "Name (A to Z)"
    test('TC-03 Sort: Name (A to Z)', async ({ page }) => {
        // Select the filter option "Name (A to Z)" 
        await page.selectOption('.product_sort_container', 'az');
        // Get the names of the displayed products
        const names = await page.$$eval('.inventory_item_name', items =>
            items.map(item => item.textContent)
        );
        // Check if the names are sorted in ascending alphabetical order
        for (let i = 0; i < names.length - 1; i++) {
            expect(names[i].localeCompare(names[i + 1])).toBeLessThanOrEqual(0);
        }
        // Verify that the first product name is "Sauce Labs Backpack"
        expect(names[0]).toBe('Sauce Labs Backpack');
        // Take Screenshot after sorting
        await page.screenshot({ path: 'screenshots/Filter/Filter_Sort_TC-03_Name_A_to_Z.png' });
    });

    // Test case for filtering products by "Name (Z to A)"
    test('TC-04 Sort: Name (Z to A)', async ({ page }) => {
        // Select the filter option "Name (Z to A)"
        await page.selectOption('.product_sort_container', 'za');
        // Get the names of the displayed products
        const names = await page.$$eval('.inventory_item_name', items =>
            items.map(item => item.textContent)
        );
        // Check if the names are sorted in descending alphabetical order
        for (let i = 0; i < names.length - 1; i++) {
            expect(names[i].localeCompare(names[i + 1])).toBeGreaterThanOrEqual(0);
        }
        // Verify that the first product name is "Test.allTheThings() T-Shirt (Red)"
        expect(names[0]).toBe('Test.allTheThings() T-Shirt (Red)');
        // Take Screenshot after sorting
        await page.screenshot({ path: 'screenshots/Filter/Filter_Sort_TC-04_Name_Z_to_A.png' });
    });

    test('TC-05 Sort: Sort from Price `hilo` back to Name `az`', async ({ page }) => {
        // Select the filter option "Price (high to low)"
        await page.selectOption('.product_sort_container', 'hilo');
        // Get the prices of the displayed products
        const prices = await page.$$eval('.inventory_item_price', items =>
            items.map(item => parseFloat(item.textContent.replace('$', '')))
        );
        // Check if the prices are sorted in descending order
        for (let i = 0; i < prices.length - 1; i++) {
            expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
        }
        // Verify that the first product price is $49.99
        expect(prices[0]).toBe(49.99);

        // Select the filter option "Name (A to Z)"
        await page.selectOption('.product_sort_container', 'az');
        // Get the names of the displayed products
        const names = await page.$$eval('.inventory_item_name', items =>
            items.map(item => item.textContent)
        );
        // Check if the names are sorted in ascending alphabetical order
        for (let i = 0; i < names.length - 1; i++) {
            expect(names[i].localeCompare(names[i + 1])).toBeLessThanOrEqual(0);
        }
        // Verify that the first product name is "Sauce Labs Backpack"
        expect(names[0]).toBe('Sauce Labs Backpack');
    });

    test('TC-06 Sort: active value on dropdown', async ({ page }) => {
        // Get the active value of the dropdown
        const activeValue = await page.$eval('.product_sort_container', el => (el as HTMLSelectElement).value);
        // Verify that the active value is "az"
        expect(activeValue).toBe('az');
        // Take Screenshot of the active value
        await page.screenshot({ path: 'screenshots/Filter/Filter_Sort_TC-06_active_value_dropdown_initial.png' });
        // Change active value to "lohi"
        await page.selectOption('.product_sort_container', 'lohi');
        // Get the new active value of the dropdown
        const newActiveValue = await page.$eval('.product_sort_container', el => (el as HTMLSelectElement).value);
        // Verify that the new active value is "lohi"
        expect(newActiveValue).toBe('lohi');
        // Take Screenshot of the active value
        await page.screenshot({ path: 'screenshots/Filter/Filter_Sort_TC-06_active_value_dropdown.png' });
    });
});