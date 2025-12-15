# Cart Test Scenarios

## Feature Overview
Cart functionality on **saucedemo.com**, covering basic user interactions from product listing to cart page.

---

## Positive Scenarios

### Add Item to Cart (Inventory Page)
User adds an item to cart from the inventory page.

**Page:**
- https://www.saucedemo.com/inventory.html

**Scenario:**
- User clicks the **Add to cart** button on a product.

**Expected Result:**
- Button label changes to **Remove**
- Cart icon badge increases accordingly

---

### Remove Item from Cart (Inventory Page)
User removes an item from cart directly from the inventory page.

**Page:**
- https://www.saucedemo.com/inventory.html

**Scenario:**
- User clicks the **Remove** button on a previously added item.

**Expected Result:**
- Item is removed from cart
- Button label changes back to **Add to cart**
- Cart icon badge updates correctly

---

### Access Cart Page
User navigates to the cart page using the cart icon.

**Scenario:**
- User clicks the cart icon on the top-right corner.

**Expected Result:**
- User is redirected to cart page  
  https://www.saucedemo.com/cart.html
- Added items are displayed correctly

---

### Remove Item from Cart (Cart Page)
User removes an item from within the cart page.

**Page:**
- https://www.saucedemo.com/cart.html

**Scenario:**
- User clicks the **Remove** button on an item inside the cart.

**Expected Result:**
- Item is removed from the cart list
- Cart contents update accordingly

---

### Continue Shopping from Cart Page
User returns to inventory page from cart page.

**Page:**
- https://www.saucedemo.com/cart.html

**Scenario:**
- User clicks the **Continue Shopping** button.

**Expected Result:**
- User is redirected back to inventory page  
  https://www.saucedemo.com/inventory.html

---

## Notes
- Scenarios assume user is already logged in.
- Quantity and price calculation are not covered in this scope.
