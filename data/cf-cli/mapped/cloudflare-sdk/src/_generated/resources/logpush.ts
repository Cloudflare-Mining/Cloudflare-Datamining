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
 * Log Explorer datasets for account-level log analysis and querying
 */
export class LogExplorerDatasets extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns all Log Explorer datasets configured for the account. Pass `include_zones=true` to also include zone-level datasets that belong to this account. List responses omit the `fields` property; use the single-dataset endpoint to retrieve field configuration.
   *
   * @see accounts-logs-explorer-datasets-list
   */
  async accountsList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/logs/explorer/datasets`, {
      query: params,
    });
  }

  /**
   * Create a new Log Explorer dataset for the account. Use the `/accounts/{account_id}/logs/explorer/datasets/available` endpoint to list dataset types you can create along with their available fields. The `fields` property is optional. If not specified, all available fields will be enabled.
   *
   * @see accounts-logs-explorer-datasets-create
   */
  async accountsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/logs/explorer/datasets`);
  }

  /**
   * Returns all dataset types that this account can create. Each entry includes the dataset schema and timestamp field. The schema shows all possible fields for a dataset. However, not all fields may be available for your account. When creating or updating a dataset, only fields available to your account can be enabled. If you request a field that is not available, you will receive an error.
   *
   * @see accounts-logs-explorer-datasets-available-list
   */
  async accountsAvailableList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/logs/explorer/datasets/available`);
  }

  /**
   * Retrieve a single Log Explorer dataset by ID for the account.
   *
   * @see accounts-logs-explorer-datasets-get
   */
  async accountsGet(accountId: string, datasetId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/logs/explorer/datasets/${datasetId}`);
  }

  /**
   * Updates the enabled state and/or field configuration of an account dataset.
   *
   * @see accounts-logs-explorer-datasets-update
   */
  async accountsUpdate(accountId: string, datasetId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/logs/explorer/datasets/${datasetId}`);
  }

  /**
   * Returns all Log Explorer datasets configured for the zone. List responses omit the `fields` property; use the single-dataset endpoint to retrieve field configuration.
   *
   * @see zones-logs-explorer-datasets-list
   */
  async zonesList(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/logs/explorer/datasets`);
  }

  /**
   * Create a new Log Explorer dataset for the zone. Use the `/zones/{zone_id}/logs/explorer/datasets/available` endpoint to list dataset types you can create along with their available fields. The `fields` property is optional. If not specified, all available fields will be enabled.
   *
   * @see zones-logs-explorer-datasets-create
   */
  async zonesCreate(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/logs/explorer/datasets`);
  }

  /**
   * Returns all dataset types that this zone can create. Each entry includes the dataset schema and timestamp field. The schema shows all possible fields for a dataset. However, not all fields may be available for your account. When creating or updating a dataset, only fields available to your account can be enabled. If you request a field that is not available, you will receive an error.
   *
   * @see zones-logs-explorer-datasets-available-list
   */
  async zonesAvailableList(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/logs/explorer/datasets/available`);
  }

  /**
   * Retrieve a single Log Explorer dataset by ID for the zone.
   *
   * @see zones-logs-explorer-datasets-get
   */
  async zonesGet(zoneId: string, datasetId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/logs/explorer/datasets/${datasetId}`);
  }

  /**
   * Updates the enabled state and/or field configuration of a zone dataset.
   *
   * @see zones-logs-explorer-datasets-update
   */
  async zonesUpdate(zoneId: string, datasetId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/logs/explorer/datasets/${datasetId}`);
  }
}

/**
 * Query log data using the Log Explorer query engine
 */
export class LogExplorerQuery extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Run a SQL query against account-level datasets.
   *
   * @see accounts-logs-explorer-query-post
   */
  async accountsQuery(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/logs/explorer/query/sql`);
  }

  /**
   * Run a SQL query against zone-level datasets.
   *
   * @see zones-logs-explorer-query-post
   */
  async zonesQuery(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/logs/explorer/query/sql`);
  }
}

/**
 * Central Management of Billing (CMB) log control configuration
 */
export class LogcontrolCmb extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets CMB config.
   *
   * @see get-accounts-account_id-logs-control-cmb-config
   */
  async get(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/logs/control/cmb/config`);
  }

  /**
   * Updates CMB config.
   *
   * @see post-accounts-account_id-logs-control-cmb-config
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/logs/control/cmb/config`);
  }

  /**
   * Deletes CMB config.
   *
   * @see delete-accounts-account_id-logs-control-cmb-config
   */
  async delete(accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/logs/control/cmb/config`);
  }
}

/**
 * Access raw log data received at the edge — retention flags, ray ID lookups, and field listings
 */
export class LogsReceived extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets log retention flag for Logpull API.
   *
   * @see get-zones-zone_id-logs-control-retention-flag
   */
  async retentionFlagGet(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/logs/control/retention/flag`);
  }

  /**
   * Updates log retention flag for Logpull API.
   *
   * @see post-zones-zone_id-logs-control-retention-flag
   */
  async retentionFlagCreate(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/logs/control/retention/flag`);
  }

  /**
   * The `/rayids` api route allows lookups by specific rayid. The rayids route will return zero, one, or more records (ray ids are not unique).
   *
   * @see get-zones-zone_id-logs-rayids-ray_id
   */
  async rayidGet(zoneId: string, rayId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/logs/rayids/${rayId}`, {
      query: params,
    });
  }

  /**
   * The `/received` api route allows customers to retrieve their edge HTTP logs. The basic access pattern is "give me all the logs for zone Z for minute M", where the minute M refers to the time records were received at Cloudflare's central data center. `start` is inclusive, and `end` is exclusive. Because of that, to get all data, at minutely cadence, starting at 10AM, the proper values are: `start=2018-05-20T10:00:00Z&end=2018-05-20T10:01:00Z`, then `start=2018-05-20T10:01:00Z&end=2018-05-20T10:02:00Z` and so on; the overlap will be handled properly.
   *
   * @see get-zones-zone_id-logs-received
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/logs/received`, {
      query: params,
    });
  }

  /**
   * Lists all fields available. The response is json object with key-value pairs, where keys are field names, and values are descriptions.
   *
   * @see get-zones-zone_id-logs-received-fields
   */
  async fieldsGet(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/logs/received/fields`);
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
  readonly logexplorerdatasets: LogExplorerDatasets;
  readonly logexplorerquery: LogExplorerQuery;
  readonly logcontrolcmb: LogcontrolCmb;
  readonly logsreceived: LogsReceived;

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
    this.logexplorerdatasets = new LogExplorerDatasets(client);
    this.logexplorerquery = new LogExplorerQuery(client);
    this.logcontrolcmb = new LogcontrolCmb(client);
    this.logsreceived = new LogsReceived(client);
  }
}
