/**
 * user resource
 * @generated from apis/user/schema.ts
 *
 * Your Cloudflare user profile, invitations, organizations, billing, and personal API tokens
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Review a chronological record of actions performed by or on behalf of your user
 */
export class AuditLogs extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets a list of audit logs for a user account. Can be filtered by who made the change, on which zone, and the timeframe of the change.
   *
   * @see audit-logs-get-user-audit-logs
   */
  async list(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/user/audit_logs`, {
      query: params,
    });
  }
}

/**
 * View billing history and payment profile for your user (deprecated — prefer account-level billing)
 */
export class Billing extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Accesses your billing history object.
   *
   * @see user-billing-history-(-deprecated)-billing-history-details
   */
  async historyList(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/user/billing/history`, {
      query: params,
    });
  }

  /**
   * Accesses your billing profile object.
   *
   * @see user-billing-profile-(-deprecated)-billing-profile-details
   */
  async profileGet(): Promise<unknown> {
    return this._client.get<unknown>(`/user/billing/profile`);
  }
}

/**
 * View and respond to pending invitations to join Cloudflare accounts
 */
export class Invites extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all invitations associated with my user.
   *
   * @see user-s-invites-list-invitations
   */
  async list(): Promise<unknown> {
    return this._client.get<unknown>(`/user/invites`);
  }

  /**
   * Gets the details of an invitation.
   *
   * @see user-s-invites-invitation-details
   */
  async get(inviteId: string): Promise<unknown> {
    return this._client.get<unknown>(`/user/invites/${inviteId}`);
  }

  /**
   * Responds to an invitation.
   *
   * @see user-s-invites-respond-to-invitation
   */
  async edit(inviteId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/user/invites/${inviteId}`);
  }
}

/**
 * List organizations your user belongs to and leave those you no longer need access to
 */
export class Organizations extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists organizations the user is associated with.
   *
   * @see user-s-organizations-list-organizations
   */
  async list(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/user/organizations`, {
      query: params,
    });
  }

  /**
   * Gets a specific organization the user is associated with.
   *
   * @see user-s-organizations-organization-details
   */
  async get(organizationId: string): Promise<unknown> {
    return this._client.get<unknown>(`/user/organizations/${organizationId}`);
  }

  /**
   * Removes association to an organization.
   *
   * @see user-s-organizations-leave-organization
   */
  async delete(organizationId: string): Promise<void> {
    return this._client.delete<void>(`/user/organizations/${organizationId}`);
  }
}

/**
 * View and manage zone-level plan subscriptions owned by your user
 */
export class Subscriptions extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all of a user's subscriptions.
   *
   * @see user-subscription-get-user-subscriptions
   */
  async get(): Promise<unknown> {
    return this._client.get<unknown>(`/user/subscriptions`);
  }

  /**
   * Updates a user's subscriptions.
   *
   * @see user-subscription-update-user-subscription
   */
  async update(identifier: string): Promise<unknown> {
    return this._client.put<unknown>(`/user/subscriptions/${identifier}`);
  }

  /**
   * Deletes a user's subscription.
   *
   * @see user-subscription-delete-user-subscription
   */
  async delete(identifier: string): Promise<void> {
    return this._client.delete<void>(`/user/subscriptions/${identifier}`);
  }
}

/**
 * Create and manage personal API tokens scoped to your user for programmatic API access
 */
export class Tokens extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List all access tokens you created.
   *
   * @see user-api-tokens-list-tokens
   */
  async list(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/user/tokens`, {
      query: params,
    });
  }

  /**
   * Get information about a specific token.
   *
   * @see user-api-tokens-token-details
   */
  async get(tokenId: string): Promise<unknown> {
    return this._client.get<unknown>(`/user/tokens/${tokenId}`);
  }

  /**
   * Create a new access token.
   *
   * @see user-api-tokens-create-token
   */
  async create(): Promise<unknown> {
    return this._client.post<unknown>(`/user/tokens`);
  }

  /**
   * Update an existing token.
   *
   * @see user-api-tokens-update-token
   */
  async update(tokenId: string): Promise<unknown> {
    return this._client.put<unknown>(`/user/tokens/${tokenId}`);
  }

  /**
   * Destroy a token.
   *
   * @see user-api-tokens-delete-token
   */
  async delete(tokenId: string): Promise<void> {
    return this._client.delete<void>(`/user/tokens/${tokenId}`);
  }

  /**
   * Test whether a token works.
   *
   * @see user-api-tokens-verify-token
   */
  async verify(): Promise<unknown> {
    return this._client.get<unknown>(`/user/tokens/verify`);
  }

  /**
   * Find all available permission groups for API Tokens.
   *
   * @see permission-groups-list-permission-groups
   */
  async permissionGroupsList(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/user/tokens/permission_groups`, {
      query: params,
    });
  }

  /**
   * Roll the token secret.
   *
   * @see user-api-tokens-roll-token
   */
  async valueUpdate(tokenId: string): Promise<unknown> {
    return this._client.put<unknown>(`/user/tokens/${tokenId}/value`);
  }
}

