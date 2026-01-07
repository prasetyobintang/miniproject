# Checkout Test Scenario

This document describes high-level scenarios for checkout feature testing.

---

## Scenario 1: Successful Checkout

**Given**
- User is logged in
- Cart contains at least one item

**When**
- User navigates to cart
- User clicks checkout
- User fills all required information
- User completes checkout

**Then**
- Checkout overview page is displayed
- Order is completed successfully
- Success confirmation message is shown

---

## Scenario 2: Checkout With Missing Required Fields

**Given**
- User is logged in
- Cart contains item

**When**
- User navigates to checkout
- User leaves one or more required fields empty

**Then**
- Error message is displayed
- User remains on checkout information page

---

## Scenario 3: Checkout Without Item in Cart

**Given**
- User is logged in
- Cart is empty

**When**
- User attempts to checkout

**Then**
- Checkout process is blocked
- User cannot proceed to checkout overview
