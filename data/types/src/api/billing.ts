import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';
import {
  SubscriptionComponentName,
  SubscriptionSet,
  Frequency
} from './subscription';
import { PlanId } from './ratePlan';

export const PaymentGateway = eg.union([
  eg.literal('paypal'),
  eg.literal('stripe'),
  eg.literal('')
]);
export type PaymentGateway = TypeFromCodec<typeof PaymentGateway>;

export const DeviceDetails = eg.object({
  device_session_id: eg.string,
  fraud_merchant_id: eg.string,
  correlation_id: eg.string
});

export type DeviceDetails = TypeFromCodec<typeof DeviceDetails>;

export const BFResponse = eg.object({
  nonce: eg.string,
  deviceDetails: DeviceDetails,
  details: eg.object({
    firstName: eg.string,
    lastName: eg.string,
    email: eg.string
  })
});
export type BFResponse = TypeFromCodec<typeof BFResponse>;

export const PaymentMethodType = eg.union([
  eg.literal('PAYPAL'),
  eg.literal('CREDIT_CARD')
]);

export type PaymentMethodType = TypeFromCodec<typeof PaymentMethodType>;

export const PaymentMethod = eg.object({
  id: eg.string,
  type: PaymentMethodType.optional,
  last_four: eg.string,
  expiration_date: eg.string,
  first_name: eg.string.optional,
  last_name: eg.string.optional,
  address: eg.string.optional,
  address2: eg.string.optional,
  country: eg.string.optional,
  zipcode: eg.string.optional,
  state: eg.string.optional,
  city: eg.string.optional,
  payment_email: eg.string.optional,
  payment_gateway: PaymentGateway.optional,
  payment_nonce: BFResponse.props.nonce.optional,
  device_data: BFResponse.props.deviceDetails.optional,
  default: eg.boolean.optional,
  h_captcha_response: eg.string.optional,
  validation_code: eg.string.optional,
  captcha_challenge_jwt: eg.string.optional,
  tax_id_type: eg.string.optional
});

export type PaymentMethod = TypeFromCodec<typeof PaymentMethod>;

export const PaymentMethodList = eg.array(PaymentMethod);

export type PaymentMethodList = TypeFromCodec<typeof PaymentMethodList>;

export const BillingProfile = eg.object({
  id: eg.string,
  first_name: eg.string,
  last_name: eg.string,
  company: eg.string.optional,
  address: eg.string.optional,
  address2: eg.string.optional,
  billing_email: eg.string.optional,
  city: eg.string.optional,
  state: eg.string.optional,
  zipcode: eg.string,
  country: eg.string,
  enterprise_billing_email: eg.string.optional,
  enterprise_primary_email: eg.string.optional,
  card_expiry_month: eg.number.optional,
  card_expiry_year: eg.number.optional,
  card_number: eg.string.optional,
  vat: eg.string.optional,
  payment_email: eg.string.optional,
  payment_first_name: eg.string,
  payment_last_name: eg.string,
  payment_address: eg.string.optional,
  payment_address2: eg.string.optional,
  payment_country: eg.string,
  payment_zipcode: eg.string,
  payment_state: eg.string.optional,
  payment_city: eg.string.optional,
  payment_gateway: PaymentGateway,
  next_bill_date: eg.string.optional,
  use_legacy: eg.boolean.optional,
  is_partner: eg.boolean.optional,
  buying_rate_plan: eg.string.optional,
  profile_type: eg.union([
    eg.literal('payment_method'),
    eg.literal('billing'),
    eg.literal('invoice')
  ]).optional,
  validation_code: eg.string.optional,
  payment_nonce: BFResponse.props.nonce.optional,
  device_data: BFResponse.props.deviceDetails.optional,
  account_type: eg.string.optional,
  balance: eg.number.optional,
  h_captcha_response: eg.string.optional,
  captcha_challenge_jwt: eg.string.optional,
  default: eg.boolean.optional,
  type: PaymentMethodType.optional,
  tax_id_type: eg.string.optional
});

export type BillingProfile = TypeFromCodec<typeof BillingProfile>;

export const BillingAccountType = eg.union([
  eg.literal('partners_ent'),
  eg.literal('ad_hoc_contract'),
  eg.literal('employee'),
  eg.literal('election'),
  eg.literal('sfcc'),
  eg.literal('partners_basic'),
  eg.literal('startup'),
  eg.literal('intern'),
  eg.literal('ibm'),
  eg.literal('pay_go'),
  eg.literal('cloudflare_ent')
]);

export type BillingAccountType = TypeFromCodec<typeof BillingAccountType>;

export const BillingAccount = eg.object({
  account_type: BillingAccountType.optional,
  status: eg.string,
  flags: eg.object({
    async_tract: eg.boolean,
    banned: eg.boolean,
    pdf_invoices: eg.boolean,
    install_base_customer: eg.boolean,
    bad_debt: eg.boolean
  })
});

export type BillingAccount = TypeFromCodec<typeof BillingAccount>;

