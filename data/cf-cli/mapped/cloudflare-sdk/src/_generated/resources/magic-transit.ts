/**
 * magic-transit resource
 * @generated from apis/magic-transit/schema.ts
 *
 * DDoS-protected network transit — GRE/IPsec tunnels, static routes, Magic WAN sites, connectors, and packet captures
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Application-aware traffic policies for Magic WAN that steer traffic by app type
 */
export class Apps extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists Apps associated with an account.
   *
   * @see magic-account-apps-list-apps
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/apps`);
  }

  /**
   * Creates a new App for an account
   *
   * @see magic-account-apps-add-app
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/apps`);
  }

  /**
   * Updates an Account App
   *
   * @see magic-account-apps-update-app
   */
  async update(accountId: string, accountAppId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/magic/apps/${accountAppId}`);
  }

  /**
   * Updates an Account App
   *
   * @see magic-account-apps-patch-app
   */
  async edit(accountId: string, accountAppId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/magic/apps/${accountAppId}`);
  }

  /**
   * Deletes specific Account App.
   *
   * @see magic-account-apps-delete-app
   */
  async delete(accountId: string, accountAppId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/magic/apps/${accountAppId}`);
  }
}

/**
 * Cloudflare Network Interconnect (CNI) links for direct physical or virtual peering
 */
export class CfInterconnects extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists interconnects associated with an account.
   *
   * @see magic-interconnects-list-interconnects
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/cf_interconnects`);
  }

  /**
   * Lists details for a specific interconnect.
   *
   * @see magic-interconnects-list-interconnect-details
   */
  async get(cfInterconnectId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/cf_interconnects/${cfInterconnectId}`);
  }

  /**
   * Updates a specific interconnect associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
   *
   * @see magic-interconnects-update-interconnect
   */
  async update(cfInterconnectId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/magic/cf_interconnects/${cfInterconnectId}`);
  }

  /**
   * Updates multiple interconnects associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
   *
   * @see magic-interconnects-update-multiple-interconnects
   */
  async bulkUpdate(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/magic/cf_interconnects`);
  }
}

/**
 * GRE tunnel endpoints that connect your network to Cloudflare for Magic Transit
 */
export class GreTunnels extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists GRE tunnels associated with an account.
   *
   * @see magic-gre-tunnels-list-gre-tunnels
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/gre_tunnels`);
  }

  /**
   * Lists informtion for a specific GRE tunnel.
   *
   * @see magic-gre-tunnels-list-gre-tunnel-details
   */
  async get(greTunnelId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/gre_tunnels/${greTunnelId}`);
  }

  /**
   * Creates a new GRE tunnel. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
   *
   * @see magic-gre-tunnels-create-gre-tunnels
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/gre_tunnels`);
  }

  /**
   * Updates a specific GRE tunnel. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
   *
   * @see magic-gre-tunnels-update-gre-tunnel
   */
  async update(greTunnelId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/magic/gre_tunnels/${greTunnelId}`);
  }

  /**
   * Disables and removes a specific static GRE tunnel. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
   *
   * @see magic-gre-tunnels-delete-gre-tunnel
   */
  async delete(greTunnelId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/magic/gre_tunnels/${greTunnelId}`);
  }

  /**
   * Updates multiple GRE tunnels. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
   *
   * @see magic-gre-tunnels-update-multiple-gre-tunnels
   */
  async bulkUpdate(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/magic/gre_tunnels`);
  }
}

/**
 * IPsec tunnel endpoints with pre-shared key management for encrypted transit
 */
export class IpsecTunnels extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists IPsec tunnels associated with an account.
   *
   * @see magic-ipsec-tunnels-list-ipsec-tunnels
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/ipsec_tunnels`);
  }

  /**
   * Lists details for a specific IPsec tunnel.
   *
   * @see magic-ipsec-tunnels-list-ipsec-tunnel-details
   */
  async get(ipsecTunnelId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/ipsec_tunnels/${ipsecTunnelId}`);
  }

  /**
   * Creates a new IPsec tunnel associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
   *
   * @see magic-ipsec-tunnels-create-ipsec-tunnels
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/ipsec_tunnels`);
  }

  /**
   * Updates a specific IPsec tunnel associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
   *
   * @see magic-ipsec-tunnels-update-ipsec-tunnel
   */
  async update(ipsecTunnelId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/magic/ipsec_tunnels/${ipsecTunnelId}`);
  }

  /**
   * Disables and removes a specific static IPsec Tunnel associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
   *
   * @see magic-ipsec-tunnels-delete-ipsec-tunnel
   */
  async delete(ipsecTunnelId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/magic/ipsec_tunnels/${ipsecTunnelId}`);
  }

  /**
   * Update multiple IPsec tunnels associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
   *
   * @see magic-ipsec-tunnels-update-multiple-ipsec-tunnels
   */
  async bulkUpdate(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/magic/ipsec_tunnels`);
  }

  /**
   * Generates a Pre Shared Key for a specific IPsec tunnel used in the IKE session. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes. After a PSK is generated, the PSK is immediately persisted to Cloudflare's edge and cannot be retrieved later. Note the PSK in a safe place.
   *
   * @see magic-ipsec-tunnels-generate-pre-shared-key-(-psk)-for-ipsec-tunnels
   */
  async pskGenerate(ipsecTunnelId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/ipsec_tunnels/${ipsecTunnelId}/psk_generate`);
  }
}

