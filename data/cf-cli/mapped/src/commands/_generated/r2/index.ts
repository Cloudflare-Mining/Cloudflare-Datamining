/**
 * r2 command
 * @generated from apis/r2/schema.ts
 */
import type { CommandModule } from 'yargs';
import buckets from './buckets/index.js';
import bucketsextra from './buckets-extra/index.js';
import superslurper from './super-slurper/index.js';
import temporarycredentials from './temporary-credentials/index.js';

const command: CommandModule = {
  command: 'r2',
  describe:
    'S3-compatible object storage with zero egress fees — buckets, lifecycle rules, event notifications, and data migration',

  builder: (yargs) => {
    return yargs
      .command(buckets)
      .command(bucketsextra)
      .command(superslurper)
      .command(temporarycredentials)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
