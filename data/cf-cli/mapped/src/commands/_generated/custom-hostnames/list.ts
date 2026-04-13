/**
 * list command
 * @generated from apis/custom-hostnames/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';

interface ListArgs {
  zoneId?: string;
  hostname?: string;
  'hostname-contain'?: string;
  id?: string;
  page?: number;
  'per-page'?: number;
  order?: string;
  direction?: string;
  'ssl-status'?: string;
  'hostname-status'?: string;
  'certificate-authority'?: string;
  wildcard?: boolean;
  'custom-origin-server'?: string;
  ssl?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list [zoneId]',
  describe: 'List, search, sort, and filter all of your custom hostnames.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('hostname', {
        type: 'string',
        description:
          "Fully qualified domain name to match against. This parameter cannot be used with the 'id' parameter.",
        default: undefined,
      })
      .option('hostname-contain', {
        type: 'string',
        description:
          "Filters hostnames by a substring match on the hostname value. This parameter cannot be used with the 'id' parameter.",
        default: undefined,
      })
      .option('id', {
        type: 'string',
        description:
          "Hostname ID to match against. This ID was generated and returned during the initial custom_hostname creation. This parameter cannot be used with the 'hostname' parameter.",
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Page number of paginated results.',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'Number of hostnames per page.',
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: 'Field to order hostnames by.',
        choices: ['ssl', 'ssl_status'] as const,
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'Direction to order hostnames.',
        choices: ['asc', 'desc'] as const,
        default: undefined,
      })
      .option('ssl-status', {
        type: 'string',
        description: 'Filter by SSL certificate status.',
        choices: [
          'initializing',
          'pending_validation',
          'deleted',
          'pending_issuance',
          'pending_deployment',
          'pending_deletion',
          'pending_expiration',
          'expired',
          'active',
          'initializing_timed_out',
          'validation_timed_out',
          'issuance_timed_out',
          'deployment_timed_out',
          'deletion_timed_out',
          'pending_cleanup',
          'staging_deployment',
          'staging_active',
          'deactivating',
          'inactive',
          'backup_issued',
          'holding_deployment',
        ] as const,
        default: undefined,
      })
      .option('hostname-status', {
        type: 'string',
        description: "Filter by the hostname's activation status.",
        choices: [
          'active',
          'pending',
          'active_redeploying',
          'moved',
          'pending_deletion',
          'deleted',
          'pending_blocked',
          'pending_migration',
          'pending_provisioned',
          'test_pending',
          'test_active',
          'test_active_apex',
          'test_blocked',
          'test_failed',
          'provisioned',
          'blocked',
        ] as const,
        default: undefined,
      })
      .option('certificate-authority', {
        type: 'string',
        description: 'Filter by the certificate authority that issued the SSL certificate.',
        choices: ['google', 'lets_encrypt', 'ssl_com'] as const,
        default: undefined,
      })
      .option('wildcard', {
        type: 'boolean',
        description: 'Filter by whether the custom hostname is a wildcard hostname.',
        default: false,
      })
      .option('custom-origin-server', {
        type: 'string',
        description: 'Filter by custom origin server name.',
        default: undefined,
      })
      .option('ssl', {
        type: 'string',
        description: 'Whether to filter hostnames based on if they have SSL enabled.',
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
      if (argv.hostname !== undefined) params['hostname'] = argv.hostname;
      if (argv.hostnameContain !== undefined) params['hostnameContain'] = argv.hostnameContain;
      if (argv.id !== undefined) params['id'] = argv.id;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      if (argv.sslStatus !== undefined) params['ssl_status'] = argv.sslStatus;
      if (argv.hostnameStatus !== undefined) params['hostname_status'] = argv.hostnameStatus;
      if (argv.certificateAuthority !== undefined) params['certificate_authority'] = argv.certificateAuthority;
      if (argv.wildcard !== undefined) params['wildcard'] = argv.wildcard;
      if (argv.customOriginServer !== undefined) params['custom_origin_server'] = argv.customOriginServer;
      if (argv.ssl !== undefined) params['ssl'] = argv.ssl;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.customHostnames.list(zoneId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
