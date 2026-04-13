/**
 * bgp-prefixes-edit command
 * @generated from apis/addressing/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface BgpPrefixesEditArgs {
  prefixId: string;
  bgpPrefixId: string;
  'asn-prepend-count'?: number;
  'auto-advertise-withdraw'?: boolean;
  'on-demand-advertised'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, BgpPrefixesEditArgs> = {
  command: 'bgp-prefixes-edit <prefixId> <bgpPrefixId>',
  describe:
    'Update the properties of a BGP Prefix, such as the on demand advertisement status (advertised or withdrawn).',

  builder: (yargs: Argv): Argv<BgpPrefixesEditArgs> => {
    return yargs
      .positional('prefixId', {
        type: 'string',
        description: 'Identifier of an IP Prefix.',
        demandOption: true,
      })
      .positional('bgpPrefixId', {
        type: 'string',
        description: 'Identifier of BGP Prefix.',
        demandOption: true,
      })
      .option('asn-prepend-count', {
        type: 'number',
        description: 'Number of times to prepend the Cloudflare ASN to the BGP AS-Path attribute',
        default: undefined,
      })
      .option('auto-advertise-withdraw', {
        type: 'boolean',
        description:
          'Determines if Cloudflare advertises a BYOIP BGP prefix even when there is no matching BGP prefix in the Magic routing table. When true, Cloudflare will automatically withdraw the BGP prefix when there are no matching BGP routes, and will resume advertising when there is at least one matching BGP route.',
        default: false,
      })
      .option('on-demand-advertised', {
        type: 'boolean',
        description: 'The on_demand.advertised field',
        default: false,
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
      }) as Argv<BgpPrefixesEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<BgpPrefixesEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.prefixId as string | undefined, 'prefixId');
      validateResourceId(argv.bgpPrefixId as string | undefined, 'bgpPrefixId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf addressing prefixes bgp-prefixes-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/addressing/prefixes/${argv.prefixId ?? '<prefixId>'}/bgp/prefixes/${argv.bgpPrefixId ?? '<bgpPrefixId>'}`,
          pathParams: { prefixId: String(argv.prefixId ?? ''), bgpPrefixId: String(argv.bgpPrefixId ?? '') },
          body: {
            asnPrependCount: argv.asnPrependCount,
            autoAdvertiseWithdraw: argv.autoAdvertiseWithdraw,
            onDemandAdvertised: argv.onDemandAdvertised,
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
        const result = await client.patch<unknown>(
          `/accounts/${accountId}/addressing/prefixes/${argv.prefixId}/bgp/prefixes/${argv.bgpPrefixId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.asnPrependCount !== undefined) setNestedValue(bodyData, ['asn_prepend_count'], argv.asnPrependCount);
      if (argv.autoAdvertiseWithdraw !== undefined)
        setNestedValue(bodyData, ['auto_advertise_withdraw'], argv.autoAdvertiseWithdraw);
      if (argv.onDemandAdvertised !== undefined)
        setNestedValue(bodyData, ['on_demand', 'advertised'], argv.onDemandAdvertised);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/addressing/prefixes/${argv.prefixId}/bgp/prefixes/${argv.bgpPrefixId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
