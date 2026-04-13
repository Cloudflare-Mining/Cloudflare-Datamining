/**
 * edit-dns-settings command
 * @generated from apis/dns/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface EditDNSSettingsArgs {
  'zone-defaults-flatten-all-cnames'?: boolean;
  'zone-defaults-foundation-dns'?: boolean;
  'zone-defaults-internal-dns-reference-zone-id'?: string;
  'zone-defaults-multi-provider'?: boolean;
  'zone-defaults-ns-ttl'?: number;
  'zone-defaults-secondary-overrides'?: boolean;
  'zone-defaults-soa-expire'?: number;
  'zone-defaults-soa-min-ttl'?: number;
  'zone-defaults-soa-mname'?: string;
  'zone-defaults-soa-refresh'?: number;
  'zone-defaults-soa-retry'?: number;
  'zone-defaults-soa-rname'?: string;
  'zone-defaults-soa-ttl'?: number;
  'zone-defaults-zone-mode'?: string;
  'zone-defaults-nameservers-type'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EditDNSSettingsArgs> = {
  command: 'edit-dns-settings',
  describe: 'Update DNS settings for an account',

  builder: (yargs: Argv): Argv<EditDNSSettingsArgs> => {
    return yargs
      .option('zone-defaults-flatten-all-cnames', {
        type: 'boolean',
        description:
          'Whether to flatten all CNAME records in the zone. Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.',
        default: false,
      })
      .option('zone-defaults-foundation-dns', {
        type: 'boolean',
        description: 'Whether to enable Foundation DNS Advanced Nameservers on the zone.',
        default: false,
      })
      .option('zone-defaults-internal-dns-reference-zone-id', {
        type: 'string',
        description: 'The ID of the zone to fallback to.',
        default: undefined,
      })
      .option('zone-defaults-multi-provider', {
        type: 'boolean',
        description:
          'Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.',
        default: false,
      })
      .option('zone-defaults-ns-ttl', {
        type: 'number',
        description: "The time to live (TTL) of the zone's nameserver (NS) records.",
        default: undefined,
      })
      .option('zone-defaults-secondary-overrides', {
        type: 'boolean',
        description:
          'Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.',
        default: false,
      })
      .option('zone-defaults-soa-expire', {
        type: 'number',
        description:
          'Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone.',
        default: undefined,
      })
      .option('zone-defaults-soa-min-ttl', {
        type: 'number',
        description: 'The time to live (TTL) for negative caching of records within the zone.',
        default: undefined,
      })
      .option('zone-defaults-soa-mname', {
        type: 'string',
        description:
          'The primary nameserver, which may be used for outbound zone transfers. If null, a Cloudflare-assigned value will be used.',
        default: undefined,
      })
      .option('zone-defaults-soa-refresh', {
        type: 'number',
        description:
          'Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated.',
        default: undefined,
      })
      .option('zone-defaults-soa-retry', {
        type: 'number',
        description:
          'Time in seconds after which secondary servers should retry queries after the primary server was unresponsive.',
        default: undefined,
      })
      .option('zone-defaults-soa-rname', {
        type: 'string',
        description:
          'The email address of the zone administrator, with the first label representing the local part of the email address.',
        default: undefined,
      })
      .option('zone-defaults-soa-ttl', {
        type: 'number',
        description: 'The time to live (TTL) of the SOA record itself.',
        default: undefined,
      })
      .option('zone-defaults-zone-mode', {
        type: 'string',
        description: 'Whether the zone mode is a regular or CDN/DNS only zone.',
        choices: ['standard', 'cdn_only', 'dns_only'] as const,
        default: undefined,
      })
      .option('zone-defaults-nameservers-type', {
        type: 'string',
        description: 'Nameserver type',
        choices: ['cloudflare.standard', 'cloudflare.standard.random', 'custom.account', 'custom.tenant'] as const,
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
      .choices('zone-defaults-zone-mode', ['standard', 'cdn_only', 'dns_only'] as const)
      .choices('zone-defaults-nameservers-type', [
        'cloudflare.standard',
        'cloudflare.standard.random',
        'custom.account',
        'custom.tenant',
      ] as const) as Argv<EditDNSSettingsArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditDNSSettingsArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf dns edit-dns-settings',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/dns_settings`,
          pathParams: {},
          body: {
            zoneDefaultsFlattenAllCnames: argv.zoneDefaultsFlattenAllCnames,
            zoneDefaultsFoundationDns: argv.zoneDefaultsFoundationDns,
            zoneDefaultsInternalDnsReferenceZoneId: argv.zoneDefaultsInternalDnsReferenceZoneId,
            zoneDefaultsMultiProvider: argv.zoneDefaultsMultiProvider,
            zoneDefaultsNsTtl: argv.zoneDefaultsNsTtl,
            zoneDefaultsSecondaryOverrides: argv.zoneDefaultsSecondaryOverrides,
            zoneDefaultsSoaExpire: argv.zoneDefaultsSoaExpire,
            zoneDefaultsSoaMinTtl: argv.zoneDefaultsSoaMinTtl,
            zoneDefaultsSoaMname: argv.zoneDefaultsSoaMname,
            zoneDefaultsSoaRefresh: argv.zoneDefaultsSoaRefresh,
            zoneDefaultsSoaRetry: argv.zoneDefaultsSoaRetry,
            zoneDefaultsSoaRname: argv.zoneDefaultsSoaRname,
            zoneDefaultsSoaTtl: argv.zoneDefaultsSoaTtl,
            zoneDefaultsZoneMode: argv.zoneDefaultsZoneMode,
            zoneDefaultsNameserversType: argv.zoneDefaultsNameserversType,
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
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.patch<unknown>(`/accounts/${accountId}/dns_settings`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.zoneDefaultsFlattenAllCnames !== undefined)
        setNestedValue(bodyData, ['zone_defaults', 'flatten_all_cnames'], argv.zoneDefaultsFlattenAllCnames);
      if (argv.zoneDefaultsFoundationDns !== undefined)
        setNestedValue(bodyData, ['zone_defaults', 'foundation_dns'], argv.zoneDefaultsFoundationDns);
      if (argv.zoneDefaultsInternalDnsReferenceZoneId !== undefined)
        setNestedValue(
          bodyData,
          ['zone_defaults', 'internal_dns', 'reference_zone_id'],
          argv.zoneDefaultsInternalDnsReferenceZoneId,
        );
      if (argv.zoneDefaultsMultiProvider !== undefined)
        setNestedValue(bodyData, ['zone_defaults', 'multi_provider'], argv.zoneDefaultsMultiProvider);
      if (argv.zoneDefaultsNsTtl !== undefined)
        setNestedValue(bodyData, ['zone_defaults', 'ns_ttl'], argv.zoneDefaultsNsTtl);
      if (argv.zoneDefaultsSecondaryOverrides !== undefined)
        setNestedValue(bodyData, ['zone_defaults', 'secondary_overrides'], argv.zoneDefaultsSecondaryOverrides);
      if (argv.zoneDefaultsSoaExpire !== undefined)
        setNestedValue(bodyData, ['zone_defaults', 'soa', 'expire'], argv.zoneDefaultsSoaExpire);
      if (argv.zoneDefaultsSoaMinTtl !== undefined)
        setNestedValue(bodyData, ['zone_defaults', 'soa', 'min_ttl'], argv.zoneDefaultsSoaMinTtl);
      if (argv.zoneDefaultsSoaMname !== undefined)
        setNestedValue(bodyData, ['zone_defaults', 'soa', 'mname'], argv.zoneDefaultsSoaMname);
      if (argv.zoneDefaultsSoaRefresh !== undefined)
        setNestedValue(bodyData, ['zone_defaults', 'soa', 'refresh'], argv.zoneDefaultsSoaRefresh);
      if (argv.zoneDefaultsSoaRetry !== undefined)
        setNestedValue(bodyData, ['zone_defaults', 'soa', 'retry'], argv.zoneDefaultsSoaRetry);
      if (argv.zoneDefaultsSoaRname !== undefined)
        setNestedValue(bodyData, ['zone_defaults', 'soa', 'rname'], argv.zoneDefaultsSoaRname);
      if (argv.zoneDefaultsSoaTtl !== undefined)
        setNestedValue(bodyData, ['zone_defaults', 'soa', 'ttl'], argv.zoneDefaultsSoaTtl);
      if (argv.zoneDefaultsZoneMode !== undefined)
        setNestedValue(bodyData, ['zone_defaults', 'zone_mode'], argv.zoneDefaultsZoneMode);
      if (argv.zoneDefaultsNameserversType !== undefined)
        setNestedValue(bodyData, ['zone_defaults', 'nameservers', 'type'], argv.zoneDefaultsNameserversType);
      const result = await client.patch<unknown>(`/accounts/${accountId}/dns_settings`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
