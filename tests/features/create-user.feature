Feature: Create user

  Scenario: Create a new user successfully
    Given the ReqRes API client is available
    When I create a user with name "morpheus" and job "leader"
    Then the create user response status should be 201
    And the created user name should be "morpheus"
    And the created user job should be "leader"
    And the create user response should contain id and createdAt