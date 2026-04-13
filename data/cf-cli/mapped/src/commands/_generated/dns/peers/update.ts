/**
 * update command
 * @generated from apis/dns/schema.ts
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

interface UpdateArgs {
  peerId: string;
  ip?: string;
  'ixfr-enable'?: boolean;
  name: string;
  port?: number;
  'tsig-id'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <peerId>',
  describe: 'Modify Peer.',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('peerId', {
        type: 'string',
        description: 'Peer ID',
        demandOption: true,
      })
      .option('ip', {
        type: 'string',
        description:
          'IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to. For primary zones this IP defines the IP of the secondary nameserver Cloudflare will NOTIFY upon zone changes. For secondary zones this IP defines the IP of the primary nameserver Cloudflare will send AXFR/IXFR requests to.',
        default: undefined,
      })
      .option('ixfr-enable', {
        type: 'boolean',
        description: 'Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones.',
        default: false,
      })
      .option('name', {
        type: 'string',
        description: 'The name of the peer.',
      })
      .option('port', {
        type: 'number',
        description: 'DNS port of primary or secondary nameserver, depending on what zone this peer is linked to.',
        default: undefined,
      })
      .option('tsig-id', {
        type: 'string',
        description: 'TSIG authentication will be used for zone transfer if configured.',
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
      }) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.peerId as string | undefined, 'peerId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf dns peers update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/secondary_dns/peers/${argv.peerId ?? '<peerId>'}`,
          pathParams: { peerId: String(argv.peerId ?? '') },
          body: { ip: argv.ip, ixfrEnable: argv.ixfrEnable, name: argv.name, port: argv.port, tsigId: argv.tsigId },
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
        const result = await client.put<unknown>(`/accounts/${accountId}/secondary_dns/peers/${argv.peerId}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.ip !== undefined) setNestedValue(bodyData, ['ip'], argv.ip);
      if (argv.ixfrEnable !== undefined) setNestedValue(bodyData, ['ixfr_enable'], argv.ixfrEnable);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.port !== undefined) setNestedValue(bodyData, ['port'], argv.port);
      if (argv.tsigId !== undefined) setNestedValue(bodyData, ['tsig_id'], argv.tsigId);
      const result = await client.put<unknown>(`/accounts/${accountId}/secondary_dns/peers/${argv.peerId}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
