/**
 * update command
 * @generated from apis/builds/schema.ts
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

interface UpdateArgs {
  triggerUuid: string;
  'branch-excludes'?: string;
  'branch-includes'?: string;
  'build-caching-enabled'?: boolean;
  'build-command'?: string;
  'build-token-uuid'?: string;
  'deploy-command'?: string;
  'path-excludes'?: string;
  'path-includes'?: string;
  'root-directory'?: string;
  'trigger-name'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, UpdateArgs> = {
  command: 'update <triggerUuid>',
  describe: 'Update an existing CI/CD trigger',

  builder: (yargs: Argv): Argv<UpdateArgs> => {
    return yargs
      .positional('triggerUuid', {
        type: 'string',
        description: 'Trigger UUID.',
        demandOption: true,
      })
      .option('branch-excludes', {
        type: 'string',
        description: 'The branch_excludes field',
        default: undefined,
      })
      .option('branch-includes', {
        type: 'string',
        description: 'The branch_includes field',
        default: undefined,
      })
      .option('build-caching-enabled', {
        type: 'boolean',
        description: 'The build_caching_enabled field',
        default: false,
      })
      .option('build-command', {
        type: 'string',
        description: 'The build_command field',
        default: undefined,
      })
      .option('build-token-uuid', {
        type: 'string',
        description: 'Build token UUID.',
        default: undefined,
      })
      .option('deploy-command', {
        type: 'string',
        description: 'The deploy_command field',
        default: undefined,
      })
      .option('path-excludes', {
        type: 'string',
        description: 'The path_excludes field',
        default: undefined,
      })
      .option('path-includes', {
        type: 'string',
        description: 'The path_includes field',
        default: undefined,
      })
      .option('root-directory', {
        type: 'string',
        description: 'Root directory path.',
        default: undefined,
      })
      .option('trigger-name', {
        type: 'string',
        description: 'The trigger_name field',
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
      }) as Argv<UpdateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<UpdateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.triggerUuid as string | undefined, 'triggerUuid');

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf builds triggers update',
          method: 'PATCH',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/builds/triggers/${argv.triggerUuid ?? '<triggerUuid>'}`,
          pathParams: { triggerUuid: String(argv.triggerUuid ?? '') },
          body: {
            branchExcludes: argv.branchExcludes,
            branchIncludes: argv.branchIncludes,
            buildCachingEnabled: argv.buildCachingEnabled,
            buildCommand: argv.buildCommand,
            buildTokenUuid: argv.buildTokenUuid,
            deployCommand: argv.deployCommand,
            pathExcludes: argv.pathExcludes,
            pathIncludes: argv.pathIncludes,
            rootDirectory: argv.rootDirectory,
            triggerName: argv.triggerName,
          },
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
        const result = await client.patch<unknown>(`/accounts/${accountId}/builds/triggers/${argv.triggerUuid}`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.branchExcludes !== undefined) setNestedValue(bodyData, ['branch_excludes'], argv.branchExcludes);
      if (argv.branchIncludes !== undefined) setNestedValue(bodyData, ['branch_includes'], argv.branchIncludes);
      if (argv.buildCachingEnabled !== undefined)
        setNestedValue(bodyData, ['build_caching_enabled'], argv.buildCachingEnabled);
      if (argv.buildCommand !== undefined) setNestedValue(bodyData, ['build_command'], argv.buildCommand);
      if (argv.buildTokenUuid !== undefined) setNestedValue(bodyData, ['build_token_uuid'], argv.buildTokenUuid);
      if (argv.deployCommand !== undefined) setNestedValue(bodyData, ['deploy_command'], argv.deployCommand);
      if (argv.pathExcludes !== undefined) setNestedValue(bodyData, ['path_excludes'], argv.pathExcludes);
      if (argv.pathIncludes !== undefined) setNestedValue(bodyData, ['path_includes'], argv.pathIncludes);
      if (argv.rootDirectory !== undefined) setNestedValue(bodyData, ['root_directory'], argv.rootDirectory);
      if (argv.triggerName !== undefined) setNestedValue(bodyData, ['trigger_name'], argv.triggerName);
      const result = await client.patch<unknown>(`/accounts/${accountId}/builds/triggers/${argv.triggerUuid}`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
