/**
 * vuln-scanner resource
 * @generated from apis/vuln-scanner/schema.ts
 *
 * Vulnerability scanning for web applications — manage scans, credential sets, and scan reports
 */
import type { components } from 'cloudflare-openapi';
import { APIResource, CloudflareClient } from '../../client.js';

// Type aliases from OpenAPI components
export type ScannerCredentialSet = components['schemas']['vuln_scanner_credential-set'];
export type ScannerTargetEnvironment = components['schemas']['vuln_scanner_target-environment'];

/**
 * Credential Sets operations
 */
export class CredentialSets extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns all credential sets for the account.
   *
   * @see list-credential-sets
   */
  async list(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['vuln_scanner_credential-set'][]> {
    return this._client.get<components['schemas']['vuln_scanner_credential-set'][]>(
      `/accounts/${accountId}/vuln_scanner/credential_sets`,
      {
        query: params,
      },
    );
  }

  /**
   * Creates a new credential set.
   *
   * @see create-credential-set
   */
  async create(accountId: string): Promise<components['schemas']['vuln_scanner_credential-set']> {
    return this._client.post<components['schemas']['vuln_scanner_credential-set']>(
      `/accounts/${accountId}/vuln_scanner/credential_sets`,
    );
  }

  /**
   * Deletes a credential set and all of its credentials.
   *
   * @see delete-credential-set
   */
  async delete(accountId: string, credentialSetId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/vuln_scanner/credential_sets/${credentialSetId}`);
  }

  /**
   * Returns a single credential set by ID.
   *
   * @see get-credential-set
   */
  async get(accountId: string, credentialSetId: string): Promise<components['schemas']['vuln_scanner_credential-set']> {
    return this._client.get<components['schemas']['vuln_scanner_credential-set']>(
      `/accounts/${accountId}/vuln_scanner/credential_sets/${credentialSetId}`,
    );
  }

  /**
   * Updates a credential set with only the provided fields; omitted fields remain unchanged.
   *
   * @see edit-credential-set
   */
  async edit(
    accountId: string,
    credentialSetId: string,
  ): Promise<components['schemas']['vuln_scanner_credential-set']> {
    return this._client.patch<components['schemas']['vuln_scanner_credential-set']>(
      `/accounts/${accountId}/vuln_scanner/credential_sets/${credentialSetId}`,
    );
  }

  /**
   * Replaces a credential set. All fields must be provided.
   *
   * @see update-credential-set
   */
  async update(
    accountId: string,
    credentialSetId: string,
  ): Promise<components['schemas']['vuln_scanner_credential-set']> {
    return this._client.put<components['schemas']['vuln_scanner_credential-set']>(
      `/accounts/${accountId}/vuln_scanner/credential_sets/${credentialSetId}`,
    );
  }

  /**
   * Returns all credentials within a credential set.
   *
   * @see list-credentials
   */
  async credentialsList(
    accountId: string,
    credentialSetId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/vuln_scanner/credential_sets/${credentialSetId}/credentials`,
      {
        query: params,
      },
    );
  }

  /**
   * Creates a new credential within a credential set.
   *
   * @see create-credential
   */
  async credentialsCreate(accountId: string, credentialSetId: string): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/vuln_scanner/credential_sets/${credentialSetId}/credentials`,
    );
  }

  /**
   * Deletes a credential.
   *
   * @see delete-credential
   */
  async credentialsDelete(accountId: string, credentialSetId: string, credentialId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/vuln_scanner/credential_sets/${credentialSetId}/credentials/${credentialId}`,
    );
  }

  /**
   * Returns a single credential by ID.
   *
   * @see get-credential
   */
  async credentialsGet(accountId: string, credentialSetId: string, credentialId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/vuln_scanner/credential_sets/${credentialSetId}/credentials/${credentialId}`,
    );
  }

  /**
   * Updates a credential with only the provided fields; omitted fields remain unchanged.
   *
   * @see edit-credential
   */
  async credentialsEdit(accountId: string, credentialSetId: string, credentialId: string): Promise<unknown> {
    return this._client.patch<unknown>(
      `/accounts/${accountId}/vuln_scanner/credential_sets/${credentialSetId}/credentials/${credentialId}`,
    );
  }

  /**
   * Replaces a credential. All fields must be provided.
   *
   * @see update-credential
   */
  async credentialsUpdate(accountId: string, credentialSetId: string, credentialId: string): Promise<unknown> {
    return this._client.put<unknown>(
      `/accounts/${accountId}/vuln_scanner/credential_sets/${credentialSetId}/credentials/${credentialId}`,
    );
  }
}

/**
 * Scans operations
 */
export class Scans extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns all scans for the account.
   *
   * @see list-scans
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/vuln_scanner/scans`, {
      query: params,
    });
  }

  /**
   * Creates and starts a new vulnerability scan. The response may include non-fatal warnings in the `messages` array.
   *
   * @see create-scan
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/vuln_scanner/scans`);
  }

  /**
   * Returns a single scan by ID.
   *
   * @see get-scan
   */
  async get(accountId: string, scanId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/vuln_scanner/scans/${scanId}`);
  }
}

/**
 * Target Environments operations
 */
export class TargetEnvironments extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns all target environments for the account.
   *
   * @see list-target-environments
   */
  async list(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['vuln_scanner_target-environment'][]> {
    return this._client.get<components['schemas']['vuln_scanner_target-environment'][]>(
      `/accounts/${accountId}/vuln_scanner/target_environments`,
      {
        query: params,
      },
    );
  }

  /**
   * Creates a new target environment for the account.
   *
   * @see create-target-environment
   */
  async create(accountId: string): Promise<components['schemas']['vuln_scanner_target-environment']> {
    return this._client.post<components['schemas']['vuln_scanner_target-environment']>(
      `/accounts/${accountId}/vuln_scanner/target_environments`,
    );
  }

  /**
   * Removes a target environment.
   *
   * @see delete-target-environment
   */
  async delete(accountId: string, targetEnvironmentId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/vuln_scanner/target_environments/${targetEnvironmentId}`);
  }

  /**
   * Returns a single target environment by ID.
   *
   * @see get-target-environment
   */
  async get(
    accountId: string,
    targetEnvironmentId: string,
  ): Promise<components['schemas']['vuln_scanner_target-environment']> {
    return this._client.get<components['schemas']['vuln_scanner_target-environment']>(
      `/accounts/${accountId}/vuln_scanner/target_environments/${targetEnvironmentId}`,
    );
  }

  /**
   * Updates a target environment with only the provided fields; omitted fields remain unchanged.
   *
   * @see edit-target-environment
   */
  async edit(
    accountId: string,
    targetEnvironmentId: string,
  ): Promise<components['schemas']['vuln_scanner_target-environment']> {
    return this._client.patch<components['schemas']['vuln_scanner_target-environment']>(
      `/accounts/${accountId}/vuln_scanner/target_environments/${targetEnvironmentId}`,
    );
  }

  /**
   * Replaces a target environment. All fields must be provided.
   *
   * @see update-target-environment
   */
  async update(
    accountId: string,
    targetEnvironmentId: string,
  ): Promise<components['schemas']['vuln_scanner_target-environment']> {
    return this._client.put<components['schemas']['vuln_scanner_target-environment']>(
      `/accounts/${accountId}/vuln_scanner/target_environments/${targetEnvironmentId}`,
    );
  }
}

/**
 * Vulnerability scanning for web applications — manage scans, credential sets, and scan reports
 */
export class VulnScanner extends APIResource {
  readonly credentialsets: CredentialSets;
  readonly scans: Scans;
  readonly targetenvironments: TargetEnvironments;

  constructor(client: CloudflareClient) {
    super(client);
    this.credentialsets = new CredentialSets(client);
    this.scans = new Scans(client);
    this.targetenvironments = new TargetEnvironments(client);
  }
}
