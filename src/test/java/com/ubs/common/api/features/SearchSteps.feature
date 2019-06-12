Feature: Search

  Scenario: Verify search non-existant information
    When I execute a search query with keyword nothingshouldbethere
    Then the status code is 200
    Then Body is empty

  Scenario Outline: Verify search existant information
    When I execute a search query with keyword <keyword>
    Then the status code is 200
    And Body is not empty
    And Body contains keyword <keyword>

    Examples:
      | keyword  |
      | exchange |
