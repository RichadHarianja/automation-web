package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class OpenWebPage {
    @FindBy(xpath = ".//*[contains(@id, 'landing-logo')]" )
    private WebElement logo;

    private WebDriver browser;
    public OpenWebPage(WebDriver browser){
        this.browser = browser;
        PageFactory.initElements(browser, this);
    }

    public void logo() throws InterruptedException {
        logo.isDisplayed();
        Thread.sleep(2000);
    }
}
