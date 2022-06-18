import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

export const Organization = eg.object({
  id: eg.string,
  name: eg.string,
  status: eg.string,
  permissions: eg.array(eg.string),
  roles: eg.array(eg.string)
});

export type Organization = TypeFromCodec<typeof Organization>;
