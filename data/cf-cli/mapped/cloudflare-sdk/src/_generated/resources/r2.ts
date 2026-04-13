/**
 * r2 resource
 * @generated from apis/r2/schema.ts
 *
 * S3-compatible object storage with zero egress fees — buckets, lifecycle rules, event notifications, and data migration
 */
import type { components } from 'cloudflare-openapi';
import { APIResource, CloudflareClient } from '../../client.js';

// Type aliases from OpenAPI components
export type LifecycleConfig = components['schemas']['r2_lifecycle-config'];
export type BucketConfig = components['schemas']['r2_bucket-config'];
export type QueuesConfig = components['schemas']['r2_queues-config'];
export type BucketLockRuleConfig = components['schemas']['r2_bucket-lock-rule-config'];
export type R2SlurperJobresponse = components['schemas']['r2-slurper_JobResponse'];
export type R2SlurperJobprogressresponse = components['schemas']['r2-slurper_JobProgressResponse'];
export type R2SlurperJoblogresponse = components['schemas']['r2-slurper_JobLogResponse'];
export type R2SlurperConnectivityresponse = components['schemas']['r2-slurper_ConnectivityResponse'];

/**
 * Create and configure R2 buckets including CORS, lifecycle, custom domains, event notifications, and object locks
 */
