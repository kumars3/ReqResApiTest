import { defineFeature, loadFeature } from 'jest-cucumber';
import { ReqResClient } from '../../src/client/reqresClient';

const feature = loadFeature('./tests/features/delete-user.feature');

defineFeature(feature, (test) => {
  let client: ReqResClient;
  let response: any;

  test('Delete a user successfully', ({ given, when, then }) => {
    given('the ReqRes API client is available', () => {
      client = new ReqResClient();
      response = undefined;
    });

    when(/^I delete user (\d+)$/, async (id: string) => {
      response = await client.deleteUser(Number(id));
    });

    then('the delete response status should be 204', () => {
      expect(response.status).toBe(204);
      expect([undefined, '']).toContain(response.data);
    });
  });
});