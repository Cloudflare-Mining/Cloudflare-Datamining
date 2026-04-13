/**
 * devices-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface DevicesListArgs {
  cursor?: string;
  'sort-by'?: string;
  'sort-order'?: string;
  'last-seen-user-email'?: string;
  'seen-after'?: string;
  'seen-before'?: string;
  'per-page'?: number;
  search?: string;
  'active-registrations'?: string;
  id?: string;
  include?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DevicesListArgs> = {
  command: 'devices-list',
  describe: 'Lists WARP devices.',

  builder: (yargs: Argv): Argv<DevicesListArgs> => {
    return yargs
      .option('cursor', {
        type: 'string',
        description:
          'Opaque token indicating the starting position when requesting the next set of records. A cursor value can be obtained from the result_info.cursor field in the response.',
        default: undefined,
      })
      .option('sort-by', {
        type: 'string',
        description: 'The device field to order results by.',
        choices: [
          'name',
          'id',
          'client_version',
          'last_seen_user.email',
          'last_seen_at',
          'active_registrations',
          'created_at',
        ] as const,
        default: undefined,
      })
      .option('sort-order', {
        type: 'string',
        description: 'Sort direction.',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('last-seen-user-email', {
        type: 'string',
        description: "Filter by the last seen user's email.",
        default: undefined,
      })
      .option('seen-after', {
        type: 'string',
        description: 'Filter by the last_seen timestamp - returns only devices last seen after this timestamp.',
        default: undefined,
      })
      .option('seen-before', {
        type: 'string',
        description: 'Filter by the last_seen timestamp - returns only devices last seen before this timestamp.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'The maximum number of devices to return in a single response.',
        default: undefined,
      })
      .option('search', {
        type: 'string',
        description: 'Search by device details.',
        default: undefined,
      })
      .option('active-registrations', {
        type: 'string',
        description:
          'Include or exclude devices with active registrations. The default is "only" - return only devices with active registrations.',
        choices: ['include', 'only', 'exclude'] as const,
        default: undefined,
      })
      .option('id', {
        type: 'string',
        description: 'Filter by a one or more device IDs.',
        default: undefined,
      })
      .option('include', {
        type: 'string',
        description:
          'Comma-separated list of additional information that should be included in the device response. Supported values are: "last_seen_registration.policy".',
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
      }) as Argv<DevicesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DevicesListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.cursor !== undefined) params['cursor'] = argv.cursor;
      if (argv.sortBy !== undefined) params['sort_by'] = argv.sortBy;
      if (argv.sortOrder !== undefined) params['sort_order'] = argv.sortOrder;
      if (argv.lastSeenUserEmail !== undefined) params['lastSeenUserEmail'] = argv.lastSeenUserEmail;
      if (argv.seenAfter !== undefined) params['seen_after'] = argv.seenAfter;
      if (argv.seenBefore !== undefined) params['seen_before'] = argv.seenBefore;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.search !== undefined) params['search'] = argv.search;
      if (argv.activeRegistrations !== undefined) params['active_registrations'] = argv.activeRegistrations;
      if (argv.id !== undefined) params['id'] = argv.id;
      if (argv.include !== undefined) params['include'] = argv.include;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.devices.devicesList(
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
