package com.viryaconsulting.etrading.runners;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class AppWithJS {

    private WebDriver driver;
    String baseUrl;
    private JavascriptExecutor js;

    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "src\\test\\java\\com\\viryaconsulting" +
                "\\etrading\\resources\\other\\chromedriver.exe");
        driver = new ChromeDriver();
        baseUrl = "https://localhost:3000/login";
        js = (JavascriptExecutor) driver;
        //driver.get(baseUrl);

        driver.manage().window().maximize();
        //driver.get(baseUrl);
    }
        @Test
        public void test () throws InterruptedException {
//            WebElement textBox = driver.findElement(By.id("username"));
//            textBox.sendKeys("yohan");
//            WebElement textBox2 = driver.findElement(By.id("password"));
//            textBox2.sendKeys("password");
//            WebElement loginButton = driver.findElement(By.className("MuiButton-label"));
//            loginButton.click();
//            Thread.sleep(3000);
            js.executeScript("window.location = 'https://localhost:3000/login';");
            WebElement textBox = (WebElement) js.executeScript("return document.getElementById('username');");
            textBox.sendKeys("yohan");
            WebElement textBox2 = (WebElement) js.executeScript("return document.getElementById('password');");
            textBox2.sendKeys("password");
            WebElement loginButton = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/div/div/div[4]/div/button/span[1]"));
            loginButton.click();
            Thread.sleep(3000);
            WebElement fillButton = driver.findElement(By.xpath("/html/body/div[1]/div/div/section[3]/div/div/div[4]/div/div[2]/div/div/div[2]/div[1]/div[8]/button/span[1]"));
            //fillButton.click();
            js.executeScript("arguments[0].click();", fillButton);

            //*[@id="cell-IsvDmV2UDjb-undefined"]/button/span[1]
            //*[@id="root"]/div/div/section[2]/div/button/span[1]






        }
    }


