/**
 * create command
 * @generated from apis/bot-management/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface CreateArgs {
  zoneId?: string;
  description: string;
  expression: string;
  'first-request-seen-at': string;
  'last-request-seen-at': string;
  requests: number;
  subtype?: string;
  type: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create [zoneId]',
  describe:
    'Submit a feedback report for the specified zone. Use \`type\` to indicate whether the report is a false positive (good traffic flagged as bot) or a false negative (bot traffic missed). Furthermore, you can also use \`expression\` as a wirefilter to identify the affected traffic sample. See more accepted API fields and expression types at https://developers.cloudflare.com/bots/concepts/feedback-loop/#api-fields and https://developers.cloudflare.com/bots/concepts/feedback-loop/#expression-fields, respectively.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .option('description', {
        type: 'string',
        description: 'The description field',
      })
      .option('expression', {
        type: 'string',
        description: 'Wirefilter expression describing the traffic being reported.',
      })
      .option('first-request-seen-at', {
        type: 'string',
        description: 'The first_request_seen_at field',
      })
      .option('last-request-seen-at', {
        type: 'string',
        description: 'The last_request_seen_at field',
      })
      .option('requests', {
        type: 'number',
        description: 'The requests field',
      })
      .option('subtype', {
        type: 'string',
        description: 'The subtype field',
        default: undefined,
      })
      .option('type', {
        type: 'string',
        description: 'Type of feedback report.',
        choices: ['false_positive', 'false_negative'] as const,
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
      .choices('type', ['false_positive', 'false_negative'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        formatDryRun({
          command: 'cf bot-management feedback create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/bot_management/feedback`,
          pathParams: { zoneId: String(argv.zoneId ?? '') },
          body: {
            description: argv.description,
            expression: argv.expression,
            firstRequestSeenAt: argv.firstRequestSeenAt,
            lastRequestSeenAt: argv.lastRequestSeenAt,
            requests: argv.requests,
            subtype: argv.subtype,
            type: argv.type,
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
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.post<unknown>(`/zones/${zoneId}/bot_management/feedback`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.expression !== undefined) setNestedValue(bodyData, ['expression'], argv.expression);
      if (argv.firstRequestSeenAt !== undefined)
        setNestedValue(bodyData, ['first_request_seen_at'], argv.firstRequestSeenAt);
      if (argv.lastRequestSeenAt !== undefined)
        setNestedValue(bodyData, ['last_request_seen_at'], argv.lastRequestSeenAt);
      if (argv.requests !== undefined) setNestedValue(bodyData, ['requests'], argv.requests);
      if (argv.subtype !== undefined) setNestedValue(bodyData, ['subtype'], argv.subtype);
      if (argv.type !== undefined) setNestedValue(bodyData, ['type'], argv.type);
      const result = await client.post<unknown>(`/zones/${zoneId}/bot_management/feedback`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
