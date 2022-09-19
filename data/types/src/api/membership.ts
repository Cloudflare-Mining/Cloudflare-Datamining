import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';
import { Account } from './account';
import { Permissions } from './permissions';
import { MembershipsPolicy } from './policy';

export const Membership = eg.object({
  id: eg.string,
  status: eg.string,
  api_access_enabled: eg.boolean.optional,
  permissions: Permissions,
  roles: eg.array(eg.string),
  account: Account,
  membershipId: eg.string.optional,
  policies: eg.array(MembershipsPolicy).optional
});

export type Membership = TypeFromCodec<typeof Membership>;
