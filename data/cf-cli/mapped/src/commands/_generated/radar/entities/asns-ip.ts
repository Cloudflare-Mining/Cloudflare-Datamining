/**
 * asns-ip command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface AsnsIPArgs {
  ip: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, AsnsIPArgs> = {
  command: 'asns-ip',
  describe:
    'Retrieves the requested autonomous system information based on IP address. Population estimates come from APNIC (refer to https://labs.apnic.net/?p=526).',

  builder: (yargs: Argv): Argv<AsnsIPArgs> => {
    return yargs
      .option('ip', {
        type: 'string',
        description: 'IP address.',
      })
      .option('format', {
        type: 'string',
        description: 'Format in which results will be returned.',
        choices: ['JSON', 'CSV'] as const,
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
      }) as Argv<AsnsIPArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AsnsIPArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.ip !== undefined) params['ip'] = argv.ip;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.entities.asnsIp(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
