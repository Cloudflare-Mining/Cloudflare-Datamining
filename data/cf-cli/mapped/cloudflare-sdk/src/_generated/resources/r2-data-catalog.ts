/**
 * r2-data-catalog resource
 * @generated from apis/r2-data-catalog/schema.ts
 *
 * Iceberg-compatible data catalog for R2 — organize objects into tables and namespaces for SQL query engines
 */
import type { components } from 'cloudflare-openapi';
import { APIResource, CloudflareClient } from '../../client.js';

// Type aliases from OpenAPI components
export type R2DataCatalogCatalogList = components['schemas']['r2-data-catalog_catalog-list'];
export type R2DataCatalogCatalog = components['schemas']['r2-data-catalog_catalog'];
export type R2DataCatalogCatalogActivationResponse =
  components['schemas']['r2-data-catalog_catalog-activation-response'];
export type R2DataCatalogCatalogMaintenanceConfigResponse =
  components['schemas']['r2-data-catalog_catalog-maintenance-config-response'];
export type R2DataCatalogCatalogMaintenanceConfig = components['schemas']['r2-data-catalog_catalog-maintenance-config'];
export type R2DataCatalogNamespaceListResponse = components['schemas']['r2-data-catalog_namespace-list-response'];
export type R2DataCatalogTableListResponse = components['schemas']['r2-data-catalog_table-list-response'];
export type R2DataCatalogTableMaintenanceConfigResponse =
  components['schemas']['r2-data-catalog_table-maintenance-config-response'];
export type R2DataCatalogTableMaintenanceConfig = components['schemas']['r2-data-catalog_table-maintenance-config'];

/**
 * Table maintenance settings — compaction schedules and snapshot expiration policies
 */
export class MaintenanceConfigs extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieve the maintenance configuration for a specific catalog, including compaction settings and credential status.
   *
   * @see get-maintenance-config
   */
  async get(
    accountId: string,
    bucketName: string,
  ): Promise<components['schemas']['r2-data-catalog_catalog-maintenance-config-response']> {
    return this._client.get<components['schemas']['r2-data-catalog_catalog-maintenance-config-response']>(
      `/accounts/${accountId}/r2-catalog/${bucketName}/maintenance-configs`,
    );
  }

  /**
   * Update the maintenance configuration for a catalog. This allows you to enable or disable compaction and adjust target file sizes for optimization.
   *
   * @see update-maintenance-config
   */
  async update(
    accountId: string,
    bucketName: string,
  ): Promise<components['schemas']['r2-data-catalog_catalog-maintenance-config']> {
    return this._client.post<components['schemas']['r2-data-catalog_catalog-maintenance-config']>(
      `/accounts/${accountId}/r2-catalog/${bucketName}/maintenance-configs`,
    );
  }
}

/**
 * Catalog access credentials for external query engines (Spark, Trino, etc.)
 */
