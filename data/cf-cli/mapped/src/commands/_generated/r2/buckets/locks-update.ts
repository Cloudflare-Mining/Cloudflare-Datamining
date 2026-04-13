/**
 * locks-update command
 * @generated from apis/r2/schema.ts
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

interface LocksUpdateArgs {
  bucketName: string;
  'cf-r2-jurisdiction'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, LocksUpdateArgs> = {
  command: 'locks-update <bucketName>',
  describe: 'Set lock rules for a bucket.',

  builder: (yargs: Argv): Argv<LocksUpdateArgs> => {
    return yargs
      .positional('bucketName', {
        type: 'string',
        description: 'Name of the bucket.',
        demandOption: true,
      })
      .option('cf-r2-jurisdiction', {
        type: 'string',
        description: 'Jurisdiction where objects in this bucket are guaranteed to be stored.',
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
      }) as Argv<LocksUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<LocksUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.bucketName as string | undefined, 'bucketName');

      const headers: Record<string, string> = {};
      if (argv.cfR2Jurisdiction !== undefined) headers['cf-r2-jurisdiction'] = String(argv.cfR2Jurisdiction);

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf r2 buckets locks-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/r2/buckets/${argv.bucketName ?? '<bucketName>'}/lock`,
          pathParams: { bucketName: String(argv.bucketName ?? '') },
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
        const result = await client.put<unknown>(`/accounts/${accountId}/r2/buckets/${argv.bucketName}/lock`, {
          body: bodyData,
          headers: Object.keys(headers).length > 0 ? headers : undefined,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      const result = await client.put<unknown>(`/accounts/${accountId}/r2/buckets/${argv.bucketName}/lock`, {
        headers: Object.keys(headers).length > 0 ? headers : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
