import { eg, type TypeFromCodec } from '@cloudflare/util-en-garde';

export const Organization = eg.object({
  id: eg.string,
  name: eg.string,
  status: eg.string,
  permissions: eg.array(eg.string).optional,
  roles: eg.array(eg.string).optional,
  create_time: eg.string,
  meta: eg.object({}).optional
});

export type Organization = TypeFromCodec<typeof Organization>;
