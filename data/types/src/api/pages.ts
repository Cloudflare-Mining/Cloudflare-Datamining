import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';
import { enumerable, TypeFromEnumerable } from '../utils/enumerable';

export const PagesUploadFileResult = eg.object({
  id: eg.string
});

export type PagesUploadFileResult = TypeFromCodec<typeof PagesUploadFileResult>;

export const Environment = eg.union([
  eg.literal('preview'),
  eg.literal('production')
]);
export type Environment = TypeFromCodec<typeof Environment>;

export const DeploymentStage = eg.object({
  name: eg.union([
    eg.literal('queued'),
    eg.literal('initialize'),
    eg.literal('clone_repo'),
    eg.literal('build'),
    eg.literal('deploy')
  ]),
  status: eg.union([
    eg.literal('idle'),
    eg.literal('active'),
    eg.literal('canceled'),
    eg.literal('success'),
    eg.literal('failure'),
    eg.literal('skipped')
  ]),
  started_on: eg.union([eg.string, eg.null]),
  ended_on: eg.union([eg.string, eg.null])
});

export type DeploymentStage = TypeFromCodec<typeof DeploymentStage>;

export const BuildConfig = eg.object({
  build_command: eg.string,
  destination_dir: eg.string,
  root_dir: eg.string,
  web_analytics_tag: eg.string.optional,
  web_analytics_token: eg.string.optional,
  fast_builds: eg.boolean.optional
});

export type BuildConfig = TypeFromCodec<typeof BuildConfig>;

export const ProjectSourceConfig = eg.object({
  owner: eg.string,
  repo_name: eg.string,
  production_branch: eg.string.optional,
  pr_comments_enabled: eg.boolean.optional,
  deployments_enabled: eg.boolean.optional,
  production_deployments_enabled: eg.boolean.optional,
  preview_deployment_setting: eg.union([
    eg.literal('all'),
    eg.literal('none'),
    eg.literal('custom')
  ]).optional,
  preview_branch_includes: eg.array(eg.string).optional,
  preview_branch_excludes: eg.array(eg.string).optional
});

export type ProjectSourceConfig = TypeFromCodec<typeof ProjectSourceConfig>;

export const ProjectSource = eg.object({
  type: eg.union([eg.literal('github'), eg.literal('gitlab')]),
  config: ProjectSourceConfig
});

export type ProjectSource = TypeFromCodec<typeof ProjectSource>;

export const Deployment = eg.object({
  id: eg.string,
  project_id: eg.string,
  project_name: eg.string,
  url: eg.string,
  environment: Environment,
  deployment_trigger: eg.object({
    type: eg.string,
    metadata: eg.object({
      branch: eg.string,
      commit_hash: eg.string,
      commit_message: eg.string
    })
  }),
  latest_stage: DeploymentStage,
  stages: eg.array(DeploymentStage),
  aliases: eg.array(eg.string),
  created_on: eg.string,
  modified_on: eg.string,
  build_config: BuildConfig,
  env_vars: eg.any,
  kv_namespaces: eg.any.optional,
  durable_object_namespaces: eg.any.optional,
  short_id: eg.string,
  production_branch: eg.string,
  build_image_major_version: eg.number,
  source: ProjectSource.optional,
  is_skipped: eg.boolean.optional,
  files: eg.record(eg.string, eg.string.optional).optional
});

export type Deployment = TypeFromCodec<typeof Deployment>;

export const PlainText = eg.literal('plain_text');
export type PlainText = TypeFromCodec<typeof PlainText>;

export const SecretText = eg.literal('secret_text');
export type SecretText = TypeFromCodec<typeof SecretText>;

export const EnvironmentVariableBindingValue = eg.object({
  value: eg.string,
  type: eg.union([PlainText, SecretText]).optional
});

export type EnvironmentVariableBindingValue = TypeFromCodec<
  typeof EnvironmentVariableBindingValue
>;

export const EnvironmentVariableBindingMap = eg.record(
  eg.string,
  eg.union([EnvironmentVariableBindingValue, eg.null])
);

export type EnvironmentVariableBindingMap = TypeFromCodec<
  typeof EnvironmentVariableBindingMap
>;

export const NamespaceBindingValue = eg.object({
  namespace_id: eg.string
});

export const DatabaseBindingValue = eg.object({
  id: eg.string
});

export const BucketBindingValue = eg.object({
  name: eg.string
});

export const ServiceBindingValue = eg.object({
  service: eg.string,
  environment: eg.string
});

export type ServiceBindingValue = TypeFromCodec<typeof ServiceBindingValue>;

export const ServiceBindingMap = eg.record(eg.string, ServiceBindingValue);

export type ServiceBindingMap = TypeFromCodec<typeof ServiceBindingMap>;

