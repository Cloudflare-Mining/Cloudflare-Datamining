/**
 * billing resource
 * @generated from apis/billing/schema.ts
 *
 * Account billing profiles and usage data for Cloudflare subscriptions and add-on services
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Billing profile with payment method, address, and invoice preferences
 */
export class Profiles extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets the current billing profile for the account.
   *
   * @see account-billing-profile-(-deprecated)-billing-profile-details
   */
  async get(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/billing/profile`);
  }
}

/**
 * Metered usage data for billed services — requests, bandwidth, and feature consumption
 */
export class Usage extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns billable usage data for PayGo (self-serve) accounts. When no query parameters are provided, returns usage for the current billing period. This endpoint is currently in beta and access is restricted to select accounts.
   *
   * @see billable-usage-get-paygo-account-usage
   */
  async paygo(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/billing/usage/paygo`, {
      query: params,
    });
  }
}

/**
 * Account billing profiles and usage data for Cloudflare subscriptions and add-on services
 */
export class Billing extends APIResource {
  readonly profiles: Profiles;
  readonly usage: Usage;

  constructor(client: CloudflareClient) {
    super(client);
    this.profiles = new Profiles(client);
    this.usage = new Usage(client);
  }
}
