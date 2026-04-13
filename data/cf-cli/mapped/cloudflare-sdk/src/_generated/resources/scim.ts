/**
 * scim resource
 * @generated from apis/scim/schema.ts
 *
 * SCIM 2.0 provisioning — manage users, groups, and identity provider sync for your account
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Groups operations
 */
export class Groups extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists SCIM Group resources for the account. Returns both system groups (backed by Cloudflare permission groups, prefixed `cloudflare-v1-`) and custom user groups. Supports filtering by `displayName` using SCIM filter syntax.
   *
   * @see scim-groups-list
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/scim/v2/Groups`, {
      query: params,
    });
  }

  /**
   * Creates a new SCIM Group (user group) for the account. The `displayName` must not be empty and must not begin with `CF` (reserved for system groups).
   *
   * @see scim-groups-create
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/scim/v2/Groups`);
  }

  /**
   * Deletes a SCIM Group (custom user groups only). System groups backed by Cloudflare permission groups cannot be deleted via SCIM. Returns 204 No Content on success.
   *
   * @see scim-groups-delete
   */
  async delete(accountId: string, groupId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/scim/v2/Groups/${groupId}`);
  }

  /**
   * Retrieves a single SCIM Group resource by group ID.
   *
   * @see scim-groups-get
   */
  async get(accountId: string, groupId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/scim/v2/Groups/${groupId}`);
  }

  /**
   * Partially updates a SCIM Group via PATCH operations (RFC 7644 Section 3.5.2). Supports add, remove, and replace operations on `members`, `displayName`, and `externalId`. For system groups (prefixed `cloudflare-v1-`), only member management operations are supported.
   *
   * @see scim-groups-patch
   */
  async edit(accountId: string, groupId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/scim/v2/Groups/${groupId}`);
  }
}

/**
 * Resource Types operations
 */
export class ResourceTypes extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns the list of SCIM resource types supported by the Cloudflare SCIM service (RFC 7643 Section 6, RFC 7644 Section 4). Clients use this to discover available resource categories (e.g. Users, Groups) and their associated schemas. Query parameters are not supported on this endpoint.
   *
   * @see scim-resource-types-list
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/scim/v2/ResourceTypes`);
  }

  /**
   * Returns a single SCIM resource type by ID (RFC 7643 Section 6). Valid IDs are `User` and `Group`.
   *
   * @see scim-resource-types-get
   */
  async get(accountId: string, resourceTypeId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/scim/v2/ResourceTypes/${resourceTypeId}`);
  }
}

/**
 * Schemas operations
 */
export class Schemas extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns the list of SCIM schemas supported by the Cloudflare SCIM service (RFC 7643 Section 7, RFC 7644 Section 4). Clients use this to introspect the attributes of each resource type. Query parameters are not supported on this endpoint.
   *
   * @see scim-schemas-list
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/scim/v2/Schemas`);
  }

  /**
   * Returns a single SCIM schema definition by schema URI ID (RFC 7643 Section 7). Valid IDs are `urn:ietf:params:scim:schemas:core:2.0:User` and `urn:ietf:params:scim:schemas:core:2.0:Group`.
   *
   * @see scim-schemas-get
   */
  async get(accountId: string, schemaId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/scim/v2/Schemas/${schemaId}`);
  }
}

/**
 * Service Provider Config operations
 */
export class ServiceProviderConfig extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns the SCIM 2.0 Service Provider configuration (RFC 7643 Section 5). IdPs use this endpoint to auto-configure their SCIM integration with Cloudflare, discovering which optional features (patch, bulk, filter, etc.) are supported.
   *
   * @see scim-service-provider-config-get
   */
  async get(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/scim/v2/ServiceProviderConfig`);
  }
}

/**
 * Users operations
 */
export class Users extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists account members as SCIM User resources. Supports optional filtering by `userName` (email) using the SCIM filter syntax (e.g. `userName eq "user@example.com"`). Pagination is controlled via `startIndex` and `count` query parameters per RFC 7644 Section 3.4.2.4.
   *
   * @see scim-users-list
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/scim/v2/Users`, {
      query: params,
    });
  }

  /**
   * Provisions a new account member via SCIM. The `userName` field must be a valid email address and must match the primary email in `emails`. The account must be an Enterprise account with SCIM entitlements enabled.
   *
   * @see scim-users-create
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/scim/v2/Users`);
  }

  /**
   * Retrieves a single account member as a SCIM User resource by user tag.
   *
   * @see scim-users-get
   */
  async get(accountId: string, userId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/scim/v2/Users/${userId}`);
  }

  /**
   * Partially updates a SCIM User via PATCH operations (RFC 7644 Section 3.5.2). Supports updating `userName`, `name.givenName`, `name.familyName`, and `active`. Setting `active: false` deprovisions the user (removes them from the account). For IdP compatibility, `emails[type eq "work"].value` is also accepted as an alias for `userName`.
   *
   * @see scim-users-patch
   */
  async edit(accountId: string, userId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/scim/v2/Users/${userId}`);
  }

  /**
   * Replaces a SCIM User resource (RFC 7644 Section 3.5.1). Fully replaces the mutable attributes of the user. Supports updating `userName`, `name`, `emails`, and `active`.
   *
   * @see scim-users-put
   */
  async update(accountId: string, userId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/scim/v2/Users/${userId}`);
  }
}

/**
 * SCIM 2.0 provisioning — manage users, groups, and identity provider sync for your account
 */
export class Scim extends APIResource {
  readonly groups: Groups;
  readonly resourcetypes: ResourceTypes;
  readonly schemas: Schemas;
  readonly serviceproviderconfig: ServiceProviderConfig;
  readonly users: Users;

  constructor(client: CloudflareClient) {
    super(client);
    this.groups = new Groups(client);
    this.resourcetypes = new ResourceTypes(client);
    this.schemas = new Schemas(client);
    this.serviceproviderconfig = new ServiceProviderConfig(client);
    this.users = new Users(client);
  }
}
