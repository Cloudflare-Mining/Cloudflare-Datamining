import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

const HTTPApplication = eg.object({
  id: eg.string,
  name: eg.string,
  status: eg.string,
  current_version: eg.string,
  last_updated: eg.string
});

export type HTTPApplication = TypeFromCodec<typeof HTTPApplication>;

const ZoneApplication = eg.object({
  id: eg.string,
  name: eg.string,
  status: eg.string,
  current_version: eg.string,
  last_updated: eg.string
});

export type ZoneApplication = TypeFromCodec<typeof ZoneApplication>;

const ZoneVersion = eg.object({
  version: eg.number,
  id: eg.string,
  cloned_from: eg.string.optional,
  application_id: eg.string,
  description: eg.string,
  status: eg.string,
  locked: eg.boolean,
  last_updated: eg.string.optional
});

export type ZoneVersion = TypeFromCodec<typeof ZoneVersion>;

const CreateZoneVersion = eg.object({
  version: eg.number,
  id: eg.string,
  clone_from: eg.string,
  application_id: eg.string,
  description: eg.string,
  status: eg.string,
  locked: eg.boolean,
  last_updated: eg.string
});

export type CreateZoneVersion = TypeFromCodec<typeof CreateZoneVersion>;

export const ZoneInfo = eg.object({
  zone_name: eg.string,
  zone_tag: eg.string
});
type ZoneInfo = TypeFromCodec<typeof ZoneInfo>;

export type ConvertedZoneVersion = {
  root: ZoneInfo;
  parent: ZoneInfo;
  versionId: number;
} & ZoneInfo;

const WAFMigrationStatus = eg.object({
  new_waf_status: eg.string,
  old_waf_status: eg.string
});

export type WAFMigrationStatus = TypeFromCodec<typeof WAFMigrationStatus>;
