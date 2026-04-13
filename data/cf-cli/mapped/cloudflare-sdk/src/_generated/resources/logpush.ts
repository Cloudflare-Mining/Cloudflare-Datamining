/**
 * logpush resource
 * @generated from apis/logpush/schema.ts
 *
 * Push Cloudflare logs to external storage destinations — R2, S3, Splunk, Datadog, and more
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Available log datasets and their fields — HTTP requests, firewall events, DNS queries, etc.
 */
export class Datasets extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all fields available for a dataset. The response result is. an object with key-value pairs, where keys are field names, and values are descriptions.
   *
   * @see get-zones-zone_id-logpush-datasets-dataset_id-fields
   */
  async fieldsGet(datasetId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/logpush/datasets/${datasetId}/fields`);
  }

  /**
   * Lists Logpush jobs for a zone for a dataset.
   *
   * @see get-zones-zone_id-logpush-datasets-dataset_id-jobs
   */
  async jobsGet(datasetId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/logpush/datasets/${datasetId}/jobs`);
  }
}

/**
 * Instant Logs — stream real-time log samples directly from the edge without storage
 */
export class Edge extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists Instant Logs jobs for a zone.
   *
   * @see get-zones-zone_id-logpush-edge-jobs
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/logpush/edge/jobs`);
  }

  /**
   * Creates a new Instant Logs job for a zone.
   *
   * @see post-zones-zone_id-logpush-edge-jobs
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/logpush/edge/jobs`);
  }
}

/**
 * Logpush jobs that continuously deliver log batches to a configured destination
 */
export class Jobs extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists Logpush jobs for a zone.
   *
   * @see get-zones-zone_id-logpush-jobs
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/logpush/jobs`);
  }

  /**
   * Gets the details of a Logpush job.
   *
   * @see get-zones-zone_id-logpush-jobs-job_id
   */
  async get(jobId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/logpush/jobs/${jobId}`);
  }

  /**
   * Creates a new Logpush job for a zone.
   *
   * @see post-zones-zone_id-logpush-jobs
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/logpush/jobs`);
  }

  /**
   * Updates a Logpush job.
   *
   * @see put-zones-zone_id-logpush-jobs-job_id
   */
  async update(jobId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/logpush/jobs/${jobId}`);
  }

  /**
   * Deletes a Logpush job.
   *
   * @see delete-zones-zone_id-logpush-jobs-job_id
   */
  async delete(jobId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/logpush/jobs/${jobId}`);
  }
}

/**
 * Prove ownership of a destination bucket before Cloudflare can push logs to it
 */
export class Ownership extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets a new ownership challenge sent to your destination.
   *
   * @see post-zones-zone_id-logpush-ownership
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/logpush/ownership`);
  }

  /**
   * Validates ownership challenge of the destination.
   *
   * @see post-zones-zone_id-logpush-ownership-validate
   */
  async validate(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/logpush/ownership/validate`);
  }
}

/**
 * Validate destination credentials and connectivity before creating a Logpush job
 */
export class Validate extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Validates destination.
   *
   * @see post-zones-zone_id-logpush-validate-destination
   */
  async destination(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/logpush/validate/destination`);
  }

  /**
   * Checks if there is an existing job with a destination.
   *
   * @see post-zones-zone_id-logpush-validate-destination-exists
   */
  async destinationExists(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/logpush/validate/destination/exists`);
  }

  /**
   * Validates logpull origin with logpull_options.
   *
   * @see post-zones-zone_id-logpush-validate-origin
   */
  async origin(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/logpush/validate/origin`);
  }
}

/**
 * Datasets (additional) operations
 */
export class DatasetsExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all fields available for a dataset. The response result is. an object with key-value pairs, where keys are field names, and values are descriptions.
   *
   * @see get-accounts-account_id-logpush-datasets-dataset_id-fields
   */
  async fieldsGet(datasetId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/logpush/datasets/${datasetId}/fields`);
  }

  /**
   * Lists Logpush jobs for an account for a dataset.
   *
   * @see get-accounts-account_id-logpush-datasets-dataset_id-jobs
   */
  async jobsGet(datasetId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/logpush/datasets/${datasetId}/jobs`);
  }
}

/**
 * Jobs (additional) operations
 */
export class JobsExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists Logpush jobs for an account.
   *
   * @see get-accounts-account_id-logpush-jobs
   */
  async getLogpushJobs(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/logpush/jobs`);
  }

  /**
   * Creates a new Logpush job for an account.
   *
   * @see post-accounts-account_id-logpush-jobs
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/logpush/jobs`);
  }

  /**
   * Deletes a Logpush job.
   *
   * @see delete-accounts-account_id-logpush-jobs-job_id
   */
  async delete(jobId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/logpush/jobs/${jobId}`);
  }

  /**
   * Gets the details of a Logpush job.
   *
   * @see get-accounts-account_id-logpush-jobs-job_id
   */
  async getJobId(jobId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/logpush/jobs/${jobId}`);
  }

  /**
   * Updates a Logpush job.
   *
   * @see put-accounts-account_id-logpush-jobs-job_id
   */
  async update(jobId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/logpush/jobs/${jobId}`);
  }
}

/**
 * Ownership (additional) operations
 */
export class OwnershipExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets a new ownership challenge sent to your destination.
   *
   * @see post-accounts-account_id-logpush-ownership
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/logpush/ownership`);
  }

  /**
   * Validates ownership challenge of the destination.
   *
   * @see post-accounts-account_id-logpush-ownership-validate
   */
  async validateCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/logpush/ownership/validate`);
  }
}

/**
 * Validate (additional) operations
 */
export class ValidateExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Validates destination.
   *
   * @see delete-accounts-account_id-logpush-validate-destination
   */
  async destinationDelete(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/logpush/validate/destination`);
  }

  /**
   * Checks if there is an existing job with a destination.
   *
   * @see delete-accounts-account_id-logpush-validate-destination-exists
   */
  async destinationExistsDelete(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/logpush/validate/destination/exists`);
  }

  /**
   * Validates logpull origin with logpull_options.
   *
   * @see post-accounts-account_id-logpush-validate-origin
   */
  async originCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/logpush/validate/origin`);
  }
}

/**
 * Push Cloudflare logs to external storage destinations — R2, S3, Splunk, Datadog, and more
 */
export class Logpush extends APIResource {
  readonly datasets: Datasets;
  readonly edge: Edge;
  readonly jobs: Jobs;
  readonly ownership: Ownership;
  readonly validate: Validate;
  readonly datasetsextra: DatasetsExtra;
  readonly jobsextra: JobsExtra;
  readonly ownershipextra: OwnershipExtra;
  readonly validateextra: ValidateExtra;

  constructor(client: CloudflareClient) {
    super(client);
    this.datasets = new Datasets(client);
    this.edge = new Edge(client);
    this.jobs = new Jobs(client);
    this.ownership = new Ownership(client);
    this.validate = new Validate(client);
    this.datasetsextra = new DatasetsExtra(client);
    this.jobsextra = new JobsExtra(client);
    this.ownershipextra = new OwnershipExtra(client);
    this.validateextra = new ValidateExtra(client);
  }
}
