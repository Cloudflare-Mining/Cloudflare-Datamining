/**
 * firewall resource
 * @generated from apis/firewall/schema.ts
 *
 * Legacy firewall rules, zone lockdowns, access rules, user-agent blocking, and WAF packages
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Zone lockdown rules that restrict access to URLs by IP address or range
 */
export class Lockdowns extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches Zone Lockdown rules. You can filter the results using several optional parameters.
   *
   * @see zone-lockdown-list-zone-lockdown-rules
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/firewall/lockdowns`, {
      query: params,
    });
  }

  /**
   * Fetches the details of a Zone Lockdown rule.
   *
   * @see zone-lockdown-get-a-zone-lockdown-rule
   */
  async get(lockDownsId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/firewall/lockdowns/${lockDownsId}`);
  }

  /**
   * Creates a new Zone Lockdown rule.
   *
   * @see zone-lockdown-create-a-zone-lockdown-rule
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/firewall/lockdowns`);
  }

  /**
   * Updates an existing Zone Lockdown rule.
   *
   * @see zone-lockdown-update-a-zone-lockdown-rule
   */
  async update(lockDownsId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/firewall/lockdowns/${lockDownsId}`);
  }

  /**
   * Deletes an existing Zone Lockdown rule.
   *
   * @see zone-lockdown-delete-a-zone-lockdown-rule
   */
  async delete(lockDownsId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/firewall/lockdowns/${lockDownsId}`);
  }
}

/**
 * Legacy firewall rules with filter expressions — prefer Rulesets for new configurations
 */
export class Rules extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches firewall rules in a zone. You can filter the results using several optional parameters.
   *
   * @see firewall-rules-list-firewall-rules
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/firewall/rules`, {
      query: params,
    });
  }

  /**
   * Fetches the details of a firewall rule.
   *
   * @see firewall-rules-get-a-firewall-rule
   */
  async get(ruleId: string, zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/firewall/rules/${ruleId}`, {
      query: params,
    });
  }

  /**
   * Create one or more firewall rules.
   *
   * @see firewall-rules-create-firewall-rules
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/firewall/rules`);
  }

  /**
   * Updates an existing firewall rule.
   *
   * @see firewall-rules-update-a-firewall-rule
   */
  async update(ruleId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/firewall/rules/${ruleId}`);
  }

  /**
   * Updates the priority of an existing firewall rule.
   *
   * @see firewall-rules-update-priority-of-a-firewall-rule
   */
  async edit(ruleId: string, zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/firewall/rules/${ruleId}`);
  }

  /**
   * Deletes an existing firewall rule.
   *
   * @see firewall-rules-delete-a-firewall-rule
   */
  async delete(ruleId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/firewall/rules/${ruleId}`);
  }

  /**
   * Updates one or more existing firewall rules.
   *
   * @see firewall-rules-update-firewall-rules
   */
  async bulkUpdate(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/firewall/rules`);
  }

  /**
   * Updates the priority of existing firewall rules.
   *
   * @see firewall-rules-update-priority-of-firewall-rules
   */
  async bulkEdit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/firewall/rules`);
  }

  /**
   * Deletes existing firewall rules.
   *
   * @see firewall-rules-delete-firewall-rules
   */
  async bulkDelete(zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/firewall/rules`);
  }
}

/**
 * IP-based access rules that allow, block, challenge, or whitelist traffic globally or per-zone
 */
