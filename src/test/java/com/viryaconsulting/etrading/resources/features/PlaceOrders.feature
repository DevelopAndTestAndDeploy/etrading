Feature: Once the user is on the Dashboard page after login,  the user should be able to,
         create new orders and submit them.

  Scenario Outline: Placing new orders in the etrading app and verifying them.

    Given The user navigates to "<dashboardPage_url>" page
    When The user clicks on the new order button
    And The user selects a stock options "<Stock_Options>" from the dropdown menu
    Then The user should be presented with a pop-up window to enter trade details

    Examples:
      | dashboardPage_url                 |                     Stock_Options                           |
      |  http://localhost:3000/dashboard  |    //*[@id="root"]/div/div/section[2]/div/button/span[1]    |
      |  http://localhost:3000/dashboard  |    //*[@id="simple-menu"]/div[3]/ul/li[1]                   |
      |  http://localhost:3000/dashboard  |    //*[@id="simple-menu"]/div[3]/ul/li[2]                   |
      |  http://localhost:3000/dashboard  |    //*[@id="simple-menu"]/div[3]/ul/li[3]                   |

