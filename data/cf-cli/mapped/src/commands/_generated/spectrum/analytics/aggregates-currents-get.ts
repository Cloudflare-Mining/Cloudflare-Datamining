/**
 * aggregates-currents-get command
 * @generated from apis/spectrum/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface AggregatesCurrentsGetArgs {
  zoneId?: string;
  'app-id'?: string;
  'colo-name'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, AggregatesCurrentsGetArgs> = {
  command: 'aggregates-currents-get [zoneId]',
  describe:
    'Retrieves analytics aggregated from the last minute of usage on Spectrum applications underneath a given zone.',

  builder: (yargs: Argv): Argv<AggregatesCurrentsGetArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('app-id', {
        type: 'string',
        description:
          'Comma-delimited list of Spectrum Application Id(s). If provided, the response will be limited to Spectrum Application Id(s) that match.',
        default: undefined,
      })
      .option('colo-name', {
        type: 'string',
        description: 'Co-location identifier.',
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
      }) as Argv<AggregatesCurrentsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AggregatesCurrentsGetArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.appID !== undefined) params['appID'] = argv.appID;
      if (argv.coloName !== undefined) params['colo_name'] = argv.coloName;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.spectrum.analytics.aggregatesCurrentsGet(
        zoneId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