/**
 * Firewall operations
 */
export class Firewall extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches IP Access rules of the user. You can filter the results using several optional parameters.
   *
   * @see ip-access-rules-for-a-user-list-ip-access-rules
   */
  async accessRulesRulesList(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/user/firewall/access_rules/rules`, {
      query: params,
    });
  }

  /**
   * Creates a new IP Access rule for all zones owned by the current user. Note: To create an IP Access rule that applies to a specific zone, refer to the [IP Access rules for a zone](#ip-access-rules-for-a-zone) endpoints.
   *
   * @see ip-access-rules-for-a-user-create-an-ip-access-rule
   */
  async accessRulesRulesCreate(): Promise<unknown> {
    return this._client.post<unknown>(`/user/firewall/access_rules/rules`);
  }

  /**
   * Deletes an IP Access rule at the user level. Note: Deleting a user-level rule will affect all zones owned by the user.
   *
   * @see ip-access-rules-for-a-user-delete-an-ip-access-rule
   */
  async accessRulesRulesDelete(ruleId: string): Promise<void> {
    return this._client.delete<void>(`/user/firewall/access_rules/rules/${ruleId}`);
  }

  /**
   * Updates an IP Access rule defined at the user level. You can only update the rule action (`mode` parameter) and notes.
   *
   * @see ip-access-rules-for-a-user-update-an-ip-access-rule
   */
  async accessRulesRulesEdit(ruleId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/user/firewall/access_rules/rules/${ruleId}`);
  }
}

/**
 * Load Balancers operations
 */
