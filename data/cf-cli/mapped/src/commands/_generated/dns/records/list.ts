/**
 * list command
 * @generated from apis/dns/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  zoneId?: string;
  name?: string;
  'name-exact'?: string;
  'name-contains'?: string;
  'name-startswith'?: string;
  'name-endswith'?: string;
  type?: string;
  content?: string;
  'content-exact'?: string;
  'content-contains'?: string;
  'content-startswith'?: string;
  'content-endswith'?: string;
  proxied?: string;
  match?: string;
  comment?: string;
  'comment-present'?: string;
  'comment-absent'?: string;
  'comment-exact'?: string;
  'comment-contains'?: string;
  'comment-startswith'?: string;
  'comment-endswith'?: string;
  tag?: string;
  'tag-present'?: string;
  'tag-absent'?: string;
  'tag-exact'?: string;
  'tag-contains'?: string;
  'tag-startswith'?: string;
  'tag-endswith'?: string;
  search?: string;
  'tag-match'?: string;
  page?: string;
  'per-page'?: string;
  order?: string;
  direction?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list [zoneId]',
  describe: "List, search, sort, and filter a zones' DNS records.",

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Zone ID (or use --zone flag)',
      })
      .option('name', {
        type: 'string',
        description: 'Exact value of the DNS record name. This is a convenience alias for \`name.exact\`.',
        default: undefined,
      })
      .option('name-exact', {
        type: 'string',
        description: 'Exact value of the DNS record name. Name filters are case-insensitive.',
        default: undefined,
      })
      .option('name-contains', {
        type: 'string',
        description: 'Substring of the DNS record name. Name filters are case-insensitive.',
        default: undefined,
      })
      .option('name-startswith', {
        type: 'string',
        description: 'Prefix of the DNS record name. Name filters are case-insensitive.',
        default: undefined,
      })
      .option('name-endswith', {
        type: 'string',
        description: 'Suffix of the DNS record name. Name filters are case-insensitive.',
        default: undefined,
      })
      .option('type', {
        type: 'string',
        description: 'Record type.',
        choices: [
          'A',
          'AAAA',
          'CAA',
          'CERT',
          'CNAME',
          'DNSKEY',
          'DS',
          'HTTPS',
          'LOC',
          'MX',
          'NAPTR',
          'NS',
          'OPENPGPKEY',
          'PTR',
          'SMIMEA',
          'SRV',
          'SSHFP',
          'SVCB',
          'TLSA',
          'TXT',
          'URI',
        ] as const,
        default: undefined,
      })
      .option('content', {
        type: 'string',
        description: 'Exact value of the DNS record content. This is a convenience alias for \`content.exact\`.',
        default: undefined,
      })
      .option('content-exact', {
        type: 'string',
        description: 'Exact value of the DNS record content. Content filters are case-insensitive.',
        default: undefined,
      })
      .option('content-contains', {
        type: 'string',
        description: 'Substring of the DNS record content. Content filters are case-insensitive.',
        default: undefined,
      })
      .option('content-startswith', {
        type: 'string',
        description: 'Prefix of the DNS record content. Content filters are case-insensitive.',
        default: undefined,
      })
      .option('content-endswith', {
        type: 'string',
        description: 'Suffix of the DNS record content. Content filters are case-insensitive.',
        default: undefined,
      })
      .option('proxied', {
        type: 'string',
        description: 'Whether the record is receiving the performance and security benefits of Cloudflare.',
        default: undefined,
      })
      .option('match', {
        type: 'string',
        description:
          'Whether to match all search requirements or at least one (any). If set to \`all\`, acts like a logical AND between filters. If set to \`any\`, acts like a logical OR instead. Note that the interaction between tag filters is controlled by the \`tag-match\` parameter instead.',
        choices: ['any', 'all'] as const,
        default: undefined,
      })
      .option('comment', {
        type: 'string',
        description: 'Exact value of the DNS record comment. This is a convenience alias for \`comment.exact\`.',
        default: undefined,
      })
      .option('comment-present', {
        type: 'string',
        description: 'If this parameter is present, only records *with* a comment are returned.',
        default: undefined,
      })
      .option('comment-absent', {
        type: 'string',
        description: 'If this parameter is present, only records *without* a comment are returned.',
        default: undefined,
      })
      .option('comment-exact', {
        type: 'string',
        description: 'Exact value of the DNS record comment. Comment filters are case-insensitive.',
        default: undefined,
      })
      .option('comment-contains', {
        type: 'string',
        description: 'Substring of the DNS record comment. Comment filters are case-insensitive.',
        default: undefined,
      })
      .option('comment-startswith', {
        type: 'string',
        description: 'Prefix of the DNS record comment. Comment filters are case-insensitive.',
        default: undefined,
      })
      .option('comment-endswith', {
        type: 'string',
        description: 'Suffix of the DNS record comment. Comment filters are case-insensitive.',
        default: undefined,
      })
      .option('tag', {
        type: 'string',
        description:
          'Condition on the DNS record tag.  Parameter values can be of the form \`<tag-name>:<tag-value>\` to search for an exact \`name:value\` pair, or just \`<tag-name>\` to search for records with a specific tag name regardless of its value.  This is a convenience shorthand for the more powerful \`tag.<predicate>\` parameters. Examples: - \`tag=important\` is equivalent to \`tag.present=important\` - \`tag=team:DNS\` is equivalent to \`tag.exact=team:DNS\`',
        default: undefined,
      })
      .option('tag-present', {
        type: 'string',
        description: 'Name of a tag which must be present on the DNS record. Tag filters are case-insensitive.',
        default: undefined,
      })
      .option('tag-absent', {
        type: 'string',
        description: 'Name of a tag which must *not* be present on the DNS record. Tag filters are case-insensitive.',
        default: undefined,
      })
      .option('tag-exact', {
        type: 'string',
        description:
          'A tag and value, of the form \`<tag-name>:<tag-value>\`. The API will only return DNS records that have a tag named \`<tag-name>\` whose value is \`<tag-value>\`. Tag filters are case-insensitive.',
        default: undefined,
      })
      .option('tag-contains', {
        type: 'string',
        description:
          'A tag and value, of the form \`<tag-name>:<tag-value>\`. The API will only return DNS records that have a tag named \`<tag-name>\` whose value contains \`<tag-value>\`. Tag filters are case-insensitive.',
        default: undefined,
      })
      .option('tag-startswith', {
        type: 'string',
        description:
          'A tag and value, of the form \`<tag-name>:<tag-value>\`. The API will only return DNS records that have a tag named \`<tag-name>\` whose value starts with \`<tag-value>\`. Tag filters are case-insensitive.',
        default: undefined,
      })
      .option('tag-endswith', {
        type: 'string',
        description:
          'A tag and value, of the form \`<tag-name>:<tag-value>\`. The API will only return DNS records that have a tag named \`<tag-name>\` whose value ends with \`<tag-value>\`. Tag filters are case-insensitive.',
        default: undefined,
      })
      .option('search', {
        type: 'string',
        description:
          'Allows searching in multiple properties of a DNS record simultaneously. This parameter is intended for human users, not automation. Its exact behavior is intentionally left unspecified and is subject to change in the future. This parameter works independently of the \`match\` setting. For automated searches, please use the other available parameters.',
        default: undefined,
      })
      .option('tag-match', {
        type: 'string',
        description:
          "Whether to match all tag search requirements or at least one (any). If set to \`all\`, acts like a logical AND between tag filters. If set to \`any\`, acts like a logical OR instead. Note that the regular \`match\` parameter is still used to combine the resulting condition with other filters that aren't related to tags.",
        choices: ['any', 'all'] as const,
        default: undefined,
      })
      .option('page', {
        type: 'string',
        description: 'Page number of paginated results.',
        default: undefined,
      })
      .option('per-page', {
        type: 'string',
        description: 'Number of DNS records per page.',
        default: undefined,
      })
      .option('order', {
        type: 'string',
        description: 'Field to order DNS records by.',
        choices: ['type', 'name', 'content', 'ttl', 'proxied'] as const,
        default: undefined,
      })
      .option('direction', {
        type: 'string',
        description: 'Direction to order DNS records in.',
        choices: ['asc', 'desc'] as const,
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
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.nameExact !== undefined) params['nameExact'] = argv.nameExact;
      if (argv.nameContains !== undefined) params['nameContains'] = argv.nameContains;
      if (argv.nameStartswith !== undefined) params['nameStartswith'] = argv.nameStartswith;
      if (argv.nameEndswith !== undefined) params['nameEndswith'] = argv.nameEndswith;
      if (argv.type !== undefined) params['type'] = argv.type;
      if (argv.content !== undefined) params['content'] = argv.content;
      if (argv.contentExact !== undefined) params['contentExact'] = argv.contentExact;
      if (argv.contentContains !== undefined) params['contentContains'] = argv.contentContains;
      if (argv.contentStartswith !== undefined) params['contentStartswith'] = argv.contentStartswith;
      if (argv.contentEndswith !== undefined) params['contentEndswith'] = argv.contentEndswith;
      if (argv.proxied !== undefined) params['proxied'] = argv.proxied;
      if (argv.match !== undefined) params['match'] = argv.match;
      if (argv.comment !== undefined) params['comment'] = argv.comment;
      if (argv.commentPresent !== undefined) params['commentPresent'] = argv.commentPresent;
      if (argv.commentAbsent !== undefined) params['commentAbsent'] = argv.commentAbsent;
      if (argv.commentExact !== undefined) params['commentExact'] = argv.commentExact;
      if (argv.commentContains !== undefined) params['commentContains'] = argv.commentContains;
      if (argv.commentStartswith !== undefined) params['commentStartswith'] = argv.commentStartswith;
      if (argv.commentEndswith !== undefined) params['commentEndswith'] = argv.commentEndswith;
      if (argv.tag !== undefined) params['tag'] = argv.tag;
      if (argv.tagPresent !== undefined) params['tagPresent'] = argv.tagPresent;
      if (argv.tagAbsent !== undefined) params['tagAbsent'] = argv.tagAbsent;
      if (argv.tagExact !== undefined) params['tagExact'] = argv.tagExact;
      if (argv.tagContains !== undefined) params['tagContains'] = argv.tagContains;
      if (argv.tagStartswith !== undefined) params['tagStartswith'] = argv.tagStartswith;
      if (argv.tagEndswith !== undefined) params['tagEndswith'] = argv.tagEndswith;
      if (argv.search !== undefined) params['search'] = argv.search;
      if (argv.tagMatch !== undefined) params['tag_match'] = argv.tagMatch;
      if (argv.page !== undefined) params['page'] = argv.page;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.order !== undefined) params['order'] = argv.order;
      if (argv.direction !== undefined) params['direction'] = argv.direction;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.dns.records.list(zoneId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
