/**
 * connectivity resource
 * @generated from apis/connectivity/schema.ts
 *
 * Service directory for network connectivity endpoints and their configurations
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Connectivity service entries that define available network endpoints and their properties
 */
export class Directory extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all connectivity service entries in the directory.
   *
   * @see connectivity-services-list
   */
  async servicesList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/connectivity/directory/services`, {
      query: params,
    });
  }

  /**
   * Creates a new connectivity service entry in the directory.
   *
   * @see connectivity-services-post
   */
  async servicesCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/connectivity/directory/services`);
  }

  /**
   * Retrieves details for a specific connectivity service entry.
   *
   * @see connectivity-services-get
   */
  async servicesGet(accountId: string, serviceId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/connectivity/directory/services/${serviceId}`);
  }

  /**
   * Updates an existing connectivity service entry in the directory.
   *
   * @see connectivity-services-put
   */
  async servicesUpdate(accountId: string, serviceId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/connectivity/directory/services/${serviceId}`);
  }

  /**
   * Removes a connectivity service entry from the directory.
   *
   * @see connectivity-services-delete
   */
  async servicesDelete(accountId: string, serviceId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/connectivity/directory/services/${serviceId}`);
  }
}

/**
 * Service directory for network connectivity endpoints and their configurations
 */
export class Connectivity extends APIResource {
  readonly directory: Directory;

  constructor(client: CloudflareClient) {
    super(client);
    this.directory = new Directory(client);
  }
}
