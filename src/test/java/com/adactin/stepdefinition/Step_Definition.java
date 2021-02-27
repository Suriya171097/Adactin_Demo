package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.helper.PageObjectManager;
import com.adactin.pom.BookAHotelPage;
import com.adactin.pom.Login_Page;
import com.adactin.pom.LogoutPage;
import com.adactin.pom.SearchHotelPage;
import com.adactin.pom.SelectHotelPage;
import com.adactin.runner.Runner;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Definition extends BaseClass {

	public static WebDriver driver = Runner.driver;

	PageObjectManager pom = new PageObjectManager(driver);
	
	
		@Given("^user Launch The Application$")
	public void user_Launch_The_Application() throws Throwable {
		getURL("http://adactinhotelapp.com/");

	}

	@When("^user Enter The \"([^\"]*)\" In Username Field$")
	public void user_Enter_The_In_Username_Field(String username) throws Throwable {

		inputValueElement(pom.login().getEmail(), username);
	
	}

	@When("^user Enter The \"([^\"]*)\" In Password Field$")
	public void user_Enter_The_In_Password_Field(String password) throws Throwable {
	
		inputValueElement(pom.login().getPassword(), password);
	
	}

	
	@Then("^user Click On The Login Button And It Navigates To The Search Hotel Page$")
	public void user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page() throws Throwable {

		clickOnElement(pom.login().getLogin_Btn());

	}

}
