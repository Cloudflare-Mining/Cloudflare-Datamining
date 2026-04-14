/**
 * multi-instance-search command
 * @generated from apis/ai-search/schema.ts
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

interface MultiInstanceSearchArgs {
  name: string;
  'ai-search-options-cache-cache-threshold'?: string;
  'ai-search-options-cache-enabled'?: boolean;
  'ai-search-options-instance-ids': string;
  'ai-search-options-query-rewrite-enabled'?: boolean;
  'ai-search-options-query-rewrite-rewrite-prompt'?: string;
  'ai-search-options-reranking-enabled'?: boolean;
  'ai-search-options-reranking-match-threshold'?: number;
  'ai-search-options-retrieval-context-expansion'?: number;
  'ai-search-options-retrieval-fusion-method'?: string;
  'ai-search-options-retrieval-keyword-match-mode'?: string;
  'ai-search-options-retrieval-match-threshold'?: number;
  'ai-search-options-retrieval-max-num-results'?: number;
  'ai-search-options-retrieval-retrieval-type'?: string;
  'ai-search-options-retrieval-return-on-failure'?: boolean;
  query?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, MultiInstanceSearchArgs> = {
  command: 'multi-instance-search <name>',
  describe: 'Search across multiple instances in a namespace',

  builder: (yargs: Argv): Argv<MultiInstanceSearchArgs> => {
    return yargs
      .positional('name', {
        type: 'string',
        description: 'Namespace name',
        demandOption: true,
      })
      .option('ai-search-options-cache-cache-threshold', {
        type: 'string',
        description: 'The ai_search_options.cache.cache_threshold field',
        choices: ['super_strict_match', 'close_enough', 'flexible_friend', 'anything_goes'] as const,
        default: undefined,
      })
      .option('ai-search-options-cache-enabled', {
        type: 'boolean',
        description: 'The ai_search_options.cache.enabled field',
        default: false,
      })
      .option('ai-search-options-instance-ids', {
        type: 'string',
        description: 'The ai_search_options.instance_ids field',
      })
      .option('ai-search-options-query-rewrite-enabled', {
        type: 'boolean',
        description: 'The ai_search_options.query_rewrite.enabled field',
        default: false,
      })
      .option('ai-search-options-query-rewrite-rewrite-prompt', {
        type: 'string',
        description: 'The ai_search_options.query_rewrite.rewrite_prompt field',
        default: undefined,
      })
      .option('ai-search-options-reranking-enabled', {
        type: 'boolean',
        description: 'The ai_search_options.reranking.enabled field',
        default: false,
      })
      .option('ai-search-options-reranking-match-threshold', {
        type: 'number',
        description: 'The ai_search_options.reranking.match_threshold field',
        default: undefined,
      })
      .option('ai-search-options-retrieval-context-expansion', {
        type: 'number',
        description: 'The ai_search_options.retrieval.context_expansion field',
        default: undefined,
      })
      .option('ai-search-options-retrieval-fusion-method', {
        type: 'string',
        description: 'The ai_search_options.retrieval.fusion_method field',
        choices: ['max', 'rrf'] as const,
        default: undefined,
      })
      .option('ai-search-options-retrieval-keyword-match-mode', {
        type: 'string',
        description:
          "Controls which documents are candidates for BM25 scoring. 'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 relevance. Defaults to 'and'.",
        choices: ['and', 'or'] as const,
        default: undefined,
      })
      .option('ai-search-options-retrieval-match-threshold', {
        type: 'number',
        description: 'The ai_search_options.retrieval.match_threshold field',
        default: undefined,
      })
      .option('ai-search-options-retrieval-max-num-results', {
        type: 'number',
        description: 'The ai_search_options.retrieval.max_num_results field',
        default: undefined,
      })
      .option('ai-search-options-retrieval-retrieval-type', {
        type: 'string',
        description: 'The ai_search_options.retrieval.retrieval_type field',
        choices: ['vector', 'keyword', 'hybrid'] as const,
        default: undefined,
      })
      .option('ai-search-options-retrieval-return-on-failure', {
        type: 'boolean',
        description: 'The ai_search_options.retrieval.return_on_failure field',
        default: false,
      })
      .option('query', {
        type: 'string',
        description:
          "A simple text query string. Alternative to 'messages' — provide either this or 'messages', not both.",
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      })
      .choices('ai-search-options-cache-cache-threshold', [
        'super_strict_match',
        'close_enough',
        'flexible_friend',
        'anything_goes',
      ] as const)
      .choices('ai-search-options-retrieval-fusion-method', ['max', 'rrf'] as const)
      .choices('ai-search-options-retrieval-keyword-match-mode', ['and', 'or'] as const)
      .choices('ai-search-options-retrieval-retrieval-type', [
        'vector',
        'keyword',
        'hybrid',
      ] as const) as Argv<MultiInstanceSearchArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<MultiInstanceSearchArgs>): Promise<void> => {
    try {
      validateResourceId(argv.name as string | undefined, 'name');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai-search namespaces multi-instance-search',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/ai-search/namespaces/${argv.name ?? '<name>'}/search`,
          pathParams: { name: String(argv.name ?? '') },
          body: {
            aiSearchOptionsCacheCacheThreshold: argv.aiSearchOptionsCacheCacheThreshold,
            aiSearchOptionsCacheEnabled: argv.aiSearchOptionsCacheEnabled,
            aiSearchOptionsInstanceIds: argv.aiSearchOptionsInstanceIds,
            aiSearchOptionsQueryRewriteEnabled: argv.aiSearchOptionsQueryRewriteEnabled,
            aiSearchOptionsQueryRewriteRewritePrompt: argv.aiSearchOptionsQueryRewriteRewritePrompt,
            aiSearchOptionsRerankingEnabled: argv.aiSearchOptionsRerankingEnabled,
            aiSearchOptionsRerankingMatchThreshold: argv.aiSearchOptionsRerankingMatchThreshold,
            aiSearchOptionsRetrievalContextExpansion: argv.aiSearchOptionsRetrievalContextExpansion,
            aiSearchOptionsRetrievalFusionMethod: argv.aiSearchOptionsRetrievalFusionMethod,
            aiSearchOptionsRetrievalKeywordMatchMode: argv.aiSearchOptionsRetrievalKeywordMatchMode,
            aiSearchOptionsRetrievalMatchThreshold: argv.aiSearchOptionsRetrievalMatchThreshold,
            aiSearchOptionsRetrievalMaxNumResults: argv.aiSearchOptionsRetrievalMaxNumResults,
            aiSearchOptionsRetrievalRetrievalType: argv.aiSearchOptionsRetrievalRetrievalType,
            aiSearchOptionsRetrievalReturnOnFailure: argv.aiSearchOptionsRetrievalReturnOnFailure,
            query: argv.query,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/ai-search/namespaces/${argv.name}/search`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.aiSearchOptionsCacheCacheThreshold !== undefined)
        setNestedValue(
          bodyData,
          ['ai_search_options', 'cache', 'cache_threshold'],
          argv.aiSearchOptionsCacheCacheThreshold,
        );
      if (argv.aiSearchOptionsCacheEnabled !== undefined)
        setNestedValue(bodyData, ['ai_search_options', 'cache', 'enabled'], argv.aiSearchOptionsCacheEnabled);
      if (argv.aiSearchOptionsInstanceIds !== undefined)
        setNestedValue(bodyData, ['ai_search_options', 'instance_ids'], argv.aiSearchOptionsInstanceIds);
      if (argv.aiSearchOptionsQueryRewriteEnabled !== undefined)
        setNestedValue(
          bodyData,
          ['ai_search_options', 'query_rewrite', 'enabled'],
          argv.aiSearchOptionsQueryRewriteEnabled,
        );
      if (argv.aiSearchOptionsQueryRewriteRewritePrompt !== undefined)
        setNestedValue(
          bodyData,
          ['ai_search_options', 'query_rewrite', 'rewrite_prompt'],
          argv.aiSearchOptionsQueryRewriteRewritePrompt,
        );
      if (argv.aiSearchOptionsRerankingEnabled !== undefined)
        setNestedValue(bodyData, ['ai_search_options', 'reranking', 'enabled'], argv.aiSearchOptionsRerankingEnabled);
      if (argv.aiSearchOptionsRerankingMatchThreshold !== undefined)
        setNestedValue(
          bodyData,
          ['ai_search_options', 'reranking', 'match_threshold'],
          argv.aiSearchOptionsRerankingMatchThreshold,
        );
      if (argv.aiSearchOptionsRetrievalContextExpansion !== undefined)
        setNestedValue(
          bodyData,
          ['ai_search_options', 'retrieval', 'context_expansion'],
          argv.aiSearchOptionsRetrievalContextExpansion,
        );
      if (argv.aiSearchOptionsRetrievalFusionMethod !== undefined)
        setNestedValue(
          bodyData,
          ['ai_search_options', 'retrieval', 'fusion_method'],
          argv.aiSearchOptionsRetrievalFusionMethod,
        );
      if (argv.aiSearchOptionsRetrievalKeywordMatchMode !== undefined)
        setNestedValue(
          bodyData,
          ['ai_search_options', 'retrieval', 'keyword_match_mode'],
          argv.aiSearchOptionsRetrievalKeywordMatchMode,
        );
      if (argv.aiSearchOptionsRetrievalMatchThreshold !== undefined)
        setNestedValue(
          bodyData,
          ['ai_search_options', 'retrieval', 'match_threshold'],
          argv.aiSearchOptionsRetrievalMatchThreshold,
        );
      if (argv.aiSearchOptionsRetrievalMaxNumResults !== undefined)
        setNestedValue(
          bodyData,
          ['ai_search_options', 'retrieval', 'max_num_results'],
          argv.aiSearchOptionsRetrievalMaxNumResults,
        );
      if (argv.aiSearchOptionsRetrievalRetrievalType !== undefined)
        setNestedValue(
          bodyData,
          ['ai_search_options', 'retrieval', 'retrieval_type'],
          argv.aiSearchOptionsRetrievalRetrievalType,
        );
      if (argv.aiSearchOptionsRetrievalReturnOnFailure !== undefined)
        setNestedValue(
          bodyData,
          ['ai_search_options', 'retrieval', 'return_on_failure'],
          argv.aiSearchOptionsRetrievalReturnOnFailure,
        );
      if (argv.query !== undefined) setNestedValue(bodyData, ['query'], argv.query);
      const result = await client.post<unknown>(`/accounts/${accountId}/ai-search/namespaces/${argv.name}/search`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
