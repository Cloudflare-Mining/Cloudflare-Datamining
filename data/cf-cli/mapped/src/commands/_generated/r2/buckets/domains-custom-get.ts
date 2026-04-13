/**
 * domains-custom-get command
 * @generated from apis/r2/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface DomainsCustomGetArgs {
  bucketName: string;
  domain: string;
  'cf-r2-jurisdiction'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, DomainsCustomGetArgs> = {
  command: 'domains-custom-get <bucketName> <domain>',
  describe: 'Get the configuration for a custom domain on an existing R2 bucket.',

  builder: (yargs: Argv): Argv<DomainsCustomGetArgs> => {
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
      }) as Argv<DomainsCustomGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<DomainsCustomGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.bucketName as string | undefined, 'bucketName');
      validateResourceId(argv.domain as string | undefined, 'domain');

      const headers: Record<string, string> = {};
      if (argv.cfR2Jurisdiction !== undefined) headers['cf-r2-jurisdiction'] = String(argv.cfR2Jurisdiction);
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.get<unknown>(
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
