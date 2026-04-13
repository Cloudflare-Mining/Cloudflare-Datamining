/**
 * search-create command
 * @generated from apis/ai/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface SearchCreateArgs {
  id: string;
  'max-num-results'?: number;
  query: string;
  'ranking-options-ranker'?: string;
  'ranking-options-score-threshold'?: number;
  'reranking-enabled'?: boolean;
  'rewrite-query'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, SearchCreateArgs> = {
  command: 'search-create <id>',
  describe: 'Search',

  builder: (yargs: Argv): Argv<SearchCreateArgs> => {
    return yargs
      .positional('id', {
        type: 'string',
        description: 'rag id',
        demandOption: true,
      })
      .option('max-num-results', {
        type: 'number',
        description: 'The max_num_results field',
        default: undefined,
      })
      .option('query', {
        type: 'string',
        description: 'The query field',
      })
      .option('ranking-options-ranker', {
        type: 'string',
        description: 'The ranking_options.ranker field',
        default: undefined,
      })
      .option('ranking-options-score-threshold', {
        type: 'number',
        description: 'The ranking_options.score_threshold field',
        default: undefined,
      })
      .option('reranking-enabled', {
        type: 'boolean',
        description: 'The reranking.enabled field',
        default: false,
      })
      .option('rewrite-query', {
        type: 'boolean',
        description: 'The rewrite_query field',
        default: false,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      }) as Argv<SearchCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SearchCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.id as string | undefined, 'id');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai rags search-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/autorag/rags/${argv.id ?? '<id>'}/search`,
          pathParams: { id: String(argv.id ?? '') },
          body: {
            maxNumResults: argv.maxNumResults,
            query: argv.query,
            rankingOptionsRanker: argv.rankingOptionsRanker,
            rankingOptionsScoreThreshold: argv.rankingOptionsScoreThreshold,
            rerankingEnabled: argv.rerankingEnabled,
            rewriteQuery: argv.rewriteQuery,
          },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/accounts/${accountId}/autorag/rags/${argv.id}/search`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.maxNumResults !== undefined) setNestedValue(bodyData, ['max_num_results'], argv.maxNumResults);
      if (argv.query !== undefined) setNestedValue(bodyData, ['query'], argv.query);
      if (argv.rankingOptionsRanker !== undefined)
        setNestedValue(bodyData, ['ranking_options', 'ranker'], argv.rankingOptionsRanker);
      if (argv.rankingOptionsScoreThreshold !== undefined)
        setNestedValue(bodyData, ['ranking_options', 'score_threshold'], argv.rankingOptionsScoreThreshold);
      if (argv.rerankingEnabled !== undefined)
        setNestedValue(bodyData, ['reranking', 'enabled'], argv.rerankingEnabled);
      if (argv.rewriteQuery !== undefined) setNestedValue(bodyData, ['rewrite_query'], argv.rewriteQuery);
      const result = await client.post<unknown>(`/accounts/${accountId}/autorag/rags/${argv.id}/search`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
