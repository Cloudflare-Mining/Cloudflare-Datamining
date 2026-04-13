/**
 * logpush command
 * @generated from apis/logpush/schema.ts
 */
import type { CommandModule } from 'yargs';
import datasets from './datasets/index.js';
import datasetsextra from './datasets-extra/index.js';
import edge from './edge/index.js';
import jobs from './jobs/index.js';
import jobsextra from './jobs-extra/index.js';
import ownership from './ownership/index.js';
import ownershipextra from './ownership-extra/index.js';
import validate from './validate/index.js';
import validateextra from './validate-extra/index.js';

const command: CommandModule = {
  command: 'logpush',
  describe: 'Push Cloudflare logs to external storage destinations — R2, S3, Splunk, Datadog, and more',

  builder: (yargs) => {
    return yargs
      .command(datasets)
      .command(datasetsextra)
      .command(edge)
      .command(jobs)
      .command(jobsextra)
      .command(ownership)
      .command(ownershipextra)
      .command(validate)
      .command(validateextra)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
