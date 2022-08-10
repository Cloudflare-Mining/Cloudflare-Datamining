import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

export const PagesUploadFileResult = eg.object({
  id: eg.string
});

export type PagesUploadFileResult = TypeFromCodec<typeof PagesUploadFileResult>;

export const Environment = eg.union([
  eg.literal('draft'),
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
  started_on: eg.string.optional,
  ended_on: eg.string.optional
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
  source: eg.object({
    type: eg.union([eg.literal('github'), eg.literal('gitlab')]),
    config: eg.object({
      owner: eg.string,
      owner_display_name: eg.string,
      repo_name: eg.string,
      repo_display_name: eg.string,
      production_branch: eg.string,
      pr_comments_enabled: eg.boolean.optional,
      deployments_enabled: eg.boolean.optional,
      production_deployments_enabled: eg.boolean.optional,
      preview_deployment_setting: eg.string.optional,
      preview_branch_includes: eg.array(eg.string).optional,
      preview_branch_excludes: eg.array(eg.string).optional
    })
  }),
  is_skipped: eg.boolean.optional,
  files: eg.record(eg.string, eg.string.optional).optional
});

export type Deployment = TypeFromCodec<typeof Deployment>;

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
