import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

const GranularResource = eg.object({
  id: eg.string,
  name: eg.string,
  description: eg.string
})

export type GranularResource = TypeFromCodec<typeof GranularResource>;
