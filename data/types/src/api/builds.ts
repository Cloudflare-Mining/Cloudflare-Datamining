import { z } from 'zod';
import { ProjectSource } from './pages';

export type SCMProviderType = z.infer<typeof SCMProviderType>;
export const SCMProviderType = z.enum(['github', 'gitlab']);

export type BuildStatus = z.infer<typeof BuildStatus>;
export const BuildStatus = z.enum([
  'queued',
  'initializing',
  'running',
  'stopped'
]);

export type BuildOutcome = z.infer<typeof BuildOutcome>;
export const BuildOutcome = z.enum([
  'success',
  'fail',
  'skipped',
  'cancelled',
  'terminated'
]);

export type RepoConnectionRecord = z.infer<typeof RepoConnectionRecord>;
export const RepoConnectionRecord = z.object({
  repo_connection_uuid: z.string().uuid(),
  repo_id: z.string(),
  repo_name: z.string(),
  provider_account_id: z.string(),
  provider_account_name: z.string(),
  provider_type: SCMProviderType,
  created_on: z.coerce.date(),
  modified_on: z.coerce.date(),
  deleted_on: z.coerce.date().nullable()
});

export type RepoConnectionRequest = z.infer<typeof RepoConnectionRequest>;
export const RepoConnectionRequest = RepoConnectionRecord.pick({
  repo_id: true,
  repo_name: true,
  provider_type: true,
  provider_account_id: true,
  provider_account_name: true
});

export type TriggerRecord = z.infer<typeof TriggerRecord>;
export const TriggerRecord = z.object({
  trigger_uuid: z.string().uuid(),
  build_token_uuid: z.string().uuid(),
  repo_connection: RepoConnectionRecord,
  external_script_id: z.string(),
  trigger_name: z.string(),
  build_command: z.string().nullable(),
  deploy_command: z.string().nullable().default('npx wrangler deploy'),
  root_directory: z.string().default('/'),
  branch_includes: z.array(z.string()).default([]),
  branch_excludes: z.array(z.string()).default([]),
  path_includes: z.array(z.string()).default(['*']),
  path_excludes: z.array(z.string()).default([]),
  build_caching_enabled: z.boolean().default(false),
  created_on: z.coerce.date(),
  modified_on: z.coerce.date(),
  deleted_on: z.coerce.date().nullable()
});

export type EnvironmentVariable = z.infer<typeof EnvironmentVariable>;
export const EnvironmentVariable = z.object({
  key: z
    .string()
    .regex(
      new RegExp('^[a-zA-Z_]+[a-zA-Z0-9_]*$'),
      'Key contains invalid characters'
    ),
  // Limit to 5KB values
  value: z
    .string()
    .max(5 * 1000)
    .nullable(),
  is_secret: z.boolean()
});

export type EnvironmentVariablesRecord = z.infer<
  typeof EnvironmentVariablesRecord
>;
export const EnvironmentVariablesRecord = z.record(
  EnvironmentVariable.omit({ key: true })
);

export type EnvironmentVariablesRequest = z.infer<
  typeof EnvironmentVariablesRequest
>;
export const EnvironmentVariablesRequest = EnvironmentVariablesRecord;

export type EnvironmentVariablesResponse = z.infer<
  typeof EnvironmentVariablesResponse
>;
export const EnvironmentVariablesResponse = EnvironmentVariablesRecord;
export const BuildRecordStatus = z.enum([
  'queued',
  'initializing',
  'running',
  'stopped'
]);
export type BuildRecordStatusEnumType = z.infer<typeof BuildRecordStatus>;
export const BuildOutcomeType = 'build_outcome' as const;
export type BuildOutcomeEnumType = z.infer<typeof BuildOutcome>;

export const BuildRecord = z.object({
  build_uuid: z.string().uuid(),
  status: BuildRecordStatus,
  build_outcome: BuildOutcome.nullable(),
  initializing_on: z.coerce.date().nullable(),
  running_on: z.coerce.date().nullable(),
  stopped_on: z.coerce.date().nullable(),
  created_on: z.coerce.date(),
  modified_on: z.coerce.date()
});

export type BuildRecord = z.infer<typeof BuildRecord>;

export const BuildTriggerSource = z.enum(['push_event', 'retry', 'manual']);
export const BuildTriggerMetadataRecord = z.object({
  build_trigger_source: BuildTriggerSource,
  commit_hash: z.string(),
  branch: z.string(),
  author: z.string(),
  commit_message: z.string(),
  build_command: z.string().nullable(),
  deploy_command: z.string().nullable(),
  provider_account_name: z.string(),
  provider_type: SCMProviderType,
  repo_name: z.string(),
  root_directory: z.string(),
  environment_variables: EnvironmentVariablesRecord
});

export type BuildTriggerMetadataRecord = z.infer<
  typeof BuildTriggerMetadataRecord
>;

export type CreateTriggerRequest = z.infer<typeof CreateTriggerRequest>;
export const CreateTriggerRequest = TriggerRecord.pick({
  external_script_id: true,
  trigger_name: true,
  build_command: true,
  deploy_command: true,
  root_directory: true,
  branch_includes: true,
  branch_excludes: true,
  build_token_uuid: true,
  build_caching_enabled: true,
  path_includes: true,
  path_excludes: true
}).merge(z.object({ repo_connection_uuid: z.string() }));

export type BuildTokenOwnerType = z.infer<typeof BuildTokenOwnerType>;
export const BuildTokenOwnerType = z.enum(['user', 'account']);

