/**
 * list command
 * @generated from apis/radar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  limit?: number;
  offset?: number;
  'bot-category'?: string;
  'bot-operator'?: string;
  kind?: string;
  'bot-verification-status'?: string;
  format?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe: 'Retrieves a list of bots.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('limit', {
        type: 'number',
        description: 'Limits the number of objects returned in the response.',
        default: undefined,
      })
      .option('offset', {
        type: 'number',
        description: 'Skips the specified number of objects before fetching the results.',
        default: undefined,
      })
      .option('bot-category', {
        type: 'string',
        description: 'Filters results by bot category.',
        choices: [
          'SEARCH_ENGINE_CRAWLER',
          'SEARCH_ENGINE_OPTIMIZATION',
          'MONITORING_AND_ANALYTICS',
          'ADVERTISING_AND_MARKETING',
          'SOCIAL_MEDIA_MARKETING',
          'PAGE_PREVIEW',
          'ACADEMIC_RESEARCH',
          'SECURITY',
          'ACCESSIBILITY',
          'WEBHOOKS',
          'FEED_FETCHER',
          'AI_CRAWLER',
          'AGGREGATOR',
          'AI_ASSISTANT',
          'AI_SEARCH',
          'ARCHIVER',
        ] as const,
        default: undefined,
      })
      .option('bot-operator', {
        type: 'string',
        description: 'Filters results by bot operator.',
        default: undefined,
      })
      .option('kind', {
        type: 'string',
        description: 'Filters results by bot kind.',
        choices: ['AGENT', 'BOT'] as const,
        default: undefined,
      })
      .option('bot-verification-status', {
        type: 'string',
        description: 'Filters results by bot verification status.',
        choices: ['VERIFIED'] as const,
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
      }) as Argv<ListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      if (argv.offset !== undefined) params['offset'] = argv.offset;
      if (argv.botCategory !== undefined) params['botCategory'] = argv.botCategory;
      if (argv.botOperator !== undefined) params['botOperator'] = argv.botOperator;
      if (argv.kind !== undefined) params['kind'] = argv.kind;
      if (argv.botVerificationStatus !== undefined) params['botVerificationStatus'] = argv.botVerificationStatus;
      if (argv.format !== undefined) params['format'] = argv.format;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });

      const result = await client.radar.bots.list(Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
