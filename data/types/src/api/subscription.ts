import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';
import { RatePlanId } from './ratePlan';

export const SubscriptionZone = eg.object({
  id: eg.string,
  name: eg.string
});

export type SubscriptionZone = TypeFromCodec<typeof SubscriptionZone>;

export const Currency = eg.literal('USD');

export type Currency = TypeFromCodec<typeof Currency>;

export const Frequency = eg.union([
  eg.literal('monthly'),
  eg.literal('yearly'),
  eg.literal('one-time'),
  eg.literal('')
]);

export type Frequency = TypeFromCodec<typeof Frequency>;

// subscription.state. is a bug on backend (BILL-4697)
export const SubscriptionState = eg.union([
  eg.literal('Paid'),
  eg.literal('Unpaid'),
  eg.literal('subscription.state.')
]);
export type SubscriptionState = TypeFromCodec<typeof SubscriptionState>;

export const SubscriptionScope = eg.union([
  eg.literal('zone'),
  eg.literal('user')
]);
export type SubscriptionScope = TypeFromCodec<typeof SubscriptionScope>;

export const SubscriptionSet = eg.union([
  eg.literal('zone'),
  eg.literal('is_cloudflare'),
  eg.literal('public'),
  eg.literal('usage'),
  eg.literal('apps')
]);

export type SubscriptionSet = TypeFromCodec<typeof SubscriptionSet>;

export const SubscriptionComponentName = eg.union([
  eg.literal('access_users_allowed'),
  eg.literal('automatic_platform_optimization'),
  eg.literal('dedicated_certificates'),
  eg.literal('dedicated_certificates_custom'),
  eg.literal('image_resizing_requests'),
  eg.literal('load_balancing_base'),
  eg.literal('load_balancing_dns_queries'),
  eg.literal('load_balancing_geo_routing'),
  eg.literal('load_balancing_load_balancers'),
  eg.literal('load_balancing_monitor_interval'),
  eg.literal('load_balancing_origins'),
  eg.literal('load_balancing_pools'),
  eg.literal('load_balancing_probe_regions'),
  eg.literal('rate_limiting_requests'),
  eg.literal('stream_storage_thousand_minutes'),
  eg.literal('images_storage_per_hundred_thousand'),
  eg.literal('page_rules'),
  eg.literal('spectrum_bytes_transferred'),
  eg.literal('zones'),
  eg.literal('r2_class_a_operations'),
  eg.literal('r2_class_b_operations'),
  eg.literal('r2_storage')
]);

export type SubscriptionComponentName = TypeFromCodec<
  typeof SubscriptionComponentName
>;

export const SubscriptionProductName = eg.union([
  eg.literal('prod_cloudflare'),
  eg.literal('prod_registrar'), // prod_registrar is a legacy name
  eg.literal('registrar'),
  eg.literal('apps_welcome_bar'),
  eg.literal('prod_argo'),
  eg.literal('prod_dweb_ethereum'),
  eg.literal('prod_dweb_ipfs'),
  eg.literal('prod_rate_limiting'),
  eg.literal('prod_load_balancing'),
  eg.literal('prod_workers'),
  eg.literal('prod_stream'),
  eg.literal('prod_access'),
  eg.literal('advanced_certificate_manager'),
  eg.literal('prod_teams'),
  eg.literal('prod_secure_web_gateway'),
  eg.literal('waiting_rooms'),
  eg.literal('prod_image_resizing'),
  eg.literal('ssl_for_saas'),
  eg.literal('ssl_for_saas_basic'),
  eg.literal('prod_cache_reserve'),
  eg.literal('prod_r2'),
  eg.literal('prod_web3_ethereum'),
  eg.literal('prod_web3_ipfs')
]);

export type SubscriptionProductName = TypeFromCodec<
  typeof SubscriptionProductName
>;

