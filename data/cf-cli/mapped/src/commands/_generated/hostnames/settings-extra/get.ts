/**
 * get command
 * @generated from apis/hostnames/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetArgs {
  zoneId?: string;
  settingId: string;
  hostname: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, GetArgs> = {
  command: 'get [zoneId] <settingId> <hostname>',
  describe: 'Get the requested TLS setting for the hostname.',

  builder: (yargs: Argv): Argv<GetArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .positional('settingId', {
        type: 'string',
        description:
          'The TLS Setting name. The value type depends on the setting: - \`ciphers\`: value is an array of cipher suite strings (e.g., \`["ECDHE-RSA-AES128-GCM-SHA256", "AES128-GCM-SHA256"]\`) - \`min_tls_version\`: value is a TLS version string (\`"1.0"\`, \`"1.1"\`, \`"1.2"\`, or \`"1.3"\`) - \`http2\`: value is \`"on"\` or \`"off"\`',
        demandOption: true,
      })
      .positional('hostname', {
        type: 'string',
        description: 'The hostname for which the tls settings are set.',
        demandOption: true,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<GetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.settingId as string | undefined, 'settingId');
      validateResourceId(argv.hostname as string | undefined, 'hostname');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.hostnames.settingsextra.get(zoneId, argv.settingId, argv.hostname);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
