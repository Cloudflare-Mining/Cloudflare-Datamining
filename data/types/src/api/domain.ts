import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

export const RegistrationStatus = eg.union([
  eg.literal('registrationPendingAuthorization'),
  eg.literal('registrationPendingZoneCreate'),
  eg.literal('registrationPendingRegister'),
  eg.literal('registrationPendingZoneActivate'),
  eg.literal('registrationPendingSettlement'),
  eg.literal('registrationFailedAuthorization'),
  eg.literal('registrationFailedQuote'),
  eg.literal('registrationFailedRegister'),
  eg.literal('registrationFailedZoneCreate'),
  eg.literal('registrationFailedZoneActivate'),
  eg.literal('registrationFailedSettlement'),
  eg.literal('registrationActive'),
  eg.literal('expiredParked'),
  eg.literal('deletionInitiated'),
  eg.literal('deletionIrredeemable'),
  eg.literal('domainTerminated'),
  eg.literal('domainLocked')
]);

export type RegistrationStatus = TypeFromCodec<typeof RegistrationStatus>;

export const RegistrantContact = eg.object({
  address: eg.string,
  address2: eg.string,
  city: eg.string,
  country: eg.string,
  email: eg.string,
  fax: eg.string,
  first_name: eg.string,
  id: eg.string.optional,
  label: eg.union([eg.null, eg.string]).optional,
  last_name: eg.string,
  organization: eg.string,
  phone: eg.string,
  state: eg.string,
  zip: eg.string
});

export type RegistrantContact = TypeFromCodec<typeof RegistrantContact>;

const TransferConditions = eg.object({
  exists: eg.boolean,
  not_premium: eg.boolean,
  not_secure: eg.boolean,
  not_started: eg.boolean,
  not_waiting: eg.boolean,
  supported_tld: eg.boolean
});

export const RegistrantContacts = eg.object({
  registrant: RegistrantContact.optional,
  technical: RegistrantContact.optional,
  administrator: RegistrantContact.optional,
  billing: RegistrantContact.optional
});

export type RegistrantContacts = TypeFromCodec<typeof RegistrantContacts>;

export const RegistrationSettings = eg.object({
  auto_renew: eg.boolean,
  privacy: eg.boolean,
  contacts: RegistrantContacts.optional,
  years: eg.number
});

export type RegistrationSettings = TypeFromCodec<typeof RegistrationSettings>;

export const DomainFees = eg.object({
  icann_fee: eg.number,
  redemption_fee: eg.number,
  registration_fee: eg.number,
  renewal_fee: eg.number,
  transfer_fee: eg.number
});

export type DomainFees = TypeFromCodec<typeof DomainFees>;

export const Domain = eg.object({
  administrator_contact: eg.unknown.optional,
  auto_renew: eg.boolean.optional,
  available: eg.boolean,
  billing_contact: eg.unknown.optional,
  can_register: eg.boolean,
  cloudflare_dns: eg.boolean.optional,
  cloudflare_registration: eg.boolean.optional,
  contacts_updated_at: eg.string.optional,
  created_at: eg.string.optional,
  created_registrar: eg.string.optional,
  current_registrar: eg.string.optional,
  dns: eg.array(eg.any).optional,
  ds_records: eg.array(eg.any).optional,
  expires_at: eg.string.optional,
  fees: DomainFees,
  last_known_status: eg.union([RegistrationStatus, eg.null]).optional,
  locked: eg.boolean.optional,
  name: eg.string,
  name_servers: eg.array(eg.string).optional,
  partner_response: eg.union([eg.string, eg.null]).optional,
  payment_expires_at: eg.string.optional,
  pending_transfer: eg.boolean.optional,
  permissions: eg.array(eg.string),
  previous_registrar: eg.unknown.optional,
  privacy: eg.boolean.optional,
  registrant_contact: eg.union([RegistrantContact, eg.null]).optional,
  registry_object_id: eg.union([eg.string, eg.null]).optional,
  registry_statuses: eg.string.optional,
  supported_tld: eg.boolean.optional,
  technical_contact: eg.unknown.optional,
  transfer_conditions: TransferConditions.optional,
  updated_at: eg.union([eg.string, eg.null]).optional,
  updated_registrar: eg.string.optional,
  using_created_registrar_nameservers: eg.boolean.optional,
  using_current_registrar_nameservers: eg.boolean.optional,
  using_previous_registrar_nameservers: eg.boolean.optional,
  using_updated_registrar_nameservers: eg.boolean.optional,
  whois: eg.unknown.optional
});

export type Domain = TypeFromCodec<typeof Domain>;

export const DomainExists = eg.object({
  available: eg.boolean
});

export type DomainExists = TypeFromCodec<typeof DomainExists>;

export const DomainSearchResult = eg.object({
  check_result: eg.union([
    eg.null,
    eg.object({
      name: eg.string,
      supported_tld: eg.boolean,
      premium: eg.boolean,
      available: eg.boolean,
      can_register: eg.boolean
    })
  ]).optional,
  domains: eg.array(
    eg.object({
      name: eg.string,
      availability: eg.string,
      price: eg.number,
      icann_fee: eg.number
    })
  )
});

export type DomainSearchResult = TypeFromCodec<typeof DomainSearchResult>;

export const DomainEligibility = eg.object({
  name: eg.string,
  can_register: eg.union([eg.boolean, eg.null]),
  supported_tld: eg.union([eg.boolean, eg.null]),
  premium: eg.union([eg.boolean, eg.null]),
  available: eg.union([eg.boolean, eg.null])
});

export type DomainEligibility = TypeFromCodec<typeof DomainEligibility>;

// Domain Protection services

export enum ApproverStatus {
  PENDING = 'pending',
  VERIFIED = 'verified',
  REJECTED = 'rejected',
  PENDING_DELETE = 'pending_delete',
  DELETED = 'deleted'
}

export const DesignatedApprover = eg.object({
  email: eg.string,
  first_name: eg.string.optional,
  last_name: eg.string.optional,
  phone_number: eg.string.optional,
  status: eg.enum(ApproverStatus).optional
});

export type Approver = TypeFromCodec<typeof DesignatedApprover>;

export const DomainProtectionConfig = eg.object({
  auto_relock_after: eg.number,
  number_of_designated_approvers: eg.number
});

export type DomainProtectionConfig = TypeFromCodec<
  typeof DomainProtectionConfig
>;

export const DomainProtectionData = eg.intersection([
  DomainProtectionConfig,
  eg.object({ designated_approvers: eg.array(DesignatedApprover) })
]);

export type DomainProtectionData = TypeFromCodec<typeof DomainProtectionData>;

export const DomainProtectionPostResult = eg.object({
  status: eg.number,
  message: eg.string
});
