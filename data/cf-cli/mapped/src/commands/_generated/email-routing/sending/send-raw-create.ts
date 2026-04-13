/**
 * send-raw-create command
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

interface SendRawCreateArgs {
  from: string;
  'mime-message': string;
  recipients: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, SendRawCreateArgs> = {
  command: 'send-raw-create',
  describe: 'Send a raw MIME email',

  builder: (yargs: Argv): Argv<SendRawCreateArgs> => {
    return yargs
      .option('from', {
        type: 'string',
        description: 'Sender email address.',
      })
      .option('mime-message', {
        type: 'string',
        description:
          "The full MIME-encoded email message. Should include standard RFC 5322 headers such as From, To, Subject, and Content-Type. The from and recipients fields in the request body control SMTP envelope routing; the From and To headers in the MIME message control what the recipient's email client displays.",
      })
      .option('recipients', {
        type: 'string',
        description: 'List of recipient email addresses.',
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
      }) as Argv<SendRawCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<SendRawCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf email-routing sending send-raw-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/email/sending/send_raw`,
          pathParams: {},
          body: { from: argv.from, mimeMessage: argv.mimeMessage, recipients: argv.recipients },
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
        const result = await client.post<unknown>(`/accounts/${accountId}/email/sending/send_raw`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.from !== undefined) setNestedValue(bodyData, ['from'], argv.from);
      if (argv.mimeMessage !== undefined) setNestedValue(bodyData, ['mime_message'], argv.mimeMessage);
      if (argv.recipients !== undefined) setNestedValue(bodyData, ['recipients'], argv.recipients);
      const result = await client.post<unknown>(`/accounts/${accountId}/email/sending/send_raw`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
