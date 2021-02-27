package com.adactin.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.helper.FileReaderManager;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features = 
"src//test//java//com//adactin//feature", 
glue = "com.adactin.stepdefinition",
monochrome=true,
dryRun=false,
strict=true,
tags= {"@Smoketest"},
plugin= {"html:Cucumber_Reports/htmlreport",
"pretty",
"json:Cucumber_Report/jsonreport",
"com.cucumber.listener.ExtentCucumberFormatter/Cucumber_Report/extends.html"

}
)

public class Runner {

	public static WebDriver driver;

	@BeforeClass
	public static void setUp() throws Throwable {

		//driver = BaseClass.getDriver("chrome");

		String browser = FileReaderManager.getInstance().getInstanceCR().getBrowser();
		
	driver=	BaseClass.getDriver(browser);
		
	}

	@AfterClass
	public static void teardown() {

		
		driver.close();
	}
	
	


}
