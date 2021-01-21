$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality in the etrading app and buy shares",
  "description": "",
  "id": "login-functionality-in-the-etrading-app-and-buy-shares",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6018291900,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Positive Login to buy shares",
  "description": "",
  "id": "login-functionality-in-the-etrading-app-and-buy-shares;positive-login-to-buy-shares",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "The user should be on the dashboard page of the etrading app",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user clicks on new_order",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should be presented with a pop-up window to enter trades",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.as_a_user_who_is_looking_to_buy_shares_navigates_to_etrading_app()"
});
formatter.result({
  "duration": 3940666800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_a_valid_username(DataTable)"
});
formatter.result({
  "duration": 170986800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_enters_a_valid_password(DataTable)"
});
formatter.result({
  "duration": 195391700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 110447400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_should_be_on_the_dashboard_page_of_the_etrading_app()"
});
formatter.result({
  "duration": 71000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_new_order()"
});
formatter.result({
  "duration": 1223073100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_be_presented_with_a_pop_up_window_to_enter_trades()"
});
formatter.result({
  "duration": 32761649600,
  "error_message": "java.lang.AssertionError: Unable to wait and click on the WebElement, using locator: \u003c[[ChromeDriver: chrome on XP (a21a84f6c47942d7d3c7e53c0a62ba67)] -\u003e xpath: //*[@id\u003d\"column-orderId\"]/span]\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat com.viryaconsulting.etrading.pageobjects.BasePage.waitAndClickElement(BasePage.java:42)\r\n\tat com.viryaconsulting.etrading.pageobjects.Dashboard_Page.verifyNewOrder(Dashboard_Page.java:85)\r\n\tat com.viryaconsulting.etrading.steps.LoginSteps.user_should_be_presented_with_a_pop_up_window_to_enter_trades(LoginSteps.java:64)\r\n\tat ✽.Then user should be presented with a pop-up window to enter trades(Login.feature:12)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 731280700,
  "status": "passed"
});
});