/**
 * d1 resource
 * @generated from apis/d1/schema.ts
 *
 * D1 is Cloudflare's managed, serverless database with SQLite's SQL semantics, built-in disaster recovery, and Worker and HTTP API access.
 */
import type { components } from 'cloudflare-openapi';
import { APIResource, CloudflareClient } from '../../client.js';

// Type aliases from OpenAPI components
export type DatabaseDetailsResponse = components['schemas']['d1_database-details-response'];
export type DatabaseResponse = components['schemas']['d1_database-response'];
export type QueryResultResponse = components['schemas']['d1_query-result-response'];
export type TimeTravelRestoreResponse = components['schemas']['d1_time-travel-restore-response'];
export type RawResultResponse = components['schemas']['d1_raw-result-response'];

/**
 * use specific point-in-time backups of your D1 database
 */
export class TimeTravel extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves the current bookmark, or the nearest bookmark at or before a provided timestamp. Bookmarks can be used with the restore endpoint to revert the database to a previous point in time.
   *
   * This command acts on remote D1 Databases
   *
   * @see d1-time-travel-get-bookmark
   */
  async info(accountId: string, databaseId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/d1/database/${databaseId}/time_travel/bookmark`, {
      query: params,
    });
  }

  /**
   * Restores a D1 database to a previous point in time either via a bookmark or a timestamp.
   *
   * This command acts on remote D1 Databases.
   *
   * @see d1-time-travel-restore
   */
  async restore(
    accountId: string,
    databaseId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['d1_time-travel-restore-response']> {
    return this._client.post<components['schemas']['d1_time-travel-restore-response']>(
      `/accounts/${accountId}/d1/database/${databaseId}/time_travel/restore`,
      {
        query: params,
      },
    );
  }
}

/**
 * migrate your D1 database
 */
export class Migrations extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns the query result as an object.
   *
   * @see d1-query-database
   */
  async list(accountId: string, databaseId: string): Promise<components['schemas']['d1_query-result-response'][]> {
    return this._client.post<components['schemas']['d1_query-result-response'][]>(
      `/accounts/${accountId}/d1/database/${databaseId}/query`,
    );
  }
}

/**
 * Database operations
 */
export class Database extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Updates partially the specified D1 database.
   *
   * @see d1-update-partial-database
   */
  async edit(accountId: string, databaseId: string): Promise<components['schemas']['d1_database-details-response']> {
    return this._client.patch<components['schemas']['d1_database-details-response']>(
      `/accounts/${accountId}/d1/database/${databaseId}`,
    );
  }

  /**
   * Updates the specified D1 database.
   *
   * @see d1-update-database
   */
  async update(accountId: string, databaseId: string): Promise<components['schemas']['d1_database-details-response']> {
    return this._client.put<components['schemas']['d1_database-details-response']>(
      `/accounts/${accountId}/d1/database/${databaseId}`,
    );
  }

  /**
   * Generates a temporary URL for uploading an SQL file to, then instructing the D1 to import it and polling it for status updates. Imports block the D1 for their duration.
   *
   * @see d1-import-database
   */
  async importCreate(accountId: string, databaseId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/d1/database/${databaseId}/import`);
  }

  /**
   * Returns the query result rows as arrays rather than objects. This is a performance-optimized version of the /query endpoint.
   *
   * @see d1-raw-database-query
   */
  async rawCreate(accountId: string, databaseId: string): Promise<components['schemas']['d1_raw-result-response'][]> {
    return this._client.post<components['schemas']['d1_raw-result-response'][]>(
      `/accounts/${accountId}/d1/database/${databaseId}/raw`,
    );
  }
}

/**
 * D1 is Cloudflare's managed, serverless database with SQLite's SQL semantics, built-in disaster recovery, and Worker and HTTP API access.
 */
export class D1 extends APIResource {
  readonly timetravel: TimeTravel;
  readonly migrations: Migrations;
  readonly database: Database;

  constructor(client: CloudflareClient) {
    super(client);
    this.timetravel = new TimeTravel(client);
    this.migrations = new Migrations(client);
    this.database = new Database(client);
  }

  /**
   * Returns the created D1 database.
   *
   * This command acts on remote D1 Databases.
   *
   * @see d1-create-database
   */
  async create(accountId: string): Promise<components['schemas']['d1_database-details-response']> {
    return this._client.post<components['schemas']['d1_database-details-response']>(
      `/accounts/${accountId}/d1/database`,
    );
  }

  /**
   * Returns the specified D1 database.
   *
   * @see d1-get-database
   */
  async info(accountId: string, databaseId: string): Promise<components['schemas']['d1_database-details-response']> {
    return this._client.get<components['schemas']['d1_database-details-response']>(
      `/accounts/${accountId}/d1/database/${databaseId}`,
    );
  }

  /**
   * Returns a list of D1 databases.
   *
   * This command acts on remote D1 Databases.
   *
   * @see d1-list-databases
   */
  async list(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['d1_database-response'][]> {
    return this._client.get<components['schemas']['d1_database-response'][]>(`/accounts/${accountId}/d1/database`, {
      query: params,
    });
  }

  /**
   * Deletes the specified D1 database.
   *
   * This command acts on remote D1 Databases.
   *
   * @see d1-delete-database
   */
  async delete(accountId: string, databaseId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/d1/database/${databaseId}`);
  }

  /**
   * Returns the query result as an object.
   *
   * @see d1-query-database
   */
  async execute(accountId: string, databaseId: string): Promise<components['schemas']['d1_query-result-response'][]> {
    return this._client.post<components['schemas']['d1_query-result-response'][]>(
      `/accounts/${accountId}/d1/database/${databaseId}/query`,
    );
  }

  /**
   * Returns a URL where the SQL contents of your D1 can be downloaded. Note: this process may take some time for larger DBs, during which your D1 will be unavailable to serve queries. To avoid blocking your DB unnecessarily, an in-progress export must be continually polled or will automatically cancel.
   *
   * @see d1-export-database
   */
  async export(accountId: string, databaseId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/d1/database/${databaseId}/export`);
  }
}
