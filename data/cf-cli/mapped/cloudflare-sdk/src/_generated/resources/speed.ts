/**
 * speed resource
 * @generated from apis/speed/schema.ts
 *
 * Observatory speed tests — run Lighthouse audits, track performance trends, and schedule recurring tests
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Scheduled recurring speed tests that automatically run at regular intervals
 */
export class Schedule extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves the test schedule for a page in a specific region.
   *
   * @see speed-get-scheduled-test
   */
  async get(zoneId: string, url: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/speed_api/schedule/${url}`, {
      query: params,
    });
  }

  /**
   * Creates a scheduled test for a page.
   *
   * @see speed-create-scheduled-test
   */
  async create(zoneId: string, url: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/speed_api/schedule/${url}`, {
      query: params,
    });
  }

  /**
   * Deletes a scheduled test for a page.
   *
   * @see speed-delete-test-schedule
   */
  async delete(zoneId: string, url: string, params?: Record<string, unknown>): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/speed_api/schedule/${url}`, {
      query: params,
    });
  }
}

/**
 * Check which speed test regions and configurations are available for your zone
 */
export class Availabilities extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves quota for all plans, as well as the current zone quota.
   *
   * @see speed-get-availabilities
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/speed_api/availabilities`);
  }
}

/**
 * Tested pages with their performance history, trends, and individual test results
 */
export class Pages extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all webpages which have been tested.
   *
   * @see speed-list-pages
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/speed_api/pages`);
  }

  /**
   * Lists the core web vital metrics trend over time for a specific page.
   *
   * @see speed-list-page-trend
   */
  async trend(zoneId: string, url: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/speed_api/pages/${url}/trend`, {
      query: params,
    });
  }

  /**
   * Test history (list of tests) for a specific webpage.
   *
   * @see speed-list-test-history
   */
  async testsList(zoneId: string, url: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/speed_api/pages/${url}/tests`, {
      query: params,
    });
  }

  /**
   * Retrieves the result of a specific test.
   *
   * @see speed-get-test
   */
  async testsGet(zoneId: string, url: string, testId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/speed_api/pages/${url}/tests/${testId}`);
  }

  /**
   * Starts a test for a specific webpage, in a specific region.
   *
   * @see speed-create-test
   */
  async testsCreate(zoneId: string, url: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/speed_api/pages/${url}/tests`);
  }

  /**
   * Deletes all tests for a specific webpage from a specific region. Deleted tests are still counted as part of the quota.
   *
   * @see speed-delete-tests
   */
  async testsDelete(zoneId: string, url: string, params?: Record<string, unknown>): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/speed_api/pages/${url}/tests`, {
      query: params,
    });
  }
}

/**
 * Observatory speed tests — run Lighthouse audits, track performance trends, and schedule recurring tests
 */
export class Speed extends APIResource {
  readonly schedule: Schedule;
  readonly availabilities: Availabilities;
  readonly pages: Pages;

  constructor(client: CloudflareClient) {
    super(client);
    this.schedule = new Schedule(client);
    this.availabilities = new Availabilities(client);
    this.pages = new Pages(client);
  }
}
