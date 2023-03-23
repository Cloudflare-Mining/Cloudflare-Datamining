import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

const ZoneRulesetRewriteRuleValue = eg.object({
  uri: eg.object({
    path: eg.object({
      value: eg.string.optional,
      expression: eg.string.optional
    }).optional,
    query: eg.object({
      value: eg.string.optional,
      expression: eg.string.optional
    }).optional
  })
});

const ZoneRulesetHeaderModificationRuleValue = eg.object({
  headers: eg.record(
    eg.string,
    eg.object({
      operation: eg.union([
        eg.literal('add'),
        eg.literal('set'),
        eg.literal('remove')
      ]),
      expression: eg.string.optional,
      value: eg.string.optional
    })
  )
});

const ZoneRulesetSanitizeRuleValue = eg.object({
  id: eg.string,
  overrides: eg.object({
    rules: eg.array(eg.object({ id: eg.string, enabled: eg.boolean }))
  })
});

const ZoneRulesetRewriteRule = eg.object({
  id: eg.string,
  version: eg.string,
  action: eg.literal('rewrite'),
  expression: eg.string,
  description: eg.string,
  last_updated: eg.string,
  action_parameters: eg.union([
    ZoneRulesetRewriteRuleValue,
    ZoneRulesetHeaderModificationRuleValue,
    ZoneRulesetSanitizeRuleValue
  ]),
  ref: eg.string.optional,
  enabled: eg.boolean
});

const Ruleset = eg.object({
  id: eg.string,
  name: eg.string,
  kind: eg.union([eg.literal('zone'), eg.literal('managed')]),
  version: eg.string,
  last_updated: eg.string,
  phase: eg.union([
    eg.literal('http_request_transform'),
    eg.literal('http_request_late_transform'),
    eg.literal('http_request_sanitize')
  ]),
  rules: eg.array(ZoneRulesetRewriteRule).optional
});

export type Ruleset = TypeFromCodec<typeof Ruleset>;
export type ZoneRulesetRewriteRule = TypeFromCodec<
  typeof ZoneRulesetRewriteRule
>;
export type ZoneRulesetRewriteRuleValue = TypeFromCodec<
  typeof ZoneRulesetRewriteRuleValue
>;

export type ZoneRulesetHeaderModificationRuleValue = TypeFromCodec<
  typeof ZoneRulesetHeaderModificationRuleValue
>;

export type ZoneRulesetSanitizeRuleValue = TypeFromCodec<
  typeof ZoneRulesetSanitizeRuleValue
>;

const RulesMigration = eg.object({
  firewall_rules_ui_enabled: eg.boolean,
  custom_rules_ui_enabled: eg.boolean,
  is_migrated: eg.boolean,
  migrated_date: eg.string.optional
});

export type RulesMigration = TypeFromCodec<typeof RulesMigration>;
