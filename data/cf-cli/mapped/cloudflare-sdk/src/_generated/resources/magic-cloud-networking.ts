/**
 * magic-cloud-networking resource
 * @generated from apis/magic-cloud-networking/schema.ts
 *
 * Multi-cloud networking — discover cloud resources, manage on-ramps, and automate cross-cloud connectivity
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Synchronize cloud resource inventories from AWS, Azure, and GCP into a unified catalog
 */
export class CatalogSyncs extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List Catalog Syncs (Closed Beta).
   *
   * @see catalog-syncs-list
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/cloud/catalog-syncs`);
  }

  /**
   * Read a Catalog Sync (Closed Beta).
   *
   * @see catalog-syncs-read
   */
  async get(accountId: string, syncId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/cloud/catalog-syncs/${syncId}`);
  }

  /**
   * Create a new Catalog Sync (Closed Beta).
   *
   * @see catalog-syncs-create
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/cloud/catalog-syncs`);
  }

  /**
   * Update a Catalog Sync (Closed Beta).
   *
   * @see catalog-syncs-update
   */
  async update(accountId: string, syncId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/magic/cloud/catalog-syncs/${syncId}`);
  }

  /**
   * Update a Catalog Sync (Closed Beta).
   *
   * @see catalog-syncs-patch
   */
  async edit(accountId: string, syncId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/magic/cloud/catalog-syncs/${syncId}`);
  }

  /**
   * Delete a Catalog Sync (Closed Beta).
   *
   * @see catalog-syncs-delete
   */
  async delete(accountId: string, syncId: string, params?: Record<string, unknown>): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/magic/cloud/catalog-syncs/${syncId}`, {
      query: params,
    });
  }

  /**
   * Refresh a Catalog Sync's destination by running the sync policy against latest resource catalog (Closed Beta).
   *
   * @see catalog-syncs-refresh
   */
  async refresh(accountId: string, syncId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/cloud/catalog-syncs/${syncId}/refresh`);
  }

  /**
   * List prebuilt catalog sync policies (Closed Beta).
   *
   * @see catalog-syncs-prebuilt-policies-list
   */
  async prebuiltPoliciesList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/cloud/catalog-syncs/prebuilt-policies`, {
      query: params,
    });
  }
}

/**
 * On-ramp connections that bridge cloud VPCs/VNets to your Cloudflare network
 */
export class OnRamps extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List On-ramps (Closed Beta).
   *
   * @see onramps-list
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/cloud/onramps`, {
      query: params,
    });
  }

  /**
   * Read an On-ramp (Closed Beta).
   *
   * @see onramps-read
   */
  async get(accountId: string, onrampId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/cloud/onramps/${onrampId}`, {
      query: params,
    });
  }

  /**
   * Create a new On-ramp (Closed Beta).
   *
   * @see onramps-create
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/cloud/onramps`);
  }

  /**
   * Update an On-ramp (Closed Beta).
   *
   * @see onramps-update
   */
  async update(accountId: string, onrampId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/magic/cloud/onramps/${onrampId}`);
  }

  /**
   * Update an On-ramp (Closed Beta).
   *
   * @see onramps-patch
   */
  async edit(accountId: string, onrampId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/magic/cloud/onramps/${onrampId}`);
  }

  /**
   * Delete an On-ramp (Closed Beta).
   *
   * @see onramps-delete
   */
  async delete(accountId: string, onrampId: string, params?: Record<string, unknown>): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/magic/cloud/onramps/${onrampId}`, {
      query: params,
    });
  }

  /**
   * Apply an On-ramp (Closed Beta).
   *
   * @see onramps-apply
   */
  async apply(accountId: string, onrampId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/cloud/onramps/${onrampId}/apply`);
  }

  /**
   * Export an On-ramp to terraform ready file(s) (Closed Beta).
   *
   * @see onramps-export
   */
  async export(accountId: string, onrampId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/cloud/onramps/${onrampId}/export`);
  }

  /**
   * Plan an On-ramp (Closed Beta).
   *
   * @see onramps-plan
   */
  async plan(accountId: string, onrampId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/cloud/onramps/${onrampId}/plan`);
  }

  /**
   * Read the Magic WAN Address Space (Closed Beta).
   *
   * @see onramps-mwan-addr-space-read
   */
  async addressSpacesList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/cloud/onramps/magic_wan_address_space`);
  }

  /**
   * Update the Magic WAN Address Space (Closed Beta).
   *
   * @see onramps-mwan-addr-space-update
   */
  async addressSpacesUpdate(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/magic/cloud/onramps/magic_wan_address_space`);
  }

  /**
   * Update the Magic WAN Address Space (Closed Beta).
   *
   * @see onramps-mwan-addr-space-patch
   */
  async addressSpacesEdit(accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/magic/cloud/onramps/magic_wan_address_space`);
  }
}

/**
 * Cloud provider credentials and integrations for resource discovery and on-ramp provisioning
 */
export class CloudIntegrations extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List Cloud Integrations (Closed Beta).
   *
   * @see providers-list
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/cloud/providers`, {
      query: params,
    });
  }

  /**
   * Read a Cloud Integration (Closed Beta).
   *
   * @see providers-read
   */
  async get(accountId: string, providerId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/cloud/providers/${providerId}`, {
      query: params,
    });
  }

  /**
   * Create a new Cloud Integration (Closed Beta).
   *
   * @see providers-create
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/cloud/providers`);
  }

  /**
   * Update a Cloud Integration (Closed Beta).
   *
   * @see providers-update
   */
  async update(accountId: string, providerId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/magic/cloud/providers/${providerId}`);
  }

  /**
   * Update a Cloud Integration (Closed Beta).
   *
   * @see providers-patch
   */
  async edit(accountId: string, providerId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/magic/cloud/providers/${providerId}`);
  }

  /**
   * Delete a Cloud Integration (Closed Beta).
   *
   * @see providers-delete
   */
  async delete(accountId: string, providerId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/magic/cloud/providers/${providerId}`);
  }

  /**
   * Run discovery for all Cloud Integrations in an account (Closed Beta).
   *
   * @see providers-discover-all
   */
  async discoverAll(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/cloud/providers/discover`);
  }

  /**
   * Run discovery for a Cloud Integration (Closed Beta).
   *
   * @see providers-discover
   */
  async discover(accountId: string, providerId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/cloud/providers/${providerId}/discover`, {
      query: params,
    });
  }

  /**
   * Get initial configuration to complete Cloud Integration setup (Closed Beta).
   *
   * @see providers-initial-setup
   */
  async initialSetup(accountId: string, providerId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/cloud/providers/${providerId}/initial_setup`);
  }
}

