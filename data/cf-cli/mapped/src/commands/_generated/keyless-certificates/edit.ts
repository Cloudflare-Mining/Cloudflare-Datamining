/**
 * edit command
 * @generated from apis/keyless-certificates/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../lib/input-validation.js';
import { formatDryRun } from '../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../lib/body-parser.js';

interface EditArgs {
  keylessCertificateId: string;
  zoneId: string;
  enabled?: boolean;
  host?: string;
  name?: string;
  port?: number;
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

const command: CommandModule<object, EditArgs> = {
  command: 'edit <keylessCertificateId> [zoneId]',
  describe: 'This will update attributes of a Keyless SSL. Consists of one or more of the following: host,name,port.',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('keylessCertificateId', {
        type: 'string',
        description: 'Identifier.',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('enabled', {
        type: 'boolean',
        description: 'Whether or not the Keyless SSL is on or off.',
        default: false,
      })
      .option('host', {
        type: 'string',
        description: 'The keyless SSL name.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'The keyless SSL name.',
        default: undefined,
      })
      .option('port', {
        type: 'number',
        description: "The keyless SSL port used to communicate between Cloudflare and the client's Keyless SSL server.",
        default: undefined,
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
      }) as Argv<EditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.keylessCertificateId as string | undefined, 'keylessCertificateId');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf keyless-certificates edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/keyless_certificates/${argv.keylessCertificateId ?? '<keylessCertificateId>'}`,
          pathParams: {
            keylessCertificateId: String(argv.keylessCertificateId ?? ''),
            zoneId: String(argv.zoneId ?? ''),
          },
          body: {
            enabled: argv.enabled,
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
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.patch<unknown>(
          `/zones/${argv.zoneId}/keyless_certificates/${argv.keylessCertificateId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.enabled !== undefined) setNestedValue(bodyData, ['enabled'], argv.enabled);
      if (argv.host !== undefined) setNestedValue(bodyData, ['host'], argv.host);
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.port !== undefined) setNestedValue(bodyData, ['port'], argv.port);
      if (argv.tunnelPrivateIp !== undefined) setNestedValue(bodyData, ['tunnel', 'private_ip'], argv.tunnelPrivateIp);
      if (argv.tunnelVnetId !== undefined) setNestedValue(bodyData, ['tunnel', 'vnet_id'], argv.tunnelVnetId);
      const result = await client.patch<unknown>(
        `/zones/${argv.zoneId}/keyless_certificates/${argv.keylessCertificateId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
