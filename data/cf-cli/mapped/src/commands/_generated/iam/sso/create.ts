/**
 * create command
 * @generated from apis/iam/schema.ts
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

interface CreateArgs {
  'begin-verification'?: boolean;
  'email-domain': string;
  'use-fedramp-language'?: boolean;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Creates a new SSO connector for logging into Cloudflare through an identity provider.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('begin-verification', {
        type: 'boolean',
        description: 'Begin the verification process after creation',
        default: false,
      })
      .option('email-domain', {
        type: 'string',
        description: 'Email domain of the new SSO connector',
      })
      .option('use-fedramp-language', {
        type: 'boolean',
        description: 'Controls the display of FedRAMP language to the user during SSO login',
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
      }) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf iam sso create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/sso_connectors`,
          pathParams: {},
          body: {
            beginVerification: argv.beginVerification,
            emailDomain: argv.emailDomain,
            useFedrampLanguage: argv.useFedrampLanguage,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/sso_connectors`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.beginVerification !== undefined)
        setNestedValue(bodyData, ['begin_verification'], argv.beginVerification);
      if (argv.emailDomain !== undefined) setNestedValue(bodyData, ['email_domain'], argv.emailDomain);
      if (argv.useFedrampLanguage !== undefined)
        setNestedValue(bodyData, ['use_fedramp_language'], argv.useFedrampLanguage);
      const result = await client.post<unknown>(`/accounts/${accountId}/sso_connectors`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
