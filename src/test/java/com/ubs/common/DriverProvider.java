package com.ubs.common;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.util.concurrent.TimeUnit;


public class DriverProvider {

    private static final long IMPLICIT_WAIT_STANDARD = 60;
    private static final long PAGE_LOAD_STANDARD = 90;
    private static WebDriver driver;

    private static void openBrowser() {


        WebDriverManager.chromedriver().setup();

        ChromeOptions chromeOptions = new ChromeOptions();
        chromeOptions.addArguments("--disable-dev-shm-usage"
                , "--no-sandbox"
                , "--verbose"
                , "--ignore-certificate-errors"
                , "disable-infobars"
                , "--disable-web-security"
                , "window-size=1280,1080"
                , "--allow-running-insecure-content");
        driver = new ChromeDriver(chromeOptions);

        driver.manage().timeouts().implicitlyWait(IMPLICIT_WAIT_STANDARD, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(PAGE_LOAD_STANDARD, TimeUnit.SECONDS);
    }

    public static void closeBrowser() {
        if (driver != null) {
            driver.quit();
            driver = null;
        }
    }

    public static WebDriver getDriver() {
        if (driver == null) {
            openBrowser();
        }
        return driver;

    }
}
