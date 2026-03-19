import axios from 'axios';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { ReqResClient } from '../../src/client/reqresClient';

const feature = loadFeature('./tests/features/register.feature');

defineFeature(feature, (test) => {
  let client: ReqResClient;
  let successResponse: any;
  let errorResponse: any;

  test('Register successfully', ({ given, when, then, and }) => {
    given('the ReqRes API client is available', () => {
      client = new ReqResClient();
      successResponse = undefined;
    });

    when(/^I register with email "([^"]*)" and password "([^"]*)"$/, async (email: string, password: string) => {
      successResponse = await client.register({ email, password });
    });

    then('the register response status should be 200', () => {
      expect(successResponse.status).toBe(200);
    });

    and('the register response should contain id and token', () => {
      expect(successResponse.data.id).toEqual(expect.any(Number));
      expect(successResponse.data.token).toEqual(expect.any(String));
    });
  });

  test('Register fails when password is missing', ({ given, when, then, and }) => {
    given('the ReqRes API client is available', () => {
      client = new ReqResClient();
      errorResponse = undefined;
    });

    when(/^I register with email "([^"]*)" and password "([^"]*)"$/, async (email: string, password: string) => {
      try {
        await client.register({ email, password });
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          errorResponse = error.response;
          return;
        }
        throw error;
      }
    });

    then('the register error status should be 400', () => {
      expect(errorResponse.status).toBe(400);
    });

    and(/^the register error message should be "([^"]*)"$/, (message: string) => {
      expect(errorResponse.data.error).toBe(message);
    });
  });
});