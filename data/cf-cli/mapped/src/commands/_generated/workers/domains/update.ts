/**
 * update command
 * @generated from apis/workers/schema.ts
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

interface UpdateArgs {
  environment: string;
  hostname: string;
  service: string;
  'zone-name': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update',
  describe: 'Attaches a domain that routes traffic to a Worker.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .option('environment', {
        type: 'string',
        description: 'Worker environment associated with the domain.',
      })
      .option('hostname', {
        type: 'string',
        description:
          'Hostname of the domain. Can be either the zone apex or a subdomain of the zone. Requests to this hostname will be routed to the configured Worker.',
      })
      .option('service', {
        type: 'string',
        description:
          'Name of the Worker associated with the domain. Requests to the configured hostname will be routed to this Worker.',
      })
      .option('zone-name', {
        type: 'string',
        description: 'Name of the zone containing the domain hostname.',
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
      }) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers domains update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/workers/domains`,
          pathParams: {},
          body: {
            environment: argv.environment,
            hostname: argv.hostname,
            service: argv.service,
            zoneName: argv.zoneName,
          },
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
        const result = await client.put<unknown>(`/accounts/${accountId}/workers/domains`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.environment !== undefined) setNestedValue(bodyData, ['environment'], argv.environment);
      if (argv.hostname !== undefined) setNestedValue(bodyData, ['hostname'], argv.hostname);
      if (argv.service !== undefined) setNestedValue(bodyData, ['service'], argv.service);
      if (argv.zoneName !== undefined) setNestedValue(bodyData, ['zone_name'], argv.zoneName);
      const result = await client.put<unknown>(`/accounts/${accountId}/workers/domains`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
