package com.viryaconsulting.etrading.steps;

import com.viryaconsulting.etrading.utils.DriverFactory;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import static com.viryaconsulting.etrading.pageobjects.BasePage.captureScreenshot;

public class MasterHooks extends DriverFactory {

    @Before
    public void setUp() {
        driver = getDriver();
    }

    @After
    public void tearDownAndScreenshotOnFaliure(Scenario scenario) throws InterruptedException {
        try {

            if(driver!= null && scenario.isFailed()) {
                scenario.embed(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES),
                        "image/png");
                captureScreenshot();
                driver.manage().deleteAllCookies();
                driver.quit();
                driver = null;
            }

            if(driver != null) {
                driver.manage().deleteAllCookies();
                driver.quit();
                driver = null;

            }
        } catch (Exception e) {
            System.out.println("Method has failed......tearDownAndScreenshotOnFaliure(), Exception"
                    + e.getMessage());
        }
    }
}
