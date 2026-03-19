Feature: Register

  Scenario: Register successfully
    Given the ReqRes API client is available
    When I register with email "eve.holt@reqres.in" and password "pistol"
    Then the register response status should be 200
    And the register response should contain id and token

  Scenario: Register fails when password is missing
    Given the ReqRes API client is available
    When I register with email "sydney@fife" and password ""
    Then the register error status should be 400
    And the register error message should be "Missing password"