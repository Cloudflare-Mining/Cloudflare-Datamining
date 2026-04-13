/**
 * organizations resource
 * @generated from apis/organizations/schema.ts
 *
 * Multi-user organizations that group accounts, members, and shared settings under a single entity
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * View and update the public profile information for an organization
 */
export class OrganizationProfile extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get an organizations profile if it exists. (Currently in Closed Beta - see https://developers.cloudflare.com/fundamentals/organizations/)
   *
   * @see Organizations_getProfile
   */
  async get(organizationId: string): Promise<unknown> {
    return this._client.get<unknown>(`/organizations/${organizationId}/profile`);
  }

  /**
   * Modify organization profile. (Currently in Closed Beta - see https://developers.cloudflare.com/fundamentals/organizations/)
   *
   * @see Organizations_modifyProfile
   */
  async update(organizationId: string): Promise<unknown> {
    return this._client.put<unknown>(`/organizations/${organizationId}/profile`);
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
   * Retrieve a list of accounts that belong to a specific organization. (Currently in Closed Beta - see https://developers.cloudflare.com/fundamentals/organizations/)
   *
   * @see Organizations_getAccounts
   */
  async get(organizationId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/organizations/${organizationId}/accounts`, {
      query: params,
    });
  }
}

/**
 * Logs operations
 */
export class Logs extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets a list of audit logs for an organization.
   *
   * @see audit-logs-v2-get-organization-audit-logs
   */
  async auditGet(organizationId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/organizations/${organizationId}/logs/audit`, {
      query: params,
    });
  }
}

/**
 * Members operations
 */
export class Members extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List memberships for an Organization. (Currently in Closed Beta - see https://developers.cloudflare.com/fundamentals/organizations/)
   *
   * @see Members_list
   */
  async list(organizationId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/organizations/${organizationId}/members`, {
      query: params,
    });
  }

  /**
   * Create a membership that grants access to a specific Organization. (Currently in Closed Beta - see https://developers.cloudflare.com/fundamentals/organizations/)
   *
   * @see Members_create
   */
  async create(organizationId: string): Promise<unknown> {
    return this._client.post<unknown>(`/organizations/${organizationId}/members`);
  }

  /**
   * Delete a membership to a particular Organization. (Currently in Closed Beta - see https://developers.cloudflare.com/fundamentals/organizations/)
   *
   * @see Members_delete
   */
  async delete(organizationId: string, memberId: string): Promise<void> {
    return this._client.delete<void>(`/organizations/${organizationId}/members/${memberId}`);
  }

  /**
   * Retrieve a single membership from an Organization. (Currently in Closed Beta - see https://developers.cloudflare.com/fundamentals/organizations/)
   *
   * @see Members_retrieve
   */
  async get(organizationId: string, memberId: string): Promise<unknown> {
    return this._client.get<unknown>(`/organizations/${organizationId}/members/${memberId}`);
  }
}

/**
 * Members Batch Create operations
 */
export class MembersBatchCreate extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Batch create multiple memberships that grant access to a specific Organization.
   *
   * @see Members_batchCreate
   */
  async create(organizationId: string): Promise<unknown> {
    return this._client.post<unknown>(`/organizations/${organizationId}/members:batchCreate`);
  }
}

/**
 * Shares operations
 */
export class Shares extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all organization shares.
   *
   * @see organization-shares-list
   */
  async list(organizationId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/organizations/${organizationId}/shares`, {
      query: params,
    });
  }
}

/**
 * Multi-user organizations that group accounts, members, and shared settings under a single entity
 */
export class Organizations extends APIResource {
  readonly organizationprofile: OrganizationProfile;
  readonly accounts: Accounts;
  readonly logs: Logs;
  readonly members: Members;
  readonly membersbatchcreate: MembersBatchCreate;
  readonly shares: Shares;

  constructor(client: CloudflareClient) {
    super(client);
    this.organizationprofile = new OrganizationProfile(client);
    this.accounts = new Accounts(client);
    this.logs = new Logs(client);
    this.members = new Members(client);
    this.membersbatchcreate = new MembersBatchCreate(client);
    this.shares = new Shares(client);
  }

  /**
   * Retrieve a list of organizations a particular user has access to. (Currently in Closed Beta - see https://developers.cloudflare.com/fundamentals/organizations/)
   *
   * @see Organization_listOrganizations
   */
  async list(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/organizations`, {
      query: params,
    });
  }

  /**
   * Retrieve the details of a certain organization. (Currently in Closed Beta - see https://developers.cloudflare.com/fundamentals/organizations/)
   *
   * @see Organizations_retrieve
   */
  async get(organizationId: string): Promise<unknown> {
    return this._client.get<unknown>(`/organizations/${organizationId}`);
  }

  /**
   * Create a new organization for a user. (Currently in Closed Beta - see https://developers.cloudflare.com/fundamentals/organizations/)
   *
   * @see Organizations_createUserOrganization
   */
  async create(): Promise<unknown> {
    return this._client.post<unknown>(`/organizations`);
  }

  /**
   * Modify organization. (Currently in Closed Beta - see https://developers.cloudflare.com/fundamentals/organizations/)
   *
   * @see Organizations_modify
   */
  async update(organizationId: string): Promise<unknown> {
    return this._client.put<unknown>(`/organizations/${organizationId}`);
  }

  /**
   * Delete an organization. The organization MUST be empty before deleting. It must not contain any sub-organizations, accounts, members or users. (Currently in Closed Beta - see https://developers.cloudflare.com/fundamentals/organizations/)
   *
   * @see Organizations_delete
   */
  async delete(organizationId: string): Promise<void> {
    return this._client.delete<void>(`/organizations/${organizationId}`);
  }

  /**
   * Retrieve a list of the organizations that "contain" this account or are managing it. The returned list will be in order from "root" to "leaf", where the "leaf" will be the organization that _immediately_ contains the specified account.
   *
   * @see Accounts_listAccountOrganizations
   */
  async listExtra(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/organizations`);
  }
}
