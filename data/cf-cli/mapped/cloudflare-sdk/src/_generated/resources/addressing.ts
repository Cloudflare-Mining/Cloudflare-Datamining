/**
 * addressing resource
 * @generated from apis/addressing/schema.ts
 *
 * IP address management — BYOIP prefixes, address maps, regional hostnames, and BGP advertisement control
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Pin hostnames to specific geographic regions for data locality compliance
 */
export class RegionalHostnames extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List all Regional Hostnames within a zone.
   *
   * @see dls-account-regional-hostnames-account-list-hostnames
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/addressing/regional_hostnames`);
  }

  /**
   * Fetch the configuration for a specific Regional Hostname, within a zone.
   *
   * @see dls-account-regional-hostnames-account-fetch-hostname
   */
  async get(zoneId: string, hostname: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/addressing/regional_hostnames/${hostname}`);
  }

  /**
   * Create a new Regional Hostname entry. Cloudflare will only use data centers that are physically located within the chosen region to decrypt and service HTTPS traffic. Learn more about [Regional Services](https://developers.cloudflare.com/data-localization/regional-services/get-started/).
   *
   * @see dls-account-regional-hostnames-account-create-hostname
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/addressing/regional_hostnames`);
  }

  /**
   * Update the configuration for a specific Regional Hostname. Only the region_key of a hostname is mutable.
   *
   * @see dls-account-regional-hostnames-account-patch-hostname
   */
  async edit(zoneId: string, hostname: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/addressing/regional_hostnames/${hostname}`);
  }

  /**
   * Delete the region configuration for a specific Regional Hostname.
   *
   * @see dls-account-regional-hostnames-account-delete-hostname
   */
  async delete(zoneId: string, hostname: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/addressing/regional_hostnames/${hostname}`);
  }

  /**
   * List all Regional Services regions available for use by this account.
   *
   * @see dls-account-regional-hostnames-account-list-regions
   */
  async regionsList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/addressing/regional_hostnames/regions`);
  }
}

/**
 * Cloudflare services (CDN, Spectrum, Magic Transit) that IP prefixes can be bound to
 */
export class Services extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Bring-Your-Own IP (BYOIP) prefixes onboarded to Cloudflare must be bound to a service running on the Cloudflare network to enable a Cloudflare product on the IP addresses. This endpoint can be used as a reference of available services on the Cloudflare network, and their service IDs.
   *
   * @see ip-address-management-service-bindings-list-services
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/addressing/services`);
  }
}

/**
 * Map Cloudflare IPs to specific zones or accounts for custom Anycast addressing
 */
export class AddressMaps extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List all address maps owned by the account.
   *
   * @see ip-address-management-address-maps-list-address-maps
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/addressing/address_maps`);
  }

  /**
   * Show a particular address map owned by the account.
   *
   * @see ip-address-management-address-maps-address-map-details
   */
  async get(addressMapId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/addressing/address_maps/${addressMapId}`);
  }

  /**
   * Create a new address map under the account.
   *
   * @see ip-address-management-address-maps-create-address-map
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/addressing/address_maps`);
  }

  /**
   * Modify properties of an address map owned by the account.
   *
   * @see ip-address-management-address-maps-update-address-map
   */
  async edit(addressMapId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/addressing/address_maps/${addressMapId}`);
  }

  /**
   * Delete a particular address map owned by the account. An Address Map must be disabled before it can be deleted.
   *
   * @see ip-address-management-address-maps-delete-address-map
   */
  async delete(addressMapId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/addressing/address_maps/${addressMapId}`);
  }

  /**
   * Add an account as a member of a particular address map.
   *
   * @see ip-address-management-address-maps-add-an-account-membership-to-an-address-map
   */
  async accountsUpdate(accountId: string, addressMapId: string): Promise<unknown> {
    return this._client.put<unknown>(
      `/accounts/${accountId}/addressing/address_maps/${addressMapId}/accounts/${accountId}`,
    );
  }

  /**
   * Remove an account as a member of a particular address map.
   *
   * @see ip-address-management-address-maps-remove-an-account-membership-from-an-address-map
   */
  async accountsDelete(accountId: string, addressMapId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/addressing/address_maps/${addressMapId}/accounts/${accountId}`,
    );
  }

  /**
   * Add an IP from a prefix owned by the account to a particular address map.
   *
   * @see ip-address-management-address-maps-add-an-ip-to-an-address-map
   */
  async ipsUpdate(ipAddress: string, addressMapId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/addressing/address_maps/${addressMapId}/ips/${ipAddress}`);
  }

  /**
   * Remove an IP from a particular address map.
   *
   * @see ip-address-management-address-maps-remove-an-ip-from-an-address-map
   */
  async ipsDelete(ipAddress: string, addressMapId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/addressing/address_maps/${addressMapId}/ips/${ipAddress}`);
  }

  /**
   * Add a zone as a member of a particular address map.
   *
   * @see ip-address-management-address-maps-add-a-zone-membership-to-an-address-map
   */
  async zonesUpdate(zoneId: string, addressMapId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/addressing/address_maps/${addressMapId}/zones/${zoneId}`);
  }

  /**
   * Remove a zone as a member of a particular address map.
   *
   * @see ip-address-management-address-maps-remove-a-zone-membership-from-an-address-map
   */
  async zonesDelete(zoneId: string, addressMapId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/addressing/address_maps/${addressMapId}/zones/${zoneId}`);
  }
}

/**
 * Letter of Authorization documents required to verify IP prefix ownership
 */
export class LoaDocuments extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Download specified LOA document under the account.
   *
   * @see ip-address-management-prefixes-download-loa-document
   */
  async get(loaDocumentId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/addressing/loa_documents/${loaDocumentId}/download`);
  }

  /**
   * Submit LOA document (pdf format) under the account.
   *
   * @see ip-address-management-prefixes-upload-loa-document
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/addressing/loa_documents`);
  }
}

/**
 * BYOIP prefixes — onboard your own IP ranges, manage BGP announcements, service bindings, and delegations
 */
