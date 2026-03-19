Feature: List resources

  Scenario: Retrieve resources successfully
    Given the ReqRes API client is available
    When I request the resource list
    Then the resources response status should be 200
    And the resources list should not be empty
    And the first resource should contain valid fields