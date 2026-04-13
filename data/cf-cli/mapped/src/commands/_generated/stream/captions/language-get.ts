/**
 * language-get command
 * @generated from apis/stream/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';

interface LanguageGetArgs {
  language: string;
  identifier: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, LanguageGetArgs> = {
  command: 'language-get <language> <identifier>',
  describe: 'Lists the captions or subtitles for provided language.',

  builder: (yargs: Argv): Argv<LanguageGetArgs> => {
    return yargs
      .positional('language', {
        type: 'string',
        description: 'The language tag in BCP 47 format.',
        demandOption: true,
      })
      .positional('identifier', {
        type: 'string',
        description: 'A Cloudflare-generated unique identifier for a media item.',
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
      }) as Argv<LanguageGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<LanguageGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.language as string | undefined, 'language');
      validateResourceId(argv.identifier as string | undefined, 'identifier');
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.stream.captions.languageGet(argv.language, argv.identifier, accountId);
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
