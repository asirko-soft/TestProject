package com.ubs.common.api;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        monochrome = true
        , features = {"src/test/java/com/ubs/common/api/features/"}
        , tags = {""}
        , glue = {"com.ubs.common.api.steps"}
)

public class CucumberTestRunner {

}
