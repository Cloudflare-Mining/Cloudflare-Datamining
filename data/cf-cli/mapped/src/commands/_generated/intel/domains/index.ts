/**
 * domains command group
 * @generated from apis/intel/schema.ts
 */
import type { CommandModule } from 'yargs';
import bulksget from './bulks-get.js';
import get from './get.js';

const command: CommandModule = {
  command: 'domains',
  describe: 'Domain intelligence — risk scores, categories, and associated infrastructure',

  builder: (yargs) => {
    return yargs.command(bulksget).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
