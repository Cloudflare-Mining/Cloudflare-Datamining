import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

export const PageRuleMinifyValue = eg.object({
  html: eg.union([eg.literal('on'), eg.literal('off')]).optional,
  css: eg.union([eg.literal('on'), eg.literal('off')]).optional,
  js: eg.union([eg.literal('on'), eg.literal('off')]).optional
});

export type PageRuleMinifyValue = TypeFromCodec<typeof PageRuleMinifyValue>;

export const PageRuleForwardingUrlValue = eg.object({
  status_code: eg.number,
  url: eg.string
});

export type PageRuleForwardingUrlValue = TypeFromCodec<
  typeof PageRuleForwardingUrlValue
>;

export type PageRuleTtlValue = number | 'no-cache' | 'no-store';

export type PageRuleCacheTtlByStatusValue = {
  [statusCode: string]: PageRuleTtlValue;
} | null;

const PageRuleCacheKeyFieldsValue = eg.object({
  query_string: eg.union([
    eg.object({
      include: eg.literal('*'),
      exclude: eg.emptyArray
    }),
    eg.object({
      include: eg.emptyArray,
      exclude: eg.literal('*')
    }),
    eg.object({
      include: eg.array(eg.string),
      exclude: eg.array(eg.string)
    })
  ]),
  header: eg.object({
    include: eg.array(eg.string),
    exclude: eg.array(eg.literal('origin')),
    check_presence: eg.array(eg.string)
  }),
  cookie: eg.object({
    include: eg.array(eg.string),
    check_presence: eg.array(eg.string)
  }),
  host: eg.object({
    resolved: eg.boolean
  }),
  user: eg.object({
    device_type: eg.boolean,
    geo: eg.boolean,
    lang: eg.boolean
  })
});

export type PageRuleCacheKeyFieldsValue = TypeFromCodec<
  typeof PageRuleCacheKeyFieldsValue
>;

export const PageRuleValue = eg.union([
  eg.literal('on'),
  eg.literal('off'),
  eg.string,
  eg.number,
  PageRuleMinifyValue,
  PageRuleForwardingUrlValue,
  PageRuleCacheKeyFieldsValue
]);

export type PageRuleValue =
  | TypeFromCodec<typeof PageRuleValue>
  | PageRuleCacheKeyFieldsValue
  | PageRuleCacheTtlByStatusValue;

export const PageRuleAction = eg.object({
  id: eg.string,
  value: PageRuleValue.optional
});

export type PageRuleAction = TypeFromCodec<typeof PageRuleAction>;

export const PageRulesConstraint = eg.object({
  operator: eg.literal('matches'),
  value: eg.string.optional
});

export type PageRulesConstraint = TypeFromCodec<typeof PageRulesConstraint>;

export const PageRuleTarget = eg.object({
  target: eg.literal('url'),
  constraint: PageRulesConstraint
});

export type PageRuleTarget = TypeFromCodec<typeof PageRuleTarget>;

export const PageRule = eg.object({
  id: eg.string,
  priority: eg.number,
  status: eg.union([eg.literal('active'), eg.literal('disabled')]),
  actions: eg.array(PageRuleAction),
  targets: eg.array(PageRuleTarget),
  created_on: eg.string.optional,
  modified_on: eg.string.optional
});

export type PageRule = TypeFromCodec<typeof PageRule>;

export const PageRulesSettingToggle = eg.object({
  name: eg.literal('value'),
  type: eg.literal('toggle')
});

export type PageRulesSettingToggle = TypeFromCodec<
  typeof PageRulesSettingToggle
>;

export const PageRulesSettingRange = eg.object({
  name: eg.literal('value'),
  type: eg.literal('range'),
  min: eg.number,
  max: eg.number,
  suggested_values: eg.array(eg.number)
});

export type PageRulesSettingRange = TypeFromCodec<typeof PageRulesSettingRange>;

export const PageRulesSettingSelect = eg.object({
  name: eg.literal('value'),
  type: eg.union([eg.literal('choice'), eg.literal('select')]),
  multiple: eg.boolean,
  allowEmpty: eg.boolean.optional,
  choices: eg.array(eg.string)
});

export type PageRulesSettingSelect = TypeFromCodec<
  typeof PageRulesSettingSelect
>;

export const PageRulesSettingString = eg.object({
  name: eg.literal('value'),
  type: eg.literal('string'),
  readonly: eg.boolean
});

export type PageRulesSettingString = TypeFromCodec<
  typeof PageRulesSettingString
>;

export const PageRulesSettingCheckboxes = eg.object({
  name: eg.literal('value'),
  type: eg.union([eg.literal('choice'), eg.literal('select')]),
  multiple: eg.boolean,
  allowEmpty: eg.boolean.optional,
  choices: eg.array(eg.string)
});

export type PageRulesSettingCheckboxes = TypeFromCodec<
  typeof PageRulesSettingCheckboxes
>;

export const PageRulesSettingStatusCode = eg.object({
  name: eg.literal('status_code'),
  type: eg.literal('choice'),
  multiple: eg.boolean,
  choices: eg.array(eg.number)
});

export type PageRulesSettingStatusCode = TypeFromCodec<
  typeof PageRulesSettingStatusCode
>;

export const PageRulesSettingForwardingUrl = eg.object({
  name: eg.literal('url'),
  type: eg.literal('forwardingUrl')
});

export type PageRulesSettingForwardingUrl = TypeFromCodec<
  typeof PageRulesSettingForwardingUrl
>;

export const PageRuleProperty = eg.union([
  PageRulesSettingToggle,
  PageRulesSettingRange,
  PageRulesSettingStatusCode,
  PageRulesSettingString,
  PageRulesSettingForwardingUrl,
  PageRulesSettingSelect,
  PageRulesSettingCheckboxes
]);

export type PageRuleProperty = TypeFromCodec<typeof PageRuleProperty>;

export const PageRulesSetting = eg.object({
  id: eg.string,
  properties: eg.array(PageRuleProperty),
  readonly: eg.boolean.optional
});

export type PageRulesSetting = TypeFromCodec<typeof PageRulesSetting>;

export const PageRulesQuota = eg.object({
  quota: eg.number
});

export type PageRulesQuota = TypeFromCodec<typeof PageRulesQuota>;
