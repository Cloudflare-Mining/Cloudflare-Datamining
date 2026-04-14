/**
 * resource-tagging resource
 * @generated from apis/resource-tagging/schema.ts
 *
 * Tag accounts and zones with key-value metadata for organization, filtering, and policy targeting
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Tags applied to the account for organizational grouping and policy targeting
 */
export class AccountTags extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves tags for a specific account-level resource.
   *
   * @see tags-get
   */
  async get(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/tags`, {
      query: params,
    });
  }

  /**
   * Creates or updates tags for a specific account-level resource.
   *
   * @see tags-set
   */
  async update(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/tags`);
  }

  /**
   * Removes all tags from a specific account-level resource.
   *
   * @see tags-delete
   */
  async delete(accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/tags`);
  }
}

/**
 * Tags applied to individual zones for categorization and bulk management
 */
export class ZoneTags extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves tags for a specific zone-level resource.
   *
   * @see tags-zone-get
   */
  async get(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/tags`, {
      query: params,
    });
  }

  /**
   * Creates or updates tags for a specific zone-level resource. Replaces all existing tags for the resource.
   *
   * @see tags-zone-set
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/tags`);
  }

  /**
   * Removes all tags from a specific zone-level resource.
   *
   * @see tags-zone-delete
   */
  async delete(zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/tags`);
  }
}

/**
 * Tag key definitions that establish the vocabulary for tagging resources
 */
export class Keys extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all distinct tag keys used across resources in an account.
   *
   * @see tags-list-keys
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/tags/keys`, {
      query: params,
    });
  }
}

/**
 * Allowed values for tag keys — constrain tagging to a defined set of options
 */
export class Values extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all distinct values for a given tag key, optionally filtered by resource type.
   *
   * @see tags-list-values
   */
  async list(accountId: string, tagKey: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/tags/values/${tagKey}`, {
      query: params,
    });
  }
}

/**
 * Tag accounts and zones with key-value metadata for organization, filtering, and policy targeting
 */
export class ResourceTagging extends APIResource {
  readonly accounttags: AccountTags;
  readonly zonetags: ZoneTags;
  readonly keys: Keys;
  readonly values: Values;

  constructor(client: CloudflareClient) {
    super(client);
    this.accounttags = new AccountTags(client);
    this.zonetags = new ZoneTags(client);
    this.keys = new Keys(client);
    this.values = new Values(client);
  }

  /**
   * Lists all tagged resources for an account.
   *
   * @see tags-list
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/tags/resources`, {
      query: params,
    });
  }
}
