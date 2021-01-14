package com.viryaconsulting.etrading.runners;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class App {

    public static void main(String[] args) throws InterruptedException {
        WebDriver driver;
        String baseUrl = "http://localhost:3000/login";


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
        driver.findElement(By.xpath("//*[@id=\"menu-\"]/div[3]/ul/li[3]")).click();
        Thread.sleep(3000);
        driver.findElement(By.xpath("//*[@id=\"instrumentId\"]")).click();
        Thread.sleep(3000);
        driver.findElement(By.xpath("//*[@id=\"menu-\"]/div[3]/ul/li[1]")).click();
        Thread.sleep(3000);
        driver.findElement(By.id("quantity")).sendKeys("5000");
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
        driver.findElement(By.xpath("//*[@id=\"row-8\"]/div[1]/input")).click();
        Thread.sleep(3000);
        driver.findElement(By.xpath("//*[@id=\"cell-of7Qt0FX2h2-undefined\"]/button/span[1]")).click();
        Thread.sleep(3000);

        driver.quit();
        //driver.findElement(By.id("price")).sendKeys("3456");
        //Thread.sleep(3000);
        //driver.findElement(By.xpath("//*[@id=\"cell-rFZbtKpAlo-undefined\"]")).click();






        //driver.findElement(By.xpath("//*[@id=\"traderId\"]")).click();
        //driver.quit();

    }
    }
