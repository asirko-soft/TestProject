package com.ubs.common.gui.pages;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class HomePage extends AbstractPage {

    public HomePage(WebDriver webDriver) {
        super(webDriver);
    }

    private WebElement findElementInIframeByCssSelector(WebElement iFrame, String cssSelector) {
        driver.switchTo().defaultContent();
        driver.switchTo().frame(iFrame);
        return driver.findElement(By.cssSelector(cssSelector));
    }

    public WebElement cBoxContent() {
        String CBOX_CONTENT = "cboxLoadedContent";
        return driver.findElement(By.id(CBOX_CONTENT));
    }

    private WebElement cBoxIframe() {
        driver.switchTo().defaultContent();
        String CBOX_IFRAME = ".cboxIframe";
        return driver.findElement(By.cssSelector(CBOX_IFRAME));
    }

    public WebElement acceptCookiesButton() {
        String ACCEPT_COOKIES_BUTTON = "button.actionbutton__link";
        return findElementInIframeByCssSelector(cBoxIframe(), ACCEPT_COOKIES_BUTTON);
    }

    public WebElement expandMainMenuButton() {
        String HEADER_MENU_BUTTON = "h3.menu__hl--icon";
        return driver.findElement(By.cssSelector(HEADER_MENU_BUTTON));
    }

    public WebElement openMainMenu() {
        String HEADER_MENU_OPEN = "//div[@class='menu__wrapper menu-is-open']";
        return driver.findElement(By.xpath(HEADER_MENU_OPEN));
    }


}