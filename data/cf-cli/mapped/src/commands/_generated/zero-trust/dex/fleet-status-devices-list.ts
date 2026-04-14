/**
 * fleet-status-devices-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface FleetStatusDevicesListArgs {
  to: string;
  from: string;
  page: string;
  'per-page': string;
  'sort-by'?: string;
  colo?: string;
  'device-id'?: string;
  mode?: string;
  status?: string;
  platform?: string;
  version?: string;
  source?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, FleetStatusDevicesListArgs> = {
  command: 'fleet-status-devices-list',
  describe: 'List details for devices using WARP',

  builder: (yargs: Argv): Argv<FleetStatusDevicesListArgs> => {
    return yargs
      .option('to', {
        type: 'string',
        description: 'Time range end in ISO format',
      })
      .option('from', {
        type: 'string',
        description: 'Time range beginning in ISO format',
      })
      .option('page', {
        type: 'string',
        description: 'Page number',
      })
      .option('per-page', {
        type: 'string',
        description: 'Number of results per page',
      })
      .option('sort-by', {
        type: 'string',
        description: 'Dimension to sort results by',
        choices: ['colo', 'device_id', 'mode', 'platform', 'status', 'timestamp', 'version'] as const,
        default: undefined,
      })
      .option('colo', {
        type: 'string',
        description: 'Cloudflare colo',
        default: undefined,
      })
      .option('device-id', {
        type: 'string',
        description: 'Device-specific ID, given as UUID v4',
        default: undefined,
      })
      .option('mode', {
        type: 'string',
        description: 'The mode under which the WARP client is run',
        default: undefined,
      })
      .option('status', {
        type: 'string',
        description: 'Network status',
        default: undefined,
      })
      .option('platform', {
        type: 'string',
        description: 'Operating system',
        default: undefined,
      })
      .option('version', {
        type: 'string',
        description: 'WARP client version',
        default: undefined,
      })
      .option('source', {
        type: 'string',
        description:
          "Source:   * \`hourly\` - device details aggregated hourly, up to 7 days prior   * \`last_seen\` - device details, up to 60 minutes prior. Time windows exceeding 60 minutes will be rejected from June 1st, 2026. Please use 'hourly' or 'raw' instead for longer time ranges.   * \`raw\` - device details, up to 7 days prior",
        choices: ['last_seen', 'hourly', 'raw'] as const,
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
      }) as Argv<FleetStatusDevicesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<FleetStatusDevicesListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.to !== undefined) params['to'] = argv.to;
      if (argv.from !== undefined) params['from'] = argv.from;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.sortBy !== undefined) params['sort_by'] = argv.sortBy;
      if (argv.colo !== undefined) params['colo'] = argv.colo;
      if (argv.deviceId !== undefined) params['device_id'] = argv.deviceId;
      if (argv.mode !== undefined) params['mode'] = argv.mode;
      if (argv.status !== undefined) params['status'] = argv.status;
      if (argv.platform !== undefined) params['platform'] = argv.platform;
      if (argv.version !== undefined) params['version'] = argv.version;
      if (argv.source !== undefined) params['source'] = argv.source;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.dex.fleetStatusDevicesList(
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
