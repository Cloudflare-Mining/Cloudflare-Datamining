/**
 * default command group
 * @generated from apis/zaraz/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'default',
  describe: 'Default Zaraz configuration template used as a starting point for new zones',

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
