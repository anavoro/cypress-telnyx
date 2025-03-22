# Telnyx Automation

This repository contains test scripts to verify the functionality of the Telnyx website.

## Installation

To set up the test environment, install Cypress using the following command:

```sh
npm install cypress --save-dev
```

## Commands

Run the test suite in headless mode:

```sh
npx cypress run
```

Open Cypress in interactive mode:

```sh
npx cypress open
```

## Test Cases

**TEL-TC-001 - Homepage Loads Successfully**  
_Verify that the Telnyx homepage loads without errors and displays correctly._

**TEL-TC-002 - Verify Footer Presence**  
_Ensure the footer is visible._

**TEL-TC-003 - Cookie Button Check**  
_Confirm that the cookie consent button appears and functions as expected._

**TEL-TC-004 - Main Navigation Displayed Correctly in Desktop View**  
_Validate that the main navigation menu appears and functions correctly on desktop devices._

**TEL-TC-005 - Main Navigation Displayed Correctly in Mobile View**  
_Ensure that the main navigation menu is accessible and responsive in mobile view._

**TEL-TC-006 - Top Navigation Displayed Correctly in Desktop View**  
_Check that the top navigation bar appears on desktop devices._

**TEL-TC-007 - Top Navigation Displayed Correctly in Mobile View**  
_Ensure that the top navigation menu is accessible and responsive in mobile view._

**TEL-TC-008 - Verify Navigation from Header Sign-Up Button**  
_Confirm that clicking the sign-up button in the header navigates to the correct sign-up page._

**TEL-TC-009 - Verify Navigation from Main Section Sign-Up Button**  
_Ensure that clicking the sign-up button in the main section directs users to the sign-up page._

**TEL-TC-010 - Contact Us Button Functionality**  
_Verify that the "Contact Us" button works correctly and leads to the appropriate page._

---

**Note:** Please update test cases as needed based on application changes. 🚀
