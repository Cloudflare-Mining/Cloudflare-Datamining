/**
 * create command
 * @generated from apis/pages/schema.ts
 */
import { Cloudflare } from '@cloudflare/sdk';
import type { ArgumentsCamelCase, Argv, CommandModule } from 'yargs';
import { getAccountId, getAuthToken } from '../../../../lib/auth.js';
import { getDefaultHeaders } from '../../../../lib/request-headers.js';
import { handleError } from '../../../../lib/errors.js';
import { formatOutput } from '../../../../lib/output.js';
import { validateResourceId } from '../../../../lib/input-validation.js';
import { formatDryRun } from '../../../../lib/dry-run.js';
import { parseBody, setNestedValue } from '../../../../lib/body-parser.js';

interface CreateArgs {
  'build-config-build-caching'?: boolean;
  'build-config-build-command'?: string;
  'build-config-destination-dir'?: string;
  'build-config-root-dir'?: string;
  'build-config-web-analytics-tag'?: string;
  'build-config-web-analytics-token'?: string;
  'deployment-configs-preview-always-use-latest-compatibility-date'?: boolean;
  'deployment-configs-preview-build-image-major-version'?: number;
  'deployment-configs-preview-compatibility-date'?: string;
  'deployment-configs-preview-compatibility-flags'?: string;
  'deployment-configs-preview-fail-open'?: boolean;
  'deployment-configs-preview-limits-cpu-ms': number;
  'deployment-configs-preview-placement-mode': string;
  'deployment-configs-preview-usage-model'?: string;
  'deployment-configs-preview-wrangler-config-hash'?: string;
  'deployment-configs-production-always-use-latest-compatibility-date'?: boolean;
  'deployment-configs-production-build-image-major-version'?: number;
  'deployment-configs-production-compatibility-date'?: string;
  'deployment-configs-production-compatibility-flags'?: string;
  'deployment-configs-production-fail-open'?: boolean;
  'deployment-configs-production-limits-cpu-ms': number;
  'deployment-configs-production-placement-mode': string;
  'deployment-configs-production-usage-model'?: string;
  'deployment-configs-production-wrangler-config-hash'?: string;
  name: string;
  'production-branch': string;
  'source-config-deployments-enabled'?: boolean;
  'source-config-owner'?: string;
  'source-config-owner-id'?: string;
  'source-config-path-excludes'?: string;
  'source-config-path-includes'?: string;
  'source-config-pr-comments-enabled'?: boolean;
  'source-config-preview-branch-excludes'?: string;
  'source-config-preview-branch-includes'?: string;
  'source-config-preview-deployment-setting'?: string;
  'source-config-production-branch'?: string;
  'source-config-production-deployments-enabled'?: boolean;
  'source-config-repo-id'?: string;
  'source-config-repo-name'?: string;
  'source-type': string;
  fields?: string;
  ndjson?: boolean;
  dryRun?: boolean;
  body?: string;
  accountId?: string;
}

