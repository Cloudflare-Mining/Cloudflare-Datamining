/**
 * ipfs-universal-paths-content-lists-entries-create command
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

interface IpfsUniversalPathsContentListsEntriesCreateArgs {
  identifier: string;
  zoneId: string;
  content: string;
  description?: string;
  type: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
  zone?: string;
  quiet?: boolean;
}

const command: CommandModule<object, IpfsUniversalPathsContentListsEntriesCreateArgs> = {
  command: 'ipfs-universal-paths-content-lists-entries-create <identifier> [zoneId]',
  describe: 'Create an IPFS content list entry',

  builder: (yargs: Argv): Argv<IpfsUniversalPathsContentListsEntriesCreateArgs> => {
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
      .option('content', {
        type: 'string',
        description: 'Specify the CID or content path of content to block.',
      })
      .option('description', {
        type: 'string',
        description: 'Specify an optional description of the content list entry.',
        default: undefined,
      })
      .option('type', {
        type: 'string',
        description: 'Specify the type of content list entry to block.',
        choices: ['cid', 'content_path'] as const,
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
      .choices('type', ['cid', 'content_path'] as const) as Argv<IpfsUniversalPathsContentListsEntriesCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<IpfsUniversalPathsContentListsEntriesCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.identifier as string | undefined, 'identifier');

      if (argv.dryRun) {
        formatDryRun({
          command: 'cf web3 hostnames ipfs-universal-paths-content-lists-entries-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/zones/${argv.zoneId ?? '<zoneId>'}/web3/hostnames/${argv.identifier ?? '<identifier>'}/ipfs_universal_path/content_list/entries`,
          pathParams: { identifier: String(argv.identifier ?? ''), zoneId: String(argv.zoneId ?? '') },
          body: { content: argv.content, description: argv.description, type: argv.type },
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
        const result = await client.post<unknown>(
          `/zones/${argv.zoneId}/web3/hostnames/${argv.identifier}/ipfs_universal_path/content_list/entries`,
          { body: bodyData },
        );
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.content !== undefined) setNestedValue(bodyData, ['content'], argv.content);
      if (argv.description !== undefined) setNestedValue(bodyData, ['description'], argv.description);
      if (argv.type !== undefined) setNestedValue(bodyData, ['type'], argv.type);
      const result = await client.post<unknown>(
        `/zones/${argv.zoneId}/web3/hostnames/${argv.identifier}/ipfs_universal_path/content_list/entries`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
