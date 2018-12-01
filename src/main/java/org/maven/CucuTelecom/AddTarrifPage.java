package org.maven.CucuTelecom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddTarrifPage {
	WebDriver driver;
	
	@Given("^User need to be in add tarrif page$")
	public void user_need_to_be_in_add_tarrif_page() {
String sss = driver.getCurrentUrl();
System.out.println(sss);
	}

	@When("^User need to enter the details$")
	public void user_need_to_enter_the_details() {
		driver.findElement(By.id("rental1")).sendKeys("400");
		
	}

	@Then("^user need to submit the page$")
	public void user_need_to_submit_the_page() {
		driver.findElement(By.name("submit")).click();
	}

}
