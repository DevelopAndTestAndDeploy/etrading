package com.viryaconsulting.etrading.pageobjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.io.IOException;
public class Dashboard_Page extends BasePage{

    public @FindBy(xpath = "//*[@id=\"root\"]/div/div/section[2]/div/button/span[1]")
    WebElement button_NewOrder;
    //public @FindBy(xpath = "//*[@id=\"simple-menu\"]/div[3]/ul/li[1]") WebElement newOrderMenu_DropDownMenu;
    public @FindBy(xpath = "//*[@id=\"simple-menu\"]/div[3]/ul/li[1]") WebElement dropDownMenu_Stock;
    public @FindBy(xpath = "//*[@id=\"traderId\"]") WebElement newOrderPopUp_DropDownMenu;
    public @FindBy(xpath = "//*[@id=\"menu-\"]/div[3]/ul/li[3]") WebElement dropDownMenu_TraderName;
    public @FindBy(xpath = "//*[@id=\"instrumentId\"]") WebElement dropDownMenu_Instruments;
    public @FindBy(xpath = "//*[@id=\"menu-\"]/div[3]/ul/li[1]") WebElement dropDownMenu_InstrumentName;
    public @FindBy(id = "quantity") WebElement textField_Quantity;
    public @FindBy(xpath = "/html/body/div[3]/div[3]/div/div[2]/form/div/div[4]/div/div/div")
    WebElement dropDown_BuyOrSell;
    public @FindBy(xpath = "//*[@id=\"menu-\"]/div[3]/ul/li[1]") WebElement dropDownMenu_Buy;
    public @FindBy(xpath = "/html/body/div[3]/div[3]/div/div[2]/form/div/div[5]/div/div/div")
    WebElement dropDownMenu_OrderType;
    public @FindBy(xpath = "//*[@id=\"menu-\"]/div[3]/ul/li[1]") WebElement dropDownMenuOrderType_Market;
    public @FindBy(xpath = "/html/body/div[3]/div[3]/div/div[3]/button[2]/span[1]")
    WebElement button_Submit;

    public Dashboard_Page() throws IOException {

        super();
    }

    public Dashboard_Page clickOnNewOrderButton() throws Exception {
        waitAndClickElement(button_NewOrder);
        return new Dashboard_Page();
    }

    public Dashboard_Page selectingNewOrderOptions() throws Exception {
       // waitAndClickElement(newOrderMenu_DropDownMenu);
        waitAndClickElement(dropDownMenu_Stock);
        return new Dashboard_Page();
    }

    public Dashboard_Page selectTraderName() throws Exception {
        waitAndClickElement(newOrderPopUp_DropDownMenu);
        waitAndClickElement(dropDownMenu_TraderName);
        Thread.sleep(3000);
        return new Dashboard_Page();
    }

    public Dashboard_Page selectInstrument() throws Exception {
        waitAndClickElement(dropDownMenu_Instruments);
        waitAndClickElement(dropDownMenu_InstrumentName);
        return new Dashboard_Page();
    }

    public Dashboard_Page enterQuantity() throws  Exception {
        sendKeysToWebElement(textField_Quantity, "2345");
        return new Dashboard_Page();
    }

    public Dashboard_Page selectBuyOrSell() throws Exception {
        waitAndClickElement(dropDown_BuyOrSell);
        waitAndClickElement(dropDownMenu_Buy);
        Thread.sleep(3000);
        return new Dashboard_Page();
    }

    public Dashboard_Page selectOrderType() throws Exception {
        waitAndClickElement(dropDownMenu_OrderType);
        Thread.sleep(3000);
        waitAndClickElement(dropDownMenuOrderType_Market);
        Thread.sleep(3000);
        return new Dashboard_Page();
    }

    public Dashboard_Page clickSubmitToPlaceTheOrder() throws Exception {
        waitAndClickElement(button_Submit);
        //Thread.sleep(3000);
        return new Dashboard_Page();
    }



}
