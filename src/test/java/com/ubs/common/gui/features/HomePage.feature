@GuiTest
Feature: HomePage

  Scenario: Verify cookies agreement popup
    When User goes to Home Page
    Then Cookies agreement popup is displayed
    When User clicks on the Accept Cookies button
    Then Cookie setting is updated

  Scenario: Verify main menu
    When User goes to Home Page
    And User clicks on the Accept Cookies button
    And I hover mouse over Global Topics button
    Then Main menu is opened

