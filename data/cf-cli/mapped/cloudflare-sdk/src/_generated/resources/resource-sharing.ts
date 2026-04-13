/**
 * resource-sharing resource
 * @generated from apis/resource-sharing/schema.ts
 *
 * Share Cloudflare resources (zones, accounts) across organizations with granular access controls
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Organizations and accounts that have been granted access to shared resources
 */
export class Recipients extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List share recipients by share ID.
   *
   * @see share-recipients-list
   */
  async list(accountId: string, shareId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/shares/${shareId}/recipients`, {
      query: params,
    });
  }

  /**
   * Get share recipient by ID.
   *
   * @see share-recipients-get-by-id
   */
  async get(
    accountId: string,
    shareId: string,
    recipientId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/shares/${shareId}/recipients/${recipientId}`, {
      query: params,
    });
  }

  /**
   * Adds a recipient to a resource share, granting them access to the shared resources.
   *
   * @see share-recipient-create
   */
  async create(accountId: string, shareId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/shares/${shareId}/recipients`);
  }

  /**
   * Deletion is not immediate, an updated share recipient object with a new status will be returned.
   *
   * @see share-recipient-delete
   */
  async delete(accountId: string, shareId: string, recipientId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/shares/${shareId}/recipients/${recipientId}`);
  }
}

/**
 * Individual resources (zones, configs) that have been shared with recipients
 */
export class Resources extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List share resources by share ID.
   *
   * @see share-resources-list
   */
  async list(accountId: string, shareId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/shares/${shareId}/resources`, {
      query: params,
    });
  }

  /**
   * Get share resource by ID.
   *
   * @see share-resources-get-by-id
   */
  async get(accountId: string, shareId: string, resourceId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/shares/${shareId}/resources/${resourceId}`);
  }

  /**
   * Adds a resource to an existing share, making it available to share recipients.
   *
   * @see share-resource-create
   */
  async create(accountId: string, shareId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/shares/${shareId}/resources`);
  }

  /**
   * Update is not immediate, an updated share resource object with a new status will be returned.
   *
   * @see share-resource-update
   */
  async update(accountId: string, shareId: string, resourceId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/shares/${shareId}/resources/${resourceId}`);
  }

  /**
   * Deletion is not immediate, an updated share resource object with a new status will be returned.
   *
   * @see share-resource-delete
   */
  async delete(accountId: string, shareId: string, resourceId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/shares/${shareId}/resources/${resourceId}`);
  }
}

/**
 * Recipients (additional) operations
 */
export class RecipientsExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Changes a share's recipients to match the given list. Returns an error if the share targets an organization.
   *
   * @see share-recipients-update
   */
  async update(accountId: string, shareId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/shares/${shareId}/recipients`);
  }
}

/**
 * Share Cloudflare resources (zones, accounts) across organizations with granular access controls
 */
export class ResourceSharing extends APIResource {
  readonly recipients: Recipients;
  readonly resources: Resources;
  readonly recipientsextra: RecipientsExtra;

  constructor(client: CloudflareClient) {
    super(client);
    this.recipients = new Recipients(client);
    this.resources = new Resources(client);
    this.recipientsextra = new RecipientsExtra(client);
  }

  /**
   * Lists all account shares.
   *
   * @see shares-list
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/shares`, {
      query: params,
    });
  }

  /**
   * Fetches share by ID.
   *
   * @see shares-get-by-id
   */
  async get(accountId: string, shareId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/shares/${shareId}`, {
      query: params,
    });
  }

  /**
   * Creates a new resource share for sharing Cloudflare resources with other accounts or organizations.
   *
   * @see share-create
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/shares`);
  }

  /**
   * Updating is not immediate, an updated share object with a new status will be returned.
   *
   * @see share-update
   */
  async update(accountId: string, shareId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/shares/${shareId}`);
  }

  /**
   * Deletion is not immediate, an updated share object with a new status will be returned.
   *
   * @see share-delete
   */
  async delete(accountId: string, shareId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/shares/${shareId}`);
  }
}
