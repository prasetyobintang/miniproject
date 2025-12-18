Semua ini hanya rekayasa semata untuk belajar sendiri.
All of this is just a ploy to learn on my own.

# saucedemo playwright mini project

mini automation project for web testing using **playwright + typescript**.
this project focuses on **login and cart feature testing** on https://www.saucedemo.com as a foundation for further automation.

---

## tech stack

* playwright
* typescript
* node.js
* google chrome (chromium)

---

## test scope (current)

### login feature

* positive login:

  * valid username
  * valid password

* negative login:

  * invalid username
  * invalid password
  * empty username
  * empty password
  * empty username & password
  
* special case:

  * locked out user

### cart feature

* add item to cart from inventory page
* remove item from inventory page
* navigate to cart page via cart icon
* remove item from cart page
* continue shopping from cart page

### reorder / item filter

* name (A - Z)
* name (Z - A)
* price (low to high)
* price (high to low)

---

## test case reference

manual test case is written separately and translated into automation scenarios:

### login
* TC-01: login with valid credential
* TC-02: login with invalid username
* TC-03: login with invalid password
* TC-04, TC-05, TC-06: empty username/password validation
* TC-07: login with locked out user

### cart
* TC-01: add item to cart
* TC-02: remove item from inventory page
* TC-03: navigate to cart page
* TC-04: remove item from cart page
* TC-05: continue shopping from cart page
* TC-06: continue shopping after remove item and checking back cart page

### reorder / filter
* TC-01: reorder / filter with name A - Z
* TC-02: reorder / filter with name Z - A
* TC-03: reorder / filter with price low to high
* TC-04: reorder / filter with price high to low
* TC-05: active value on dropdown

---

## installation

1. clone the repository

```bash
git clone https://github.com/prasetyobintang/miniproject.git
```

2. install dependencies

```bash
npm install
```

3. install required browser (chrome)

```bash
npx playwright install chrome
```

---

## run test

run all tests:

```bash
npx playwright test
```

run specific test file:

```bash
npx playwright test tests/TC-01-login-positive.spec.ts
```

run with UI mode:

```bash
npx playwright test --ui
```

---

## report

after running the test, open the report with:

```bash
npx playwright show-report
```

---

## notes

* this project is built as a **learning & portfolio mini project**
* test documentation (scope, scenario, test case) is written before automation
* current automation covers login, cart features, and filter
* CI/CD with GitHub Actions will be added in the next phase

