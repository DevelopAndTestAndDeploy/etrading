$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality in the etrading app to buy or sell shares",
  "description": "",
  "id": "login-functionality-in-the-etrading-app-to-buy-or-sell-shares",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6709793600,
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
  "duration": 3863093200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_an_invaild_username()"
});
formatter.result({
  "duration": 161100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_an_invalid_password()"
});
formatter.result({
  "duration": 224900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 8132078700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_should_not_not_be_able_to_login_and_an_invalid_username_or_password_error_message_should_appear()"
});
formatter.result({
  "duration": 62524600,
  "status": "passed"
});
formatter.after({
  "duration": 684691900,
  "status": "passed"
});
formatter.before({
  "duration": 5192722200,
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
  "duration": 3795562200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_a_valid_username(DataTable)"
});
formatter.result({
  "duration": 213768500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_a_valid_password(DataTable)"
});
formatter.result({
  "duration": 197043500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 8123439100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_should_be_on_the_dashboard_page_of_the_etrading_app()"
});
formatter.result({
  "duration": 12137600,
  "status": "passed"
});
formatter.after({
  "duration": 694803400,
  "status": "passed"
});
formatter.uri("PlaceOrders.feature");
formatter.feature({
  "line": 1,
  "name": "Login to the etrading app and place orders",
  "description": "",
  "id": "login-to-the-etrading-app-and-place-orders",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Placing new orders",
  "description": "",
  "id": "login-to-the-etrading-app-and-place-orders;placing-new-orders",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "As a user who is looking to buy shares, navigates to etrading app.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The user enters a valid username",
  "rows": [
    {
      "cells": [
        "yohan",
        "sarith"
      ],
      "line": 6
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user enters a valid password",
  "rows": [
    {
      "cells": [
        "password",
        "password"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "The user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "The user is on the dashboard page of the etrading website",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The user clicks on the newOrder button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "The user selects \"\u003cStockOptions\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The user selects the \"\u003cTraderId\u003e\" traderId",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "The user selects the \"\u003cInstrument\u003e\" instrument",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "The user enters the quantity",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "The user selects \"\u003cBuyOrSell\u003e\" buy or sell",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "The user selects \"\u003cOrderType\u003e\" order type",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "The user clicks on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "The order should be verified in the Orders table and the Trades table and the Positions table",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
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
      "line": 24,
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
      "line": 25,
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
      "line": 26,
      "id": "login-to-the-etrading-app-and-place-orders;placing-new-orders;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5134453000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Placing new orders",
  "description": "",
  "id": "login-to-the-etrading-app-and-place-orders;placing-new-orders;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "As a user who is looking to buy shares, navigates to etrading app.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The user enters a valid username",
  "rows": [
    {
      "cells": [
        "yohan",
        "sarith"
      ],
      "line": 6
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user enters a valid password",
  "rows": [
    {
      "cells": [
        "password",
        "password"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "The user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "The user is on the dashboard page of the etrading website",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The user clicks on the newOrder button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "The user selects \"Stock\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The user selects the \"John Overdeck\" traderId",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "The user selects the \"IBM\" instrument",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "The user enters the quantity",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "The user selects \"Buy\" buy or sell",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "The user selects \"Market\" order type",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "The user clicks on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "The order should be verified in the Orders table and the Trades table and the Positions table",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.as_a_user_who_is_looking_to_buy_shares_navigates_to_etrading_app()"
});
formatter.result({
  "duration": 3803042200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_a_valid_username(DataTable)"
});
formatter.result({
  "duration": 169869800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_a_valid_password(DataTable)"
});
formatter.result({
  "duration": 184987300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 8121047700,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_is_on_the_dashboard_page_of_the_etrading_website()"
});
formatter.result({
  "duration": 309100,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_clicks_on_the_newOrder_button()"
});
formatter.result({
  "duration": 155190300,
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
  "duration": 255271400,
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
  "duration": 3323626900,
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
  "duration": 244054800,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_enters_the_quantity()"
});
formatter.result({
  "duration": 205762000,
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
  "duration": 3257076800,
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
  "duration": 6272633900,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 3299837100,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_order_should_be_verified_in_the_Orders_table_and_the_Trades_table_and_the_Positions_table()"
});
formatter.result({
  "duration": 29803390300,
  "status": "passed"
});
formatter.after({
  "duration": 686915400,
  "status": "passed"
});
formatter.before({
  "duration": 5107445400,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Placing new orders",
  "description": "",
  "id": "login-to-the-etrading-app-and-place-orders;placing-new-orders;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "As a user who is looking to buy shares, navigates to etrading app.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The user enters a valid username",
  "rows": [
    {
      "cells": [
        "yohan",
        "sarith"
      ],
      "line": 6
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user enters a valid password",
  "rows": [
    {
      "cells": [
        "password",
        "password"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "The user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "The user is on the dashboard page of the etrading website",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The user clicks on the newOrder button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "The user selects \"Equity Options\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The user selects the \"Ken Griffin\" traderId",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "The user selects the \"MSFT\" instrument",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "The user enters the quantity",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "The user selects \"Sell\" buy or sell",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "The user selects \"Limit\" order type",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "The user clicks on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "The order should be verified in the Orders table and the Trades table and the Positions table",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.as_a_user_who_is_looking_to_buy_shares_navigates_to_etrading_app()"
});
formatter.result({
  "duration": 3788694200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_a_valid_username(DataTable)"
});
formatter.result({
  "duration": 171897500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_a_valid_password(DataTable)"
});
formatter.result({
  "duration": 192693600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 8119451400,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_is_on_the_dashboard_page_of_the_etrading_website()"
});
formatter.result({
  "duration": 262000,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_clicks_on_the_newOrder_button()"
});
formatter.result({
  "duration": 141258800,
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
  "duration": 239353900,
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
  "duration": 3311491000,
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
  "duration": 273463700,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_enters_the_quantity()"
});
formatter.result({
  "duration": 199702000,
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
  "duration": 3258199400,
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
  "duration": 6274054800,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 3322212700,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderSteps.the_order_should_be_verified_in_the_Orders_table_and_the_Trades_table_and_the_Positions_table()"
});
formatter.result({
  "duration": 29786998200,
  "status": "passed"
});
formatter.after({
  "duration": 704055500,
  "status": "passed"
});
});