export class Prefixes extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List all prefixes owned by the account.
   *
   * @see ip-address-management-prefixes-list-prefixes
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/addressing/prefixes`);
  }

  /**
   * List a particular prefix owned by the account.
   *
   * @see ip-address-management-prefixes-prefix-details
   */
  async get(prefixId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/addressing/prefixes/${prefixId}`);
  }

  /**
   * Add a new prefix under the account.
   *
   * @see ip-address-management-prefixes-add-prefix
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/addressing/prefixes`);
  }

  /**
   * Modify the description for a prefix owned by the account.
   *
   * @see ip-address-management-prefixes-update-prefix-description
   */
  async edit(prefixId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/addressing/prefixes/${prefixId}`);
  }

  /**
   * Delete an unapproved prefix owned by the account.
   *
   * @see ip-address-management-prefixes-delete-prefix
   */
  async delete(prefixId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/addressing/prefixes/${prefixId}`);
  }

  /**
   * List the Cloudflare services this prefix is currently bound to. Traffic sent to an address within an IP prefix will be routed to the Cloudflare service of the most-specific Service Binding matching the address. **Example:** binding `192.0.2.0/24` to Cloudflare Magic Transit and `192.0.2.1/32` to the Cloudflare CDN would route traffic for `192.0.2.1` to the CDN, and traffic for all other IPs in the prefix to Cloudflare Magic Transit.
   *
   * @see ip-address-management-service-bindings-list-service-bindings
   */
  async serviceBindingsList(accountId: string, prefixId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/addressing/prefixes/${prefixId}/bindings`);
  }

  /**
   * Fetch a single Service Binding
   *
   * @see ip-address-management-service-bindings-get-service-binding
   */
  async serviceBindingsGet(accountId: string, prefixId: string, bindingId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/addressing/prefixes/${prefixId}/bindings/${bindingId}`);
  }

  /**
   * Creates a new Service Binding, routing traffic to IPs within the given CIDR to a service running on Cloudflare's network. **NOTE:** The first Service Binding created for an IP Prefix must exactly match the IP Prefix's CIDR. Subsequent Service Bindings may be created with a more-specific CIDR. Refer to the [Service Bindings Documentation](https://developers.cloudflare.com/byoip/service-bindings/) for compatibility details.
   *
   * @see ip-address-management-service-bindings-create-service-binding
   */
  async serviceBindingsCreate(accountId: string, prefixId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/addressing/prefixes/${prefixId}/bindings`);
  }

  /**
   * Delete a Service Binding
   *
   * @see ip-address-management-service-bindings-delete-service-binding
   */
  async serviceBindingsDelete(accountId: string, prefixId: string, bindingId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/addressing/prefixes/${prefixId}/bindings/${bindingId}`);
  }

  /**
   * List all BGP Prefixes within the specified IP Prefix. BGP Prefixes are used to control which specific subnets are advertised to the Internet. It is possible to advertise subnets more specific than an IP Prefix by creating more specific BGP Prefixes.
   *
   * @see ip-address-management-prefixes-list-bgp-prefixes
   */
  async bgpPrefixesList(accountId: string, prefixId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/addressing/prefixes/${prefixId}/bgp/prefixes`);
  }

  /**
   * Retrieve a single BGP Prefix according to its identifier
   *
   * @see ip-address-management-prefixes-fetch-bgp-prefix
   */
  async bgpPrefixesGet(accountId: string, prefixId: string, bgpPrefixId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/addressing/prefixes/${prefixId}/bgp/prefixes/${bgpPrefixId}`,
    );
  }

  /**
   * Create a BGP prefix, controlling the BGP advertisement status of a specific subnet. When created, BGP prefixes are initially withdrawn, and can be advertised with the Update BGP Prefix API.
   *
   * @see ip-address-management-prefixes-create-bgp-prefix
   */
  async bgpPrefixesCreate(accountId: string, prefixId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/addressing/prefixes/${prefixId}/bgp/prefixes`);
  }

  /**
   * Update the properties of a BGP Prefix, such as the on demand advertisement status (advertised or withdrawn).
   *
   * @see ip-address-management-prefixes-update-bgp-prefix
   */
  async bgpPrefixesEdit(accountId: string, prefixId: string, bgpPrefixId: string): Promise<unknown> {
    return this._client.patch<unknown>(
      `/accounts/${accountId}/addressing/prefixes/${prefixId}/bgp/prefixes/${bgpPrefixId}`,
    );
  }

  /**
   * View the current advertisement state for a prefix. **Deprecated:** Prefer the BGP Prefixes endpoints, which additionally allow for advertising and withdrawing subnets of an IP prefix.
   *
   * @see ip-address-management-dynamic-advertisement-get-advertisement-status
   */
  async advertisementStatusGet(prefixId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/addressing/prefixes/${prefixId}/bgp/status`);
  }

  /**
   * Advertise or withdraw the BGP route for a prefix. **Deprecated:** Prefer the BGP Prefixes endpoints, which additionally allow for advertising and withdrawing subnets of an IP prefix.
   *
   * @see ip-address-management-dynamic-advertisement-update-prefix-dynamic-advertisement-status
   */
  async advertisementStatusEdit(prefixId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/addressing/prefixes/${prefixId}/bgp/status`);
  }

  /**
   * List all delegations for a given account IP prefix.
   *
   * @see ip-address-management-prefix-delegation-list-prefix-delegations
   */
  async delegationsList(prefixId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/addressing/prefixes/${prefixId}/delegations`);
  }

  /**
   * Create a new account delegation for a given IP prefix.
   *
   * @see ip-address-management-prefix-delegation-create-prefix-delegation
   */
  async delegationsCreate(prefixId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/addressing/prefixes/${prefixId}/delegations`);
  }

  /**
   * Delete an account delegation for a given IP prefix.
   *
   * @see ip-address-management-prefix-delegation-delete-prefix-delegation
   */
  async delegationsDelete(delegationId: string, prefixId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/addressing/prefixes/${prefixId}/delegations/${delegationId}`,
    );
  }
}

