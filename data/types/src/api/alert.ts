import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';
// NotificationMechanism is specifies how a notification is delivered -
// via email, SMS, PagerDuty, etc
// type INotificationMechanism = 'email' | 'sms' | 'pagerduty';

export const AlertIntegration = eg.object({
  id: eg.string,
  name: eg.string,
  createdAt: eg.string
});

/**
 * A connection request to Pager Duty that is created before we attempt to link
 * PagerDuty to this account
 */
export type PagerDutyIntegrationRequest = TypeFromCodec<
  typeof PagerDutyIntegrationRequest
>;

const PagerDutyIntegrationRequest = eg.object({
  id: eg.string
});

export type AlertIntegration = TypeFromCodec<typeof AlertIntegration>;

const AlertWebhookType = eg.union([
  eg.literal('slack'),
  eg.literal('gchat'),
  eg.literal('discord'),
  eg.literal('generic'),
  eg.literal('splunk'),
  eg.literal('datadog'),
  eg.literal('opsgenie'),
  eg.literal('feishu')
]);

export type AlertWebhookType = TypeFromCodec<typeof AlertWebhookType>;

const AlertWebhookIntegration = eg.object({
  id: eg.string,
  name: eg.string,
  url: eg.string,
  createdAt: eg.string,
  secret: eg.string.optional,
  last_success: eg.string.optional,
  last_failure: eg.string.optional
});

export type AlertWebhookIntegration = TypeFromCodec<
  typeof AlertWebhookIntegration
>;

export type AlertUpsertWebhook = Omit<
  AlertWebhookIntegration,
  'createdAt' | 'last_success' | 'last_failure'
>;

export const AlertEligibleIntegrations = eg.record(
  eg.string,
  eg.object({
    eligible: eg.boolean,
    ready: eg.boolean,
    enabled: eg.boolean,
    type: eg.string
  })
);
export type AlertEligibleIntegrations = TypeFromCodec<
  typeof AlertEligibleIntegrations
>;

export const EmailParameters = eg.object({
  recipients: eg.array(eg.string)
});

export type EmailParameters = TypeFromCodec<typeof EmailParameters>;

// ConditionFilter is pretty much just a condition.
const ConditionFilter = eg.object({
  '>=': eg.array(eg.any)
});

type ConditionFilter = TypeFromCodec<typeof ConditionFilter>;

// Type AlertPolicy is the type that represents an alert policy
export const AlertPolicy = eg.object({
  id: eg.string.optional,
  name: eg.string,
  description: eg.string.optional,
  enabled: eg.boolean,
  emails: EmailParameters,
  pager_duty: eg.array(eg.string).optional,
  webhooks: eg.array(eg.string).optional,
  alert_type: eg.string,
  conditions: ConditionFilter.optional,
  filters: eg.record(eg.string, eg.union([eg.array(eg.string), eg.null]))
    .optional
});

export type AlertPolicy = TypeFromCodec<typeof AlertPolicy>;

export const AlertDeliveryMechanism = eg.object({
  id: eg.string,
  name: eg.string.optional
});

export type AlertDeliveryMechanism = TypeFromCodec<
  typeof AlertDeliveryMechanism
>;

const AlertMechanismMap = eg.record(
  eg.string,
  eg.array(AlertDeliveryMechanism)
);
type AlertMechanismMap = TypeFromCodec<typeof AlertMechanismMap>;

export const AlertPolicyAPIV2 = eg.object({
  id: eg.string.optional, // UUID, nullable for creating new API's
  name: eg.string,
  description: eg.string.optional,
  enabled: eg.boolean,
  conditions: ConditionFilter.optional,
  mechanisms: AlertMechanismMap,
  filters: eg.record(eg.string, eg.union([eg.array(eg.string), eg.null]))
    .optional,
  alert_type: eg.string
});

export type AlertPolicyAPIV2 = TypeFromCodec<typeof AlertPolicyAPIV2>;

export const AvailableAlert = eg.object({
  display_name: eg.string,
  type: eg.string,
  description: eg.string.optional
});
export type AvailableAlert = TypeFromCodec<typeof AvailableAlert>;

export const TestAlertRequest = eg.object({});
export type TestAlertRequest = TypeFromCodec<typeof TestAlertRequest>;
