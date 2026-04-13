/**
 * pipelines resource
 * @generated from apis/pipelines/schema.ts
 *
 * Ingest, transform, and route event streams into R2, analytics, or other destinations in real time
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Destinations where pipeline data is written — R2 buckets, HTTP endpoints, or other storage
 */
export class Sinks extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List/Filter Sinks in Account.
   *
   * @see getV4AccountsByAccount_idPipelinesV1Sinks
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/pipelines/v1/sinks`, {
      query: params,
    });
  }

  /**
   * Get Sink Details.
   *
   * @see getV4AccountsByAccount_idPipelinesV1SinksBySink_id
   */
  async get(accountId: string, sinkId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/pipelines/v1/sinks/${sinkId}`);
  }

  /**
   * Create a new Sink.
   *
   * @see postV4AccountsByAccount_idPipelinesV1Sinks
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/pipelines/v1/sinks`);
  }

  /**
   * Delete Pipeline in Account.
   *
   * @see deleteV4AccountsByAccount_idPipelinesV1SinksBySink_id
   */
  async delete(accountId: string, sinkId: string, params?: Record<string, unknown>): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/pipelines/v1/sinks/${sinkId}`, {
      query: params,
    });
  }
}

/**
 * Inbound data streams that feed events into a pipeline for processing
 */
export class Streams extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List/Filter Streams in Account.
   *
   * @see getV4AccountsByAccount_idPipelinesV1Streams
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/pipelines/v1/streams`, {
      query: params,
    });
  }

  /**
   * Get Stream Details.
   *
   * @see getV4AccountsByAccount_idPipelinesV1StreamsByStream_id
   */
  async get(accountId: string, streamId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/pipelines/v1/streams/${streamId}`);
  }

  /**
   * Create a new Stream.
   *
   * @see postV4AccountsByAccount_idPipelinesV1Streams
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/pipelines/v1/streams`);
  }

  /**
   * Update a Stream.
   *
   * @see patchV4AccountsByAccount_idPipelinesV1StreamsByStream_id
   */
  async update(accountId: string, streamId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/pipelines/v1/streams/${streamId}`);
  }

  /**
   * Delete Stream in Account.
   *
   * @see deleteV4AccountsByAccount_idPipelinesV1StreamsByStream_id
   */
  async delete(accountId: string, streamId: string, params?: Record<string, unknown>): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/pipelines/v1/streams/${streamId}`, {
      query: params,
    });
  }
}

/**
 * Ingest, transform, and route event streams into R2, analytics, or other destinations in real time
 */
export class Pipelines extends APIResource {
  readonly sinks: Sinks;
  readonly streams: Streams;

  constructor(client: CloudflareClient) {
    super(client);
    this.sinks = new Sinks(client);
    this.streams = new Streams(client);
  }

  /**
   * [DEPRECATED] List, filter, and paginate pipelines in an account. Use the new /pipelines/v1/pipelines endpoint instead.
   *
   * @see getV4AccountsByAccount_idPipelines_deprecated
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/pipelines`, {
      query: params,
    });
  }

  /**
   * [DEPRECATED] Get configuration of a pipeline. Use the new /pipelines/v1/pipelines endpoint instead.
   *
   * @see getV4AccountsByAccount_idPipelinesByPipeline_name_deprecated
   */
  async get(accountId: string, pipelineName: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/pipelines/${pipelineName}`);
  }

  /**
   * [DEPRECATED] Create a new pipeline. Use the new /pipelines/v1/pipelines endpoint instead.
   *
   * @see postV4AccountsByAccount_idPipelines_deprecated
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/pipelines`);
  }

  /**
   * [DEPRECATED] Update an existing pipeline. Use the new /pipelines/v1/pipelines endpoint instead.
   *
   * @see putV4AccountsByAccount_idPipelinesByPipeline_name_deprecated
   */
  async update(accountId: string, pipelineName: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/pipelines/${pipelineName}`);
  }

  /**
   * [DEPRECATED] Delete a pipeline. Use the new /pipelines/v1/pipelines endpoint instead.
   *
   * @see deleteV4AccountsByAccount_idPipelinesByPipeline_name_deprecated
   */
  async delete(accountId: string, pipelineName: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/pipelines/${pipelineName}`);
  }

  /**
   * List/Filter Pipelines in Account.
   *
   * @see getV4AccountsByAccount_idPipelinesV1Pipelines
   */
  async listV1(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/pipelines/v1/pipelines`, {
      query: params,
    });
  }

  /**
   * Get Pipelines Details.
   *
   * @see getV4AccountsByAccount_idPipelinesV1PipelinesByPipeline_id
   */
  async getV1(accountId: string, pipelineId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/pipelines/v1/pipelines/${pipelineId}`);
  }

  /**
   * Create a new Pipeline.
   *
   * @see postV4AccountsByAccount_idPipelinesV1Pipelines
   */
  async createV1(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/pipelines/v1/pipelines`);
  }

  /**
   * Delete Pipeline in Account.
   *
   * @see deleteV4AccountsByAccount_idPipelinesV1PipelinesByPipeline_id
   */
  async deleteV1(accountId: string, pipelineId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/pipelines/v1/pipelines/${pipelineId}`);
  }

  /**
   * Validate Arroyo SQL.
   *
   * @see postV4AccountsByAccount_idPipelinesV1Validate_sql
   */
  async validateSql(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/pipelines/v1/validate_sql`);
  }
}
