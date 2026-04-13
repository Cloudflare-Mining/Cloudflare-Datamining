/**
 * content-update command
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

interface ContentUpdateArgs {
  scriptName: string;
  'cf-worker-body-part'?: string;
  'cf-worker-main-module-part'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  file?: string;
  accountId?: string;
}

const command: CommandModule<object, ContentUpdateArgs> = {
  command: 'content-update <scriptName>',
  describe: 'Put script content without touching config or metadata.',

  builder: (yargs: Argv): Argv<ContentUpdateArgs> => {
    return yargs
      .positional('scriptName', {
        type: 'string',
        description: 'Name of the script, used in URLs and route configuration.',
        demandOption: true,
      })
      .option('cf-worker-body-part', {
        type: 'string',
        description:
          'The multipart name of a script upload part containing script content in service worker format. Alternative to including in a metadata part.',
        default: undefined,
      })
      .option('cf-worker-main-module-part', {
        type: 'string',
        description:
          'The multipart name of a script upload part containing script content in es module format. Alternative to including in a metadata part.',
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
      .option('file', {
        type: 'string',
        description: 'Path to a file to upload as the request body',
      }) as Argv<ContentUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ContentUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.scriptName as string | undefined, 'scriptName');

      const headers: Record<string, string> = {};
      if (argv.cfWorkerBodyPart !== undefined) headers['CF-WORKER-BODY-PART'] = String(argv.cfWorkerBodyPart);
      if (argv.cfWorkerMainModulePart !== undefined)
        headers['CF-WORKER-MAIN-MODULE-PART'] = String(argv.cfWorkerMainModulePart);

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers scripts content-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/workers/scripts/${argv.scriptName ?? '<scriptName>'}/content`,
          pathParams: { scriptName: String(argv.scriptName ?? '') },
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

      if (argv.file) {
        const { readFileSync } = await import('node:fs');
        const { resolve } = await import('node:path');
        const filePath = resolve(argv.file);
        const fileContent = readFileSync(filePath);
        const formData = new FormData();
        formData.append('file', new Blob([fileContent]), argv.file.split('/').pop());
        const result = await client.put<unknown>(`/accounts/${accountId}/workers/scripts/${argv.scriptName}/content`, {
          body: formData,
          headers: Object.keys(headers).length > 0 ? headers : undefined,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.put<unknown>(`/accounts/${accountId}/workers/scripts/${argv.scriptName}/content`, {
          body: bodyData,
          headers: Object.keys(headers).length > 0 ? headers : undefined,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.put<unknown>(`/accounts/${accountId}/workers/scripts/${argv.scriptName}/content`, {
        headers: Object.keys(headers).length > 0 ? headers : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
