import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

export const ZoneLevelAccessPolicyScope = eg.object({
  accountId: eg.string.optional,
  effect: eg.string,
  mode: eg.string,
  zoneId: eg.string.optional,
  resourceGroupId: eg.string.optional
});

export const ZoneLevelAccessPolicy = eg.object({
  id: eg.string,
  access: eg.boolean,
  owner: eg.string,
  emails: eg.array(eg.string).optional,
  auto_accept: eg.boolean.optional,
  resource_groups: eg.array(eg.string).optional,
  permission_groups: eg.array(eg.string),
  scopes: eg.array(ZoneLevelAccessPolicyScope)
});

export const MembershipsPermission = eg.object({
  id: eg.string,
  key: eg.string,
  implies: eg.array(
    eg.object({
      id: eg.string,
      key: eg.string
    })
  ).optional
});

export const PolicyPermissionGroup = eg.object({
  id: eg.string,
  name: eg.string,
  meta: eg.object({
    description: eg.string,
    editable: eg.boolean,
    label: eg.string,
    scopes: eg.string
  }),
  permissions: eg.array(MembershipsPermission).optional
});

const MembershipsScope = eg.object({
  key: eg.string,
  objects: eg.array(
    eg.object({
      key: eg.string
    })
  ).optional
});

export const MembershipsNestedScope = eg.object({
  key: eg.string,
  objects: eg.array(
    eg.object({
      key: eg.string
    })
  ),
  subset_of: eg.array(MembershipsScope).optional
});

export const PolicyResourceGroup = eg.object({
  id: eg.string,
  meta: eg.object({
    editable: eg.string
  }),
  name: eg.string,
  scope: MembershipsNestedScope
});

export const MembershipsPolicy = eg.object({
  id: eg.string,
  access: eg.string,
  permission_groups: eg.array(PolicyPermissionGroup),
  resource_groups: eg.array(PolicyResourceGroup)
});

export type ZoneLevelAccessPolicy = TypeFromCodec<typeof ZoneLevelAccessPolicy>;
export type ZoneLevelAccessPolicyScope = TypeFromCodec<
  typeof ZoneLevelAccessPolicyScope
>;
export type PolicyPermissionGroup = TypeFromCodec<typeof PolicyPermissionGroup>;
export type MembershipsNestedScope = TypeFromCodec<
  typeof MembershipsNestedScope
>;
export type MembershipsPermission = TypeFromCodec<typeof MembershipsPermission>;
export type MembershipsPolicy = TypeFromCodec<typeof MembershipsPolicy>;
export type PolicyResourceGroup = TypeFromCodec<typeof PolicyResourceGroup>;
