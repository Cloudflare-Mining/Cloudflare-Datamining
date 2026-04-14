/**
 * workers resource
 * @generated from apis/workers/schema.ts
 *
 * Deploy and manage serverless JavaScript/WASM applications on Cloudflare's global network
 */
import type { components } from 'cloudflare-openapi';
import { APIResource, CloudflareClient } from '../../client.js';

// Type aliases from OpenAPI components
export type SchemasSubdomain = components['schemas']['workers_schemas-subdomain'];
export type NamespaceScriptResponse = components['schemas']['workers_namespace-script-response'];
export type PlacementRegionsResponse = components['schemas']['workers_placement-regions-response'];

/**
 * Beta Worker lifecycle APIs — create, update, version, and delete Workers (preview channel)
 */
export class Beta extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List all Workers for an account.
   *
   * @see listWorkers
   */
  async workersList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/workers`, {
      query: params,
    });
  }

  /**
   * Get details about a specific Worker.
   *
   * @see getWorker
   */
  async workersGet(accountId: string, workerId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/workers/${workerId}`);
  }

  /**
   * Create a new Worker.
   *
   * @see createWorker
   */
  async workersCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/workers/workers`);
  }

  /**
   * Perform a complete replacement of a Worker, where omitted properties are set to their default values. This is the exact same as the Create Worker endpoint, but operates on an existing Worker. To perform a partial update instead, use the Edit Worker endpoint.
   *
   * @see updateWorker
   */
  async workersUpdate(accountId: string, workerId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/workers/workers/${workerId}`);
  }

  /**
   * Perform a partial update on a Worker, where omitted properties are left unchanged from their current values.
   *
   * @see editWorker
   */
  async workersEdit(accountId: string, workerId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/workers/workers/${workerId}`);
  }

  /**
   * Delete a Worker and all its associated resources (versions, deployments, etc.).
   *
   * @see deleteWorker
   */
  async workersDelete(accountId: string, workerId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/workers/workers/${workerId}`);
  }

  /**
   * List all versions for a Worker.
   *
   * @see listWorkerVersions
   */
  async workersVersionsList(accountId: string, workerId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/workers/${workerId}/versions`, {
      query: params,
    });
  }

  /**
   * Get details about a specific version.
   *
   * @see getWorkerVersion
   */
  async workersVersionsGet(
    accountId: string,
    workerId: string,
    versionId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/workers/${workerId}/versions/${versionId}`, {
      query: params,
    });
  }

  /**
   * Create a new version.
   *
   * @see createWorkerVersion
   */
  async workersVersionsCreate(accountId: string, workerId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/workers/workers/${workerId}/versions`, {
      body: { ...params },
    });
  }

  /**
   * Delete a version.
   *
   * @see deleteWorkerVersion
   */
  async workersVersionsDelete(accountId: string, workerId: string, versionId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/workers/workers/${workerId}/versions/${versionId}`);
  }
}

/**
 * Map URL patterns to Workers so incoming requests are dispatched to the correct script
 */
export class Routes extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns routes for a zone.
   *
   * @see worker-routes-list-routes
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/workers/routes`);
  }

  /**
   * Returns information about a route, including URL pattern and Worker.
   *
   * @see worker-routes-get-route
   */
  async get(routeId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/workers/routes/${routeId}`);
  }

  /**
   * Creates a route that maps a URL pattern to a Worker.
   *
   * @see worker-routes-create-route
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/workers/routes`);
  }

  /**
   * Updates the URL pattern or Worker associated with a route.
   *
   * @see worker-routes-update-route
   */
  async update(routeId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/workers/routes/${routeId}`);
  }

  /**
   * Deletes a route.
   *
   * @see worker-routes-delete-route
   */
  async delete(routeId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/workers/routes/${routeId}`);
  }
}

/**
 * Upload static assets that are served alongside a Worker
 */
