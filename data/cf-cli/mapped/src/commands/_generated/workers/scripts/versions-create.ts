/**
 * versions-create command
 * @generated from apis/workers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody } from '../../../../lib/body-parser.js';

interface VersionsCreateArgs {
  scriptName: string;
  'bindings-inherit'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, VersionsCreateArgs> = {
  command: 'versions-create <scriptName>',
  describe:
    "Upload a Worker Version without deploying to Cloudflare's network. You can find more about the multipart metadata on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/.",

  builder: (yargs: Argv): Argv<VersionsCreateArgs> => {
    return yargs
      .positional('scriptName', {
        type: 'string',
        description: 'Name of the script.',
        demandOption: true,
      })
      .option('bindings-inherit', {
        type: 'string',
        description:
          'When set to "strict", the upload will fail if any \`inherit\` type bindings cannot be resolved against the previous version of the Worker. Without this, unresolvable inherit bindings are silently dropped.',
        choices: ['strict'] as const,
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
      }) as Argv<VersionsCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<VersionsCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.scriptName as string | undefined, 'scriptName');

      const params: Record<string, unknown> = {};
      if (argv.bindingsInherit !== undefined) params['bindings_inherit'] = argv.bindingsInherit;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers scripts versions-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/workers/scripts/${argv.scriptName ?? '<scriptName>'}/versions`,
          pathParams: { scriptName: String(argv.scriptName ?? '') },
          body: { ...params },
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
          `/accounts/${accountId}/workers/scripts/${argv.scriptName}/versions`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.workers.scripts.versionsCreate(
        accountId,
        argv.scriptName,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
