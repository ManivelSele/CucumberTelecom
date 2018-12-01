package org.maven.CucuTelecom;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LooginPage {
	
	WebDriver driver;
	
	@Given("^User need to launch the browser$")
	public void user_need_to_launch_the_browser() {
		System.setProperty("webdriver.chrome.driver", "G:\\Manivelworkspace\\CucuPro\\Driver\\chromedriver.exe");
		driver = new ChromeDriver();
				
	}

	@When("^user need to enter proper credentials$")
	public void user_need_to_enter_proper_credentials() {
		driver.get("http://demo.guru99.com/telecom/index.html#");
		
	}

	@Then("^user need to login the page$")
	public void user_need_to_login_the_page() {
		String lloo = driver.findElement(By.xpath("//a[@class='logo']")).getText();
		org.junit.Assert.assertEquals("Guru99 telecom", lloo);
	}

}
