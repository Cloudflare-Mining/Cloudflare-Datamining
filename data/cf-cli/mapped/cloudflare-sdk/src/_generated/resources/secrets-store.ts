/**
 * secrets-store resource
 * @generated from apis/secrets-store/schema.ts
 *
 * Centralized secret management — store API keys, tokens, and credentials for use across Workers and other products
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Secret stores that hold encrypted key-value secrets accessible by Workers and services
 */
export class Stores extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all the stores in an account
   *
   * @see secrets-store-list
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/secrets_store/stores`, {
      query: params,
    });
  }

  /**
   * Creates a store in the account
   *
   * @see secrets-store-create
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/secrets_store/stores`);
  }

  /**
   * Deletes a single store
   *
   * @see secrets-store-delete-by-id
   */
  async delete(accountId: string, storeId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/secrets_store/stores/${storeId}`);
  }

  /**
   * Lists all store secrets
   *
   * @see secrets-store-secrets-list
   */
  async secretsList(accountId: string, storeId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/secrets_store/stores/${storeId}/secrets`, {
      query: params,
    });
  }

  /**
   * Returns details of a single secret
   *
   * @see secrets-store-get-by-id
   */
  async secretsGet(accountId: string, storeId: string, secretId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/secrets_store/stores/${storeId}/secrets/${secretId}`);
  }

  /**
   * Creates a secret in the account
   *
   * @see secrets-store-secret-create
   */
  async secretsCreate(accountId: string, storeId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/secrets_store/stores/${storeId}/secrets`);
  }

  /**
   * Updates a single secret
   *
   * @see secrets-store-patch-by-id
   */
  async secretsEdit(accountId: string, storeId: string, secretId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/secrets_store/stores/${storeId}/secrets/${secretId}`);
  }

  /**
   * Deletes a single secret
   *
   * @see secrets-store-secret-delete-by-id
   */
  async secretsDelete(accountId: string, storeId: string, secretId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/secrets_store/stores/${storeId}/secrets/${secretId}`);
  }

  /**
   * Deletes one or more secrets
   *
   * @see secrets-store-delete-bulk
   */
  async secretsBulkDelete(accountId: string, storeId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/secrets_store/stores/${storeId}/secrets`);
  }

  /**
   * Duplicates the secret, keeping the value
   *
   * @see secrets-store-duplicate-by-id
   */
  async secretsDuplicate(accountId: string, storeId: string, secretId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/secrets_store/stores/${storeId}/secrets/${secretId}/duplicate`,
    );
  }
}

/**
 * Account quota limits for secrets stores, secrets count, and storage capacity
 */
export class Quota extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists the number of secrets used in the account.
   *
   * @see secrets-store-quota
   */
  async get(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/secrets_store/quota`);
  }
}

/**
 * Stores (additional) operations
 */
export class StoresExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns details of a single store
   *
   * @see secrets-store-get-store-by-id
   */
  async getById(accountId: string, storeId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/secrets_store/stores/${storeId}`);
  }

  /**
   * Lists all stores in an account that are managed by the calling service. Only returns stores where managed_by matches the authenticated service.
   *
   * @see secrets-store-system-list
   */
  async list(accountTag: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/system/accounts/${accountTag}/stores`, {
      query: params,
    });
  }

  /**
   * Creates a store in the account on behalf of the calling service. The store will be marked as managed by the authenticated service. Requires account_id in the request body.
   *
   * @see secrets-store-system-create
   */
  async create(accountTag: string): Promise<unknown> {
    return this._client.post<unknown>(`/system/accounts/${accountTag}/stores`);
  }

  /**
   * Deletes a store managed by the calling service. Returns 404 if the store doesn't exist or is not managed by the authenticated service.
   *
   * @see secrets-store-system-delete-by-id
   */
  async delete(accountTag: string, storeId: string): Promise<void> {
    return this._client.delete<void>(`/system/accounts/${accountTag}/stores/${storeId}`);
  }

  /**
   * Returns details of a single store managed by the calling service. Returns 404 if the store doesn't exist or is not managed by the authenticated service.
   *
   * @see secrets-store-system-get-store-by-id
   */
  async getV2(accountTag: string, storeId: string): Promise<unknown> {
    return this._client.get<unknown>(`/system/accounts/${accountTag}/stores/${storeId}`);
  }

  /**
   * Deletes one or more secrets from a store managed by the calling service. Returns 404 if the store doesn't exist or is not managed by the authenticated service.
   *
   * @see secrets-store-system-delete-bulk
   */
  async secretsDeleteSystemBulk(accountTag: string, storeId: string): Promise<void> {
    return this._client.delete<void>(`/system/accounts/${accountTag}/stores/${storeId}/secrets`);
  }

  /**
   * Lists all secrets in a store managed by the calling service. Returns 404 if the store doesn't exist or is not managed by the authenticated service.
   *
   * @see secrets-store-system-secrets-list
   */
  async secretsList(accountTag: string, storeId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/system/accounts/${accountTag}/stores/${storeId}/secrets`, {
      query: params,
    });
  }

  /**
   * Creates one or more secrets in a store managed by the calling service. Returns 404 if the store doesn't exist or is not managed by the authenticated service.
   *
   * @see secrets-store-system-secret-create
   */
  async secretsCreate(accountTag: string, storeId: string): Promise<unknown> {
    return this._client.post<unknown>(`/system/accounts/${accountTag}/stores/${storeId}/secrets`);
  }

  /**
   * Deletes a single secret from a store managed by the calling service. Returns 404 if the store doesn't exist or is not managed by the authenticated service.
   *
   * @see secrets-store-system-secret-delete-by-id
   */
  async secretsDeleteById(accountTag: string, storeId: string, secretId: string): Promise<void> {
    return this._client.delete<void>(`/system/accounts/${accountTag}/stores/${storeId}/secrets/${secretId}`);
  }

  /**
   * Returns details of a single secret from a store managed by the calling service. Returns 404 if the store doesn't exist or is not managed by the authenticated service.
   *
   * @see secrets-store-system-get-by-id
   */
  async secretsGet(accountTag: string, storeId: string, secretId: string): Promise<unknown> {
    return this._client.get<unknown>(`/system/accounts/${accountTag}/stores/${storeId}/secrets/${secretId}`);
  }

  /**
   * Updates a single secret in a store managed by the calling service. Returns 404 if the store doesn't exist or is not managed by the authenticated service.
   *
   * @see secrets-store-system-patch-by-id
   */
  async secretsEdit(accountTag: string, storeId: string, secretId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/system/accounts/${accountTag}/stores/${storeId}/secrets/${secretId}`);
  }

  /**
   * Duplicates a secret in a store managed by the calling service, keeping the value. Returns 404 if the store doesn't exist or is not managed by the authenticated service.
   *
   * @see secrets-store-system-duplicate-by-id
   */
  async secretsDuplicateCreate(accountTag: string, storeId: string, secretId: string): Promise<unknown> {
    return this._client.post<unknown>(`/system/accounts/${accountTag}/stores/${storeId}/secrets/${secretId}/duplicate`);
  }
}

/**
 * Centralized secret management — store API keys, tokens, and credentials for use across Workers and other products
 */
export class SecretsStore extends APIResource {
  readonly stores: Stores;
  readonly quota: Quota;
  readonly storesextra: StoresExtra;

  constructor(client: CloudflareClient) {
    super(client);
    this.stores = new Stores(client);
    this.quota = new Quota(client);
    this.storesextra = new StoresExtra(client);
  }
}