export type BuildTokenRequest = z.infer<typeof BuildTokenRequest>;
export const BuildTokenRequest = z.object({
  build_token_name: z.string(),
  build_token_secret: z.string(),
  cloudflare_token_id: z.string(),
  // temp
  repo_connection_uuid: z.string()
});

export type ReadBuildTokenResponse = z.infer<typeof ReadBuildTokenResponse>;
export const ReadBuildTokenResponse = z.object({
  build_token_uuid: z.string(),
  build_token_name: z.string(),
  cloudflare_token_id: z.string(),
  owner_type: BuildTokenOwnerType
});

export type BuildResponse = z.infer<typeof BuildResponse>;
export const BuildResponse = BuildRecord.pick({
  build_uuid: true,
  status: true,
  build_outcome: true,
  initializing_on: true,
  running_on: true,
  stopped_on: true,
  created_on: true,
  modified_on: true
}).merge(
  z.object({
    trigger: TriggerRecord.omit({ build_token_uuid: true }),
    build_trigger_metadata: BuildTriggerMetadataRecord,
    pull_request: z
      .object({
        pull_request_url: z.string(),
        created_on: z.coerce.date()
      })
      .nullable()
  })
);

export type BuildResponseByExternalScriptId = z.infer<
  typeof BuildResponseByExternalScriptId
>;
export const BuildResponseByExternalScriptId = z.record(
  z.string(),
  BuildResponse
);

export type LatestBuildsResponse = z.infer<typeof LatestBuildsResponse>;
export const LatestBuildsResponse = z.object({
  builds: BuildResponseByExternalScriptId
});

export type BuildResponseByVersionId = z.infer<typeof BuildResponseByVersionId>;
export const BuildResponseByVersionId = z.record(z.string(), BuildResponse);

export type BuildsByVersionResponse = z.infer<typeof BuildsByVersionResponse>;
export const BuildsByVersionResponse = z.object({
  builds: BuildResponseByVersionId
});

export type PublicLogLine = z.infer<typeof PublicLogLine>;
export const PublicLogLine = z
  .tuple([
    z.number().describe('unix epoch timestamp'),
    z.string().describe('log line')
  ])
  .describe('Workers CI build log line');

export type PublicLogLines = z.infer<typeof PublicLogLines>;
export const PublicLogLines = z.array(PublicLogLine);

export type EncodedLogsCursor = z.infer<typeof EncodedLogsCursor>;
export const EncodedLogsCursor = z
  .string()
  .regex(/^[\w\d-]+$/, 'url-safe base64 cursor')
  .describe('json+base64-encoded LogsCursor');

export type BuildLogsResponse = z.infer<typeof BuildLogsResponse>;
export const BuildLogsResponse = z.object({
  cursor: EncodedLogsCursor.optional(),
  truncated: z.boolean(),
  lines: PublicLogLines
});

export function triggerToRepoSource(
  trigger: Pick<TriggerRecord, 'repo_connection' | 'branch_includes'>
) {
  return {
    type: trigger.repo_connection.provider_type,
    config: {
      owner: trigger.repo_connection.provider_account_name,
      owner_display_name: trigger.repo_connection.provider_account_name,
      production_branch: trigger.branch_includes[0],
      repo_display_name: trigger.repo_connection.repo_name,
      repo_name: trigger.repo_connection.repo_name
    }
  } satisfies ProjectSource;
}

export type CanceledBuildResponse = z.infer<typeof CanceledBuildResponse>;
export const CanceledBuildResponse = BuildRecord.pick({
  build_uuid: true,
  build_outcome: true,
  stopped_on: true
});

export type PurgeBuildCacheResponse = z.infer<typeof PurgeBuildCacheResponse>;
export const PurgeBuildCacheResponse = z.string();

export type CreateBuildRequest = z.infer<typeof CreateBuildRequest>;
export const CreateBuildRequest = z.intersection(
  BuildTriggerMetadataRecord.pick({
    branch: true,
    commit_hash: true
  }),
  z.object({
    seed_repo: z
      .object({
        provider: z.enum(['github', 'gitlab']),
        owner: z.string(),
        repository: z.string(),
        path: z.string().optional(),
        branch: z.string().optional(),
        files: z
          .array(
            z.object({
              filename: z.string(),
              content: z.string(),
              isBase64: z.boolean().optional()
            })
          )
          .optional()
      })
      .optional()
  })
);

export type GithubUserType = z.infer<typeof GithubUserType>;
export const GithubUserType = z.enum(['User', 'Organization']);

export type ConfigAutofillResponse = z.infer<typeof ConfigAutofillResponse>;
export const ConfigAutofillResponse = z.object({
  config_file: z.string().nullable(),
  default_worker_name: z.string().nullable(),
  env_worker_names: z.record(z.string()).nullable(),
  // TODO: Make these not-optional once we finish rolling out the stratus release w/ these changes
  // along with a banda-infra release ( this is to ensure our changes are backwards compatible )
  package_manager: z.string().nullable().optional(),
  scripts: z.record(z.string()).nullable().optional()
});

export type GetAccountLimitResponse = z.infer<typeof GetAccountLimitResponse>;
export const GetAccountLimitResponse = z
  .object({
    // both build_minutes_refresh_on and has_reached_build_minutes_limit are optional if is_paid_plan = true
    build_minutes_refresh_on: z.coerce.date().optional(),
    has_reached_build_minutes_limit: z.boolean().optional()
  })
  .nullable();
