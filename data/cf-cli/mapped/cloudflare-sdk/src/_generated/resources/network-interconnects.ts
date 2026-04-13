/**
 * network-interconnects resource
 * @generated from apis/network-interconnects/schema.ts
 *
 * Physical and virtual private interconnects between your infrastructure and Cloudflare's network
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Cloud Network Interconnect (CNI) connections — private links from cloud providers to Cloudflare
 */
export class Cnis extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all Cloud Network Interconnects (CNIs) configured for the account, showing connection status and parameters.
   *
   * @see list_cnis
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cni/cnis`, {
      query: params,
    });
  }

  /**
   * Retrieves configuration details for a specific Cloud Network Interconnect (CNI), including connection status and parameters.
   *
   * @see get_cni
   */
  async get(cni: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cni/cnis/${cni}`);
  }

  /**
   * Creates a new Cloud Network Interconnect (CNI) for private network connectivity between Cloudflare and your infrastructure. CNIs enable dedicated, high-performance network links.
   *
   * @see create_cni
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cni/cnis`);
  }

  /**
   * Updates the configuration of an existing Cloud Network Interconnect (CNI), including connection parameters and routing settings.
   *
   * @see update_cni
   */
  async update(cni: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/cni/cnis/${cni}`);
  }

  /**
   * Permanently removes a Cloud Network Interconnect (CNI) configuration. The private network connection will be terminated.
   *
   * @see delete_cni
   */
  async delete(cni: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/cni/cnis/${cni}`);
  }
}

/**
 * Physical cross-connect and partner interconnect sessions with LOA and status tracking
 */
export class Interconnects extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all network interconnects configured for the account, including physical and virtual connections.
   *
   * @see list_interconnects
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cni/interconnects`, {
      query: params,
    });
  }

  /**
   * Retrieves configuration and status details for a specific network interconnect.
   *
   * @see get_interconnect
   */
  async get(icon: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cni/interconnects/${icon}`);
  }

  /**
   * Creates a new network interconnect for connecting Cloudflare's network to external networks. Interconnects provide dedicated bandwidth and reduced latency for traffic exchange.
   *
   * @see create_interconnect
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cni/interconnects`);
  }

  /**
   * Permanently removes a network interconnect configuration. The physical or virtual connection will be terminated.
   *
   * @see delete_interconnect
   */
  async delete(icon: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/cni/interconnects/${icon}`);
  }

  /**
   * Downloads the Letter of Authorization (LOA) for a network interconnect, required for physical cross-connect provisioning.
   *
   * @see get_interconnect_loa
   */
  async loa(icon: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cni/interconnects/${icon}/loa`);
  }

  /**
   * Gets the current operational status of a network interconnect, including link state and traffic metrics.
   *
   * @see get_interconnect_status
   */
  async status(icon: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cni/interconnects/${icon}/status`);
  }
}

/**
 * Account-level interconnect settings and default configurations
 */
export class Settings extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves current settings configuration for the specified resource or service.
   *
   * @see get_settings
   */
  async get(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cni/settings`);
  }

  /**
   * Updates configuration settings for the specified resource or service.
   *
   * @see update_settings
   */
  async update(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/cni/settings`);
  }
}

/**
 * Available interconnect facility slots showing port capacity at Cloudflare data centers
 */
export class Slots extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all available infrastructure slots for the account, showing allocation status and capacity.
   *
   * @see list_slots
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cni/slots`, {
      query: params,
    });
  }

  /**
   * Gets information about a specific infrastructure slot allocation.
   *
   * @see get_slot
   */
  async get(slot: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cni/slots/${slot}`);
  }
}

/**
 * Physical and virtual private interconnects between your infrastructure and Cloudflare's network
 */
export class NetworkInterconnects extends APIResource {
  readonly cnis: Cnis;
  readonly interconnects: Interconnects;
  readonly settings: Settings;
  readonly slots: Slots;

  constructor(client: CloudflareClient) {
    super(client);
    this.cnis = new Cnis(client);
    this.interconnects = new Interconnects(client);
    this.settings = new Settings(client);
    this.slots = new Slots(client);
  }
}
