/**
 * values command group
 * @generated from apis/resource-tagging/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';

const command: CommandModule = {
  command: 'values',
  describe: 'Allowed values for tag keys — constrain tagging to a defined set of options',

  builder: (yargs) => {
    return yargs.command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
