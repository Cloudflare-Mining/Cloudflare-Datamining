/**
 * edit command
 * @generated from apis/dns/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface EditArgs {
  zoneId?: string;
  'flatten-all-cnames'?: boolean;
  'foundation-dns'?: boolean;
  'internal-dns-reference-zone-id'?: string;
  'multi-provider'?: boolean;
  'ns-ttl'?: number;
  'secondary-overrides'?: boolean;
  'soa-expire'?: number;
  'soa-min-ttl'?: number;
  'soa-mname'?: string;
  'soa-refresh'?: number;
  'soa-retry'?: number;
  'soa-rname'?: string;
  'soa-ttl'?: number;
  'zone-mode'?: string;
  'nameservers-ns-set'?: number;
  'nameservers-type'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit [zoneId]',
  describe: 'Update DNS settings for a zone',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('flatten-all-cnames', {
        type: 'boolean',
        description:
          'Whether to flatten all CNAME records in the zone. Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.',
        default: false,
      })
      .option('foundation-dns', {
        type: 'boolean',
        description: 'Whether to enable Foundation DNS Advanced Nameservers on the zone.',
        default: false,
      })
      .option('internal-dns-reference-zone-id', {
        type: 'string',
        description: 'The ID of the zone to fallback to.',
        default: undefined,
      })
      .option('multi-provider', {
        type: 'boolean',
        description:
          'Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.',
        default: false,
      })
      .option('ns-ttl', {
        type: 'number',
        description: "The time to live (TTL) of the zone's nameserver (NS) records.",
        default: undefined,
      })
      .option('secondary-overrides', {
        type: 'boolean',
        description:
          'Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.',
        default: false,
      })
      .option('soa-expire', {
        type: 'number',
        description:
          'Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone.',
        default: undefined,
      })
      .option('soa-min-ttl', {
        type: 'number',
        description: 'The time to live (TTL) for negative caching of records within the zone.',
        default: undefined,
      })
      .option('soa-mname', {
        type: 'string',
        description:
          'The primary nameserver, which may be used for outbound zone transfers. If null, a Cloudflare-assigned value will be used.',
        default: undefined,
      })
      .option('soa-refresh', {
        type: 'number',
        description:
          'Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated.',
        default: undefined,
      })
      .option('soa-retry', {
        type: 'number',
        description:
          'Time in seconds after which secondary servers should retry queries after the primary server was unresponsive.',
        default: undefined,
      })
      .option('soa-rname', {
        type: 'string',
        description:
          'The email address of the zone administrator, with the first label representing the local part of the email address.',
        default: undefined,
      })
      .option('soa-ttl', {
        type: 'number',
        description: 'The time to live (TTL) of the SOA record itself.',
        default: undefined,
      })
      .option('zone-mode', {
        type: 'string',
        description: 'Whether the zone mode is a regular or CDN/DNS only zone.',
        choices: ['standard', 'cdn_only', 'dns_only'] as const,
        default: undefined,
      })
      .option('nameservers-ns-set', {
        type: 'number',
        description: 'Configured nameserver set to be used for this zone',
        default: undefined,
      })
      .option('nameservers-type', {
        type: 'string',
        description: 'Nameserver type',
        choices: ['cloudflare.standard', 'custom.account', 'custom.tenant', 'custom.zone'] as const,
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
      .choices('zone-mode', ['standard', 'cdn_only', 'dns_only'] as const)
      .choices('nameservers-type', [
        'cloudflare.standard',
        'custom.account',
        'custom.tenant',
        'custom.zone',
      ] as const) as Argv<EditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf dns settings edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/dns_settings`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: {
            flattenAllCnames: argv.flattenAllCnames,
            foundationDns: argv.foundationDns,
            internalDnsReferenceZoneId: argv.internalDnsReferenceZoneId,
            multiProvider: argv.multiProvider,
            nsTtl: argv.nsTtl,
            secondaryOverrides: argv.secondaryOverrides,
            soaExpire: argv.soaExpire,
            soaMinTtl: argv.soaMinTtl,
            soaMname: argv.soaMname,
            soaRefresh: argv.soaRefresh,
            soaRetry: argv.soaRetry,
            soaRname: argv.soaRname,
            soaTtl: argv.soaTtl,
            zoneMode: argv.zoneMode,
            nameserversNsSet: argv.nameserversNsSet,
            nameserversType: argv.nameserversType,
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
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.patch<unknown>(`/zones/${zoneId}/dns_settings`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.flattenAllCnames !== undefined) setNestedValue(bodyData, ['flatten_all_cnames'], argv.flattenAllCnames);
      if (argv.foundationDns !== undefined) setNestedValue(bodyData, ['foundation_dns'], argv.foundationDns);
      if (argv.internalDnsReferenceZoneId !== undefined)
        setNestedValue(bodyData, ['internal_dns', 'reference_zone_id'], argv.internalDnsReferenceZoneId);
      if (argv.multiProvider !== undefined) setNestedValue(bodyData, ['multi_provider'], argv.multiProvider);
      if (argv.nsTtl !== undefined) setNestedValue(bodyData, ['ns_ttl'], argv.nsTtl);
      if (argv.secondaryOverrides !== undefined)
        setNestedValue(bodyData, ['secondary_overrides'], argv.secondaryOverrides);
      if (argv.soaExpire !== undefined) setNestedValue(bodyData, ['soa', 'expire'], argv.soaExpire);
      if (argv.soaMinTtl !== undefined) setNestedValue(bodyData, ['soa', 'min_ttl'], argv.soaMinTtl);
      if (argv.soaMname !== undefined) setNestedValue(bodyData, ['soa', 'mname'], argv.soaMname);
      if (argv.soaRefresh !== undefined) setNestedValue(bodyData, ['soa', 'refresh'], argv.soaRefresh);
      if (argv.soaRetry !== undefined) setNestedValue(bodyData, ['soa', 'retry'], argv.soaRetry);
      if (argv.soaRname !== undefined) setNestedValue(bodyData, ['soa', 'rname'], argv.soaRname);
      if (argv.soaTtl !== undefined) setNestedValue(bodyData, ['soa', 'ttl'], argv.soaTtl);
      if (argv.zoneMode !== undefined) setNestedValue(bodyData, ['zone_mode'], argv.zoneMode);
      if (argv.nameserversNsSet !== undefined)
        setNestedValue(bodyData, ['nameservers', 'ns_set'], argv.nameserversNsSet);
      if (argv.nameserversType !== undefined) setNestedValue(bodyData, ['nameservers', 'type'], argv.nameserversType);
      const result = await client.patch<unknown>(`/zones/${zoneId}/dns_settings`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