export class Credentials extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Store authentication credentials for a catalog. These credentials are used to authenticate with R2 storage when performing catalog operations.
   *
   * @see store-credentials
   */
  async create(accountId: string, bucketName: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/r2-catalog/${bucketName}/credential`);
  }
}

/**
 * Logical namespaces that group related tables within the data catalog
 */
export class Namespaces extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns a list of namespaces in the specified R2 catalog. Supports hierarchical filtering and pagination for efficient traversal of large namespace hierarchies.
   *
   * @see list-namespaces
   */
  async list(
    accountId: string,
    bucketName: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['r2-data-catalog_namespace-list-response']> {
    return this._client.get<components['schemas']['r2-data-catalog_namespace-list-response']>(
      `/accounts/${accountId}/r2-catalog/${bucketName}/namespaces`,
      {
        query: params,
      },
    );
  }

  /**
   * Returns a list of tables in the specified namespace within an R2 catalog. Supports pagination for efficient traversal of large table collections.
   *
   * @see list-tables
   */
  async tablesList(
    accountId: string,
    bucketName: string,
    namespace: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['r2-data-catalog_table-list-response']> {
    return this._client.get<components['schemas']['r2-data-catalog_table-list-response']>(
      `/accounts/${accountId}/r2-catalog/${bucketName}/namespaces/${namespace}/tables`,
      {
        query: params,
      },
    );
  }

  /**
   * Retrieve the maintenance configuration for a specific table, including compaction settings.
   *
   * @see get-table-maintenance-config
   */
  async tablesMaintenanceConfigsGet(
    accountId: string,
    bucketName: string,
    namespace: string,
    tableName: string,
  ): Promise<components['schemas']['r2-data-catalog_table-maintenance-config-response']> {
    return this._client.get<components['schemas']['r2-data-catalog_table-maintenance-config-response']>(
      `/accounts/${accountId}/r2-catalog/${bucketName}/namespaces/${namespace}/tables/${tableName}/maintenance-configs`,
    );
  }

  /**
   * Update the maintenance configuration for a specific table. This allows you to enable or disable compaction and adjust target file sizes for optimization.
   *
   * @see update-table-maintenance-config
   */
  async tablesMaintenanceConfigsUpdate(
    accountId: string,
    bucketName: string,
    namespace: string,
    tableName: string,
  ): Promise<components['schemas']['r2-data-catalog_table-maintenance-config']> {
    return this._client.post<components['schemas']['r2-data-catalog_table-maintenance-config']>(
      `/accounts/${accountId}/r2-catalog/${bucketName}/namespaces/${namespace}/tables/${tableName}/maintenance-configs`,
    );
  }
}

/**
 * Iceberg-compatible data catalog for R2 — organize objects into tables and namespaces for SQL query engines
 */
export class R2DataCatalog extends APIResource {
  readonly maintenanceconfigs: MaintenanceConfigs;
  readonly credentials: Credentials;
  readonly namespaces: Namespaces;

  constructor(client: CloudflareClient) {
    super(client);
    this.maintenanceconfigs = new MaintenanceConfigs(client);
    this.credentials = new Credentials(client);
    this.namespaces = new Namespaces(client);
  }

  /**
   * Returns a list of R2 buckets that have been enabled as Apache Iceberg catalogs for the specified account. Each catalog represents an R2 bucket configured to store Iceberg metadata and data files.
   *
   * @see list-catalogs
   */
  async list(accountId: string): Promise<components['schemas']['r2-data-catalog_catalog-list']> {
    return this._client.get<components['schemas']['r2-data-catalog_catalog-list']>(`/accounts/${accountId}/r2-catalog`);
  }

  /**
   * Retrieve detailed information about a specific R2 catalog by bucket name. Returns catalog status, maintenance configuration, and credential status.
   *
   * @see get-catalog-details
   */
  async get(accountId: string, bucketName: string): Promise<components['schemas']['r2-data-catalog_catalog']> {
    return this._client.get<components['schemas']['r2-data-catalog_catalog']>(
      `/accounts/${accountId}/r2-catalog/${bucketName}`,
    );
  }

  /**
   * Enable an R2 bucket as an Apache Iceberg catalog. This operation creates the necessary catalog infrastructure and activates the bucket for storing Iceberg metadata and data files.
   *
   * @see enable-catalog
   */
  async enable(
    accountId: string,
    bucketName: string,
  ): Promise<components['schemas']['r2-data-catalog_catalog-activation-response']> {
    return this._client.post<components['schemas']['r2-data-catalog_catalog-activation-response']>(
      `/accounts/${accountId}/r2-catalog/${bucketName}/enable`,
    );
  }

  /**
   * Disable an R2 bucket as a catalog. This operation deactivates the catalog but preserves existing metadata and data files. The catalog can be re-enabled later.
   *
   * @see disable-catalog
   */
  async disable(accountId: string, bucketName: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/r2-catalog/${bucketName}/disable`);
  }
}