export class Assets extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Upload assets ahead of creating a Worker version. To learn more about the direct uploads of assets, see https://developers.cloudflare.com/workers/static-assets/direct-upload/.
   *
   * @see worker-assets-upload
   */
  async uploadCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/workers/assets/upload`, {
      body: { ...params },
    });
  }
}

/**
 * Upload, download, and configure Worker scripts including bindings, secrets, cron triggers, and deployments
 */
export class Scripts extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetch a list of uploaded workers.
   *
   * @see worker-script-list-workers
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/scripts`, {
      query: params,
    });
  }

  /**
   * Search for Workers in an account.
   *
   * @see worker-script-search-workers
   */
  async search(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/scripts-search`, {
      query: params,
    });
  }

  /**
   * Fetch raw script content for your worker. Note this is the original script content, not JSON encoded.
   *
   * @see worker-script-download-worker
   */
  async get(accountId: string, scriptName: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}`);
  }

  /**
   * Upload a worker module. You can find more about the multipart metadata on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/.
   *
   * @see worker-script-upload-worker-module
   */
  async update(accountId: string, scriptName: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}`, {
      body: { ...params },
    });
  }

  /**
   * Delete your worker. This call has no response body on a successful delete.
   *
   * @see worker-script-delete-worker
   */
  async delete(accountId: string, scriptName: string, params?: Record<string, unknown>): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/workers/scripts/${scriptName}`, {
      query: params,
    });
  }

  /**
   * Start uploading a collection of assets for use in a Worker version. To learn more about the direct uploads of assets, see https://developers.cloudflare.com/workers/static-assets/direct-upload/.
   *
   * @see worker-script-update-create-assets-upload-session
   */
  async assetsUploadCreate(accountId: string, scriptName: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}/assets-upload-session`);
  }

  /**
   * Get if the Worker is available on the workers.dev subdomain.
   *
   * @see worker-script-get-subdomain
   */
  async subdomainGet(accountId: string, scriptName: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}/subdomain`);
  }

  /**
   * Enable or disable the Worker on the workers.dev subdomain.
   *
   * @see worker-script-post-subdomain
   */
  async subdomainCreate(accountId: string, scriptName: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}/subdomain`);
  }

  /**
   * Disable all workers.dev subdomains for a Worker.
   *
   * @see worker-script-delete-subdomain
   */
  async subdomainDelete(accountId: string, scriptName: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/workers/scripts/${scriptName}/subdomain`);
  }

  /**
   * Fetches Cron Triggers for a Worker.
   *
   * @see worker-cron-trigger-get-cron-triggers
   */
  async schedulesGet(accountId: string, scriptName: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}/schedules`);
  }

  /**
   * Updates Cron Triggers for a Worker.
   *
   * @see worker-cron-trigger-update-cron-triggers
   */
  async schedulesUpdate(accountId: string, scriptName: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}/schedules`);
  }

  /**
   * Starts a tail that receives logs and exception from a Worker.
   *
   * @see worker-tail-logs-start-tail
   */
  async tailCreate(accountId: string, scriptName: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}/tails`);
  }

  /**
   * Deletes a tail from a Worker.
   *
   * @see worker-tail-logs-delete-tail
   */
  async tailDelete(accountId: string, scriptName: string, id: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/workers/scripts/${scriptName}/tails/${id}`);
  }

  /**
   * Fetch script content only.
   *
   * @see worker-script-get-content
   */
  async contentGet(accountId: string, scriptName: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}/content/v2`);
  }

  /**
   * Put script content without touching config or metadata.
   *
   * @see worker-script-put-content
   */
  async contentUpdate(accountId: string, scriptName: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}/content`);
  }

  /**
   * Get script-level settings when using [Worker Versions](https://developers.cloudflare.com/api/operations/worker-versions-list-versions). Includes Logpush and Tail Consumers.
   *
   * @see worker-script-settings-get-settings
   */
  async settingsGet(accountId: string, scriptName: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}/script-settings`);
  }

  /**
   * Patch script-level settings when using [Worker Versions](https://developers.cloudflare.com/api/operations/worker-versions-list-versions). Including but not limited to Logpush and Tail Consumers.
   *
   * @see worker-script-settings-patch-settings
   */
  async settingsEdit(accountId: string, scriptName: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}/script-settings`);
  }

  /**
   * List of Worker Deployments. The first deployment in the list is the latest deployment actively serving traffic.
   *
   * @see worker-deployments-list-deployments
   */
  async deploymentsList(accountId: string, scriptName: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}/deployments`);
  }

  /**
   * Deployments configure how [Worker Versions](https://developers.cloudflare.com/api/operations/worker-versions-list-versions) are deployed to traffic. A deployment can consist of one or two versions of a Worker.
   *
   * @see worker-deployments-create-deployment
   */
  async deploymentsCreate(accountId: string, scriptName: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}/deployments`, {
      body: { ...params },
    });
  }

  /**
   * Get information about a Worker Deployment.
   *
   * @see worker-deployments-get-deployment
   */
  async deploymentsGet(accountId: string, scriptName: string, deploymentId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/workers/scripts/${scriptName}/deployments/${deploymentId}`,
    );
  }

  /**
   * Delete a Worker Deployment. The latest deployment, which is actively serving traffic, cannot be deleted. All other deployments can be deleted.
   *
   * @see worker-deployments-delete-deployment
   */
  async deploymentsDelete(accountId: string, scriptName: string, deploymentId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/workers/scripts/${scriptName}/deployments/${deploymentId}`,
    );
  }

  /**
   * List of Worker Versions. The first version in the list is the latest version.
   *
   * @see worker-versions-list-versions
   */
  async versionsList(accountId: string, scriptName: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}/versions`, {
      query: params,
    });
  }

  /**
   * Retrieves detailed information about a specific version of a Workers script.
   *
   * @see worker-versions-get-version-detail
   */
  async versionsGet(accountId: string, scriptName: string, versionId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}/versions/${versionId}`);
  }

  /**
   * Upload a Worker Version without deploying to Cloudflare's network. You can find more about the multipart metadata on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/.
   *
   * @see worker-versions-upload-version
   */
  async versionsCreate(accountId: string, scriptName: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}/versions`, {
      body: { ...params },
    });
  }

  /**
   * List secrets bound to a script.
   *
   * @see worker-list-script-secrets
   */
  async secretsList(accountId: string, scriptName: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}/secrets`);
  }

  /**
   * Get a given secret binding (value omitted) on a script.
   *
   * @see worker-get-script-secret
   */
  async secretsGet(
    accountId: string,
    scriptName: string,
    secretName: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}/secrets/${secretName}`, {
      query: params,
    });
  }

  /**
   * Add a secret to a script.
   *
   * @see worker-put-script-secret
   */
  async secretsUpdate(accountId: string, scriptName: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}/secrets`);
  }

  /**
   * Remove a secret from a script.
   *
   * @see worker-delete-script-secret
   */
  async secretsDelete(
    accountId: string,
    scriptName: string,
    secretName: string,
    params?: Record<string, unknown>,
  ): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/workers/scripts/${scriptName}/secrets/${secretName}`, {
      query: params,
    });
  }

  /**
   * Get metadata and config, such as bindings or usage model.
   *
   * @see worker-script-get-settings
   */
  async scriptAndVersionSettingsGet(accountId: string, scriptName: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}/settings`);
  }

  /**
   * Patch metadata or config, such as bindings or usage model.
   *
   * @see worker-script-patch-settings
   */
  async scriptAndVersionSettingsEdit(accountId: string, scriptName: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}/settings`);
  }
}

/**
 * Account-wide Worker settings such as default usage model and green compute
 */
export class AccountSettings extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches Worker account settings for an account.
   *
   * @see worker-account-settings-fetch-worker-account-settings
   */
  async get(accountId: string): Promise<components['schemas']['workers_account-settings']> {
    return this._client.get<components['schemas']['workers_account-settings']>(
      `/accounts/${accountId}/workers/account-settings`,
    );
  }

  /**
   * Creates Worker account settings for an account.
   *
   * @see worker-account-settings-create-worker-account-settings
   */
  async update(accountId: string): Promise<components['schemas']['workers_account-settings']> {
    return this._client.put<components['schemas']['workers_account-settings']>(
      `/accounts/${accountId}/workers/account-settings`,
    );
  }
}

/**
 * Attach or detach custom domains that route directly to a Worker without a DNS record
 */
export class Domains extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all domains for an account.
   *
   * @see workers.domains.list
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/domains`, {
      query: params,
    });
  }

  /**
   * Gets information about a domain.
   *
   * @see workers.domains.get
   */
  async get(accountId: string, domainId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/domains/${domainId}`);
  }

  /**
   * Attaches a domain that routes traffic to a Worker.
   *
   * @see workers.domains.update
   */
  async update(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/workers/domains`);
  }

  /**
   * Detaches a domain from a Worker. Both the Worker and all of its previews are no longer routable using this domain.
   *
   * @see workers.domains.delete
   */
  async delete(accountId: string, domainId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/workers/domains/${domainId}`);
  }
}

/**
 * Configure the workers.dev subdomain used to reach Workers without a custom domain
 */
export class Subdomains extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns a Workers subdomain for an account.
   *
   * @see worker-subdomain-get-subdomain
   */
  async get(accountId: string): Promise<components['schemas']['workers_schemas-subdomain']> {
    return this._client.get<components['schemas']['workers_schemas-subdomain']>(
      `/accounts/${accountId}/workers/subdomain`,
    );
  }

  /**
   * Creates a Workers subdomain for an account.
   *
   * @see worker-subdomain-create-subdomain
   */
  async update(accountId: string): Promise<components['schemas']['workers_schemas-subdomain']> {
    return this._client.put<components['schemas']['workers_schemas-subdomain']>(
      `/accounts/${accountId}/workers/subdomain`,
    );
  }

  /**
   * Deletes a Workers subdomain for an account.
   *
   * @see worker-subdomain-delete-subdomain
   */
  async delete(accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/workers/subdomain`);
  }
}

