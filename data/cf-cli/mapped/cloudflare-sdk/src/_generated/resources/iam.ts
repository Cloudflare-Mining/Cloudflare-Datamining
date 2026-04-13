/**
 * iam resource
 * @generated from apis/iam/schema.ts
 *
 * Identity and access management — permission groups, resource groups, user groups, and SSO connectors
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * View the permission groups that can be assigned to API tokens and policies
 */
export class PermissionGroups extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List all the permissions groups for an account.
   *
   * @see account-permission-group-list
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/iam/permission_groups`, {
      query: params,
    });
  }

  /**
   * Get information about a specific permission group in an account.
   *
   * @see account-permission-group-details
   */
  async get(accountId: string, permissionGroupId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/iam/permission_groups/${permissionGroupId}`);
  }
}

/**
 * Define scopes that limit which account resources a policy or token can access
 */
export class ResourceGroups extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List all the resource groups for an account.
   *
   * @see account-resource-group-list
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/iam/resource_groups`, {
      query: params,
    });
  }

  /**
   * Get information about a specific resource group in an account.
   *
   * @see account-resource-group-details
   */
  async get(accountId: string, resourceGroupId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/iam/resource_groups/${resourceGroupId}`);
  }

  /**
   * Create a new Resource Group under the specified account.
   *
   * @see account-resource-group-create
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/iam/resource_groups`);
  }

  /**
   * Modify an existing resource group.
   *
   * @see account-resource-group-update
   */
  async update(accountId: string, resourceGroupId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/iam/resource_groups/${resourceGroupId}`);
  }

  /**
   * Remove a resource group from an account.
   *
   * @see account-resource-group-delete
   */
  async delete(accountId: string, resourceGroupId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/iam/resource_groups/${resourceGroupId}`);
  }
}

/**
 * Organize account members into groups for easier permission assignment
 */
export class UserGroups extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List all the user groups for an account.
   *
   * @see account-user-group-list
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/iam/user_groups`, {
      query: params,
    });
  }

  /**
   * Get information about a specific user group in an account.
   *
   * @see account-user-group-details
   */
  async get(accountId: string, userGroupId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/iam/user_groups/${userGroupId}`);
  }

  /**
   * Create a new user group under the specified account.
   *
   * @see account-user-group-create
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/iam/user_groups`);
  }

  /**
   * Modify an existing user group.
   *
   * @see account-user-group-update
   */
  async update(accountId: string, userGroupId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/iam/user_groups/${userGroupId}`);
  }

  /**
   * Remove a user group from an account.
   *
   * @see account-user-group-delete
   */
  async delete(accountId: string, userGroupId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/iam/user_groups/${userGroupId}`);
  }

  /**
   * List all the members attached to a user group.
   *
   * @see account-user-group-member-list
   */
  async membersList(accountId: string, userGroupId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/iam/user_groups/${userGroupId}/members`, {
      query: params,
    });
  }

  /**
   * Add members to a User Group.
   *
   * @see account-user-group-member-create
   */
  async membersCreate(accountId: string, userGroupId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/iam/user_groups/${userGroupId}/members`);
  }

  /**
   * Replace the set of members attached to a User Group.
   *
   * @see account-user-group-members-update
   */
  async membersUpdate(accountId: string, userGroupId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/iam/user_groups/${userGroupId}/members`);
  }

  /**
   * Remove a member from User Group
   *
   * @see account-user-group-member-delete
   */
  async membersDelete(accountId: string, userGroupId: string, memberId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/iam/user_groups/${userGroupId}/members/${memberId}`);
  }
}

/**
 * Configure single sign-on connectors to authenticate account members through an external identity provider
 */
export class Sso extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all SSO connectors configured for the account.
   *
   * @see get-all-sso-connectors
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/sso_connectors`);
  }

  /**
   * Retrieves details for a specific SSO connector.
   *
   * @see get-sso-connector
   */
  async get(accountId: string, ssoConnectorId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/sso_connectors/${ssoConnectorId}`);
  }

  /**
   * Creates a new SSO connector for logging into Cloudflare through an identity provider.
   *
   * @see init-new-sso-connector
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/sso_connectors`);
  }

  /**
   * Updates the state or configuration of an SSO connector.
   *
   * @see update-sso-connector-state
   */
  async update(accountId: string, ssoConnectorId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/sso_connectors/${ssoConnectorId}`);
  }

  /**
   * Deletes an SSO connector from the account.
   *
   * @see delete-sso-connector
   */
  async delete(accountId: string, ssoConnectorId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/sso_connectors/${ssoConnectorId}`);
  }

  /**
   * Validates the user has added the DNS TXT record required for validating ownership of the domain they are trying to set up a connector for.
   *
   * @see begin-sso-connector-verification
   */
  async beginVerification(accountId: string, ssoConnectorId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/sso_connectors/${ssoConnectorId}/begin_verification`);
  }
}

/**
 * User Groups (additional) operations
 */
export class UserGroupsExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get details of a specific member in a user group.
   *
   * @see account-user-group-member-get
   */
  async membersGet(accountId: string, userGroupId: string, memberId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/iam/user_groups/${userGroupId}/members/${memberId}`);
  }
}

/**
 * Identity and access management — permission groups, resource groups, user groups, and SSO connectors
 */
export class Iam extends APIResource {
  readonly permissiongroups: PermissionGroups;
  readonly resourcegroups: ResourceGroups;
  readonly usergroups: UserGroups;
  readonly sso: Sso;
  readonly usergroupsextra: UserGroupsExtra;

  constructor(client: CloudflareClient) {
    super(client);
    this.permissiongroups = new PermissionGroups(client);
    this.resourcegroups = new ResourceGroups(client);
    this.usergroups = new UserGroups(client);
    this.sso = new Sso(client);
    this.usergroupsextra = new UserGroupsExtra(client);
  }
}