/**
 * Static routes that direct IP prefix traffic through specific GRE/IPsec tunnels
 */
export class Routes extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List all Magic static routes.
   *
   * @see magic-static-routes-list-routes
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/routes`);
  }

  /**
   * Get a specific Magic static route.
   *
   * @see magic-static-routes-route-details
   */
  async get(routeId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/routes/${routeId}`);
  }

  /**
   * Creates a new Magic static route. Use `?validate_only=true` as an optional query parameter to run validation only without persisting changes.
   *
   * @see magic-static-routes-create-routes
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/routes`);
  }

  /**
   * Update a specific Magic static route. Use `?validate_only=true` as an optional query parameter to run validation only without persisting changes.
   *
   * @see magic-static-routes-update-route
   */
  async update(routeId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/magic/routes/${routeId}`);
  }

  /**
   * Disable and remove a specific Magic static route.
   *
   * @see magic-static-routes-delete-route
   */
  async delete(routeId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/magic/routes/${routeId}`);
  }

  /**
   * Update multiple Magic static routes. Use `?validate_only=true` as an optional query parameter to run validation only without persisting changes. Only fields for a route that need to be changed need be provided.
   *
   * @see magic-static-routes-update-many-routes
   */
  async bulkUpdate(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/magic/routes`);
  }

  /**
   * Delete multiple Magic static routes.
   *
   * @see magic-static-routes-delete-many-routes
   */
  async empty(accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/magic/routes`);
  }
}

/**
 * Magic WAN branch sites with LAN/WAN interface configuration and connector assignments
 */
