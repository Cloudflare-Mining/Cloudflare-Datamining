/**
 * update command
 * @generated from apis/spectrum/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface UpdateArgs {
  appId: string;
  zoneId: string;
  'argo-smart-routing'?: boolean;
  'dns-name'?: string;
  'dns-type'?: string;
  'ip-firewall'?: boolean;
  'origin-direct'?: string;
  'origin-dns-name'?: string;
  'origin-dns-ttl'?: number;
  'origin-dns-type'?: string;
  protocol: string;
  'proxy-protocol'?: string;
  tls?: string;
  'traffic-type'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <appId> [zoneId]',
  describe: "Updates a previously existing application's configuration that uses a name for the origin.",

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('appId', {
        type: 'string',
        description: 'App ID',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Zone ID (or use --zone flag)',
      })
      .option('argo-smart-routing', {
        type: 'boolean',
        description:
          'Enables Argo Smart Routing for this application. Notes: Only available for TCP applications with traffic_type set to "direct".',
        default: false,
      })
      .option('dns-name', {
        type: 'string',
        description: 'The name of the DNS record associated with the application.',
        default: undefined,
      })
      .option('dns-type', {
        type: 'string',
        description: 'The type of DNS record associated with the application.',
        choices: ['CNAME', 'ADDRESS'] as const,
        default: undefined,
      })
      .option('ip-firewall', {
        type: 'boolean',
        description: 'Enables IP Access Rules for this application. Notes: Only available for TCP applications.',
        default: false,
      })
      .option('origin-direct', {
        type: 'string',
        description: 'List of origin IP addresses. Array may contain multiple IP addresses for load balancing.',
        default: undefined,
      })
      .option('origin-dns-name', {
        type: 'string',
        description: 'The name of the DNS record associated with the origin.',
        default: undefined,
      })
      .option('origin-dns-ttl', {
        type: 'number',
        description: 'The TTL of our resolution of your DNS record in seconds.',
        default: undefined,
      })
      .option('origin-dns-type', {
        type: 'string',
        description:
          'The type of DNS record associated with the origin. "" is used to specify a combination of A/AAAA records.',
        choices: ['A', 'AAAA', 'SRV'] as const,
        default: undefined,
      })
      .option('protocol', {
        type: 'string',
        description:
          'The port configuration at Cloudflare\'s edge. May specify a single port, for example \`"tcp/1000"\`, or a range of ports, for example \`"tcp/1000-2000"\`.',
      })
      .option('proxy-protocol', {
        type: 'string',
        description:
          'Enables Proxy Protocol to the origin. Refer to [Enable Proxy protocol](https://developers.cloudflare.com/spectrum/getting-started/proxy-protocol/) for implementation details on PROXY Protocol V1, PROXY Protocol V2, and Simple Proxy Protocol.',
        choices: ['off', 'v1', 'v2', 'simple'] as const,
        default: undefined,
      })
      .option('tls', {
        type: 'string',
        description: 'The type of TLS termination associated with the application.',
        choices: ['off', 'flexible', 'full', 'strict'] as const,
        default: undefined,
      })
      .option('traffic-type', {
        type: 'string',
        description:
          'Determines how data travels from the edge to your origin. When set to "direct", Spectrum will send traffic directly to your origin, and the application\'s type is derived from the \`protocol\`. When set to "http" or "https", Spectrum will apply Cloudflare\'s HTTP/HTTPS features as it sends traffic to your origin, and the application type matches this property exactly.',
        choices: ['direct', 'http', 'https'] as const,
        default: undefined,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      })
      .choices('dns-type', ['CNAME', 'ADDRESS'] as const)
      .choices('origin-dns-type', ['A', 'AAAA', 'SRV'] as const)
      .choices('proxy-protocol', ['off', 'v1', 'v2', 'simple'] as const)
      .choices('tls', ['off', 'flexible', 'full', 'strict'] as const)
      .choices('traffic-type', ['direct', 'http', 'https'] as const) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.appId as string | undefined, 'appId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf spectrum apps update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/spectrum/apps/${argv.appId ?? '<appId>'}`,
          pathParams: { appId: String(argv.appId ?? ''), zoneId: String(argv.zoneId ?? '') },
          body: {
            argoSmartRouting: argv.argoSmartRouting,
            dnsName: argv.dnsName,
            dnsType: argv.dnsType,
            ipFirewall: argv.ipFirewall,
            originDirect: argv.originDirect,
            originDnsName: argv.originDnsName,
            originDnsTtl: argv.originDnsTtl,
            originDnsType: argv.originDnsType,
            protocol: argv.protocol,
            proxyProtocol: argv.proxyProtocol,
            tls: argv.tls,
            trafficType: argv.trafficType,
          },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.put<unknown>(`/zones/${argv.zoneId}/spectrum/apps/${argv.appId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.argoSmartRouting !== undefined) setNestedValue(bodyData, ['argo_smart_routing'], argv.argoSmartRouting);
      if (argv.dnsName !== undefined) setNestedValue(bodyData, ['dns', 'name'], argv.dnsName);
      if (argv.dnsType !== undefined) setNestedValue(bodyData, ['dns', 'type'], argv.dnsType);
      if (argv.ipFirewall !== undefined) setNestedValue(bodyData, ['ip_firewall'], argv.ipFirewall);
      if (argv.originDirect !== undefined) setNestedValue(bodyData, ['origin_direct'], argv.originDirect);
      if (argv.originDnsName !== undefined) setNestedValue(bodyData, ['origin_dns', 'name'], argv.originDnsName);
      if (argv.originDnsTtl !== undefined) setNestedValue(bodyData, ['origin_dns', 'ttl'], argv.originDnsTtl);
      if (argv.originDnsType !== undefined) setNestedValue(bodyData, ['origin_dns', 'type'], argv.originDnsType);
      if (argv.protocol !== undefined) setNestedValue(bodyData, ['protocol'], argv.protocol);
      if (argv.proxyProtocol !== undefined) setNestedValue(bodyData, ['proxy_protocol'], argv.proxyProtocol);
      if (argv.tls !== undefined) setNestedValue(bodyData, ['tls'], argv.tls);
      if (argv.trafficType !== undefined) setNestedValue(bodyData, ['traffic_type'], argv.trafficType);
      const result = await client.put<unknown>(`/zones/${argv.zoneId}/spectrum/apps/${argv.appId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
