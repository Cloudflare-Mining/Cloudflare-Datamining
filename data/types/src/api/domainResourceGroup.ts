import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

const Scope = eg.object({
  id: eg.string,
  key: eg.string,
  objects: eg.array(eg.object({ key: eg.string }))
});

const DomainGroup = eg.object({
  id: eg.string,
  name: eg.string,
  status: eg.string,
  scope: Scope,
  modified_on: eg.string,
  meta: eg.object({
    editable: eg.string
  }).optional
});

export type DomainGroup = TypeFromCodec<typeof DomainGroup>;
