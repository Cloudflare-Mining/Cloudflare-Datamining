/**
 * web3 resource
 * @generated from apis/web3/schema.ts
 *
 * Web3 gateways — serve IPFS and Ethereum content through custom hostnames on Cloudflare
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Web3 gateway hostnames with IPFS Universal Path content list management
 */
export class Hostnames extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List Web3 hostnames
   *
   * @see web3-hostname-list-web3-hostnames
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/web3/hostnames`);
  }

  /**
   * Get Web3 hostname details
   *
   * @see web3-hostname-web3-hostname-details
   */
  async get(identifier: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/web3/hostnames/${identifier}`);
  }

  /**
   * Create a Web3 hostname
   *
   * @see web3-hostname-create-web3-hostname
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/web3/hostnames`);
  }

  /**
   * Edit a Web3 hostname
   *
   * @see web3-hostname-edit-web3-hostname
   */
  async edit(identifier: string, zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/web3/hostnames/${identifier}`);
  }

  /**
   * Delete a Web3 hostname
   *
   * @see web3-hostname-delete-web3-hostname
   */
  async delete(identifier: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/web3/hostnames/${identifier}`);
  }

  /**
   * Get IPFS content list details
   *
   * @see web3-hostname-ipfs-universal-path-gateway-content-list-details
   */
  async ipfsUniversalPathsContentListsGet(identifier: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/web3/hostnames/${identifier}/ipfs_universal_path/content_list`);
  }

  /**
   * Update IPFS content list
   *
   * @see web3-hostname-update-ipfs-universal-path-gateway-content-list
   */
  async ipfsUniversalPathsContentListsUpdate(identifier: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/web3/hostnames/${identifier}/ipfs_universal_path/content_list`);
  }

  /**
   * List IPFS content list entries
   *
   * @see web3-hostname-list-ipfs-universal-path-gateway-content-list-entries
   */
  async ipfsUniversalPathsContentListsEntriesList(identifier: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/zones/${zoneId}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries`,
    );
  }

  /**
   * Get IPFS content list entry details
   *
   * @see web3-hostname-ipfs-universal-path-gateway-content-list-entry-details
   */
  async ipfsUniversalPathsContentListsEntriesGet(
    contentListEntryIdentifier: string,
    identifier: string,
    zoneId: string,
  ): Promise<unknown> {
    return this._client.get<unknown>(
      `/zones/${zoneId}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries/${contentListEntryIdentifier}`,
    );
  }

  /**
   * Create an IPFS content list entry
   *
   * @see web3-hostname-create-ipfs-universal-path-gateway-content-list-entry
   */
  async ipfsUniversalPathsContentListsEntriesCreate(identifier: string, zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/zones/${zoneId}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries`,
    );
  }

  /**
   * Edit an IPFS content list entry
   *
   * @see web3-hostname-edit-ipfs-universal-path-gateway-content-list-entry
   */
  async ipfsUniversalPathsContentListsEntriesUpdate(
    contentListEntryIdentifier: string,
    identifier: string,
    zoneId: string,
  ): Promise<unknown> {
    return this._client.put<unknown>(
      `/zones/${zoneId}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries/${contentListEntryIdentifier}`,
    );
  }

  /**
   * Delete an IPFS content list entry
   *
   * @see web3-hostname-delete-ipfs-universal-path-gateway-content-list-entry
   */
  async ipfsUniversalPathsContentListsEntriesDelete(
    contentListEntryIdentifier: string,
    identifier: string,
    zoneId: string,
  ): Promise<void> {
    return this._client.delete<void>(
      `/zones/${zoneId}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries/${contentListEntryIdentifier}`,
    );
  }
}

/**
 * Web3 gateways — serve IPFS and Ethereum content through custom hostnames on Cloudflare
 */
export class Web3 extends APIResource {
  readonly hostnames: Hostnames;

  constructor(client: CloudflareClient) {
    super(client);
    this.hostnames = new Hostnames(client);
  }
}