export class Buckets extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all R2 buckets on your account.
   *
   * @see r2-list-buckets
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/r2/buckets`, {
      query: params,
    });
  }

  /**
   * Gets properties of an existing R2 bucket.
   *
   * @see r2-get-bucket
   */
  async get(accountId: string, bucketName: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/r2/buckets/${bucketName}`);
  }

  /**
   * Creates a new R2 bucket.
   *
   * @see r2-create-bucket
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/r2/buckets`);
  }

  /**
   * Updates properties of an existing R2 bucket.
   *
   * @see r2-patch-bucket
   */
  async edit(accountId: string, bucketName: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/r2/buckets/${bucketName}`);
  }

  /**
   * Deletes an existing R2 bucket.
   *
   * @see r2-delete-bucket
   */
  async delete(bucketName: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/r2/buckets/${bucketName}`);
  }

  /**
   * Get object lifecycle rules for a bucket.
   *
   * @see r2-get-bucket-lifecycle-configuration
   */
  async lifecycleGet(bucketName: string, accountId: string): Promise<components['schemas']['r2_lifecycle-config']> {
    return this._client.get<components['schemas']['r2_lifecycle-config']>(
      `/accounts/${accountId}/r2/buckets/${bucketName}/lifecycle`,
    );
  }

  /**
   * Set the object lifecycle rules for a bucket.
   *
   * @see r2-put-bucket-lifecycle-configuration
   */
  async lifecycleUpdate(bucketName: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/r2/buckets/${bucketName}/lifecycle`);
  }

  /**
   * Get the CORS policy for a bucket.
   *
   * @see r2-get-bucket-cors-policy
   */
  async corsGet(bucketName: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/r2/buckets/${bucketName}/cors`);
  }

  /**
   * Set the CORS policy for a bucket.
   *
   * @see r2-put-bucket-cors-policy
   */
  async corsUpdate(bucketName: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/r2/buckets/${bucketName}/cors`);
  }

  /**
   * Delete the CORS policy for a bucket.
   *
   * @see r2-delete-bucket-cors-policy
   */
  async corsDelete(bucketName: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/r2/buckets/${bucketName}/cors`);
  }

  /**
   * Gets a list of all custom domains registered with an existing R2 bucket.
   *
   * @see r2-list-custom-domains
   */
  async domainsCustomList(accountId: string, bucketName: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/r2/buckets/${bucketName}/domains/custom`);
  }

  /**
   * Get the configuration for a custom domain on an existing R2 bucket.
   *
   * @see r2-get-custom-domain-settings
   */
  async domainsCustomGet(accountId: string, bucketName: string, domain: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/r2/buckets/${bucketName}/domains/custom/${domain}`);
  }

  /**
   * Register a new custom domain for an existing R2 bucket.
   *
   * @see r2-add-custom-domain
   */
  async domainsCustomCreate(accountId: string, bucketName: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/r2/buckets/${bucketName}/domains/custom`);
  }

  /**
   * Edit the configuration for a custom domain on an existing R2 bucket.
   *
   * @see r2-edit-custom-domain-settings
   */
  async domainsCustomUpdate(accountId: string, bucketName: string, domain: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/r2/buckets/${bucketName}/domains/custom/${domain}`);
  }

  /**
   * Remove custom domain registration from an existing R2 bucket.
   *
   * @see r2-delete-custom-domain
   */
  async domainsCustomDelete(bucketName: string, accountId: string, domain: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/r2/buckets/${bucketName}/domains/custom/${domain}`);
  }

  /**
   * Gets state of public access over the bucket's R2-managed (r2.dev) domain.
   *
   * @see r2-get-bucket-public-policy
   */
  async domainsManagedList(accountId: string, bucketName: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/r2/buckets/${bucketName}/domains/managed`);
  }

  /**
   * Updates state of public access over the bucket's R2-managed (r2.dev) domain.
   *
   * @see r2-put-bucket-public-policy
   */
  async domainsManagedUpdate(accountId: string, bucketName: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/r2/buckets/${bucketName}/domains/managed`);
  }

  /**
   * List all event notification rules for a bucket.
   *
   * @see r2-get-event-notification-configs
   */
  async eventNotificationsList(
    bucketName: string,
    accountId: string,
  ): Promise<components['schemas']['r2_bucket-config']> {
    return this._client.get<components['schemas']['r2_bucket-config']>(
      `/accounts/${accountId}/event_notifications/r2/${bucketName}/configuration`,
    );
  }

  /**
   * Get a single event notification rule.
   *
   * @see r2-get-event-notification-config
   */
  async eventNotificationsGet(
    queueId: string,
    bucketName: string,
    accountId: string,
  ): Promise<components['schemas']['r2_queues-config']> {
    return this._client.get<components['schemas']['r2_queues-config']>(
      `/accounts/${accountId}/event_notifications/r2/${bucketName}/configuration/queues/${queueId}`,
    );
  }

  /**
   * Create event notification rule.
   *
   * @see r2-put-event-notification-config
   */
  async eventNotificationsUpdate(queueId: string, bucketName: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(
      `/accounts/${accountId}/event_notifications/r2/${bucketName}/configuration/queues/${queueId}`,
    );
  }

  /**
   * Delete an event notification rule. **If no body is provided, all rules for specified queue will be deleted**.
   *
   * @see r2-event-notification-delete-config
   */
  async eventNotificationsDelete(queueId: string, bucketName: string, accountId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/event_notifications/r2/${bucketName}/configuration/queues/${queueId}`,
    );
  }

  /**
   * Get lock rules for a bucket.
   *
   * @see r2-get-bucket-lock-configuration
   */
  async locksGet(bucketName: string, accountId: string): Promise<components['schemas']['r2_bucket-lock-rule-config']> {
    return this._client.get<components['schemas']['r2_bucket-lock-rule-config']>(
      `/accounts/${accountId}/r2/buckets/${bucketName}/lock`,
    );
  }

  /**
   * Set lock rules for a bucket.
   *
   * @see r2-put-bucket-lock-configuration
   */
  async locksUpdate(bucketName: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/r2/buckets/${bucketName}/lock`);
  }

  /**
   * Get Storage/Object Count Metrics across all buckets in your account. Note that Account-Level Metrics may not immediately reflect the latest data.
   *
   * @see r2-get-account-level-metrics
   */
  async metricsList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/r2/metrics`);
  }

  /**
   * Gets configuration for Sippy for an existing R2 bucket.
   *
   * @see r2-get-bucket-sippy-config
   */
  async sippyGet(accountId: string, bucketName: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/r2/buckets/${bucketName}/sippy`);
  }

  /**
   * Sets configuration for Sippy for an existing R2 bucket.
   *
   * @see r2-put-bucket-sippy-config
   */
  async sippyUpdate(accountId: string, bucketName: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/r2/buckets/${bucketName}/sippy`);
  }

  /**
   * Disables Sippy on this bucket.
   *
   * @see r2-delete-bucket-sippy-config
   */
  async sippyDelete(bucketName: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/r2/buckets/${bucketName}/sippy`);
  }
}

/**
 * Generate short-lived S3-compatible credentials scoped to specific buckets and operations
 */
export class TemporaryCredentials extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Creates temporary access credentials on a bucket that can be optionally scoped to prefixes or objects.
   *
   * @see r2-create-temp-access-credentials
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/r2/temp-access-credentials`);
  }
}

/**
 * Migrate data from external S3-compatible storage into R2 buckets with resumable transfer jobs
 */
