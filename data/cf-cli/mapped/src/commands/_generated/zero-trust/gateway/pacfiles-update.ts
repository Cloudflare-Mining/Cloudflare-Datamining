/**
 * pacfiles-update command
 * @generated from apis/zero-trust/schema.ts
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

interface PacfilesUpdateArgs {
  pacfileId: string;
  contents: string;
  description: string;
  name: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, PacfilesUpdateArgs> = {
  command: 'pacfiles-update <pacfileId>',
  describe: 'Update a configured Zero Trust Gateway PAC file.',

  builder: (yargs: Argv): Argv<PacfilesUpdateArgs> => {
    return yargs
      .positional('pacfileId', {
        type: 'string',
        description: 'Pacfile ID',
        demandOption: true,
      })
      .option('contents', {
        type: 'string',
        description: 'Actual contents of the PAC file',
      })
      .option('description', {
        type: 'string',
        description: 'Detailed description of the PAC file.',
      })
      .option('name', {
        type: 'string',
        description: 'Name of the PAC file.',
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
      }) as Argv<PacfilesUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<PacfilesUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.pacfileId as string | undefined, 'pacfileId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf zero-trust gateway pacfiles-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/gateway/pacfiles/${argv.pacfileId ?? '<pacfileId>'}`,
          pathParams: { pacfileId: String(argv.pacfileId ?? '') },
          body: { contents: argv.contents, description: argv.description, name: argv.name },
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
        const result = await client.put<unknown>(`/accounts/${accountId}/gateway/pacfiles/${argv.pacfileId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.contents !== undefined) setNestedValue(bodyData, ['contents'], argv.contents);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      const result = await client.put<unknown>(`/accounts/${accountId}/gateway/pacfiles/${argv.pacfileId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
