/**
 * tsigs_create command
 * @generated from apis/dns/schema.ts
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

interface TsigsCreateArgs {
  algo: string;
  name: string;
  secret: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, TsigsCreateArgs> = {
  command: 'tsigs_create',
  describe: 'Create TSIG.',

  builder: (yargs: Argv): Argv<TsigsCreateArgs> => {
    return yargs
      .option('algo', {
        type: 'string',
        description: 'TSIG algorithm.',
      })
      .option('name', {
        type: 'string',
        description: 'TSIG key name.',
      })
      .option('secret', {
        type: 'string',
        description: 'TSIG secret.',
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
      }) as Argv<TsigsCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TsigsCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf dns zone_transfers tsigs_create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/secondary_dns/tsigs`,
          pathParams: {},
          body: { algo: argv.algo, name: argv.name, secret: argv.secret },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/secondary_dns/tsigs`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.algo !== undefined) setNestedValue(bodyData, ['algo'], argv.algo);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.secret !== undefined) setNestedValue(bodyData, ['secret'], argv.secret);
      const result = await client.post<unknown>(`/accounts/${accountId}/secondary_dns/tsigs`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
