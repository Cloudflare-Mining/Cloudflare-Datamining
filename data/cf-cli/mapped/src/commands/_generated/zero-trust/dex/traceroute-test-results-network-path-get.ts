/**
 * traceroute-test-results-network-path-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface TracerouteTestResultsNetworkPathGetArgs {
  testResultId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, TracerouteTestResultsNetworkPathGetArgs> = {
  command: 'traceroute-test-results-network-path-get <testResultId>',
  describe: 'Get a breakdown of hops and performance metrics for a specific traceroute test run',

  builder: (yargs: Argv): Argv<TracerouteTestResultsNetworkPathGetArgs> => {
    return yargs
      .positional('testResultId', {
        type: 'string',
        description: 'unique identifier for a specific traceroute test',
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
      }) as Argv<TracerouteTestResultsNetworkPathGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<TracerouteTestResultsNetworkPathGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.testResultId as string | undefined, 'testResultId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.dex.tracerouteTestResultsNetworkPathGet(accountId, argv.testResultId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
