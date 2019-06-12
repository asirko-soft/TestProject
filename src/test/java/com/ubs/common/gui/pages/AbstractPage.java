package com.ubs.common.gui.pages;

import org.openqa.selenium.WebDriver;

class AbstractPage {

    WebDriver driver;

    AbstractPage(WebDriver webDriver) {
        driver = webDriver;
    }
}