/**
 * Registries operations
 */
export class Registries extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Generates temporary credentials for accessing Cloudflare's container image registry. Used for pulling and pushing container images.
   *
   * @see generateImageRegistryCredentials
   */
  async credentialsGenerate(domain: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/containers/registries/${domain}/credentials`);
  }
}

/**
 * Crawler operations
 */
export class Crawler extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Deletes the stripe config for a crawler.
   *
   * @see pay-per-crawl.crawlerDeleteStripeConfig
   */
  async stripeDelete(accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/pay-per-crawl/crawler/stripe`);
  }

  /**
   * Gets the stripe config for a crawler.
   *
   * @see pay-per-crawl.crawlerGetStripeConfig
   */
  async stripeGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/pay-per-crawl/crawler/stripe`);
  }

  /**
   * Creates the stripe config for a crawler.
   *
   * @see pay-per-crawl.crawlerCreateStripeConfig
   */
  async stripeCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/pay-per-crawl/crawler/stripe`);
  }
}

/**
 * Publisher operations
 */
export class Publisher extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Deletes the stripe config for a publisher.
   *
   * @see pay-per-crawl.publisherDeleteStripeConfig
   */
  async stripeDelete(accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/pay-per-crawl/publisher/stripe`);
  }

  /**
   * Gets the stripe config for a publisher.
   *
   * @see pay-per-crawl.publisherGetStripeConfig
   */
  async stripeGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/pay-per-crawl/publisher/stripe`);
  }

  /**
   * Creates the stripe config for a publisher.
   *
   * @see pay-per-crawl.publisherCreateStripeConfig
   */
  async stripeCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/pay-per-crawl/publisher/stripe`);
  }
}

/**
 * Zones Can Be Enabled operations
 */
export class ZonesCanBeEnabled extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Allows an account admin to set the can_be_enabled setting on a list of zones.
   *
   * @see pay-per-crawl.setZonesCanBeEnabled
   */
  async edit(accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/pay-per-crawl/zones_can_be_enabled`);
  }

  /**
   * Provided a list of pay-per-crawl configured zones this method will return whether they can enable PPC or not.
   *
   * @see pay-per-crawl.queryZonesCanBeEnabled
   */
  async queryCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/pay-per-crawl/zones_can_be_enabled/query`);
  }
}

/**
 * Dispatch operations
 */
export class Dispatch extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Patch a Workers for Platforms namespace. Omitted fields are left unchanged.
   *
   * @see namespace-worker-patch-namespace
   */
  async namespacesEdit(accountId: string, dispatchNamespace: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}`);
  }

  /**
   * Update a Workers for Platforms namespace.
   *
   * @see namespace-worker-put-namespace
   */
  async namespacesUpdate(accountId: string, dispatchNamespace: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}`);
  }

  /**
   * Delete multiple scripts from a Workers for Platforms namespace based on optional tag filters.
   *
   * @see namespace-worker-delete-scripts
   */
  async namespacesScriptsDelete(
    accountId: string,
    dispatchNamespace: string,
    params?: Record<string, unknown>,
  ): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}/scripts`,
      {
        query: params,
      },
    );
  }

  /**
   * Fetch a list of scripts uploaded to a Workers for Platforms namespace.
   *
   * @see namespace-worker-list-scripts
   */
  async namespacesScriptsList(
    accountId: string,
    dispatchNamespace: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['workers_namespace-script-response'][]> {
    return this._client.get<components['schemas']['workers_namespace-script-response'][]>(
      `/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}/scripts`,
      {
        query: params,
      },
    );
  }

  /**
   * Put a single tag on a script uploaded to a Workers for Platforms namespace.
   *
   * @see namespace-worker-put-script-tag
   */
  async namespacesScriptsTagsUpdate(
    accountId: string,
    dispatchNamespace: string,
    scriptName: string,
    tag: string,
  ): Promise<unknown> {
    return this._client.put<unknown>(
      `/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/tags/${tag}`,
    );
  }
}

