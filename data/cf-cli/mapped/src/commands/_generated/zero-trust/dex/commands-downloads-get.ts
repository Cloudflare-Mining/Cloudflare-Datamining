/**
 * commands-downloads-get command
 * @generated from apis/zero-trust/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface CommandsDownloadsGetArgs {
  commandId: string;
  filename: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, CommandsDownloadsGetArgs> = {
  command: 'commands-downloads-get <commandId> <filename>',
  describe: 'Downloads artifacts for an executed command. Bulk downloads are not supported',

  builder: (yargs: Argv): Argv<CommandsDownloadsGetArgs> => {
    return yargs
      .positional('commandId', {
        type: 'string',
        description: 'Unique identifier for command',
        demandOption: true,
      })
      .positional('filename', {
        type: 'string',
        description: 'The name of the file to be downloaded, including the \`.zip\` extension',
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
      }) as Argv<CommandsDownloadsGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CommandsDownloadsGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.commandId as string | undefined, 'commandId');
      validateResourceId(argv.filename as string | undefined, 'filename');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.zeroTrust.dex.commandsDownloadsGet(accountId, argv.commandId, argv.filename);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
