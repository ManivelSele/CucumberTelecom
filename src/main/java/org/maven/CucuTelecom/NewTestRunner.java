package org.maven.CucuTelecom;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features = "src\\main\\java\\org\\maven\\CucuTelecom",
 glue = { "org\\maven\\CucuTelecom" }, plugin = {"html:target" })
		
public class NewTestRunner {
	

}
