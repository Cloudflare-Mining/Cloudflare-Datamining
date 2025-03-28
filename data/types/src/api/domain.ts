import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

export const RegistrationStatus = eg.union([
  eg.literal('registrationPending'),
  eg.literal('registrationPendingAuthorization'),
  eg.literal('registrationPendingZoneCreate'),
  eg.literal('registrationPendingRegister'),
  eg.literal('registrationPendingZoneActivate'),
  eg.literal('registrationPendingSettlement'),

  eg.literal('registrationFailed'),
  eg.literal('registrationFailedAuthorization'),
  eg.literal('registrationFailedQuote'),
  eg.literal('registrationFailedRegister'),
  eg.literal('registrationFailedZoneCreate'),
  eg.literal('registrationFailedZoneActivate'),
  eg.literal('registrationFailedSettlement'),
  eg.literal('registrationFailedDNSFatal'),
  eg.literal('registrationFailedDNSError'),
  eg.literal('registrationFailedDNSLandingCNameFatal'),
  eg.literal('registrationFailedDNSLandingCNameError'),

  eg.literal('restorationPending'),
  eg.literal('restorationPendingZoneCreate'),
  eg.literal('restorationPendingZoneActivate'),
  eg.literal('restorationFailedZoneCreate'),
  eg.literal('restorationFailedZoneActivate'),
  eg.literal('restorationSuccess'),
  eg.literal('restorationZoneCreateSuccess'),
  eg.literal('restorationZoneActivateSuccess'),
  eg.literal('restorationSuccessWithoutReport'),

  eg.literal('transferFOAPending'),
  eg.literal('transferPending'),
  eg.literal('transferRejected'),
  eg.literal('transferCancelled'),
  eg.literal('transferOutPending'),

  eg.literal('registrationActive'),
  eg.literal('expiredParked'),
  eg.literal('deletionInitiated'),
  eg.literal('deletionIrredeemable'),
  eg.literal('domainTerminated'),
  eg.literal('domainFrozen')
]);

export const LandingSettings = eg.object({
  eligible: eg.boolean,
  enabled: eg.boolean.optional
});

export type RegistrationStatus = TypeFromCodec<typeof RegistrationStatus>;

