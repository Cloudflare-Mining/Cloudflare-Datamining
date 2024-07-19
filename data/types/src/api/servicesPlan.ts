import type { RatePlanId } from './ratePlan';
import type { Subscription } from './subscription';

/**
 * Each zone in Cloudflare has an application services plan ("the Cloudflare
 * zone plan").
 *
 * The Cloudflare zone plan has a `subscription` whose `product` has the
 * following properties:
 * ```
 *   "product": {
 *     "name": "prod_cloudflare",
 *     "public_name": "CloudFlare Services"
 *   }
 * ```
 *
 * The Cloudflare zone plan is offered at six (increasing) levels of service.
 *   - Free
 *   - Lite
 *   - Pro
 *   - Pro Plus
 *   - Business
 *   - Enterprise
 *
 * This file exports an enum for each service level grouping together all the
 * ids for the same level of service. Each id in the enum is either
 * `typeof PlanId` or (lowercase) `typeof CfPlanId`.
 */

/**
 * Enum includes the Cloudflare zone plan ids for the "Free" service tier.
 *
 * Each entry is `typeof PlanId` or (lowercase) `typeof CfPlanId`.
 */
enum FREE {
  cf_free = 'cf_free',
  free = 'free',
  partners_free = 'partners_free'
}

/**
 * Enum includes the Cloudflare zone plan ids for the "Lite" service tier.
 *
 * Each entry is `typeof PlanId` or (lowercase) `typeof CfPlanId`.
 */
enum LITE {
  cf_lite = 'cf_lite',
  lite = 'lite'
}

/**
 * Enum includes the Cloudflare zone plan ids for the "Pro" service tier.
 *
 * Each entry is `typeof PlanId` or (lowercase) `typeof CfPlanId`.
 */
enum PRO {
  cf_pro_20_20 = 'cf_pro_20_20',
  cf_pro_20_5 = 'cf_pro_20_5',
  cf_pro_free = 'cf_pro_free',
  partners_pro = 'partners_pro',
  pro = 'pro'
}

/**
 * Enum includes the Cloudflare zone plan ids for the "Pro Plus" service tier.
 *
 * Each entry is `typeof PlanId` or (lowercase) `typeof CfPlanId`.
 */
enum PRO_PLUS {
  cf_pro_plus = 'cf_pro_plus',
  pro_plus = 'pro_plus'
}

/**
 * Enum includes the Cloudflare zone plan ids for the "Business" service tier.
 *
 * Each entry is `typeof PlanId` or (lowercase) `typeof CfPlanId`.
 */
enum BUSINESS {
  business = 'business',
  cf_biz = 'cf_biz',
  cf_biz_emp = 'cf_biz_emp',
  cf_biz_free = 'cf_biz_free',
  cf_biz_galileo = 'cf_biz_galileo',
  cf_biz_plus = 'cf_biz_plus',
  partners_biz = 'partners_biz'
}

/**
 * Enum includes the Cloudflare zone plan ids for the "Enterprise" service
 * tier.
 *
 * Each entry is `typeof PlanId` or (lowercase) `typeof CfPlanId`.
 */
enum ENTERPRISE {
  cf_ent = 'cf_ent',
  cf_ent_app_sec_adv = 'cf_ent_app_sec_adv',
  cf_ent_app_sec_core = 'cf_ent_app_sec_core',
  cf_ent_trial = 'cf_ent_trial',
  enterprise = 'enterprise',
  enterprise_trial = 'enterprise_trial',
  ibm_ent = 'ibm_ent',
  partners_ent = 'partners_ent',
  sfcc_ent = 'sfcc_ent'
}

type PlanIdOrSubscription = RatePlanId | Subscription | null | undefined;

export const ServicesPlan = {
  FREE,
  LITE,
  PRO,
  PRO_PLUS,
  BUSINESS,
  ENTERPRISE,
  /**
   * Returns true if the given Cloudflare zone plan id or subscription is for
   * the "Free" service tier.
   * @param plan a `Subscription` object, or `RatePlanId`
   */
  isFree: (plan: PlanIdOrSubscription) => isTier(plan, FREE),

  /**
   * Returns true if the given Cloudflare zone plan id or subscription is for
   * the "Lite" service tier.
   * @param plan a `Subscription` object, or `RatePlanId`
   */
  isLite: (plan: PlanIdOrSubscription) => isTier(plan, LITE),

  /**
   * Returns true if the given Cloudflare zone plan id or subscription is for
   * the "Pro" service tier.
   * @param plan a `Subscription` object, or `RatePlanId`
   */
  isPro: (plan: PlanIdOrSubscription) => isTier(plan, PRO),

  /**
   * Returns true if the given Cloudflare zone plan id or subscription is for
   * the "Pro Plus" service tier.
   * @param plan a `Subscription` object, or `RatePlanId`
   */
  isProPlus: (plan: PlanIdOrSubscription) => isTier(plan, PRO_PLUS),

  /**
   * Returns true if the given Cloudflare zone plan id or subscription is for
   * the "Business" service tier.
   * @param plan a `Subscription` object, or `RatePlanId`
   */
  isBusiness: (plan: PlanIdOrSubscription) => isTier(plan, BUSINESS),

  /**
   * Returns true if the given Cloudflare zone plan id or subscription is for
   * the "Enterprise" service tier.
   * @param plan a `Subscription` object, or `RatePlanId`
   */
  isEnterprise: (plan: PlanIdOrSubscription) => isTier(plan, ENTERPRISE)
};

/**
 * Generic helper returns true if the given Cloudflare zone plan id
 * or subscription belongs to the given tier of service.
 *
 * @param o a subscription object, or string plan id
 * @param tier an enum of zone plan ids for some level of service
 */
const isTier = <T extends object>(o: PlanIdOrSubscription, tier: T) => {
  const id = 'string' === typeof o ? o : o?.rate_plan?.id;
  return !id ? false : id.toLowerCase() in tier;
};