export const SubscriptionProductPublicName = eg.union([
  eg.literal('Argo'),
  eg.literal('Load Balancing'),
  eg.literal('CloudFlare Services'),
  eg.literal('Rate Limiting'),
  eg.literal('Workers'),
  eg.literal('Access'),
  eg.literal('Stream'),
  eg.literal('Cloudflare Registrar'),
  eg.literal('Cloudflare Apps'),
  eg.literal('Advanced Certificate Manager'),
  eg.literal('Cloudflare for Teams'),
  eg.literal('Cloudflare Access for Teams'),
  eg.literal('SSL for SaaS'),
  eg.literal('Cloudflare Stream'),
  eg.literal('Cloudflare Images + Stream'),
  eg.literal('Image Resizing'),
  eg.literal('R2'),
  eg.literal('Cache Reserve'),
  eg.literal('web3 ETHEREUM'),
  eg.literal('web3 IPFS')
]);

export type SubscriptionProductPublicName = TypeFromCodec<
  typeof SubscriptionProductPublicName
>;

export const SubscriptionCancellationReason = eg.object({
  reason_code: eg.array(eg.string),
  other: eg.string.optional,
  jira: eg.string.optional
});

export type SubscriptionCancellationReason = TypeFromCodec<
  typeof SubscriptionCancellationReason
>;

export const SubscriptionProduct = eg.object({
  name: SubscriptionProductName,
  period: eg.string,
  billing: eg.string,
  public_name: SubscriptionProductPublicName,
  duration: eg.number
});

export type SubscriptionProduct = TypeFromCodec<typeof SubscriptionProduct>;

export const SubscriptionRatePlan = eg.object({
  id: RatePlanId,
  public_name: eg.string,
  currency: Currency,
  scope: SubscriptionScope,
  externally_managed: eg.boolean,
  is_contract: eg.boolean,
  sets: eg.array(SubscriptionSet)
});

export type SubscriptionRatePlan = TypeFromCodec<typeof SubscriptionRatePlan>;

export const SubscriptionComponentValue = eg.object({
  name: SubscriptionComponentName,
  value: eg.number,
  default: eg.number.optional,
  price: eg.number.optional
});

export type SubscriptionComponentValue = TypeFromCodec<
  typeof SubscriptionComponentValue
>;

export const Subscription = eg.object({
  app: eg.object({
    install_id: eg.union([eg.string, eg.null])
  }),
  id: eg.string,
  state: SubscriptionState,
  price: eg.number.optional,
  currency: Currency,
  entitled: eg.boolean.optional,
  component_values: eg.array(SubscriptionComponentValue),
  product: SubscriptionProduct,
  zone: SubscriptionZone.optional,
  frequency: Frequency,
  rate_plan: SubscriptionRatePlan,
  current_period_end: eg.string.optional,
  current_period_start: eg.string.optional,
  cancel_at_period_end: eg.boolean.optional,
  next_rate_plan: eg.object({
    app: eg.object({
      install_id: eg.union([eg.string, eg.null])
    }),
    id: eg.string,
    state: SubscriptionState,
    price: eg.number,
    currency: Currency,
    component_values: eg.array(SubscriptionComponentValue),
    product: SubscriptionProduct,
    zone: SubscriptionZone,
    frequency: Frequency,
    rate_plan: SubscriptionRatePlan,
    current_period_end: eg.string.optional,
    current_period_start: eg.string.optional
  }).optional,
  payment_method_id: eg.number.optional
});

export type Subscription = TypeFromCodec<typeof Subscription>;

export const SubscriptionSchedule = eg.object({
  id: eg.number,
  account_id: eg.number,
  subscription_id: eg.number, // the associated subscription_id
  current_phase_start_date: eg.string, // same current_period_start value as the current active phase
  current_phase_end_date: eg.string, // same current_period_ent value as the current active phase
  phases: eg.array(
    eg.object({
      rateplan: eg.object({ id: RatePlanId }),
      component_values: eg.array(eg.object({})),
      current_period_start: eg.string,
      current_period_end: eg.string
    })
  )
});

export const BulkSubscription = eg.object({
  coupon_code: eg.string.optional,
  subscriptions: eg.array(Subscription)
});

export type BulkSubscription = TypeFromCodec<typeof BulkSubscription>;
