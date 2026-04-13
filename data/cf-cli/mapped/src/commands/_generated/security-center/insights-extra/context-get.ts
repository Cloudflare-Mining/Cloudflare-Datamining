/**
 * context-get command
 * @generated from apis/security-center/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ContextGetArgs {
  issueId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ContextGetArgs> = {
  command: 'context-get <issueId>',
  describe:
    'Returns the full context payload for an insight. This endpoint is used for insights with large payloads that are not included inline in the list response.',

  builder: (yargs: Argv): Argv<ContextGetArgs> => {
    return yargs
      .positional('issueId', {
        type: 'string',
        description: 'Issue ID',
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
      }) as Argv<ContextGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ContextGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.issueId as string | undefined, 'issueId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.securityCenter.insightsextra.contextGet(accountId, argv.issueId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
