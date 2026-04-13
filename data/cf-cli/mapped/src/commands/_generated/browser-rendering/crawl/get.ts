/**
 * get command
 * @generated from apis/browser-rendering/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetArgs {
  jobId: string;
  'cache-ttl'?: number;
  status?: string;
  cursor?: number;
  limit?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetArgs> = {
  command: 'get <jobId>',
  describe: 'Returns the result of a crawl job.',

  builder: (yargs: Argv): Argv<GetArgs> => {
    return yargs
      .positional('jobId', {
        type: 'string',
        description: 'Crawl job ID.',
        demandOption: true,
      })
      .option('cache-ttl', {
        type: 'number',
        description: 'Cache TTL default is 5s. Set to 0 to disable.',
        default: undefined,
      })
      .option('status', {
        type: 'string',
        description: 'Filter by URL status.',
        choices: ['queued', 'errored', 'completed', 'disallowed', 'skipped', 'cancelled'] as const,
        default: undefined,
      })
      .option('cursor', {
        type: 'number',
        description: 'Cursor for pagination.',
        default: undefined,
      })
      .option('limit', {
        type: 'number',
        description: 'Limit for pagination.',
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
      }) as Argv<GetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.jobId as string | undefined, 'jobId');

      const params: Record<string, unknown> = {};
      if (argv.cacheTTL !== undefined) params['cacheTTL'] = argv.cacheTTL;
      if (argv.status !== undefined) params['status'] = argv.status;
      if (argv.cursor !== undefined) params['cursor'] = argv.cursor;
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.browserRendering.crawl.get(
        accountId,
        argv.jobId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
