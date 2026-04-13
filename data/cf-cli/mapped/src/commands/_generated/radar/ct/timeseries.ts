/**
 * timeseries command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface TimeseriesArgs {
  'agg-interval'?: string;
  name?: string;
  'date-range'?: string;
  'date-start'?: string;
  'date-end'?: string;
  ca?: string;
  'ca-owner'?: string;
  duration?: string;
  'entry-type'?: string;
  'expiration-status'?: string;
  'has-ips'?: string;
  'has-wildcards'?: string;
  log?: string;
  'log-api'?: string;
  'log-operator'?: string;
  'public-key-algorithm'?: string;
  'signature-algorithm'?: string;
  tld?: string;
  'validation-level'?: string;
  'unique-entries'?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TimeseriesArgs> = {
  command: 'timeseries',
  describe: 'Retrieves certificate volume over time.',

  builder: (yargs: Argv): Argv<TimeseriesArgs> => {
    return yargs
      .option('agg-interval', {
        type: 'string',
        description:
          'Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals). Refer to [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).',
        choices: ['15m', '1h', '1d', '1w'] as const,
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
      .option('ca', {
        type: 'string',
        description: 'Filters results by certificate authority.',
        default: undefined,
      })
      .option('ca-owner', {
        type: 'string',
        description: 'Filters results by certificate authority owner.',
        default: undefined,
      })
      .option('duration', {
        type: 'string',
        description: 'Filters results by certificate duration.',
        default: undefined,
      })
      .option('entry-type', {
        type: 'string',
        description: 'Filters results by entry type (certificate vs. pre-certificate).',
        default: undefined,
      })
      .option('expiration-status', {
        type: 'string',
        description: 'Filters results by expiration status (expired vs. valid).',
        default: undefined,
      })
      .option('has-ips', {
        type: 'string',
        description: 'Filters results based on whether the certificates are bound to specific IP addresses.',
        default: undefined,
      })
      .option('has-wildcards', {
        type: 'string',
        description: 'Filters results based on whether the certificates contain wildcard domains.',
        default: undefined,
      })
      .option('log', {
        type: 'string',
        description: 'Filters results by certificate log.',
        default: undefined,
      })
      .option('log-api', {
        type: 'string',
        description: 'Filters results by certificate log API (RFC6962 vs. static).',
        default: undefined,
      })
      .option('log-operator', {
        type: 'string',
        description: 'Filters results by certificate log operator.',
        default: undefined,
      })
      .option('public-key-algorithm', {
        type: 'string',
        description: 'Filters results by public key algorithm.',
        default: undefined,
      })
      .option('signature-algorithm', {
        type: 'string',
        description: 'Filters results by signature algorithm.',
        default: undefined,
      })
      .option('tld', {
        type: 'string',
        description: 'Filters results by top-level domain.',
        default: undefined,
      })
      .option('validation-level', {
        type: 'string',
        description: 'Filters results by validation level.',
        default: undefined,
      })
      .option('unique-entries', {
        type: 'string',
        description:
          'Specifies whether to filter out duplicate certificates and pre-certificates. Set to true for unique entries only.',
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
      }) as Argv<TimeseriesArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TimeseriesArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.aggInterval !== undefined) params['aggInterval'] = argv.aggInterval;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.dateRange !== undefined) params['dateRange'] = argv.dateRange;
      if (argv.dateStart !== undefined) params['dateStart'] = argv.dateStart;
      if (argv.dateEnd !== undefined) params['dateEnd'] = argv.dateEnd;
      if (argv.ca !== undefined) params['ca'] = argv.ca;
      if (argv.caOwner !== undefined) params['caOwner'] = argv.caOwner;
      if (argv.duration !== undefined) params['duration'] = argv.duration;
      if (argv.entryType !== undefined) params['entryType'] = argv.entryType;
      if (argv.expirationStatus !== undefined) params['expirationStatus'] = argv.expirationStatus;
      if (argv.hasIps !== undefined) params['hasIps'] = argv.hasIps;
      if (argv.hasWildcards !== undefined) params['hasWildcards'] = argv.hasWildcards;
      if (argv.log !== undefined) params['log'] = argv.log;
      if (argv.logApi !== undefined) params['logApi'] = argv.logApi;
      if (argv.logOperator !== undefined) params['logOperator'] = argv.logOperator;
      if (argv.publicKeyAlgorithm !== undefined) params['publicKeyAlgorithm'] = argv.publicKeyAlgorithm;
      if (argv.signatureAlgorithm !== undefined) params['signatureAlgorithm'] = argv.signatureAlgorithm;
      if (argv.tld !== undefined) params['tld'] = argv.tld;
      if (argv.validationLevel !== undefined) params['validationLevel'] = argv.validationLevel;
      if (argv.uniqueEntries !== undefined) params['uniqueEntries'] = argv.uniqueEntries;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.ct.timeseries(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
