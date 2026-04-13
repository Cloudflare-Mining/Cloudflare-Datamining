/**
 * vectorize resource
 * @generated from apis/vectorize/schema.ts
 *
 * Globally distributed vector database for building semantic search, recommendations, and RAG applications on Workers
 */
import type { components } from 'cloudflare-openapi';
import { APIResource, CloudflareClient } from '../../client.js';

// Type aliases from OpenAPI components
export type CreateIndexResponse = components['schemas']['vectorize_create-index-response'];
export type IndexInsertV2Response = components['schemas']['vectorize_index-insert-v2-response'];
export type IndexQueryV2Response = components['schemas']['vectorize_index-query-v2-response'];
export type IndexUpsertV2Response = components['schemas']['vectorize_index-upsert-v2-response'];
export type IndexDeleteVectorsByIdV2Response =
  components['schemas']['vectorize_index-delete-vectors-by-id-v2-response'];
export type IndexGetVectorsByIdResponse = components['schemas']['vectorize_index-get-vectors-by-id-response'];
export type IndexInfoResponse = components['schemas']['vectorize_index-info-response'];
export type IndexListVectorsResponse = components['schemas']['vectorize_index-list-vectors-response'];
export type ListMetadataIndexResponse = components['schemas']['vectorize_list-metadata-index-response'];
export type CreateMetadataIndexResponse = components['schemas']['vectorize_create-metadata-index-response'];
export type DeleteMetadataIndexResponse = components['schemas']['vectorize_delete-metadata-index-response'];
export type IndexDeleteVectorsByIdResponse = components['schemas']['vectorize_index-delete-vectors-by-id-response'];
export type IndexInsertResponse = components['schemas']['vectorize_index-insert-response'];
export type IndexQueryResponse = components['schemas']['vectorize_index-query-response'];
export type IndexUpsertResponse = components['schemas']['vectorize_index-upsert-response'];

/**
 * Vector indexes — create indexes, insert/query/upsert vectors, and manage metadata indexes for filtered search
 */
