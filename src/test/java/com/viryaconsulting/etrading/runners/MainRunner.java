package com.viryaconsulting.etrading.runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;



    @RunWith(Cucumber.class)

    @CucumberOptions(features = {"src/test/java/com/viryaconsulting/etrading/resources/features"}, glue= {
            "com/viryaconsulting/etrading/steps" }, monochrome = true, tags = {},
            plugin = {"pretty", "html:target/htmlreports"})
    public class MainRunner extends AbstractTestNGCucumberTests {


    }

