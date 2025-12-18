# Test Scope — Product Sorting (Filter)

## Feature Under Test
Product sorting functionality on inventory page of **saucedemo.com**.

URL:
https://www.saucedemo.com/inventory.html

---

## Precondition
- User is logged in using valid credential
- User successfully navigated to inventory page

---

## In Scope
- Sort products by name (A to Z)
- Sort products by name (Z to A)
- Sort products by price (low to high)
- Sort products by price (high to low)
- Verify product order changes according to selected filter option
- Verify selected filter value is reflected on dropdown state

---

## Out of Scope
- Search functionality (not available on application)
- Cart interaction during sorting
- Product detail page behavior
- Checkout and payment flow
- Backend or API validation
- Performance and load testing

---

## Test Environment
- Website: https://www.saucedemo.com
- Browser: Chromium (Playwright)
- Test Type: Manual & Automated UI Testing

---

## Assumptions
- Product list is static during test execution
- Sorting only affects UI order, not product data
- All products are visible on inventory page

---

## Test Data
- Default products available on inventory page

---

## Known Limitations
- Sorting behavior depends on demo data provided by saucedemo
- No pagination handling required
