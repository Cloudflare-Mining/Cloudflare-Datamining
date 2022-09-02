import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

export const AccountResource = eg.object({
  accountId: eg.string,
  effect: eg.string,
  rowId: eg.number
});

export const UserResource = eg.object({
  effect: eg.string,
  mode: eg.string,
  rowId: eg.number
});

export const ZoneResource = eg.object({
  accountId: eg.string.optional,
  effect: eg.string,
  mode: eg.string,
  rowId: eg.number,
  zoneId: eg.string
});

export const ipAddressFilter = eg.object({
  ipAddresses: eg.array(eg.string),
  operator: eg.string,
  rowId: eg.number
});

export const ApiToken = eg.object({
  expires_on: eg.string.optional,
  id: eg.string,
  name: eg.string,
  not_before: eg.string.optional,
  status: eg.string,
  ipAddressFilters: eg.array(ipAddressFilter).optional,
  issued_on: eg.string,
  modified_on: eg.string,
  last_used_on: eg.string || null,
  creation_type: eg.string.optional,
  scopes: eg.array(eg.string).optional,
  accountResources: eg.array(AccountResource).optional,
  userResources: eg.array(UserResource).optional,
  zoneResources: eg.array(ZoneResource).optional,
  permissionGroups: eg.array(eg.string || eg.number),
  rowId: eg.number,
  cf_challenge_response: eg.string.optional
});

export const ApiTokenFormValue = eg.object({
  expires_on: eg.string.optional,
  id: eg.string,
  name: eg.string,
  not_before: eg.string.optional,
  status: eg.string,
  ipAddressFilters: eg.array(ipAddressFilter).optional,
  issued_on: eg.string,
  modified_on: eg.string,
  last_used_on: eg.string || null,
  scopes: eg.array(eg.string).optional,
  permissionGroupKeys: eg.array(eg.string).optional,
  accountResources: eg.array(AccountResource).optional,
  zoneResources: eg.array(ZoneResource).optional,
  permissionGroups: eg.array(eg.string),
  rowId: eg.number
});

export const ApiTokensTemplate = eg.object({
  expires_on: eg.string.optional,
  not_before: eg.string.optional,
  key: eg.string,
  permissionGroupKeys: eg.array(
    eg.object({
      key: eg.string,
      type: eg.string
    })
  ),
  accountId: eg.string.optional,
  mode: eg.string.optional,
  zoneId: eg.string.optional
});

export const PermissionGroup = eg.object({
  id: eg.string,
  name: eg.string,
  description: eg.string,
  scopes: eg.array(eg.string),
  label: eg.string,
  type: eg.string,
  rowId: eg.number
});

export const PermissionGroupReq = eg.object({
  id: eg.string,
  name: eg.string
});

export const CreateToken = eg.object({
  value: eg.string
});

export const PermissionGroups = eg.array(PermissionGroup);

export type AccountResource = TypeFromCodec<typeof AccountResource>;
export type ApiToken = TypeFromCodec<typeof ApiToken>;
export type CreateToken = TypeFromCodec<typeof CreateToken>;
export type ApiTokenFormValue = TypeFromCodec<typeof ApiTokenFormValue>;
export type ApiTokensTemplate = TypeFromCodec<typeof ApiTokensTemplate>;
export type PermissionGroup = TypeFromCodec<typeof PermissionGroup>;
export type PermissionGroupReq = TypeFromCodec<typeof PermissionGroupReq>;
export type PermissionGroups = TypeFromCodec<typeof PermissionGroups>;
export type UserResource = TypeFromCodec<typeof UserResource>;
export type ZoneResource = TypeFromCodec<typeof ZoneResource>;