/**
 * Placement operations
 */
export class Placement extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns a list of available placement regions organized by cloud provider. These regions can be used to configure Smart Placement for Workers.
   *
   * @see worker-placement-list-regions
   */
  async regionsList(accountId: string): Promise<components['schemas']['workers_placement-regions-response']> {
    return this._client.get<components['schemas']['workers_placement-regions-response']>(
      `/accounts/${accountId}/workers/placement/regions`,
    );
  }
}

/**
 * Scripts (additional) operations
 */
export class ScriptsExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches the Usage Model for a given Worker.
   *
   * @see worker-script-fetch-usage-model
   */
  async usageModelGet(accountId: string, scriptName: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}/usage-model`);
  }

  /**
   * Updates the Usage Model for a given Worker. Requires a Workers Paid subscription.
   *
   * @see worker-script-update-usage-model
   */
  async usageModelUpdate(accountId: string, scriptName: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/workers/scripts/${scriptName}/usage-model`);
  }
}

/**
 * Services operations
 */
export class Services extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get script content from a worker with an environment.
   *
   * @see worker-environment-get-script-content
   */
  async environmentsContentGet(accountId: string, serviceName: string, environmentName: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/workers/services/${serviceName}/environments/${environmentName}/content`,
    );
  }

  /**
   * Put script content from a worker with an environment.
   *
   * @see worker-environment-put-script-content
   */
  async environmentsContentUpdate(accountId: string, serviceName: string, environmentName: string): Promise<unknown> {
    return this._client.put<unknown>(
      `/accounts/${accountId}/workers/services/${serviceName}/environments/${environmentName}/content`,
    );
  }

  /**
   * Get script settings from a worker with an environment.
   *
   * @see worker-script-environment-get-settings
   */
  async environmentsSettingsGet(accountId: string, serviceName: string, environmentName: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/workers/services/${serviceName}/environments/${environmentName}/settings`,
    );
  }

  /**
   * Patch script metadata, such as bindings.
   *
   * @see worker-script-environment-patch-settings
   */
  async environmentsSettingsEdit(accountId: string, serviceName: string, environmentName: string): Promise<unknown> {
    return this._client.patch<unknown>(
      `/accounts/${accountId}/workers/services/${serviceName}/environments/${environmentName}/settings`,
    );
  }
}

