/**
 * asn-delete command
 * @generated from apis/botnet-feed/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface AsnDeleteArgs {
  asnId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, AsnDeleteArgs> = {
  command: 'asn-delete <asnId>',
  describe: 'Delete an ASN from botnet threat feed for a given user.',

  builder: (yargs: Argv): Argv<AsnDeleteArgs> => {
    return yargs
      .positional('asnId', {
        type: 'string',
        description: 'Asn ID',
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
      }) as Argv<AsnDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AsnDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.asnId as string | undefined, 'asnId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf botnet-feed configs asn-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/botnet_feed/configs/asn/${argv.asnId ?? '<asnId>'}`,
          pathParams: { asnId: String(argv.asnId ?? '') },
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

      const result = await client.botnetFeed.configs.asnDelete(accountId, argv.asnId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
