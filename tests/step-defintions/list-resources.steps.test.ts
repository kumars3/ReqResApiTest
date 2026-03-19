import { defineFeature, loadFeature } from 'jest-cucumber';
import { ReqResClient } from '../../src/client/reqresClient';

const feature = loadFeature('./tests/features/list-resources.feature');

defineFeature(feature, (test) => {
  let client: ReqResClient;
  let response: any;

  test('Retrieve resources successfully', ({ given, when, then, and }) => {
    given('the ReqRes API client is available', () => {
      client = new ReqResClient();
      response = undefined;
    });

    when('I request the resource list', async () => {
      response = await client.listResources();
    });

    then('the resources response status should be 200', () => {
      expect(response.status).toBe(200);
    });

    and('the resources list should not be empty', () => {
      expect(Array.isArray(response.data.data)).toBe(true);
      expect(response.data.data.length).toBeGreaterThan(0);
    });

    and('the first resource should contain valid fields', () => {
      expect(response.data.data[0]).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          year: expect.any(Number),
          color: expect.any(String),
          pantone_value: expect.any(String)
        })
      );
    });
  });
});