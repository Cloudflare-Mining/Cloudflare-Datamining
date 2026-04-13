/**
 * tests-get command
 * @generated from apis/speed/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface TestsGetArgs {
  zoneId?: string;
  url: string;
  testId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, TestsGetArgs> = {
  command: 'tests-get [zoneId] <url> <testId>',
  describe: 'Retrieves the result of a specific test.',

  builder: (yargs: Argv): Argv<TestsGetArgs> => {
    return yargs
      .positional('zoneId', {
        type: 'string',
        description: 'Identifier. (or use --zone flag)',
      })
      .positional('url', {
        type: 'string',
        description: 'A URL.',
        demandOption: true,
      })
      .positional('testId', {
        type: 'string',
        description: 'Test ID',
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
      }) as Argv<TestsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TestsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.url as string | undefined, 'url');
      validateResourceId(argv.testId as string | undefined, 'testId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone, zoneId: argv.zoneId }, client, { quiet: argv.quiet });

      const result = await client.speed.pages.testsGet(zoneId, argv.url, argv.testId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
