/**
 * registrations-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface RegistrationsListArgs {
  'user-id'?: string;
  'seen-after'?: string;
  'seen-before'?: string;
  status?: string;
  'per-page'?: number;
  search?: string;
  'sort-by'?: string;
  'sort-order'?: string;
  cursor?: string;
  id?: string;
  'device-id'?: string;
  include?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RegistrationsListArgs> = {
  command: 'registrations-list',
  describe: 'Lists WARP registrations.',

  builder: (yargs: Argv): Argv<RegistrationsListArgs> => {
    return yargs
      .option('user-id', {
        type: 'string',
        description: 'Filter by user ID.',
        default: undefined,
      })
      .option('seen-after', {
        type: 'string',
        description: 'Filter by the last_seen timestamp - returns only registrations last seen after this timestamp.',
        default: undefined,
      })
      .option('seen-before', {
        type: 'string',
        description: 'Filter by the last_seen timestamp - returns only registrations last seen before this timestamp.',
        default: undefined,
      })
      .option('status', {
        type: 'string',
        description: "Filter by registration status. Defaults to 'active'.",
        choices: ['active', 'all', 'revoked'] as const,
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'The maximum number of devices to return in a single response.',
        default: undefined,
      })
      .option('search', {
        type: 'string',
        description: 'Filter by registration details.',
        default: undefined,
      })
      .option('sort-by', {
        type: 'string',
        description: 'The registration field to order results by.',
        choices: ['id', 'user.name', 'user.email', 'last_seen_at', 'created_at'] as const,
        default: undefined,
      })
      .option('sort-order', {
        type: 'string',
        description: 'Sort direction.',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('cursor', {
        type: 'string',
        description:
          'Opaque token indicating the starting position when requesting the next set of records. A cursor value can be obtained from the result_info.cursor field in the response.',
        default: undefined,
      })
      .option('id', {
        type: 'string',
        description: 'Filter by registration ID.',
        default: undefined,
      })
      .option('device-id', {
        type: 'string',
        description: 'Filter by WARP device ID.',
        default: undefined,
      })
      .option('include', {
        type: 'string',
        description:
          'Comma-separated list of additional information that should be included in the registration response. Supported values are: "policy".',
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
      }) as Argv<RegistrationsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RegistrationsListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.userId !== undefined) params['userId'] = argv.userId;
      if (argv.seenAfter !== undefined) params['seen_after'] = argv.seenAfter;
      if (argv.seenBefore !== undefined) params['seen_before'] = argv.seenBefore;
      if (argv.status !== undefined) params['status'] = argv.status;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.search !== undefined) params['search'] = argv.search;
      if (argv.sortBy !== undefined) params['sort_by'] = argv.sortBy;
      if (argv.sortOrder !== undefined) params['sort_order'] = argv.sortOrder;
      if (argv.cursor !== undefined) params['cursor'] = argv.cursor;
      if (argv.id !== undefined) params['id'] = argv.id;
      if (argv.deviceId !== undefined) params['deviceId'] = argv.deviceId;
      if (argv.include !== undefined) params['include'] = argv.include;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.devices.registrationsList(
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
