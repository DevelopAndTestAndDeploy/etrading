package com.viryaconsulting.etrading.pageobjects;

import cucumber.api.DataTable;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.io.IOException;
import java.util.List;

public class Login_Page extends BasePage{

    public @FindBy(id = "username")
    WebElement textfield_userName;
    public @FindBy(id = "password") WebElement textfield_password;
    public @FindBy(xpath = "//*[@id=\"root\"]/div/div/div/div/div/div/div[4]/div/button") WebElement button_Login;

    public Login_Page() throws IOException {

        super();
    }

    public Login_Page getLoginPage() throws IOException {
        getDriver().get("https://localhost:3000/login");
        return new Login_Page();
    }

    public Login_Page enterUserName(DataTable dataTable, int row, int column) throws Exception{
        List<List<String>> data = dataTable.raw();
        sendKeysToWebElement(textfield_userName, data.get(row).get(column));
        return new Login_Page();
    }

    public Login_Page enterPassword(DataTable dataTable, int row, int column) throws Exception{
        List<List<String>> data = dataTable.raw();
        sendKeysToWebElement(textfield_password, data.get(row).get(column));
        return new Login_Page();
    }

    public Login_Page clickOnLoginButton() throws Exception {
        waitAndClickElement(button_Login);
        //Thread.sleep(4000);
        return new Login_Page();
    }

    }
