/**
 * load-balancers resource
 * @generated from apis/load-balancers/schema.ts
 *
 * Distribute traffic across origin pools with health monitoring, geo-steering, and failover
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Health check configurations that probe origin servers and determine pool availability
 */
export class Monitors extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List configured monitors for an account.
   *
   * @see account-load-balancer-monitors-list-monitors
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/load_balancers/monitors`);
  }

  /**
   * List a single configured monitor for an account.
   *
   * @see account-load-balancer-monitors-monitor-details
   */
  async get(monitorId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/load_balancers/monitors/${monitorId}`);
  }

  /**
   * Create a configured monitor.
   *
   * @see account-load-balancer-monitors-create-monitor
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/load_balancers/monitors`);
  }

  /**
   * Modify a configured monitor.
   *
   * @see account-load-balancer-monitors-update-monitor
   */
  async update(monitorId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/load_balancers/monitors/${monitorId}`);
  }

  /**
   * Apply changes to an existing monitor, overwriting the supplied properties.
   *
   * @see account-load-balancer-monitors-patch-monitor
   */
  async edit(monitorId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/load_balancers/monitors/${monitorId}`);
  }

  /**
   * Delete a configured monitor.
   *
   * @see account-load-balancer-monitors-delete-monitor
   */
  async delete(monitorId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/load_balancers/monitors/${monitorId}`);
  }

  /**
   * Preview pools using the specified monitor with provided monitor details. The returned preview_id can be used in the preview endpoint to retrieve the results.
   *
   * @see account-load-balancer-monitors-preview-monitor
   */
  async previewsCreate(monitorId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/load_balancers/monitors/${monitorId}/preview`);
  }

  /**
   * Get the list of resources that reference the provided monitor.
   *
   * @see account-load-balancer-monitors-list-monitor-references
   */
  async referencesGet(monitorId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/load_balancers/monitors/${monitorId}/references`);
  }
}

/**
 * Group monitors together for shared configuration and bulk management
 */
export class MonitorGroups extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List configured monitor groups.
   *
   * @see account-load-balancer-monitor-groups-list-monitor-groups
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/load_balancers/monitor_groups`);
  }

  /**
   * Fetch a single configured monitor group.
   *
   * @see account-load-balancer-monitor-groups-monitor-group-details
   */
  async get(monitorGroupId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/load_balancers/monitor_groups/${monitorGroupId}`);
  }

  /**
   * Create a new monitor group.
   *
   * @see account-load-balancer-monitor-groups-create-monitor-group
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/load_balancers/monitor_groups`);
  }

  /**
   * Modify a configured monitor group.
   *
   * @see account-load-balancer-monitor-groups-update-monitor-group
   */
  async update(monitorGroupId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/load_balancers/monitor_groups/${monitorGroupId}`);
  }

  /**
   * Apply changes to an existing monitor group, overwriting the supplied properties.
   *
   * @see account-load-balancer-monitor-groups-patch-monitor-group
   */
  async edit(monitorGroupId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/load_balancers/monitor_groups/${monitorGroupId}`);
  }

  /**
   * Delete a configured monitor group.
   *
   * @see account-load-balancer-monitor-groups-delete-monitor-group
   */
  async delete(monitorGroupId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/load_balancers/monitor_groups/${monitorGroupId}`);
  }
}

/**
 * Origin server pools with weighted traffic distribution, health thresholds, and geographic preferences
 */
export class Pools extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List configured pools.
   *
   * @see account-load-balancer-pools-list-pools
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/load_balancers/pools`, {
      query: params,
    });
  }

  /**
   * Fetch a single configured pool.
   *
   * @see account-load-balancer-pools-pool-details
   */
  async get(poolId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/load_balancers/pools/${poolId}`);
  }

  /**
   * Create a new pool.
   *
   * @see account-load-balancer-pools-create-pool
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/load_balancers/pools`);
  }

  /**
   * Modify a configured pool.
   *
   * @see account-load-balancer-pools-update-pool
   */
  async update(poolId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/load_balancers/pools/${poolId}`);
  }

  /**
   * Apply changes to an existing pool, overwriting the supplied properties.
   *
   * @see account-load-balancer-pools-patch-pool
   */
  async edit(poolId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/load_balancers/pools/${poolId}`);
  }

  /**
   * Delete a configured pool.
   *
   * @see account-load-balancer-pools-delete-pool
   */
  async delete(poolId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/load_balancers/pools/${poolId}`);
  }

  /**
   * Apply changes to a number of existing pools, overwriting the supplied properties. Pools are ordered by ascending `name`. Returns the list of affected pools. Supports the standard pagination query parameters, either `limit`/`offset` or `per_page`/`page`.
   *
   * @see account-load-balancer-pools-patch-pools
   */
  async bulkEdit(accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/load_balancers/pools`);
  }

  /**
   * Fetch the latest pool health status for a single pool.
   *
   * @see account-load-balancer-pools-pool-health-details
   */
  async healthGet(poolId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/load_balancers/pools/${poolId}/health`);
  }

  /**
   * Preview pool health using provided monitor details. The returned preview_id can be used in the preview endpoint to retrieve the results.
   *
   * @see account-load-balancer-pools-preview-pool
   */
  async healthCreate(poolId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/load_balancers/pools/${poolId}/preview`);
  }

  /**
   * Get the list of resources that reference the provided pool.
   *
   * @see account-load-balancer-pools-list-pool-references
   */
  async referencesGet(poolId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/load_balancers/pools/${poolId}/references`);
  }
}

/**
 * Preview the result of a health check monitor configuration before applying it
 */
export class Previews extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get the result of a previous preview operation using the provided preview_id.
   *
   * @see account-load-balancer-monitors-preview-result
   */
  async get(previewId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/load_balancers/preview/${previewId}`);
  }
}

