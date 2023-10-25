import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

export const PermValue = eg.object({
  read: eg.boolean,
  edit: eg.boolean
});

export type PermValue = TypeFromCodec<typeof PermValue>;

export const Permissions = eg.object({
  access: PermValue,
  analytics: PermValue,
  app: PermValue,
  auditlogs: PermValue,
  billing: PermValue,
  blocks: PermValue,
  cache_purge: PermValue,
  dns_records: PermValue,
  lb: PermValue,
  legal: PermValue,
  logs: PermValue,
  magic: PermValue,
  member: PermValue,
  organization: PermValue,
  r2_bucket: PermValue,
  page_shield: PermValue,
  ssl: PermValue,
  stream: PermValue,
  subscription: PermValue,
  waf: PermValue,
  waitingroom: PermValue,
  webhooks: PermValue,
  worker: PermValue,
  zaraz: PermValue,
  zone: PermValue,
  zone_settings: PermValue,
  http_applications: PermValue,
  zone_versioning: PermValue
});

export type Permissions = TypeFromCodec<typeof Permissions>;

export const PermKey = eg.keyOf(Permissions);

export type PermKey = TypeFromCodec<typeof PermKey>;

export const Can = eg.object({
  read: eg.boolean,
  update: eg.boolean,
  create: eg.boolean,
  delete: eg.boolean,
  list: eg.boolean,
  sign: eg.boolean,
  refresh: eg.boolean.optional
});

export type Can = TypeFromCodec<typeof Can>;
