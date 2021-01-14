Feature: Login functionality in the etrading app and buy shares

  Scenario: Positive Login to buy shares
    Given As a user who is looking to buy shares, navigates to etrading app.
    When The user enters a valid username
      | yohan    |   sarith  |
    And The user enters a valid password
      | password  | password  |
    And The user clicks on the login button
    When The user should be on the dashboard page of the etrading app
    And user clicks on new_order
    Then user should be presented with a pop-up window to enter trades



