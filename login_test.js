// To run tests in codecept use the following command at the cli
// npx codeceptjs run --steps
// To genereate a report using mochawesome while running test
// npx codeceptjs run --reporter mochawesome

Feature('login');

// Using the before hook
// Will be applied to multiple scenarios
Before((I) => {
    I.amOnPage('/Login.html');
});

Scenario('test the demo site', (I) => {
    // Fill in the passsword and username text fields
    I.fillField("UserName", "admin");
    I.fillField("Password", "password");
    I.click("//input[@type='submit']");

    // Wait for the element to be present
    I.waitForElement({xpath: "//input[@name='Initial']"});

    // Create and save screenshot
    // screenshot will be created and saved in output on failure
    I.saveScreenshot("loggedin.jpg");

    // Checking a radio button/check box
    I.checkOption("Hindi");

    // Checking the page title
    I.seeTitleEquals("Execute Automation");

});
