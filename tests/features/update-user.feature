Feature: Update user

  Scenario: Update a user with PUT
    Given the ReqRes API client is available
    When I update user 2 with PUT using name "morpheus" and job "zion resident"
    Then the update response status should be 200
    And the updated user name should be "morpheus"
    And the updated user job should be "zion resident"
    And the update response should contain updatedAt

  Scenario: Update a user with PATCH
    Given the ReqRes API client is available
    When I update user 2 with PATCH using name "morpheus" and job "senior tester"
    Then the patch response status should be 200
    And the patched user name should be "morpheus"
    And the patched user job should be "senior tester"
    And the patch response should contain updatedAt