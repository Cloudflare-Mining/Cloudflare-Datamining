/**
 * alerting resource
 * @generated from apis/alerting/schema.ts
 *
 * Notification policies, delivery destinations, silence windows, and alert history
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * List the alert types available for your account based on enabled products
 */
export class AvailableAlerts extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets a list of all alert types for which an account is eligible.
   *
   * @see notification-alert-types-get-alert-types
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/alerting/v3/available_alerts`);
  }
}

/**
 * Delivery mechanisms for alerts — email, PagerDuty integrations, and webhook endpoints
 */
export class Destinations extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get a list of all delivery mechanism types for which an account is eligible.
   *
   * @see notification-mechanism-eligibility-get-delivery-mechanism-eligibility
   */
  async eligibleGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/alerting/v3/destinations/eligible`);
  }

  /**
   * Get a list of all configured PagerDuty services.
   *
   * @see notification-destinations-with-pager-duty-list-pager-duty-services
   */
  async pagerdutyGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/alerting/v3/destinations/pagerduty`);
  }

  /**
   * Creates a new token for integrating with PagerDuty.
   *
   * @see notification-destinations-with-pager-duty-connect-pager-duty
   */
  async pagerdutyCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/alerting/v3/destinations/pagerduty/connect`);
  }

  /**
   * Deletes all the PagerDuty Services connected to the account.
   *
   * @see notification-destinations-with-pager-duty-delete-pager-duty-services
   */
  async pagerdutyDelete(accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/alerting/v3/destinations/pagerduty`);
  }

  /**
   * Links PagerDuty with the account using the integration token.
   *
   * @see notification-destinations-with-pager-duty-connect-pager-duty-token
   */
  async pagerdutyLink(accountId: string, tokenId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/alerting/v3/destinations/pagerduty/connect/${tokenId}`);
  }

  /**
   * Gets a list of all configured webhook destinations.
   *
   * @see notification-webhooks-list-webhooks
   */
  async webhooksList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/alerting/v3/destinations/webhooks`);
  }

  /**
   * Get details for a single webhooks destination.
   *
   * @see notification-webhooks-get-a-webhook
   */
  async webhooksGet(accountId: string, webhookId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/alerting/v3/destinations/webhooks/${webhookId}`);
  }

  /**
   * Creates a new webhook destination.
   *
   * @see notification-webhooks-create-a-webhook
   */
  async webhooksCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/alerting/v3/destinations/webhooks`);
  }

  /**
   * Update a webhook destination.
   *
   * @see notification-webhooks-update-a-webhook
   */
  async webhooksUpdate(webhookId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/alerting/v3/destinations/webhooks/${webhookId}`);
  }

  /**
   * Delete a configured webhook destination.
   *
   * @see notification-webhooks-delete-a-webhook
   */
  async webhooksDelete(webhookId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/alerting/v3/destinations/webhooks/${webhookId}`);
  }
}

/**
 * Browse previously sent alert notifications and their delivery status
 */
export class History extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets a list of history records for notifications sent to an account. The records are displayed for last `x` number of days based on the zone plan (free = 30, pro = 30, biz = 30, ent = 90).
   *
   * @see notification-history-list-history
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/alerting/v3/history`, {
      query: params,
    });
  }
}

/**
 * Notification policies that define which events trigger alerts and where they are delivered
 */
export class Policies extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get a list of all Notification policies.
   *
   * @see notification-policies-list-notification-policies
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/alerting/v3/policies`);
  }

  /**
   * Get details for a single policy.
   *
   * @see notification-policies-get-a-notification-policy
   */
  async get(accountId: string, policyId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/alerting/v3/policies/${policyId}`);
  }

  /**
   * Creates a new Notification policy.
   *
   * @see notification-policies-create-a-notification-policy
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/alerting/v3/policies`);
  }

  /**
   * Update a Notification policy.
   *
   * @see notification-policies-update-a-notification-policy
   */
  async update(accountId: string, policyId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/alerting/v3/policies/${policyId}`);
  }

  /**
   * Delete a Notification policy.
   *
   * @see notification-policies-delete-a-notification-policy
   */
  async delete(accountId: string, policyId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/alerting/v3/policies/${policyId}`);
  }
}

/**
 * Silence windows that temporarily suppress alert notifications during maintenance
 */
export class Silences extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets a list of silences for an account.
   *
   * @see notification-silences-list-silences
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/alerting/v3/silences`);
  }

  /**
   * Gets a specific silence for an account.
   *
   * @see notification-silences-get-silence
   */
  async get(accountId: string, silenceId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/alerting/v3/silences/${silenceId}`);
  }

  /**
   * Creates a new silence for an account.
   *
   * @see notification-silences-create-silences
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/alerting/v3/silences`);
  }

  /**
   * Updates existing silences for an account.
   *
   * @see notification-silences-update-silences
   */
  async update(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/alerting/v3/silences`);
  }

  /**
   * Deletes an existing silence for an account.
   *
   * @see notification-silences-delete-silences
   */
  async delete(accountId: string, silenceId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/alerting/v3/silences/${silenceId}`);
  }
}

/**
 * Notification policies, delivery destinations, silence windows, and alert history
 */
export class Alerting extends APIResource {
  readonly availablealerts: AvailableAlerts;
  readonly destinations: Destinations;
  readonly history: History;
  readonly policies: Policies;
  readonly silences: Silences;

  constructor(client: CloudflareClient) {
    super(client);
    this.availablealerts = new AvailableAlerts(client);
    this.destinations = new Destinations(client);
    this.history = new History(client);
    this.policies = new Policies(client);
    this.silences = new Silences(client);
  }
}
