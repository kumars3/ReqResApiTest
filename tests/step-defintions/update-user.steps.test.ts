import { defineFeature, loadFeature } from 'jest-cucumber';
import { ReqResClient } from '../../src/client/reqresClient';

const feature = loadFeature('./tests/features/update-user.feature');

defineFeature(feature, (test) => {
  let client: ReqResClient;
  let response: any;

  test('Update a user with PUT', ({ given, when, then, and }) => {
    given('the ReqRes API client is available', () => {
      client = new ReqResClient();
      response = undefined;
    });

    when(
      /^I update user (\d+) with PUT using name "([^"]*)" and job "([^"]*)"$/,
      async (id: string, name: string, job: string) => {
        response = await client.updateUserPut(Number(id), { name, job });
      }
    );

    then('the update response status should be 200', () => {
      expect(response.status).toBe(200);
    });

    and(/^the updated user name should be "([^"]*)"$/, (name: string) => {
      expect(response.data.name).toBe(name);
    });

    and(/^the updated user job should be "([^"]*)"$/, (job: string) => {
      expect(response.data.job).toBe(job);
    });

    and('the update response should contain updatedAt', () => {
      expect(response.data.updatedAt).toEqual(expect.any(String));
    });
  });

  test('Update a user with PATCH', ({ given, when, then, and }) => {
    given('the ReqRes API client is available', () => {
      client = new ReqResClient();
      response = undefined;
    });

    when(
      /^I update user (\d+) with PATCH using name "([^"]*)" and job "([^"]*)"$/,
      async (id: string, name: string, job: string) => {
        response = await client.updateUserPatch(Number(id), { name, job });
      }
    );

    then('the patch response status should be 200', () => {
      expect(response.status).toBe(200);
    });

    and(/^the patched user name should be "([^"]*)"$/, (name: string) => {
      expect(response.data.name).toBe(name);
    });

    and(/^the patched user job should be "([^"]*)"$/, (job: string) => {
      expect(response.data.job).toBe(job);
    });

    and('the patch response should contain updatedAt', () => {
      expect(response.data.updatedAt).toEqual(expect.any(String));
    });
  });
});