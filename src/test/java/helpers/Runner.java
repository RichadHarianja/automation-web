package helpers;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources/features"},
        glue = {""},
        plugin = {"pretty","json:target/cucumber.json","html:target/report"},
        monochrome = true
//        tags = {"tags"},
)

public class Runner {
}
