/**
 * security-summary-dkim command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface SecuritySummaryDkimArgs {
  name?: string;
  'date-range'?: string;
  'date-start'?: string;
  'date-end'?: string;
  arc?: string;
  dmarc?: string;
  spf?: string;
  'tls-version'?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, SecuritySummaryDkimArgs> = {
  command: 'security-summary-dkim',
  describe: 'Retrieves the distribution of emails by DKIM (DomainKeys Identified Mail) validation.',

  builder: (yargs: Argv): Argv<SecuritySummaryDkimArgs> => {
    return yargs
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
      .option('tls-version', {
        type: 'string',
        description: 'Filters results by TLS version.',
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
      }) as Argv<SecuritySummaryDkimArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SecuritySummaryDkimArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.dateRange !== undefined) params['dateRange'] = argv.dateRange;
      if (argv.dateStart !== undefined) params['dateStart'] = argv.dateStart;
      if (argv.dateEnd !== undefined) params['dateEnd'] = argv.dateEnd;
      if (argv.arc !== undefined) params['arc'] = argv.arc;
      if (argv.dmarc !== undefined) params['dmarc'] = argv.dmarc;
      if (argv.spf !== undefined) params['spf'] = argv.spf;
      if (argv.tlsVersion !== undefined) params['tlsVersion'] = argv.tlsVersion;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.email.securitySummaryDkim(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
