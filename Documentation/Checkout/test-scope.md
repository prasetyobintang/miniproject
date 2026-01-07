# Checkout Test Scope

This document defines the scope of checkout feature testing on https://www.saucedemo.com  
The checkout feature is tested as a continuation of the cart feature.

---

## In Scope

The following functionalities are covered:

- Navigate to checkout page from cart
- Input user information on checkout form
- Validation of required fields
- Checkout overview page validation
- Complete checkout process
- Successful checkout confirmation

---

## Out of Scope

The following are not covered in this phase:

- Payment method validation
- Order history
- Backend order processing
- Cross-browser testing
- Performance or load testing

---

## Assumptions

- User is already authenticated
- Cart functionality has been verified separately
- Test data uses default SauceDemo credentials
- Only standard user flow is tested

---

## Test Environment

- Website: https://www.saucedemo.com
- Browser: Chromium
- Automation Tool: Playwright
- Language: TypeScript
