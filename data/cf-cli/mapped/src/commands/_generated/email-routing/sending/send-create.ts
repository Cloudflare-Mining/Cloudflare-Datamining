/**
 * send-create command
 * @generated from apis/email-routing/schema.ts
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

interface SendCreateArgs {
  'from-address'?: string;
  'from-name'?: string;
  html?: string;
  'reply-to-address'?: string;
  'reply-to-name'?: string;
  subject: string;
  text?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, SendCreateArgs> = {
  command: 'send-create',
  describe: 'Send an email',

  builder: (yargs: Argv): Argv<SendCreateArgs> => {
    return yargs
      .option('from-address', {
        type: 'string',
        description: "Email address (e.g., 'user@example.com').",
        default: undefined,
      })
      .option('from-name', {
        type: 'string',
        description: "Display name for the email address (e.g., 'John Doe').",
        default: undefined,
      })
      .option('html', {
        type: 'string',
        description: 'HTML body of the email. At least one of text or html must be provided.',
        default: undefined,
      })
      .option('reply-to-address', {
        type: 'string',
        description: "Email address (e.g., 'user@example.com').",
        default: undefined,
      })
      .option('reply-to-name', {
        type: 'string',
        description: "Display name for the email address (e.g., 'John Doe').",
        default: undefined,
      })
      .option('subject', {
        type: 'string',
        description: 'Email subject line.',
      })
      .option('text', {
        type: 'string',
        description: 'Plain text body of the email. At least one of text or html must be provided.',
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
      .implies('from-address', ['fromName'])
      .implies('from-name', ['fromAddress'])
      .implies('reply-to-address', ['replyToName'])
      .implies('reply-to-name', ['replyToAddress']) as Argv<SendCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SendCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf email-routing sending send-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/email/sending/send`,
          pathParams: {},
          body: {
            fromAddress: argv.fromAddress,
            fromName: argv.fromName,
            html: argv.html,
            replyToAddress: argv.replyToAddress,
            replyToName: argv.replyToName,
            subject: argv.subject,
            text: argv.text,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/email/sending/send`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.fromAddress !== undefined) setNestedValue(bodyData, ['from', 'address'], argv.fromAddress);
      if (argv.fromName !== undefined) setNestedValue(bodyData, ['from', 'name'], argv.fromName);
      if (argv.html !== undefined) setNestedValue(bodyData, ['html'], argv.html);
      if (argv.replyToAddress !== undefined) setNestedValue(bodyData, ['reply_to', 'address'], argv.replyToAddress);
      if (argv.replyToName !== undefined) setNestedValue(bodyData, ['reply_to', 'name'], argv.replyToName);
      if (argv.subject !== undefined) setNestedValue(bodyData, ['subject'], argv.subject);
      if (argv.text !== undefined) setNestedValue(bodyData, ['text'], argv.text);
      const result = await client.post<unknown>(`/accounts/${accountId}/email/sending/send`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
