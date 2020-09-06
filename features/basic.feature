Feature: Login
  Verify login functionality to work

  Scenario: Perform Login Operation
    Given I navigate to the application
    Given Login with username and password
      | UserName | Password|
      | admin | password |
    And I click Login button
    # Then I should see loggedIn
