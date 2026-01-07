# Checkout Test Cases

---

## TC-01: Successful Checkout With Valid Data

**Precondition**
- User logged in with valid credentials
- Cart contains at least one item

**Steps**
1. Navigate to cart page
2. Click checkout button
3. Fill first name
4. Fill last name
5. Fill postal code
6. Click continue
7. Verify checkout overview page
8. Click finish

**Expected Result**
- Checkout overview page is displayed
- Order completed successfully
- Thank you message is shown

---

## TC-02: Checkout With Empty First Name

**Precondition**
- User logged in
- Cart contains item

**Steps**
1. Navigate to checkout page
2. Leave first name empty
3. Fill last name and postal code
4. Click continue

**Expected Result**
- Error message "First Name is required" is displayed

---

## TC-03: Checkout With Empty Last Name

**Precondition**
- User logged in
- Cart contains item

**Steps**
1. Navigate to checkout page
2. Fill first name
3. Leave last name empty
4. Fill postal code
5. Click continue

**Expected Result**
- Error message "Last Name is required" is displayed

---

## TC-04: Checkout With Empty Postal Code

**Precondition**
- User logged in
- Cart contains item

**Steps**
1. Navigate to checkout page
2. Fill first name and last name
3. Leave postal code empty
4. Click continue

**Expected Result**
- Error message "Postal Code is required" is displayed

---

## TC-05: Checkout Attempt With Empty Cart

**Precondition**
- User logged in
- Cart is empty

**Steps**
1. Navigate to cart page
2. Click checkout

**Expected Result**
- User cannot proceed to checkout overview
- Checkout flow is blocked
