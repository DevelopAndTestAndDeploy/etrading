package com.viryaconsulting.etrading.runners;

import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;

import java.io.File;


@RunWith(Cucumber.class)

    @CucumberOptions(features = {"src/test/java/com/viryaconsulting/etrading/resources/features"}, glue= {
            "com/viryaconsulting/etrading/steps" }, monochrome = true, tags = {},
            plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json",
            "com.cucumber.listener.ExtentCucumberFormatter:output/report.html"})

    public class MainRunner extends AbstractTestNGCucumberTests {

    @AfterClass
    public static void writeExtentReport() {
        Reporter.loadXMLConfig(new File(System.getProperty("user.dir") +
                "\\src\\main\\java\\com\\viryaconsulting\\etrading\\utils\\ReportsConfig.xml"));

    }

    }

