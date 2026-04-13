/**
 * update-extra command
 * @generated from apis/custom-pages/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface UpdateExtraArgs {
  identifier: string;
  state: string;
  url: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateExtraArgs> = {
  command: 'update-extra <identifier>',
  describe: 'Updates the configuration of an existing custom page.',

  builder: (yargs: Argv): Argv<UpdateExtraArgs> => {
    return yargs
      .positional('identifier', {
        type: 'string',
        description: 'Error Page Types',
        demandOption: true,
      })
      .option('state', {
        type: 'string',
        description: 'The custom page state.',
        choices: ['default', 'customized'] as const,
      })
      .option('url', {
        type: 'string',
        description: 'The URL associated with the custom page.',
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
      })
      .choices('state', ['default', 'customized'] as const) as Argv<UpdateExtraArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateExtraArgs>): Promise<void> => {
    try {
      validateResourceId(argv.identifier as string | undefined, 'identifier');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf custom-pages update-extra',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountIdentifier ?? '<accountIdentifier>'}/custom_pages/${argv.identifier ?? '<identifier>'}`,
          pathParams: {
            identifier: String(argv.identifier ?? ''),
            accountIdentifier: String(argv.accountIdentifier ?? ''),
          },
          body: { state: argv.state, url: argv.url },
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
          `/accounts/${argv.accountIdentifier}/custom_pages/${argv.identifier}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.state !== undefined) setNestedValue(bodyData, ['state'], argv.state);
      if (argv.url !== undefined) setNestedValue(bodyData, ['url'], argv.url);
      const result = await client.put<unknown>(`/accounts/${argv.accountIdentifier}/custom_pages/${argv.identifier}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
