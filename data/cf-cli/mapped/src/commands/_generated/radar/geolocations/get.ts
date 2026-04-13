/**
 * get command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetArgs {
  geoId: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetArgs> = {
  command: 'get <geoId>',
  describe:
    'Retrieves the requested Geolocation information. Geolocation names can be localized by sending an \`Accept-Language\` HTTP header with a BCP 47 language tag (e.g., \`Accept-Language: pt-PT\`). The full quality-value chain is supported (e.g., \`pt-PT,pt;q=0.9,en;q=0.8\`).',

  builder: (yargs: Argv): Argv<GetArgs> => {
    return yargs
      .positional('geoId', {
        type: 'string',
        description: 'Geolocation ID. Refer to [GeoNames](https://download.geonames.org/export/dump/readme.txt)',
        demandOption: true,
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
      }) as Argv<GetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.geoId as string | undefined, 'geoId');

      const params: Record<string, unknown> = {};
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.geolocations.get(
        argv.geoId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
