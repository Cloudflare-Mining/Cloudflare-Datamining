/**
 * locations-get command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';

interface LocationsGetArgs {
  location: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, LocationsGetArgs> = {
  command: 'locations-get <location>',
  describe:
    'Retrieves the requested location information. (A confidence level below \`5\` indicates a low level of confidence in the traffic data - normally this happens because Cloudflare has a small amount of traffic from/to this location).',

  builder: (yargs: Argv): Argv<LocationsGetArgs> => {
    return yargs
      .positional('location', {
        type: 'string',
        description: 'Location alpha-2 code.',
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
      }) as Argv<LocationsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<LocationsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.location as string | undefined, 'location');

      const params: Record<string, unknown> = {};
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.entities.locationsGet(
        argv.location,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
