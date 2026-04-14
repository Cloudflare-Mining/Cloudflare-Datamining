/**
 * workers-versions-create command
 * @generated from apis/workers/schema.ts
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

interface WorkersVersionsCreateArgs {
  workerId: string;
  deploy?: boolean;
  'assets-config-html-handling'?: string;
  'assets-config-not-found-handling'?: string;
  'assets-jwt'?: string;
  'compatibility-date'?: string;
  'compatibility-flags'?: string;
  'limits-cpu-ms'?: number;
  'limits-subrequests'?: number;
  'main-module'?: string;
  'migrations-new-tag'?: string;
  'migrations-old-tag'?: string;
  'migrations-deleted-classes'?: string;
  'migrations-new-classes'?: string;
  'migrations-new-sqlite-classes'?: string;
  'placement-mode'?: string;
  'placement-region'?: string;
  'placement-hostname'?: string;
  'placement-host'?: string;
  'usage-model'?: string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, WorkersVersionsCreateArgs> = {
  command: 'workers-versions-create <workerId>',
  describe: 'Create a new version.',

  builder: (yargs: Argv): Argv<WorkersVersionsCreateArgs> => {
    return yargs
      .positional('workerId', {
        type: 'string',
        description: 'Identifier for the Worker, which can be ID or name.',
        demandOption: true,
      })
      .option('deploy', {
        type: 'boolean',
        description: 'If true, a deployment will be created that sends 100% of traffic to the new version.',
        default: false,
      })
      .option('assets-config-html-handling', {
        type: 'string',
        description: 'Determines the redirects and rewrites of requests for HTML content.',
        choices: ['auto-trailing-slash', 'force-trailing-slash', 'drop-trailing-slash', 'none'] as const,
        default: undefined,
      })
      .option('assets-config-not-found-handling', {
        type: 'string',
        description:
          'Determines the response when a request does not match a static asset, and there is no Worker script.',
        choices: ['none', '404-page', 'single-page-application'] as const,
        default: undefined,
      })
      .option('assets-jwt', {
        type: 'string',
        description: 'Token provided upon successful upload of all files from a registered manifest.',
        default: undefined,
      })
      .option('compatibility-date', {
        type: 'string',
        description:
          'Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker.',
        default: undefined,
      })
      .option('compatibility-flags', {
        type: 'string',
        description:
          'Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a \`compatibility_date\`.',
        default: undefined,
      })
      .option('limits-cpu-ms', {
        type: 'number',
        description: 'CPU time limit in milliseconds.',
        default: undefined,
      })
      .option('limits-subrequests', {
        type: 'number',
        description: 'Subrequest limit per request.',
        default: undefined,
      })
      .option('main-module', {
        type: 'string',
        description:
          'The name of the main module in the \`modules\` array (e.g. the name of the module that exports a \`fetch\` handler).',
        default: undefined,
      })
      .option('migrations-new-tag', {
        type: 'string',
        description: 'Tag to set as the latest migration tag.',
        default: undefined,
      })
      .option('migrations-old-tag', {
        type: 'string',
        description:
          "Tag used to verify against the latest migration tag for this Worker. If they don't match, the upload is rejected.",
        default: undefined,
      })
      .option('migrations-deleted-classes', {
        type: 'string',
        description: 'A list of classes to delete Durable Object namespaces from.',
        default: undefined,
      })
      .option('migrations-new-classes', {
        type: 'string',
        description: 'A list of classes to create Durable Object namespaces from.',
        default: undefined,
      })
      .option('migrations-new-sqlite-classes', {
        type: 'string',
        description: 'A list of classes to create Durable Object namespaces with SQLite from.',
        default: undefined,
      })
      .option('placement-mode', {
        type: 'string',
        description:
          'Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).',
        choices: ['smart'] as const,
        default: undefined,
      })
      .option('placement-region', {
        type: 'string',
        description: "Cloud region for targeted placement in format 'provider:region'.",
        default: undefined,
      })
      .option('placement-hostname', {
        type: 'string',
        description: 'HTTP hostname for targeted placement.',
        default: undefined,
      })
      .option('placement-host', {
        type: 'string',
        description: 'TCP host and port for targeted placement.',
        default: undefined,
      })
      .option('usage-model', {
        type: 'string',
        description: 'Usage model for the version.',
        choices: ['standard', 'bundled', 'unbound'] as const,
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
      })
      .conflicts('placement-mode', ['placementRegion', 'placementHostname', 'placementHost'])
      .implies('placement-mode', ['placementRegion', 'placementHostname', 'placementHost'])
      .conflicts('placement-region', ['placementMode', 'placementHostname', 'placementHost'])
      .implies('placement-region', ['placementMode'])
      .conflicts('placement-hostname', ['placementMode', 'placementRegion', 'placementHost'])
      .implies('placement-hostname', ['placementMode'])
      .conflicts('placement-host', ['placementMode', 'placementRegion', 'placementHostname'])
      .implies('placement-host', ['placementMode'])
      .choices('assets-config-html-handling', [
        'auto-trailing-slash',
        'force-trailing-slash',
        'drop-trailing-slash',
        'none',
      ] as const)
      .choices('assets-config-not-found-handling', ['none', '404-page', 'single-page-application'] as const)
      .choices('placement-mode', ['smart'] as const)
      .choices('usage-model', ['standard', 'bundled', 'unbound'] as const) as Argv<WorkersVersionsCreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<WorkersVersionsCreateArgs>): Promise<void> => {
    try {
      validateResourceId(argv.workerId as string | undefined, 'workerId');

      const params: Record<string, unknown> = {};
      if (argv.deploy !== undefined) params['deploy'] = argv.deploy;

      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf workers beta workers-versions-create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/workers/workers/${argv.workerId ?? '<workerId>'}/versions`,
          pathParams: { workerId: String(argv.workerId ?? '') },
          body: {
            ...params,
            assetsConfigHtmlHandling: argv.assetsConfigHtmlHandling,
            assetsConfigNotFoundHandling: argv.assetsConfigNotFoundHandling,
            assetsJwt: argv.assetsJwt,
            compatibilityDate: argv.compatibilityDate,
            compatibilityFlags: argv.compatibilityFlags,
            limitsCpuMs: argv.limitsCpuMs,
            limitsSubrequests: argv.limitsSubrequests,
            mainModule: argv.mainModule,
            migrationsNewTag: argv.migrationsNewTag,
            migrationsOldTag: argv.migrationsOldTag,
            migrationsDeletedClasses: argv.migrationsDeletedClasses,
            migrationsNewClasses: argv.migrationsNewClasses,
            migrationsNewSqliteClasses: argv.migrationsNewSqliteClasses,
            placementMode: argv.placementMode,
            placementRegion: argv.placementRegion,
            placementHostname: argv.placementHostname,
            placementHost: argv.placementHost,
            usageModel: argv.usageModel,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/workers/workers/${argv.workerId}/versions`, {
          body: bodyData,
        });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.assetsConfigHtmlHandling !== undefined)
        setNestedValue(bodyData, ['assets', 'config', 'html_handling'], argv.assetsConfigHtmlHandling);
      if (argv.assetsConfigNotFoundHandling !== undefined)
        setNestedValue(bodyData, ['assets', 'config', 'not_found_handling'], argv.assetsConfigNotFoundHandling);
      if (argv.assetsJwt !== undefined) setNestedValue(bodyData, ['assets', 'jwt'], argv.assetsJwt);
      if (argv.compatibilityDate !== undefined)
        setNestedValue(bodyData, ['compatibility_date'], argv.compatibilityDate);
      if (argv.compatibilityFlags !== undefined)
        setNestedValue(bodyData, ['compatibility_flags'], argv.compatibilityFlags);
      if (argv.limitsCpuMs !== undefined) setNestedValue(bodyData, ['limits', 'cpu_ms'], argv.limitsCpuMs);
      if (argv.limitsSubrequests !== undefined)
        setNestedValue(bodyData, ['limits', 'subrequests'], argv.limitsSubrequests);
      if (argv.mainModule !== undefined) setNestedValue(bodyData, ['main_module'], argv.mainModule);
      if (argv.migrationsNewTag !== undefined)
        setNestedValue(bodyData, ['migrations', 'new_tag'], argv.migrationsNewTag);
      if (argv.migrationsOldTag !== undefined)
        setNestedValue(bodyData, ['migrations', 'old_tag'], argv.migrationsOldTag);
      if (argv.migrationsDeletedClasses !== undefined)
        setNestedValue(bodyData, ['migrations', 'deleted_classes'], argv.migrationsDeletedClasses);
      if (argv.migrationsNewClasses !== undefined)
        setNestedValue(bodyData, ['migrations', 'new_classes'], argv.migrationsNewClasses);
      if (argv.migrationsNewSqliteClasses !== undefined)
        setNestedValue(bodyData, ['migrations', 'new_sqlite_classes'], argv.migrationsNewSqliteClasses);
      if (argv.placementMode !== undefined) setNestedValue(bodyData, ['placement', 'mode'], argv.placementMode);
      if (argv.placementRegion !== undefined) setNestedValue(bodyData, ['placement', 'region'], argv.placementRegion);
      if (argv.placementHostname !== undefined)
        setNestedValue(bodyData, ['placement', 'hostname'], argv.placementHostname);
      if (argv.placementHost !== undefined) setNestedValue(bodyData, ['placement', 'host'], argv.placementHost);
      if (argv.usageModel !== undefined) setNestedValue(bodyData, ['usage_model'], argv.usageModel);
      const qs = new URLSearchParams(
        Object.entries(params)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => [k, String(v)]),
      ).toString();
      const result = await client.post<unknown>(
        `/accounts/${accountId}/workers/workers/${argv.workerId}/versions${qs ? '?' + qs : ''}`,
        { body: Object.keys(bodyData).length > 0 ? bodyData : undefined },
      );
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
