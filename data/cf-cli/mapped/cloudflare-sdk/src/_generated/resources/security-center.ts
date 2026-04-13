/**
 * security-center resource
 * @generated from apis/security-center/schema.ts
 *
 * Security posture dashboard — view and manage security insights, misconfigurations, and vulnerabilities
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Security findings and recommendations across your account — DNS, SSL, WAF misconfigurations, etc.
 */
export class Insights extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all Security Center insights for the account, showing security findings and recommendations.
   *
   * @see get-security-center-insights
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/security-center/insights`, {
      query: params,
    });
  }

  /**
   * Archives a Security Center insight for an account, removing it from the active insights list while preserving historical data.
   *
   * @see archive-security-center-insight
   */
  async dismiss(accountId: string, issueId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/security-center/insights/${issueId}/dismiss`);
  }

  /**
   * Retrieves Security Center insight counts aggregated by classification class.
   *
   * @see get-security-center-insight-counts-by-class
   */
  async classGet(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/security-center/insights/class`, {
      query: params,
    });
  }

  /**
   * Retrieves Security Center insight counts aggregated by severity level (critical, high, medium, low).
   *
   * @see get-security-center-insight-counts-by-severity
   */
  async severityGet(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/security-center/insights/severity`, {
      query: params,
    });
  }

  /**
   * Retrieves Security Center insight counts aggregated by insight type.
   *
   * @see get-security-center-insight-counts-by-type
   */
  async typeGet(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/security-center/insights/type`, {
      query: params,
    });
  }
}

/**
 * Insights (additional) operations
 */
export class InsightsExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns the full context payload for an insight. This endpoint is used for insights with large payloads that are not included inline in the list response.
   *
   * @see get-security-center-insight-context
   */
  async contextGet(accountId: string, issueId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/security-center/insights/${issueId}/context`);
  }

  /**
   * Lists Security Center insights for a specific zone, showing zone-level security findings.
   *
   * @see get-zone-security-center-insights
   */
  async get(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/security-center/insights`, {
      query: params,
    });
  }

  /**
   * Retrieves zone-specific Security Center insight counts aggregated by classification class.
   *
   * @see get-zone-security-center-insight-counts-by-class
   */
  async classGet(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/security-center/insights/class`, {
      query: params,
    });
  }

  /**
   * Retrieves zone-specific Security Center insight counts aggregated by severity level.
   *
   * @see get-zone-security-center-insight-counts-by-severity
   */
  async severityGet(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/security-center/insights/severity`, {
      query: params,
    });
  }

  /**
   * Retrieves zone-specific Security Center insight counts aggregated by insight type.
   *
   * @see get-zone-security-center-insight-counts-by-type
   */
  async typeGet(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/security-center/insights/type`, {
      query: params,
    });
  }

  /**
   * Archives a zone-specific Security Center insight, removing it from the active zone insights while preserving historical data.
   *
   * @see archive-zone-security-center-insight
   */
  async dismissUpdate(zoneId: string, issueId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/security-center/insights/${issueId}/dismiss`);
  }
}

/**
 * Security posture dashboard — view and manage security insights, misconfigurations, and vulnerabilities
 */
export class SecurityCenter extends APIResource {
  readonly insights: Insights;
  readonly insightsextra: InsightsExtra;

  constructor(client: CloudflareClient) {
    super(client);
    this.insights = new Insights(client);
    this.insightsextra = new InsightsExtra(client);
  }
}