export class AccessRules extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches IP Access rules of an account. These rules apply to all the zones in the account. You can filter the results using several optional parameters.
   *
   * @see ip-access-rules-for-an-account-list-ip-access-rules
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/firewall/access_rules/rules`, {
      query: params,
    });
  }

  /**
   * Fetches the details of an IP Access rule defined at the account level.
   *
   * @see ip-access-rules-for-an-account-get-an-ip-access-rule
   */
  async get(ruleId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/firewall/access_rules/rules/${ruleId}`);
  }

  /**
   * Creates a new IP Access rule for an account. The rule will apply to all zones in the account. Note: To create an IP Access rule that applies to a single zone, refer to the [IP Access rules for a zone](#ip-access-rules-for-a-zone) endpoints.
   *
   * @see ip-access-rules-for-an-account-create-an-ip-access-rule
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/firewall/access_rules/rules`);
  }

  /**
   * Updates an IP Access rule defined at the account level. Note: This operation will affect all zones in the account.
   *
   * @see ip-access-rules-for-an-account-update-an-ip-access-rule
   */
  async edit(ruleId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/firewall/access_rules/rules/${ruleId}`);
  }

  /**
   * Deletes an existing IP Access rule defined at the account level. Note: This operation will affect all zones in the account.
   *
   * @see ip-access-rules-for-an-account-delete-an-ip-access-rule
   */
  async delete(ruleId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/firewall/access_rules/rules/${ruleId}`);
  }
}

/**
 * Block or challenge requests based on the User-Agent header string
 */
export class UaRules extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches User Agent Blocking rules in a zone. You can filter the results using several optional parameters.
   *
   * @see user-agent-blocking-rules-list-user-agent-blocking-rules
   */
  async list(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/firewall/ua_rules`, {
      query: params,
    });
  }

  /**
   * Fetches the details of a User Agent Blocking rule.
   *
   * @see user-agent-blocking-rules-get-a-user-agent-blocking-rule
   */
  async get(uaRuleId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/firewall/ua_rules/${uaRuleId}`);
  }

  /**
   * Creates a new User Agent Blocking rule in a zone.
   *
   * @see user-agent-blocking-rules-create-a-user-agent-blocking-rule
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/firewall/ua_rules`);
  }

  /**
   * Updates an existing User Agent Blocking rule.
   *
   * @see user-agent-blocking-rules-update-a-user-agent-blocking-rule
   */
  async update(uaRuleId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/firewall/ua_rules/${uaRuleId}`);
  }

  /**
   * Deletes an existing User Agent Blocking rule.
   *
   * @see user-agent-blocking-rules-delete-a-user-agent-blocking-rule
   */
  async delete(uaRuleId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/firewall/ua_rules/${uaRuleId}`);
  }
}

/**
 * Legacy WAF managed rule packages, rule groups, individual rules, and override configurations
 */
