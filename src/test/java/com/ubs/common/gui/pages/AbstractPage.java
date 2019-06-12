package com.ubs.common.gui.pages;

import org.openqa.selenium.WebDriver;

public class AbstractPage {

    public WebDriver driver;

    AbstractPage(WebDriver webDriver) {
        driver = webDriver;
    }
}
