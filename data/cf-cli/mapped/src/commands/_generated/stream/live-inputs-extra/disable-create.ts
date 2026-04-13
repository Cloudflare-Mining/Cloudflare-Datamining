/**
 * disable-create command
 * @generated from apis/stream/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface DisableCreateArgs {
  liveInputIdentifier: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DisableCreateArgs> = {
  command: 'disable-create <liveInputIdentifier>',
  describe:
    'Prevents a live input from being streamed to and makes the live input inaccessible to any future API calls until enabled.',

  builder: (yargs: Argv): Argv<DisableCreateArgs> => {
    return yargs
      .positional('liveInputIdentifier', {
        type: 'string',
        description: 'A unique identifier for a live input.',
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
      }) as Argv<DisableCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DisableCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.liveInputIdentifier as string | undefined, 'liveInputIdentifier');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf stream live-inputs-extra disable-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/stream/live_inputs/${argv.liveInputIdentifier ?? '<liveInputIdentifier>'}/disable`,
          pathParams: { liveInputIdentifier: String(argv.liveInputIdentifier ?? '') },
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

      const result = await client.stream.liveinputsextra.disableCreate(argv.liveInputIdentifier, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
