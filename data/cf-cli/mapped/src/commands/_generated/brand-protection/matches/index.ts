/**
 * matches command group
 * @generated from apis/brand-protection/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'matches',
  describe: 'Detected brand abuse matches from monitoring queries with evidence downloads',

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
