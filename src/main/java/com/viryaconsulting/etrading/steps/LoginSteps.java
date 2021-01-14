package com.viryaconsulting.etrading.steps;

import com.viryaconsulting.etrading.utils.DriverFactory;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps extends DriverFactory {

    @Given("^As a user who is looking to buy shares, navigates to etrading app\\.$")
    public void as_a_user_who_is_looking_to_buy_shares_navigates_to_etrading_app() throws Throwable {
        loginPage.getLoginPage();
        Thread.sleep(3000);

    }

    @When("^The user enters a valid username$")
    public void the_user_enters_a_valid_username(DataTable dataTable) throws Throwable {

        loginPage.enterUserName(dataTable,0,0);
        //Thread.sleep(3000);
    }

    @And("^The user enters a valid password$")
    public void the_user_enters_a_valid_password(DataTable dataTable) throws Throwable {

        //Thread.sleep(3000);
        loginPage.enterPassword(dataTable,0, 0);
    }

    @And("^The user clicks on the login button$")
    public void the_user_clicks_on_the_login_button() throws Throwable {

        loginPage.clickOnLoginButton();
        //Thread.sleep(6000);
    }

    @When("^The user should be on the dashboard page of the etrading app$")
    public void the_user_should_be_on_the_dashboard_page_of_the_etrading_app() throws Throwable {

        System.out.println("The user is on the dashboard page");

    }

    @And("^user clicks on new_order$")
    public void user_clicks_on_new_order() throws Throwable {

        dashboardPage.clickOnNewOrderButton();
        dashboardPage.selectingNewOrderOptions();

    }

    @Then("^user should be presented with a pop-up window to enter trades$")
    public void user_should_be_presented_with_a_pop_up_window_to_enter_trades() throws Throwable {
        dashboardPage.selectTraderName();
        dashboardPage.selectInstrument();
        dashboardPage.enterQuantity();
        dashboardPage.selectBuyOrSell();
        dashboardPage.selectOrderType();
        dashboardPage.clickSubmitToPlaceTheOrder();
        Thread.sleep(3000);


    }
}

