package com.ubs.common;

import io.restassured.RestAssured;


public class ApiTestBase {
    static ConfigProvider configProvider = new ConfigProvider();

    public ApiTestBase() {
        RestAssured.baseURI = configProvider.getURI();
    }
}