/**
 * Discovered cloud resources (VPCs, subnets, route tables) from connected cloud accounts
 */
export class Resources extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List resources in the Resource Catalog (Closed Beta).
   *
   * @see resources-catalog-list
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/cloud/resources`, {
      query: params,
    });
  }

  /**
   * Read an resource from the Resource Catalog (Closed Beta).
   *
   * @see resources-catalog-read
   */
  async get(accountId: string, resourceId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/cloud/resources/${resourceId}`, {
      query: params,
    });
  }

  /**
   * Export resources in the Resource Catalog as a JSON file (Closed Beta).
   *
   * @see resources-catalog-export
   */
  async export(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/magic/cloud/resources/export`, {
      query: params,
    });
  }

  /**
   * Preview Rego query result against the latest resource catalog (Closed Beta).
   *
   * @see resources-catalog-policy-preview
   */
  async policyPreview(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/magic/cloud/resources/policy-preview`);
  }
}

/**
 * Multi-cloud networking — discover cloud resources, manage on-ramps, and automate cross-cloud connectivity
 */
export class MagicCloudNetworking extends APIResource {
  readonly catalogsyncs: CatalogSyncs;
  readonly onramps: OnRamps;
  readonly cloudintegrations: CloudIntegrations;
  readonly resources: Resources;

  constructor(client: CloudflareClient) {
    super(client);
    this.catalogsyncs = new CatalogSyncs(client);
    this.onramps = new OnRamps(client);
    this.cloudintegrations = new CloudIntegrations(client);
    this.resources = new Resources(client);
  }
}
