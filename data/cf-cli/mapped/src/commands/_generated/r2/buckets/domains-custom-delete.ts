/**
 * domains-custom-delete command
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

interface DomainsCustomDeleteArgs {
  bucketName: string;
  domain: string;
  'cf-r2-jurisdiction'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DomainsCustomDeleteArgs> = {
  command: 'domains-custom-delete <bucketName> <domain>',
  describe: 'Remove custom domain registration from an existing R2 bucket.',

  builder: (yargs: Argv): Argv<DomainsCustomDeleteArgs> => {
    return yargs
      .positional('bucketName', {
        type: 'string',
        description: 'Name of the bucket.',
        demandOption: true,
      })
      .positional('domain', {
        type: 'string',
        description: 'Name of the custom domain.',
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
      }) as Argv<DomainsCustomDeleteArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DomainsCustomDeleteArgs>): Promise<void> => {
    try {
      validateResourceId(argv.bucketName as string | undefined, 'bucketName');
      validateResourceId(argv.domain as string | undefined, 'domain');

      const headers: Record<string, string> = {};
      if (argv.cfR2Jurisdiction !== undefined) headers['cf-r2-jurisdiction'] = String(argv.cfR2Jurisdiction);

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf r2 buckets domains-custom-delete',
          method: 'DELETE',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/r2/buckets/${argv.bucketName ?? '<bucketName>'}/domains/custom/${argv.domain ?? '<domain>'}`,
          pathParams: { bucketName: String(argv.bucketName ?? ''), domain: String(argv.domain ?? '') },
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

      const result = await client.delete<unknown>(
        `/accounts/${accountId}/r2/buckets/${argv.bucketName}/domains/custom/${argv.domain}`,
        { headers: Object.keys(headers).length > 0 ? headers : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
