/**
 * kv resource
 * @generated from apis/kv/schema.ts
 *
 * Global, low-latency key-value storage for Workers — namespaces, keys, values, and bulk operations
 */
import type { components } from 'cloudflare-openapi';
import { APIResource, CloudflareClient } from '../../client.js';

// Type aliases from OpenAPI components
export type WorkersKVNamespace = components['schemas']['workers-kv_namespace'];
export type WorkersKVBulkResult = components['schemas']['workers-kv_bulk-result'];
export type WorkersKVKey = components['schemas']['workers-kv_key'];
export type WorkersKVListMetadata = components['schemas']['workers-kv_list_metadata'];

/**
 * KV namespaces and their key-value pairs — create namespaces, read/write individual or bulk entries, and inspect metadata
 */
export class Namespaces extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns the namespaces owned by an account.
   *
   * @see workers-kv-namespace-list-namespaces
   */
  async list(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['workers-kv_namespace'][]> {
    return this._client.get<components['schemas']['workers-kv_namespace'][]>(
      `/accounts/${accountId}/storage/kv/namespaces`,
      {
        query: params,
      },
    );
  }

  /**
   * Get the namespace corresponding to the given ID.
   *
   * @see workers-kv-namespace-get-a-namespace
   */
  async get(namespaceId: string, accountId: string): Promise<components['schemas']['workers-kv_namespace']> {
    return this._client.get<components['schemas']['workers-kv_namespace']>(
      `/accounts/${accountId}/storage/kv/namespaces/${namespaceId}`,
    );
  }

  /**
   * Creates a namespace under the given title. A `400` is returned if the account already owns a namespace with this title. A namespace must be explicitly deleted to be replaced.
   *
   * @see workers-kv-namespace-create-a-namespace
   */
  async create(accountId: string): Promise<components['schemas']['workers-kv_namespace']> {
    return this._client.post<components['schemas']['workers-kv_namespace']>(
      `/accounts/${accountId}/storage/kv/namespaces`,
    );
  }

  /**
   * Modifies a namespace's title.
   *
   * @see workers-kv-namespace-rename-a-namespace
   */
  async update(namespaceId: string, accountId: string): Promise<components['schemas']['workers-kv_namespace']> {
    return this._client.put<components['schemas']['workers-kv_namespace']>(
      `/accounts/${accountId}/storage/kv/namespaces/${namespaceId}`,
    );
  }

  /**
   * Deletes the namespace corresponding to the given ID.
   *
   * @see workers-kv-namespace-remove-a-namespace
   */
  async delete(namespaceId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/storage/kv/namespaces/${namespaceId}`);
  }

  /**
   * Write multiple keys and values at once. Body should be an array of up to 10,000 key-value pairs to be stored, along with optional expiration information. Existing values and expirations will be overwritten. If neither `expiration` nor `expiration_ttl` is specified, the key-value pair will never expire. If both are set, `expiration_ttl` is used and `expiration` is ignored. The entire request size must be 100 megabytes or less.
   *
   * @see workers-kv-namespace-write-multiple-key-value-pairs
   */
  async bulkUpdate(namespaceId: string, accountId: string): Promise<components['schemas']['workers-kv_bulk-result']> {
    return this._client.put<components['schemas']['workers-kv_bulk-result']>(
      `/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/bulk`,
    );
  }

  /**
   * Remove multiple KV pairs from the namespace. Body should be an array of up to 10,000 keys to be removed.
   *
   * @see workers-kv-namespace-delete-multiple-key-value-pairs
   */
  async bulkDelete(namespaceId: string, accountId: string): Promise<components['schemas']['workers-kv_bulk-result']> {
    return this._client.post<components['schemas']['workers-kv_bulk-result']>(
      `/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/bulk/delete`,
    );
  }

  /**
   * Retrieve up to 100 KV pairs from the namespace. Keys must contain text-based values. JSON values can optionally be parsed instead of being returned as a string value. Metadata can be included if `withMetadata` is true.
   *
   * @see workers-kv-namespace-get-multiple-key-value-pairs
   */
  async bulkGet(namespaceId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/bulk/get`);
  }

  /**
   * Lists a namespace's keys.
   *
   * @see workers-kv-namespace-list-a-namespace-s-keys
   */
  async keysList(
    namespaceId: string,
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['workers-kv_key'][]> {
    return this._client.get<components['schemas']['workers-kv_key'][]>(
      `/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/keys`,
      {
        query: params,
      },
    );
  }

  /**
   * Write multiple keys and values at once. Body should be an array of up to 10,000 key-value pairs to be stored, along with optional expiration information. Existing values and expirations will be overwritten. If neither `expiration` nor `expiration_ttl` is specified, the key-value pair will never expire. If both are set, `expiration_ttl` is used and `expiration` is ignored. The entire request size must be 100 megabytes or less.
   *
   * @see workers-kv-namespace-write-multiple-key-value-pairs
   */
  async keysBulkUpdate(
    namespaceId: string,
    accountId: string,
  ): Promise<components['schemas']['workers-kv_bulk-result']> {
    return this._client.put<components['schemas']['workers-kv_bulk-result']>(
      `/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/bulk`,
    );
  }

  /**
   * Remove multiple KV pairs from the namespace. Body should be an array of up to 10,000 keys to be removed.
   *
   * @see workers-kv-namespace-delete-multiple-key-value-pairs
   */
  async keysBulkDelete(
    namespaceId: string,
    accountId: string,
  ): Promise<components['schemas']['workers-kv_bulk-result']> {
    return this._client.post<components['schemas']['workers-kv_bulk-result']>(
      `/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/bulk/delete`,
    );
  }

  /**
   * Retrieve up to 100 KV pairs from the namespace. Keys must contain text-based values. JSON values can optionally be parsed instead of being returned as a string value. Metadata can be included if `withMetadata` is true.
   *
   * @see workers-kv-namespace-get-multiple-key-value-pairs
   */
  async keysBulkGet(namespaceId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/bulk/get`);
  }

  /**
   * Returns the metadata associated with the given key in the given namespace. Use URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key name.
   *
   * @see workers-kv-namespace-read-the-metadata-for-a-key
   */
  async metadataGet(
    keyName: string,
    namespaceId: string,
    accountId: string,
  ): Promise<components['schemas']['workers-kv_list_metadata']> {
    return this._client.get<components['schemas']['workers-kv_list_metadata']>(
      `/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/metadata/${keyName}`,
    );
  }

  /**
   * Returns the value associated with the given key in the given namespace. Use URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key name. If the KV-pair is set to expire at some point, the expiration time as measured in seconds since the UNIX epoch will be returned in the `expiration` response header.
   *
   * @see workers-kv-namespace-read-key-value-pair
   */
  async valuesGet(keyName: string, namespaceId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/values/${keyName}`);
  }

  /**
   * Write a value identified by a key. Use URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key name. Body should be the value to be stored. If JSON metadata to be associated with the key/value pair is needed, use `multipart/form-data` content type for your PUT request (see dropdown below in `REQUEST BODY SCHEMA`). Existing values, expirations, and metadata will be overwritten. If neither `expiration` nor `expiration_ttl` is specified, the key-value pair will never expire. If both are set, `expiration_ttl` is used and `expiration` is ignored.
   *
   * @see workers-kv-namespace-write-key-value-pair-with-metadata
   */
  async valuesUpdate(
    keyName: string,
    namespaceId: string,
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/values/${keyName}`, {
      body: { ...params },
    });
  }

  /**
   * Remove a KV pair from the namespace. Use URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key name.
   *
   * @see workers-kv-namespace-delete-key-value-pair
   */
  async valuesDelete(keyName: string, namespaceId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/values/${keyName}`);
  }
}

/**
 * Kv (additional) operations
 */
export class KVExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Remove multiple KV pairs from the namespace. Body should be an array of up to 10,000 keys to be removed.
   *
   * @see workers-kv-namespace-delete-multiple-key-value-pairs-deprecated
   */
  async namespacesBulkDelete(namespaceId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/bulk`);
  }
}

/**
 * Global, low-latency key-value storage for Workers — namespaces, keys, values, and bulk operations
 */
export class KV extends APIResource {
  readonly namespaces: Namespaces;
  readonly kvextra: KVExtra;

  constructor(client: CloudflareClient) {
    super(client);
    this.namespaces = new Namespaces(client);
    this.kvextra = new KVExtra(client);
  }
}
