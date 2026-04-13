/**
 * tests-unique-devices-list command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';

interface TestsUniqueDevicesListArgs {
  'test-name'?: string;
  'device-id'?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TestsUniqueDevicesListArgs> = {
  command: 'tests-unique-devices-list',
  describe: 'Returns unique count of devices that have run synthetic application monitoring tests in the past 7 days.',

  builder: (yargs: Argv): Argv<TestsUniqueDevicesListArgs> => {
    return yargs
      .option('test-name', {
        type: 'string',
        description: 'Optionally filter results by test name',
        default: undefined,
      })
      .option('device-id', {
        type: 'string',
        description:
          'Optionally filter result stats to a specific device(s). Cannot be used in combination with colo param.',
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
      }) as Argv<TestsUniqueDevicesListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TestsUniqueDevicesListArgs>): Promise<void> => {
    try {
      const params: Record<string, unknown> = {};
      if (argv.testName !== undefined) params['testName'] = argv.testName;
      if (argv.deviceId !== undefined) params['deviceId'] = argv.deviceId;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.dex.testsUniqueDevicesList(
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
