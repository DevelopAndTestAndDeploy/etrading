package com.viryaconsulting.etrading.utils;

import com.viryaconsulting.etrading.pageobjects.BasePage;
import com.viryaconsulting.etrading.pageobjects.Dashboard_Page;
import com.viryaconsulting.etrading.pageobjects.Login_Page;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.PageFactory;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class DriverFactory {

    protected Logger log = LogManager.getLogger(DriverFactory.class.getName());
    public static WebDriver driver;
    public static BasePage basePage;
    public static Login_Page loginPage;
    public static Dashboard_Page dashboardPage;


    public WebDriver getDriver() {
        try {
            // read config
            Properties p = new Properties();
            FileInputStream fi = new FileInputStream(System.getProperty("user.dir") +
                    "\\src\\main\\java\\com\\viryaconsulting\\etrading\\properties\\config.properties");
            p.load(fi);
            String browserName = p.getProperty("browser");

            switch (browserName) {
                case "firefox":
                    if (null == driver) {
                        // setup
                        System.setProperty("webdriver.gecko.driver", Constant.GECKO_DRIVER_DIRECTORY);
                        //DesiredCapabilities capabilities = DesiredCapabilities.firefox();
                        //capabilities.setCapability("marionete", true);
                        driver = new FirefoxDriver();
                        driver.manage().window().maximize();
                    }

                    break;

                case "chrome":

                    if (null == driver) {
                        // setup

                        System.setProperty("webdriver.chrome.driver", Constant.CHROME_DRIVER_DIRECTORY);
                        // chrome options
                        driver = new ChromeDriver();
                        driver.manage().window().maximize();

                    }

                    break;


            }

        } catch (Exception e) {
            log.info("Unable to load browser: " + e.getMessage());

        } finally {
            driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
            loginPage = PageFactory.initElements(driver, Login_Page.class);
            dashboardPage = PageFactory.initElements(driver, Dashboard_Page.class);
            basePage = PageFactory.initElements(driver, BasePage.class);


        }

        return driver;

    }


}
