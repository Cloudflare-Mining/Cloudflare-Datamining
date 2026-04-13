/**
 * outputs-delete command
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
import { parseBody } from '../../../../lib/body-parser.js';

interface OutputsDeleteArgs {
  outputIdentifier: string;
  liveInputIdentifier: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, OutputsDeleteArgs> = {
  command: 'outputs-delete <outputIdentifier> <liveInputIdentifier>',
  describe: 'Deletes an output and removes it from the associated live input.',

  builder: (yargs: Argv): Argv<OutputsDeleteArgs> => {
    return yargs
      .positional('outputIdentifier', {
        type: 'string',
        description: 'A unique identifier for the output.',
        demandOption: true,
      })
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
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      }) as Argv<OutputsDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<OutputsDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.outputIdentifier as string | undefined, 'outputIdentifier');
      validateResourceId(argv.liveInputIdentifier as string | undefined, 'liveInputIdentifier');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf stream live-inputs outputs-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/stream/live_inputs/${argv.liveInputIdentifier ?? '<liveInputIdentifier>'}/outputs/${argv.outputIdentifier ?? '<outputIdentifier>'}`,
          pathParams: {
            outputIdentifier: String(argv.outputIdentifier ?? ''),
            liveInputIdentifier: String(argv.liveInputIdentifier ?? ''),
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
        const result = await client.delete<unknown>(
          `/accounts/${accountId}/stream/live_inputs/${argv.liveInputIdentifier}/outputs/${argv.outputIdentifier}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.stream.liveinputs.outputsDelete(
        argv.outputIdentifier,
        argv.liveInputIdentifier,
        accountId,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
