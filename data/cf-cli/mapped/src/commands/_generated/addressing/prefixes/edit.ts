/**
 * edit command
 * @generated from apis/addressing/schema.ts
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

interface EditArgs {
  prefixId: string;
  description: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit <prefixId>',
  describe: 'Modify the description for a prefix owned by the account.',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('prefixId', {
        type: 'string',
        description: 'Identifier of an IP Prefix.',
        demandOption: true,
      })
      .option('description', {
        type: 'string',
        description: 'Description of the prefix.',
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
      }) as Argv<EditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.prefixId as string | undefined, 'prefixId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf addressing prefixes edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/addressing/prefixes/${argv.prefixId ?? '<prefixId>'}`,
          pathParams: { prefixId: String(argv.prefixId ?? '') },
          body: { description: argv.description },
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
        const result = await client.patch<unknown>(`/accounts/${accountId}/addressing/prefixes/${argv.prefixId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      const result = await client.patch<unknown>(`/accounts/${accountId}/addressing/prefixes/${argv.prefixId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
