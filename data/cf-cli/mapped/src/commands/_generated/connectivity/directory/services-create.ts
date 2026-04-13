/**
 * services-create command
 * @generated from apis/connectivity/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface ServicesCreateArgs {
  name: string;
  type: string;
  'http-port'?: number;
  'https-port'?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ServicesCreateArgs> = {
  command: 'services-create',
  describe: 'Creates a new connectivity service entry in the directory.',

  builder: (yargs: Argv): Argv<ServicesCreateArgs> => {
    return yargs
      .option('name', {
        type: 'string',
        description: 'The name field',
      })
      .option('type', {
        type: 'string',
        description: 'The type field',
        choices: ['http'] as const,
      })
      .option('http-port', {
        type: 'number',
        description: 'The http_port field',
        default: undefined,
      })
      .option('https-port', {
        type: 'number',
        description: 'The https_port field',
        default: undefined,
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
      .choices('type', ['http'] as const) as Argv<ServicesCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ServicesCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf connectivity directory services-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/connectivity/directory/services`,
          pathParams: {},
          body: { name: argv.name, type: argv.type, httpPort: argv.httpPort, httpsPort: argv.httpsPort },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/connectivity/directory/services`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.type !== undefined) setNestedValue(bodyData, ['type'], argv.type);
      if (argv.httpPort !== undefined) setNestedValue(bodyData, ['http_port'], argv.httpPort);
      if (argv.httpsPort !== undefined) setNestedValue(bodyData, ['https_port'], argv.httpsPort);
      const result = await client.post<unknown>(`/accounts/${accountId}/connectivity/directory/services`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
