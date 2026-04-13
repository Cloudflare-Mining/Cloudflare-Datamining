/**
 * miscategorizations command group
 * @generated from apis/intel/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';

const command: CommandModule = {
  command: 'miscategorizations',
  describe: 'Report and track domain miscategorization corrections',

  builder: (yargs) => {
    return yargs.command(create).demandCommand(1);
  },

  handler: () => {},
};

export default command;
