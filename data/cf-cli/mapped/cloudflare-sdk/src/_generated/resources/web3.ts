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
   * Lists all Web3 hostnames configured for the zone.
   *
   * @see web3-hostname-list-web3-hostnames
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/web3/hostnames`);
  }

  /**
   * Retrieves details for a specific Web3 hostname, including its target gateway and DNSLink settings.
   *
   * @see web3-hostname-web3-hostname-details
   */
  async get(identifier: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/web3/hostnames/${identifier}`);
  }

  /**
   * Creates a new Web3 hostname for serving decentralized web content.
   *
   * @see web3-hostname-create-web3-hostname
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/web3/hostnames`);
  }

  /**
   * Updates a Web3 hostname configuration.
   *
   * @see web3-hostname-edit-web3-hostname
   */
  async edit(identifier: string, zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/web3/hostnames/${identifier}`);
  }

  /**
   * Deletes a Web3 hostname and its configuration from the zone.
   *
   * @see web3-hostname-delete-web3-hostname
   */
  async delete(identifier: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/web3/hostnames/${identifier}`);
  }

  /**
   * Retrieves the IPFS Universal Path Gateway content list configuration for a Web3 hostname.
   *
   * @see web3-hostname-ipfs-universal-path-gateway-content-list-details
   */
  async ipfsUniversalPathsContentListsGet(identifier: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/web3/hostnames/${identifier}/ipfs_universal_path/content_list`);
  }

  /**
   * Updates the IPFS Universal Path Gateway content list for a Web3 hostname.
   *
   * @see web3-hostname-update-ipfs-universal-path-gateway-content-list
   */
  async ipfsUniversalPathsContentListsUpdate(identifier: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/web3/hostnames/${identifier}/ipfs_universal_path/content_list`);
  }

  /**
   * Lists entries in an IPFS Universal Path Gateway content list.
   *
   * @see web3-hostname-list-ipfs-universal-path-gateway-content-list-entries
   */
  async ipfsUniversalPathsContentListsEntriesList(identifier: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/zones/${zoneId}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries`,
    );
  }

  /**
   * Retrieves details for a specific IPFS Universal Path Gateway content list entry.
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
   * Creates a new entry in an IPFS Universal Path Gateway content list.
   *
   * @see web3-hostname-create-ipfs-universal-path-gateway-content-list-entry
   */
  async ipfsUniversalPathsContentListsEntriesCreate(identifier: string, zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/zones/${zoneId}/web3/hostnames/${identifier}/ipfs_universal_path/content_list/entries`,
    );
  }

  /**
   * Updates an IPFS Universal Path Gateway content list entry.
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
   * Deletes an entry from an IPFS Universal Path Gateway content list.
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
