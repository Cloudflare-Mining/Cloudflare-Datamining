/**
 * har-get command
 * @generated from apis/url-scanner/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface HarGetArgs {
  scanId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, HarGetArgs> = {
  command: 'har-get <scanId>',
  describe: "Get a URL scan's HAR file. See HAR spec at http://www.softwareishard.com/blog/har-12-spec/.",

  builder: (yargs: Argv): Argv<HarGetArgs> => {
    return yargs
      .positional('scanId', {
        type: 'string',
        description: 'Scan UUID.',
        demandOption: true,
      })
      .option('fields', {
        type: 'string',
        description: 'Comma-separated list of fields to include in output',
      })
      .option('ndjson', {
        type: 'boolean',
        description: 'Output as newline-delimited JSON (one object per line)',
        default: false,
      }) as Argv<HarGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<HarGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.scanId as string | undefined, 'scanId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.urlScanner.scan.harGet(argv.scanId, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
