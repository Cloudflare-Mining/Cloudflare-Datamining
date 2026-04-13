/**
 * export command group
 * @generated from apis/zaraz/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'export',
  describe: 'Export the current Zaraz configuration as a portable JSON document',

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
