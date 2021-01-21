package com.viryaconsulting.etrading.runners;

import gherkin.lexer.Th;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

import java.lang.annotation.Documented;
import java.util.List;

public class App {

    public static void main(String[] args) throws Exception {
        WebDriver driver = null;
        JavascriptExecutor js;
        js = (JavascriptExecutor) driver;

                String baseUrl = "https://localhost:3000/login";


        System.setProperty("webdriver.chrome.driver", "src\\test\\java\\com\\viryaconsulting" +
                "\\etrading\\resources\\other\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get(baseUrl);

        driver.findElement(By.id("username")).sendKeys("yohan");
        driver.findElement(By.id("password")).sendKeys("password");
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/div/div/div[4]/div/button")).click();
        Thread.sleep(3000);

        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/section[2]/div/button/span[1]")).click();
        driver.findElement(By.xpath("//*[@id=\"simple-menu\"]/div[3]/ul/li[1]")).click();
        driver.findElement(By.xpath("//*[@id=\"traderId\"]")).click();
        Thread.sleep(3000);
        driver.findElement(By.xpath("//*[@id=\"menu-\"]/div[3]/ul/li[2]")).click();
        Thread.sleep(3000);
        driver.findElement(By.xpath("//*[@id=\"instrumentId\"]")).click();
        Thread.sleep(3000);
        driver.findElement(By.xpath("//*[@id=\"menu-\"]/div[3]/ul/li[1]")).click();
        Thread.sleep(3000);
        driver.findElement(By.id("quantity")).sendKeys("1234");
        Thread.sleep(3000);
        driver.findElement(By.xpath("/html/body/div[3]/div[3]/div/div[2]/form/div/div[4]/div/div/div")).click();
        Thread.sleep(3000);
        driver.findElement(By.xpath("//*[@id=\"menu-\"]/div[3]/ul/li[1]")).click();
        Thread.sleep(3000);
        driver.findElement(By.xpath("/html/body/div[3]/div[3]/div/div[2]/form/div/div[5]/div/div/div")).click();
        Thread.sleep(3000);
        driver.findElement(By.xpath("//*[@id=\"menu-\"]/div[3]/ul/li[1]")).click();
        Thread.sleep(3000);
        driver.findElement(By.xpath("/html/body/div[3]/div[3]/div/div[3]/button[2]/span[1]")).click();
       Thread.sleep(3000);

        driver.findElement(By.xpath("//*[@id=\"column-orderId\"]/span")).click();
        driver.findElement(By.xpath("//*[@id=\"column-orderId\"]/span")).click();
        Thread.sleep(3000);
        driver.findElement(By.xpath("/html/body/div[1]/div/div/section[3]/div/div/div[4]/div/div[2]/div/div/div[2]/div[1]/div[1]/input")).click();
        driver.findElement(By.xpath("/html/body/div[1]/div/div/section[3]/div/div/div[4]/div/div[2]/div/div/div[2]/div[1]/div[8]/button/span[1]")).click();
        driver.findElement(By.xpath("//*[@id=\"price\"]")).sendKeys("2780");
        driver.findElement(By.xpath("/html/body/div[3]/div[3]/div/div[3]/button[2]")).click();
        Thread.sleep(3000);
        driver.findElement(By.xpath("//*[@id=\"column-instrumentCode\"]/span")).click();
        driver.findElement(By.xpath("//*[@id=\"column-instrumentCode\"]/span")).click();
        Thread.sleep(4000);
        driver.findElement(By.xpath("//*[@id=\"column-trader\"]/span")).click();
        driver.findElement(By.xpath("//*[@id=\"column-trader\"]/span")).click();
//        driver.findElement(By.xpath("//*[@id=\"column-quantity\"]/span")).click();
//        driver.findElement(By.xpath("//*[@id=\"column-quantity\"]/span")).click();
        Thread.sleep(3000);
        driver.findElement(By.xpath("/html/body/div[1]/div/div/section[3]/div/div/div[1]/div/div[2]/div/div/div[2]/div[1]")).click();






        //fil
        //driver.findElement(By.xpath(" //*[@id=\"cell-e7oD6bJiVR-undefined\"]")).click();
        //*[@id="cell-mxKn-nL39C-undefined"]/button/span[2]
        //*[@id="cell-e7oD6bJiVR-undefined"]


          //driver.quit();
        //driver.findElement(By.id("price")).sendKeys("3456");
        //Thread.sleep(3000);
        //driver.findElement(By.xpath("//*[@id=\"cell-rFZbtKpAlo-undefined\"]")).click();








    }
    }
