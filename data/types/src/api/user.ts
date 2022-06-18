import { Organization } from './organization';
import { SupportedLocales } from '@cloudflare/intl-types';
import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

export const User = eg.object({
  id: eg.string,
  betas: eg.array(eg.string).optional,
  email: eg.string,
  username: eg.string,
  first_name: eg.union([eg.string, eg.null]),
  last_name: eg.union([eg.string, eg.null]),
  telephone: eg.union([eg.string, eg.null]),
  country: eg.union([eg.string, eg.null]),
  zipcode: eg.union([eg.string, eg.null]),
  has_completed_2fa_recovery_setup: eg.boolean,
  two_factor_authentication_enabled: eg.boolean,
  two_factor_authentication_locked: eg.boolean,
  two_factor_recovery_codes: eg.array(eg.string).optional,
  created_on: eg.string,
  modified_on: eg.string,
  organizations: eg.array(Organization),
  has_pro_zones: eg.boolean,
  has_business_zones: eg.boolean,
  has_enterprise_zones: eg.boolean,
  email_verified: eg.boolean,
  suspended: eg.boolean,
  twofactor: eg.object({ type: eg.literal('email') }).optional,
  totp_configured: eg.boolean.optional,
  webauthn_configured: eg.boolean.optional,
  redirect_sso: eg.string.optional,
  redirect_oauth: eg.string.optional,
  primary_account_tag: eg.string.optional
});

export type User = TypeFromCodec<typeof User>;

export const UserDetails = eg.object({
  '2FA-RECOVERY': eg.string
});

export type UserDetails = TypeFromCodec<typeof UserDetails>;

export const Dpa = eg.object({
  created_on: eg.string,
  modified_on: eg.string,
  signed_on: eg.string,
  type: eg.union([eg.literal('standard'), eg.literal('standard_v2')]),
  user: eg.pick(User, ['id'])
});

export type Dpa = TypeFromCodec<typeof Dpa>;

export const Preference = eg.object({
  subscribed: eg.boolean,
  created_on: eg.string,
  updated_on: eg.string
});

export type Preference = TypeFromCodec<typeof Preference>;

export const UserCommunicationPreferences = eg.object({
  email: eg.object({
    verified: eg.boolean,
    hard_bounce: eg.boolean
  }),
  preferences: eg.object({
    analytics: Preference,
    apps: Preference,
    apps_communication: Preference,
    blog: Preference,
    cf_status: Preference,
    comm_ea: Preference,
    comm_news: Preference,
    comm_ssu: Preference,
    coms_optout_ssl_cert_expired_fallbacks_deployed: Preference,
    coms_optout_ssl_cert_expired_no_fallbacks: Preference,
    coms_optout_ssl_customcert_expiring_notification: Preference,
    coms_optout_ssl_dedicated_cert_expiring_cname_notification: Preference,
    coms_optout_ssl_dedicated_cert_expiring_dns_notification: Preference,
    education: Preference,
    events: Preference,
    feedback: Preference,
    marketing_communication: Preference,
    origin_status: Preference,
    product_news: Preference
  }),
  'language-locale': eg.enum(SupportedLocales),
  created_on: eg.string,
  updated_on: eg.string
});

export type UserCommunicationPreferences = TypeFromCodec<
  typeof UserCommunicationPreferences
>;