export class Indexes extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns a list of Vectorize Indexes
   *
   * @see vectorize-list-vectorize-indexes
   */
  async list(accountId: string): Promise<components['schemas']['vectorize_create-index-response'][]> {
    return this._client.get<components['schemas']['vectorize_create-index-response'][]>(
      `/accounts/${accountId}/vectorize/v2/indexes`,
    );
  }

  /**
   * Returns the specified Vectorize Index.
   *
   * @see vectorize-get-vectorize-index
   */
  async get(accountId: string, indexName: string): Promise<components['schemas']['vectorize_create-index-response']> {
    return this._client.get<components['schemas']['vectorize_create-index-response']>(
      `/accounts/${accountId}/vectorize/v2/indexes/${indexName}`,
    );
  }

  /**
   * Creates and returns a new Vectorize Index.
   *
   * @see vectorize-create-vectorize-index
   */
  async create(accountId: string): Promise<components['schemas']['vectorize_create-index-response']> {
    return this._client.post<components['schemas']['vectorize_create-index-response']>(
      `/accounts/${accountId}/vectorize/v2/indexes`,
    );
  }

  /**
   * Deletes the specified Vectorize Index.
   *
   * @see vectorize-delete-vectorize-index
   */
  async delete(accountId: string, indexName: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/vectorize/v2/indexes/${indexName}`);
  }

  /**
   * Inserts vectors into the specified index and returns a mutation id corresponding to the vectors enqueued for insertion.
   *
   * @see vectorize-insert-vector
   */
  async insert(
    accountId: string,
    indexName: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['vectorize_index-insert-v2-response']> {
    return this._client.post<components['schemas']['vectorize_index-insert-v2-response']>(
      `/accounts/${accountId}/vectorize/v2/indexes/${indexName}/insert`,
      {
        body: { ...params },
      },
    );
  }

  /**
   * Finds vectors closest to a given vector in an index.
   *
   * @see vectorize-query-vector
   */
  async query(
    accountId: string,
    indexName: string,
  ): Promise<components['schemas']['vectorize_index-query-v2-response']> {
    return this._client.post<components['schemas']['vectorize_index-query-v2-response']>(
      `/accounts/${accountId}/vectorize/v2/indexes/${indexName}/query`,
    );
  }

  /**
   * Upserts vectors into the specified index, creating them if they do not exist and returns a mutation id corresponding to the vectors enqueued for upsertion.
   *
   * @see vectorize-upsert-vector
   */
  async upsert(
    accountId: string,
    indexName: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['vectorize_index-upsert-v2-response']> {
    return this._client.post<components['schemas']['vectorize_index-upsert-v2-response']>(
      `/accounts/${accountId}/vectorize/v2/indexes/${indexName}/upsert`,
      {
        body: { ...params },
      },
    );
  }

  /**
   * Delete a set of vectors from an index by their vector identifiers.
   *
   * @see vectorize-delete-vectors-by-id
   */
  async deleteByIds(
    accountId: string,
    indexName: string,
  ): Promise<components['schemas']['vectorize_index-delete-vectors-by-id-v2-response']> {
    return this._client.post<components['schemas']['vectorize_index-delete-vectors-by-id-v2-response']>(
      `/accounts/${accountId}/vectorize/v2/indexes/${indexName}/delete_by_ids`,
    );
  }

  /**
   * Get a set of vectors from an index by their vector identifiers.
   *
   * @see vectorize-get-vectors-by-id
   */
  async getByIds(
    accountId: string,
    indexName: string,
  ): Promise<components['schemas']['vectorize_index-get-vectors-by-id-response']> {
    return this._client.post<components['schemas']['vectorize_index-get-vectors-by-id-response']>(
      `/accounts/${accountId}/vectorize/v2/indexes/${indexName}/get_by_ids`,
    );
  }

  /**
   * Get information about a vectorize index.
   *
   * @see vectorize-index-info
   */
  async info(accountId: string, indexName: string): Promise<components['schemas']['vectorize_index-info-response']> {
    return this._client.get<components['schemas']['vectorize_index-info-response']>(
      `/accounts/${accountId}/vectorize/v2/indexes/${indexName}/info`,
    );
  }

  /**
   * Returns a paginated list of vector identifiers from the specified index.
   *
   * @see vectorize-list-vectors
   */
  async listVectors(
    accountId: string,
    indexName: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['vectorize_index-list-vectors-response']> {
    return this._client.get<components['schemas']['vectorize_index-list-vectors-response']>(
      `/accounts/${accountId}/vectorize/v2/indexes/${indexName}/list`,
      {
        query: params,
      },
    );
  }

  /**
   * List Metadata Indexes for the specified Vectorize Index.
   *
   * @see vectorize-list-metadata-indexes
   */
  async metadataIndexList(
    accountId: string,
    indexName: string,
  ): Promise<components['schemas']['vectorize_list-metadata-index-response']> {
    return this._client.get<components['schemas']['vectorize_list-metadata-index-response']>(
      `/accounts/${accountId}/vectorize/v2/indexes/${indexName}/metadata_index/list`,
    );
  }

  /**
   * Enable metadata filtering based on metadata property. Limited to 10 properties.
   *
   * @see vectorize-create-metadata-index
   */
  async metadataIndexCreate(
    accountId: string,
    indexName: string,
  ): Promise<components['schemas']['vectorize_create-metadata-index-response']> {
    return this._client.post<components['schemas']['vectorize_create-metadata-index-response']>(
      `/accounts/${accountId}/vectorize/v2/indexes/${indexName}/metadata_index/create`,
    );
  }

  /**
   * Allow Vectorize to delete the specified metadata index.
   *
   * @see vectorize-delete-metadata-index
   */
  async metadataIndexDelete(
    accountId: string,
    indexName: string,
  ): Promise<components['schemas']['vectorize_delete-metadata-index-response']> {
    return this._client.post<components['schemas']['vectorize_delete-metadata-index-response']>(
      `/accounts/${accountId}/vectorize/v2/indexes/${indexName}/metadata_index/delete`,
    );
  }
}

/**
 * Indexes (additional) operations
 */
export class IndexesExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns a list of Vectorize Indexes
   *
   * @see vectorize-(-deprecated)-list-vectorize-indexes
   */
  async list(accountId: string): Promise<components['schemas']['vectorize_create-index-response'][]> {
    return this._client.get<components['schemas']['vectorize_create-index-response'][]>(
      `/accounts/${accountId}/vectorize/indexes`,
    );
  }

  /**
   * Creates and returns a new Vectorize Index.
   *
   * @see vectorize-(-deprecated)-create-vectorize-index
   */
  async create(accountId: string): Promise<components['schemas']['vectorize_create-index-response']> {
    return this._client.post<components['schemas']['vectorize_create-index-response']>(
      `/accounts/${accountId}/vectorize/indexes`,
    );
  }

  /**
   * Deletes the specified Vectorize Index.
   *
   * @see vectorize-(-deprecated)-delete-vectorize-index
   */
  async delete(accountId: string, indexName: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/vectorize/indexes/${indexName}`);
  }

  /**
   * Returns the specified Vectorize Index.
   *
   * @see vectorize-(-deprecated)-get-vectorize-index
   */
  async get(accountId: string, indexName: string): Promise<components['schemas']['vectorize_create-index-response']> {
    return this._client.get<components['schemas']['vectorize_create-index-response']>(
      `/accounts/${accountId}/vectorize/indexes/${indexName}`,
    );
  }

  /**
   * Updates and returns the specified Vectorize Index.
   *
   * @see vectorize-(-deprecated)-update-vectorize-index
   */
  async update(
    accountId: string,
    indexName: string,
  ): Promise<components['schemas']['vectorize_create-index-response']> {
    return this._client.put<components['schemas']['vectorize_create-index-response']>(
      `/accounts/${accountId}/vectorize/indexes/${indexName}`,
    );
  }

  /**
   * Delete a set of vectors from an index by their vector identifiers.
   *
   * @see vectorize-(-deprecated)-delete-vectors-by-id
   */
  async deleteByIdsCreate(
    accountId: string,
    indexName: string,
  ): Promise<components['schemas']['vectorize_index-delete-vectors-by-id-response']> {
    return this._client.post<components['schemas']['vectorize_index-delete-vectors-by-id-response']>(
      `/accounts/${accountId}/vectorize/indexes/${indexName}/delete-by-ids`,
    );
  }

  /**
   * Get a set of vectors from an index by their vector identifiers.
   *
   * @see vectorize-(-deprecated)-get-vectors-by-id
   */
  async getByIdsCreate(
    accountId: string,
    indexName: string,
  ): Promise<components['schemas']['vectorize_index-get-vectors-by-id-response']> {
    return this._client.post<components['schemas']['vectorize_index-get-vectors-by-id-response']>(
      `/accounts/${accountId}/vectorize/indexes/${indexName}/get-by-ids`,
    );
  }

  /**
   * Inserts vectors into the specified index and returns the count of the vectors successfully inserted.
   *
   * @see vectorize-(-deprecated)-insert-vector
   */
  async insertCreate(
    accountId: string,
    indexName: string,
  ): Promise<components['schemas']['vectorize_index-insert-response']> {
    return this._client.post<components['schemas']['vectorize_index-insert-response']>(
      `/accounts/${accountId}/vectorize/indexes/${indexName}/insert`,
    );
  }

  /**
   * Finds vectors closest to a given vector in an index.
   *
   * @see vectorize-(-deprecated)-query-vector
   */
  async queryCreate(
    accountId: string,
    indexName: string,
  ): Promise<components['schemas']['vectorize_index-query-response']> {
    return this._client.post<components['schemas']['vectorize_index-query-response']>(
      `/accounts/${accountId}/vectorize/indexes/${indexName}/query`,
    );
  }

  /**
   * Upserts vectors into the specified index, creating them if they do not exist and returns the count of values and ids successfully inserted.
   *
   * @see vectorize-(-deprecated)-upsert-vector
   */
  async upsertCreate(
    accountId: string,
    indexName: string,
  ): Promise<components['schemas']['vectorize_index-upsert-response']> {
    return this._client.post<components['schemas']['vectorize_index-upsert-response']>(
      `/accounts/${accountId}/vectorize/indexes/${indexName}/upsert`,
    );
  }
}

/**
 * Globally distributed vector database for building semantic search, recommendations, and RAG applications on Workers
 */
export class Vectorize extends APIResource {
  readonly indexes: Indexes;
  readonly indexesextra: IndexesExtra;

  constructor(client: CloudflareClient) {
    super(client);
    this.indexes = new Indexes(client);
    this.indexesextra = new IndexesExtra(client);
  }
}
