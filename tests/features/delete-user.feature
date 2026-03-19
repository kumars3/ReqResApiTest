Feature: Delete user

  Scenario: Delete a user successfully
    Given the ReqRes API client is available
    When I delete user 2
    Then the delete response status should be 204