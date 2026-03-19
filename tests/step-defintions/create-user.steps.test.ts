import { defineFeature, loadFeature } from 'jest-cucumber';
import { ReqResClient } from '../../src/client/reqresClient';

const feature = loadFeature('./tests/features/create-user.feature');

defineFeature(feature, (test) => {
  let client: ReqResClient;
  let response: Awaited<ReturnType<ReqResClient['createUser']>>;

  test('Create a new user successfully', ({ given, when, then, and }) => {
    given('the ReqRes API client is available', () => {
      client = new ReqResClient();
    });

    when(/^I create a user with name "([^"]*)" and job "([^"]*)"$/, async (name: string, job: string) => {
      response = await client.createUser({ name, job });
    });

    then('the create user response status should be 201', () => {
      expect(response.status).toBe(201);
    });

    and(/^the created user name should be "([^"]*)"$/, (name: string) => {
      expect(response.data.name).toBe(name);
    });

    and(/^the created user job should be "([^"]*)"$/, (job: string) => {
      expect(response.data.job).toBe(job);
    });

    and('the create user response should contain id and createdAt', () => {
      expect(response.data.id).toEqual(expect.any(String));
      expect(response.data.createdAt).toEqual(expect.any(String));
    });
  });
});