/**
 * Configuration operations
 */
export class Configuration extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets the pay-per-crawl config for a zone including the bot configuration.
   *
   * @see pay-per-crawl.getConfig
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/pay-per-crawl/configuration`);
  }

  /**
   * Changes the pay-per-crawl config for a zone.
   *
   * @see pay-per-crawl.patchConfig
   */
  async edit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/pay-per-crawl/configuration`);
  }

  /**
   * Creates the pay-per-crawl config for a zone.
   *
   * @see pay-per-crawl.createConfig
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/pay-per-crawl/configuration`);
  }
}

/**
 * Workers observability — destinations, queries, and telemetry for monitoring and debugging
 */
export class Observability extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List your Workers Observability Telemetry Destinations.
   *
   * @see destination.list
   */
  async destinationsList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/observability/destinations`, {
      query: params,
    });
  }

  /**
   * Create a new Workers Observability Telemetry Destination.
   *
   * @see destination.create
   */
  async destinationsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/workers/observability/destinations`);
  }

  /**
   * Update an existing Workers Observability Telemetry Destination.
   *
   * @see destination.update
   */
  async destinationsEdit(slug: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/workers/observability/destinations/${slug}`);
  }

  /**
   * Delete a Workers Observability Telemetry Destination.
   *
   * @see destinations.delete
   */
  async destinationsDelete(slug: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/workers/observability/destinations/${slug}`);
  }

  /**
   * List saved queries.
   *
   * @see queries.list
   */
  async queriesList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/observability/queries`, {
      query: params,
    });
  }

  /**
   * Persist query for later use.
   *
   * @see queries.post
   */
  async queriesCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/workers/observability/queries`);
  }

  /**
   * Delete a saved query.
   *
   * @see queries.delete
   */
  async queriesDelete(queryid: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/workers/observability/queries/${queryid}`);
  }

  /**
   * Retrieve a saved query.
   *
   * @see queries.get
   */
  async queriesGet(queryid: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/observability/queries/${queryid}`);
  }

  /**
   * Update saved query.
   *
   * @see queries.patch
   */
  async queriesEdit(queryid: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/workers/observability/queries/${queryid}`);
  }

  /**
   * List all the keys in your telemetry events.
   *
   * @see telemetry.keys.list
   */
  async telemetryKeysList(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/workers/observability/telemetry/keys`);
  }

  /**
   * Run a temporary or saved query.
   *
   * @see telemetry.query
   */
  async telemetryQuery(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/workers/observability/telemetry/query`);
  }

  /**
   * List unique values found in your events.
   *
   * @see telemetry.values.list
   */
  async telemetryValuesList(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/workers/observability/telemetry/values`);
  }
}

