package com.ubs.common.gui.steps;

import com.ubs.common.DriverProvider;
import com.ubs.common.gui.pages.HomePage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;

public class HomePageSteps {

    private final String EXPECTED_COOKIE_SETTING = "0-1-2-3";
    private WebDriver driver = DriverProvider.getDriver();
    private HomePage homePage = new HomePage(driver);
    private Actions actions = new Actions(driver);

    @When("User goes to Home Page")
    public void goToHomePage() {
        driver.get("https://www.ubs.com/global/en.html");
    }

    @Then("Cookies agreement popup is displayed")
    public void verifyCookiesPopupIsDisplayed() {
        Assert.assertTrue(homePage.cBoxContent().isDisplayed());
    }

    @When("User clicks on the Accept Cookies button")
    public void clickAcceptCookie() {
        homePage.acceptCookiesButton().click();
    }


    @Then("Cookie setting is updated")
    public void validateCookieSetting() {
        String actualCookieSetting = driver.manage().getCookieNamed("ubs_cookie_settings_1.2").getValue();
        Assert.assertEquals("Cookie was not set correctly", EXPECTED_COOKIE_SETTING, actualCookieSetting);
    }

    @Then("I close browser")
    public void closeBrowser() {
        DriverProvider.closeBrowser();
    }

    @When("I hover mouse over Global Topics button")
    public void moveToExpandMainMenuButton() {
        actions.moveToElement(homePage.expandMainMenuButton()).perform();
    }

    @Then("Main menu is opened")
    public void checkMainMenuIsOpened() {
        Assert.assertTrue(homePage.openMainMenu().isDisplayed());
    }
}