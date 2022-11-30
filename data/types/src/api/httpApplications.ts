import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

const HTTPApplication = eg.object({
  id: eg.string,
  name: eg.string,
  status: eg.string,
  current_version: eg.string,
  last_updated: eg.string
});

export type HTTPApplication = TypeFromCodec<typeof HTTPApplication>;

const ZoneVersion = eg.object({
  version: eg.number,
  id: eg.string,
  cloned_from: eg.string,
  application_id: eg.string,
  description: eg.string,
  status: eg.string,
  locked: eg.boolean,
  last_updated: eg.string
});

export type ZoneVersion = TypeFromCodec<typeof ZoneVersion>;

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
