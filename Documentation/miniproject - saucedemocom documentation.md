# miniproject - saucedemo*com
# Test Scope — Login Feature

## Feature Under Test

Login functionality on **saucedemo.com**.

## In Scope

* Login using valid credentials
* Login using invalid credentials
* Validation of required fields (username & password)
* Error message handling for invalid login attempts
* Special user behavior: `locked_out_user`

## Out of Scope

* Payment flow
* Checkout process
* Order completion
* Backend/API validation
* Performance testing

## Test Environment

* Website: [https://www.saucedemo.com](https://www.saucedemo.com)
* Browser: Chromium (via Playwright)
* Test Type: Manual & Automated UI Testing

## Test Data

* Valid user: `standard_user / secret_sauce`
* Special user: `locked_out_user / secret_sauce`

## Assumptions

* User is not logged in before test execution
* System behavior follows current Saucedemo implementation

## Known Limitations

* Tests rely on static demo data
* UI behavior may change without notice


# Login Test Scenarios

## Positive Scenario

### Valid Login
User logs in using valid credential input.

**Input:**
- Username: `standard_user`
- Password: `secret_sauce`

**Expected Result:**
- User is successfully redirected to the dashboard  
  [Saucedemo Dashboard – Product](https://www.saucedemo.com/inventory.html)

---

## Negative Scenarios

### Missing Required Fields

1. **Empty username, valid password**
   - Username: *(empty)*
   - Password: `secret_sauce`

   **Expected Result:**
   - Error message displayed:  
     `Epic sadface: Username is required`

2. **Valid username, empty password**
   - Username: `standard_user`
   - Password: *(empty)*

   **Expected Result:**
   - Error message displayed:  
     `Epic sadface: Password is required`

---

### Invalid Credentials

3. **Valid username, invalid password**
4. **Invalid username, valid password**

**Expected Result (for cases 3 & 4):**
- Error message displayed:  
  `Epic sadface: Username and password do not match any user in this service`

---

## Special Case Scenario

### Locked Out User

1. **Locked out user with valid password**
   - Username: `locked_out_user`
   - Password: `secret_sauce`

   **Expected Result:**
   - Error message displayed:  
     `Epic sadface: Sorry, this user has been locked out.`

2. **Locked out user with empty password**
   - Username: `locked_out_user`
   - Password: *(empty)*

   **Expected Result:**
   - Error message follows normal validation behavior:  
     `Epic sadface: Password is required`



