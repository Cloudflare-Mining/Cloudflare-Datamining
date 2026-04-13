/**
 * pages resource
 * @generated from apis/pages/schema.ts
 *
 * Full-stack application hosting with Git-integrated builds, preview deployments, and custom domains
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Pages projects, deployments, build logs, and custom domain bindings
 */
export class Projects extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetch a list of all user projects.
   *
   * @see pages-project-get-projects
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/pages/projects`, {
      query: params,
    });
  }

  /**
   * Fetch a project by name.
   *
   * @see pages-project-get-project
   */
  async get(projectName: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/pages/projects/${projectName}`);
  }

  /**
   * Create a new project.
   *
   * @see pages-project-create-project
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/pages/projects`);
  }

  /**
   * Set new attributes for an existing project. Modify environment variables. To delete an environment variable, set the key to null.
   *
   * @see pages-project-update-project
   */
  async edit(projectName: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/pages/projects/${projectName}`);
  }

  /**
   * Delete a project by name.
   *
   * @see pages-project-delete-project
   */
  async delete(projectName: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/pages/projects/${projectName}`);
  }

  /**
   * Purge all cached build artifacts for a Pages project
   *
   * @see pages-purge-build-cache
   */
  async purgeBuildCache(projectName: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/pages/projects/${projectName}/purge_build_cache`);
  }

  /**
   * Fetch a list of project deployments.
   *
   * @see pages-deployment-get-deployments
   */
  async deploymentsList(projectName: string, accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/pages/projects/${projectName}/deployments`, {
      query: params,
    });
  }

  /**
   * Fetch information about a deployment.
   *
   * @see pages-deployment-get-deployment-info
   */
  async deploymentsGet(deploymentId: string, projectName: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/pages/projects/${projectName}/deployments/${deploymentId}`,
    );
  }

  /**
   * Start a new deployment from production. The repository and account must have already been authorized on the Cloudflare Pages dashboard.
   *
   * @see pages-deployment-create-deployment
   */
  async deploymentsCreate(projectName: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/pages/projects/${projectName}/deployments`);
  }

  /**
   * Delete a deployment.
   *
   * @see pages-deployment-delete-deployment
   */
  async deploymentsDelete(deploymentId: string, projectName: string, accountId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/pages/projects/${projectName}/deployments/${deploymentId}`,
    );
  }

  /**
   * Retry a previous deployment.
   *
   * @see pages-deployment-retry-deployment
   */
  async deploymentsRetry(deploymentId: string, projectName: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/pages/projects/${projectName}/deployments/${deploymentId}/retry`,
    );
  }

  /**
   * Rollback the production deployment to a previous deployment. You can only rollback to succesful builds on production.
   *
   * @see pages-deployment-rollback-deployment
   */
  async deploymentsRollback(deploymentId: string, projectName: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/pages/projects/${projectName}/deployments/${deploymentId}/rollback`,
    );
  }

  /**
   * Fetch deployment logs for a project.
   *
   * @see pages-deployment-get-deployment-logs
   */
  async deploymentsHistoryLogsGet(deploymentId: string, projectName: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/pages/projects/${projectName}/deployments/${deploymentId}/history/logs`,
    );
  }

  /**
   * Fetch a list of all domains associated with a Pages project.
   *
   * @see pages-domains-get-domains
   */
  async domainsList(projectName: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/pages/projects/${projectName}/domains`);
  }

  /**
   * Fetch a single domain.
   *
   * @see pages-domains-get-domain
   */
  async domainsGet(domainName: string, projectName: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/pages/projects/${projectName}/domains/${domainName}`);
  }

  /**
   * Add a new domain for the Pages project.
   *
   * @see pages-domains-add-domain
   */
  async domainsCreate(projectName: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/pages/projects/${projectName}/domains`);
  }

  /**
   * Retry the validation status of a single domain.
   *
   * @see pages-domains-patch-domain
   */
  async domainsEdit(domainName: string, projectName: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/pages/projects/${projectName}/domains/${domainName}`);
  }

  /**
   * Delete a Pages project's domain.
   *
   * @see pages-domains-delete-domain
   */
  async domainsDelete(domainName: string, projectName: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/pages/projects/${projectName}/domains/${domainName}`);
  }
}

/**
 * Full-stack application hosting with Git-integrated builds, preview deployments, and custom domains
 */
export class Pages extends APIResource {
  readonly projects: Projects;

  constructor(client: CloudflareClient) {
    super(client);
    this.projects = new Projects(client);
  }
}
