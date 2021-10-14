package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ForgotPasswordPage {
    @FindBy(xpath = ".//*[contains(text(), 'Click here')]")
    private WebElement clickMenuForgotPassword;

    @FindBy(xpath = ".//*[contains(@id, 'input-1')]")
    private WebElement fieldEmailForgotPassword;

    @FindBy(xpath = ".//*[contains(@class, 'loginlogin')]")
    private WebElement buttonSubmitForgotPassword;

    @FindBy(xpath = "//*[@id='loginwrapperx']/div[2]/p/a")
    private WebElement clickNoReceiveEmail;

    @FindBy(xpath = ".//*[contains(text(), 'A confirmation email has been sent to your email :')]")
    private WebElement alertForgotPassword;

    private WebDriver browser;

    public ForgotPasswordPage(WebDriver browser){
        this.browser = browser;
        PageFactory.initElements(browser, this);
    }


    public void clickMenuForgotPassword() throws InterruptedException {
        clickMenuForgotPassword.click();
        Thread.sleep(2000);
    }

    public void fillEmailForgotPassword(String email)throws InterruptedException{
        fieldEmailForgotPassword.sendKeys(email);
        Thread.sleep(2000);
    }

    public void clickButtonSubmitForgotPassword()throws InterruptedException{
        buttonSubmitForgotPassword.click();
        Thread.sleep(2000);
    }

    public void alertMessageForgotPassword() throws InterruptedException{
        alertForgotPassword.isDisplayed();
        Thread.sleep(2000);
    }

    public void noReceiveEmail(String em)throws InterruptedException{
        clickNoReceiveEmail.click();
        Thread.sleep(2000);
        fieldEmailForgotPassword.sendKeys(em);
        Thread.sleep(2000);
    }
}
