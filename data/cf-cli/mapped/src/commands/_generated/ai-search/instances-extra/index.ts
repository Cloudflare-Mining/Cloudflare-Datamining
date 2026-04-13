/**
 * instances-extra command group
 * @generated from apis/ai-search/schema.ts
 */
import type { CommandModule } from 'yargs';
import jobsedit from './jobs-edit.js';

const command: CommandModule = {
  command: 'instances-extra',
  describe: 'Instances (additional) operations',

  builder: (yargs) => {
    return yargs.command(jobsedit).demandCommand(1);
  },

  handler: () => {},
};

export default command;
