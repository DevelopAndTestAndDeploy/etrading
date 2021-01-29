package com.viryaconsulting.etrading.runners;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class AppWithJS {


    public static void main(String[] args) throws InterruptedException {


        WebDriver driver;
        String baseUrl;

        System.setProperty("webdriver.chrome.driver", "src\\test\\java\\com\\viryaconsulting" +
                "\\etrading\\resources\\other\\chromedriver.exe");
        driver = new ChromeDriver();
        baseUrl = "https://etrading.fernando.org.uk/login";
        driver.manage().window().maximize();
        driver.get(baseUrl);

        driver.findElement(By.id("username")).sendKeys("yohan");
        driver.findElement(By.id("password")).sendKeys("password");
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/div/div/div[4]/div/button")).click();
        Thread.sleep(3000);

        WebElement a = driver.findElements(By.xpath("//*[@id=\"root\"]/div/div/section[3]" +
                "/div/div/div[1]/div/div[2]/div/div")).get(1);

        System.out.println(a);

    }




        }



