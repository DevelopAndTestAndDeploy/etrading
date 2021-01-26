Feature: Login functionality in the etrading app to buy or sell shares


  Scenario: Negative Login Attempt to the etrading app
    Given As a user who is looking to buy shares, navigates to etrading app.
    When The user enters an invaild username
    And The user enters an invalid password
    And The user clicks on the login button
    Then The user should not not be able to login and an invalid username or password error message should appear

    ######################################################################################################

  Scenario: Positive Login to buy or sell shares
    Given As a user who is looking to buy shares, navigates to etrading app.
    When The user enters a valid username
      | yohan    |   sarith  |
    And The user enters a valid password
      | password  | password  |
    And The user clicks on the login button
    Then The user should be on the dashboard page of the etrading app


###############################################################################################