/**
 * Durable, multi-step workflows that run on Workers with automatic retries and state persistence
 */
export class Workflows extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all workflows configured for the account.
   *
   * @see wor-list-workflows
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workflows`, {
      query: params,
    });
  }

  /**
   * Retrieves configuration and metadata for a specific workflow.
   *
   * @see wor-get-workflow-details
   */
  async get(workflowName: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workflows/${workflowName}`);
  }

  /**
   * Creates a new workflow or updates an existing workflow definition.
   *
   * @see wor-create-or-modify-workflow
   */
  async create(workflowName: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/workflows/${workflowName}`);
  }

  /**
   * Deletes a Workflow. This only deletes the Workflow and does not delete or modify any Worker associated to this Workflow or bounded to it.
   *
   * @see wor-delete-workflow
   */
  async delete(workflowName: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/workflows/${workflowName}`);
  }

  /**
   * Lists all instances of a workflow with their execution status.
   *
   * @see wor-list-workflow-instances
   */
  async instancesList(workflowName: string, accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workflows/${workflowName}/instances`, {
      query: params,
    });
  }

  /**
   * Creates a new instance of a workflow, starting its execution.
   *
   * @see wor-create-new-workflow-instance
   */
  async instancesCreate(workflowName: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/workflows/${workflowName}/instances`);
  }

  /**
   * Creates multiple workflow instances in a single batch operation.
   *
   * @see wor-batch-create-workflow-instance
   */
  async instancesBatchCreate(workflowName: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/workflows/${workflowName}/instances/batch`);
  }

  /**
   * Terminates multiple workflow instances in a single batch operation.
   *
   * @see wor-batch-terminate-workflow-instances
   */
  async instancesBatchTerminate(workflowName: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/workflows/${workflowName}/instances/batch/terminate`);
  }

  /**
   * Gets the status of a bulk workflow instance termination job.
   *
   * @see wor-status-terminate-workflow-instances
   */
  async instancesBatchTerminateStatus(workflowName: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workflows/${workflowName}/instances/terminate`);
  }

  /**
   * Retrieves logs and execution status for a specific workflow instance.
   *
   * @see wor-describe-workflow-instance
   */
  async instancesGet(
    workflowName: string,
    instanceId: string,
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workflows/${workflowName}/instances/${instanceId}`, {
      query: params,
    });
  }

  /**
   * Sends an event to a running workflow instance to trigger state transitions.
   *
   * @see wor-send-event-workflow-instance
   */
  async instancesEventCreate(
    workflowName: string,
    instanceId: string,
    eventType: string,
    accountId: string,
  ): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/workflows/${workflowName}/instances/${instanceId}/events/${eventType}`,
    );
  }

  /**
   * Changes the execution status of a workflow instance (e.g., pause, resume, terminate).
   *
   * @see wor-change-status-workflow-instance
   */
  async instancesStatusEdit(workflowName: string, instanceId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(
      `/accounts/${accountId}/workflows/${workflowName}/instances/${instanceId}/status`,
    );
  }

  /**
   * Lists all deployed versions of a workflow.
   *
   * @see wor-list-workflow-versions
   */
  async versionsList(workflowName: string, accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workflows/${workflowName}/versions`, {
      query: params,
    });
  }

  /**
   * Retrieves details for a specific deployed workflow version.
   *
   * @see wor-describe-workflow-versions
   */
  async versionsGet(workflowName: string, versionId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workflows/${workflowName}/versions/${versionId}`);
  }

  /**
   * Retrieves the directed acyclic graph (DAG) representation of a workflow version.
   *
   * @see wor-describe-workflow-versions-dag
   */
  async versionsDagGet(workflowName: string, versionId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workflows/${workflowName}/versions/${versionId}/dag`);
  }

  /**
   * Retrieves the graph visualization of a workflow version.
   *
   * @see wor-describe-workflow-versions-graph
   */
  async versionsGraphGet(workflowName: string, versionId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workflows/${workflowName}/versions/${versionId}/graph`);
  }
}

/**
 * Deploy and manage serverless JavaScript/WASM applications on Cloudflare's global network
 */
export class Workers extends APIResource {
  readonly beta: Beta;
  readonly routes: Routes;
  readonly assets: Assets;
  readonly scripts: Scripts;
  readonly accountsettings: AccountSettings;
  readonly domains: Domains;
  readonly subdomains: Subdomains;
  readonly registries: Registries;
  readonly crawler: Crawler;
  readonly publisher: Publisher;
  readonly zonescanbeenabled: ZonesCanBeEnabled;
  readonly dispatch: Dispatch;
  readonly placement: Placement;
  readonly scriptsextra: ScriptsExtra;
  readonly services: Services;
  readonly configuration: Configuration;
  readonly observability: Observability;
  readonly workflows: Workflows;

  constructor(client: CloudflareClient) {
    super(client);
    this.beta = new Beta(client);
    this.routes = new Routes(client);
    this.assets = new Assets(client);
    this.scripts = new Scripts(client);
    this.accountsettings = new AccountSettings(client);
    this.domains = new Domains(client);
    this.subdomains = new Subdomains(client);
    this.registries = new Registries(client);
    this.crawler = new Crawler(client);
    this.publisher = new Publisher(client);
    this.zonescanbeenabled = new ZonesCanBeEnabled(client);
    this.dispatch = new Dispatch(client);
    this.placement = new Placement(client);
    this.scriptsextra = new ScriptsExtra(client);
    this.services = new Services(client);
    this.configuration = new Configuration(client);
    this.observability = new Observability(client);
    this.workflows = new Workflows(client);
  }

  /**
   * Lists all the container applications that are associated with your account.
   *
   * @see publicListApplications
   */
  async listExtra(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/containers`, {
      query: params,
    });
  }
}