/**
 * Geographic regions used for regional pool steering and traffic policies
 */
export class Regions extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List all region mappings.
   *
   * @see load-balancer-regions-list-regions
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/load_balancers/regions`, {
      query: params,
    });
  }

  /**
   * Get a single region mapping.
   *
   * @see load-balancer-regions-get-region
   */
  async get(regionId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/load_balancers/regions/${regionId}`);
  }
}

/**
 * Search across all load balancer resources (pools, monitors, load balancers) by name or reference
 */
export class Searches extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Search for Load Balancing resources.
   *
   * @see account-load-balancer-search-search-resources
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/load_balancers/search`, {
      query: params,
    });
  }
}

/**
 * Monitor Groups (additional) operations
 */
export class MonitorGroupsExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get the list of resources that reference the provided monitor group.
   *
   * @see account-load-balancer-monitor-groups-list-monitor-group-references
   */
  async referencesList(monitorGroupId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/load_balancers/monitor_groups/${monitorGroupId}/references`,
    );
  }
}

/**
 * Distribute traffic across origin pools with health monitoring, geo-steering, and failover
 */
export class LoadBalancers extends APIResource {
  readonly monitors: Monitors;
  readonly monitorgroups: MonitorGroups;
  readonly pools: Pools;
  readonly previews: Previews;
  readonly regions: Regions;
  readonly searches: Searches;
  readonly monitorgroupsextra: MonitorGroupsExtra;

  constructor(client: CloudflareClient) {
    super(client);
    this.monitors = new Monitors(client);
    this.monitorgroups = new MonitorGroups(client);
    this.pools = new Pools(client);
    this.previews = new Previews(client);
    this.regions = new Regions(client);
    this.searches = new Searches(client);
    this.monitorgroupsextra = new MonitorGroupsExtra(client);
  }

  /**
   * List configured load balancers.
   *
   * @see load-balancers-list-load-balancers
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/load_balancers`);
  }

  /**
   * Fetch a single configured load balancer.
   *
   * @see load-balancers-load-balancer-details
   */
  async get(zoneId: string, loadBalancerId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/load_balancers/${loadBalancerId}`);
  }

  /**
   * Create a new load balancer.
   *
   * @see load-balancers-create-load-balancer
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/load_balancers`);
  }

  /**
   * Update a configured load balancer.
   *
   * @see load-balancers-update-load-balancer
   */
  async update(zoneId: string, loadBalancerId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/load_balancers/${loadBalancerId}`);
  }

  /**
   * Apply changes to an existing load balancer, overwriting the supplied properties.
   *
   * @see load-balancers-patch-load-balancer
   */
  async edit(zoneId: string, loadBalancerId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/load_balancers/${loadBalancerId}`);
  }

  /**
   * Delete a configured load balancer.
   *
   * @see load-balancers-delete-load-balancer
   */
  async delete(zoneId: string, loadBalancerId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/load_balancers/${loadBalancerId}`);
  }
}
