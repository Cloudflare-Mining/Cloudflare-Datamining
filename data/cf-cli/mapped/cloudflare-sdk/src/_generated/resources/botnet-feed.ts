/**
 * botnet-feed resource
 * @generated from apis/botnet-feed/schema.ts
 *
 * Botnet threat intelligence feeds — IP and ASN-level data on known command-and-control infrastructure
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * ASN-level botnet activity data showing networks with known C2 infrastructure
 */
export class Asn extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets all the data the botnet tracking database has for a given ASN registered to user account for given date. If no date is given, it will return results for the previous day.
   *
   * @see botnet-threat-feed-get-day-report
   */
  async dayReport(accountId: string, asnId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/botnet_feed/asn/${asnId}/day_report`, {
      query: params,
    });
  }

  /**
   * Gets all the data the botnet threat feed tracking database has for a given ASN registered to user account.
   *
   * @see botnet-threat-feed-get-full-report
   */
  async fullReport(accountId: string, asnId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/botnet_feed/asn/${asnId}/full_report`);
  }
}

/**
 * Botnet feed subscription configuration and notification preferences
 */
export class Configs extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets a list of all ASNs registered for a user for the DDoS Botnet Feed API.
   *
   * @see botnet-threat-feed-list-asn
   */
  async asnGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/botnet_feed/configs/asn`);
  }

  /**
   * Delete an ASN from botnet threat feed for a given user.
   *
   * @see botnet-threat-feed-delete-asn
   */
  async asnDelete(accountId: string, asnId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/botnet_feed/configs/asn/${asnId}`);
  }
}

/**
 * Botnet threat intelligence feeds — IP and ASN-level data on known command-and-control infrastructure
 */
export class BotnetFeed extends APIResource {
  readonly asn: Asn;
  readonly configs: Configs;

  constructor(client: CloudflareClient) {
    super(client);
    this.asn = new Asn(client);
    this.configs = new Configs(client);
  }
}
