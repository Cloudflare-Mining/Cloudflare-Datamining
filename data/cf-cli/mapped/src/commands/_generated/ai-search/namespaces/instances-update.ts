/**
 * instances-update command
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

interface InstancesUpdateArgs {
  id: string;
  name: string;
  'ai-gateway-id'?: string;
  'ai-search-model'?: string;
  cache?: boolean;
  'cache-threshold'?: string;
  chunk?: boolean;
  'chunk-overlap'?: number;
  'chunk-size'?: number;
  'embedding-model'?: string;
  'fusion-method'?: string;
  'index-method-keyword': boolean;
  'index-method-vector': boolean;
  'indexing-options-keyword-tokenizer'?: string;
  'max-num-results'?: number;
  'metadata-created-from-aisearch-wizard'?: boolean;
  'metadata-search-for-agents-hostname': string;
  'metadata-search-for-agents-zone-id': string;
  'metadata-search-for-agents-zone-name': string;
  'metadata-worker-domain'?: string;
  paused?: boolean;
  'public-endpoint-params-authorized-hosts'?: string;
  'public-endpoint-params-chat-completions-endpoint-disabled'?: boolean;
  'public-endpoint-params-enabled'?: boolean;
  'public-endpoint-params-mcp-description'?: string;
  'public-endpoint-params-mcp-disabled'?: boolean;
  'public-endpoint-params-rate-limit-period-ms'?: number;
  'public-endpoint-params-rate-limit-requests'?: number;
  'public-endpoint-params-rate-limit-technique'?: string;
  'public-endpoint-params-search-endpoint-disabled'?: boolean;
  reranking?: boolean;
  'reranking-model'?: string;
  'retrieval-options-keyword-match-mode'?: string;
  'rewrite-model'?: string;
  'rewrite-query'?: boolean;
  'score-threshold'?: number;
  'source-params-exclude-items'?: string;
  'source-params-include-items'?: string;
  'source-params-prefix'?: string;
  'source-params-r2-jurisdiction'?: string;
  'source-params-web-crawler-crawl-options-depth'?: number;
  'source-params-web-crawler-crawl-options-include-external-links'?: boolean;
  'source-params-web-crawler-crawl-options-include-subdomains'?: boolean;
  'source-params-web-crawler-crawl-options-max-age'?: number;
  'source-params-web-crawler-crawl-options-source'?: string;
  'source-params-web-crawler-parse-options-include-images'?: boolean;
  'source-params-web-crawler-parse-options-specific-sitemaps'?: string;
  'source-params-web-crawler-parse-options-use-browser-rendering'?: boolean;
  'source-params-web-crawler-parse-type'?: string;
  'source-params-web-crawler-store-options-r2-jurisdiction'?: string;
  'source-params-web-crawler-store-options-storage-id': string;
  'source-params-web-crawler-store-options-storage-type'?: string;
  summarization?: boolean;
  'summarization-model'?: string;
  'system-prompt-ai-search'?: string;
  'system-prompt-index-summarization'?: string;
  'system-prompt-rewrite-query'?: string;
  'token-id'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, InstancesUpdateArgs> = {
  command: 'instances-update <id> <name>',
  describe: 'Update instances.',

  builder: (yargs: Argv): Argv<InstancesUpdateArgs> => {
    return yargs
      .positional('id', {
        type: 'string',
        description: 'AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.',
        demandOption: true,
      })
      .positional('name', {
        type: 'string',
        description: 'Namespace name',
        demandOption: true,
      })
      .option('ai-gateway-id', {
        type: 'string',
        description: 'The ai_gateway_id field',
        default: undefined,
      })
      .option('ai-search-model', {
        type: 'string',
        description: 'The ai_search_model field',
        choices: [
          '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
          '@cf/zai-org/glm-4.7-flash',
          '@cf/meta/llama-3.1-8b-instruct-fast',
          '@cf/meta/llama-3.1-8b-instruct-fp8',
          '@cf/meta/llama-4-scout-17b-16e-instruct',
          '@cf/qwen/qwen3-30b-a3b-fp8',
          '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b',
          '@cf/moonshotai/kimi-k2-instruct',
          '@cf/google/gemma-3-12b-it',
          '@cf/google/gemma-4-26b-a4b-it',
          '@cf/moonshotai/kimi-k2.5',
          'anthropic/claude-3-7-sonnet',
          'anthropic/claude-sonnet-4',
          'anthropic/claude-opus-4',
          'anthropic/claude-3-5-haiku',
          'cerebras/qwen-3-235b-a22b-instruct',
          'cerebras/qwen-3-235b-a22b-thinking',
          'cerebras/llama-3.3-70b',
          'cerebras/llama-4-maverick-17b-128e-instruct',
          'cerebras/llama-4-scout-17b-16e-instruct',
          'cerebras/gpt-oss-120b',
          'google-ai-studio/gemini-2.5-flash',
          'google-ai-studio/gemini-2.5-pro',
          'grok/grok-4',
          'groq/llama-3.3-70b-versatile',
          'groq/llama-3.1-8b-instant',
          'openai/gpt-5',
          'openai/gpt-5-mini',
          'openai/gpt-5-nano',
        ] as const,
        default: undefined,
      })
      .option('cache', {
        type: 'boolean',
        description: 'The cache field',
        default: false,
      })
      .option('cache-threshold', {
        type: 'string',
        description: 'The cache_threshold field',
        choices: ['super_strict_match', 'close_enough', 'flexible_friend', 'anything_goes'] as const,
        default: undefined,
      })
      .option('chunk', {
        type: 'boolean',
        description: 'The chunk field',
        default: false,
      })
      .option('chunk-overlap', {
        type: 'number',
        description: 'The chunk_overlap field',
        default: undefined,
      })
      .option('chunk-size', {
        type: 'number',
        description: 'The chunk_size field',
        default: undefined,
      })
      .option('embedding-model', {
        type: 'string',
        description: 'The embedding_model field',
        choices: [
          '@cf/qwen/qwen3-embedding-0.6b',
          '@cf/baai/bge-m3',
          '@cf/baai/bge-large-en-v1.5',
          '@cf/google/embeddinggemma-300m',
          'google-ai-studio/gemini-embedding-001',
          'google-ai-studio/gemini-embedding-2-preview',
          'openai/text-embedding-3-small',
          'openai/text-embedding-3-large',
        ] as const,
        default: undefined,
      })
      .option('fusion-method', {
        type: 'string',
        description: 'The fusion_method field',
        choices: ['max', 'rrf'] as const,
        default: undefined,
      })
      .option('index-method-keyword', {
        type: 'boolean',
        description: 'Enable keyword (BM25) storage backend.',
      })
      .option('index-method-vector', {
        type: 'boolean',
        description: 'Enable vector (embedding) storage backend.',
      })
      .option('indexing-options-keyword-tokenizer', {
        type: 'string',
        description:
          'Tokenizer used for keyword search indexing. porter provides word-level tokenization with Porter stemming (good for natural language queries). trigram enables character-level substring matching (good for partial matches, code, identifiers). Changing this triggers a full re-index. Defaults to porter.',
        choices: ['porter', 'trigram'] as const,
        default: undefined,
      })
      .option('max-num-results', {
        type: 'number',
        description: 'The max_num_results field',
        default: undefined,
      })
      .option('metadata-created-from-aisearch-wizard', {
        type: 'boolean',
        description: 'The metadata.created_from_aisearch_wizard field',
        default: false,
      })
      .option('metadata-search-for-agents-hostname', {
        type: 'string',
        description: 'The metadata.search_for_agents.hostname field',
      })
      .option('metadata-search-for-agents-zone-id', {
        type: 'string',
        description: 'The metadata.search_for_agents.zone_id field',
      })
      .option('metadata-search-for-agents-zone-name', {
        type: 'string',
        description: 'The metadata.search_for_agents.zone_name field',
      })
      .option('metadata-worker-domain', {
        type: 'string',
        description: 'The metadata.worker_domain field',
        default: undefined,
      })
      .option('paused', {
        type: 'boolean',
        description: 'The paused field',
        default: false,
      })
      .option('public-endpoint-params-authorized-hosts', {
        type: 'string',
        description: 'The public_endpoint_params.authorized_hosts field',
        default: undefined,
      })
      .option('public-endpoint-params-chat-completions-endpoint-disabled', {
        type: 'boolean',
        description: 'Disable chat completions endpoint for this public endpoint',
        default: false,
      })
      .option('public-endpoint-params-enabled', {
        type: 'boolean',
        description: 'The public_endpoint_params.enabled field',
        default: false,
      })
      .option('public-endpoint-params-mcp-description', {
        type: 'string',
        description: 'The public_endpoint_params.mcp.description field',
        default: undefined,
      })
      .option('public-endpoint-params-mcp-disabled', {
        type: 'boolean',
        description: 'Disable MCP endpoint for this public endpoint',
        default: false,
      })
      .option('public-endpoint-params-rate-limit-period-ms', {
        type: 'number',
        description: 'The public_endpoint_params.rate_limit.period_ms field',
        default: undefined,
      })
      .option('public-endpoint-params-rate-limit-requests', {
        type: 'number',
        description: 'The public_endpoint_params.rate_limit.requests field',
        default: undefined,
      })
      .option('public-endpoint-params-rate-limit-technique', {
        type: 'string',
        description: 'The public_endpoint_params.rate_limit.technique field',
        choices: ['fixed', 'sliding'] as const,
        default: undefined,
      })
      .option('public-endpoint-params-search-endpoint-disabled', {
        type: 'boolean',
        description: 'Disable search endpoint for this public endpoint',
        default: false,
      })
      .option('reranking', {
        type: 'boolean',
        description: 'The reranking field',
        default: false,
      })
      .option('reranking-model', {
        type: 'string',
        description: 'The reranking_model field',
        choices: ['@cf/baai/bge-reranker-base'] as const,
        default: undefined,
      })
      .option('retrieval-options-keyword-match-mode', {
        type: 'string',
        description:
          "Controls which documents are candidates for BM25 scoring. 'and' restricts candidates to documents containing all query terms; 'or' includes any document containing at least one term, ranked by BM25 relevance. Defaults to 'and'.",
        choices: ['and', 'or'] as const,
        default: undefined,
      })
      .option('rewrite-model', {
        type: 'string',
        description: 'The rewrite_model field',
        choices: [
          '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
          '@cf/zai-org/glm-4.7-flash',
          '@cf/meta/llama-3.1-8b-instruct-fast',
          '@cf/meta/llama-3.1-8b-instruct-fp8',
          '@cf/meta/llama-4-scout-17b-16e-instruct',
          '@cf/qwen/qwen3-30b-a3b-fp8',
          '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b',
          '@cf/moonshotai/kimi-k2-instruct',
          '@cf/google/gemma-3-12b-it',
          '@cf/google/gemma-4-26b-a4b-it',
          '@cf/moonshotai/kimi-k2.5',
          'anthropic/claude-3-7-sonnet',
          'anthropic/claude-sonnet-4',
          'anthropic/claude-opus-4',
          'anthropic/claude-3-5-haiku',
          'cerebras/qwen-3-235b-a22b-instruct',
          'cerebras/qwen-3-235b-a22b-thinking',
          'cerebras/llama-3.3-70b',
          'cerebras/llama-4-maverick-17b-128e-instruct',
          'cerebras/llama-4-scout-17b-16e-instruct',
          'cerebras/gpt-oss-120b',
          'google-ai-studio/gemini-2.5-flash',
          'google-ai-studio/gemini-2.5-pro',
          'grok/grok-4',
          'groq/llama-3.3-70b-versatile',
          'groq/llama-3.1-8b-instant',
          'openai/gpt-5',
          'openai/gpt-5-mini',
          'openai/gpt-5-nano',
        ] as const,
        default: undefined,
      })
      .option('rewrite-query', {
        type: 'boolean',
        description: 'The rewrite_query field',
        default: false,
      })
      .option('score-threshold', {
        type: 'number',
        description: 'The score_threshold field',
        default: undefined,
      })
      .option('source-params-exclude-items', {
        type: 'string',
        description:
          'List of path patterns to exclude. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /admin/** matches /admin/users and /admin/settings/advanced)',
        default: undefined,
      })
      .option('source-params-include-items', {
        type: 'string',
        description:
          'List of path patterns to include. Uses micromatch glob syntax: * matches within a path segment, ** matches across path segments (e.g., /blog/** matches /blog/post and /blog/2024/post)',
        default: undefined,
      })
      .option('source-params-prefix', {
        type: 'string',
        description: 'The source_params.prefix field',
        default: undefined,
      })
      .option('source-params-r2-jurisdiction', {
        type: 'string',
        description: 'The source_params.r2_jurisdiction field',
        default: undefined,
      })
      .option('source-params-web-crawler-crawl-options-depth', {
        type: 'number',
        description: 'The source_params.web_crawler.crawl_options.depth field',
        default: undefined,
      })
      .option('source-params-web-crawler-crawl-options-include-external-links', {
        type: 'boolean',
        description: 'The source_params.web_crawler.crawl_options.include_external_links field',
        default: false,
      })
      .option('source-params-web-crawler-crawl-options-include-subdomains', {
        type: 'boolean',
        description: 'The source_params.web_crawler.crawl_options.include_subdomains field',
        default: false,
      })
      .option('source-params-web-crawler-crawl-options-max-age', {
        type: 'number',
        description: 'The source_params.web_crawler.crawl_options.max_age field',
        default: undefined,
      })
      .option('source-params-web-crawler-crawl-options-source', {
        type: 'string',
        description: 'The source_params.web_crawler.crawl_options.source field',
        choices: ['all', 'sitemaps', 'links'] as const,
        default: undefined,
      })
      .option('source-params-web-crawler-parse-options-include-images', {
        type: 'boolean',
        description: 'The source_params.web_crawler.parse_options.include_images field',
        default: false,
      })
      .option('source-params-web-crawler-parse-options-specific-sitemaps', {
        type: 'string',
        description: "List of specific sitemap URLs to use for crawling. Only valid when parse_type is 'sitemap'.",
        default: undefined,
      })
      .option('source-params-web-crawler-parse-options-use-browser-rendering', {
        type: 'boolean',
        description: 'The source_params.web_crawler.parse_options.use_browser_rendering field',
        default: false,
      })
      .option('source-params-web-crawler-parse-type', {
        type: 'string',
        description: 'The source_params.web_crawler.parse_type field',
        choices: ['sitemap', 'feed-rss', 'crawl'] as const,
        default: undefined,
      })
      .option('source-params-web-crawler-store-options-r2-jurisdiction', {
        type: 'string',
        description: 'The source_params.web_crawler.store_options.r2_jurisdiction field',
        default: undefined,
      })
      .option('source-params-web-crawler-store-options-storage-id', {
        type: 'string',
        description: 'The source_params.web_crawler.store_options.storage_id field',
      })
      .option('source-params-web-crawler-store-options-storage-type', {
        type: 'string',
        description: 'The source_params.web_crawler.store_options.storage_type field',
        choices: ['r2'] as const,
        default: undefined,
      })
      .option('summarization', {
        type: 'boolean',
        description: 'The summarization field',
        default: false,
      })
      .option('summarization-model', {
        type: 'string',
        description: 'The summarization_model field',
        choices: [
          '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
          '@cf/zai-org/glm-4.7-flash',
          '@cf/meta/llama-3.1-8b-instruct-fast',
          '@cf/meta/llama-3.1-8b-instruct-fp8',
          '@cf/meta/llama-4-scout-17b-16e-instruct',
          '@cf/qwen/qwen3-30b-a3b-fp8',
          '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b',
          '@cf/moonshotai/kimi-k2-instruct',
          '@cf/google/gemma-3-12b-it',
          '@cf/google/gemma-4-26b-a4b-it',
          '@cf/moonshotai/kimi-k2.5',
          'anthropic/claude-3-7-sonnet',
          'anthropic/claude-sonnet-4',
          'anthropic/claude-opus-4',
          'anthropic/claude-3-5-haiku',
          'cerebras/qwen-3-235b-a22b-instruct',
          'cerebras/qwen-3-235b-a22b-thinking',
          'cerebras/llama-3.3-70b',
          'cerebras/llama-4-maverick-17b-128e-instruct',
          'cerebras/llama-4-scout-17b-16e-instruct',
          'cerebras/gpt-oss-120b',
          'google-ai-studio/gemini-2.5-flash',
          'google-ai-studio/gemini-2.5-pro',
          'grok/grok-4',
          'groq/llama-3.3-70b-versatile',
          'groq/llama-3.1-8b-instant',
          'openai/gpt-5',
          'openai/gpt-5-mini',
          'openai/gpt-5-nano',
        ] as const,
        default: undefined,
      })
      .option('system-prompt-ai-search', {
        type: 'string',
        description: 'The system_prompt_ai_search field',
        default: undefined,
      })
      .option('system-prompt-index-summarization', {
        type: 'string',
        description: 'The system_prompt_index_summarization field',
        default: undefined,
      })
      .option('system-prompt-rewrite-query', {
        type: 'string',
        description: 'The system_prompt_rewrite_query field',
        default: undefined,
      })
      .option('token-id', {
        type: 'string',
        description: 'The token_id field',
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
      .choices('ai-search-model', [
        '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
        '@cf/zai-org/glm-4.7-flash',
        '@cf/meta/llama-3.1-8b-instruct-fast',
        '@cf/meta/llama-3.1-8b-instruct-fp8',
        '@cf/meta/llama-4-scout-17b-16e-instruct',
        '@cf/qwen/qwen3-30b-a3b-fp8',
        '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b',
        '@cf/moonshotai/kimi-k2-instruct',
        '@cf/google/gemma-3-12b-it',
        '@cf/google/gemma-4-26b-a4b-it',
        '@cf/moonshotai/kimi-k2.5',
        'anthropic/claude-3-7-sonnet',
        'anthropic/claude-sonnet-4',
        'anthropic/claude-opus-4',
        'anthropic/claude-3-5-haiku',
        'cerebras/qwen-3-235b-a22b-instruct',
        'cerebras/qwen-3-235b-a22b-thinking',
        'cerebras/llama-3.3-70b',
        'cerebras/llama-4-maverick-17b-128e-instruct',
        'cerebras/llama-4-scout-17b-16e-instruct',
        'cerebras/gpt-oss-120b',
        'google-ai-studio/gemini-2.5-flash',
        'google-ai-studio/gemini-2.5-pro',
        'grok/grok-4',
        'groq/llama-3.3-70b-versatile',
        'groq/llama-3.1-8b-instant',
        'openai/gpt-5',
        'openai/gpt-5-mini',
        'openai/gpt-5-nano',
      ] as const)
      .choices('cache-threshold', ['super_strict_match', 'close_enough', 'flexible_friend', 'anything_goes'] as const)
      .choices('embedding-model', [
        '@cf/qwen/qwen3-embedding-0.6b',
        '@cf/baai/bge-m3',
        '@cf/baai/bge-large-en-v1.5',
        '@cf/google/embeddinggemma-300m',
        'google-ai-studio/gemini-embedding-001',
        'google-ai-studio/gemini-embedding-2-preview',
        'openai/text-embedding-3-small',
        'openai/text-embedding-3-large',
      ] as const)
      .choices('fusion-method', ['max', 'rrf'] as const)
      .choices('indexing-options-keyword-tokenizer', ['porter', 'trigram'] as const)
      .choices('public-endpoint-params-rate-limit-technique', ['fixed', 'sliding'] as const)
      .choices('reranking-model', ['@cf/baai/bge-reranker-base'] as const)
      .choices('retrieval-options-keyword-match-mode', ['and', 'or'] as const)
      .choices('rewrite-model', [
        '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
        '@cf/zai-org/glm-4.7-flash',
        '@cf/meta/llama-3.1-8b-instruct-fast',
        '@cf/meta/llama-3.1-8b-instruct-fp8',
        '@cf/meta/llama-4-scout-17b-16e-instruct',
        '@cf/qwen/qwen3-30b-a3b-fp8',
        '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b',
        '@cf/moonshotai/kimi-k2-instruct',
        '@cf/google/gemma-3-12b-it',
        '@cf/google/gemma-4-26b-a4b-it',
        '@cf/moonshotai/kimi-k2.5',
        'anthropic/claude-3-7-sonnet',
        'anthropic/claude-sonnet-4',
        'anthropic/claude-opus-4',
        'anthropic/claude-3-5-haiku',
        'cerebras/qwen-3-235b-a22b-instruct',
        'cerebras/qwen-3-235b-a22b-thinking',
        'cerebras/llama-3.3-70b',
        'cerebras/llama-4-maverick-17b-128e-instruct',
        'cerebras/llama-4-scout-17b-16e-instruct',
        'cerebras/gpt-oss-120b',
        'google-ai-studio/gemini-2.5-flash',
        'google-ai-studio/gemini-2.5-pro',
        'grok/grok-4',
        'groq/llama-3.3-70b-versatile',
        'groq/llama-3.1-8b-instant',
        'openai/gpt-5',
        'openai/gpt-5-mini',
        'openai/gpt-5-nano',
      ] as const)
      .choices('source-params-web-crawler-crawl-options-source', ['all', 'sitemaps', 'links'] as const)
      .choices('source-params-web-crawler-parse-type', ['sitemap', 'feed-rss', 'crawl'] as const)
      .choices('source-params-web-crawler-store-options-storage-type', ['r2'] as const)
      .choices('summarization-model', [
        '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
        '@cf/zai-org/glm-4.7-flash',
        '@cf/meta/llama-3.1-8b-instruct-fast',
        '@cf/meta/llama-3.1-8b-instruct-fp8',
        '@cf/meta/llama-4-scout-17b-16e-instruct',
        '@cf/qwen/qwen3-30b-a3b-fp8',
        '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b',
        '@cf/moonshotai/kimi-k2-instruct',
        '@cf/google/gemma-3-12b-it',
        '@cf/google/gemma-4-26b-a4b-it',
        '@cf/moonshotai/kimi-k2.5',
        'anthropic/claude-3-7-sonnet',
        'anthropic/claude-sonnet-4',
        'anthropic/claude-opus-4',
        'anthropic/claude-3-5-haiku',
        'cerebras/qwen-3-235b-a22b-instruct',
        'cerebras/qwen-3-235b-a22b-thinking',
        'cerebras/llama-3.3-70b',
        'cerebras/llama-4-maverick-17b-128e-instruct',
        'cerebras/llama-4-scout-17b-16e-instruct',
        'cerebras/gpt-oss-120b',
        'google-ai-studio/gemini-2.5-flash',
        'google-ai-studio/gemini-2.5-pro',
        'grok/grok-4',
        'groq/llama-3.3-70b-versatile',
        'groq/llama-3.1-8b-instant',
        'openai/gpt-5',
        'openai/gpt-5-mini',
        'openai/gpt-5-nano',
      ] as const) as Argv<InstancesUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<InstancesUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.id as string | undefined, 'id');
      validateResourceId(argv.name as string | undefined, 'name');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf ai-search namespaces instances-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/ai-search/namespaces/${argv.name ?? '<name>'}/instances/${argv.id ?? '<id>'}`,
          pathParams: { id: String(argv.id ?? ''), name: String(argv.name ?? '') },
          body: {
            aiGatewayId: argv.aiGatewayId,
            aiSearchModel: argv.aiSearchModel,
            cache: argv.cache,
            cacheThreshold: argv.cacheThreshold,
            chunk: argv.chunk,
            chunkOverlap: argv.chunkOverlap,
            chunkSize: argv.chunkSize,
            embeddingModel: argv.embeddingModel,
            fusionMethod: argv.fusionMethod,
            indexMethodKeyword: argv.indexMethodKeyword,
            indexMethodVector: argv.indexMethodVector,
            indexingOptionsKeywordTokenizer: argv.indexingOptionsKeywordTokenizer,
            maxNumResults: argv.maxNumResults,
            metadataCreatedFromAisearchWizard: argv.metadataCreatedFromAisearchWizard,
            metadataSearchForAgentsHostname: argv.metadataSearchForAgentsHostname,
            metadataSearchForAgentsZoneId: argv.metadataSearchForAgentsZoneId,
            metadataSearchForAgentsZoneName: argv.metadataSearchForAgentsZoneName,
            metadataWorkerDomain: argv.metadataWorkerDomain,
            paused: argv.paused,
            publicEndpointParamsAuthorizedHosts: argv.publicEndpointParamsAuthorizedHosts,
            publicEndpointParamsChatCompletionsEndpointDisabled:
              argv.publicEndpointParamsChatCompletionsEndpointDisabled,
            publicEndpointParamsEnabled: argv.publicEndpointParamsEnabled,
            publicEndpointParamsMcpDescription: argv.publicEndpointParamsMcpDescription,
            publicEndpointParamsMcpDisabled: argv.publicEndpointParamsMcpDisabled,
            publicEndpointParamsRateLimitPeriodMs: argv.publicEndpointParamsRateLimitPeriodMs,
            publicEndpointParamsRateLimitRequests: argv.publicEndpointParamsRateLimitRequests,
            publicEndpointParamsRateLimitTechnique: argv.publicEndpointParamsRateLimitTechnique,
            publicEndpointParamsSearchEndpointDisabled: argv.publicEndpointParamsSearchEndpointDisabled,
            reranking: argv.reranking,
            rerankingModel: argv.rerankingModel,
            retrievalOptionsKeywordMatchMode: argv.retrievalOptionsKeywordMatchMode,
            rewriteModel: argv.rewriteModel,
            rewriteQuery: argv.rewriteQuery,
            scoreThreshold: argv.scoreThreshold,
            sourceParamsExcludeItems: argv.sourceParamsExcludeItems,
            sourceParamsIncludeItems: argv.sourceParamsIncludeItems,
            sourceParamsPrefix: argv.sourceParamsPrefix,
            sourceParamsR2Jurisdiction: argv.sourceParamsR2Jurisdiction,
            sourceParamsWebCrawlerCrawlOptionsDepth: argv.sourceParamsWebCrawlerCrawlOptionsDepth,
            sourceParamsWebCrawlerCrawlOptionsIncludeExternalLinks:
              argv.sourceParamsWebCrawlerCrawlOptionsIncludeExternalLinks,
            sourceParamsWebCrawlerCrawlOptionsIncludeSubdomains:
              argv.sourceParamsWebCrawlerCrawlOptionsIncludeSubdomains,
            sourceParamsWebCrawlerCrawlOptionsMaxAge: argv.sourceParamsWebCrawlerCrawlOptionsMaxAge,
            sourceParamsWebCrawlerCrawlOptionsSource: argv.sourceParamsWebCrawlerCrawlOptionsSource,
            sourceParamsWebCrawlerParseOptionsIncludeImages: argv.sourceParamsWebCrawlerParseOptionsIncludeImages,
            sourceParamsWebCrawlerParseOptionsSpecificSitemaps: argv.sourceParamsWebCrawlerParseOptionsSpecificSitemaps,
            sourceParamsWebCrawlerParseOptionsUseBrowserRendering:
              argv.sourceParamsWebCrawlerParseOptionsUseBrowserRendering,
            sourceParamsWebCrawlerParseType: argv.sourceParamsWebCrawlerParseType,
            sourceParamsWebCrawlerStoreOptionsR2Jurisdiction: argv.sourceParamsWebCrawlerStoreOptionsR2Jurisdiction,
            sourceParamsWebCrawlerStoreOptionsStorageId: argv.sourceParamsWebCrawlerStoreOptionsStorageId,
            sourceParamsWebCrawlerStoreOptionsStorageType: argv.sourceParamsWebCrawlerStoreOptionsStorageType,
            summarization: argv.summarization,
            summarizationModel: argv.summarizationModel,
            systemPromptAiSearch: argv.systemPromptAiSearch,
            systemPromptIndexSummarization: argv.systemPromptIndexSummarization,
            systemPromptRewriteQuery: argv.systemPromptRewriteQuery,
            tokenId: argv.tokenId,
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
        const result = await client.put<unknown>(
          `/accounts/${accountId}/ai-search/namespaces/${argv.name}/instances/${argv.id}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.aiGatewayId !== undefined) setNestedValue(bodyData, ['ai_gateway_id'], argv.aiGatewayId);
      if (argv.aiSearchModel !== undefined) setNestedValue(bodyData, ['ai_search_model'], argv.aiSearchModel);
      if (argv.cache !== undefined) setNestedValue(bodyData, ['cache'], argv.cache);
      if (argv.cacheThreshold !== undefined) setNestedValue(bodyData, ['cache_threshold'], argv.cacheThreshold);
      if (argv.chunk !== undefined) setNestedValue(bodyData, ['chunk'], argv.chunk);
      if (argv.chunkOverlap !== undefined) setNestedValue(bodyData, ['chunk_overlap'], argv.chunkOverlap);
      if (argv.chunkSize !== undefined) setNestedValue(bodyData, ['chunk_size'], argv.chunkSize);
      if (argv.embeddingModel !== undefined) setNestedValue(bodyData, ['embedding_model'], argv.embeddingModel);
      if (argv.fusionMethod !== undefined) setNestedValue(bodyData, ['fusion_method'], argv.fusionMethod);
      if (argv.indexMethodKeyword !== undefined)
        setNestedValue(bodyData, ['index_method', 'keyword'], argv.indexMethodKeyword);
      if (argv.indexMethodVector !== undefined)
        setNestedValue(bodyData, ['index_method', 'vector'], argv.indexMethodVector);
      if (argv.indexingOptionsKeywordTokenizer !== undefined)
        setNestedValue(bodyData, ['indexing_options', 'keyword_tokenizer'], argv.indexingOptionsKeywordTokenizer);
      if (argv.maxNumResults !== undefined) setNestedValue(bodyData, ['max_num_results'], argv.maxNumResults);
      if (argv.metadataCreatedFromAisearchWizard !== undefined)
        setNestedValue(bodyData, ['metadata', 'created_from_aisearch_wizard'], argv.metadataCreatedFromAisearchWizard);
      if (argv.metadataSearchForAgentsHostname !== undefined)
        setNestedValue(bodyData, ['metadata', 'search_for_agents', 'hostname'], argv.metadataSearchForAgentsHostname);
      if (argv.metadataSearchForAgentsZoneId !== undefined)
        setNestedValue(bodyData, ['metadata', 'search_for_agents', 'zone_id'], argv.metadataSearchForAgentsZoneId);
      if (argv.metadataSearchForAgentsZoneName !== undefined)
        setNestedValue(bodyData, ['metadata', 'search_for_agents', 'zone_name'], argv.metadataSearchForAgentsZoneName);
      if (argv.metadataWorkerDomain !== undefined)
        setNestedValue(bodyData, ['metadata', 'worker_domain'], argv.metadataWorkerDomain);
      if (argv.paused !== undefined) setNestedValue(bodyData, ['paused'], argv.paused);
      if (argv.publicEndpointParamsAuthorizedHosts !== undefined)
        setNestedValue(
          bodyData,
          ['public_endpoint_params', 'authorized_hosts'],
          argv.publicEndpointParamsAuthorizedHosts,
        );
      if (argv.publicEndpointParamsChatCompletionsEndpointDisabled !== undefined)
        setNestedValue(
          bodyData,
          ['public_endpoint_params', 'chat_completions_endpoint', 'disabled'],
          argv.publicEndpointParamsChatCompletionsEndpointDisabled,
        );
      if (argv.publicEndpointParamsEnabled !== undefined)
        setNestedValue(bodyData, ['public_endpoint_params', 'enabled'], argv.publicEndpointParamsEnabled);
      if (argv.publicEndpointParamsMcpDescription !== undefined)
        setNestedValue(
          bodyData,
          ['public_endpoint_params', 'mcp', 'description'],
          argv.publicEndpointParamsMcpDescription,
        );
      if (argv.publicEndpointParamsMcpDisabled !== undefined)
        setNestedValue(bodyData, ['public_endpoint_params', 'mcp', 'disabled'], argv.publicEndpointParamsMcpDisabled);
      if (argv.publicEndpointParamsRateLimitPeriodMs !== undefined)
        setNestedValue(
          bodyData,
          ['public_endpoint_params', 'rate_limit', 'period_ms'],
          argv.publicEndpointParamsRateLimitPeriodMs,
        );
      if (argv.publicEndpointParamsRateLimitRequests !== undefined)
        setNestedValue(
          bodyData,
          ['public_endpoint_params', 'rate_limit', 'requests'],
          argv.publicEndpointParamsRateLimitRequests,
        );
      if (argv.publicEndpointParamsRateLimitTechnique !== undefined)
        setNestedValue(
          bodyData,
          ['public_endpoint_params', 'rate_limit', 'technique'],
          argv.publicEndpointParamsRateLimitTechnique,
        );
      if (argv.publicEndpointParamsSearchEndpointDisabled !== undefined)
        setNestedValue(
          bodyData,
          ['public_endpoint_params', 'search_endpoint', 'disabled'],
          argv.publicEndpointParamsSearchEndpointDisabled,
        );
      if (argv.reranking !== undefined) setNestedValue(bodyData, ['reranking'], argv.reranking);
      if (argv.rerankingModel !== undefined) setNestedValue(bodyData, ['reranking_model'], argv.rerankingModel);
      if (argv.retrievalOptionsKeywordMatchMode !== undefined)
        setNestedValue(bodyData, ['retrieval_options', 'keyword_match_mode'], argv.retrievalOptionsKeywordMatchMode);
      if (argv.rewriteModel !== undefined) setNestedValue(bodyData, ['rewrite_model'], argv.rewriteModel);
      if (argv.rewriteQuery !== undefined) setNestedValue(bodyData, ['rewrite_query'], argv.rewriteQuery);
      if (argv.scoreThreshold !== undefined) setNestedValue(bodyData, ['score_threshold'], argv.scoreThreshold);
      if (argv.sourceParamsExcludeItems !== undefined)
        setNestedValue(bodyData, ['source_params', 'exclude_items'], argv.sourceParamsExcludeItems);
      if (argv.sourceParamsIncludeItems !== undefined)
        setNestedValue(bodyData, ['source_params', 'include_items'], argv.sourceParamsIncludeItems);
      if (argv.sourceParamsPrefix !== undefined)
        setNestedValue(bodyData, ['source_params', 'prefix'], argv.sourceParamsPrefix);
      if (argv.sourceParamsR2Jurisdiction !== undefined)
        setNestedValue(bodyData, ['source_params', 'r2_jurisdiction'], argv.sourceParamsR2Jurisdiction);
      if (argv.sourceParamsWebCrawlerCrawlOptionsDepth !== undefined)
        setNestedValue(
          bodyData,
          ['source_params', 'web_crawler', 'crawl_options', 'depth'],
          argv.sourceParamsWebCrawlerCrawlOptionsDepth,
        );
      if (argv.sourceParamsWebCrawlerCrawlOptionsIncludeExternalLinks !== undefined)
        setNestedValue(
          bodyData,
          ['source_params', 'web_crawler', 'crawl_options', 'include_external_links'],
          argv.sourceParamsWebCrawlerCrawlOptionsIncludeExternalLinks,
        );
      if (argv.sourceParamsWebCrawlerCrawlOptionsIncludeSubdomains !== undefined)
        setNestedValue(
          bodyData,
          ['source_params', 'web_crawler', 'crawl_options', 'include_subdomains'],
          argv.sourceParamsWebCrawlerCrawlOptionsIncludeSubdomains,
        );
      if (argv.sourceParamsWebCrawlerCrawlOptionsMaxAge !== undefined)
        setNestedValue(
          bodyData,
          ['source_params', 'web_crawler', 'crawl_options', 'max_age'],
          argv.sourceParamsWebCrawlerCrawlOptionsMaxAge,
        );
      if (argv.sourceParamsWebCrawlerCrawlOptionsSource !== undefined)
        setNestedValue(
          bodyData,
          ['source_params', 'web_crawler', 'crawl_options', 'source'],
          argv.sourceParamsWebCrawlerCrawlOptionsSource,
        );
      if (argv.sourceParamsWebCrawlerParseOptionsIncludeImages !== undefined)
        setNestedValue(
          bodyData,
          ['source_params', 'web_crawler', 'parse_options', 'include_images'],
          argv.sourceParamsWebCrawlerParseOptionsIncludeImages,
        );
      if (argv.sourceParamsWebCrawlerParseOptionsSpecificSitemaps !== undefined)
        setNestedValue(
          bodyData,
          ['source_params', 'web_crawler', 'parse_options', 'specific_sitemaps'],
          argv.sourceParamsWebCrawlerParseOptionsSpecificSitemaps,
        );
      if (argv.sourceParamsWebCrawlerParseOptionsUseBrowserRendering !== undefined)
        setNestedValue(
          bodyData,
          ['source_params', 'web_crawler', 'parse_options', 'use_browser_rendering'],
          argv.sourceParamsWebCrawlerParseOptionsUseBrowserRendering,
        );
      if (argv.sourceParamsWebCrawlerParseType !== undefined)
        setNestedValue(bodyData, ['source_params', 'web_crawler', 'parse_type'], argv.sourceParamsWebCrawlerParseType);
      if (argv.sourceParamsWebCrawlerStoreOptionsR2Jurisdiction !== undefined)
        setNestedValue(
          bodyData,
          ['source_params', 'web_crawler', 'store_options', 'r2_jurisdiction'],
          argv.sourceParamsWebCrawlerStoreOptionsR2Jurisdiction,
        );
      if (argv.sourceParamsWebCrawlerStoreOptionsStorageId !== undefined)
        setNestedValue(
          bodyData,
          ['source_params', 'web_crawler', 'store_options', 'storage_id'],
          argv.sourceParamsWebCrawlerStoreOptionsStorageId,
        );
      if (argv.sourceParamsWebCrawlerStoreOptionsStorageType !== undefined)
        setNestedValue(
          bodyData,
          ['source_params', 'web_crawler', 'store_options', 'storage_type'],
          argv.sourceParamsWebCrawlerStoreOptionsStorageType,
        );
      if (argv.summarization !== undefined) setNestedValue(bodyData, ['summarization'], argv.summarization);
      if (argv.summarizationModel !== undefined)
        setNestedValue(bodyData, ['summarization_model'], argv.summarizationModel);
      if (argv.systemPromptAiSearch !== undefined)
        setNestedValue(bodyData, ['system_prompt_ai_search'], argv.systemPromptAiSearch);
      if (argv.systemPromptIndexSummarization !== undefined)
        setNestedValue(bodyData, ['system_prompt_index_summarization'], argv.systemPromptIndexSummarization);
      if (argv.systemPromptRewriteQuery !== undefined)
        setNestedValue(bodyData, ['system_prompt_rewrite_query'], argv.systemPromptRewriteQuery);
      if (argv.tokenId !== undefined) setNestedValue(bodyData, ['token_id'], argv.tokenId);
      const result = await client.put<unknown>(
        `/accounts/${accountId}/ai-search/namespaces/${argv.name}/instances/${argv.id}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
