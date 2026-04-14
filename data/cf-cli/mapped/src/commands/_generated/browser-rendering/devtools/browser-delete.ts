/**
 * browser-delete command
 * @generated from apis/browser-rendering/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';

interface BrowserDeleteArgs {
  sessionId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, BrowserDeleteArgs> = {
  command: 'browser-delete <sessionId>',
  describe: 'Closes an existing browser session.',

  builder: (yargs: Argv): Argv<BrowserDeleteArgs> => {
    return yargs
      .positional('sessionId', {
        type: 'string',
        description: 'Browser session ID to close.',
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
      }) as Argv<BrowserDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<BrowserDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.sessionId as string | undefined, 'sessionId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf browser-rendering devtools browser-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/browser-rendering/devtools/browser/${argv.sessionId ?? '<sessionId>'}`,
          pathParams: { sessionId: String(argv.sessionId ?? '') },
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

      const result = await client.browserRendering.devtools.browserDelete(accountId, argv.sessionId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
