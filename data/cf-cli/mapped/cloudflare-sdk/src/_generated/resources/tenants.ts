/**
 * tenants resource
 * @generated from apis/tenants/schema.ts
 *
 * Multi-tenant account management — manage tenant accounts, entitlements, and memberships
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Account Types operations
 */
export class AccountTypes extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List of account types available for the Tenant to provision accounts.
   *
   * @see Tenants_validAccountTypes
   */
  async get(tenantId: string): Promise<unknown> {
    return this._client.get<unknown>(`/tenants/${tenantId}/account_types`);
  }
}

/**
 * Accounts operations
 */
export class Accounts extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List of accounts for the Tenant.
   *
   * @see Tenants_listAccounts
   */
  async list(tenantId: string): Promise<unknown> {
    return this._client.get<unknown>(`/tenants/${tenantId}/accounts`);
  }
}

/**
 * Entitlements operations
 */
export class Entitlements extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List of innate entitlements available for the Tenant.
   *
   * @see Tenants_listEntitlements
   */
  async list(tenantId: string): Promise<unknown> {
    return this._client.get<unknown>(`/tenants/${tenantId}/entitlements`);
  }
}

/**
 * Memberships operations
 */
export class Memberships extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List of active members (Cloudflare users) for the Tenant.
   *
   * @see Tenants_listMemberships
   */
  async list(tenantId: string): Promise<unknown> {
    return this._client.get<unknown>(`/tenants/${tenantId}/memberships`);
  }
}

/**
 * Multi-tenant account management — manage tenant accounts, entitlements, and memberships
 */
export class Tenants extends APIResource {
  readonly accounttypes: AccountTypes;
  readonly accounts: Accounts;
  readonly entitlements: Entitlements;
  readonly memberships: Memberships;

  constructor(client: CloudflareClient) {
    super(client);
    this.accounttypes = new AccountTypes(client);
    this.accounts = new Accounts(client);
    this.entitlements = new Entitlements(client);
    this.memberships = new Memberships(client);
  }

  /**
   * Retrieves a Tenant by Tenant ID.
   *
   * @see Tenants_retrieveTenant
   */
  async get(tenantId: string): Promise<unknown> {
    return this._client.get<unknown>(`/tenants/${tenantId}`);
  }
}
