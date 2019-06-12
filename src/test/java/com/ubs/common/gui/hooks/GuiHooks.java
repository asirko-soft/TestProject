package com.ubs.common.gui.hooks;

import com.ubs.common.gui.steps.HomePageSteps;
import cucumber.api.java.After;

public class GuiHooks {

    @After(value = "@GuiTest", order = 0)
    public void afterScenario() {
        new HomePageSteps().closeBrowser();
    }
}
