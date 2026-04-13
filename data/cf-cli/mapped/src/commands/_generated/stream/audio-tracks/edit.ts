/**
 * edit command
 * @generated from apis/stream/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId, validateStringInput } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface EditArgs {
  identifier: string;
  audioIdentifier: string;
  default?: boolean;
  label?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, EditArgs> = {
  command: 'edit <identifier> <audioIdentifier>',
  describe:
    'Edits additional audio tracks on a video. Editing the default status of an audio track to \`true\` will mark all other audio tracks on the video default status to \`false\`.',

  builder: (yargs: Argv): Argv<EditArgs> => {
    return yargs
      .positional('identifier', {
        type: 'string',
        description: 'A Cloudflare-generated unique identifier for a media item.',
        demandOption: true,
      })
      .positional('audioIdentifier', {
        type: 'string',
        description: 'The unique identifier for an additional audio track.',
        demandOption: true,
      })
      .option('default', {
        type: 'boolean',
        description: 'Denotes whether the audio track will be played by default in a player.',
        default: false,
      })
      .option('label', {
        type: 'string',
        description:
          'A string to uniquely identify the track amongst other audio track labels for the specified video.',
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
      })
      .option('dry-run', {
        type: 'boolean',
        description: 'Validate and show what would happen without executing',
        default: false,
      })
      .option('body', {
        type: 'string',
        description: 'Raw JSON request body (bypasses individual flags)',
      }) as Argv<EditArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<EditArgs>): Promise<void> => {
    try {
      validateResourceId(argv.identifier as string | undefined, 'identifier');
      validateResourceId(argv.audioIdentifier as string | undefined, 'audioIdentifier');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf stream audio-tracks edit',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/stream/${argv.identifier ?? '<identifier>'}/audio/${argv.audioIdentifier ?? '<audioIdentifier>'}`,
          pathParams: {
            identifier: String(argv.identifier ?? ''),
            audioIdentifier: String(argv.audioIdentifier ?? ''),
          },
          body: { default: argv.default, label: argv.label },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const accountId = await getAccountId({ accountId: argv.accountId }, client);

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.patch<unknown>(
          `/accounts/${accountId}/stream/${argv.identifier}/audio/${argv.audioIdentifier}`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.default !== undefined) setNestedValue(bodyData, ['default'], argv.default);
      if (argv.label !== undefined) setNestedValue(bodyData, ['label'], argv.label);
      const result = await client.patch<unknown>(
        `/accounts/${accountId}/stream/${argv.identifier}/audio/${argv.audioIdentifier}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
