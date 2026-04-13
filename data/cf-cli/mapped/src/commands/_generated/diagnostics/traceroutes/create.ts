/**
 * create command
 * @generated from apis/diagnostics/schema.ts
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

interface CreateArgs {
  colos?: string;
  'options-max-ttl'?: number;
  'options-packet-type'?: string;
  'options-packets-per-ttl'?: number;
  'options-port'?: number;
  'options-wait-time'?: number;
  targets: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Run traceroutes from Cloudflare colos.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('colos', {
        type: 'string',
        description:
          'If no source colo names specified, all colos will be used. China colos are unavailable for traceroutes.',
        default: undefined,
      })
      .option('options-max-ttl', {
        type: 'number',
        description: 'Max TTL.',
        default: undefined,
      })
      .option('options-packet-type', {
        type: 'string',
        description: 'Type of packet sent.',
        choices: ['icmp', 'tcp', 'udp', 'gre', 'gre+icmp'] as const,
        default: undefined,
      })
      .option('options-packets-per-ttl', {
        type: 'number',
        description: 'Number of packets sent at each TTL.',
        default: undefined,
      })
      .option('options-port', {
        type: 'number',
        description:
          'For UDP and TCP, specifies the destination port. For ICMP, specifies the initial ICMP sequence value. Default value 0 will choose the best value to use for each protocol.',
        default: undefined,
      })
      .option('options-wait-time', {
        type: 'number',
        description: 'Set the time (in seconds) to wait for a response to a probe.',
        default: undefined,
      })
      .option('targets', {
        type: 'string',
        description: 'The targets field',
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
      })
      .choices('options-packet-type', ['icmp', 'tcp', 'udp', 'gre', 'gre+icmp'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf diagnostics traceroutes create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/diagnostics/traceroute`,
          pathParams: {},
          body: {
            colos: argv.colos,
            optionsMaxTtl: argv.optionsMaxTtl,
            optionsPacketType: argv.optionsPacketType,
            optionsPacketsPerTtl: argv.optionsPacketsPerTtl,
            optionsPort: argv.optionsPort,
            optionsWaitTime: argv.optionsWaitTime,
            targets: argv.targets,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/diagnostics/traceroute`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.colos !== undefined) setNestedValue(bodyData, ['colos'], argv.colos);
      if (argv.optionsMaxTtl !== undefined) setNestedValue(bodyData, ['options', 'max_ttl'], argv.optionsMaxTtl);
      if (argv.optionsPacketType !== undefined)
        setNestedValue(bodyData, ['options', 'packet_type'], argv.optionsPacketType);
      if (argv.optionsPacketsPerTtl !== undefined)
        setNestedValue(bodyData, ['options', 'packets_per_ttl'], argv.optionsPacketsPerTtl);
      if (argv.optionsPort !== undefined) setNestedValue(bodyData, ['options', 'port'], argv.optionsPort);
      if (argv.optionsWaitTime !== undefined) setNestedValue(bodyData, ['options', 'wait_time'], argv.optionsWaitTime);
      if (argv.targets !== undefined) setNestedValue(bodyData, ['targets'], argv.targets);
      const result = await client.post<unknown>(`/accounts/${accountId}/diagnostics/traceroute`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
