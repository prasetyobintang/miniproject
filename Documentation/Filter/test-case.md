# Test Cases — Product Sorting (Filter)

## Precondition
- User is logged in using valid credential
- User is on inventory page

---

### TC-01: Sort products by name (A to Z)

Steps:
1. Open inventory page
2. Click filter dropdown
3. Select "Name (A to Z)"

Expected Result:
- Product list is sorted alphabetically from A to Z

---

### TC-02: Sort products by name (Z to A)

Steps:
1. Open inventory page
2. Click filter dropdown
3. Select "Name (Z to A)"

Expected Result:
- Product list is sorted alphabetically from Z to A

---

### TC-03: Sort products by price (low to high)

Steps:
1. Open inventory page
2. Click filter dropdown
3. Select "Price (low to high)"

Expected Result:
- Product list is sorted from lowest price to highest price

---

### TC-04: Sort products by price (high to low)

Steps:
1. Open inventory page
2. Click filter dropdown
3. Select "Price (high to low)"

Expected Result:
- Product list is sorted from highest price to lowest price

---

### TC-05: Verify selected filter value is reflected

Steps:
1. Open inventory page
2. Click filter dropdown
3. Select any sorting option

Expected Result:
- Selected sorting option is displayed as active value on dropdown
