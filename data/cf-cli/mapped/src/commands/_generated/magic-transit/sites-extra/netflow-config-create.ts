/**
 * netflow-config-create command
 * @generated from apis/magic-transit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface NetflowConfigCreateArgs {
  siteId: string;
  'active-timeout'?: number;
  'collector-ip'?: string;
  'collector-port'?: number;
  'inactive-timeout'?: number;
  'sampling-rate'?: number;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, NetflowConfigCreateArgs> = {
  command: 'netflow-config-create <siteId>',
  describe: 'Creates a NetFlow configuration for a site.',

  builder: (yargs: Argv): Argv<NetflowConfigCreateArgs> => {
    return yargs
      .positional('siteId', {
        type: 'string',
        description: 'Identifier',
        demandOption: true,
      })
      .option('active-timeout', {
        type: 'number',
        description: 'Timeout in seconds for active flows.',
        default: undefined,
      })
      .option('collector-ip', {
        type: 'string',
        description: 'IPv4 address of the NetFlow collector.',
        default: undefined,
      })
      .option('collector-port', {
        type: 'number',
        description: 'UDP port of the NetFlow collector.',
        default: undefined,
      })
      .option('inactive-timeout', {
        type: 'number',
        description: 'Timeout in seconds for inactive flows.',
        default: undefined,
      })
      .option('sampling-rate', {
        type: 'number',
        description: 'Sampling rate for NetFlow records (1 = every packet).',
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      }) as Argv<NetflowConfigCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<NetflowConfigCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.siteId as string | undefined, 'siteId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf magic-transit sites-extra netflow-config-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/magic/sites/${argv.siteId ?? '<siteId>'}/netflow_config`,
          pathParams: { siteId: String(argv.siteId ?? '') },
          body: {
            activeTimeout: argv.activeTimeout,
            collectorIp: argv.collectorIp,
            collectorPort: argv.collectorPort,
            inactiveTimeout: argv.inactiveTimeout,
            samplingRate: argv.samplingRate,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/magic/sites/${argv.siteId}/netflow_config`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.activeTimeout !== undefined) setNestedValue(bodyData, ['active_timeout'], argv.activeTimeout);
      if (argv.collectorIp !== undefined) setNestedValue(bodyData, ['collector_ip'], argv.collectorIp);
      if (argv.collectorPort !== undefined) setNestedValue(bodyData, ['collector_port'], argv.collectorPort);
      if (argv.inactiveTimeout !== undefined) setNestedValue(bodyData, ['inactive_timeout'], argv.inactiveTimeout);
      if (argv.samplingRate !== undefined) setNestedValue(bodyData, ['sampling_rate'], argv.samplingRate);
      const result = await client.post<unknown>(`/accounts/${accountId}/magic/sites/${argv.siteId}/netflow_config`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
