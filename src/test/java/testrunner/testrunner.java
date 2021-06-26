package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features = "src/test/java/features", 
		glue = { "stepdefination", "hooks" },
		plugin = { "pretty" ,"html:target"})
public class testrunner {

}
