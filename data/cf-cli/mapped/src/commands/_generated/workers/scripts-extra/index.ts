/**
 * scripts-extra command group
 * @generated from apis/workers/schema.ts
 */
import type { CommandModule } from 'yargs';
import usagemodelget from './usage-model-get.js';
import usagemodelupdate from './usage-model-update.js';

const command: CommandModule = {
  command: 'scripts-extra',
  describe: 'Scripts (additional) operations',

  builder: (yargs) => {
    return yargs.command(usagemodelget).command(usagemodelupdate).demandCommand(1);
  },

  handler: () => {},
};

export default command;
