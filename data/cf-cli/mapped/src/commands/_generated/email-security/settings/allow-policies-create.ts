/**
 * allow-policies-create command
 * @generated from apis/email-security/schema.ts
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

interface AllowPoliciesCreateArgs {
  comments?: string;
  'is-acceptable-sender': boolean;
  'is-exempt-recipient': boolean;
  'is-recipient'?: boolean;
  'is-regex': boolean;
  'is-sender'?: boolean;
  'is-spoof'?: boolean;
  'is-trusted-sender': boolean;
  pattern: string;
  'pattern-type': string;
  'verify-sender': boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, AllowPoliciesCreateArgs> = {
  command: 'allow-policies-create',
  describe:
    'Creates a new email allow policy that permits specific senders, domains, or patterns to bypass security scanning.',

  builder: (yargs: Argv): Argv<AllowPoliciesCreateArgs> => {
    return yargs
      .option('comments', {
        type: 'string',
        description: 'The comments field',
        default: undefined,
      })
      .option('is-acceptable-sender', {
        type: 'boolean',
        description:
          'Messages from this sender will be exempted from Spam, Spoof and Bulk dispositions. Note: This will not exempt messages with Malicious or Suspicious dispositions.',
      })
      .option('is-exempt-recipient', {
        type: 'boolean',
        description: 'Messages to this recipient will bypass all detections.',
      })
      .option('is-recipient', {
        type: 'boolean',
        description: 'The is_recipient field',
        default: false,
      })
      .option('is-regex', {
        type: 'boolean',
        description: 'The is_regex field',
      })
      .option('is-sender', {
        type: 'boolean',
        description: 'The is_sender field',
        default: false,
      })
      .option('is-spoof', {
        type: 'boolean',
        description: 'The is_spoof field',
        default: false,
      })
      .option('is-trusted-sender', {
        type: 'boolean',
        description: 'Messages from this sender will bypass all detections and link following.',
      })
      .option('pattern', {
        type: 'string',
        description: 'The pattern field',
      })
      .option('pattern-type', {
        type: 'string',
        description: 'The pattern_type field',
        choices: ['EMAIL', 'DOMAIN', 'IP', 'UNKNOWN'] as const,
      })
      .option('verify-sender', {
        type: 'boolean',
        description:
          'Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication.',
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
      .choices('pattern-type', ['EMAIL', 'DOMAIN', 'IP', 'UNKNOWN'] as const) as Argv<AllowPoliciesCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AllowPoliciesCreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf email-security settings allow-policies-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/email-security/settings/allow_policies`,
          pathParams: {},
          body: {
            comments: argv.comments,
            isAcceptableSender: argv.isAcceptableSender,
            isExemptRecipient: argv.isExemptRecipient,
            isRecipient: argv.isRecipient,
            isRegex: argv.isRegex,
            isSender: argv.isSender,
            isSpoof: argv.isSpoof,
            isTrustedSender: argv.isTrustedSender,
            pattern: argv.pattern,
            patternType: argv.patternType,
            verifySender: argv.verifySender,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/email-security/settings/allow_policies`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.comments !== undefined) setNestedValue(bodyData, ['comments'], argv.comments);
      if (argv.isAcceptableSender !== undefined)
        setNestedValue(bodyData, ['is_acceptable_sender'], argv.isAcceptableSender);
      if (argv.isExemptRecipient !== undefined)
        setNestedValue(bodyData, ['is_exempt_recipient'], argv.isExemptRecipient);
      if (argv.isRecipient !== undefined) setNestedValue(bodyData, ['is_recipient'], argv.isRecipient);
      if (argv.isRegex !== undefined) setNestedValue(bodyData, ['is_regex'], argv.isRegex);
      if (argv.isSender !== undefined) setNestedValue(bodyData, ['is_sender'], argv.isSender);
      if (argv.isSpoof !== undefined) setNestedValue(bodyData, ['is_spoof'], argv.isSpoof);
      if (argv.isTrustedSender !== undefined) setNestedValue(bodyData, ['is_trusted_sender'], argv.isTrustedSender);
      if (argv.pattern !== undefined) setNestedValue(bodyData, ['pattern'], argv.pattern);
      if (argv.patternType !== undefined) setNestedValue(bodyData, ['pattern_type'], argv.patternType);
      if (argv.verifySender !== undefined) setNestedValue(bodyData, ['verify_sender'], argv.verifySender);
      const result = await client.post<unknown>(`/accounts/${accountId}/email-security/settings/allow_policies`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
