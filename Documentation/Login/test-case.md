# Test Cases — Login Feature

## TC-01 — Valid Login

**Scenario Type:** Positive

**Precondition:** User is on login page

**Test Data:**

* Username: `standard_user`
* Password: `secret_sauce`

**Steps:**

1. Enter valid username
2. Enter valid password
3. Click Login button

**Expected Result:**

* User is redirected to dashboard page: [https://www.saucedemo.com/inventory.html](https://www.saucedemo.com/inventory.html)

---

## TC-02 — Empty Username

**Scenario Type:** Negative

**Test Data:**

* Username: *(empty)*
* Password: `secret_sauce`

**Steps:**

1. Leave username field empty
2. Enter valid password
3. Click Login button

**Expected Result:**

* Error message displayed: `Epic sadface: Username is required`

---

## TC-03 — Empty Password

**Scenario Type:** Negative

**Test Data:**

* Username: `standard_user`
* Password: *(empty)*

**Steps:**

1. Enter valid username
2. Leave password field empty
3. Click Login button

**Expected Result:**

* Error message displayed: `Epic sadface: Password is required`

---

## TC-04 — Invalid Password

**Scenario Type:** Negative

**Test Data:**

* Username: `standard_user`
* Password: `invalid_password`

**Steps:**

1. Enter valid username
2. Enter invalid password
3. Click Login button

**Expected Result:**

* Error message displayed: `Epic sadface: Username and password do not match any user in this service`

---

## TC-05 — Invalid Username

**Scenario Type:** Negative

**Test Data:**

* Username: `invalid_user`
* Password: `secret_sauce`

**Steps:**

1. Enter invalid username
2. Enter valid password
3. Click Login button

**Expected Result:**

* Error message displayed: `Epic sadface: Username and password do not match any user in this service`

---

## TC-06 — Locked Out User

**Scenario Type:** Special Case

**Test Data:**

* Username: `locked_out_user`
* Password: `secret_sauce`

**Steps:**

1. Enter locked out username
2. Enter valid password
3. Click Login button

**Expected Result:**

* Error message displayed: `Epic sadface: Sorry, this user has been locked out.`

---

## TC-07 — Locked Out User with Empty Password

**Scenario Type:** Special Case

**Test Data:**

* Username: `locked_out_user`
* Password: *(empty)*

**Steps:**

1. Enter locked out username
2. Leave password field empty
3. Click Login button

**Expected Result:**

* Error message displayed: `Epic sadface: Password is required`
