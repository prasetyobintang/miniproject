# Test Cases — Cart Feature

## Precondition

* User is already logged in
* User is on inventory page unless stated otherwise

---

## TC-01 — Add Item to Cart (Inventory Page)

**Scenario Type:** Positive

**Page:** [https://www.saucedemo.com/inventory.html](https://www.saucedemo.com/inventory.html)

**Steps:**

1. Identify a product on the inventory page
2. Click the **Add to cart** button

**Expected Result:**

* Product is added to cart
* Button label changes from **Add to cart** to **Remove**
* Cart icon badge increases by 1

---

## TC-02 — Remove Item from Cart (Inventory Page)

**Scenario Type:** Positive

**Page:** [https://www.saucedemo.com/inventory.html](https://www.saucedemo.com/inventory.html)

**Precondition:**

* At least one item has been added to cart

**Steps:**

1. Click the **Remove** button on the added product

**Expected Result:**

* Product is removed from cart
* Button label changes back to **Add to cart**
* Cart icon badge decreases accordingly

---

## TC-03 — Navigate to Cart Page via Cart Icon

**Scenario Type:** Positive

**Steps:**

1. Click the cart icon on the top-right corner

**Expected Result:**

* User is redirected to cart page
* URL changes to [https://www.saucedemo.com/cart.html](https://www.saucedemo.com/cart.html)
* Added items are displayed correctly

---

## TC-04 — Remove Item from Cart (Cart Page)

**Scenario Type:** Positive

**Page:** [https://www.saucedemo.com/cart.html](https://www.saucedemo.com/cart.html)

**Precondition:**

* Cart contains at least one item

**Steps:**

1. Click the **Remove** button on an item in the cart

**Expected Result:**

* Item is removed from cart list
* Cart content updates correctly

---

## TC-05 — Continue Shopping from Cart Page

**Scenario Type:** Positive

**Page:** [https://www.saucedemo.com/cart.html](https://www.saucedemo.com/cart.html)

**Steps:**

1. Click the **Continue Shopping** button

**Expected Result:**

* User is redirected back to inventory page
* URL changes to [https://www.saucedemo.com/inventory.html](https://www.saucedemo.com/inventory.html)

## TC-06 — Continue Shopping from Cart Page After Removing Item and Checking Cart Page to Validate

**Scenario Type:** Positive

**Page:** [https://www.saucedemo.com/cart.html](https://www.saucedemo.com/cart.html)

**Steps:**

1. Click **Remove** button inside Cart Page
2. Click the **Continue Shopping** button

**Expected Result:**

* User is redirected back to inventory page
* URL changes to [https://www.saucedemo.com/inventory.html](https://www.saucedemo.com/inventory.html)
* Item on Cart Page is 0
