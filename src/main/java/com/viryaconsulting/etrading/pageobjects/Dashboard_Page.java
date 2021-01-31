package com.viryaconsulting.etrading.pageobjects;

import gherkin.lexer.Th;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.annotations.Test;

import java.io.IOException;

public class Dashboard_Page extends BasePage {

    //New order button locators
     public @FindBy(xpath = "//span[normalize-space()='New Order']")
    WebElement button_NewOrder;

    public @FindBy(xpath = "//li[normalize-space()='Stock']")
    WebElement newOrderMenu_DropDownMenu_Stock;


    public @FindBy(xpath = "//li[normalize-space()='Equity Option']")
    WebElement newOrderMenu_DropDownMenu_EquityOption;


    public @FindBy(xpath = "//li[normalize-space()='Equity Swap']")
    WebElement newOrderMenu_DropDownMenu_EquitySwap;


    //Trader name locators
    public @FindBy(xpath = "//*[@id='traderId']")
    WebElement newOrderPopUp_DropDownMenu;

    public @FindBy(xpath = "//li[normalize-space()='Paul Tudor Jones']")
    WebElement dropDownMenu_TraderName_PTJ;


    public @FindBy(xpath = "//li[normalize-space()='Ken Griffin']")
    WebElement dropDownMenu_TraderName_KG;


    public @FindBy(xpath = "//li[normalize-space()='Ray Dalio']")
    WebElement dropDownMenu_TraderName_RD;


    public @FindBy(xpath = "//li[normalize-space()='John Overdeck']")
    WebElement dropDownMenu_TraderName_JO;


    //Instrument locators
    public @FindBy(xpath = "//*[@id='instrumentId']")
    WebElement dropDownMenu_Instruments;

    public @FindBy(xpath = "//li[normalize-space()='IBM']")
    WebElement dropDownMenu_InstrumentIBM;


    public @FindBy(xpath = "//li[normalize-space()='MSFT']")
    WebElement dropDownMenu_InstrumentMSFT;


    public @FindBy(xpath = "//li[normalize-space()='TSLA']")
    WebElement dropDownMenu_InstrumentTSLA;


    //Quantity locator
    public @FindBy(id = "quantity")
    WebElement textField_Quantity;

    //Buy or sell locators

    public @FindBy(xpath = "//div[@role='presentation']//div[4]//div[1]//div[1]//div[1]")
    WebElement dropDown_BuyOrSell;

    public @FindBy(xpath = "//li[normalize-space()='Buy']")
    WebElement dropDownMenu_Buy;

    public @FindBy(xpath = "//li[normalize-space()='Sell']")
    WebElement dropDownMenu_Sell;


    //Order type locators

    public @FindBy(xpath = "//div[5]//div[1]//div[1]//div[1]")
    WebElement dropDownMenu_OrderType;

    public @FindBy(xpath = "//li[normalize-space()='Market']")
    WebElement dropDownMenuOrderType_Market;

    public @FindBy(xpath = "//li[normalize-space()='Limit']")
    WebElement dropDownMenuOrderType_Limit;


    //Submit button locator
    public @FindBy(xpath = "//button[2]")
    WebElement button_Submit;

    //Orders table locators
    public @FindBy(xpath = "//*[@id='column-orderId']")
    WebElement button_OrderUpButton;

    public @FindBy(xpath = "//div[4]//div[1]//div[2]//div[1]//div[1]//div[2]//div[1]//div[1]//input[1]")
    WebElement checkBox_ClickingOnNewOrderToVerify;

    public @FindBy(xpath = "//div[@id='row-0']//span[contains(text(),'Fill')]")
    WebElement button_FillButton;


    public @FindBy(xpath = "//*[@id='price']")
    WebElement fillPricePopUPTextArea_EnterFillPrice;

    public @FindBy(xpath = "//span[normalize-space()='Submit']")
    WebElement button_SubmitFillPrice;


    //Trades table locators
    public @FindBy(xpath = "//*[@id='column-tradeId']")
    WebElement checkBox_TradesTableTradeUp;

    public @FindBy(xpath = "//*[@id='row-0']/div[1]/input")
    WebElement checkBox_TradesTableFirstRow;


    // Positions table locators
    public @FindBy(xpath = "//*[@id='column-trader']")
    WebElement checkBox_PositionsTableTaderUp;
    public @FindBy(xpath = "//*[@id='column-instrumentCode']")
    WebElement checkBox_PositionsInstrumentIdUp;

    public @FindBy(id = "row-0")
    WebElement row_ClickRowToGetChart;


    public Dashboard_Page() throws IOException {

        super();
    }


