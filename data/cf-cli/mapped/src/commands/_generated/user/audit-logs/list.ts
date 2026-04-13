/**
 * list command
 * @generated from apis/user/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  id?: string;
  export?: boolean;
  'action-type'?: string;
  'actor-ip'?: string;
  'actor-email'?: string;
  since?: string;
  before?: string;
  'zone-name'?: string;
  direction?: string;
  'per-page'?: number;
  page?: number;
  'hide-user-logs'?: boolean;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe:
    'Gets a list of audit logs for a user account. Can be filtered by who made the change, on which zone, and the timeframe of the change.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('id', {
        type: 'string',
        description: 'Finds a specific log by its ID.',
        default: undefined,
      })
      .option('export', {
        type: 'boolean',
        description: 'Indicates that this request is an export of logs in CSV format.',
        default: false,
      })
      .option('action-type', {
        type: 'string',
        description: 'Filters by the action type.',
        default: undefined,
      })
      .option('actor-ip', {
        type: 'string',
        description:
          'Filters by the IP address of the request that made the change by specific IP address or valid CIDR Range.',
        default: undefined,
      })
      .option('actor-email', {
        type: 'string',
        description: 'Filters by the email address of the actor that made the change.',
        default: undefined,
      })
      .option('since', {
        type: 'string',
        description: 'Since',
        default: undefined,
      })
      .option('before', {
        type: 'string',
        description: 'Before',
        default: undefined,
      })
      .option('zone-name', {
        type: 'string',
        description: 'Filters by the name of the zone associated to the change.',
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'Changes the direction of the chronological sorting.',
        choices: ['desc', 'asc'] as const,
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Sets the number of results to return per page.',
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Defines which page of results to return.',
        default: undefined,
      })
      .option('hide-user-logs', {
        type: 'boolean',
        description: 'Indicates whether or not to hide user level audit logs.',
        default: false,
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
      if (argv.id !== undefined) params['id'] = argv.id;
      if (argv.export !== undefined) params['export'] = argv.export;
      if (argv.actionType !== undefined) params['actionType'] = argv.actionType;
      if (argv.actorIp !== undefined) params['actorIp'] = argv.actorIp;
      if (argv.actorEmail !== undefined) params['actorEmail'] = argv.actorEmail;
      if (argv.since !== undefined) params['since'] = argv.since;
      if (argv.before !== undefined) params['before'] = argv.before;
      if (argv.zoneName !== undefined) params['zoneName'] = argv.zoneName;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.hideUserLogs !== undefined) params['hide_user_logs'] = argv.hideUserLogs;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.user.auditlogs.list(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
