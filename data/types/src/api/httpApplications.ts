import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

const HTTPApplication = eg.object({
  id: eg.string,
  name: eg.string,
  status: eg.string,
  current_version: eg.string,
  last_updated: eg.string
});

export type HTTPApplication = TypeFromCodec<typeof HTTPApplication>;
