/**
 * routing-summary-v2 command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';

interface RoutingSummaryV2Args {
  dimension: string;
  name?: string;
  'date-range'?: string;
  'date-start'?: string;
  'date-end'?: string;
  arc?: string;
  dkim?: string;
  dmarc?: string;
  spf?: string;
  'ip-version'?: string;
  encrypted?: string;
  'limit-per-group'?: number;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RoutingSummaryV2Args> = {
  command: 'routing-summary-v2 <dimension>',
  describe: 'Retrieves the distribution of email routing metrics by the specified dimension.',

  builder: (yargs: Argv): Argv<RoutingSummaryV2Args> => {
    return yargs
      .positional('dimension', {
        type: 'string',
        description: 'Specifies the attribute by which to group the results.',
        demandOption: true,
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
      .option('arc', {
        type: 'string',
        description: 'Filters results by ARC (Authenticated Received Chain) validation.',
        default: undefined,
      })
      .option('dkim', {
        type: 'string',
        description: 'Filters results by DKIM (DomainKeys Identified Mail) validation status.',
        default: undefined,
      })
      .option('dmarc', {
        type: 'string',
        description:
          'Filters results by DMARC (Domain-based Message Authentication, Reporting and Conformance) validation status.',
        default: undefined,
      })
      .option('spf', {
        type: 'string',
        description: 'Filters results by SPF (Sender Policy Framework) validation status.',
        default: undefined,
      })
      .option('ip-version', {
        type: 'string',
        description: 'Filters results by IP version (Ipv4 vs. IPv6).',
        default: undefined,
      })
      .option('encrypted', {
        type: 'string',
        description: 'Filters results by encryption status (encrypted vs. not-encrypted).',
        default: undefined,
      })
      .option('limit-per-group', {
        type: 'number',
        description:
          'Limits the number of objects per group to the top items within the specified time range. When item count exceeds the limit, extra items appear grouped under an "other" category.',
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
      }) as Argv<RoutingSummaryV2Args>;
  },

  handler: async (argv: ArgumentsCamelCase<RoutingSummaryV2Args>): Promise<void> => {
    try {
      validateResourceId(argv.dimension as string | undefined, 'dimension');

      const params: Record<string, unknown> = {};
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.dateRange !== undefined) params['dateRange'] = argv.dateRange;
      if (argv.dateStart !== undefined) params['dateStart'] = argv.dateStart;
      if (argv.dateEnd !== undefined) params['dateEnd'] = argv.dateEnd;
      if (argv.arc !== undefined) params['arc'] = argv.arc;
      if (argv.dkim !== undefined) params['dkim'] = argv.dkim;
      if (argv.dmarc !== undefined) params['dmarc'] = argv.dmarc;
      if (argv.spf !== undefined) params['spf'] = argv.spf;
      if (argv.ipVersion !== undefined) params['ipVersion'] = argv.ipVersion;
      if (argv.encrypted !== undefined) params['encrypted'] = argv.encrypted;
      if (argv.limitPerGroup !== undefined) params['limitPerGroup'] = argv.limitPerGroup;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.email.routingSummaryV2(
        argv.dimension,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
