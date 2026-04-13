/**
 * registration-status-get command
 * @generated from apis/registrar/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';

interface RegistrationStatusGetArgs {
  domainName: string;
  prefer?: string;
  fields?: string;
  ndjson?: boolean;
  accountId?: string;
}

const command: CommandModule<object, RegistrationStatusGetArgs> = {
  command: 'registration-status-get <domainName>',
  describe:
    'Returns the current status of a domain registration workflow. Use this endpoint to poll for completion when the POST response returned \`202 Accepted\`. The URL is provided in the \`links.self\` field of the workflow status response. Supports long-polling via \`Prefer: wait=N\` — the server will hold the connection for up to N seconds and respond immediately when the workflow completes or the timeout expires, whichever comes first.',

  builder: (yargs: Argv): Argv<RegistrationStatusGetArgs> => {
    return yargs
      .positional('domainName', {
        type: 'string',
        description: 'Domain name.',
        demandOption: true,
      })
      .option('prefer', {
        type: 'string',
        description: 'RFC 7240 prefer header for long-polling, e.g. \`wait=30\`.',
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
      }) as Argv<RegistrationStatusGetArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<RegistrationStatusGetArgs>): Promise<void> => {
    try {
      validateResourceId(argv.domainName as string | undefined, 'domainName');

      const headers: Record<string, string> = {};
      if (argv.prefer !== undefined) headers['Prefer'] = String(argv.prefer);
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      const result = await client.get<unknown>(
        `/accounts/${accountId}/registrar/registrations/${argv.domainName}/registration-status`,
        { headers: Object.keys(headers).length > 0 ? headers : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
