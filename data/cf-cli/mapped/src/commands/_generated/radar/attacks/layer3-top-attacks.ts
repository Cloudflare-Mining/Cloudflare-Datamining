/**
 * layer3-top-attacks command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface Layer3TopAttacksArgs {
  limit?: number;
  name?: string;
  'date-range'?: string;
  'date-start'?: string;
  'date-end'?: string;
  location?: string;
  continent?: string;
  'ip-version'?: string;
  protocol?: string;
  'limit-direction'?: string;
  'limit-per-location'?: number;
  magnitude?: string;
  normalization?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, Layer3TopAttacksArgs> = {
  command: 'layer3-top-attacks',
  describe:
    'Retrieves the top layer 3 attacks from origin to target location. Values are a percentage out of the total layer 3 attacks (with billing country). You can optionally limit the number of attacks by origin/target location (useful if all the top attacks are from or to the same location).',

  builder: (yargs: Argv): Argv<Layer3TopAttacksArgs> => {
    return yargs
      .option('limit', {
        type: 'number',
        description: 'Limits the number of objects returned in the response.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'Array of names used to label the series in the response.',
        default: undefined,
      })
      .option('date-range', {
        type: 'string',
        description:
          'Filters results by date range. For example, use \`7d\` and \`7dcontrol\` to compare this week with the previous week. Use this parameter or set specific start and end dates (\`dateStart\` and \`dateEnd\` parameters).',
        default: undefined,
      })
      .option('date-start', {
        type: 'string',
        description: 'Start of the date range.',
        default: undefined,
      })
      .option('date-end', {
        type: 'string',
        description: 'End of the date range (inclusive).',
        default: undefined,
      })
      .option('location', {
        type: 'string',
        description:
          'Filters results by location. Specify a comma-separated list of alpha-2 codes. Prefix with \`-\` to exclude locations from results. For example, \`-US,PT\` excludes results from the US, but includes results from PT.',
        default: undefined,
      })
      .option('continent', {
        type: 'string',
        description:
          'Filters results by continent. Specify a comma-separated list of alpha-2 codes. Prefix with \`-\` to exclude continents from results. For example, \`-EU,NA\` excludes results from EU, but includes results from NA.',
        default: undefined,
      })
      .option('ip-version', {
        type: 'string',
        description: 'Filters results by IP version (Ipv4 vs. IPv6).',
        default: undefined,
      })
      .option('protocol', {
        type: 'string',
        description: 'Filters the results by layer 3/4 protocol.',
        default: undefined,
      })
      .option('limit-direction', {
        type: 'string',
        description: 'Specifies whether the \`limitPerLocation\` applies to the source or target location.',
        choices: ['ORIGIN', 'TARGET'] as const,
        default: undefined,
      })
      .option('limit-per-location', {
        type: 'number',
        description: 'Limits the number of attacks per origin/target (refer to \`limitDirection\` parameter) location.',
        default: undefined,
      })
      .option('magnitude', {
        type: 'string',
        description:
          'Orders results based on attack magnitude, defined by total mitigated bytes or total mitigated attacks.',
        choices: ['MITIGATED_BYTES', 'MITIGATED_ATTACKS'] as const,
        default: undefined,
      })
      .option('normalization', {
        type: 'string',
        description:
          'Normalization method applied to the results. Refer to [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).',
        choices: ['PERCENTAGE', 'MIN_MAX'] as const,
        default: undefined,
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
      }) as Argv<Layer3TopAttacksArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<Layer3TopAttacksArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.dateRange !== undefined) params['dateRange'] = argv.dateRange;
      if (argv.dateStart !== undefined) params['dateStart'] = argv.dateStart;
      if (argv.dateEnd !== undefined) params['dateEnd'] = argv.dateEnd;
      if (argv.location !== undefined) params['location'] = argv.location;
      if (argv.continent !== undefined) params['continent'] = argv.continent;
      if (argv.ipVersion !== undefined) params['ipVersion'] = argv.ipVersion;
      if (argv.protocol !== undefined) params['protocol'] = argv.protocol;
      if (argv.limitDirection !== undefined) params['limitDirection'] = argv.limitDirection;
      if (argv.limitPerLocation !== undefined) params['limitPerLocation'] = argv.limitPerLocation;
      if (argv.magnitude !== undefined) params['magnitude'] = argv.magnitude;
      if (argv.normalization !== undefined) params['normalization'] = argv.normalization;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.attacks.layer3TopAttacks(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
