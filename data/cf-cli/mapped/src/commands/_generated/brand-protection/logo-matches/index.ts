/**
 * logo-matches command group
 * @generated from apis/brand-protection/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'logo-matches',
  describe: 'Detected visual logo matches found on potentially infringing websites',

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
