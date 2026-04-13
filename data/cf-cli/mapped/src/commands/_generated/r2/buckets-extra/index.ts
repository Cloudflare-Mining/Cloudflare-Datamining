/**
 * buckets-extra command group
 * @generated from apis/r2/schema.ts
 */
import type { CommandModule } from 'yargs';
import localuploadsget from './local-uploads-get.js';
import localuploadsupdate from './local-uploads-update.js';

const command: CommandModule = {
  command: 'buckets-extra',
  describe: 'Buckets (additional) operations',

  builder: (yargs) => {
    return yargs.command(localuploadsget).command(localuploadsupdate).demandCommand(1);
  },

  handler: () => {},
};

export default command;
