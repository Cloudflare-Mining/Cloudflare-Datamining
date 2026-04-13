/**
 * request command
 * @generated from apis/ai-gateway/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface RequestArgs {
  id: string;
  gatewayId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RequestArgs> = {
  command: 'request <id> <gatewayId>',
  describe: 'Retrieves the original request payload for an AI Gateway log entry.',

  builder: (yargs: Argv): Argv<RequestArgs> => {
    return yargs
      .positional('id', {
        type: 'string',
        description: 'ID',
        demandOption: true,
      })
      .positional('gatewayId', {
        type: 'string',
        description: 'gateway id',
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
      }) as Argv<RequestArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RequestArgs>): Promise<void> => {
    try {
      validateResourceId(argv.id as string | undefined, 'id');
      validateResourceId(argv.gatewayId as string | undefined, 'gatewayId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.aiGateway.logs.request(argv.id, argv.gatewayId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
