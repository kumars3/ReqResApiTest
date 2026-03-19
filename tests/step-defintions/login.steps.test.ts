import axios from 'axios';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { ReqResClient } from '../../src/client/reqresClient';

const feature = loadFeature('./tests/features/login.feature');

defineFeature(feature, (test) => {
  let client: ReqResClient;
  let successResponse: Awaited<ReturnType<ReqResClient['login']>> | undefined;
  let errorResponse: any;

  test('Login successfully', ({ given, when, then, and }) => {
    given('the ReqRes API client is available', () => {
      client = new ReqResClient();
      successResponse = undefined;
    });

    when(/^I login with email "([^"]*)" and password "([^"]*)"$/, async (email: string, password: string) => {
      successResponse = await client.login({ email, password });
    });

    then('the login response status should be 200', () => {
      expect(successResponse?.status).toBe(200);
    });

    and('the login response should contain a token', () => {
      expect(successResponse?.data.token).toEqual(expect.any(String));
    });
  });

  test('Login fails when password is missing', ({ given, when, then, and }) => {
    given('the ReqRes API client is available', () => {
      client = new ReqResClient();
      errorResponse = undefined;
    });

    when(/^I login with email "([^"]*)" and password "([^"]*)"$/, async (email: string, password: string) => {
      try {
        await client.login({ email, password });
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          errorResponse = error.response;
          return;
        }
        throw error;
      }
    });

    then('the login error status should be 400', () => {
      expect(errorResponse.status).toBe(400);
    });

    and(/^the login error message should be "([^"]*)"$/, (message: string) => {
      expect(errorResponse.data.error).toBe(message);
    });
  });
});