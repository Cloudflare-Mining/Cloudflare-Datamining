/**
 * commands-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface CommandsListArgs {
  page: number;
  'per-page': number;
  from?: string;
  to?: string;
  'device-id'?: string;
  'user-email'?: string;
  'command-type'?: string;
  status?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, CommandsListArgs> = {
  command: 'commands-list',
  describe:
    'Retrieves a paginated list of commands issued to devices under the specified account, optionally filtered by time range, device, or other parameters',

  builder: (yargs: Argv): Argv<CommandsListArgs> => {
    return yargs
      .option('page', {
        type: 'number',
        description: 'Page number for pagination',
      })
      .option('per-page', {
        type: 'number',
        description: 'Number of results per page',
      })
      .option('from', {
        type: 'string',
        description: 'Start time for the query in ISO (RFC3339 - ISO 8601) format',
        default: undefined,
      })
      .option('to', {
        type: 'string',
        description: 'End time for the query in ISO (RFC3339 - ISO 8601) format',
        default: undefined,
      })
      .option('device-id', {
        type: 'string',
        description: 'Unique identifier for a device',
        default: undefined,
      })
      .option('user-email', {
        type: 'string',
        description: 'Email tied to the device',
        default: undefined,
      })
      .option('command-type', {
        type: 'string',
        description: 'Optionally filter executed commands by command type',
        default: undefined,
      })
      .option('status', {
        type: 'string',
        description: 'Optionally filter executed commands by status',
        choices: ['PENDING_EXEC', 'PENDING_UPLOAD', 'SUCCESS', 'FAILED'] as const,
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
      }) as Argv<CommandsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CommandsListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.from !== undefined) params['from'] = argv.from;
      if (argv.to !== undefined) params['to'] = argv.to;
      if (argv.deviceId !== undefined) params['device_id'] = argv.deviceId;
      if (argv.userEmail !== undefined) params['user_email'] = argv.userEmail;
      if (argv.commandType !== undefined) params['command_type'] = argv.commandType;
      if (argv.status !== undefined) params['status'] = argv.status;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.dex.commandsList(
        accountId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
