/**
 * acquire command
 * @generated from apis/browser-rendering/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface AcquireArgs {
  'keep-alive'?: number;
  lab?: boolean;
  targets?: boolean;
  recording?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, AcquireArgs> = {
  command: 'acquire',
  describe: 'Acquire a new browser DevTools session',

  builder: (yargs: Argv): Argv<AcquireArgs> => {
    return yargs
      .option('keep-alive', {
        type: 'number',
        description: 'Keep-alive time in milliseconds.',
        default: undefined,
      })
      .option('lab', {
        type: 'boolean',
        description: 'Use experimental browser.',
        default: false,
      })
      .option('targets', {
        type: 'boolean',
        description: 'Include browser targets in response.',
        default: false,
      })
      .option('recording', {
        type: 'boolean',
        description: 'Recording',
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
      }) as Argv<AcquireArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AcquireArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.keepAlive !== undefined) params['keep_alive'] = argv.keepAlive;
      if (argv.lab !== undefined) params['lab'] = argv.lab;
      if (argv.targets !== undefined) params['targets'] = argv.targets;
      if (argv.recording !== undefined) params['recording'] = argv.recording;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf browser-rendering devtools acquire',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/browser-rendering/devtools/browser`,
          pathParams: {},
          body: { ...params },
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

      const result = await client.browserRendering.devtools.acquire(
        accountId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
