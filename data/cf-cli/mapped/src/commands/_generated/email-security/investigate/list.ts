/**
 * list command
 * @generated from apis/email-security/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface ListArgs {
  start?: string;
  end?: string;
  query?: string;
  'detections-only'?: boolean;
  'action-log'?: boolean;
  'final-disposition'?: string;
  metric?: string;
  'message-action'?: string;
  recipient?: string;
  sender?: string;
  'alert-id'?: string;
  domain?: string;
  'message-id'?: string;
  subject?: string;
  'exact-subject'?: string;
  submissions?: boolean;
  cursor?: string;
  'per-page'?: number;
  page?: number;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ListArgs> = {
  command: 'list',
  describe:
    'Returns information for each email that matches the search parameter(s). If the search takes too long, the endpoint returns 202 with a Location header pointing to a polling endpoint where results can be retrieved once ready.',

  builder: (yargs: Argv): Argv<ListArgs> => {
    return yargs
      .option('start', {
        type: 'string',
        description: 'The beginning of the search date range. Defaults to \`now - 30 days\` if not provided.',
        default: undefined,
      })
      .option('end', {
        type: 'string',
        description: 'The end of the search date range. Defaults to \`now\` if not provided.',
        default: undefined,
      })
      .option('query', {
        type: 'string',
        description:
          'The space-delimited term used in the query. The search is case-insensitive.  The content of the following email metadata fields are searched: * alert_id * CC * From (envelope_from) * From Name * final_disposition * md5 hash (of any attachment) * sha1 hash (of any attachment) * sha256 hash (of any attachment) * name (of any attachment) * Reason * Received DateTime (yyyy-mm-ddThh:mm:ss) * Sent DateTime (yyyy-mm-ddThh:mm:ss) * ReplyTo * To (envelope_to) * To Name * Message-ID * smtp_helo_server_ip * smtp_previous_hop_ip * x_originating_ip * Subject',
        default: undefined,
      })
      .option('detections-only', {
        type: 'boolean',
        description: 'Determines if the search results will include detections or not.',
        default: false,
      })
      .option('action-log', {
        type: 'boolean',
        description: 'Determines if the message action log is included in the response.',
        default: false,
      })
      .option('final-disposition', {
        type: 'string',
        description: 'The dispositions the search filters by.',
        default: undefined,
      })
      .option('metric', {
        type: 'string',
        description: 'Metric',
        default: undefined,
      })
      .option('message-action', {
        type: 'string',
        description: 'The message actions the search filters by.',
        default: undefined,
      })
      .option('recipient', {
        type: 'string',
        description: 'Filter by recipient. Matches either an email address or a domain.',
        default: undefined,
      })
      .option('sender', {
        type: 'string',
        description: 'Filter by sender. Matches either an email address or a domain.',
        default: undefined,
      })
      .option('alert-id', {
        type: 'string',
        description: 'Alert ID',
        default: undefined,
      })
      .option('domain', {
        type: 'string',
        description: 'Filter by a domain found in the email: sender domain, recipient domain, or a domain in a link.',
        default: undefined,
      })
      .option('message-id', {
        type: 'string',
        description: 'Message ID',
        default: undefined,
      })
      .option('subject', {
        type: 'string',
        description: 'Search for messages containing individual keywords in any order within the subject.',
        default: undefined,
      })
      .option('exact-subject', {
        type: 'string',
        description: 'Search for messages with an exact subject match.',
        default: undefined,
      })
      .option('submissions', {
        type: 'boolean',
        description: 'Search for submissions instead of original messages',
        default: false,
      })
      .option('cursor', {
        type: 'string',
        description: 'Cursor',
        default: undefined,
      })
      .option('per-page', {
        type: 'number',
        description: 'The number of results per page.',
        default: undefined,
      })
      .option('page', {
        type: 'number',
        description: 'Deprecated: Use cursor pagination instead.',
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
      if (argv.start !== undefined) params['start'] = argv.start;
      if (argv.end !== undefined) params['end'] = argv.end;
      if (argv.query !== undefined) params['query'] = argv.query;
      if (argv.detectionsOnly !== undefined) params['detections_only'] = argv.detectionsOnly;
      if (argv.actionLog !== undefined) params['action_log'] = argv.actionLog;
      if (argv.finalDisposition !== undefined) params['final_disposition'] = argv.finalDisposition;
      if (argv.metric !== undefined) params['metric'] = argv.metric;
      if (argv.messageAction !== undefined) params['message_action'] = argv.messageAction;
      if (argv.recipient !== undefined) params['recipient'] = argv.recipient;
      if (argv.sender !== undefined) params['sender'] = argv.sender;
      if (argv.alertId !== undefined) params['alert_id'] = argv.alertId;
      if (argv.domain !== undefined) params['domain'] = argv.domain;
      if (argv.messageId !== undefined) params['message_id'] = argv.messageId;
      if (argv.subject !== undefined) params['subject'] = argv.subject;
      if (argv.exactSubject !== undefined) params['exact_subject'] = argv.exactSubject;
      if (argv.submissions !== undefined) params['submissions'] = argv.submissions;
      if (argv.cursor !== undefined) params['cursor'] = argv.cursor;
      if (argv.perPage !== undefined) params['per_page'] = argv.perPage;
      if (argv.page !== undefined) params['page'] = argv.page;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.emailSecurity.investigate.list(
        accountId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
