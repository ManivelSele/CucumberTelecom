package org.maven.CucuTelecom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePagePage {

	WebDriver driver;

	@Given("^User need to be in hone page$")
	public void user_need_to_be_in_hone_page() {
		String pagRef = driver.findElement(By.className("logo")).getText();
		org.junit.Assert.assertEquals("Guru99 telecom", pagRef);

	}

	@When("^User need to click on the add tarriff page$")
	public void user_need_to_click_on_the_add_tarriff_page() {
		driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
	}

	@Then("^user need to verify current page is add tariff page$")
	public void user_need_to_verify_current_page_is_add_tariff_page() {
		String addTarifurl = driver.getCurrentUrl();
		System.out.println(addTarifurl);
	}

}
