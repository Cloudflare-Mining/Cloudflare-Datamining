/**
 * schema-get command
 * @generated from apis/ai/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface SchemaGetArgs {
  model: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, SchemaGetArgs> = {
  command: 'schema-get',
  describe: 'Retrieves the input and output JSON schema definition for a Workers AI model.',

  builder: (yargs: Argv): Argv<SchemaGetArgs> => {
    return yargs
      .option('model', {
        type: 'string',
        description: 'Model Name',
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<SchemaGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SchemaGetArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.model !== undefined) params['model'] = argv.model;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.ai.models.schemaGet(accountId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
