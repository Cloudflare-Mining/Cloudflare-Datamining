/**
 * ipfs-universal-paths-content-lists-update command
 * @generated from apis/web3/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAuthToken, getZoneId } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface IpfsUniversalPathsContentListsUpdateArgs {
  identifier: string;
  zoneId: string;
  action: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, IpfsUniversalPathsContentListsUpdateArgs> = {
  command: 'ipfs-universal-paths-content-lists-update <identifier> [zoneId]',
  describe: 'Update IPFS content list',

  builder: (yargs: Argv): Argv<IpfsUniversalPathsContentListsUpdateArgs> => {
    return yargs
      .positional('identifier', {
        type: 'string',
        description: 'Specify the identifier of the hostname.',
        demandOption: true,
      })
      .positional('zoneId', {
        type: 'string',
        description: 'Specify the identifier of the hostname. (or use --zone flag)',
      })
      .option('action', {
        type: 'string',
        description: 'Behavior of the content list.',
        choices: ['block'] as const,
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
      })
      .choices('action', ['block'] as const) as Argv<IpfsUniversalPathsContentListsUpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<IpfsUniversalPathsContentListsUpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.identifier as string | undefined, 'identifier');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf web3 hostnames ipfs-universal-paths-content-lists-update',
          method: 'PUT',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/web3/hostnames/${argv.identifier ?? '<identifier>'}/ipfs_universal_path/content_list`,
          pathParams: { identifier: String(argv.identifier ?? ''), zoneId: String(argv.zoneId ?? '') },
          body: { action: argv.action },
          validation: 'passed',
        });
        return;
      }
      const client = new Cloudflare({
        apiToken: await getAuthToken(),
        baseURL: process.env.CLOUDFLARE_BASE_URL,
        defaultHeaders: getDefaultHeaders(),
      });
      const zoneId = await getZoneId({ zone: argv.zone }, client, { quiet: argv.quiet });

      if (argv.body) {
        const bodyData = parseBody(argv.body);
        const result = await client.put<unknown>(
          `/zones/${argv.zoneId}/web3/hostnames/${argv.identifier}/ipfs_universal_path/content_list`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.action !== undefined) setNestedValue(bodyData, ['action'], argv.action);
      const result = await client.put<unknown>(
        `/zones/${argv.zoneId}/web3/hostnames/${argv.identifier}/ipfs_universal_path/content_list`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
