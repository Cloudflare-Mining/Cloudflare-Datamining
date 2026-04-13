/**
 * create command
 * @generated from apis/keyless-certificates/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface CreateArgs {
  zoneId?: string;
  'bundle-method'?: string;
  certificate: string;
  host: string;
  name?: string;
  port: number;
  'tunnel-private-ip': string;
  'tunnel-vnet-id': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create [zoneId]',
  describe:
    'Creates a Keyless SSL configuration that allows SSL/TLS termination without exposing private keys to Cloudflare. Keys remain on your infrastructure.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('bundle-method', {
        type: 'string',
        description:
          'A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.',
        choices: ['ubiquitous', 'optimal', 'force'] as const,
        default: undefined,
      })
      .option('certificate', {
        type: 'string',
        description: "The zone's SSL certificate or SSL certificate and intermediate(s).",
      })
      .option('host', {
        type: 'string',
        description: 'The keyless SSL name.',
      })
      .option('name', {
        type: 'string',
        description: 'The keyless SSL name.',
        default: undefined,
      })
      .option('port', {
        type: 'number',
        description: "The keyless SSL port used to communicate between Cloudflare and the client's Keyless SSL server.",
      })
      .option('tunnel-private-ip', {
        type: 'string',
        description: 'Private IP of the Key Server Host',
      })
      .option('tunnel-vnet-id', {
        type: 'string',
        description: 'Cloudflare Tunnel Virtual Network ID',
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
      .choices('bundle-method', ['ubiquitous', 'optimal', 'force'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf keyless-certificates create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/keyless_certificates`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: {
            bundleMethod: argv.bundleMethod,
            certificate: argv.certificate,
            host: argv.host,
            name: argv.name,
            port: argv.port,
            tunnelPrivateIp: argv.tunnelPrivateIp,
            tunnelVnetId: argv.tunnelVnetId,
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
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/zones/${zoneId}/keyless_certificates`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.bundleMethod !== undefined) setNestedValue(bodyData, ['bundle_method'], argv.bundleMethod);
      if (argv.certificate !== undefined) setNestedValue(bodyData, ['certificate'], argv.certificate);
      if (argv.host !== undefined) setNestedValue(bodyData, ['host'], argv.host);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.port !== undefined) setNestedValue(bodyData, ['port'], argv.port);
      if (argv.tunnelPrivateIp !== undefined) setNestedValue(bodyData, ['tunnel', 'private_ip'], argv.tunnelPrivateIp);
      if (argv.tunnelVnetId !== undefined) setNestedValue(bodyData, ['tunnel', 'vnet_id'], argv.tunnelVnetId);
      const result = await client.post<unknown>(`/zones/${zoneId}/keyless_certificates`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
