Feature: Get users

  Scenario: Retrieve users from page 2
    Given the ReqRes API client is available
    When I request users from page 2
    Then the response status should be 200
    And the response page should be 2
    And the response should contain a non-empty users list
    And the first user should contain valid fields