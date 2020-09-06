// To run tests in codecept use the following command at the cli
// npx codeceptjs run --steps

Feature('login');

Scenario('test the demo site', (I) => {
    I.amOnPage('/Login.html');

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
