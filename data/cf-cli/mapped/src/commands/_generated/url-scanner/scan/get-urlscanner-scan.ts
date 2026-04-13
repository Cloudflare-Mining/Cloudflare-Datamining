/**
 * get-urlscanner-scan command
 * @generated from apis/url-scanner/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface GetUrlscannerScanArgs {
  scanId: string;
  full?: boolean;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, GetUrlscannerScanArgs> = {
  command: 'get-urlscanner-scan <scanId>',
  describe: 'Get URL scan by uuid',

  builder: (yargs: Argv): Argv<GetUrlscannerScanArgs> => {
    return yargs
      .positional('scanId', {
        type: 'string',
        description: 'Scan UUID.',
        demandOption: true,
      })
      .option('full', {
        type: 'boolean',
        description: 'Whether to return full report (scan summary and network log).',
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
      }) as Argv<GetUrlscannerScanArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<GetUrlscannerScanArgs>): Promise<void> => {
    try {
      validateResourceId(argv.scanId as string | undefined, 'scanId');

      const params: Record<string, unknown> = {};
      if (argv.full !== undefined) params['full'] = argv.full;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.urlScanner.scan.getUrlscannerScan(
        argv.scanId,
        accountId,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
