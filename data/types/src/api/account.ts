import { User } from './user';
import { Permissions } from './permissions';
import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';
import { MembershipsPolicy } from './policy';

export const AccountSettings = eg.object({
  access_approval_expiry: eg.union([eg.string, eg.null]),
  enforce_twofactor: eg.boolean,
  api_access_enabled: eg.boolean
});

export type AccountSettings = TypeFromCodec<typeof AccountSettings>;

export const AccountMeta = eg.object({
  has_pro_zones: eg.boolean,
  has_business_zones: eg.boolean,
  has_enterprise_zones: eg.boolean
});

export type AccountMeta = TypeFromCodec<typeof AccountMeta>;

export const AccountLegacyFlagStatus = eg.object({
  enabled: eg.boolean
});

export type AccountLegacyFlagStatus = TypeFromCodec<
  typeof AccountLegacyFlagStatus
>;

export const AccountLegacyFlagEnterpriseZoneQuota = eg.object({
  maximum: eg.number,
  current: eg.number,
  available: eg.number
});

export type AccountLegacyFlagEnterpriseZoneQuota = TypeFromCodec<
  typeof AccountLegacyFlagEnterpriseZoneQuota
>;

export const AccountLegacyFlags = eg.object({
  railgun: AccountLegacyFlagStatus,
  dns_firewall: AccountLegacyFlagStatus,
  china_network_visible: AccountLegacyFlagStatus,
  china_private_key_network_deployment: AccountLegacyFlagStatus,
  cname_signup: AccountLegacyFlagStatus,
  custom_pages: AccountLegacyFlagStatus,
  enterprise_zone_quota: AccountLegacyFlagEnterpriseZoneQuota
});

export type AccountLegacyFlags = TypeFromCodec<typeof AccountLegacyFlags>;

export const AccountQuotaValues = eg.object({
  remaining: eg.number,
  used: eg.number
});

export type AccountQuotaValues = TypeFromCodec<typeof AccountQuotaValues>;

export const AccountQuota = eg.object({
  bulk_pro: AccountQuotaValues.optional,
  bulk_biz: AccountQuotaValues.optional,
  bulk_ent: AccountQuotaValues.optional
});
export type AccountQuota = TypeFromCodec<typeof AccountQuota>;

export const AccountRole = eg.object({
  id: eg.string,
  name: eg.string,
  description: eg.string,
  permissions: Permissions
});

export type AccountRole = TypeFromCodec<typeof AccountRole>;

export const AccountMemberResourceGroup = eg.object({
  id: eg.string,
  name: eg.string.optional,
  metadata: eg.object({
    editable: eg.boolean
  })
});

export type AccountMemberResourceGroup = TypeFromCodec<
  typeof AccountMemberResourceGroup
>;

export const AccountMemberPermissionGroup = eg.object({
  id: eg.string,
  name: eg.string.optional
});

export type AccountMemberPermissionGroup = TypeFromCodec<
  typeof AccountMemberPermissionGroup
>;

export const AccountMemberPolicy = eg.array(
  eg.object({
    id: eg.string.optional,
    access: eg.string,
    permission_groups: eg.array(AccountMemberPermissionGroup),
    resource_groups: eg.array(AccountMemberResourceGroup)
  })
);

export type AccountMemberPolicy = TypeFromCodec<typeof AccountMemberPolicy>;

export const AccountMember = eg.object({
  id: eg.string,
  user: eg.pick(User, [
    'id',
    'first_name',
    'last_name',
    'email',
    'two_factor_authentication_enabled'
  ]),
  status: eg.union([
    eg.literal('accepted'),
    eg.literal('pending'),
    eg.literal('rejected')
  ]),
  api_access_enabled: eg.union([eg.boolean, eg.null]).optional,
  roles: eg.array(AccountRole),
  policies: eg.array(MembershipsPolicy).optional
});

export type AccountMember = TypeFromCodec<typeof AccountMember>;

