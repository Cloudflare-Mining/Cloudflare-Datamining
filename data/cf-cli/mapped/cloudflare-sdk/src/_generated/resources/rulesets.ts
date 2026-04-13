/**
 * rulesets resource
 * @generated from apis/rulesets/schema.ts
 *
 * Versioned collections of rules that control how Cloudflare processes traffic — WAF, transform, redirect, and more
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Execution phases that determine when rulesets run in the request lifecycle (e.g. http_request_firewall_custom)
 */
export class Phases extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches the latest version of the zone entry point ruleset for a given phase.
   *
   * @see getZoneEntrypointRuleset
   */
  async get(rulesetPhase: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/rulesets/phases/${rulesetPhase}/entrypoint`);
  }

  /**
   * Updates a zone entry point ruleset, creating a new version.
   *
   * @see updateZoneEntrypointRuleset
   */
  async update(rulesetPhase: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/rulesets/phases/${rulesetPhase}/entrypoint`);
  }

  /**
   * Fetches the versions of a zone entry point ruleset.
   *
   * @see listZoneEntrypointRulesetVersions
   */
  async versionsList(rulesetPhase: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/rulesets/phases/${rulesetPhase}/entrypoint/versions`);
  }

  /**
   * Fetches a specific version of a zone entry point ruleset.
   *
   * @see getZoneEntrypointRulesetVersion
   */
  async versionsGet(rulesetVersion: string, rulesetPhase: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/zones/${zoneId}/rulesets/phases/${rulesetPhase}/entrypoint/versions/${rulesetVersion}`,
    );
  }
}

/**
 * Individual rules within a ruleset — each with an expression, action, and priority
 */
export class Rules extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Adds a new rule to a zone ruleset. The rule will be added to the end of the existing list of rules in the ruleset by default.
   *
   * @see createZoneRulesetRule
   */
  async create(rulesetId: string, zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/rulesets/${rulesetId}/rules`);
  }

  /**
   * Updates an existing rule in a zone ruleset.
   *
   * @see updateZoneRulesetRule
   */
  async edit(ruleId: string, rulesetId: string, zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/rulesets/${rulesetId}/rules/${ruleId}`);
  }

  /**
   * Deletes an existing rule from a zone ruleset.
   *
   * @see deleteZoneRulesetRule
   */
  async delete(ruleId: string, rulesetId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/rulesets/${rulesetId}/rules/${ruleId}`);
  }
}

/**
 * Immutable snapshots of a ruleset, allowing rollback and audit of rule changes
 */
export class Versions extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches the versions of a zone ruleset.
   *
   * @see listZoneRulesetVersions
   */
  async list(rulesetId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/rulesets/${rulesetId}/versions`);
  }

  /**
   * Fetches a specific version of a zone ruleset.
   *
   * @see getZoneRulesetVersion
   */
  async get(rulesetVersion: string, rulesetId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/rulesets/${rulesetId}/versions/${rulesetVersion}`);
  }

  /**
   * Deletes an existing version of a zone ruleset.
   *
   * @see deleteZoneRulesetVersion
   */
  async delete(rulesetVersion: string, rulesetId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/rulesets/${rulesetId}/versions/${rulesetVersion}`);
  }
}

/**
 * Phases (additional) operations
 */
export class PhasesExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches the latest version of the account entry point ruleset for a given phase.
   *
   * @see getAccountEntrypointRuleset
   */
  async entrypointGet(rulesetPhase: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/rulesets/phases/${rulesetPhase}/entrypoint`);
  }

  /**
   * Updates an account entry point ruleset, creating a new version.
   *
   * @see updateAccountEntrypointRuleset
   */
  async entrypointUpdate(rulesetPhase: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/rulesets/phases/${rulesetPhase}/entrypoint`);
  }

  /**
   * Fetches the versions of an account entry point ruleset.
   *
   * @see listAccountEntrypointRulesetVersions
   */
  async entrypointVersionsList(rulesetPhase: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/rulesets/phases/${rulesetPhase}/entrypoint/versions`);
  }

  /**
   * Fetches a specific version of an account entry point ruleset.
   *
   * @see getAccountEntrypointRulesetVersion
   */
  async entrypointVersionsGet(rulesetVersion: string, rulesetPhase: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/rulesets/phases/${rulesetPhase}/entrypoint/versions/${rulesetVersion}`,
    );
  }
}

/**
 * Rules (additional) operations
 */
