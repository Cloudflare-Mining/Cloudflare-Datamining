/**
 * summary command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';

interface SummaryArgs {
  dimension: string;
  date?: string;
  'domain-category'?: string;
  name?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, SummaryArgs> = {
  command: 'summary <dimension>',
  describe:
    'Returns a summary of AI agent readiness scores across scanned domains, grouped by the specified dimension. Data is sourced from weekly bulk scans. All values are raw domain counts.',

  builder: (yargs: Argv): Argv<SummaryArgs> => {
    return yargs
      .positional('dimension', {
        type: 'string',
        description: 'Specifies the agent readiness data dimension by which to group the results.',
        demandOption: true,
      })
      .option('date', {
        type: 'string',
        description: 'Filters results by the specified date.',
        default: undefined,
      })
      .option('domain-category', {
        type: 'string',
        description: 'Filters results by domain category.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'Array of names used to label the series in the response.',
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
      }) as Argv<SummaryArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SummaryArgs>): Promise<void> => {
    try {
      validateResourceId(argv.dimension as string | undefined, 'dimension');

      const params: Record<string, unknown> = {};
      if (argv.date !== undefined) params['date'] = argv.date;
      if (argv.domainCategory !== undefined) params['domainCategory'] = argv.domainCategory;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.agentreadiness.summary(
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
