import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

export const Interval = eg.object({
  min: eg.number,
  max: eg.number
});

export type Interval = TypeFromCodec<typeof Interval>;

export const Allocation = eg.object({
  type: eg.union([
    eg.literal('bool'),
    eg.literal('range'),
    eg.literal('max_count'),
    eg.literal('enum_number')
  ]),
  value: eg.union([eg.boolean, eg.number, Interval, eg.array(eg.number)])
});

export type Allocation = TypeFromCodec<typeof Allocation>;

export const Feature = eg.object({
  id: eg.number,
  key: eg.string,
  name: eg.string,
  feature_set: eg.string
});

export type Feature = TypeFromCodec<typeof Feature>;

export const Entitlement = eg.object({
  id: eg.string,
  created_date: eg.string,
  deleted_date: eg.union([eg.string, eg.null]),
  edited_date: eg.string,
  feature: Feature.optional,
  allocation: Allocation
});

export type Entitlement = TypeFromCodec<typeof Entitlement>;
