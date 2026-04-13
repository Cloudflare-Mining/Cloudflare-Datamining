/**
 * hostname-routes-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface HostnameRoutesListArgs {
  id?: string;
  hostname?: string;
  'tunnel-id'?: string;
  comment?: string;
  'existed-at'?: string;
  'is-deleted'?: boolean;
  'per-page'?: string;
  page?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, HostnameRoutesListArgs> = {
  command: 'hostname-routes-list',
  describe: 'Lists and filters hostname routes in an account.',

  builder: (yargs: Argv): Argv<HostnameRoutesListArgs> => {
    return yargs
      .option('id', {
        type: 'string',
        description: 'The hostname route ID.',
        default: undefined,
      })
      .option('hostname', {
        type: 'string',
        description:
          'If set, only list hostname routes that contain a substring of the given value, the filter is case-insensitive.',
        default: undefined,
      })
      .option('tunnel-id', {
        type: 'string',
        description: 'If set, only list hostname routes that point to a specific tunnel.',
        default: undefined,
      })
      .option('comment', {
        type: 'string',
        description: 'If set, only list hostname routes with the given comment.',
        default: undefined,
      })
      .option('existed-at', {
        type: 'string',
        description:
          'If provided, include only resources that were created (and not deleted) before this time. URL encoded.',
        default: undefined,
      })
      .option('is-deleted', {
        type: 'boolean',
        description: 'If \`true\`, only return deleted hostname routes. If \`false\`, exclude deleted hostname routes.',
        default: false,
      })
      .option('per-page', {
        type: 'string',
        description: 'Number of results to display.',
        default: undefined,
      })
      .option('page', {
        type: 'string',
        description: 'Page number of paginated results.',
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
      }) as Argv<HostnameRoutesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<HostnameRoutesListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.id !== undefined) params['id'] = argv.id;
      if (argv.hostname !== undefined) params['hostname'] = argv.hostname;
      if (argv.tunnelId !== undefined) params['tunnel_id'] = argv.tunnelId;
      if (argv.comment !== undefined) params['comment'] = argv.comment;
      if (argv.existedAt !== undefined) params['existed_at'] = argv.existedAt;
      if (argv.isDeleted !== undefined) params['is_deleted'] = argv.isDeleted;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.page !== undefined) params['page'] = argv.page;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.networks.hostnameRoutesList(
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
