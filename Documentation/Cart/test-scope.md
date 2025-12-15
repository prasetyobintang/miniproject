# Test Scope — Cart Feature

## Feature Under Test

Shopping cart functionality on **saucedemo.com**, focusing on basic cart interactions from inventory page to cart page.

---

## In Scope

* Add item to cart from inventory page
* Remove item from cart on inventory page
* Navigate to cart page via cart icon
* Remove item from cart on cart page
* Continue shopping from cart page
* Cart icon badge update based on cart state

---

## Out of Scope

* Checkout process
* Payment flow
* Order confirmation
* Quantity update behavior
* Price calculation and totals
* Backend/API validation
* Performance and load testing

---

## Test Environment

* Website: [https://www.saucedemo.com](https://www.saucedemo.com)
* Browser: Chromium (Playwright)
* Test Type: Manual & Automated UI Testing

---

## Assumptions

* User is already logged in before interacting with cart
* Inventory page loads successfully
* Cart starts in a clean state unless specified otherwise

---

## Test Data

* Any available product listed on inventory page

---

## Known Limitations

* Cart behavior depends on static demo data
* UI elements and labels may change without notice
