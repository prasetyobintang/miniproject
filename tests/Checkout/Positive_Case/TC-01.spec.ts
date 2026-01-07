// import modules
import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

// describe the test suite
test.describe('Successful Checkout With Valid Data', () => {

    // define the test case
    test('TC-01 Checkout: Successful Checkout', async ({ page }) => {
        // navigate to the application
        await page.goto('http://www.saucedemo.com/');

        // init credential
        const username = 'standard_user';
        const password = 'secret_sauce';

        // login with valid credentials
        await page.fill('#user-name', username);
        await page.fill('#password', password);
        await page.click('#login-button');
        // verify successful login by checking the URL
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

        // add items to the cart
        // add sauce lab backpack
        await page.click('#add-to-cart-sauce-labs-backpack');
        // capture screenshot after adding first item
        await page.screenshot({ path: 'screenshots/Checkout/TC-01_after_adding_backpack.png' });

        // add allthethings t-shirt use data-test
        await page.click('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
        // capture screenshot after adding second item
        await page.screenshot({ path: 'screenshots/Checkout/TC-01_after_adding_tshirt.png' });

        // add sauce lab onesie
        await page.click('#add-to-cart-sauce-labs-onesie');
        // capture screenshot after adding third item
        await page.screenshot({ path: 'screenshots/Checkout/TC-01_after_adding_onesie.png' });

        // navigate to the cart
        await page.click('.shopping_cart_link');
        // verify cart URL
        await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
        // verify items in the cart
        const cartItems = page.locator('.cart_item');
        await expect(cartItems).toHaveCount(3);
        // capture screenshot of the cart
        await page.screenshot({ path: 'screenshots/Checkout/TC-01_cart_contents.png' });

        // proceed to checkout
        await page.click('[data-test="checkout"]');
        // verify checkout step one URL
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

        // fill in checkout information
        // use faker dummy data for first name, last name, and postal code
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const postalCode = faker.location.zipCode('#####');

        await page.fill('[data-test="firstName"]', firstName);
        await page.fill('[data-test="lastName"]', lastName);
        await page.fill('[data-test="postalCode"]', postalCode);
        // capture screenshot after filling checkout info
        await page.screenshot({ path: 'screenshots/Checkout/TC-01_checkout_info_filled.png' });

        // continue to the next step
        await page.click('[data-test="continue"]');
        // verify checkout overview URL
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

        // scroll to view price total
        await page.locator('.summary_total_label').scrollIntoViewIfNeeded();
        // capture screenshot of the checkout overview
        await page.screenshot({ path: 'screenshots/Checkout/TC-01_checkout_overview.png' });

        // finish the checkout
        await page.click('[data-test="finish"]');
        // verify checkout complete notification
        await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
        // capture final screenshot of the order confirmation
        await page.screenshot({ path: 'screenshots/Checkout/TC-01_order_confirmation.png' });
    })

})
