import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';
import { Zone } from './zone';

export const DNSRecordMeta = eg.object({
  auto_added: eg.boolean,
  custom_nameserver: eg.boolean.optional,
  email_routing: eg.boolean.optional,
  fallback_origin: eg.boolean.optional,
  managed_by_apps: eg.boolean,
  managed_by_argo_tunnel: eg.boolean,
  managed_by_web3: eg.boolean,
  managed_cname: eg.boolean.optional,
  read_only: eg.boolean.optional,
  shopify: eg.boolean.optional,
  source: eg.string.optional,
  origin_worker_id: eg.string.optional
});

export type DNSRecordMeta = TypeFromCodec<typeof DNSRecordMeta>;

export const DNSRecord = eg.object({
  content: eg.string.optional,
  created_on: eg.string.optional,
  id: eg.string.optional, // Secondary DNS records do not have ids
  data: eg.any.optional,
  locked: eg.boolean.optional,
  meta: DNSRecordMeta.optional, // May not always exist (DNS-7417)
  modified_on: eg.string.optional,
  name: eg.string,
  priority: eg.number.optional,
  proxiable: eg.boolean.optional,
  proxied: eg.boolean.optional,
  ttl: eg.number,
  type: eg.union([
    eg.literal('A'),
    eg.literal('AAAA'),
    eg.literal('CNAME'),
    eg.literal('CAA'),
    eg.literal('CERT'),
    eg.literal('DNSKEY'),
    eg.literal('DS'),
    eg.literal('HTTPS'),
    eg.literal('LOC'),
    eg.literal('MX'),
    eg.literal('NAPTR'),
    eg.literal('NS'),
    eg.literal('PTR'),
    eg.literal('SRV'),
    eg.literal('SPF'),
    eg.literal('TXT'),
    eg.literal('SMIMEA'),
    eg.literal('SSHFP'),
    eg.literal('SVCB'),
    eg.literal('TLSA'),
    eg.literal('URI')
  ]),
  zone_id: Zone.props.id.optional,
  zone_name: Zone.props.name.optional
});

export type DNSRecord = TypeFromCodec<typeof DNSRecord>;

export const DNSFirewallCluster = eg.object({
  id: eg.string,
  name: eg.string,
  maximum_cache_ttl: eg.number,
  minimum_cache_ttl: eg.number,
  deprecate_any_requests: eg.boolean,
  origin_ips: eg.array(eg.string),
  dns_firewall_ips: eg.array(eg.string)
});

export type DNSFirewallCluster = TypeFromCodec<typeof DNSFirewallCluster>;

export const DNSAcl = eg.object({
  id: eg.string,
  ip_range: eg.string,
  name: eg.string
});

export type DNSAcl = TypeFromCodec<typeof DNSAcl>;

export const DNSTsig = eg.object({
  id: eg.string,
  algo: eg.string,
  name: eg.string,
  secret: eg.string
});

export type DNSTsig = TypeFromCodec<typeof DNSTsig>;

export const DNSPeer = eg.object({
  name: eg.string,
  id: eg.string,
  ip: eg.string,
  port: eg.number,
  ixfr_enable: eg.boolean,
  tsig_id: eg.string.optional
});

export type DNSPeer = TypeFromCodec<typeof DNSPeer>;

export const ZonePeerConfig = eg.object({
  id: eg.string,
  name: eg.string,
  auto_refresh_seconds: eg.number.optional,
  peers: eg.array(eg.string),
  checked_time: eg.string,
  modified_time: eg.string.optional,
  last_transferred_time: eg.string.optional
});

export type ZonePeerConfig = TypeFromCodec<typeof ZonePeerConfig>;

export const DNSOutgoingZoneTransfers = eg.union([
  eg.literal('Enabled'),
  eg.literal('Disabled')
]);

export type DNSOutgoingZoneTransfers = TypeFromCodec<
  typeof DNSOutgoingZoneTransfers
>;
