$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality in the etrading app to buy or sell shares",
  "description": "",
  "id": "login-functionality-in-the-etrading-app-to-buy-or-sell-shares",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5766458600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Negative Login Attempt to the etrading app",
  "description": "",
  "id": "login-functionality-in-the-etrading-app-to-buy-or-sell-shares;negative-login-attempt-to-the-etrading-app",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "As a user who is looking to buy shares, navigates to etrading app.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "The user enters an invaild username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user enters an invalid password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "The user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "The user should not not be able to login and an invalid username or password error message should appear",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.as_a_user_who_is_looking_to_buy_shares_navigates_to_etrading_app()"
});
formatter.result({
  "duration": 3818771700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_an_invaild_username()"
});
formatter.result({
  "duration": 55500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_an_invalid_password()"
});
formatter.result({
  "duration": 48100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 4100540100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_should_not_not_be_able_to_login_and_an_invalid_username_or_password_error_message_should_appear()"
});
formatter.result({
  "duration": 43010100,
  "status": "passed"
});
formatter.after({
  "duration": 697011700,
  "status": "passed"
});
formatter.before({
  "duration": 5032392400,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 11,
      "value": "######################################################################################################"
    }
  ],
  "line": 13,
  "name": "Positive Login to buy or sell shares",
  "description": "",
  "id": "login-functionality-in-the-etrading-app-to-buy-or-sell-shares;positive-login-to-buy-or-sell-shares",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "As a user who is looking to buy shares, navigates to etrading app.",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "The user enters a valid username",
  "rows": [
    {
      "cells": [
        "yohan",
        "sarith"
      ],
      "line": 16
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "The user enters a valid password",
  "rows": [
    {
      "cells": [
        "password",
        "password"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "The user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "The user should be on the dashboard page of the etrading app",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.as_a_user_who_is_looking_to_buy_shares_navigates_to_etrading_app()"
});
formatter.result({
  "duration": 3694800500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_a_valid_username(DataTable)"
});
formatter.result({
  "duration": 159341600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_a_valid_password(DataTable)"
});
formatter.result({
  "duration": 156376100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 4102167200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_should_be_on_the_dashboard_page_of_the_etrading_app()"
});
formatter.result({
  "duration": 7809200,
  "status": "passed"
});
formatter.after({
  "duration": 828304400,
  "status": "passed"
});
formatter.uri("PlaceOrders.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Feature: Once the user is on the Dashboard page after login,  the user should be able to,"
    },
    {
      "line": 2,
      "value": "#         create new orders and submit them."
    },
    {
      "line": 3,
      "value": "#"
    },
    {
      "line": 4,
      "value": "#  Scenario Outline: Placing new orders in the etrading app and verifying them."
    },
    {
      "line": 5,
      "value": "#"
    },
    {
      "line": 6,
      "value": "#    Given The user navigates to dashboard page and clicks on \"\u003cnewOrderButton\u003e\""
    },
    {
      "line": 7,
      "value": "#    When The user clicks on the new order button"
    },
    {
      "line": 8,
      "value": "#    And The user selects a stock options \"\u003cstockOptions\u003e\" from the dropdown menu"
    },
    {
      "line": 9,
      "value": "#    Then The user should be presented with a pop-up window to enter trade details"
    },
    {
      "line": 10,
      "value": "#"
    },
    {
      "line": 11,
      "value": "#    Examples:"
    },
    {
      "line": 12,
      "value": "#      |                 newOrderButton                          |                    stockOptions                           |"
    },
    {
      "line": 13,
      "value": "#      |  //*[@id\u003d\"root\"]/div/div/section[2]/div/button/span[1]  |    //*[@id\u003d\"simple-menu\"]/div[3]/ul/li[1]                   |"
    },
    {
      "line": 14,
      "value": "#      |  //*[@id\u003d\"root\"]/div/div/section[2]/div/button/span[1]  |    //*[@id\u003d\"simple-menu\"]/div[3]/ul/li[2]                   |"
    },
    {
      "line": 15,
      "value": "#      |  //*[@id\u003d\"root\"]/div/div/section[2]/div/button/span[1]  |    //*[@id\u003d\"simple-menu\"]/div[3]/ul/li[3]                   |"
    },
    {
      "line": 16,
      "value": "#      |  //*[@id\u003d\"root\"]/div/div/section[2]/div/button/span[1]  |    //*[@id\u003d\"root\"]/div/div/section[2]/div/button/span[1]    |"
    }
  ],
  "line": 20,
  "name": "Login to the etrading app and place orders",
  "description": "",
  "id": "login-to-the-etrading-app-and-place-orders",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Placing new orders",
  "description": "",
  "id": "login-to-the-etrading-app-and-place-orders;placing-new-orders",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "As a user who is looking to buy shares, navigates to etrading app.",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "The user enters a valid username",
  "rows": [
    {
      "cells": [
        "yohan",
        "sarith"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The user enters a valid password",
  "rows": [
    {
      "cells": [
        "password",
        "password"
      ],
      "line": 27
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "The user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "The user is on the dashboard page of the etrading website",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "The user clicks on the newOrder button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "The user selects \"\u003cStockOptions\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "The user selects the \"\u003cTraderId\u003e\" traderId",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "The user selects the \"\u003cInstrument\u003e\" instrument",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "The user enters the quantity",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "The user selects \"\u003cBuyOrSell\u003e\" buy or sell",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "The user selects \"\u003cOrderType\u003e\" order type",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "The user clicks on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "The order should be verified in the Orders table and the Trades table and the Positions table",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "login-to-the-etrading-app-and-place-orders;placing-new-orders;",
  "rows": [
    {
      "cells": [
        "StockOptions",
        "TraderId",
        "Instrument",
        "BuyOrSell",
        "OrderType"
      ],
      "line": 43,
      "id": "login-to-the-etrading-app-and-place-orders;placing-new-orders;;1"
    },
    {
      "cells": [
        "Stock",
        "John Overdeck",
        "IBM",
        "Buy",
        "Market"
      ],
      "line": 44,
      "id": "login-to-the-etrading-app-and-place-orders;placing-new-orders;;2"
    },
    {
      "cells": [
        "Equity Options",
        "Ken Griffin",
        "MSFT",
        "Sell",
        "Limit"
      ],
      "line": 45,
      "id": "login-to-the-etrading-app-and-place-orders;placing-new-orders;;3"
    },
    {
      "cells": [
        "Equity Swap",
        "Paul Tudor Jones",
        "TSLA",
        "Buy",
        "Market"
      ],
      "line": 46,
      "id": "login-to-the-etrading-app-and-place-orders;placing-new-orders;;4"
    },
    {
      "cells": [
        "Stock",
        "Ray Dalio",
        "IBM",
        "Sell",
        "Limit"
      ],
      "line": 47,
      "id": "login-to-the-etrading-app-and-place-orders;placing-new-orders;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5063826700,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Placing new orders",
  "description": "",
  "id": "login-to-the-etrading-app-and-place-orders;placing-new-orders;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "As a user who is looking to buy shares, navigates to etrading app.",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "The user enters a valid username",
  "rows": [
    {
      "cells": [
        "yohan",
        "sarith"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The user enters a valid password",
  "rows": [
    {
      "cells": [
        "password",
        "password"
      ],
      "line": 27
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "The user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "The user is on the dashboard page of the etrading website",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "The user clicks on the newOrder button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "The user selects \"Stock\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "The user selects the \"John Overdeck\" traderId",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "The user selects the \"IBM\" instrument",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "The user enters the quantity",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "The user selects \"Buy\" buy or sell",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "The user selects \"Market\" order type",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "The user clicks on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "The order should be verified in the Orders table and the Trades table and the Positions table",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.as_a_user_who_is_looking_to_buy_shares_navigates_to_etrading_app()"
});
formatter.result({
  "duration": 3703289500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_a_valid_username(DataTable)"
});
formatter.result({
  "duration": 154948600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_a_valid_password(DataTable)"
});
formatter.result({
  "duration": 159091200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 4094239300,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_is_on_the_dashboard_page_of_the_etrading_website()"
});
formatter.result({
  "duration": 147600,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_clicks_on_the_newOrder_button()"
});
formatter.result({
  "duration": 114979300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stock",
      "offset": 18
    }
  ],
  "location": "PlaceOrderSteps.The_user_selects(String)"
});
formatter.result({
  "duration": 245483700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Overdeck",
      "offset": 22
    }
  ],
  "location": "PlaceOrderSteps.the_user_selects_the_traderId(String)"
});
formatter.result({
  "duration": 3306978900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IBM",
      "offset": 22
    }
  ],
  "location": "PlaceOrderSteps.the_user_selects_the_instrument(String)"
});
formatter.result({
  "duration": 223991101,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_enters_the_quantity()"
});
formatter.result({
  "duration": 176153099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Buy",
      "offset": 18
    }
  ],
  "location": "PlaceOrderSteps.the_user_selects_buy_or_sell(String)"
});
formatter.result({
  "duration": 3731630000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Market",
      "offset": 18
    }
  ],
  "location": "PlaceOrderSteps.the_user_selects_order_type(String)"
});
formatter.result({
  "duration": 6215524700,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 240180300,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_order_should_be_verified_in_the_Orders_table_and_the_Trades_table_and_the_Positions_table()"
});
formatter.result({
  "duration": 29441850201,
  "status": "passed"
});
formatter.after({
  "duration": 706285199,
  "status": "passed"
});
formatter.before({
  "duration": 5048769699,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Placing new orders",
  "description": "",
  "id": "login-to-the-etrading-app-and-place-orders;placing-new-orders;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "As a user who is looking to buy shares, navigates to etrading app.",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "The user enters a valid username",
  "rows": [
    {
      "cells": [
        "yohan",
        "sarith"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The user enters a valid password",
  "rows": [
    {
      "cells": [
        "password",
        "password"
      ],
      "line": 27
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "The user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "The user is on the dashboard page of the etrading website",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "The user clicks on the newOrder button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "The user selects \"Equity Options\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "The user selects the \"Ken Griffin\" traderId",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "The user selects the \"MSFT\" instrument",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "The user enters the quantity",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "The user selects \"Sell\" buy or sell",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "The user selects \"Limit\" order type",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "The user clicks on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "The order should be verified in the Orders table and the Trades table and the Positions table",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.as_a_user_who_is_looking_to_buy_shares_navigates_to_etrading_app()"
});
formatter.result({
  "duration": 3696033000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_a_valid_username(DataTable)"
});
formatter.result({
  "duration": 145321600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_a_valid_password(DataTable)"
});
formatter.result({
  "duration": 152671401,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 4093416599,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_is_on_the_dashboard_page_of_the_etrading_website()"
});
formatter.result({
  "duration": 81201,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_clicks_on_the_newOrder_button()"
});
formatter.result({
  "duration": 119479799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Equity Options",
      "offset": 18
    }
  ],
  "location": "PlaceOrderSteps.The_user_selects(String)"
});
formatter.result({
  "duration": 246304200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ken Griffin",
      "offset": 22
    }
  ],
  "location": "PlaceOrderSteps.the_user_selects_the_traderId(String)"
});
formatter.result({
  "duration": 3293270099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MSFT",
      "offset": 22
    }
  ],
  "location": "PlaceOrderSteps.the_user_selects_the_instrument(String)"
});
formatter.result({
  "duration": 206942400,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_enters_the_quantity()"
});
formatter.result({
  "duration": 178025200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sell",
      "offset": 18
    }
  ],
  "location": "PlaceOrderSteps.the_user_selects_buy_or_sell(String)"
});
formatter.result({
  "duration": 3738402401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Limit",
      "offset": 18
    }
  ],
  "location": "PlaceOrderSteps.the_user_selects_order_type(String)"
});
formatter.result({
  "duration": 6231162500,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 332762000,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_order_should_be_verified_in_the_Orders_table_and_the_Trades_table_and_the_Positions_table()"
});
formatter.result({
  "duration": 29693399300,
  "status": "passed"
});
formatter.after({
  "duration": 696490200,
  "status": "passed"
});
formatter.before({
  "duration": 5086840800,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Placing new orders",
  "description": "",
  "id": "login-to-the-etrading-app-and-place-orders;placing-new-orders;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "As a user who is looking to buy shares, navigates to etrading app.",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "The user enters a valid username",
  "rows": [
    {
      "cells": [
        "yohan",
        "sarith"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The user enters a valid password",
  "rows": [
    {
      "cells": [
        "password",
        "password"
      ],
      "line": 27
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "The user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "The user is on the dashboard page of the etrading website",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "The user clicks on the newOrder button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "The user selects \"Equity Swap\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "The user selects the \"Paul Tudor Jones\" traderId",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "The user selects the \"TSLA\" instrument",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "The user enters the quantity",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "The user selects \"Buy\" buy or sell",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "The user selects \"Market\" order type",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "The user clicks on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "The order should be verified in the Orders table and the Trades table and the Positions table",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.as_a_user_who_is_looking_to_buy_shares_navigates_to_etrading_app()"
});
formatter.result({
  "duration": 3690268400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_a_valid_username(DataTable)"
});
formatter.result({
  "duration": 142513100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_a_valid_password(DataTable)"
});
formatter.result({
  "duration": 152843500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 4099949800,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_is_on_the_dashboard_page_of_the_etrading_website()"
});
formatter.result({
  "duration": 101500,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_clicks_on_the_newOrder_button()"
});
formatter.result({
  "duration": 114936400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Equity Swap",
      "offset": 18
    }
  ],
  "location": "PlaceOrderSteps.The_user_selects(String)"
});
formatter.result({
  "duration": 241264200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paul Tudor Jones",
      "offset": 22
    }
  ],
  "location": "PlaceOrderSteps.the_user_selects_the_traderId(String)"
});
formatter.result({
  "duration": 3291399000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TSLA",
      "offset": 22
    }
  ],
  "location": "PlaceOrderSteps.the_user_selects_the_instrument(String)"
});
formatter.result({
  "duration": 222119901,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_enters_the_quantity()"
});
formatter.result({
  "duration": 186544900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Buy",
      "offset": 18
    }
  ],
  "location": "PlaceOrderSteps.the_user_selects_buy_or_sell(String)"
});
formatter.result({
  "duration": 3219902000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Market",
      "offset": 18
    }
  ],
  "location": "PlaceOrderSteps.the_user_selects_order_type(String)"
});
formatter.result({
  "duration": 6199601501,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 351957899,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_order_should_be_verified_in_the_Orders_table_and_the_Trades_table_and_the_Positions_table()"
});
formatter.result({
  "duration": 29586484600,
  "status": "passed"
});
formatter.after({
  "duration": 695215901,
  "status": "passed"
});
formatter.before({
  "duration": 5093778800,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Placing new orders",
  "description": "",
  "id": "login-to-the-etrading-app-and-place-orders;placing-new-orders;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "As a user who is looking to buy shares, navigates to etrading app.",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "The user enters a valid username",
  "rows": [
    {
      "cells": [
        "yohan",
        "sarith"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "The user enters a valid password",
  "rows": [
    {
      "cells": [
        "password",
        "password"
      ],
      "line": 27
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "The user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "The user is on the dashboard page of the etrading website",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "The user clicks on the newOrder button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "The user selects \"Stock\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "The user selects the \"Ray Dalio\" traderId",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "The user selects the \"IBM\" instrument",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "The user enters the quantity",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "The user selects \"Sell\" buy or sell",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "The user selects \"Limit\" order type",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "The user clicks on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "The order should be verified in the Orders table and the Trades table and the Positions table",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.as_a_user_who_is_looking_to_buy_shares_navigates_to_etrading_app()"
});
formatter.result({
  "duration": 3687147600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_a_valid_username(DataTable)"
});
formatter.result({
  "duration": 140678400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_a_valid_password(DataTable)"
});
formatter.result({
  "duration": 155607400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 4080635800,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_is_on_the_dashboard_page_of_the_etrading_website()"
});
formatter.result({
  "duration": 132100,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_clicks_on_the_newOrder_button()"
});
formatter.result({
  "duration": 106564300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stock",
      "offset": 18
    }
  ],
  "location": "PlaceOrderSteps.The_user_selects(String)"
});
formatter.result({
  "duration": 225959099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ray Dalio",
      "offset": 22
    }
  ],
  "location": "PlaceOrderSteps.the_user_selects_the_traderId(String)"
});
formatter.result({
  "duration": 3278883800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IBM",
      "offset": 22
    }
  ],
  "location": "PlaceOrderSteps.the_user_selects_the_instrument(String)"
});
formatter.result({
  "duration": 723490500,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_enters_the_quantity()"
});
formatter.result({
  "duration": 177083801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sell",
      "offset": 18
    }
  ],
  "location": "PlaceOrderSteps.the_user_selects_buy_or_sell(String)"
});
formatter.result({
  "duration": 3744561300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Limit",
      "offset": 18
    }
  ],
  "location": "PlaceOrderSteps.the_user_selects_order_type(String)"
});
formatter.result({
  "duration": 6209497699,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 354687800,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_order_should_be_verified_in_the_Orders_table_and_the_Trades_table_and_the_Positions_table()"
});
formatter.result({
  "duration": 29598958200,
  "status": "passed"
});
formatter.after({
  "duration": 690530899,
  "status": "passed"
});
});