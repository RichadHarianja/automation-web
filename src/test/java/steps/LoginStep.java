package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.LoginPage;

import static setups.BrowserPool.getBrowserInstance;

public class LoginStep {
    LoginPage loginPage = new LoginPage(getBrowserInstance());

    @Then("^User want to check the login process$")
    public void userWantToLoginProcess() throws InterruptedException{
        loginPage.clickMenu();
    }

    @Then("^User input email or username \"([^\"]*)\"$")
    public void inputUsername(String username) throws InterruptedException{
        loginPage.inputUsername(username);
    }

    @And("^User input password \"([^\"]*)\"$")
    public void inputPassword(String password) throws InterruptedException{
        loginPage.inputPassword(password);
    }

    @When("^User press enter$")
    public void loginProcess() throws InterruptedException{
        loginPage.pressEnter();
    }

    @And("^sistem will show message \"([^\"]*)\"$")
    public void verifiedAlertMessage(String alert) throws InterruptedException {
        loginPage.verifiedAlertMessage(alert);
    }
}