export const WebhookEvent = eg.object({
  'ssl.certificate.deletion.failed': eg.boolean,
  'ssl.certificate.deletion.succeeded': eg.boolean,
  'ssl.certificate.deployment.failed': eg.boolean,
  'ssl.certificate.deployment.succeeded': eg.boolean,
  'ssl.certificate.renewal.failed': eg.boolean,
  'ssl.certificate.renewal.succeeded': eg.boolean,
  'ssl.certificate.renewal.upcoming_certificate_expiration_notification':
    eg.boolean,
  'ssl.certificate.validation.failed': eg.boolean,
  'ssl.certificate.validation.succeeded': eg.boolean,
  'ssl.custom_hostname_certificate.validation.failed': eg.boolean,
  'ssl.custom_hostname_certificate.validation.succeeded': eg.boolean,
  'ssl.dedicated_certificate.issuance.failed': eg.boolean,
  'ssl.dedicated_certificate.issuance.succeeded': eg.boolean
});

export type WebhookEvent = TypeFromCodec<typeof WebhookEvent>;

// Triggers incomplete
export const AccountWebhook = eg.object({
  id: eg.string,
  category: eg.string,
  triggers: eg.any,
  url: eg.string,
  secret: eg.string,
  events: WebhookEvent
});

export type AccountWebhook = TypeFromCodec<typeof AccountWebhook>;

export const AccountInvite = eg.object({
  account_pubname: eg.string,
  user_email: eg.string
});

export type AccountInvite = TypeFromCodec<typeof AccountInvite>;

export const Account = eg.object({
  id: eg.string,
  name: eg.string,
  type: eg.string.optional,
  created_on: eg.string.optional,
  settings: AccountSettings,
  meta: AccountMeta,
  legacy_flags: AccountLegacyFlags
});
export type Account = TypeFromCodec<typeof Account>;

export const AccountLegoState = eg.union([
  eg.literal('pending'),
  eg.literal('completed'),
  eg.literal('signed'),
  eg.literal('')
]);
export type AccountLegoState = TypeFromCodec<typeof AccountLegoState>;

export const AccountSubscriptionType = eg.union([
  eg.literal('paygo'),
  eg.literal('contract'),
  eg.literal('')
]);
export type AccountSubscriptionType = TypeFromCodec<
  typeof AccountSubscriptionType
>;

export const AccountLegoProduct = eg.union([
  eg.literal('access'),
  eg.literal('rate_limiting'),
  eg.literal('load_balancing'),
  eg.literal('stream'),
  eg.literal('workers'),
  eg.literal('r2'),
  eg.literal('argo'),
  eg.literal('bot_management'),
  eg.literal('')
]);
export type AccountLegoProduct = TypeFromCodec<typeof AccountLegoProduct>;

export const AccountLegoContact = eg.object({
  first_name: eg.string,
  last_name: eg.string,
  email: eg.string,
  organization: eg.string.optional
});
export type AccountLegoContact = TypeFromCodec<typeof AccountLegoContact>;

export const AccountLegoContactAPI = eg.object({
  contact: AccountLegoContact
});
export type AccountLegoContactAPI = TypeFromCodec<typeof AccountLegoContactAPI>;

export const AccountLegoContract = eg.object({
  lego_state: AccountLegoState.optional,
  subscription_type: AccountSubscriptionType.optional
});
export type AccountLegoContract = TypeFromCodec<typeof AccountLegoContract>;

export const AccountFirewallRuleAction = eg.union([
  eg.literal('allow'),
  eg.literal('block'),
  eg.literal('challenge'),
  eg.literal('js_challenge'),
  eg.literal('log'),
  eg.literal('managed_challenge'),
  eg.literal('skip'),
  eg.literal('ddos_dynamic'),
  eg.literal('select_config')
]);

export const AccountFirewallSensitivityLevels = eg.union([
  eg.literal('default'),
  eg.literal('medium'),
  eg.literal('low'),
  eg.literal('eoff')
]);

export type AccountFirewallRuleAction = TypeFromCodec<
  typeof AccountFirewallRuleAction
>;

const baseRuleProperties = {
  id: eg.string,
  expression: eg.string.optional,
  description: eg.string.optional,
  version: eg.string.optional,
  enabled: eg.boolean.optional,
  last_updated: eg.string.optional,
  ref: eg.string.optional
};

export const AccountFirewallRule = eg.object({
  ...baseRuleProperties,
  action: AccountFirewallRuleAction,
  categories: eg.array(eg.string).optional,
  action_parameters: eg.object({
    ruleset: eg.string.optional
  }).optional,
  score_threshold: eg.number.optional,
  created: eg.string.optional
});

