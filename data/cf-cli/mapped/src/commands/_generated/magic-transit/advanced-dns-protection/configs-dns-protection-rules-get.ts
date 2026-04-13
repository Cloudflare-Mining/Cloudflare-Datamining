/**
 * configs-dns-protection-rules-get command
 * @generated from apis/magic-transit/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface ConfigsDNSProtectionRulesGetArgs {
  ruleId: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, ConfigsDNSProtectionRulesGetArgs> = {
  command: 'configs-dns-protection-rules-get <ruleId>',
  describe: 'Get a DNS Protection rule specified by the given UUID.',

  builder: (yargs: Argv): Argv<ConfigsDNSProtectionRulesGetArgs> => {
    return yargs
      .positional('ruleId', {
        type: 'string',
        description: 'The UUID of the DNS Protection rule.',
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
      }) as Argv<ConfigsDNSProtectionRulesGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<ConfigsDNSProtectionRulesGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.ruleId as string | undefined, 'ruleId');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.magicTransit.advanceddnsprotection.configsDnsProtectionRulesGet(
        accountId,
        argv.ruleId,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
