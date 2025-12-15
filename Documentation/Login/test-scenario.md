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