export class Waf extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches the URI-based WAF overrides in a zone. **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   *
   * @see waf-overrides-list-waf-overrides
   */
  async overridesList(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/firewall/waf/overrides`, {
      query: params,
    });
  }

  /**
   * Fetches the details of a URI-based WAF override. **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   *
   * @see waf-overrides-get-a-waf-override
   */
  async overridesGet(overridesId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/firewall/waf/overrides/${overridesId}`);
  }

  /**
   * Creates a URI-based WAF override for a zone. **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   *
   * @see waf-overrides-create-a-waf-override
   */
  async overridesCreate(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/firewall/waf/overrides`);
  }

  /**
   * Updates an existing URI-based WAF override. **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   *
   * @see waf-overrides-update-waf-override
   */
  async overridesUpdate(overridesId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/firewall/waf/overrides/${overridesId}`);
  }

  /**
   * Deletes an existing URI-based WAF override. **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   *
   * @see waf-overrides-delete-a-waf-override
   */
  async overridesDelete(overridesId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/firewall/waf/overrides/${overridesId}`);
  }

  /**
   * Fetches WAF packages for a zone. **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   *
   * @see waf-packages-list-waf-packages
   */
  async packagesList(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/firewall/waf/packages`, {
      query: params,
    });
  }

  /**
   * Fetches the details of a WAF package. **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   *
   * @see waf-packages-get-a-waf-package
   */
  async packagesGet(packageId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/firewall/waf/packages/${packageId}`);
  }

  /**
   * Fetches the WAF rule groups in a WAF package. **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   *
   * @see waf-rule-groups-list-waf-rule-groups
   */
  async packagesGroupsList(packageId: string, zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/firewall/waf/packages/${packageId}/groups`, {
      query: params,
    });
  }

  /**
   * Fetches the details of a WAF rule group. **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   *
   * @see waf-rule-groups-get-a-waf-rule-group
   */
  async packagesGroupsGet(groupId: string, packageId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/firewall/waf/packages/${packageId}/groups/${groupId}`);
  }

  /**
   * Updates a WAF rule group. You can update the state (`mode` parameter) of a rule group. **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   *
   * @see waf-rule-groups-update-a-waf-rule-group
   */
  async packagesGroupsEdit(groupId: string, packageId: string, zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/firewall/waf/packages/${packageId}/groups/${groupId}`);
  }

  /**
   * Fetches WAF rules in a WAF package. **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   *
   * @see waf-rules-list-waf-rules
   */
  async packagesRulesList(packageId: string, zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/firewall/waf/packages/${packageId}/rules`, {
      query: params,
    });
  }

  /**
   * Fetches the details of a WAF rule in a WAF package. **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   *
   * @see waf-rules-get-a-waf-rule
   */
  async packagesRulesGet(ruleId: string, packageId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/firewall/waf/packages/${packageId}/rules/${ruleId}`);
  }

  /**
   * Updates a WAF rule. You can only update the mode/action of the rule. **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   *
   * @see waf-rules-update-a-waf-rule
   */
  async packagesRulesEdit(ruleId: string, packageId: string, zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/firewall/waf/packages/${packageId}/rules/${ruleId}`);
  }
}

/**
 * Access Rules (additional) operations
 */
export class AccessRulesExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches IP Access rules of a zone. You can filter the results using several optional parameters.
   *
   * @see ip-access-rules-for-a-zone-list-ip-access-rules
   */
  async rulesList(zoneId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/firewall/access_rules/rules`, {
      query: params,
    });
  }

  /**
   * Creates a new IP Access rule for a zone. Note: To create an IP Access rule that applies to multiple zones, refer to [IP Access rules for a user](#ip-access-rules-for-a-user) or [IP Access rules for an account](#ip-access-rules-for-an-account) as appropriate.
   *
   * @see ip-access-rules-for-a-zone-create-an-ip-access-rule
   */
  async rulesCreate(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/firewall/access_rules/rules`);
  }

  /**
   * Deletes an IP Access rule defined at the zone level. Optionally, you can use the `cascade` property to specify that you wish to delete similar rules in other zones managed by the same zone owner.
   *
   * @see ip-access-rules-for-a-zone-delete-an-ip-access-rule
   */
  async rulesDelete(zoneId: string, ruleId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/firewall/access_rules/rules/${ruleId}`);
  }

  /**
   * Updates an IP Access rule defined at the zone level. You can only update the rule action (`mode` parameter) and notes.
   *
   * @see ip-access-rules-for-a-zone-update-an-ip-access-rule
   */
  async rulesEdit(zoneId: string, ruleId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/firewall/access_rules/rules/${ruleId}`);
  }
}

/**
 * Waf (additional) operations
 */
export class WafExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Updates a WAF package. You can update the sensitivity and the action of an anomaly detection WAF package. **Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   *
   * @see waf-packages-update-a-waf-package
   */
  async packagesEdit(packageId: string, zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/firewall/waf/packages/${packageId}`);
  }
}

/**
 * Legacy firewall rules, zone lockdowns, access rules, user-agent blocking, and WAF packages
 */
export class Firewall extends APIResource {
  readonly lockdowns: Lockdowns;
  readonly rules: Rules;
  readonly accessrules: AccessRules;
  readonly uarules: UaRules;
  readonly waf: Waf;
  readonly accessrulesextra: AccessRulesExtra;
  readonly wafextra: WafExtra;

  constructor(client: CloudflareClient) {
    super(client);
    this.lockdowns = new Lockdowns(client);
    this.rules = new Rules(client);
    this.accessrules = new AccessRules(client);
    this.uarules = new UaRules(client);
    this.waf = new Waf(client);
    this.accessrulesextra = new AccessRulesExtra(client);
    this.wafextra = new WafExtra(client);
  }
}
