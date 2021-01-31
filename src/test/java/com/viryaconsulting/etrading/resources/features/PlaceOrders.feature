Feature:  Login to the etrading app and place orders

  Scenario Outline: Placing new orders
    Given As a user who is looking to buy shares, navigates to etrading app.
    When The user enters a valid username
      | yohan    |   sarith  |
    And The user enters a valid password
      | password  | password  |
    And   The user clicks on the login button
    When  The user is on the dashboard page of the etrading website
    And   The user clicks on the newOrder button
    And   The user selects "<StockOptions>"
    And   The user selects the "<TraderId>" traderId
    And   The user selects the "<Instrument>" instrument
    And   The user enters the quantity
    And   The user selects "<BuyOrSell>" buy or sell
    And   The user selects "<OrderType>" order type
    When  The user clicks on the submit button
    Then  The order should be verified in the Orders table and the Trades table and the Positions table


    Examples:

       |  StockOptions     |    TraderId      |  Instrument  |  BuyOrSell   |   OrderType   |
       |    Stock          | John Overdeck    |     IBM      |    Buy       |   Market      |
       |    Equity Options | Ken Griffin      |     MSFT     |    Sell      |   Limit       |
      # |    Equity Swap    | Paul Tudor Jones |     TSLA     |    Buy       |   Market      |
       #|    Stock          | Ray Dalio        |     IBM      |    Sell      |   Limit       |









