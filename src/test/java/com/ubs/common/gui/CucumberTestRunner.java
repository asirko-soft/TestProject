package com.ubs.common.gui;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        monochrome = true
        , features = {"src/test/java/com/ubs/common/gui/features/"}
        , tags = {""}
        , glue = {"com.ubs.common.gui.steps","com.ubs.common.gui.hooks"}
)

public class CucumberTestRunner {

}
