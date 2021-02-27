package com.adactin.hooks;

import com.adactin.baseclass.BaseClass;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BaseClass {

	@Before
	private void beforeHooks(Scenario scenario) {

		String name = scenario.getName();
		
		System.out.println("Scenario Status : "+name);
	}

	@After
	private void afterHooks(Scenario scenario) throws Throwable {

		String status = scenario.getStatus();
		
		System.out.println("Status : "+status);

		if (scenario.isFailed()) {

			screenshot("C:\\Users\\ELCOT\\Desktop\\New Folder (2)\\AdactinProject\\Screenshot\\snap.png");

		}
	}

}