export class Sites extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists Sites associated with an account. Use connectorid query param to return sites where connectorid matches either site.ConnectorID or site.SecondaryConnectorID.
   *
   * @see magic-sites-list-sites
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/sites`, {
      query: params,
    });
  }

  /**
   * Get a specific Site.
   *
   * @see magic-sites-site-details
   */
  async get(siteId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/sites/${siteId}`);
  }

  /**
   * Creates a new Site
   *
   * @see magic-sites-create-site
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/sites`);
  }

  /**
   * Update a specific Site.
   *
   * @see magic-sites-update-site
   */
  async update(siteId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/magic/sites/${siteId}`);
  }

  /**
   * Patch a specific Site.
   *
   * @see magic-sites-patch-site
   */
  async edit(siteId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/magic/sites/${siteId}`);
  }

  /**
   * Remove a specific Site.
   *
   * @see magic-sites-delete-site
   */
  async delete(siteId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/magic/sites/${siteId}`);
  }

  /**
   * Lists Site ACLs associated with an account.
   *
   * @see magic-site-acls-list-acls
   */
  async aclsList(accountId: string, siteId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/acls`);
  }

  /**
   * Get a specific Site ACL.
   *
   * @see magic-site-acls-acl-details
   */
  async aclsGet(siteId: string, accountId: string, aclId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/acls/${aclId}`);
  }

  /**
   * Creates a new Site ACL.
   *
   * @see magic-site-acls-create-acl
   */
  async aclsCreate(accountId: string, siteId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/acls`);
  }

  /**
   * Update a specific Site ACL.
   *
   * @see magic-site-acls-update-acl
   */
  async aclsUpdate(siteId: string, accountId: string, aclId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/acls/${aclId}`);
  }

  /**
   * Patch a specific Site ACL.
   *
   * @see magic-site-acls-patch-acl
   */
  async aclsEdit(siteId: string, accountId: string, aclId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/acls/${aclId}`);
  }

  /**
   * Remove a specific Site ACL.
   *
   * @see magic-site-acls-delete-acl
   */
  async aclsDelete(siteId: string, accountId: string, aclId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/magic/sites/${siteId}/acls/${aclId}`);
  }

  /**
   * Lists Site LANs associated with an account.
   *
   * @see magic-site-lans-list-lans
   */
  async lansList(accountId: string, siteId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/lans`);
  }

  /**
   * Get a specific Site LAN.
   *
   * @see magic-site-lans-lan-details
   */
  async lansGet(siteId: string, accountId: string, lanId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/lans/${lanId}`);
  }

  /**
   * Creates a new Site LAN. If the site is in high availability mode, static_addressing is required along with secondary and virtual address.
   *
   * @see magic-site-lans-create-lan
   */
  async lansCreate(accountId: string, siteId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/lans`);
  }

  /**
   * Update a specific Site LAN.
   *
   * @see magic-site-lans-update-lan
   */
  async lansUpdate(siteId: string, accountId: string, lanId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/lans/${lanId}`);
  }

  /**
   * Patch a specific Site LAN.
   *
   * @see magic-site-lans-patch-lan
   */
  async lansEdit(siteId: string, accountId: string, lanId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/lans/${lanId}`);
  }

  /**
   * Remove a specific Site LAN.
   *
   * @see magic-site-lans-delete-lan
   */
  async lansDelete(siteId: string, accountId: string, lanId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/magic/sites/${siteId}/lans/${lanId}`);
  }

  /**
   * Lists Site WANs associated with an account.
   *
   * @see magic-site-wans-list-wans
   */
  async wansList(accountId: string, siteId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/wans`);
  }

  /**
   * Get a specific Site WAN.
   *
   * @see magic-site-wans-wan-details
   */
  async wansGet(siteId: string, accountId: string, wanId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/wans/${wanId}`);
  }

  /**
   * Creates a new Site WAN.
   *
   * @see magic-site-wans-create-wan
   */
  async wansCreate(accountId: string, siteId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/wans`);
  }

  /**
   * Update a specific Site WAN.
   *
   * @see magic-site-wans-update-wan
   */
  async wansUpdate(siteId: string, accountId: string, wanId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/wans/${wanId}`);
  }

  /**
   * Patch a specific Site WAN.
   *
   * @see magic-site-wans-patch-wan
   */
  async wansEdit(siteId: string, accountId: string, wanId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/wans/${wanId}`);
  }

  /**
   * Remove a specific Site WAN.
   *
   * @see magic-site-wans-delete-wan
   */
  async wansDelete(siteId: string, accountId: string, wanId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/magic/sites/${siteId}/wans/${wanId}`);
  }
}

/**
 * Magic WAN Connector appliances — provisioning, telemetry events, and configuration snapshots
 */
export class Connectors extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all Magic WAN Connectors configured for the account with their status and connection information.
   *
   * @see mconn-connector-list
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/connectors`);
  }

  /**
   * Retrieves detailed configuration for a specific Magic WAN Connector, including its status and network settings.
   *
   * @see mconn-connector-fetch
   */
  async get(accountId: string, connectorId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/connectors/${connectorId}`);
  }

  /**
   * Creates a new Magic WAN Connector for establishing secure network connectivity. Connectors enable site-to-site VPN and SDWAN functionality.
   *
   * @see mconn-connector-create
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/connectors`);
  }

  /**
   * Replaces the configuration of an existing Magic WAN Connector with new settings.
   *
   * @see mconn-connector-replace
   */
  async update(accountId: string, connectorId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/magic/connectors/${connectorId}`);
  }

  /**
   * Updates the configuration of an existing Magic WAN Connector, such as network settings or policies.
   *
   * @see mconn-connector-update
   */
  async edit(accountId: string, connectorId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/magic/connectors/${connectorId}`);
  }

  /**
   * Removes a Magic WAN Connector. The connector will be deregistered and network connectivity through it will be terminated.
   *
   * @see mconn-connector-delete
   */
  async delete(accountId: string, connectorId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/magic/connectors/${connectorId}`);
  }

  /**
   * Lists telemetry events from a Magic WAN Connector, showing connection events and status changes.
   *
   * @see mconn-connector-telemetry-events-list
   */
  async eventsList(accountId: string, connectorId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/connectors/${connectorId}/telemetry/events`, {
      query: params,
    });
  }

  /**
   * Retrieves a specific telemetry event from a Magic WAN Connector for troubleshooting and monitoring.
   *
   * @see mconn-connector-telemetry-events-get
   */
  async eventsGet(accountId: string, connectorId: string, eventT: string, eventN: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/magic/connectors/${connectorId}/telemetry/events/${eventT}.${eventN}`,
    );
  }

  /**
   * Retrieves the most recent telemetry events from a Magic WAN Connector.
   *
   * @see mconn-connector-telemetry-events-listLatest
   */
  async eventsLatestList(accountId: string, connectorId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/connectors/${connectorId}/telemetry/events/latest`);
  }

  /**
   * Lists telemetry snapshots from a Magic WAN Connector, providing historical performance data.
   *
   * @see mconn-connector-telemetry-snapshots-list
   */
  async snapshotsList(accountId: string, connectorId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/connectors/${connectorId}/telemetry/snapshots`, {
      query: params,
    });
  }

  /**
   * Gets a specific telemetry snapshot from a Magic WAN Connector, showing point-in-time metrics.
   *
   * @see mconn-connector-telemetry-snapshots-get
   */
  async snapshotsGet(accountId: string, connectorId: string, snapshotT: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/magic/connectors/${connectorId}/telemetry/snapshots/${snapshotT}`,
    );
  }

  /**
   * Retrieves the most recent telemetry snapshots from a Magic WAN Connector.
   *
   * @see mconn-connector-telemetry-snapshots-listLatest
   */
  async snapshotsLatestList(accountId: string, connectorId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/magic/connectors/${connectorId}/telemetry/snapshots/latest`,
    );
  }
}

/**
 * Packet capture requests for debugging traffic flowing through Magic Transit tunnels
 */
export class Pcaps extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all packet capture requests for an account.
   *
   * @see magic-pcap-collection-list-packet-capture-requests
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/pcaps`);
  }

  /**
   * Get information for a PCAP request by id.
   *
   * @see magic-pcap-collection-get-pcap-request
   */
  async get(pcapId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/pcaps/${pcapId}`);
  }

  /**
   * Create new PCAP request for account.
   *
   * @see magic-pcap-collection-create-pcap-request
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/pcaps`);
  }

  /**
   * Stop full PCAP.
   *
   * @see magic-pcap-collection-stop-full-pcap
   */
  async stop(pcapId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/pcaps/${pcapId}/stop`);
  }

  /**
   * List all buckets configured for use with PCAPs API.
   *
   * @see magic-pcap-collection-list-pca-ps-bucket-ownership
   */
  async ownershipGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/pcaps/ownership`);
  }

  /**
   * Adds an AWS or GCP bucket to use with full packet captures.
   *
   * @see magic-pcap-collection-add-buckets-for-full-packet-captures
   */
  async ownershipCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/pcaps/ownership`);
  }

  /**
   * Deletes buckets added to the packet captures API.
   *
   * @see magic-pcap-collection-delete-buckets-for-full-packet-captures
   */
  async ownershipDelete(ownershipId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/pcaps/ownership/${ownershipId}`);
  }

  /**
   * Validates buckets added to the packet captures API.
   *
   * @see magic-pcap-collection-validate-buckets-for-full-packet-captures
   */
  async ownershipValidate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/pcaps/ownership/validate`);
  }

  /**
   * Download PCAP information into a file. Response is a binary PCAP file.
   *
   * @see magic-pcap-collection-download-simple-pcap
   */
  async downloadGet(pcapId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/pcaps/${pcapId}/download`);
  }
}

