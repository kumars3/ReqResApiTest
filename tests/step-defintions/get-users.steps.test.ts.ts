import { defineFeature, loadFeature } from 'jest-cucumber';
import { ReqResClient } from '../../src/client/reqresClient';

const feature = loadFeature('./tests/features/get-users.feature');

defineFeature(feature, (test) => {
  let client: ReqResClient;
  let response: Awaited<ReturnType<ReqResClient['getUsers']>>;

  test('Retrieve users from page 2', ({ given, when, then, and }) => {
    given('the ReqRes API client is available', () => {
      client = new ReqResClient();
    });

    when('I request users from page 2', async () => {
      response = await client.getUsers(2);
    });

    then('the response status should be 200', () => {
      expect(response.status).toBe(200);
    });

    and('the response page should be 2', () => {
      expect(response.data.page).toBe(2);
    });

    and('the response should contain a non-empty users list', () => {
      expect(Array.isArray(response.data.data)).toBe(true);
      expect(response.data.data.length).toBeGreaterThan(0);
    });

    and('the first user should contain valid fields', () => {
      expect(response.data.data[0]).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          email: expect.any(String),
          first_name: expect.any(String),
          last_name: expect.any(String),
          avatar: expect.any(String),
        })
      );
    });
  });
});