    @Test
    public Dashboard_Page clickOnNewOrderButton() throws Exception {
        log.info("");
        waitAndClickElement(button_NewOrder);
        return new Dashboard_Page();
    }

    @Test
    public Dashboard_Page selectingNewOrderStockOptions(String stockOptions) throws Exception {
        if (stockOptions.equals("Stock")) waitAndClickElement(newOrderMenu_DropDownMenu_Stock);
        if (stockOptions.equals("Equity Options")) waitAndClickElement(newOrderMenu_DropDownMenu_EquityOption);
        if (stockOptions.equals("Equity Swap")) waitAndClickElement(newOrderMenu_DropDownMenu_EquitySwap);
        return new Dashboard_Page();
    }

    @Test
    public Dashboard_Page selectTraderName(String traderName) throws Exception {
        waitAndClickElement(newOrderPopUp_DropDownMenu);
        if (traderName.equals("Paul Tudor Jones")) waitAndClickElement(dropDownMenu_TraderName_PTJ);
        if (traderName.equals("Ken Griffin")) waitAndClickElement(dropDownMenu_TraderName_KG);
        if (traderName.equals("Ray Dalio")) waitAndClickElement(dropDownMenu_TraderName_RD);
        if (traderName.equals("John Overdeck")) waitAndClickElement(dropDownMenu_TraderName_JO);
        Thread.sleep(2000);
        return new Dashboard_Page();
    }

    @Test
    public Dashboard_Page selectInstrument(String instrument) throws Exception {
        waitAndClickElement(dropDownMenu_Instruments);
        if (instrument.equals("IBM")) waitAndClickElement(dropDownMenu_InstrumentIBM);
        if (instrument.equals("MSFT")) waitAndClickElement(dropDownMenu_InstrumentMSFT);
        if (instrument.equals("TSLA")) waitAndClickElement(dropDownMenu_InstrumentTSLA);
        return new Dashboard_Page();
    }

    @Test
    public Dashboard_Page enterQuantity() throws Exception {
        sendKeysToWebElement(textField_Quantity, "7078");
        Thread.sleep(2000);
        return new Dashboard_Page();
    }

    @Test
    public Dashboard_Page selectBuyOrSell(String buyOrSell) throws Exception {
        waitAndClickElement(dropDown_BuyOrSell);
        if (buyOrSell.equals("Buy")) waitAndClickElement(dropDownMenu_Buy);
        if (buyOrSell.equals("Sell")) waitAndClickElement(dropDownMenu_Sell);
        Thread.sleep(2000);
        return new Dashboard_Page();
    }

    @Test
    public Dashboard_Page selectOrderType(String orderType) throws Exception {
        waitAndClickElement(dropDownMenu_OrderType);
        if (orderType.equals("Market")) waitAndClickElement(dropDownMenuOrderType_Market);
        if (orderType.equals("Limit")) waitAndClickElement(dropDownMenuOrderType_Limit);
        Thread.sleep(2000);
        return new Dashboard_Page();
    }

    @Test
    public Dashboard_Page clickSubmitToPlaceTheOrder() throws Exception {
        waitAndClickElement(button_Submit);
        Thread.sleep(2000);
        return new Dashboard_Page();

    }

    @Test
    public Dashboard_Page verifyNewOrder() throws Exception {
        waitAndClickElement(button_OrderUpButton);
        waitAndClickElement(button_OrderUpButton);
        waitAndClickElement(checkBox_ClickingOnNewOrderToVerify);
        waitAndClickElement(button_FillButton);
        sendKeysToWebElement(fillPricePopUPTextArea_EnterFillPrice, "8976543");
        waitAndClickElement(button_SubmitFillPrice);
        Thread.sleep(2000);
        return new Dashboard_Page();
    }

    @Test
    public Dashboard_Page verifyTradesTable() throws Exception {

        waitAndClickElement(checkBox_TradesTableTradeUp);
        waitAndClickElement(checkBox_TradesTableTradeUp);
        Thread.sleep(2000);
        waitAndClickElement(checkBox_TradesTableFirstRow);
        Thread.sleep(2000);
        return new Dashboard_Page();
    }

    @Test
    public Dashboard_Page verifyPositionsTable() throws Exception {

        waitAndClickElement(checkBox_PositionsTableTaderUp);
        Thread.sleep(2000);
        waitAndClickElement(checkBox_PositionsInstrumentIdUp);
        Thread.sleep(2000);
        waitAndClickElement(row_ClickRowToGetChart);
        Thread.sleep(3000);
        return new Dashboard_Page();
    }


}