/**
 * Advanced Dns Protection operations
 */
export class AdvancedDNSProtection extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Delete all DNS Protection rules for an account.
   *
   * @see deleteDnsProtectionRulesForAccount
   */
  async configsDnsProtectionRulesDeleteForAccount(accountId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/magic/advanced_dns_protection/configs/dns_protection/rules`,
    );
  }

  /**
   * List all DNS Protection rules for an account.
   *
   * @see listDnsProtectionRulesForAccount
   */
  async configsDnsProtectionRulesList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/magic/advanced_dns_protection/configs/dns_protection/rules`,
      {
        query: params,
      },
    );
  }

  /**
   * Create a DNS Protection rule for an account.
   *
   * @see createDnsProtectionRule
   */
  async configsDnsProtectionRulesCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/magic/advanced_dns_protection/configs/dns_protection/rules`,
    );
  }

  /**
   * Delete a DNS Protection rule specified by the given UUID.
   *
   * @see deleteDnsProtectionRule
   */
  async configsDnsProtectionRulesDeleteProtectionRule(accountId: string, ruleId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/magic/advanced_dns_protection/configs/dns_protection/rules/${ruleId}`,
    );
  }

  /**
   * Get a DNS Protection rule specified by the given UUID.
   *
   * @see getDnsProtectionRule
   */
  async configsDnsProtectionRulesGet(accountId: string, ruleId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/magic/advanced_dns_protection/configs/dns_protection/rules/${ruleId}`,
    );
  }

  /**
   * Update a DNS Protection rule specified by the given UUID.
   *
   * @see updateDnsProtectionRule
   */
  async configsDnsProtectionRulesUpdate(accountId: string, ruleId: string): Promise<unknown> {
    return this._client.patch<unknown>(
      `/accounts/${accountId}/magic/advanced_dns_protection/configs/dns_protection/rules/${ruleId}`,
    );
  }
}

/**
 * Advanced Tcp Protection operations
 */
export class AdvancedTCPProtection extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Delete all allowlist prefixes for an account.
   *
   * @see deleteAllowlistPrefixesForAccount
   */
  async configsAllowlistDeleteForAccount(accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/magic/advanced_tcp_protection/configs/allowlist`);
  }

  /**
   * List all allowlist prefixes for an account.
   *
   * @see listAllowlistPrefixesForAccount
   */
  async configsAllowlistList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/advanced_tcp_protection/configs/allowlist`, {
      query: params,
    });
  }

  /**
   * Create an allowlist prefix for an account.
   *
   * @see createAllowlistedPrefix
   */
  async configsAllowlistCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/advanced_tcp_protection/configs/allowlist`);
  }

  /**
   * Delete the allowlist prefix for an account given a UUID.
   *
   * @see deleteAllowlistPrefix
   */
  async configsAllowlistDeleteAllowlistPrefix(accountId: string, prefixId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/allowlist/${prefixId}`,
    );
  }

  /**
   * Get an allowlist prefix specified by the given UUID.
   *
   * @see getAllowlistPrefix
   */
  async configsAllowlistGet(accountId: string, prefixId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/allowlist/${prefixId}`,
    );
  }

  /**
   * Update an allowlist prefix specified by the given UUID.
   *
   * @see updateAllowlistPrefix
   */
  async configsAllowlistUpdate(accountId: string, prefixId: string): Promise<unknown> {
    return this._client.patch<unknown>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/allowlist/${prefixId}`,
    );
  }

  /**
   * Delete all prefixes for an account.
   *
   * @see deletePrefixesForAccount
   */
  async configsPrefixesDeleteForAccount(accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/magic/advanced_tcp_protection/configs/prefixes`);
  }

  /**
   * List all prefixes for an account.
   *
   * @see listPrefixesForAccount
   */
  async configsPrefixesList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/advanced_tcp_protection/configs/prefixes`, {
      query: params,
    });
  }

  /**
   * Create a prefix for an account.
   *
   * @see createPrefix
   */
  async configsPrefixesCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/advanced_tcp_protection/configs/prefixes`);
  }

  /**
   * Create multiple prefixes for an account.
   *
   * @see bulkCreatePrefixes
   */
  async configsPrefixesBulkCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/advanced_tcp_protection/configs/prefixes/bulk`);
  }

  /**
   * Delete the prefix for an account given a UUID.
   *
   * @see deletePrefix
   */
  async configsPrefixesDeletePrefix(accountId: string, prefixId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/prefixes/${prefixId}`,
    );
  }

  /**
   * Get a prefix specified by the given UUID.
   *
   * @see getPrefix
   */
  async configsPrefixesGet(accountId: string, prefixId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/prefixes/${prefixId}`,
    );
  }

  /**
   * Update a prefix specified by the given UUID.
   *
   * @see updatePrefix
   */
  async configsPrefixesUpdate(accountId: string, prefixId: string): Promise<unknown> {
    return this._client.patch<unknown>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/prefixes/${prefixId}`,
    );
  }

  /**
   * Delete all SYN Protection filters for an account.
   *
   * @see deleteSynProtectionFiltersForAccount
   */
  async configsSynProtectionFiltersDeleteForAccount(accountId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/syn_protection/filters`,
    );
  }

  /**
   * List all SYN Protection filters for an account.
   *
   * @see listSynProtectionFiltersForAccount
   */
  async configsSynProtectionFiltersList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/syn_protection/filters`,
      {
        query: params,
      },
    );
  }

  /**
   * Create a SYN Protection filter for an account.
   *
   * @see createSynProtectionFilter
   */
  async configsSynProtectionFiltersCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/syn_protection/filters`,
    );
  }

  /**
   * Delete a SYN Protection filter specified by the given UUID.
   *
   * @see deleteSynProtectionFilter
   */
  async configsSynProtectionFiltersDeleteProtectionFilter(accountId: string, filterId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/syn_protection/filters/${filterId}`,
    );
  }

  /**
   * Get a SYN Protection filter specified by the given UUID.
   *
   * @see getSynProtectionFilter
   */
  async configsSynProtectionFiltersGet(accountId: string, filterId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/syn_protection/filters/${filterId}`,
    );
  }

  /**
   * Update a SYN Protection filter specified by the given UUID.
   *
   * @see updateSynProtectionFilter
   */
  async configsSynProtectionFiltersUpdate(accountId: string, filterId: string): Promise<unknown> {
    return this._client.patch<unknown>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/syn_protection/filters/${filterId}`,
    );
  }

  /**
   * Delete all SYN Protection rules for an account.
   *
   * @see deleteSynProtectionRulesForAccount
   */
  async configsSynProtectionRulesDeleteForAccount(accountId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/syn_protection/rules`,
    );
  }

  /**
   * List all SYN Protection rules for an account.
   *
   * @see listSynProtectionRulesForAccount
   */
  async configsSynProtectionRulesList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/syn_protection/rules`,
      {
        query: params,
      },
    );
  }

  /**
   * Create a SYN Protection rule for an account.
   *
   * @see createSynProtectionRule
   */
  async configsSynProtectionRulesCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/syn_protection/rules`,
    );
  }

  /**
   * Delete a SYN Protection rule specified by the given UUID.
   *
   * @see deleteSynProtectionRule
   */
  async configsSynProtectionRulesDeleteProtectionRule(accountId: string, ruleId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/syn_protection/rules/${ruleId}`,
    );
  }

  /**
   * Get a SYN Protection rule specified by the given UUID.
   *
   * @see getSynProtectionRule
   */
  async configsSynProtectionRulesGet(accountId: string, ruleId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/syn_protection/rules/${ruleId}`,
    );
  }

  /**
   * Update a SYN Protection rule specified by the given UUID.
   *
   * @see updateSynProtectionRule
   */
  async configsSynProtectionRulesUpdate(accountId: string, ruleId: string): Promise<unknown> {
    return this._client.patch<unknown>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/syn_protection/rules/${ruleId}`,
    );
  }

  /**
   * Delete all TCP Flow Protection filters for an account.
   *
   * @see deleteTcpFlowProtectionFiltersForAccount
   */
  async configsTcpFlowProtectionFiltersDeleteForAccount(accountId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters`,
    );
  }

  /**
   * List all TCP Flow Protection filters for an account.
   *
   * @see listTcpFlowProtectionFiltersForAccount
   */
  async configsTcpFlowProtectionFiltersList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters`,
      {
        query: params,
      },
    );
  }

  /**
   * Create a TCP Flow Protection filter for an account.
   *
   * @see createTcpFlowProtectionFilter
   */
  async configsTcpFlowProtectionFiltersCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters`,
    );
  }

  /**
   * Delete a TCP Flow Protection filter specified by the given UUID.
   *
   * @see deleteTcpFlowProtectionFilter
   */
  async configsTcpFlowProtectionFiltersDeleteProtectionFilter(accountId: string, filterId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters/${filterId}`,
    );
  }

  /**
   * Get a TCP Flow Protection filter specified by the given UUID.
   *
   * @see getTcpFlowProtectionFilter
   */
  async configsTcpFlowProtectionFiltersGet(accountId: string, filterId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters/${filterId}`,
    );
  }

  /**
   * Update a TCP Flow Protection filter specified by the given UUID.
   *
   * @see updateTcpFlowProtectionFilter
   */
  async configsTcpFlowProtectionFiltersUpdate(accountId: string, filterId: string): Promise<unknown> {
    return this._client.patch<unknown>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters/${filterId}`,
    );
  }

  /**
   * Delete all TCP Flow Protection rules for an account.
   *
   * @see deleteTcpFlowProtectionRulesForAccount
   */
  async configsTcpFlowProtectionRulesDeleteForAccount(accountId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules`,
    );
  }

  /**
   * List all TCP Flow Protection rules for an account.
   *
   * @see listTcpFlowProtectionRulesForAccount
   */
  async configsTcpFlowProtectionRulesList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules`,
      {
        query: params,
      },
    );
  }

  /**
   * Create a TCP Flow Protection rule for an account.
   *
   * @see createTcpFlowProtectionRule
   */
  async configsTcpFlowProtectionRulesCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules`,
    );
  }

  /**
   * Delete a TCP Flow Protection rule specified by the given UUID.
   *
   * @see deleteTcpFlowProtectionRule
   */
  async configsTcpFlowProtectionRulesDeleteProtectionRule(accountId: string, ruleId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules/${ruleId}`,
    );
  }

  /**
   * Get a TCP Flow Protection rule specified by the given UUID.
   *
   * @see getTcpFlowProtectionRule
   */
  async configsTcpFlowProtectionRulesGet(accountId: string, ruleId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules/${ruleId}`,
    );
  }

  /**
   * Update a TCP Flow Protection rule specified by the given UUID.
   *
   * @see updateTcpFlowProtectionRule
   */
  async configsTcpFlowProtectionRulesUpdate(accountId: string, ruleId: string): Promise<unknown> {
    return this._client.patch<unknown>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules/${ruleId}`,
    );
  }

  /**
   * Get the protection status of the account.
   *
   * @see getProtectionStatus
   */
  async configsTcpProtectionStatusGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/tcp_protection_status`,
    );
  }

  /**
   * Update the protection status of the account.
   *
   * @see updateProtectionStatus
   */
  async configsTcpProtectionStatusUpdate(accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(
      `/accounts/${accountId}/magic/advanced_tcp_protection/configs/tcp_protection_status`,
    );
  }
}

/**
 * Sites (additional) operations
 */
export class SitesExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists App Configs associated with a site.
   *
   * @see magic-site-app-configs-list-app-configs
   */
  async appConfigsList(accountId: string, siteId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/app_configs`);
  }

  /**
   * Creates a new App Config for a site
   *
   * @see magic-site-app-configs-add-app-config
   */
  async appConfigsCreate(accountId: string, siteId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/app_configs`);
  }

  /**
   * Deletes specific App Config associated with a site.
   *
   * @see magic-site-app-configs-delete-app-config
   */
  async appConfigsDelete(accountId: string, siteId: string, appConfigId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/magic/sites/${siteId}/app_configs/${appConfigId}`);
  }

  /**
   * Updates an App Config for a site
   *
   * @see magic-site-app-configs-patch-app-config
   */
  async appConfigsEdit(accountId: string, siteId: string, appConfigId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/app_configs/${appConfigId}`);
  }

  /**
   * Updates an App Config for a site
   *
   * @see magic-site-app-configs-update-app-config
   */
  async appConfigsUpdate(accountId: string, siteId: string, appConfigId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/app_configs/${appConfigId}`);
  }

  /**
   * Remove NetFlow configuration for a site.
   *
   * @see magic-site-netflow-config-delete-netflow-config
   */
  async netflowConfigDelete(accountId: string, siteId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/magic/sites/${siteId}/netflow_config`);
  }

  /**
   * Get NetFlow configuration for a site.
   *
   * @see magic-site-netflow-config-details
   */
  async netflowConfigGet(accountId: string, siteId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/netflow_config`);
  }

  /**
   * Updates NetFlow configuration for a site.
   *
   * @see magic-site-netflow-config-patch-netflow-config
   */
  async netflowConfigEdit(accountId: string, siteId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/netflow_config`);
  }

  /**
   * Creates a NetFlow configuration for a site.
   *
   * @see magic-site-netflow-config-create-netflow-config
   */
  async netflowConfigCreate(accountId: string, siteId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/netflow_config`);
  }

  /**
   * Updates NetFlow configuration for a site (partial update).
   *
   * @see magic-site-netflow-config-update-netflow-config
   */
  async netflowConfigUpdate(accountId: string, siteId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/magic/sites/${siteId}/netflow_config`);
  }
}

/**
 * DDoS-protected network transit — GRE/IPsec tunnels, static routes, Magic WAN sites, connectors, and packet captures
 */
export class MagicTransit extends APIResource {
  readonly apps: Apps;
  readonly cfinterconnects: CfInterconnects;
  readonly gretunnels: GreTunnels;
  readonly ipsectunnels: IpsecTunnels;
  readonly routes: Routes;
  readonly sites: Sites;
  readonly connectors: Connectors;
  readonly pcaps: Pcaps;
  readonly advanceddnsprotection: AdvancedDNSProtection;
  readonly advancedtcpprotection: AdvancedTCPProtection;
  readonly sitesextra: SitesExtra;

  constructor(client: CloudflareClient) {
    super(client);
    this.apps = new Apps(client);
    this.cfinterconnects = new CfInterconnects(client);
    this.gretunnels = new GreTunnels(client);
    this.ipsectunnels = new IpsecTunnels(client);
    this.routes = new Routes(client);
    this.sites = new Sites(client);
    this.connectors = new Connectors(client);
    this.pcaps = new Pcaps(client);
    this.advanceddnsprotection = new AdvancedDNSProtection(client);
    this.advancedtcpprotection = new AdvancedTCPProtection(client);
    this.sitesextra = new SitesExtra(client);
  }
}