const command: CommandModule<object, CreateArgs> = {
  command: 'create',
  describe: 'Create a new project.',

  builder: (yargs: Argv): Argv<CreateArgs> => {
    return yargs
      .option('build-config-build-caching', {
        type: 'boolean',
        description: 'Enable build caching for the project.',
        default: false,
      })
      .option('build-config-build-command', {
        type: 'string',
        description: 'Command used to build project.',
        default: undefined,
      })
      .option('build-config-destination-dir', {
        type: 'string',
        description: 'Output directory of the build.',
        default: undefined,
      })
      .option('build-config-root-dir', {
        type: 'string',
        description: 'Directory to run the command.',
        default: undefined,
      })
      .option('build-config-web-analytics-tag', {
        type: 'string',
        description: 'The classifying tag for analytics.',
        default: undefined,
      })
      .option('build-config-web-analytics-token', {
        type: 'string',
        description: 'The auth token for analytics.',
        default: undefined,
      })
      .option('deployment-configs-preview-always-use-latest-compatibility-date', {
        type: 'boolean',
        description: 'Whether to always use the latest compatibility date for Pages Functions.',
        default: false,
      })
      .option('deployment-configs-preview-build-image-major-version', {
        type: 'number',
        description: 'The major version of the build image to use for Pages Functions.',
        default: undefined,
      })
      .option('deployment-configs-preview-compatibility-date', {
        type: 'string',
        description: 'Compatibility date used for Pages Functions.',
        default: undefined,
      })
      .option('deployment-configs-preview-compatibility-flags', {
        type: 'string',
        description: 'Compatibility flags used for Pages Functions.',
        default: undefined,
      })
      .option('deployment-configs-preview-fail-open', {
        type: 'boolean',
        description: 'Whether to fail open when the deployment config cannot be applied.',
        default: false,
      })
      .option('deployment-configs-preview-limits-cpu-ms', {
        type: 'number',
        description: 'CPU time limit in milliseconds.',
      })
      .option('deployment-configs-preview-placement-mode', {
        type: 'string',
        description: 'Placement mode.',
      })
      .option('deployment-configs-preview-usage-model', {
        type: 'string',
        description: 'The usage model for Pages Functions.',
        choices: ['standard', 'bundled', 'unbound'] as const,
        default: undefined,
      })
      .option('deployment-configs-preview-wrangler-config-hash', {
        type: 'string',
        description: 'Hash of the Wrangler configuration used for the deployment.',
        default: undefined,
      })
      .option('deployment-configs-production-always-use-latest-compatibility-date', {
        type: 'boolean',
        description: 'Whether to always use the latest compatibility date for Pages Functions.',
        default: false,
      })
      .option('deployment-configs-production-build-image-major-version', {
        type: 'number',
        description: 'The major version of the build image to use for Pages Functions.',
        default: undefined,
      })
      .option('deployment-configs-production-compatibility-date', {
        type: 'string',
        description: 'Compatibility date used for Pages Functions.',
        default: undefined,
      })
      .option('deployment-configs-production-compatibility-flags', {
        type: 'string',
        description: 'Compatibility flags used for Pages Functions.',
        default: undefined,
      })
      .option('deployment-configs-production-fail-open', {
        type: 'boolean',
        description: 'Whether to fail open when the deployment config cannot be applied.',
        default: false,
      })
      .option('deployment-configs-production-limits-cpu-ms', {
        type: 'number',
        description: 'CPU time limit in milliseconds.',
      })
      .option('deployment-configs-production-placement-mode', {
        type: 'string',
        description: 'Placement mode.',
      })
      .option('deployment-configs-production-usage-model', {
        type: 'string',
        description: 'The usage model for Pages Functions.',
        choices: ['standard', 'bundled', 'unbound'] as const,
        default: undefined,
      })
      .option('deployment-configs-production-wrangler-config-hash', {
        type: 'string',
        description: 'Hash of the Wrangler configuration used for the deployment.',
        default: undefined,
      })
      .option('name', {
        type: 'string',
        description: 'Name of the project.',
      })
      .option('production-branch', {
        type: 'string',
        description: 'Production branch of the project. Used to identify production deployments.',
      })
      .option('source-config-deployments-enabled', {
        type: 'boolean',
        description:
          'Whether to enable automatic deployments when pushing to the source repository. When disabled, no deployments (production or preview) will be triggered automatically. ',
        default: false,
      })
      .option('source-config-owner', {
        type: 'string',
        description: 'The owner of the repository.',
        default: undefined,
      })
      .option('source-config-owner-id', {
        type: 'string',
        description: 'The owner ID of the repository.',
        default: undefined,
      })
      .option('source-config-path-excludes', {
        type: 'string',
        description:
          'A list of paths that should be excluded from triggering a preview deployment. Wildcard syntax (\`*\`) is supported.',
        default: undefined,
      })
      .option('source-config-path-includes', {
        type: 'string',
        description:
          'A list of paths that should be watched to trigger a preview deployment. Wildcard syntax (\`*\`) is supported.',
        default: undefined,
      })
      .option('source-config-pr-comments-enabled', {
        type: 'boolean',
        description: 'Whether to enable PR comments.',
        default: false,
      })
      .option('source-config-preview-branch-excludes', {
        type: 'string',
        description:
          'A list of branches that should not trigger a preview deployment. Wildcard syntax (\`*\`) is supported. Must be used with \`preview_deployment_setting\` set to \`custom\`.',
        default: undefined,
      })
      .option('source-config-preview-branch-includes', {
        type: 'string',
        description:
          'A list of branches that should trigger a preview deployment. Wildcard syntax (\`*\`) is supported. Must be used with \`preview_deployment_setting\` set to \`custom\`.',
        default: undefined,
      })
      .option('source-config-preview-deployment-setting', {
        type: 'string',
        description: 'Controls whether commits to preview branches trigger a preview deployment.',
        choices: ['all', 'none', 'custom'] as const,
        default: undefined,
      })
      .option('source-config-production-branch', {
        type: 'string',
        description: 'The production branch of the repository.',
        default: undefined,
      })
      .option('source-config-production-deployments-enabled', {
        type: 'boolean',
        description: 'Whether to trigger a production deployment on commits to the production branch.',
        default: false,
      })
      .option('source-config-repo-id', {
        type: 'string',
        description: 'The ID of the repository.',
        default: undefined,
      })
      .option('source-config-repo-name', {
        type: 'string',
        description: 'The name of the repository.',
        default: undefined,
      })
      .option('source-type', {
        type: 'string',
        description: 'The source control management provider.',
        choices: ['github', 'gitlab'] as const,
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
      .choices('deployment-configs-preview-usage-model', ['standard', 'bundled', 'unbound'] as const)
      .choices('deployment-configs-production-usage-model', ['standard', 'bundled', 'unbound'] as const)
      .choices('source-config-preview-deployment-setting', ['all', 'none', 'custom'] as const)
      .choices('source-type', ['github', 'gitlab'] as const) as Argv<CreateArgs>;
  },

  handler: async (argv: ArgumentsCamelCase<CreateArgs>): Promise<void> => {
    try {
      if (argv.dryRun) {
        if (argv.accountId) validateResourceId(argv.accountId, 'accountId');
        formatDryRun({
          command: 'cf pages projects create',
          method: 'POST',
          url: `https://api.cloudflare.com/client/v4/accounts/${argv.accountId ?? '<account-id>'}/pages/projects`,
          pathParams: {},
          body: {
            buildConfigBuildCaching: argv.buildConfigBuildCaching,
            buildConfigBuildCommand: argv.buildConfigBuildCommand,
            buildConfigDestinationDir: argv.buildConfigDestinationDir,
            buildConfigRootDir: argv.buildConfigRootDir,
            buildConfigWebAnalyticsTag: argv.buildConfigWebAnalyticsTag,
            buildConfigWebAnalyticsToken: argv.buildConfigWebAnalyticsToken,
            deploymentConfigsPreviewAlwaysUseLatestCompatibilityDate:
              argv.deploymentConfigsPreviewAlwaysUseLatestCompatibilityDate,
            deploymentConfigsPreviewBuildImageMajorVersion: argv.deploymentConfigsPreviewBuildImageMajorVersion,
            deploymentConfigsPreviewCompatibilityDate: argv.deploymentConfigsPreviewCompatibilityDate,
            deploymentConfigsPreviewCompatibilityFlags: argv.deploymentConfigsPreviewCompatibilityFlags,
            deploymentConfigsPreviewFailOpen: argv.deploymentConfigsPreviewFailOpen,
            deploymentConfigsPreviewLimitsCpuMs: argv.deploymentConfigsPreviewLimitsCpuMs,
            deploymentConfigsPreviewPlacementMode: argv.deploymentConfigsPreviewPlacementMode,
            deploymentConfigsPreviewUsageModel: argv.deploymentConfigsPreviewUsageModel,
            deploymentConfigsPreviewWranglerConfigHash: argv.deploymentConfigsPreviewWranglerConfigHash,
            deploymentConfigsProductionAlwaysUseLatestCompatibilityDate:
              argv.deploymentConfigsProductionAlwaysUseLatestCompatibilityDate,
            deploymentConfigsProductionBuildImageMajorVersion: argv.deploymentConfigsProductionBuildImageMajorVersion,
            deploymentConfigsProductionCompatibilityDate: argv.deploymentConfigsProductionCompatibilityDate,
            deploymentConfigsProductionCompatibilityFlags: argv.deploymentConfigsProductionCompatibilityFlags,
            deploymentConfigsProductionFailOpen: argv.deploymentConfigsProductionFailOpen,
            deploymentConfigsProductionLimitsCpuMs: argv.deploymentConfigsProductionLimitsCpuMs,
            deploymentConfigsProductionPlacementMode: argv.deploymentConfigsProductionPlacementMode,
            deploymentConfigsProductionUsageModel: argv.deploymentConfigsProductionUsageModel,
            deploymentConfigsProductionWranglerConfigHash: argv.deploymentConfigsProductionWranglerConfigHash,
            name: argv.name,
            productionBranch: argv.productionBranch,
            sourceConfigDeploymentsEnabled: argv.sourceConfigDeploymentsEnabled,
            sourceConfigOwner: argv.sourceConfigOwner,
            sourceConfigOwnerId: argv.sourceConfigOwnerId,
            sourceConfigPathExcludes: argv.sourceConfigPathExcludes,
            sourceConfigPathIncludes: argv.sourceConfigPathIncludes,
            sourceConfigPrCommentsEnabled: argv.sourceConfigPrCommentsEnabled,
            sourceConfigPreviewBranchExcludes: argv.sourceConfigPreviewBranchExcludes,
            sourceConfigPreviewBranchIncludes: argv.sourceConfigPreviewBranchIncludes,
            sourceConfigPreviewDeploymentSetting: argv.sourceConfigPreviewDeploymentSetting,
            sourceConfigProductionBranch: argv.sourceConfigProductionBranch,
            sourceConfigProductionDeploymentsEnabled: argv.sourceConfigProductionDeploymentsEnabled,
            sourceConfigRepoId: argv.sourceConfigRepoId,
            sourceConfigRepoName: argv.sourceConfigRepoName,
            sourceType: argv.sourceType,
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
        const result = await client.post<unknown>(`/accounts/${accountId}/pages/projects`, { body: bodyData });
        formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
        return;
      }

      // Assemble request body from individual flags
      const bodyData: Record<string, unknown> = {};
      if (argv.buildConfigBuildCaching !== undefined)
        setNestedValue(bodyData, ['build_config', 'build_caching'], argv.buildConfigBuildCaching);
      if (argv.buildConfigBuildCommand !== undefined)
        setNestedValue(bodyData, ['build_config', 'build_command'], argv.buildConfigBuildCommand);
      if (argv.buildConfigDestinationDir !== undefined)
        setNestedValue(bodyData, ['build_config', 'destination_dir'], argv.buildConfigDestinationDir);
      if (argv.buildConfigRootDir !== undefined)
        setNestedValue(bodyData, ['build_config', 'root_dir'], argv.buildConfigRootDir);
      if (argv.buildConfigWebAnalyticsTag !== undefined)
        setNestedValue(bodyData, ['build_config', 'web_analytics_tag'], argv.buildConfigWebAnalyticsTag);
      if (argv.buildConfigWebAnalyticsToken !== undefined)
        setNestedValue(bodyData, ['build_config', 'web_analytics_token'], argv.buildConfigWebAnalyticsToken);
      if (argv.deploymentConfigsPreviewAlwaysUseLatestCompatibilityDate !== undefined)
        setNestedValue(
          bodyData,
          ['deployment_configs', 'preview', 'always_use_latest_compatibility_date'],
          argv.deploymentConfigsPreviewAlwaysUseLatestCompatibilityDate,
        );
      if (argv.deploymentConfigsPreviewBuildImageMajorVersion !== undefined)
        setNestedValue(
          bodyData,
          ['deployment_configs', 'preview', 'build_image_major_version'],
          argv.deploymentConfigsPreviewBuildImageMajorVersion,
        );
      if (argv.deploymentConfigsPreviewCompatibilityDate !== undefined)
        setNestedValue(
          bodyData,
          ['deployment_configs', 'preview', 'compatibility_date'],
          argv.deploymentConfigsPreviewCompatibilityDate,
        );
      if (argv.deploymentConfigsPreviewCompatibilityFlags !== undefined)
        setNestedValue(
          bodyData,
          ['deployment_configs', 'preview', 'compatibility_flags'],
          argv.deploymentConfigsPreviewCompatibilityFlags,
        );
      if (argv.deploymentConfigsPreviewFailOpen !== undefined)
        setNestedValue(bodyData, ['deployment_configs', 'preview', 'fail_open'], argv.deploymentConfigsPreviewFailOpen);
      if (argv.deploymentConfigsPreviewLimitsCpuMs !== undefined)
        setNestedValue(
          bodyData,
          ['deployment_configs', 'preview', 'limits', 'cpu_ms'],
          argv.deploymentConfigsPreviewLimitsCpuMs,
        );
      if (argv.deploymentConfigsPreviewPlacementMode !== undefined)
        setNestedValue(
          bodyData,
          ['deployment_configs', 'preview', 'placement', 'mode'],
          argv.deploymentConfigsPreviewPlacementMode,
        );
      if (argv.deploymentConfigsPreviewUsageModel !== undefined)
        setNestedValue(
          bodyData,
          ['deployment_configs', 'preview', 'usage_model'],
          argv.deploymentConfigsPreviewUsageModel,
        );
      if (argv.deploymentConfigsPreviewWranglerConfigHash !== undefined)
        setNestedValue(
          bodyData,
          ['deployment_configs', 'preview', 'wrangler_config_hash'],
          argv.deploymentConfigsPreviewWranglerConfigHash,
        );
      if (argv.deploymentConfigsProductionAlwaysUseLatestCompatibilityDate !== undefined)
        setNestedValue(
          bodyData,
          ['deployment_configs', 'production', 'always_use_latest_compatibility_date'],
          argv.deploymentConfigsProductionAlwaysUseLatestCompatibilityDate,
        );
      if (argv.deploymentConfigsProductionBuildImageMajorVersion !== undefined)
        setNestedValue(
          bodyData,
          ['deployment_configs', 'production', 'build_image_major_version'],
          argv.deploymentConfigsProductionBuildImageMajorVersion,
        );
      if (argv.deploymentConfigsProductionCompatibilityDate !== undefined)
        setNestedValue(
          bodyData,
          ['deployment_configs', 'production', 'compatibility_date'],
          argv.deploymentConfigsProductionCompatibilityDate,
        );
      if (argv.deploymentConfigsProductionCompatibilityFlags !== undefined)
        setNestedValue(
          bodyData,
          ['deployment_configs', 'production', 'compatibility_flags'],
          argv.deploymentConfigsProductionCompatibilityFlags,
        );
      if (argv.deploymentConfigsProductionFailOpen !== undefined)
        setNestedValue(
          bodyData,
          ['deployment_configs', 'production', 'fail_open'],
          argv.deploymentConfigsProductionFailOpen,
        );
      if (argv.deploymentConfigsProductionLimitsCpuMs !== undefined)
        setNestedValue(
          bodyData,
          ['deployment_configs', 'production', 'limits', 'cpu_ms'],
          argv.deploymentConfigsProductionLimitsCpuMs,
        );
      if (argv.deploymentConfigsProductionPlacementMode !== undefined)
        setNestedValue(
          bodyData,
          ['deployment_configs', 'production', 'placement', 'mode'],
          argv.deploymentConfigsProductionPlacementMode,
        );
      if (argv.deploymentConfigsProductionUsageModel !== undefined)
        setNestedValue(
          bodyData,
          ['deployment_configs', 'production', 'usage_model'],
          argv.deploymentConfigsProductionUsageModel,
        );
      if (argv.deploymentConfigsProductionWranglerConfigHash !== undefined)
        setNestedValue(
          bodyData,
          ['deployment_configs', 'production', 'wrangler_config_hash'],
          argv.deploymentConfigsProductionWranglerConfigHash,
        );
      if (argv.name !== undefined) setNestedValue(bodyData, ['name'], argv.name);
      if (argv.productionBranch !== undefined) setNestedValue(bodyData, ['production_branch'], argv.productionBranch);
      if (argv.sourceConfigDeploymentsEnabled !== undefined)
        setNestedValue(bodyData, ['source', 'config', 'deployments_enabled'], argv.sourceConfigDeploymentsEnabled);
      if (argv.sourceConfigOwner !== undefined)
        setNestedValue(bodyData, ['source', 'config', 'owner'], argv.sourceConfigOwner);
      if (argv.sourceConfigOwnerId !== undefined)
        setNestedValue(bodyData, ['source', 'config', 'owner_id'], argv.sourceConfigOwnerId);
      if (argv.sourceConfigPathExcludes !== undefined)
        setNestedValue(bodyData, ['source', 'config', 'path_excludes'], argv.sourceConfigPathExcludes);
      if (argv.sourceConfigPathIncludes !== undefined)
        setNestedValue(bodyData, ['source', 'config', 'path_includes'], argv.sourceConfigPathIncludes);
      if (argv.sourceConfigPrCommentsEnabled !== undefined)
        setNestedValue(bodyData, ['source', 'config', 'pr_comments_enabled'], argv.sourceConfigPrCommentsEnabled);
      if (argv.sourceConfigPreviewBranchExcludes !== undefined)
        setNestedValue(
          bodyData,
          ['source', 'config', 'preview_branch_excludes'],
          argv.sourceConfigPreviewBranchExcludes,
        );
      if (argv.sourceConfigPreviewBranchIncludes !== undefined)
        setNestedValue(
          bodyData,
          ['source', 'config', 'preview_branch_includes'],
          argv.sourceConfigPreviewBranchIncludes,
        );
      if (argv.sourceConfigPreviewDeploymentSetting !== undefined)
        setNestedValue(
          bodyData,
          ['source', 'config', 'preview_deployment_setting'],
          argv.sourceConfigPreviewDeploymentSetting,
        );
      if (argv.sourceConfigProductionBranch !== undefined)
        setNestedValue(bodyData, ['source', 'config', 'production_branch'], argv.sourceConfigProductionBranch);
      if (argv.sourceConfigProductionDeploymentsEnabled !== undefined)
        setNestedValue(
          bodyData,
          ['source', 'config', 'production_deployments_enabled'],
          argv.sourceConfigProductionDeploymentsEnabled,
        );
      if (argv.sourceConfigRepoId !== undefined)
        setNestedValue(bodyData, ['source', 'config', 'repo_id'], argv.sourceConfigRepoId);
      if (argv.sourceConfigRepoName !== undefined)
        setNestedValue(bodyData, ['source', 'config', 'repo_name'], argv.sourceConfigRepoName);
      if (argv.sourceType !== undefined) setNestedValue(bodyData, ['source', 'type'], argv.sourceType);
      const result = await client.post<unknown>(`/accounts/${accountId}/pages/projects`, {
        body: Object.keys(bodyData).length > 0 ? bodyData : undefined,
      });
      formatOutput(result, { fields: argv.fields, ndjson: argv.ndjson ?? false });
    } catch (error) {
      handleError(error);
    }
  },
};

export default command;
