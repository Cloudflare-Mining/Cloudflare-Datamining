/**
 * authors command group
 * @generated from apis/ai/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';

const command: CommandModule = {
  command: 'authors',
  describe: 'Search model authors and publishers in the Workers AI catalog',

  builder: (yargs) => {
    return yargs.command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
