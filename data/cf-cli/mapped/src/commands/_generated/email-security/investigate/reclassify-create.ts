/**
 * reclassify-create command
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

interface ReclassifyCreateArgs {
  postfixId: string;
  submission?: boolean;
  'eml-content'?: string;
  'escalated-submission-id'?: string;
  'expected-disposition': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, ReclassifyCreateArgs> = {
  command: 'reclassify-create <postfixId>',
  describe: 'Submits an email message for reclassification, updating its threat assessment based on new analysis.',

  builder: (yargs: Argv): Argv<ReclassifyCreateArgs> => {
    return yargs
      .positional('postfixId', {
        type: 'string',
        description: 'The identifier of the message.',
        demandOption: true,
      })
      .option('submission', {
        type: 'boolean',
        description:
          'When true, search the submissions datastore only. When false or omitted, search the regular datastore only.',
        default: false,
      })
      .option('eml-content', {
        type: 'string',
        description: 'Base64 encoded content of the EML file',
        default: undefined,
      })
      .option('escalated-submission-id', {
        type: 'string',
        description: 'The escalated_submission_id field',
        default: undefined,
      })
      .option('expected-disposition', {
        type: 'string',
        description: 'The expected_disposition field',
        choices: ['NONE', 'BULK', 'MALICIOUS', 'SPAM', 'SPOOF', 'SUSPICIOUS'] as const,
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
      .choices('expected-disposition', [
        'NONE',
        'BULK',
        'MALICIOUS',
        'SPAM',
        'SPOOF',
        'SUSPICIOUS',
      ] as const) as Argv<ReclassifyCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ReclassifyCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.postfixId as string | undefined, 'postfixId');

      const params: Record<string, unknown> = {};
      if (argv.submission !== undefined) params['submission'] = argv.submission;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf email-security investigate reclassify-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/email-security/investigate/${argv.postfixId ?? '<postfixId>'}/reclassify`,
          pathParams: { postfixId: String(argv.postfixId ?? '') },
          body: {
            ...params,
            emlContent: argv.emlContent,
            escalatedSubmissionId: argv.escalatedSubmissionId,
            expectedDisposition: argv.expectedDisposition,
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
        const result = await client.post<unknown>(
          `/accounts/${accountId}/email-security/investigate/${argv.postfixId}/reclassify`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.emlContent !== undefined) setNestedValue(bodyData, ['eml_content'], argv.emlContent);
      if (argv.escalatedSubmissionId !== undefined)
        setNestedValue(bodyData, ['escalated_submission_id'], argv.escalatedSubmissionId);
      if (argv.expectedDisposition !== undefined)
        setNestedValue(bodyData, ['expected_disposition'], argv.expectedDisposition);
      const qs = new URLSearchParams(
        Object.entries(params)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => [k, String(v)]),
      ).toString();
      const result = await client.post<unknown>(
        `/accounts/${accountId}/email-security/investigate/${argv.postfixId}/reclassify${qs ? '?' + qs : ''}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
