# Test Cases — Login Feature

## TC-01 — Login with Valid Credential

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

## TC-02 — Login with Invalid Username

**Scenario Type:** Negative

**Precondition:** User is on login page

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

## TC-03 — Login with Invalid Password

**Scenario Type:** Negative

**Precondition:** User is on login page

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

## TC-04 — Empty Username

**Scenario Type:** Negative

**Precondition:** User is on login page

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

## TC-05 — Empty Password

**Scenario Type:** Negative

**Precondition:** User is on login page

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

## TC-06 — Empty Username and/or Password

**Scenario Type:** Negative

**Precondition:** User is on login page

**Test Data:**

* Username: *(empty)* or `standard_user`
* Password: *(empty)* or `secret_sauce`

**Steps:**

1. Leave username and/or password field empty
2. Enter password and/or username if testing only one empty field
3. Click Login button

**Expected Result:**

* Error message displayed depending on which field is empty:
  * Username empty → `Epic sadface: Username is required`
  * Password empty → `Epic sadface: Password is required`

**Note:**  
* Covers both cases of empty username and/or empty password without repetition of TC-04 or TC-05.

---

## TC-07 — Login with Locked Out User

**Scenario Type:** Special Case

**Precondition:** User is on login page

**Test Data:**

* Username: `locked_out_user`
* Password: `secret_sauce`

**Steps:**

1. Enter locked out username
2. Enter valid password
3. Click Login button

**Expected Result:**

* Error message displayed: `Epic sadface: Sorry, this user has been locked out.`
