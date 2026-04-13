/**
 * top-user-agents-directive command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface TopUserAgentsDirectiveArgs {
  limit?: number;
  name?: string;
  'user-agent-category'?: string;
  date?: string;
  'domain-category'?: string;
  directive?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TopUserAgentsDirectiveArgs> = {
  command: 'top-user-agents-directive',
  describe: 'Retrieves the top user agents on robots.txt files.',

  builder: (yargs: Argv): Argv<TopUserAgentsDirectiveArgs> => {
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
      .option('user-agent-category', {
        type: 'string',
        description: 'Filters results by user agent category.',
        choices: ['AI'] as const,
        default: undefined,
      })
      .option('date', {
        type: 'string',
        description: 'Filters results by the specified array of dates.',
        default: undefined,
      })
      .option('domain-category', {
        type: 'string',
        description: 'Filters results by domain category.',
        default: undefined,
      })
      .option('directive', {
        type: 'string',
        description: 'Filters results by robots.txt directive.',
        choices: ['ALLOW', 'DISALLOW'] as const,
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
      }) as Argv<TopUserAgentsDirectiveArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TopUserAgentsDirectiveArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.userAgentCategory !== undefined) params['userAgentCategory'] = argv.userAgentCategory;
      if (argv.date !== undefined) params['date'] = argv.date;
      if (argv.domainCategory !== undefined) params['domainCategory'] = argv.domainCategory;
      if (argv.directive !== undefined) params['directive'] = argv.directive;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.robotstxt.topUserAgentsDirective(
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
