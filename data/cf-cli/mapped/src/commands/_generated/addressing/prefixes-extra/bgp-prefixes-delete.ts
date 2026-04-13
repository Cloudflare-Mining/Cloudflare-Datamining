/**
 * bgp-prefixes-delete command
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

interface BgpPrefixesDeleteArgs {
  prefixId: string;
  bgpPrefixId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, BgpPrefixesDeleteArgs> = {
  command: 'bgp-prefixes-delete <prefixId> <bgpPrefixId>',
  describe:
    'Delete a BGP Prefix associated with the specified IP Prefix. A BGP Prefix must be withdrawn before it can be deleted.',

  builder: (yargs: Argv): Argv<BgpPrefixesDeleteArgs> => {
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
      }) as Argv<BgpPrefixesDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<BgpPrefixesDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.prefixId as string | undefined, 'prefixId');
      validateResourceId(argv.bgpPrefixId as string | undefined, 'bgpPrefixId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf addressing prefixes-extra bgp-prefixes-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/addressing/prefixes/${argv.prefixId ?? '<prefixId>'}/bgp/prefixes/${argv.bgpPrefixId ?? '<bgpPrefixId>'}`,
          pathParams: { prefixId: String(argv.prefixId ?? ''), bgpPrefixId: String(argv.bgpPrefixId ?? '') },
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

      const result = await client.addressing.prefixesextra.bgpPrefixesDelete(
        accountId,
        argv.prefixId,
        argv.bgpPrefixId,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
