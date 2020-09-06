const { I } = inject();
// Add in your custom step files

Given('I navigate to the application', (table) => {
  I.amOnPage('/Login.html');
});

Given('Login with username and password', (table) => {
  // Gets the values from the cells on a row
  const cells = table.rows[1].cells;
  I.fillField("UserName", cells[0].value);
  I.fillField("Password", cells[0].value);

});

Given('I click Login button', (table) => {
  I.click("//input[@type='submit']");
});
