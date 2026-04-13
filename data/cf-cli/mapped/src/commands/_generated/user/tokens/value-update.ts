/**
 * value-update command
 * @generated from apis/user/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody } from '../../../../lib/body-parser.js';

interface ValueUpdateArgs {
  tokenId: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ValueUpdateArgs> = {
  command: 'value-update <tokenId>',
  describe: 'Roll the token secret.',

  builder: (yargs: Argv): Argv<ValueUpdateArgs> => {
    return yargs
      .positional('tokenId', {
        type: 'string',
        description: 'Token identifier tag.',
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
      }) as Argv<ValueUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ValueUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.tokenId as string | undefined, 'tokenId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf user tokens value-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/user/tokens/${argv.tokenId ?? '<tokenId>'}/value`,
          pathParams: { tokenId: String(argv.tokenId ?? '') },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.put<unknown>(`/user/tokens/${argv.tokenId}/value`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.user.tokens.valueUpdate(argv.tokenId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