export const BillingTransaction = eg.object({
  id: eg.string,
  type: eg.string,
  action: eg.string,
  description: eg.string,
  occurred_at: eg.string,
  invoice_id: eg.string,
  receipt_id: eg.string,
  currency: eg.string,
  external_invoice_id: eg.string,
  amount: eg.number,
  amount_to_pay: eg.number,
  status: eg.union([
    eg.literal('OPEN'),
    eg.literal('CLOSED'),
    eg.literal('DRAFT'),
    eg.literal('PROCESSING'),
    eg.literal('CREDIT_FULLY_APPLIED'),
    eg.literal('CREDIT_OPEN')
  ]),
  source: eg.string
});

export type BillingTransaction = TypeFromCodec<typeof BillingTransaction>;

export const BillingPayment = eg.object({
  payment_applications: eg.array(
    eg.object({
      invoice_id: eg.string,
      amount: eg.number
    })
  ).optional,
  amount: eg.number.optional,
  payment_method_id: eg.union([eg.number, eg.string]).optional
});

export type BillingPayment = TypeFromCodec<typeof BillingPayment>;

export const BillingQuote = eg.object({
  id: eg.number,
  account_id: eg.number,
  coupon_code: eg.string,
  original_price: eg.number,
  discount: eg.number,
  price: eg.number,
  subscriptions: eg.array(
    eg.object({
      quantity: eg.number,
      unit_original_price: eg.number,
      unit_discount: eg.number,
      unit_price: eg.number,
      rate_plan: eg.object({
        id: eg.string
      }),
      component_values: eg.array(
        eg.object({
          name: eg.string,
          value: eg.number
        })
      )
    })
  ),
  created_date: eg.string
});

export type BillingQuote = TypeFromCodec<typeof BillingQuote>;

export const BillableUsageMetric = eg.union([
  eg.literal('streamMinutesViewed'),
  eg.literal('rateLimitingRequestsAllowed'),
  eg.literal('loadBalancingQueries'),
  eg.literal('argoAcceleratedBytes'),
  eg.literal('workersRequests'),
  eg.literal('workersKVReads'),
  eg.literal('imageResizingRequests'),
  eg.literal('spectrumBytesTransferred')
]);

export type BillableUsageMetric = TypeFromCodec<typeof BillableUsageMetric>;

export const BillableUsageTimeDelta = eg.union([
  eg.literal('minute'),
  eg.literal('hour'),
  eg.literal('day'),
  eg.literal('week'),
  eg.literal('month'),
  eg.literal('quarter'),
  eg.literal('year')
]);

export type BillableUsageTimeDelta = TypeFromCodec<
  typeof BillableUsageTimeDelta
>;

export const BillableUsage = eg.object({
  rows: eg.number,
  data: eg.union([
    eg.null,
    eg.array(eg.object({ metrics: eg.array(eg.array(eg.number)) }))
  ]).optional,
  data_lag: eg.number,
  min: eg.record(eg.string, eg.any),
  max: eg.record(eg.string, eg.any),
  totals: eg.record(eg.string, eg.any),
  query: eg.object({
    dimensions: eg.array(eg.number),
    metrics: eg.array(BillableUsageMetric).optional,
    since: eg.string,
    until: eg.string,
    time_delta: BillableUsageTimeDelta,
    limit: eg.number
  }),
  time_intervals: eg.array(eg.tuple([eg.string, eg.string])).optional
});

export type BillableUsage = TypeFromCodec<typeof BillableUsage>;

export const BillingAccountCredits = eg.object({
  total_account_credits: eg.number
});

export type BillingAccountCredits = TypeFromCodec<typeof BillingAccountCredits>;

export const PlanName = eg.union([
  eg.literal('CF_BIZ'),
  eg.literal('CF_BIZ_EMP'),
  eg.literal('CF_BIZ_FREE'),
  eg.literal('CF_BIZ_PLUS'),
  eg.literal('CF_ENT'),
  eg.literal('CF_FREE'),
  eg.literal('CF_PRO_20_20'),
  eg.literal('CF_PRO_20_5'),
  eg.literal('CF_PRO_FREE')
]);

export type PlanName = TypeFromCodec<typeof PlanName>;

export const BillingAddress = eg.object({
  address: eg.string.optional,
  address2: eg.string.optional,
  city: eg.string.optional,
  state: eg.string.optional,
  zipcode: eg.string,
  country: eg.string,
  validation_code: eg.string.optional,
  tax_id_type: eg.string.optional
});
export type BillingAddress = TypeFromCodec<typeof BillingAddress>;

export const AddressValidation = eg.object({
  validated_addresses: eg.array(BillingAddress)
});

export type AddressValidation = TypeFromCodec<typeof AddressValidation>;

export const BillingPlan = eg.object({
  id: PlanId,
  name: PlanName,
  currency: eg.literal('USD'),
  frequency: Frequency,
  components: eg.array(
    eg.object({
      name: SubscriptionComponentName,
      default: eg.number,
      unit_price: eg.number
    })
  ),
  sets: eg.array(SubscriptionSet),
  is_contract: eg.boolean
});

export type BillingPlan = TypeFromCodec<typeof BillingPlan>;
