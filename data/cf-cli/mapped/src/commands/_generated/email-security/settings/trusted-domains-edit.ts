/**
 * trusted-domains-edit command
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

interface TrustedDomainsEditArgs {
  trustedDomainId: string;
  comments?: string;
  'is-recent'?: boolean;
  'is-regex'?: boolean;
  'is-similarity'?: boolean;
  pattern?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, TrustedDomainsEditArgs> = {
  command: 'trusted-domains-edit <trustedDomainId>',
  describe: "Modifies a trusted domain entry's configuration.",

  builder: (yargs: Argv): Argv<TrustedDomainsEditArgs> => {
    return yargs
      .positional('trustedDomainId', {
        type: 'string',
        description: 'The unique identifier for the trusted domain.',
        demandOption: true,
      })
      .option('comments', {
        type: 'string',
        description: 'The comments field',
        default: undefined,
      })
      .option('is-recent', {
        type: 'boolean',
        description:
          'Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition.',
        default: false,
      })
      .option('is-regex', {
        type: 'boolean',
        description: 'The is_regex field',
        default: false,
      })
      .option('is-similarity', {
        type: 'boolean',
        description:
          'Select for partner or other approved domains that have similar spelling to your connected domains. Prevents listed domains from triggering a Spoof disposition.',
        default: false,
      })
      .option('pattern', {
        type: 'string',
        description: 'The pattern field',
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
      }) as Argv<TrustedDomainsEditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TrustedDomainsEditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.trustedDomainId as string | undefined, 'trustedDomainId');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf email-security settings trusted-domains-edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/email-security/settings/trusted_domains/${argv.trustedDomainId ?? '<trustedDomainId>'}`,
          pathParams: { trustedDomainId: String(argv.trustedDomainId ?? '') },
          body: {
            comments: argv.comments,
            isRecent: argv.isRecent,
            isRegex: argv.isRegex,
            isSimilarity: argv.isSimilarity,
            pattern: argv.pattern,
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
          `/accounts/${accountId}/email-security/settings/trusted_domains/${argv.trustedDomainId}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.comments !== undefined) setNestedValue(bodyData, ['comments'], argv.comments);
      if (argv.isRecent !== undefined) setNestedValue(bodyData, ['is_recent'], argv.isRecent);
      if (argv.isRegex !== undefined) setNestedValue(bodyData, ['is_regex'], argv.isRegex);
      if (argv.isSimilarity !== undefined) setNestedValue(bodyData, ['is_similarity'], argv.isSimilarity);
      if (argv.pattern !== undefined) setNestedValue(bodyData, ['pattern'], argv.pattern);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/email-security/settings/trusted_domains/${argv.trustedDomainId}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
