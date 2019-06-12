package com.ubs.common.api.steps;

import com.ubs.common.ApiTestBase;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import org.hamcrest.Matchers;
import org.junit.Assert;

import static io.restassured.RestAssured.when;

public class SearchSteps extends ApiTestBase {
    private Response response;
    private ValidatableResponse json;
    private RequestSpecification request;
    private final String SEARCH_ENDPOINT = "/bin/ubs/searchservlet";

    @When("I execute a search query with keyword (.*)")
    public void executeSearchQueryByKeyword(String keyWord) {
        String path = SEARCH_ENDPOINT + "?term=" + keyWord + "&_charset_=UTF-8&solution=all&contentsrc=desktop";
        response = when().get(path);
        System.out.println("response: " + response.prettyPrint());
    }

    @Then("the status code is (.*)")
    public void validateStatusCode(int statusCode) {
        json = response.then().statusCode(statusCode).log().ifError();
    }

    @And("Body is not empty")
    public void isNotEmpty() {
        json.body("isEmpty()", Matchers.is(false));
    }

    @And("Body is empty")
    public void isEmpty() {
        json.body("isEmpty()", Matchers.is(true));
    }

    @And("Body contains keyword (.*)")
    public void containsKeyword(String keyWord) {
        String bodyString = response.getBody().asString();
        Assert.assertTrue(bodyString.contains(keyWord));
    }
}