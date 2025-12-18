# Test Scenario — Product Sorting (Filter)

## Precondition
- User is logged in using valid credential
- User is on inventory page: https://www.saucedemo.com/inventory.html

---

## Positive Scenarios

### Scenario 1: Sort products by name (A to Z)
User selects sorting option "Name (A to Z)" from filter dropdown.

Expected result:
- Products are displayed in ascending alphabetical order by name

---

### Scenario 2: Sort products by name (Z to A)
User selects sorting option "Name (Z to A)" from filter dropdown.

Expected result:
- Products are displayed in descending alphabetical order by name

---

### Scenario 3: Sort products by price (low to high)
User selects sorting option "Price (low to high)" from filter dropdown.

Expected result:
- Products are displayed from lowest price to highest price

---

### Scenario 4: Sort products by price (high to low)
User selects sorting option "Price (high to low)" from filter dropdown.

Expected result:
- Products are displayed from highest price to lowest price

---

## UI State Validation

### Scenario 5: Verify selected filter value is reflected
User selects any sorting option from dropdown.

Expected result:
- Selected sorting option is shown as active value in filter dropdown
