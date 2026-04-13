/**
 * temporary-credentials command group
 * @generated from apis/r2/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';

const command: CommandModule = {
  command: 'temporary-credentials',
  describe: 'Generate short-lived S3-compatible credentials scoped to specific buckets and operations',

  builder: (yargs) => {
    return yargs.command(create).demandCommand(1);
  },

  handler: () => {},
};

export default command;
