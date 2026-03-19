Feature: Single resource

  Scenario: Retrieve a single resource successfully
    Given the ReqRes API client is available
    When I request resource 2
    Then the single resource response status should be 200
    And the single resource should contain valid fields