/**
 * rum resource
 * @generated from apis/rum/schema.ts
 *
 * Real User Measurement (Web Analytics) — track page loads, Core Web Vitals, and visitor metrics
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Web Analytics sites — register domains and get the JavaScript beacon snippet
 */
export class SiteInfo extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all Web Analytics sites of an account.
   *
   * @see web-analytics-list-sites
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/rum/site_info/list`, {
      query: params,
    });
  }

  /**
   * Retrieves a Web Analytics site.
   *
   * @see web-analytics-get-site
   */
  async get(accountId: string, siteId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/rum/site_info/${siteId}`);
  }

  /**
   * Creates a new Web Analytics site.
   *
   * @see web-analytics-create-site
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/rum/site_info`);
  }

  /**
   * Updates an existing Web Analytics site.
   *
   * @see web-analytics-update-site
   */
  async update(accountId: string, siteId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/rum/site_info/${siteId}`);
  }

  /**
   * Deletes an existing Web Analytics site.
   *
   * @see web-analytics-delete-site
   */
  async delete(accountId: string, siteId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/rum/site_info/${siteId}`);
  }
}

/**
 * Rules that control which pages and paths are tracked by Web Analytics
 */
export class Rules extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all the rules in a Web Analytics ruleset.
   *
   * @see web-analytics-list-rules
   */
  async list(accountId: string, rulesetId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/rum/v2/${rulesetId}/rules`);
  }

  /**
   * Creates a new rule in a Web Analytics ruleset.
   *
   * @see web-analytics-create-rule
   */
  async create(accountId: string, rulesetId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/rum/v2/${rulesetId}/rule`);
  }

  /**
   * Updates a rule in a Web Analytics ruleset.
   *
   * @see web-analytics-update-rule
   */
  async update(accountId: string, rulesetId: string, ruleId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/rum/v2/${rulesetId}/rule/${ruleId}`);
  }

  /**
   * Deletes an existing rule from a Web Analytics ruleset.
   *
   * @see web-analytics-delete-rule
   */
  async delete(accountId: string, rulesetId: string, ruleId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/rum/v2/${rulesetId}/rule/${ruleId}`);
  }

  /**
   * Modifies one or more rules in a Web Analytics ruleset with a single request.
   *
   * @see web-analytics-modify-rules
   */
  async bulkCreate(accountId: string, rulesetId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/rum/v2/${rulesetId}/rules`);
  }
}

/**
 * Real User Measurement (Web Analytics) — track page loads, Core Web Vitals, and visitor metrics
 */
export class Rum extends APIResource {
  readonly siteinfo: SiteInfo;
  readonly rules: Rules;

  constructor(client: CloudflareClient) {
    super(client);
    this.siteinfo = new SiteInfo(client);
    this.rules = new Rules(client);
  }
}