export class SuperSlurper extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all R2 Super Slurper migration jobs for the account with their status.
   *
   * @see slurper-list-jobs
   */
  async jobsList(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['r2-slurper_JobResponse'][]> {
    return this._client.get<components['schemas']['r2-slurper_JobResponse'][]>(`/accounts/${accountId}/slurper/jobs`, {
      query: params,
    });
  }

  /**
   * Retrieves detailed status and configuration for a specific R2 Super Slurper migration job.
   *
   * @see slurper-get-job
   */
  async jobsGet(accountId: string, jobId: string): Promise<components['schemas']['r2-slurper_JobResponse']> {
    return this._client.get<components['schemas']['r2-slurper_JobResponse']>(
      `/accounts/${accountId}/slurper/jobs/${jobId}`,
    );
  }

  /**
   * Creates a new R2 Super Slurper migration job to transfer objects from a source bucket (e.g. S3, GCS, R2) to R2.
   *
   * @see slurper-create-job
   */
  async jobsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/slurper/jobs`);
  }

  /**
   * Cancels all running R2 Super Slurper migration jobs for the account. Any objects in the middle of a transfer will finish, but no new objects will start transferring.
   *
   * @see slurper-abort-all-jobs
   */
  async jobsAbortAll(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/slurper/jobs/abortAll`);
  }

  /**
   * Cancels a specific R2 Super Slurper migration job. Any objects in the middle of a transfer will finish, but no new objects will start transferring.
   *
   * @see slurper-abort-job
   */
  async jobsAbort(accountId: string, jobId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/slurper/jobs/${jobId}/abort`);
  }

  /**
   * Pauses a running R2 Super Slurper migration job. The job can be resumed later to continue transferring.
   *
   * @see slurper-pause-job
   */
  async jobsPause(accountId: string, jobId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/slurper/jobs/${jobId}/pause`);
  }

  /**
   * Retrieves current progress metrics for an R2 Super Slurper migration job
   *
   * @see slurper-get-job-progress
   */
  async jobsProgress(
    accountId: string,
    jobId: string,
  ): Promise<components['schemas']['r2-slurper_JobProgressResponse']> {
    return this._client.get<components['schemas']['r2-slurper_JobProgressResponse']>(
      `/accounts/${accountId}/slurper/jobs/${jobId}/progress`,
    );
  }

  /**
   * Resumes a paused R2 Super Slurper migration job, continuing the transfer from where it stopped.
   *
   * @see slurper-resume-job
   */
  async jobsResume(accountId: string, jobId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/slurper/jobs/${jobId}/resume`);
  }

  /**
   * Gets log entries for an R2 Super Slurper migration job, showing migration status changes, errors, etc.
   *
   * @see slurper-get-job-logs
   */
  async jobsLogsList(
    accountId: string,
    jobId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['r2-slurper_JobLogResponse'][]> {
    return this._client.get<components['schemas']['r2-slurper_JobLogResponse'][]>(
      `/accounts/${accountId}/slurper/jobs/${jobId}/logs`,
      {
        query: params,
      },
    );
  }

  /**
   * Check whether tokens are valid against the source bucket
   *
   * @see slurper-check-source-connectivity
   */
  async connectivityPrecheckSource(
    accountId: string,
  ): Promise<components['schemas']['r2-slurper_ConnectivityResponse']> {
    return this._client.put<components['schemas']['r2-slurper_ConnectivityResponse']>(
      `/accounts/${accountId}/slurper/source/connectivity-precheck`,
    );
  }

  /**
   * Check whether tokens are valid against the target bucket
   *
   * @see slurper-check-target-connectivity
   */
  async connectivityPrecheckTarget(
    accountId: string,
  ): Promise<components['schemas']['r2-slurper_ConnectivityResponse']> {
    return this._client.put<components['schemas']['r2-slurper_ConnectivityResponse']>(
      `/accounts/${accountId}/slurper/target/connectivity-precheck`,
    );
  }
}

/**
 * Buckets (additional) operations
 */
export class BucketsExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get the local uploads configuration for a bucket. When enabled, object's data is written to the nearest region first, then asynchronously replicated to the bucket's primary region.
   *
   * @see r2-get-bucket-local-uploads-configuration
   */
  async localUploadsGet(bucketName: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/r2/buckets/${bucketName}/local-uploads`);
  }

  /**
   * Set the local uploads configuration for a bucket. When enabled, object's data is written to the nearest region first, then asynchronously replicated to the bucket's primary region.
   *
   * @see r2-put-bucket-local-uploads-configuration
   */
  async localUploadsUpdate(bucketName: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/r2/buckets/${bucketName}/local-uploads`);
  }
}

/**
 * S3-compatible object storage with zero egress fees — buckets, lifecycle rules, event notifications, and data migration
 */
export class R2 extends APIResource {
  readonly buckets: Buckets;
  readonly temporarycredentials: TemporaryCredentials;
  readonly superslurper: SuperSlurper;
  readonly bucketsextra: BucketsExtra;

  constructor(client: CloudflareClient) {
    super(client);
    this.buckets = new Buckets(client);
    this.temporarycredentials = new TemporaryCredentials(client);
    this.superslurper = new SuperSlurper(client);
    this.bucketsextra = new BucketsExtra(client);
  }
}
