package com.ubs.common;

import io.restassured.RestAssured;


public class ApiTestBase {
    private static ConfigProvider configProvider = new ConfigProvider();

    protected ApiTestBase() {
        RestAssured.baseURI = configProvider.getURI();
    }
}
