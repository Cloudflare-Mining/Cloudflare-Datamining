/**
 * webhooks-get command
 * @generated from apis/alerting/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface WebhooksGetArgs {
  webhookId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, WebhooksGetArgs> = {
  command: 'webhooks-get <webhookId>',
  describe: 'Get details for a single webhooks destination.',

  builder: (yargs: Argv): Argv<WebhooksGetArgs> => {
    return yargs
      .positional('webhookId', {
        type: 'string',
        description: 'The unique identifier of a webhook',
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
      }) as Argv<WebhooksGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<WebhooksGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.webhookId as string | undefined, 'webhookId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.alerting.destinations.webhooksGet(accountId, argv.webhookId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