export const DeploymentConfigEnv = eg.object({
  env_vars: EnvironmentVariableBindingMap.optional,
  kv_namespaces: eg.record(eg.string, NamespaceBindingValue).optional,
  durable_object_namespaces: eg.record(eg.string, NamespaceBindingValue)
    .optional,
  d1_databases: eg.record(eg.string, DatabaseBindingValue).optional,
  r2_buckets: eg.record(eg.string, BucketBindingValue).optional,
  services: ServiceBindingMap.optional,

  compatibility_date: eg.string.optional,
  compatibility_flags: eg.array(eg.string).optional,
  always_use_latest_compatibility_date: eg.boolean.optional,
  build_image_major_version: eg.number.optional,
  usage_model: eg.union([
    eg.literal('bundled'),
    eg.literal('unbound'),
    eg.literal('standard')
  ]).optional
});

export type DeploymentConfigEnv = TypeFromCodec<typeof DeploymentConfigEnv>;

export const DeploymentConfigs = eg.record(
  eg.union([eg.literal('production'), eg.literal('preview')]),
  DeploymentConfigEnv
);

export type DeploymentConfigs = TypeFromCodec<typeof DeploymentConfigs>;

export const Project = eg.object({
  id: eg.string,
  name: eg.string,
  subdomain: eg.string,
  domains: eg.array(eg.string),
  source: ProjectSource.optional,
  build_config: BuildConfig,
  deployment_configs: DeploymentConfigs,
  latest_deployment: Deployment,
  canonical_deployment: Deployment,
  created_on: eg.string,
  production_branch: eg.string,
  production_script_name: eg.string,
  preview_script_name: eg.string
});

export type Project = TypeFromCodec<typeof Project>;

/** Log message for Pages logs */
export const LogMessage = eg.object({
  ts: eg.string,
  line: eg.string
});

/** Log message for Pages logs */
export type LogMessage = TypeFromCodec<typeof LogMessage>;

/** Persistent logs from funfetti */
export const UnifiedDeploymentLogMessages = eg.object({
  data: eg.array(LogMessage),
  total: eg.number,
  includes_container_logs: eg.boolean
});

/** Persistent logs from funfetti */
export type UnifiedDeploymentLogMessages = TypeFromCodec<
  typeof UnifiedDeploymentLogMessages
>;

/** Live Logs jwt response from funfetti */
export const DeploymentLiveLogsJWT = eg.object({
  jwt: eg.string
});

/** Live Logs jwt response from funfetti */
export type DeploymentLiveLogsJWT = TypeFromCodec<typeof DeploymentLiveLogsJWT>;

/** Live logs jwt payload for connecting to the live logs durable object */
export const DeploymentLiveLogsJWTPayload = eg.object({
  aud: eg.string,
  exp: eg.number,
  iat: eg.number,
  iss: eg.string,
  features: eg.array(eg.string),
  externalDeploymentId: eg.string
});

/** Live logs jwt payload for connecting to the live logs durable object */
export type DeploymentLiveLogsJWTPayload = TypeFromCodec<
  typeof DeploymentLiveLogsJWTPayload
>;

/** Response from Live Logs (api.pages.cloudflare.com/logs endpoint) to get existing logs over http */
export const DeploymentExistingLiveLogs = eg.object({
  nextIndex: eg.number,
  logs: eg.array(LogMessage)
});

/** Response from Live Logs (api.pages.cloudflare.com/logs endpoint) to get existing logs over http */
export type DeploymentExistingLiveLogs = TypeFromCodec<
  typeof DeploymentExistingLiveLogs
>;

export const DirectUploadsJWT = eg.object({
  jwt: eg.string
});

export type DirectUploadsJWT = TypeFromCodec<typeof DirectUploadsJWT>;

export const UploadFileGroupPayload = eg.object({
  key: eg.string,
  value: eg.string,
  metadata: eg.object({ contentType: eg.string }),
  base64: eg.boolean
});
export type UploadFileGroupPayload = TypeFromCodec<
  typeof UploadFileGroupPayload
>;

export const FunctionsUsageModel = enumerable([
  'bundled',
  'unbound',
  'standard'
]);
export type FunctionsUsageModel = TypeFromEnumerable<
  typeof FunctionsUsageModel
>;

export const AccountSettingsResult = eg.object({
  default_usage_model: eg.string
});

export const PagesTail = eg.object({
  id: eg.string,
  url: eg.string,
  expires_at: eg.string.optional
});

export type PagesTailResult = TypeFromCodec<typeof PagesTail>;

export const PlacementMode = eg.union([eg.literal('off'), eg.literal('smart')]);

export type PlacementMode = TypeFromCodec<typeof PlacementMode>;

export const Placement = eg.object({
  mode: PlacementMode
});

export type Placement = TypeFromCodec<typeof Placement>;
