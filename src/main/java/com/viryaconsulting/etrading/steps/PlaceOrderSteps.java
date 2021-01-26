package com.viryaconsulting.etrading.steps;

import com.viryaconsulting.etrading.pageobjects.Login_Page;
import com.viryaconsulting.etrading.utils.DriverFactory;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;

import java.io.IOException;

public class PlaceOrderSteps extends DriverFactory {


    @When("^The user is on the dashboard page of the etrading website$")
    public void the_user_is_on_the_dashboard_page_of_the_etrading_website() throws Throwable {
        System.out.println("User is on the dashboard page of the etrading website.....");
    }

    @And("^The user clicks on the newOrder button$")
    public void the_user_clicks_on_the_newOrder_button() throws Throwable {
        dashboardPage.clickOnNewOrderButton();

    }

    @And("^The user selects \"([^\"]*)\"$")
    public void The_user_selects(String stockOptions) throws Throwable {

        dashboardPage.selectingNewOrderStockOptions(stockOptions);

    }


    // Entering new order details

    @Given("^The user selects the \"([^\"]*)\" traderId$")
    public void the_user_selects_the_traderId(String traderName) throws Throwable {
        dashboardPage.selectTraderName(traderName);

    }

    @And("^The user selects the \"([^\"]*)\" instrument$")
    public void the_user_selects_the_instrument(String instrument) throws Throwable {
        dashboardPage.selectInstrument(instrument);

    }

    @And("^The user enters the quantity$")
    public void the_user_enters_the_quantity() throws Throwable {
        dashboardPage.enterQuantity();

    }

    @And("^The user selects \"([^\"]*)\" buy or sell$")
    public void the_user_selects_buy_or_sell(String buyOrSell) throws Throwable {

        dashboardPage.selectBuyOrSell(buyOrSell);
    }

    @And("^The user selects \"([^\"]*)\" order type$")
    public void the_user_selects_order_type(String orderType) throws Throwable {
        dashboardPage.selectOrderType(orderType);

    }

    @When("^The user clicks on the submit button$")
    public void the_user_clicks_on_the_submit_button() throws Throwable {
        dashboardPage.clickSubmitToPlaceTheOrder();

    }

    @Then("^The order should be verified in the Orders table and the Trades table and the Positions table$")
    public void the_order_should_be_verified_in_the_Orders_table_and_the_Trades_table_and_the_Positions_table() throws Throwable {

        dashboardPage.verifyNewOrder();
        dashboardPage.verifyTradesTable();
        dashboardPage.verifyPositionsTable();
    }


}
