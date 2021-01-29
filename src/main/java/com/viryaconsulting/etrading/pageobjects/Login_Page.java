package com.viryaconsulting.etrading.pageobjects;

import cucumber.api.DataTable;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.annotations.Test;
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

    @Test
    public Login_Page getLoginPage() throws IOException {

        log.info("Navigating to login page");

        getDriver().get("https://localhost:3000/login");
       // getDriver().get("https://etrading.fernando.org.uk/login");
        return new Login_Page();
    }
    @Test
    public Login_Page enterUserName(DataTable dataTable, int row, int column) throws Exception{
        List<List<String>> data = dataTable.raw();
        sendKeysToWebElement(textfield_userName, data.get(row).get(column));
        return new Login_Page();
    }

    @Test
    public Login_Page enterPassword(DataTable dataTable, int row, int column) throws Exception{
        List<List<String>> data = dataTable.raw();
        sendKeysToWebElement(textfield_password, data.get(row).get(column));
        return new Login_Page();
    }
    @Test
    public Login_Page clickOnLoginButton() throws Exception {
        waitAndClickElement(button_Login);
        Thread.sleep(4000);
        return new Login_Page();
    }

    @Test
    public Login_Page verifyInvalidLogin() throws Exception {
        WebElement incorrectLogin = getDriver().findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/div/div/div[1]/div"));
        System.out.println(incorrectLogin.getText());
        WaitUntilWebElementIsVisible(incorrectLogin);
        Assert.assertEquals("Username or password incorrect", incorrectLogin.getText());
        return new Login_Page();
    }

    }
