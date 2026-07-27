import { z } from 'zod';

export type JobOutcome = z.infer<typeof JobOutcome>;
export const JobOutcome = z.enum(['success', 'fail', 'skipped', 'cancelled']);

export const JobStatusType = 'job_status' as const;
export type JobStatus = z.infer<typeof JobStatus>;
export const JobStatus = z.enum([
  'queued',
  'initializing',
  'running',
  'stopped'
]);

export const AgentType = z.enum(['builds_autofix', 'pages_conversion']);

type AutofixJobRecord = z.infer<typeof AutofixJobRecord>;
const AutofixJobRecord = z.object({
  autofix_job_id: z.string(),
  cf_account_id: z.string(),
  job_type: AgentType,
  status: JobStatus,
  job_outcome: JobOutcome.nullable(),
  job_outcome_details: z.string().nullable(),
  initializing_on: z.coerce.date().nullable(),
  running_on: z.coerce.date().nullable(),
  stopped_on: z.coerce.date().nullable(),
  created_on: z.coerce.date(),
  modified_on: z.coerce.date(),
  deleted_on: z.coerce.date().nullable()
});

const AutofixJobMetadataPagesConversionRecord = z.object({
  autofix_job_metadata_pages_conversion_id: z.string(),
  autofix_job_id: z.string(),
  pages_project_name: z.string(),
  build_token_uuid: z.string().uuid(),
  created_on: z.coerce.date()
});

const PagesConversionArtifactRecord = z.object({
  build_uuid: z.string().uuid().nullable(),
  worker_external_script_id: z.string().nullable(),
  scm_pr_url: z.string().nullable()
});

const PagesConversionStatusRecord = z.object({
  running_on: z.coerce.date().nullable(),
  scm_pr_opened_on: z.coerce.date().nullable(),
  worker_created_on: z.coerce.date().nullable(),
  builds_configured_on: z.coerce.date().nullable(),
  build_triggered_on: z.coerce.date().nullable(),
  stopped_on: z.coerce.date().nullable()
});

const AutofixJobMetadataBuildsAutofixRecord = z.object({
  autofix_job_id: z.string(),
  build_uuid: z.string().uuid(),
  created_on: z.coerce.date()
});

export type AutofixJobRecordView = z.infer<typeof AutofixJobRecordView>;
export const AutofixJobRecordView = AutofixJobRecord.pick({
  autofix_job_id: true,
  status: true,
  created_on: true,
  modified_on: true
});

type AutofixJob_PagesConversion = z.infer<typeof AutofixJob_PagesConversion>;
const AutofixJob_PagesConversion = AutofixJobRecord.extend({
  job_type: z.literal(AgentType.enum.pages_conversion),
  job_metadata: AutofixJobMetadataPagesConversionRecord,
  artifacts: PagesConversionArtifactRecord.optional().nullable(),
  statuses: PagesConversionStatusRecord.optional().nullable()
});

type AutofixJob_BuildsAutofix = z.infer<typeof AutofixJob_BuildsAutofix>;
const AutofixJob_BuildsAutofix = AutofixJobRecord.extend({
  job_type: z.literal(AgentType.enum.builds_autofix),
  job_metadata: AutofixJobMetadataBuildsAutofixRecord
});

export type AutofixJob_PagesConversionResponse = z.infer<
  typeof AutofixJob_PagesConversionResponse
>;
export const AutofixJob_PagesConversionResponse =
  AutofixJob_PagesConversion.pick({
    autofix_job_id: true,
    status: true,
    job_outcome: true,
    job_outcome_details: true,
    created_on: true,
    modified_on: true,
    job_type: true,
    artifacts: true
  }).merge(
    z.object({
      job_metadata: AutofixJob_PagesConversion.shape.job_metadata.pick({
        pages_project_name: true,
        build_token_uuid: true
      })
    })
  );

export type AutofixJob_BuildsAutofixResponse = z.infer<
  typeof AutofixJob_BuildsAutofixResponse
>;
export const AutofixJob_BuildsAutofixResponse = AutofixJob_BuildsAutofix.pick({
  autofix_job_id: true,
  status: true,
  job_outcome: true,
  job_outcome_details: true,
  created_on: true,
  modified_on: true,
  job_type: true
}).merge(
  z.object({
    job_metadata: AutofixJob_BuildsAutofix.shape.job_metadata.pick({
      build_uuid: true
    })
  })
);

export type DetailedAutofixJobResponse = z.infer<
  typeof DetailedAutofixJobResponse
>;
export const DetailedAutofixJobResponse = z.discriminatedUnion('job_type', [
  AutofixJob_PagesConversionResponse,
  AutofixJob_BuildsAutofixResponse
]);

export type PagesMigrationBody = z.infer<typeof PagesMigrationBody>;
export const PagesMigrationBody = z.object({
  preset: z.literal('pages_conversion'),
  pages: z.object({
    project_name: z.string(),
    environments: z.array(z.literal('production'))
  }),
  workers: z.object({
    build_token_uuid: z.string().optional()
  })
});
