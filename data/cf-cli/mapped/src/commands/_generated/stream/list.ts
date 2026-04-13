/**
 * list command
 * @generated from apis/stream/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../lib/auth.js';
import { getDefaultHeaders } from '../../../lib/request-headers.js';
import { handleError } from '../../../lib/errors.js';
import { formatOutput } from '../../../lib/output.js';

interface ListArgs {
  status?: string;
  creator?: string;
  type?: string;
  asc?: string;
  'video-name'?: string;
  search?: string;
  start?: string;
  end?: string;
  'include-counts'?: string;
  id?: string;
  name?: string;
  'live-input-id'?: string;
  before?: string;
  after?: string;
  limit?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe: 'Lists up to 1000 videos from a single request. For a specific range, refer to the optional parameters.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('status', {
        type: 'string',
        description: 'Specifies the processing status for all quality levels for a video.',
        choices: ['pendingupload', 'downloading', 'queued', 'inprogress', 'ready', 'error', 'live-inprogress'] as const,
        default: undefined,
      })
      .option('creator', {
        type: 'string',
        description: 'A user-defined identifier for the media creator.',
        default: undefined,
      })
      .option('type', {
        type: 'string',
        description: 'Specifies whether the video is \`vod\` or \`live\`.',
        default: undefined,
      })
      .option('asc', {
        type: 'string',
        description: 'Lists videos in ascending order of creation.',
        default: undefined,
      })
      .option('video-name', {
        type: 'string',
        description: 'Provides a fast, exact string match on the \`name\` key in the \`meta\` field.',
        default: undefined,
      })
      .option('search', {
        type: 'string',
        description:
          'Provides a partial word match of the \`name\` key in the \`meta\` field. Slow for medium to large video libraries. May be unavailable for very large libraries.',
        default: undefined,
      })
      .option('start', {
        type: 'string',
        description: 'Lists videos created after the specified date.',
        default: undefined,
      })
      .option('end', {
        type: 'string',
        description: 'Lists videos created before the specified date.',
        default: undefined,
      })
      .option('include-counts', {
        type: 'string',
        description: 'Includes the total number of videos associated with the submitted query parameters.',
        default: undefined,
      })
      .option('id', {
        type: 'string',
        description: 'Filter by video ID(s). Can be a single ID or a comma-separated list of IDs.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'Filter by video name/UID(s). Can be a single name or a comma-separated list.',
        default: undefined,
      })
      .option('live-input-id', {
        type: 'string',
        description: 'Filter by live input ID to find videos associated with a specific live stream.',
        default: undefined,
      })
      .option('before', {
        type: 'string',
        description: "Alias for 'end'. Returns videos created before this date/time (RFC 3339 format).",
        default: undefined,
      })
      .option('after', {
        type: 'string',
        description: "Alias for 'start'. Returns videos created after this date/time (RFC 3339 format).",
        default: undefined,
      })
      .option('limit', {
        type: 'number',
        description: 'Maximum number of videos to return (default 1000, max 1000).',
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
      if (argv.status !== undefined) params['status'] = argv.status;
      if (argv.creator !== undefined) params['creator'] = argv.creator;
      if (argv.type !== undefined) params['type'] = argv.type;
      if (argv.asc !== undefined) params['asc'] = argv.asc;
      if (argv.videoName !== undefined) params['video_name'] = argv.videoName;
      if (argv.search !== undefined) params['search'] = argv.search;
      if (argv.start !== undefined) params['start'] = argv.start;
      if (argv.end !== undefined) params['end'] = argv.end;
      if (argv.includeCounts !== undefined) params['include_counts'] = argv.includeCounts;
      if (argv.id !== undefined) params['id'] = argv.id;
      if (argv.name !== undefined) params['name'] = argv.name;
      if (argv.liveInputId !== undefined) params['live_input_id'] = argv.liveInputId;
      if (argv.before !== undefined) params['before'] = argv.before;
      if (argv.after !== undefined) params['after'] = argv.after;
      if (argv.limit !== undefined) params['limit'] = argv.limit;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.stream.list(accountId, Object.keys(params).length > 0 ? params : undefined);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
