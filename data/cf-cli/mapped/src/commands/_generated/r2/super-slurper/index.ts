/**
 * super-slurper command group
 * @generated from apis/r2/schema.ts
 */
import type { CommandModule } from 'yargs';
import connectivityprechecksource from './connectivity-precheck-source.js';
import connectivityprechecktarget from './connectivity-precheck-target.js';
import jobsabort from './jobs-abort.js';
import jobsabortall from './jobs-abort-all.js';
import jobscreate from './jobs-create.js';
import jobsget from './jobs-get.js';
import jobslist from './jobs-list.js';
import jobslogslist from './jobs-logs-list.js';
import jobspause from './jobs-pause.js';
import jobsprogress from './jobs-progress.js';
import jobsresume from './jobs-resume.js';

const command: CommandModule = {
  command: 'super-slurper',
  describe: 'Migrate data from external S3-compatible storage into R2 buckets with resumable transfer jobs',

  builder: (yargs) => {
    return yargs
      .command(connectivityprechecksource)
      .command(connectivityprechecktarget)
      .command(jobsabort)
      .command(jobsabortall)
      .command(jobscreate)
      .command(jobsget)
      .command(jobslist)
      .command(jobslogslist)
      .command(jobspause)
      .command(jobsprogress)
      .command(jobsresume)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
