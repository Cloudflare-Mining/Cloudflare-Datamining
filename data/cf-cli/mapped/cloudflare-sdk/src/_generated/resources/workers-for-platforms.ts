/**
 * workers-for-platforms resource
 * @generated from apis/workers-for-platforms/schema.ts
 *
 * Workers for Platforms lets you deploy customer Workers into isolated dispatch namespaces for SaaS and multi-tenant use cases
 */
import type { components } from 'cloudflare-openapi';
import { APIResource, CloudflareClient } from '../../client.js';

// Type aliases from OpenAPI components
export type NamespaceScriptAndVersionSettingsItem =
  components['schemas']['workers_namespace-script-and-version-settings-item'];

/**
 * Dispatch namespaces isolate customer Workers — manage namespaces, scripts, bindings, secrets, and tags
 */
export class Dispatch extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetch a list of Workers for Platforms namespaces.
   *
   * @see namespace-worker-list
   */
  async namespacesList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/dispatch/namespaces`);
  }

  /**
   * Get a Workers for Platforms namespace.
   *
   * @see namespace-worker-get-namespace
   */
  async namespacesGet(accountId: string, dispatchNamespace: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}`);
  }

  /**
   * Create a new Workers for Platforms namespace.
   *
   * @see namespace-worker-create
   */
  async namespacesCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/workers/dispatch/namespaces`);
  }

  /**
   * Delete a Workers for Platforms namespace.
   *
   * @see namespace-worker-delete-namespace
   */
  async namespacesDelete(accountId: string, dispatchNamespace: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}`);
  }

  /**
   * Fetch information about a script uploaded to a Workers for Platforms namespace.
   *
   * @see namespace-worker-script-worker-details
   */
  async namespacesScriptsGet(accountId: string, dispatchNamespace: string, scriptName: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}`,
    );
  }

  /**
   * Upload a worker module to a Workers for Platforms namespace. You can find more about the multipart metadata on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/.
   *
   * @see namespace-worker-script-upload-worker-module
   */
  async namespacesScriptsUpdate(
    accountId: string,
    dispatchNamespace: string,
    scriptName: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.put<unknown>(
      `/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}`,
      {
        body: { ...params },
      },
    );
  }

  /**
   * Delete a worker from a Workers for Platforms namespace. This call has no response body on a successful delete.
   *
   * @see namespace-worker-script-delete-worker
   */
  async namespacesScriptsDelete(
    accountId: string,
    dispatchNamespace: string,
    scriptName: string,
    params?: Record<string, unknown>,
  ): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}`,
      {
        query: params,
      },
    );
  }

  /**
   * Start uploading a collection of assets for use in a Worker version. To learn more about the direct uploads of assets, see https://developers.cloudflare.com/workers/static-assets/direct-upload/.
   *
   * @see namespace-worker-script-update-create-assets-upload-session
   */
  async namespacesScriptsAssetUploadCreate(
    accountId: string,
    dispatchNamespace: string,
    scriptName: string,
  ): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/assets-upload-session`,
    );
  }

  /**
   * Fetch script content from a script uploaded to a Workers for Platforms namespace.
   *
   * @see namespace-worker-get-script-content
   */
  async namespacesScriptsContentGet(
    accountId: string,
    dispatchNamespace: string,
    scriptName: string,
  ): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/content`,
    );
  }

  /**
   * Put script content for a script uploaded to a Workers for Platforms namespace.
   *
   * @see namespace-worker-put-script-content
   */
  async namespacesScriptsContentUpdate(
    accountId: string,
    dispatchNamespace: string,
    scriptName: string,
  ): Promise<unknown> {
    return this._client.put<unknown>(
      `/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/content`,
    );
  }

  /**
   * Get script settings from a script uploaded to a Workers for Platforms namespace.
   *
   * @see namespace-worker-get-script-settings
   */
  async namespacesScriptsSettingsGet(
    accountId: string,
    dispatchNamespace: string,
    scriptName: string,
  ): Promise<components['schemas']['workers_namespace-script-and-version-settings-item']> {
    return this._client.get<components['schemas']['workers_namespace-script-and-version-settings-item']>(
      `/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/settings`,
    );
  }

  /**
   * Patch script metadata, such as bindings.
   *
   * @see namespace-worker-patch-script-settings
   */
  async namespacesScriptsSettingsEdit(
    accountId: string,
    dispatchNamespace: string,
    scriptName: string,
  ): Promise<components['schemas']['workers_namespace-script-and-version-settings-item']> {
    return this._client.patch<components['schemas']['workers_namespace-script-and-version-settings-item']>(
      `/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/settings`,
    );
  }

  /**
   * Fetch script bindings from a script uploaded to a Workers for Platforms namespace.
   *
   * @see namespace-worker-get-script-bindings
   */
  async namespacesScriptsBindingsGet(
    accountId: string,
    dispatchNamespace: string,
    scriptName: string,
  ): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/bindings`,
    );
  }

  /**
   * List secrets bound to a script uploaded to a Workers for Platforms namespace.
   *
   * @see namespace-worker-list-script-secrets
   */
  async namespacesScriptsSecretsList(
    accountId: string,
    dispatchNamespace: string,
    scriptName: string,
  ): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/secrets`,
    );
  }

  /**
   * Get a given secret binding (value omitted) on a script uploaded to a Workers for Platforms namespace.
   *
   * @see namespace-worker-get-script-secrets
   */
  async namespacesScriptsSecretsGet(
    accountId: string,
    dispatchNamespace: string,
    scriptName: string,
    secretName: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/secrets/${secretName}`,
      {
        query: params,
      },
    );
  }

  /**
   * Add a secret to a script uploaded to a Workers for Platforms namespace.
   *
   * @see namespace-worker-put-script-secrets
   */
  async namespacesScriptsSecretsUpdate(
    accountId: string,
    dispatchNamespace: string,
    scriptName: string,
  ): Promise<unknown> {
    return this._client.put<unknown>(
      `/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/secrets`,
    );
  }

  /**
   * Remove a secret from a script uploaded to a Workers for Platforms namespace.
   *
   * @see namespace-worker-delete-script-secret
   */
  async namespacesScriptsSecretsDelete(
    accountId: string,
    dispatchNamespace: string,
    scriptName: string,
    secretName: string,
    params?: Record<string, unknown>,
  ): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/secrets/${secretName}`,
      {
        query: params,
      },
    );
  }

  /**
   * Fetch tags from a script uploaded to a Workers for Platforms namespace.
   *
   * @see namespace-worker-get-script-tags
   */
  async namespacesScriptsTagsList(accountId: string, dispatchNamespace: string, scriptName: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/tags`,
    );
  }

  /**
   * Put script tags for a script uploaded to a Workers for Platforms namespace.
   *
   * @see namespace-worker-put-script-tags
   */
  async namespacesScriptsTagsUpdate(
    accountId: string,
    dispatchNamespace: string,
    scriptName: string,
  ): Promise<unknown> {
    return this._client.put<unknown>(
      `/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/tags`,
    );
  }

  /**
   * Delete script tag for a script uploaded to a Workers for Platforms namespace.
   *
   * @see namespace-worker-delete-script-tag
   */
  async namespacesScriptsTagsDelete(
    accountId: string,
    dispatchNamespace: string,
    scriptName: string,
    tag: string,
  ): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/tags/${tag}`,
    );
  }
}

/**
 * Workers for Platforms lets you deploy customer Workers into isolated dispatch namespaces for SaaS and multi-tenant use cases
 */
export class WorkersForPlatforms extends APIResource {
  readonly dispatch: Dispatch;

  constructor(client: CloudflareClient) {
    super(client);
    this.dispatch = new Dispatch(client);
  }
}
