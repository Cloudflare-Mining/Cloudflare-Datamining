/**
 * hyperdrive resource
 * @generated from apis/hyperdrive/schema.ts
 *
 * Accelerate access to existing databases by caching queries and pooling connections at the edge
 */
import type { components } from 'cloudflare-openapi';
import { APIResource, CloudflareClient } from '../../client.js';

// Type aliases from OpenAPI components
export type HyperdriveConfigResponse = components['schemas']['hyperdrive_hyperdrive-config-response'];

/**
 * Hyperdrive configurations that define the origin database connection, caching, and pooling settings
 */
export class Configs extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns a list of Hyperdrives.
   *
   * @see list-hyperdrive
   */
  async list(accountId: string): Promise<components['schemas']['hyperdrive_hyperdrive-config-response'][]> {
    return this._client.get<components['schemas']['hyperdrive_hyperdrive-config-response'][]>(
      `/accounts/${accountId}/hyperdrive/configs`,
    );
  }

  /**
   * Returns the specified Hyperdrive configuration.
   *
   * @see get-hyperdrive
   */
  async get(
    accountId: string,
    hyperdriveId: string,
  ): Promise<components['schemas']['hyperdrive_hyperdrive-config-response']> {
    return this._client.get<components['schemas']['hyperdrive_hyperdrive-config-response']>(
      `/accounts/${accountId}/hyperdrive/configs/${hyperdriveId}`,
    );
  }

  /**
   * Creates and returns a new Hyperdrive configuration.
   *
   * @see create-hyperdrive
   */
  async create(accountId: string): Promise<components['schemas']['hyperdrive_hyperdrive-config-response']> {
    return this._client.post<components['schemas']['hyperdrive_hyperdrive-config-response']>(
      `/accounts/${accountId}/hyperdrive/configs`,
    );
  }

  /**
   * Updates and returns the specified Hyperdrive configuration.
   *
   * @see update-hyperdrive
   */
  async update(
    accountId: string,
    hyperdriveId: string,
  ): Promise<components['schemas']['hyperdrive_hyperdrive-config-response']> {
    return this._client.put<components['schemas']['hyperdrive_hyperdrive-config-response']>(
      `/accounts/${accountId}/hyperdrive/configs/${hyperdriveId}`,
    );
  }

  /**
   * Patches and returns the specified Hyperdrive configuration. Custom caching settings are not kept if caching is disabled.
   *
   * @see patch-hyperdrive
   */
  async edit(
    accountId: string,
    hyperdriveId: string,
  ): Promise<components['schemas']['hyperdrive_hyperdrive-config-response']> {
    return this._client.patch<components['schemas']['hyperdrive_hyperdrive-config-response']>(
      `/accounts/${accountId}/hyperdrive/configs/${hyperdriveId}`,
    );
  }

  /**
   * Deletes the specified Hyperdrive.
   *
   * @see delete-hyperdrive
   */
  async delete(accountId: string, hyperdriveId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/hyperdrive/configs/${hyperdriveId}`);
  }
}

/**
 * Accelerate access to existing databases by caching queries and pooling connections at the edge
 */
export class Hyperdrive extends APIResource {
  readonly configs: Configs;

  constructor(client: CloudflareClient) {
    super(client);
    this.configs = new Configs(client);
  }
}
