package com.adactin.helper;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.adactin.pom.BookAHotelPage;
import com.adactin.pom.Login_Page;
import com.adactin.pom.LogoutPage;
import com.adactin.pom.SearchHotelPage;
import com.adactin.pom.SelectHotelPage;

public class PageObjectManager {

	public static WebDriver driver;

	private Login_Page login;

	private SearchHotelPage hotelSearch;

	public PageObjectManager(WebDriver driver2) {

		this.driver = driver2;
		PageFactory.initElements(driver, this);

	}

	public Login_Page login() {

		login = new Login_Page(driver);

		return login;

	}

	public SearchHotelPage searchHotelPage() {

		hotelSearch = new SearchHotelPage(driver);

		return hotelSearch;

	}

}
