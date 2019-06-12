package com.ubs.common.gui.pages;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class HomePage extends AbstractPage {

    private final String CBOX_CONTENT = "cboxLoadedContent";
    private final String CBOX_IFRAME = ".cboxIframe";
    private final String ACCEPT_COOKIES_BUTTON = "button.actionbutton__link";

    private final String HEADER_MENU_BUTTON = "h3.menu__hl--icon";
    private final String HEADER_MENU_OPEN = "//div[@class='menu__wrapper menu-is-open']";

    public HomePage(WebDriver webDriver) {
        super(webDriver);
    }

    private WebElement findElementInIframeByCssSelector(WebElement iFrame, String cssSelector) {
        driver.switchTo().defaultContent();
        driver.switchTo().frame(iFrame);
        return driver.findElement(By.cssSelector(cssSelector));
    }

    public WebElement cBoxContent() {
        return driver.findElement(By.id(CBOX_CONTENT));
    }

    public WebElement cBoxIframe() {
        driver.switchTo().defaultContent();
        return driver.findElement(By.cssSelector(CBOX_IFRAME));
    }

    public WebElement acceptCookiesButton() {
        return findElementInIframeByCssSelector(cBoxIframe(), ACCEPT_COOKIES_BUTTON);
    }

    public WebElement expandMainMenuButton() {
        return driver.findElement(By.cssSelector(HEADER_MENU_BUTTON));
    }

    public WebElement openMainMenu() {
        return driver.findElement(By.xpath(HEADER_MENU_OPEN));
    }


}