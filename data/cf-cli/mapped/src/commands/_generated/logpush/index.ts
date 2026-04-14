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
import logexplorerdatasets from './log-explorer-datasets/index.js';
import logexplorerquery from './log-explorer-query/index.js';
import logcontrolcmb from './logcontrol-cmb/index.js';
import logsreceived from './logs-received/index.js';
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
      .command(logexplorerdatasets)
      .command(logexplorerquery)
      .command(logcontrolcmb)
      .command(logsreceived)
      .command(ownership)
      .command(ownershipextra)
      .command(validate)
      .command(validateextra)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
