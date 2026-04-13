/**
 * screenshot command
 * @generated from apis/url-scanner/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ScreenshotArgs {
  scanId: string;
  resolution?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ScreenshotArgs> = {
  command: 'screenshot <scanId>',
  describe: "Get scan's screenshot by resolution (desktop/mobile/tablet).",

  builder: (yargs: Argv): Argv<ScreenshotArgs> => {
    return yargs
      .positional('scanId', {
        type: 'string',
        description: 'Scan UUID.',
        demandOption: true,
      })
      .option('resolution', {
        type: 'string',
        description: 'Target device type.',
        choices: ['desktop', 'mobile', 'tablet'] as const,
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
      }) as Argv<ScreenshotArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ScreenshotArgs>): Promise<void> => {
    try {
      validateResourceId(argv.scanId as string | undefined, 'scanId');

      const params: Record<string, unknown> = {};
      if (argv.resolution !== undefined) params['resolution'] = argv.resolution;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.urlScanner.scans.screenshot(
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
