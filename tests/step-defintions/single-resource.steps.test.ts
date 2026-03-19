import { defineFeature, loadFeature } from 'jest-cucumber';
import { ReqResClient } from '../../src/client/reqresClient';

const feature = loadFeature('./tests/features/single-resource.feature');

defineFeature(feature, (test) => {
  let client: ReqResClient;
  let response: any;

  test('Retrieve a single resource successfully', ({ given, when, then, and }) => {
    given('the ReqRes API client is available', () => {
      client = new ReqResClient();
      response = undefined;
    });

    when(/^I request resource (\d+)$/, async (id: string) => {
      response = await client.getSingleResource(Number(id));
    });

    then('the single resource response status should be 200', () => {
      expect(response.status).toBe(200);
    });

    and('the single resource should contain valid fields', () => {
      expect(response.data.data).toEqual(
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