/**
 * Leases operations
 */
export class Leases extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List all leases owned by the account.
   *
   * @see ip-address-management-list-leases
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/addressing/leases`);
  }
}

/**
 * Prefixes (additional) operations
 */
export class PrefixesExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Delete a BGP Prefix associated with the specified IP Prefix. A BGP Prefix must be withdrawn before it can be deleted.
   *
   * @see ip-address-management-prefixes-delete-bgp-prefix
   */
  async bgpPrefixesDelete(accountId: string, prefixId: string, bgpPrefixId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/addressing/prefixes/${prefixId}/bgp/prefixes/${bgpPrefixId}`,
    );
  }

  /**
   * Triggers a new prefix validation. The checks are run asynchronously and include IRR, RPKI, and prefix ownership.
   *
   * @see ip-address-management-prefixes-validate-prefix
   */
  async validateCreate(prefixId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/addressing/prefixes/${prefixId}/validate`);
  }
}

/**
 * IP address management — BYOIP prefixes, address maps, regional hostnames, and BGP advertisement control
 */
export class Addressing extends APIResource {
  readonly regionalhostnames: RegionalHostnames;
  readonly services: Services;
  readonly addressmaps: AddressMaps;
  readonly loadocuments: LoaDocuments;
  readonly prefixes: Prefixes;
  readonly leases: Leases;
  readonly prefixesextra: PrefixesExtra;

  constructor(client: CloudflareClient) {
    super(client);
    this.regionalhostnames = new RegionalHostnames(client);
    this.services = new Services(client);
    this.addressmaps = new AddressMaps(client);
    this.loadocuments = new LoaDocuments(client);
    this.prefixes = new Prefixes(client);
    this.leases = new Leases(client);
    this.prefixesextra = new PrefixesExtra(client);
  }
}
