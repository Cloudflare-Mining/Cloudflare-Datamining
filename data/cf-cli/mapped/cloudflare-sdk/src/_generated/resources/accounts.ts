/**
 * accounts resource
 * @generated from apis/accounts/schema.ts
 *
 * Account settings, members, roles, subscriptions, and API tokens for your Cloudflare account
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Invite, inspect, update, and remove users who have access to this account
 */
export class Members extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List all members of an account.
   *
   * @see account-members-list-members
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/members`, {
      query: params,
    });
  }

  /**
   * Get information about a specific member of an account.
   *
   * @see account-members-member-details
   */
  async get(memberId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/members/${memberId}`);
  }

  /**
   * Add a user to the list of members for this account.
   *
   * @see account-members-add-member
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/members`);
  }

  /**
   * Modify an account member.
   *
   * @see account-members-update-member
   */
  async update(memberId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/members/${memberId}`);
  }

  /**
   * Remove a member from an account.
   *
   * @see account-members-remove-member
   */
  async delete(memberId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/members/${memberId}`);
  }
}

/**
 * View the roles available for assigning to account members, each defining a set of permissions
 */
export class Roles extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get all available roles for an account.
   *
   * @see account-roles-list-roles
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/roles`, {
      query: params,
    });
  }

  /**
   * Get information about a specific role for an account.
   *
   * @see account-roles-role-details
   */
  async get(roleId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/roles/${roleId}`);
  }
}

/**
 * View and manage plan subscriptions attached to this account
 */
export class Subscriptions extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all of an account's subscriptions.
   *
   * @see account-subscriptions-list-subscriptions
   */
  async get(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/subscriptions`);
  }

  /**
   * Creates an account subscription.
   *
   * @see account-subscriptions-create-subscription
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/subscriptions`);
  }

  /**
   * Updates an account subscription.
   *
   * @see account-subscriptions-update-subscription
   */
  async update(subscriptionIdentifier: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/subscriptions/${subscriptionIdentifier}`);
  }

  /**
   * Deletes an account's subscription.
   *
   * @see account-subscriptions-delete-subscription
   */
  async delete(subscriptionIdentifier: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/subscriptions/${subscriptionIdentifier}`);
  }
}

/**
 * Create and manage scoped API tokens for programmatic access to the Cloudflare API
 */
export class Tokens extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List all Account Owned API tokens created for this account.
   *
   * @see account-api-tokens-list-tokens
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/tokens`, {
      query: params,
    });
  }

  /**
   * Get information about a specific Account Owned API token.
   *
   * @see account-api-tokens-token-details
   */
  async get(accountId: string, tokenId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/tokens/${tokenId}`);
  }

  /**
   * Create a new Account Owned API token.
   *
   * @see account-api-tokens-create-token
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/tokens`);
  }

  /**
   * Update an existing token.
   *
   * @see account-api-tokens-update-token
   */
  async update(accountId: string, tokenId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/tokens/${tokenId}`);
  }

  /**
   * Destroy an Account Owned API token.
   *
   * @see account-api-tokens-delete-token
   */
  async delete(accountId: string, tokenId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/tokens/${tokenId}`);
  }

  /**
   * Test whether a token works.
   *
   * @see account-api-tokens-verify-token
   */
  async verify(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/tokens/verify`);
  }

  /**
   * Find all available permission groups for Account Owned API Tokens
   *
   * @see account-api-tokens-list-permission-groups
   */
  async permissionGroupsList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/tokens/permission_groups`, {
      query: params,
    });
  }

  /**
   * Find all available permission groups for Account Owned API Tokens
   *
   * @see account-api-tokens-list-permission-groups
   */
  async permissionGroupsGet(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/tokens/permission_groups`, {
      query: params,
    });
  }

  /**
   * Roll the Account Owned API token secret.
   *
   * @see account-api-tokens-roll-token
   */
  async valueUpdate(accountId: string, tokenId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/tokens/${tokenId}/value`);
  }
}

