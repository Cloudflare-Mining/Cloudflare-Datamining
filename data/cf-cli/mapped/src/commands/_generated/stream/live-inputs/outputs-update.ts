/**
 * outputs-update command
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
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface OutputsUpdateArgs {
  outputIdentifier: string;
  liveInputIdentifier: string;
  enabled: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, OutputsUpdateArgs> = {
  command: 'outputs-update <outputIdentifier> <liveInputIdentifier>',
  describe: 'Updates the state of an output.',

  builder: (yargs: Argv): Argv<OutputsUpdateArgs> => {
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
      .option('enabled', {
        type: 'boolean',
        description:
          'When enabled, live video streamed to the associated live input will be sent to the output URL. When disabled, live video will not be sent to the output URL, even when streaming to the associated live input. Use this to control precisely when you start and stop simulcasting to specific destinations like YouTube and Twitch.',
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
      }) as Argv<OutputsUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<OutputsUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.outputIdentifier as string | undefined, 'outputIdentifier');
      validateResourceId(argv.liveInputIdentifier as string | undefined, 'liveInputIdentifier');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf stream live-inputs outputs-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/stream/live_inputs/${argv.liveInputIdentifier ?? '<liveInputIdentifier>'}/outputs/${argv.outputIdentifier ?? '<outputIdentifier>'}`,
          pathParams: {
            outputIdentifier: String(argv.outputIdentifier ?? ''),
            liveInputIdentifier: String(argv.liveInputIdentifier ?? ''),
          },
          body: { enabled: argv.enabled },
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
        const result = await client.put<unknown>(
          `/accounts/${accountId}/stream/live_inputs/${argv.liveInputIdentifier}/outputs/${argv.outputIdentifier}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      const result = await client.put<unknown>(
        `/accounts/${accountId}/stream/live_inputs/${argv.liveInputIdentifier}/outputs/${argv.outputIdentifier}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
