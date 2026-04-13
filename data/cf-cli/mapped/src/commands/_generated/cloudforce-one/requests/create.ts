/**
 * create command
 * @generated from apis/cloudforce-one/schema.ts
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
  content?: string;
  priority?: string;
  'request-type'?: string;
  summary?: string;
  tlp?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe:
    'Creating a request adds the request into the Cloudforce One queue for analysis. In addition to the content, a short title, type, priority, and releasability should be provided. If one is not provided, a default will be assigned.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('content', {
        type: 'string',
        description: 'Request content.',
        default: undefined,
      })
      .option('priority', {
        type: 'string',
        description: 'Priority for analyzing the request.',
        default: undefined,
      })
      .option('request-type', {
        type: 'string',
        description: 'Requested information from request.',
        default: undefined,
      })
      .option('summary', {
        type: 'string',
        description: 'Brief description of the request.',
        default: undefined,
      })
      .option('tlp', {
        type: 'string',
        description: 'The CISA defined Traffic Light Protocol (TLP).',
        choices: ['clear', 'amber', 'amber-strict', 'green', 'red'] as const,
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
      .choices('tlp', ['clear', 'amber', 'amber-strict', 'green', 'red'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf cloudforce-one requests create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/cloudforce-one/requests/new`,
          pathParams: {},
          body: {
            content: argv.content,
            priority: argv.priority,
            requestType: argv.requestType,
            summary: argv.summary,
            tlp: argv.tlp,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/cloudforce-one/requests/new`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.content !== undefined) setNestedValue(bodyData, ['content'], argv.content);
      if (argv.priority !== undefined) setNestedValue(bodyData, ['priority'], argv.priority);
      if (argv.requestType !== undefined) setNestedValue(bodyData, ['request_type'], argv.requestType);
      if (argv.summary !== undefined) setNestedValue(bodyData, ['summary'], argv.summary);
      if (argv.tlp !== undefined) setNestedValue(bodyData, ['tlp'], argv.tlp);
      const result = await client.post<unknown>(`/accounts/${accountId}/cloudforce-one/requests/new`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