export class RulesExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Adds a new rule to an account ruleset. The rule will be added to the end of the existing list of rules in the ruleset by default.
   *
   * @see createAccountRulesetRule
   */
  async create(rulesetId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/rulesets/${rulesetId}/rules`);
  }

  /**
   * Deletes an existing rule from an account ruleset.
   *
   * @see deleteAccountRulesetRule
   */
  async delete(ruleId: string, rulesetId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/rulesets/${rulesetId}/rules/${ruleId}`);
  }

  /**
   * Updates an existing rule in an account ruleset.
   *
   * @see updateAccountRulesetRule
   */
  async update(ruleId: string, rulesetId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/rulesets/${rulesetId}/rules/${ruleId}`);
  }
}

/**
 * Versions (additional) operations
 */
export class VersionsExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches the versions of an account ruleset.
   *
   * @see listAccountRulesetVersions
   */
  async list(rulesetId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/rulesets/${rulesetId}/versions`);
  }

  /**
   * Deletes an existing version of an account ruleset.
   *
   * @see deleteAccountRulesetVersion
   */
  async delete(rulesetVersion: string, rulesetId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/rulesets/${rulesetId}/versions/${rulesetVersion}`);
  }

  /**
   * Fetches a specific version of an account ruleset.
   *
   * @see getAccountRulesetVersion
   */
  async get(rulesetVersion: string, rulesetId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/rulesets/${rulesetId}/versions/${rulesetVersion}`);
  }

  /**
   * Fetches the rules of a managed account ruleset version for a given tag.
   *
   * @see listAccountRulesetVersionRulesByTag
   */
  async byTagListByTag(
    ruleTag: string,
    rulesetVersion: string,
    rulesetId: string,
    accountId: string,
  ): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/rulesets/${rulesetId}/versions/${rulesetVersion}/by_tag/${ruleTag}`,
    );
  }

  /**
   * Fetches the rules of a managed zone ruleset version for a given tag.
   *
   * @see listZoneRulesetVersionRulesByTag
   */
  async byTagListV2(ruleTag: string, rulesetVersion: string, rulesetId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(
      `/zones/${zoneId}/rulesets/${rulesetId}/versions/${rulesetVersion}/by_tag/${ruleTag}`,
    );
  }
}

/**
 * Versioned collections of rules that control how Cloudflare processes traffic — WAF, transform, redirect, and more
 */
export class Rulesets extends APIResource {
  readonly phases: Phases;
  readonly rules: Rules;
  readonly versions: Versions;
  readonly phasesextra: PhasesExtra;
  readonly rulesextra: RulesExtra;
  readonly versionsextra: VersionsExtra;

  constructor(client: CloudflareClient) {
    super(client);
    this.phases = new Phases(client);
    this.rules = new Rules(client);
    this.versions = new Versions(client);
    this.phasesextra = new PhasesExtra(client);
    this.rulesextra = new RulesExtra(client);
    this.versionsextra = new VersionsExtra(client);
  }

  /**
   * Fetches all rulesets at the zone level.
   *
   * @see listZoneRulesets
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/rulesets`, {
      query: params,
    });
  }

  /**
   * Fetches the latest version of a zone ruleset.
   *
   * @see getZoneRuleset
   */
  async get(rulesetId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/rulesets/${rulesetId}`);
  }

  /**
   * Creates a ruleset at the zone level.
   *
   * @see createZoneRuleset
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/rulesets`);
  }

  /**
   * Updates a zone ruleset, creating a new version.
   *
   * @see updateZoneRuleset
   */
  async update(rulesetId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/rulesets/${rulesetId}`);
  }

  /**
   * Deletes all versions of an existing zone ruleset.
   *
   * @see deleteZoneRuleset
   */
  async delete(rulesetId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/rulesets/${rulesetId}`);
  }

  /**
   * Fetches all rulesets at the account level.
   *
   * @see listAccountRulesets
   */
  async listExtra(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/rulesets`, {
      query: params,
    });
  }

  /**
   * Creates a ruleset at the account level.
   *
   * @see createAccountRuleset
   */
  async createExtra(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/rulesets`);
  }

  /**
   * Deletes all versions of an existing account ruleset.
   *
   * @see deleteAccountRuleset
   */
  async deleteExtra(rulesetId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/rulesets/${rulesetId}`);
  }

  /**
   * Fetches the latest version of an account ruleset.
   *
   * @see getAccountRuleset
   */
  async getExtra(rulesetId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/rulesets/${rulesetId}`);
  }

  /**
   * Updates an account ruleset, creating a new version.
   *
   * @see updateAccountRuleset
   */
  async updateExtra(rulesetId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/rulesets/${rulesetId}`);
  }
}
