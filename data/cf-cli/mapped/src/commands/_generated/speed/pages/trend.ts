/**
 * trend command
 * @generated from apis/speed/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';

interface TrendArgs {
  zoneId?: string;
  url: string;
  region: string;
  'device-type': string;
  start: string;
  end?: string;
  tz: string;
  metrics: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, TrendArgs> = {
  command: 'trend [zoneId] <url>',
  describe: 'Lists the core web vital metrics trend over time for a specific page.',

  builder: (yargs: Argv): Argv<TrendArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .positional('url', {
        type: 'string',
        description: 'A URL.',
        demandOption: true,
      })
      .option('region', {
        type: 'string',
        description: 'A test region.',
        choices: [
          'asia-east1',
          'asia-northeast1',
          'asia-northeast2',
          'asia-south1',
          'asia-southeast1',
          'australia-southeast1',
          'europe-north1',
          'europe-southwest1',
          'europe-west1',
          'europe-west2',
          'europe-west3',
          'europe-west4',
          'europe-west8',
          'europe-west9',
          'me-west1',
          'southamerica-east1',
          'us-central1',
          'us-east1',
          'us-east4',
          'us-south1',
          'us-west1',
        ] as const,
      })
      .option('device-type', {
        type: 'string',
        description: 'The type of device.',
        choices: ['DESKTOP', 'MOBILE'] as const,
      })
      .option('start', {
        type: 'string',
        description: 'Start',
      })
      .option('end', {
        type: 'string',
        description: 'End',
        default: undefined,
      })
      .option('tz', {
        type: 'string',
        description: 'The timezone of the start and end timestamps.',
      })
      .option('metrics', {
        type: 'string',
        description: 'A comma-separated list of metrics to include in the results.',
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<TrendArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TrendArgs>): Promise<void> => {
    try {
      validateResourceId(argv.url as string | undefined, 'url');

      const params: Record<string, unknown> = {};
      if (argv.region !== undefined) params['region'] = argv.region;
      if (argv.deviceType !== undefined) params['deviceType'] = argv.deviceType;
      if (argv.start !== undefined) params['start'] = argv.start;
      if (argv.end !== undefined) params['end'] = argv.end;
      if (argv.tz !== undefined) params['tz'] = argv.tz;
      if (argv.metrics !== undefined) params['metrics'] = argv.metrics;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.speed.pages.trend(
        zoneId,
        argv.url,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
