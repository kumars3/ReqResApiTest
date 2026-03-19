Feature: Login

  Scenario: Login successfully
    Given the ReqRes API client is available
    When I login with email "eve.holt@reqres.in" and password "cityslicka"
    Then the login response status should be 200
    And the login response should contain a token

  Scenario: Login fails when password is missing
    Given the ReqRes API client is available
    When I login with email "peter@klaven" and password ""
    Then the login error status should be 400
    And the login error message should be "Missing password"