package runn;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features = "src/main/java/org/maven/CucuTelecom/", dryRun=true, glue = { "CucuTelecom" }, plugin = {
		"html:target" })

public class TstRunnnnn {

}
