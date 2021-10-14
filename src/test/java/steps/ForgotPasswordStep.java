package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.ForgotPasswordPage;

import static setups.BrowserPool.getBrowserInstance;

public class ForgotPasswordStep {
    ForgotPasswordPage forgotPasswordPage = new ForgotPasswordPage(getBrowserInstance());

    @Then("^User want to click menu forgot password$")
    public void userWantToLoginProcess() throws InterruptedException{
        forgotPasswordPage.clickMenuForgotPassword();
    }

    @Then("^User input email \"([^\"]*)\"$")
    public void inputEmail(String email)throws InterruptedException{
        forgotPasswordPage.fillEmailForgotPassword(email);
    }

    @When("^User click button submit$")
    public void clickSubmitBotton() throws InterruptedException{
        forgotPasswordPage.clickButtonSubmitForgotPassword();
    }

    @Then("^sistem will show alerts$")
    public void showMessagesError()throws InterruptedException{
        forgotPasswordPage.alertMessageForgotPassword();
    }

    @Then("^User didn't receive the email \"([^\"]*)\"$")
    public void noReceiveEmail(String em)throws InterruptedException{
        forgotPasswordPage.noReceiveEmail(em);
    }

}
