/**
 * magic-network-monitoring resource
 * @generated from apis/magic-network-monitoring/schema.ts
 *
 * Flow-based network traffic monitoring with configurable alerting rules and VPC flow ingestion
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Ingest VPC flow logs from cloud providers for network visibility and anomaly detection
 */
export class VpcFlows extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Generate authentication token for VPC flow logs export.
   *
   * @see magic-network-monitoring-vpc-flows-generate-authentication-token
   */
  async tokensCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/mnm/vpc-flows/token`);
  }
}

/**
 * Account-level monitoring configuration — sampling rates, thresholds, and notification settings
 */
export class Configs extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists default sampling, router IPs and warp devices for account.
   *
   * @see magic-network-monitoring-configuration-list-account-configuration
   */
  async get(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/mnm/config`);
  }

  /**
   * Create a new network monitoring configuration.
   *
   * @see magic-network-monitoring-configuration-create-account-configuration
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/mnm/config`);
  }

  /**
   * Update an existing network monitoring configuration, requires the entire configuration to be updated at once.
   *
   * @see magic-network-monitoring-configuration-update-an-entire-account-configuration
   */
  async update(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/mnm/config`);
  }

  /**
   * Update fields in an existing network monitoring configuration.
   *
   * @see magic-network-monitoring-configuration-update-account-configuration-fields
   */
  async edit(accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/mnm/config`);
  }

  /**
   * Delete an existing network monitoring configuration.
   *
   * @see magic-network-monitoring-configuration-delete-account-configuration
   */
  async delete(accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/mnm/config`);
  }

  /**
   * Lists default sampling, router IPs, warp devices, and rules for account.
   *
   * @see magic-network-monitoring-configuration-list-rules-and-account-configuration
   */
  async fullGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/mnm/config/full`);
  }
}

/**
 * Monitoring rules that define traffic thresholds and trigger alerts or prefix advertisements
 */
export class Rules extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists network monitoring rules for account.
   *
   * @see magic-network-monitoring-rules-list-rules
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/mnm/rules`);
  }

  /**
   * List a single network monitoring rule for account.
   *
   * @see magic-network-monitoring-rules-get-rule
   */
  async get(ruleId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/mnm/rules/${ruleId}`);
  }

  /**
   * Create network monitoring rules for account. Currently only supports creating a single rule per API request.
   *
   * @see magic-network-monitoring-rules-create-rules
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/mnm/rules`);
  }

  /**
   * Update network monitoring rules for account.
   *
   * @see magic-network-monitoring-rules-update-rules
   */
  async update(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/mnm/rules`);
  }

  /**
   * Update a network monitoring rule for account.
   *
   * @see magic-network-monitoring-rules-update-rule
   */
  async edit(ruleId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/mnm/rules/${ruleId}`);
  }

  /**
   * Delete a network monitoring rule for account.
   *
   * @see magic-network-monitoring-rules-delete-rule
   */
  async delete(ruleId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/mnm/rules/${ruleId}`);
  }

  /**
   * Update advertisement for rule.
   *
   * @see magic-network-monitoring-rules-update-advertisement-for-rule
   */
  async advertisementsEdit(ruleId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/mnm/rules/${ruleId}/advertisement`);
  }
}

/**
 * Flow-based network traffic monitoring with configurable alerting rules and VPC flow ingestion
 */
export class MagicNetworkMonitoring extends APIResource {
  readonly vpcflows: VpcFlows;
  readonly configs: Configs;
  readonly rules: Rules;

  constructor(client: CloudflareClient) {
    super(client);
    this.vpcflows = new VpcFlows(client);
    this.configs = new Configs(client);
    this.rules = new Rules(client);
  }
}
