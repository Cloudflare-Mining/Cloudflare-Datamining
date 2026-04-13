/**
 * list command
 * @generated from apis/workers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  'zone-id'?: string;
  'zone-name'?: string;
  service?: string;
  hostname?: string;
  environment?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe: 'Lists all domains for an account.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('zone-id', {
        type: 'string',
        description: 'ID of the zone containing the domain hostname.',
        default: undefined,
      })
      .option('zone-name', {
        type: 'string',
        description: 'Name of the zone containing the domain hostname.',
        default: undefined,
      })
      .option('service', {
        type: 'string',
        description: 'Name of the Worker associated with the domain.',
        default: undefined,
      })
      .option('hostname', {
        type: 'string',
        description: 'Hostname of the domain.',
        default: undefined,
      })
      .option('environment', {
        type: 'string',
        description: 'Worker environment associated with the domain.',
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
      }) as Argv<ListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.zoneId !== undefined) params['zone_id'] = argv.zoneId;
      if (argv.zoneName !== undefined) params['zone_name'] = argv.zoneName;
      if (argv.service !== undefined) params['service'] = argv.service;
      if (argv.hostname !== undefined) params['hostname'] = argv.hostname;
      if (argv.environment !== undefined) params['environment'] = argv.environment;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.workers.domains.list(accountId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