/**
 * Retrieve audit log entries that record actions taken on the account
 */
export class Logs extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets a list of audit logs for an account.
   *
   * @see audit-logs-v2-get-account-audit-logs
   */
  async auditList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/logs/audit`, {
      query: params,
    });
  }
}

/**
 * Applications operations
 */
export class Applications extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get applications with different filters.
   *
   * @see getApplications
   */
  async getApplications(accountid: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountid}/resource-library/applications`, {
      query: params,
    });
  }

  /**
   * Create application.
   *
   * @see createApplication
   */
  async create(accountid: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountid}/resource-library/applications`);
  }

  /**
   * Get application by ID.
   *
   * @see getApplicationById
   */
  async getById(accountid: string, id: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountid}/resource-library/applications/${id}`);
  }

  /**
   * Update application version.
   *
   * @see updateApplicationVersion
   */
  async update(accountid: string, id: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountid}/resource-library/applications/${id}`);
  }
}

/**
 * Categories operations
 */
export class Categories extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get all application categories.
   *
   * @see getCategories
   */
  async getCategories(accountid: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountid}/resource-library/categories`);
  }

  /**
   * Get application category by ID.
   *
   * @see getCategoryById
   */
  async getById(accountid: string, id: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountid}/resource-library/categories/${id}`);
  }
}

/**
 * Account settings, members, roles, subscriptions, and API tokens for your Cloudflare account
 */
export class Accounts extends APIResource {
  readonly members: Members;
  readonly roles: Roles;
  readonly subscriptions: Subscriptions;
  readonly tokens: Tokens;
  readonly logs: Logs;
  readonly applications: Applications;
  readonly categories: Categories;

  constructor(client: CloudflareClient) {
    super(client);
    this.members = new Members(client);
    this.roles = new Roles(client);
    this.subscriptions = new Subscriptions(client);
    this.tokens = new Tokens(client);
    this.logs = new Logs(client);
    this.applications = new Applications(client);
    this.categories = new Categories(client);
  }

  /**
   * List all accounts you have ownership or verified access to.
   *
   * @see accounts-list-accounts
   */
  async list(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts`, {
      query: params,
    });
  }

  /**
   * Get information about a specific account that you are a member of.
   *
   * @see accounts-account-details
   */
  async get(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}`);
  }

  /**
   * Create an account (only available for tenant admins at this time)
   *
   * @see account-creation
   */
  async create(): Promise<unknown> {
    return this._client.post<unknown>(`/accounts`);
  }

  /**
   * Update an existing account.
   *
   * @see accounts-update-account
   */
  async update(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}`);
  }

  /**
   * Delete a specific account (only available for tenant admins at this time). This is a permanent operation that will delete any zones or other resources under the account
   *
   * @see account-deletion
   */
  async delete(accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}`);
  }

  /**
   * Batch move a collection of accounts to a specific organization. ⚠️ Not implemented.
   *
   * @see Accounts_batchMoveAccounts
   */
  async move(): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/move`);
  }

  /**
   * Move an account within an organization hierarchy or an account outside an organization. (Currently in Closed Beta - see https://developers.cloudflare.com/fundamentals/organizations/)
   *
   * @see Accounts_moveAccounts
   */
  async createExtra(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/move`);
  }

  /**
   * Test Open API upload
   *
   * @see openapi_Test
   */
  async test(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/openapi/test`);
  }

  /**
   * Retrieves the profile information for a specific Cloudflare account, including organization details, settings, and metadata. This endpoint is commonly used to verify account access and retrieve account-level configuration.
   *
   * @see Accounts_getAccountProfile
   */
  async getExtra(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/profile`);
  }

  /**
   * Updates the profile information for a Cloudflare account. Allows modification of account-level settings and organizational details. Requires Account Settings Write permission.
   *
   * @see Accounts_modifyAccountProfile
   */
  async updateExtra(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/profile`);
  }
}