export type AccountFirewallRule = TypeFromCodec<typeof AccountFirewallRule>;

const CategoryOverride = eg.object({
  category: eg.string,
  action: AccountFirewallRuleAction.optional,
  enabled: eg.boolean.optional,
  sensitivity_level: AccountFirewallSensitivityLevels.optional
});

export type CategoryOverride = TypeFromCodec<typeof CategoryOverride>;

const RuleOverride = eg.object({
  id: eg.string,
  action: AccountFirewallRuleAction.optional,
  enabled: eg.boolean.optional,
  sensitivity_level: AccountFirewallSensitivityLevels.optional
});

export type RuleOverride = TypeFromCodec<typeof RuleOverride>;

export const AccountFirewallRuleOverride = eg.object({
  ...baseRuleProperties,
  action: eg.literal('execute'),
  action_parameters: eg.object({
    id: eg.string,
    version: eg.string.optional,
    matched_data: eg.object({ public_key: eg.union([eg.string, eg.null]) })
      .optional,
    overrides: eg.object({
      action: AccountFirewallRuleAction.optional,
      enabled: eg.boolean.optional,
      categories: eg.array(CategoryOverride).optional,
      rules: eg.array(RuleOverride).optional,
      sensitivity_level: AccountFirewallSensitivityLevels.optional
    }).optional,
    increment: eg.number.optional
  })
});

export type AccountFirewallRuleOverride = TypeFromCodec<
  typeof AccountFirewallRuleOverride
>;

// Bypass rules/rulesets with skip action: https://wiki.cfops.it/x/bodSF
const AccountFirewallRuleSkipOverride = eg.object({
  ...baseRuleProperties,
  action: eg.literal('skip'),
  action_parameters: eg.object({
    rulesets: eg.array(eg.string).optional,
    ruleset: eg.literal('current').optional,
    rules: eg.record(eg.string, eg.array(eg.string)).optional
  }),
  logging: eg.object({
    enabled: eg.boolean
  }).optional
});

export const AccountFirewallRuleHTTPApplication = eg.object({
  ...baseRuleProperties,
  action: eg.literal('select_config'),
  action_parameters: eg.object({
    http_application: eg.string,
    version: eg.string
  })
});

export type AccountFirewallRuleHTTPApplication = TypeFromCodec<
  typeof AccountFirewallRuleHTTPApplication
>;

export type AccountFirewallRuleSkipOverride = TypeFromCodec<
  typeof AccountFirewallRuleSkipOverride
>;

export const AccountFirewallRulesetKind = eg.union([
  eg.literal('root'),
  eg.literal('managed'),
  eg.literal('custom')
]);

export const AccountFirewallRuleset = eg.object({
  id: eg.string,
  name: eg.string,
  description: eg.string,
  kind: AccountFirewallRulesetKind,
  version: eg.string,
  last_updated: eg.string,
  rules: eg.array(AccountFirewallRule).optional,
  phase: eg.string.optional
});

export type AccountFirewallRuleset = TypeFromCodec<
  typeof AccountFirewallRuleset
>;

export const AccountFirewallRulesetOverride = eg.object({
  id: eg.string,
  name: eg.string,
  description: eg.string,
  kind: AccountFirewallRulesetKind,
  phase: eg.string.optional,
  version: eg.string,
  last_updated: eg.string,
  rules: eg.array(
    eg.union([AccountFirewallRuleOverride, AccountFirewallRuleSkipOverride])
  ).optional
});

export type AccountFirewallRulesetOverride = TypeFromCodec<
  typeof AccountFirewallRulesetOverride
>;

export const AccountFirewallRulesetHTTPApplication = eg.object({
  id: eg.string,
  name: eg.string,
  description: eg.string,
  kind: AccountFirewallRulesetKind,
  phase: eg.string.optional,
  version: eg.string,
  last_updated: eg.string,
  rules: eg.array(AccountFirewallRuleHTTPApplication)
});

export type AccountFirewallRulesetHTTPApplication = TypeFromCodec<
  typeof AccountFirewallRulesetHTTPApplication
>;
