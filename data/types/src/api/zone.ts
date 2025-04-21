import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

import { Frequency } from './subscription';
import { PlanId } from './ratePlan';

export const ZoneMeta = eg.object({
  step: eg.number,
  wildcard_proxiable: eg.boolean.optional,
  custom_certificate_quota: eg.number,
  page_rule_quota: eg.number,
  phishing_detected: eg.boolean,
  multiple_railguns_allowed: eg.boolean.optional,
  secondary_overrides: eg.boolean,
  cdn_only: eg.boolean.optional,
  dns_only: eg.boolean.optional
});

export type ZoneMeta = TypeFromCodec<typeof ZoneMeta>;

export const ZoneOwner = eg.object({
  id: eg.string,
  type: eg.string,
  email: eg.string.optional
});
export type ZoneOwner = TypeFromCodec<typeof ZoneOwner>;

export const ZoneAccount = eg.object({
  id: eg.string,
  name: eg.string
});
export type ZoneAccount = TypeFromCodec<typeof ZoneAccount>;

export const ZoneType = eg.union([
  eg.literal('full'),
  eg.literal('partial'),
  eg.literal('secondary')
]);
export type ZoneType = TypeFromCodec<typeof ZoneType>;

export const ZonePlan = eg.object({
  id: eg.string,
  name: eg.string,
  price: eg.number,
  currency: eg.string,
  frequency: eg.union([Frequency, eg.literal('')]),
  is_subscribed: eg.boolean,
  can_subscribe: eg.boolean,
  legacy_id: PlanId,
  legacy_discount: eg.boolean,
  externally_managed: eg.boolean,
  annual: eg.object({
    price: eg.number,
    frequency: eg.union([Frequency, eg.literal('')])
  }).optional
});

export type ZonePlan = TypeFromCodec<typeof ZonePlan>;

export const TrialCancelWarning = eg.object({
  show: eg.boolean,
  product_name: eg.string.optional,
  show_again: eg.boolean
});

export type TrialCancelWarning = TypeFromCodec<typeof TrialCancelWarning>;

export const SelectedZonePlan = eg.object({
  id: eg.string,
  name: eg.string,
  price: eg.number,
  currency: eg.string,
  frequency: eg.union([Frequency, eg.literal('')]),
  is_subscribed: eg.boolean,
  can_subscribe: eg.boolean,
  legacy_id: PlanId,
  legacy_discount: eg.boolean,
  externally_managed: eg.boolean,
  annual: eg.object({
    price: eg.number,
    frequency: eg.union([Frequency, eg.literal('')])
  }).optional,
  isAnnualPlanSelected: eg.boolean.optional
});

export type SelectedZonePlan = TypeFromCodec<typeof SelectedZonePlan>;

export const ZoneUIConfig = eg.object({
  id: eg.string,
  value: eg.any
});

export type ZoneUIConfig = TypeFromCodec<typeof ZoneUIConfig>;

export const AbuseUrl = eg.object({
  id: eg.string,
  created_on: eg.string,
  type: eg.string,
  url: eg.string,
  status: eg.string
});

export type AbuseUrl = TypeFromCodec<typeof AbuseUrl>;

export const ZoneStatus = eg.union([
  eg.literal('active'),
  eg.literal('pending'),
  eg.literal('moved'),
  eg.literal('deactivated'),
  eg.literal('paused'),
  eg.literal('initializing'),
  eg.literal('plan_limits_exceeded'),
  eg.literal('abuse_violation'),
  eg.literal('development_mode')
]);

export type ZoneStatus = TypeFromCodec<typeof ZoneStatus>;

export const Zone = eg.object({
  id: eg.string,
  name: eg.string,
  versioning: eg.object({
    enabled: eg.boolean,
    isRoot: eg.boolean,
    version: eg.number,
    rootZoneId: eg.string
  }).optional,
  status: ZoneStatus,
  paused: eg.boolean,
  type: ZoneType.optional,
  development_mode: eg.number,
  name_servers: eg.array(eg.string).optional,
  original_name_servers: eg.union([eg.array(eg.string), eg.null]),
  original_registrar: eg.union([eg.string, eg.null]),
  original_dnshost: eg.union([eg.string, eg.null]),
  modified_on: eg.string,
  created_on: eg.string,
  activated_on: eg.union([eg.string, eg.null]),
  meta: ZoneMeta,
  owner: ZoneOwner,
  account: ZoneAccount,
  permissions: eg.array(eg.string),
  plan: ZonePlan,
  plan_pending: ZonePlan.optional,
  vanity_name_servers: eg.array(eg.string).optional,
  vanity_name_servers_ips: eg.union([
    eg.record(
      eg.string,
      eg.object({
        ipv4: eg.string,
        ipv6: eg.string
      })
    ),
    eg.null
  ]).optional,
  verification_key: eg.string.optional,
  host: eg.object({
    name: eg.string,
    website: eg.string
  }).optional,
  betas: eg.array(eg.string).optional,
  deactivation_reason: eg.union([
    eg.literal('abuse_violation'),
    eg.literal('plan_limits_exceeded')
  ]).optional, // Only appears when "status" is "deactivated"
  jump_start: eg.boolean.optional, // This is only for PATCH request. When jump_start is true, this means that scanning is initiated as soon as the zone is created and the records will be auto-committed to prod_cf
  cname_suffix: eg.string.optional
});

export type Zone = TypeFromCodec<typeof Zone>;

export const ZoneHold = eg.object({
  hold: eg.boolean,
  hold_after: eg.string,
  include_subdomains: eg.boolean
});

export type ZoneHold = TypeFromCodec<typeof ZoneHold>;
