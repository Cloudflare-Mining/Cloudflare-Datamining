/**
 * placement command group
 * @generated from apis/workers/schema.ts
 */
import type { CommandModule } from 'yargs';
import regionslist from './regions-list.js';

const command: CommandModule = {
  command: 'placement',
  describe: 'Placement operations',

  builder: (yargs) => {
    return yargs.command(regionslist).demandCommand(1);
  },

  handler: () => {},
};

export default command;
