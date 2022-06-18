import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';
import { DNSRecord } from './dns';

export const SpectrumApp = eg.object({
  dns: eg.object({
    name: DNSRecord.props.name,
    type: DNSRecord.props.type
  }).optional,
  edge_ips: eg.object({
    connectivity: eg.union([eg.literal('all'), eg.string]).optional,
    type: eg.union([eg.literal('dynamic'), eg.string])
  }).optional,
  id: eg.string,
  ip_firewall: eg.boolean.optional,
  modified_on: eg.string,
  origin_direct: eg.array(eg.string).optional,
  protocol: eg.union([eg.literal('tcp/34'), eg.string]).optional,
  proxy_protocol: eg.boolean.optional,
  spp: eg.boolean.optional,
  tls: eg.union([eg.literal('on'), eg.literal('off')]).optional,
  traffic_type: eg.union([eg.literal('direct'), eg.string]).optional
});

export type SpectrumApp = TypeFromCodec<typeof SpectrumApp>;
