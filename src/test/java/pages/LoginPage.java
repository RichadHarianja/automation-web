package pages;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import static org.junit.Assert.*;

public class LoginPage {
    @FindBy(xpath = ".//*[contains(text(), 'Log In')]")
    private WebElement loginMenu;



    @FindBy(xpath = ".//*[contains(@id, 'username')]")
    private WebElement usernameField;

    @FindBy(xpath = ".//*[contains(@id, 'password')]")
    private WebElement passwordField;

    @FindBy(xpath = ".//*[contains(@id, 'loginbutton')]")
    private WebElement loginButton;

    @FindBy(xpath = ".//*[contains(text(), 'Username atau password salah. Mohon coba lagi.')]")
    private WebElement alertMessage;


    private WebDriver browser;

    public LoginPage(WebDriver browser){
        this.browser = browser;
        PageFactory.initElements(browser, this);
    }

    public void clickMenu() throws InterruptedException {
        loginMenu.click();
        Thread.sleep(2000);
    }

    public void inputUsername(String username) throws InterruptedException{
        usernameField.sendKeys(username);
        Thread.sleep(2000);
    }

    public void inputPassword(String password) throws InterruptedException{
        passwordField.sendKeys(password);
        Thread.sleep(2000);
    }

    public void pressEnter() throws InterruptedException{
        loginButton.sendKeys(Keys.RETURN);
        Thread.sleep(2000);
    }

    public void verifiedAlertMessage(String alert) throws InterruptedException {
        String message = alertMessage.getText();
        assertEquals(message, alert);
        Thread.sleep(2000);
    }
}