export const RegistrantContact = eg.object({
  address: eg.string,
  address2: eg.string,
  city: eg.string,
  country: eg.string,
  email: eg.string,
  email_verified: eg.boolean.optional,
  fax: eg.string,
  first_name: eg.string,
  id: eg.string.optional,
  label: eg.union([eg.null, eg.string]).optional,
  last_name: eg.string,
  material_changes: eg.array(eg.string).optional,
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

export enum DomainProtectionStatus {
  ONBOARDING_INITIATED = 'Onboarding Initiated',
  ONBOARDED = 'Onboarded',
  PENDING_REGISTRY_LOCK = 'Pending Registry Lock',
  PENDING_REGISTRY_UNLOCK = 'Pending Registry Unlock',
  REGISTRY_UNLOCKED = 'Registry Unlocked',
  LOCKED = 'Locked',
  FAILED_TO_LOCK = 'Failed To Lock',
  PENDING_UNLOCK_APPROVAL = 'Pending Unlock Approval',
  UNLOCKED = 'Unlocked',
  OFFBOARDED = 'Offboarded'
}

export const Domain = eg.object({
  administrator_contact_id: eg.union([eg.number, eg.null]).optional,
  auth_code: eg.string.optional,
  auto_renew: eg.boolean.optional,
  available: eg.boolean,
  billing_contact_id: eg.union([eg.number, eg.null]).optional,
  can_register: eg.boolean.optional,
  cloudflare_dns: eg.boolean.optional,
  cloudflare_registration: eg.boolean.optional,
  // contacts field type to be clarified pending API update
  contacts: eg.any.optional,
  contacts_updated_at: eg.string.optional,
  cor_locked: eg.boolean.optional,
  cor_locked_until: eg.union([eg.string, eg.null]).optional,
  cor_responses_pending: eg.number.optional,
  created_at: eg.string.optional,
  created_registrar: eg.string.optional,
  current_registrar: eg.string.optional,
  domain_protection_services: eg.object({
    status: eg.enum(DomainProtectionStatus).optional
  }).optional,
  dns: eg.array(eg.any).optional,
  ds_records: eg.array(eg.any).optional,
  email_verified: eg.boolean.optional,
  expires_at: eg.string.optional,
  fees: DomainFees.optional,
  landing: eg.union([LandingSettings, eg.boolean]).optional,
  last_known_status: eg.union([eg.string, eg.null]).optional,
  locked: eg.boolean.optional,
  name: eg.string,
  name_servers: eg.array(eg.string).optional,
  material_changes: eg.array(eg.string).optional,
  partner_response: eg.union([eg.string, eg.null]).optional,
  payment_expires_at: eg.string.optional,
  pending_transfer: eg.boolean.optional,
  permissions: eg.array(eg.string).optional,
  previous_registrar: eg.union([eg.string, eg.null]).optional,
  privacy: eg.boolean.optional,
  registered_at: eg.union([eg.string, eg.null]).optional,
  registrant_contact_id: eg.union([eg.number, eg.null]).optional,
  registry_object_id: eg.union([eg.string, eg.null]).optional,
  registry_statuses: eg.string.optional,
  supported_tld: eg.boolean.optional,
  tags: eg.array(eg.string).optional,
  technical_contact_id: eg.union([eg.number, eg.null]).optional,
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

export const GetDomainsResult = eg.object({
  result: eg.array(Domain),
  result_info: eg.object({
    count: eg.number,
    page: eg.number,
    per_page: eg.number,
    total_count: eg.number
  }),
  errors: eg.array(eg.string),
  messages: eg.array(eg.string),
  success: eg.boolean
});

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
      icann_fee: eg.number,
      pricing: eg.object({
        currency: eg.string,
        registration_fee: eg.number,
        renewal_fee: eg.number
      }),
      pricing_local: eg.object({
        currency: eg.string,
        registration_fee: eg.number,
        renewal_fee: eg.number
      })
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
  status: eg.enum(ApproverStatus),
  first_name: eg.union([eg.null, eg.string]).optional,
  last_name: eg.union([eg.null, eg.string]).optional,
  phone_number: eg.union([eg.null, eg.string]).optional
});

export type Approver = TypeFromCodec<typeof DesignatedApprover>;

export const DomainProtectionDesignatedApprovers = eg.object({
  designated_approvers: eg.array(DesignatedApprover)
});

export enum DomainProtectionConfigStatus {
  PENDING = 'pending',
  PENDING_UPDATE = 'pending_update',
  ENABLED = 'enabled',
  DISABLED = 'disabled'
}

export const DomainProtectionConfig = eg.object({
  auto_relock_after: eg.number,
  number_of_designated_approvers: eg.number,
  status: eg.enum(DomainProtectionConfigStatus)
});

export type DomainProtectionConfig = TypeFromCodec<
  typeof DomainProtectionConfig
>;

export const DomainProtectionData = eg.intersection([
  DomainProtectionConfig,
  DomainProtectionDesignatedApprovers
]);

export type DomainProtectionData = TypeFromCodec<typeof DomainProtectionData>;

export const DomainProtectionPostResult = eg.object({
  status: eg.number,
  message: eg.string
});

export enum ResendDomainProtectionEmailRequest {
  UNLOCK_APPROVAL = 'UnlockApprovalRequest',
  CONFIGURATION_UPDATE = 'ConfigurationUpdateRequest',
  APPROVER_EMAIL_VERIFICATION = 'DesignatedApproverVerificationRequest',
  APPROVER_REMOVAL = 'DesignatedApproverRemovalRequest'
}

export const SupportedTLDs = eg.object({
  tlds: eg.array(eg.string)
});

export const DomainUpdateResult = eg.object({
  message: eg.string
});

export const DefaultContactInformation = eg.object({
  result: eg.object({
    entry: eg.object({
      address2: eg.string,
      address: eg.string,
      city: eg.string,
      country: eg.string,
      default: eg.boolean,
      email: eg.string,
      email_verified: eg.boolean,
      fax: eg.string,
      first_name: eg.string,
      id: eg.string,
      last_name: eg.string,
      organization: eg.string,
      phone: eg.string,
      state: eg.string,
      zip: eg.string
    })
  })
});
