/**
 * allow-policies-edit command
 * @generated from apis/email-security/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface AllowPoliciesEditArgs {
  policyId: string;
  comments?: string;
  'is-acceptable-sender'?: boolean;
  'is-exempt-recipient'?: boolean;
  'is-regex'?: boolean;
  'is-trusted-sender'?: boolean;
  pattern?: string;
  'verify-sender'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, AllowPoliciesEditArgs> = {
  command: 'allow-policies-edit <policyId>',
  describe: 'Updates an existing email allow policy, modifying its matching criteria or scope.',

  builder: (yargs: Argv): Argv<AllowPoliciesEditArgs> => {
    return yargs
      .positional('policyId', {
        type: 'string',
        description: 'The unique identifier for the allow policy.',
        demandOption: true,
      })
      .option('comments', {
        type: 'string',
        description: 'The comments field',
        default: undefined,
      })
      .option('is-acceptable-sender', {
        type: 'boolean',
        description:
          'Messages from this sender will be exempted from Spam, Spoof and Bulk dispositions. Note: This will not exempt messages with Malicious or Suspicious dispositions.',
        default: false,
      })
      .option('is-exempt-recipient', {
        type: 'boolean',
        description: 'Messages to this recipient will bypass all detections.',
        default: false,
      })
      .option('is-regex', {
        type: 'boolean',
        description: 'The is_regex field',
        default: false,
      })
      .option('is-trusted-sender', {
        type: 'boolean',
        description: 'Messages from this sender will bypass all detections and link following.',
        default: false,
      })
      .option('pattern', {
        type: 'string',
        description: 'The pattern field',
        default: undefined,
      })
      .option('verify-sender', {
        type: 'boolean',
        description:
          'Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication.',
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
      }) as Argv<AllowPoliciesEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<AllowPoliciesEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.policyId as string | undefined, 'policyId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf email-security settings allow-policies-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/email-security/settings/allow_policies/${argv.policyId ?? '<policyId>'}`,
          pathParams: { policyId: String(argv.policyId ?? '') },
          body: {
            comments: argv.comments,
            isAcceptableSender: argv.isAcceptableSender,
            isExemptRecipient: argv.isExemptRecipient,
            isRegex: argv.isRegex,
            isTrustedSender: argv.isTrustedSender,
            pattern: argv.pattern,
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
        const result = await client.patch<unknown>(
          `/accounts/${accountId}/email-security/settings/allow_policies/${argv.policyId}`,
          { body: bodyData },
        );
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
      if (argv.isRegex !== undefined) setNestedValue(bodyData, ['is_regex'], argv.isRegex);
      if (argv.isTrustedSender !== undefined) setNestedValue(bodyData, ['is_trusted_sender'], argv.isTrustedSender);
      if (argv.pattern !== undefined) setNestedValue(bodyData, ['pattern'], argv.pattern);
      if (argv.verifySender !== undefined) setNestedValue(bodyData, ['verify_sender'], argv.verifySender);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/email-security/settings/allow_policies/${argv.policyId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
