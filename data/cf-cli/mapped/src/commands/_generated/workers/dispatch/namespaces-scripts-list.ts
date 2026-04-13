/**
 * namespaces-scripts-list command
 * @generated from apis/workers/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface NamespacesScriptsListArgs {
  dispatchNamespace: string;
  tags?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, NamespacesScriptsListArgs> = {
  command: 'namespaces-scripts-list <dispatchNamespace>',
  describe: 'Fetch a list of scripts uploaded to a Workers for Platforms namespace.',

  builder: (yargs: Argv): Argv<NamespacesScriptsListArgs> => {
    return yargs
      .positional('dispatchNamespace', {
        type: 'string',
        description: 'Name of the Workers for Platforms dispatch namespace.',
        demandOption: true,
      })
      .option('tags', {
        type: 'string',
        description:
          "Filter scripts by tags. Format: comma-separated list of tag:allowed pairs where allowed is 'yes' or 'no'.",
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
      }) as Argv<NamespacesScriptsListArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<NamespacesScriptsListArgs>): Promise<void> => {
    try {
      validateResourceId(argv.dispatchNamespace as string | undefined, 'dispatchNamespace');

      const params: Record<string, unknown> = {};
      if (argv.tags !== undefined) params['tags'] = argv.tags;
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.workers.dispatch.namespacesScriptsList(
        accountId,
        argv.dispatchNamespace,
        Object.keys(params).length > 0 ? params : undefined,
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
