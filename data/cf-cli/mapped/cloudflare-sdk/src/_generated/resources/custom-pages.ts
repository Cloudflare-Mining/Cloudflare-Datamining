/**
 * custom-pages resource
 * @generated from apis/custom-pages/schema.ts
 *
 * Custom error and challenge pages (1000s, WAF blocks, captchas) for zones and accounts
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Assets operations
 */
export class Assets extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches all the custom assets at the account level.
   *
   * @see custom-assets-for-an-account-list-custom-assets
   */
  async listCustomAssets(accountIdentifier: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountIdentifier}/custom_pages/assets`, {
      query: params,
    });
  }

  /**
   * Creates a new custom asset at the account level.
   *
   * @see custom-assets-for-an-account-create-a-custom-asset
   */
  async createCustomAsset(accountIdentifier: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountIdentifier}/custom_pages/assets`);
  }

  /**
   * Deletes an existing custom asset.
   *
   * @see custom-assets-for-an-account-delete-a-custom-asset
   */
  async deleteCustomAsset(assetName: string, accountIdentifier: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountIdentifier}/custom_pages/assets/${assetName}`);
  }

  /**
   * Fetches the details of a custom asset.
   *
   * @see custom-assets-for-an-account-get-a-custom-asset
   */
  async getCustomAsset(assetName: string, accountIdentifier: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountIdentifier}/custom_pages/assets/${assetName}`);
  }

  /**
   * Updates the configuration of an existing custom asset.
   *
   * @see custom-assets-for-an-account-update-a-custom-asset
   */
  async updateCustomAsset(assetName: string, accountIdentifier: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountIdentifier}/custom_pages/assets/${assetName}`);
  }

  /**
   * Fetches all the custom assets at the zone level.
   *
   * @see custom-assets-for-a-zone-list-custom-assets
   */
  async listV2(zoneIdentifier: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneIdentifier}/custom_pages/assets`, {
      query: params,
    });
  }

  /**
   * Creates a new custom asset at the zone level.
   *
   * @see custom-assets-for-a-zone-create-a-custom-asset
   */
  async createV2(zoneIdentifier: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneIdentifier}/custom_pages/assets`);
  }

  /**
   * Deletes an existing custom asset.
   *
   * @see custom-assets-for-a-zone-delete-a-custom-asset
   */
  async deleteV2(assetName: string, zoneIdentifier: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneIdentifier}/custom_pages/assets/${assetName}`);
  }

  /**
   * Fetches the details of a custom asset.
   *
   * @see custom-assets-for-a-zone-get-a-custom-asset
   */
  async getV2(assetName: string, zoneIdentifier: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneIdentifier}/custom_pages/assets/${assetName}`);
  }

  /**
   * Updates the configuration of an existing custom asset.
   *
   * @see custom-assets-for-a-zone-update-a-custom-asset
   */
  async updateV2(assetName: string, zoneIdentifier: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneIdentifier}/custom_pages/assets/${assetName}`);
  }
}

/**
 * Custom error and challenge pages (1000s, WAF blocks, captchas) for zones and accounts
 */
export class CustomPages extends APIResource {
  readonly assets: Assets;

  constructor(client: CloudflareClient) {
    super(client);
    this.assets = new Assets(client);
  }

  /**
   * Fetches all the custom pages at the account level.
   *
   * @see custom-pages-for-an-account-list-custom-pages
   */
  async list(accountIdentifier: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountIdentifier}/custom_pages`);
  }

  /**
   * Fetches the details of a custom page.
   *
   * @see custom-pages-for-an-account-get-a-custom-page
   */
  async get(identifier: string, accountIdentifier: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountIdentifier}/custom_pages/${identifier}`);
  }

  /**
   * Updates the configuration of an existing custom page.
   *
   * @see custom-pages-for-a-zone-update-a-custom-page
   */
  async update(identifier: string, zoneIdentifier: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneIdentifier}/custom_pages/${identifier}`);
  }

  /**
   * Updates the configuration of an existing custom page.
   *
   * @see custom-pages-for-an-account-update-a-custom-page
   */
  async updateExtra(identifier: string, accountIdentifier: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountIdentifier}/custom_pages/${identifier}`);
  }

  /**
   * Fetches all the custom pages at the zone level.
   *
   * @see custom-pages-for-a-zone-list-custom-pages
   */
  async listExtra(zoneIdentifier: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneIdentifier}/custom_pages`);
  }

  /**
   * Fetches the details of a custom page.
   *
   * @see custom-pages-for-a-zone-get-a-custom-page
   */
  async getExtra(identifier: string, zoneIdentifier: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneIdentifier}/custom_pages/${identifier}`);
  }
}
