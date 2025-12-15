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