export class LoadBalancers extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List configured monitors for a user.
   *
   * @see load-balancer-monitors-list-monitors
   */
  async monitorsList(): Promise<unknown> {
    return this._client.get<unknown>(`/user/load_balancers/monitors`);
  }

  /**
   * Create a configured monitor.
   *
   * @see load-balancer-monitors-create-monitor
   */
  async monitorsCreate(): Promise<unknown> {
    return this._client.post<unknown>(`/user/load_balancers/monitors`);
  }

  /**
   * Delete a configured monitor.
   *
   * @see load-balancer-monitors-delete-monitor
   */
  async monitorsDelete(monitorId: string): Promise<void> {
    return this._client.delete<void>(`/user/load_balancers/monitors/${monitorId}`);
  }

  /**
   * List a single configured monitor for a user.
   *
   * @see load-balancer-monitors-monitor-details
   */
  async monitorsGet(monitorId: string): Promise<unknown> {
    return this._client.get<unknown>(`/user/load_balancers/monitors/${monitorId}`);
  }

  /**
   * Apply changes to an existing monitor, overwriting the supplied properties.
   *
   * @see load-balancer-monitors-patch-monitor
   */
  async monitorsEdit(monitorId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/user/load_balancers/monitors/${monitorId}`);
  }

  /**
   * Modify a configured monitor.
   *
   * @see load-balancer-monitors-update-monitor
   */
  async monitorsUpdate(monitorId: string): Promise<unknown> {
    return this._client.put<unknown>(`/user/load_balancers/monitors/${monitorId}`);
  }

  /**
   * Preview pools using the specified monitor with provided monitor details. The returned preview_id can be used in the preview endpoint to retrieve the results.
   *
   * @see load-balancer-monitors-preview-monitor
   */
  async monitorsPreviewCreate(monitorId: string): Promise<unknown> {
    return this._client.post<unknown>(`/user/load_balancers/monitors/${monitorId}/preview`);
  }

  /**
   * Get the list of resources that reference the provided monitor.
   *
   * @see load-balancer-monitors-list-monitor-references
   */
  async monitorsReferencesList(monitorId: string): Promise<unknown> {
    return this._client.get<unknown>(`/user/load_balancers/monitors/${monitorId}/references`);
  }

  /**
   * List configured pools.
   *
   * @see load-balancer-pools-list-pools
   */
  async poolsList(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/user/load_balancers/pools`, {
      query: params,
    });
  }

  /**
   * Apply changes to a number of existing pools, overwriting the supplied properties. Pools are ordered by ascending `name`. Returns the list of affected pools. Supports the standard pagination query parameters, either `limit`/`offset` or `per_page`/`page`.
   *
   * @see load-balancer-pools-patch-pools
   */
  async poolsEditPoolsPools(): Promise<unknown> {
    return this._client.patch<unknown>(`/user/load_balancers/pools`);
  }

  /**
   * Create a new pool.
   *
   * @see load-balancer-pools-create-pool
   */
  async poolsCreate(): Promise<unknown> {
    return this._client.post<unknown>(`/user/load_balancers/pools`);
  }

  /**
   * Delete a configured pool.
   *
   * @see load-balancer-pools-delete-pool
   */
  async poolsDelete(poolId: string): Promise<void> {
    return this._client.delete<void>(`/user/load_balancers/pools/${poolId}`);
  }

  /**
   * Fetch a single configured pool.
   *
   * @see load-balancer-pools-pool-details
   */
  async poolsGet(poolId: string): Promise<unknown> {
    return this._client.get<unknown>(`/user/load_balancers/pools/${poolId}`);
  }

  /**
   * Apply changes to an existing pool, overwriting the supplied properties.
   *
   * @see load-balancer-pools-patch-pool
   */
  async poolsEditPoolsPool(poolId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/user/load_balancers/pools/${poolId}`);
  }

  /**
   * Modify a configured pool.
   *
   * @see load-balancer-pools-update-pool
   */
  async poolsUpdate(poolId: string): Promise<unknown> {
    return this._client.put<unknown>(`/user/load_balancers/pools/${poolId}`);
  }

  /**
   * Fetch the latest pool health status for a single pool.
   *
   * @see load-balancer-pools-pool-health-details
   */
  async poolsHealthGet(poolId: string): Promise<unknown> {
    return this._client.get<unknown>(`/user/load_balancers/pools/${poolId}/health`);
  }

  /**
   * Preview pool health using provided monitor details. The returned preview_id can be used in the preview endpoint to retrieve the results.
   *
   * @see load-balancer-pools-preview-pool
   */
  async poolsPreviewCreate(poolId: string): Promise<unknown> {
    return this._client.post<unknown>(`/user/load_balancers/pools/${poolId}/preview`);
  }

  /**
   * Get the list of resources that reference the provided pool.
   *
   * @see load-balancer-pools-list-pool-references
   */
  async poolsReferencesList(poolId: string): Promise<unknown> {
    return this._client.get<unknown>(`/user/load_balancers/pools/${poolId}/references`);
  }

  /**
   * Get the result of a previous preview operation using the provided preview_id.
   *
   * @see load-balancer-monitors-preview-result
   */
  async previewGet(previewId: string): Promise<unknown> {
    return this._client.get<unknown>(`/user/load_balancers/preview/${previewId}`);
  }
}

/**
 * Load Balancing Analytics operations
 */
export class LoadBalancingAnalytics extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List origin health changes.
   *
   * @see load-balancer-healthcheck-events-list-healthcheck-events
   */
  async eventsList(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/user/load_balancing_analytics/events`, {
      query: params,
    });
  }
}

/**
 * Tenants operations
 */
export class Tenants extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves list of tenants the authenticated user / method has access to.
   *
   * @see User_listUserTenants
   */
  async list(): Promise<unknown> {
    return this._client.get<unknown>(`/users/tenants`);
  }
}

/**
 * Your Cloudflare user profile, invitations, organizations, billing, and personal API tokens
 */
export class User extends APIResource {
  readonly auditlogs: AuditLogs;
  readonly billing: Billing;
  readonly invites: Invites;
  readonly organizations: Organizations;
  readonly subscriptions: Subscriptions;
  readonly tokens: Tokens;
  readonly firewall: Firewall;
  readonly loadbalancers: LoadBalancers;
  readonly loadbalancinganalytics: LoadBalancingAnalytics;
  readonly tenants: Tenants;

  constructor(client: CloudflareClient) {
    super(client);
    this.auditlogs = new AuditLogs(client);
    this.billing = new Billing(client);
    this.invites = new Invites(client);
    this.organizations = new Organizations(client);
    this.subscriptions = new Subscriptions(client);
    this.tokens = new Tokens(client);
    this.firewall = new Firewall(client);
    this.loadbalancers = new LoadBalancers(client);
    this.loadbalancinganalytics = new LoadBalancingAnalytics(client);
    this.tenants = new Tenants(client);
  }

  /**
   * Get current user details
   *
   * @see user-user-details
   */
  async get(): Promise<unknown> {
    return this._client.get<unknown>(`/user`);
  }

  /**
   * Edit part of your user details.
   *
   * @see user-edit-user
   */
  async edit(): Promise<unknown> {
    return this._client.patch<unknown>(`/user`);
  }
}
