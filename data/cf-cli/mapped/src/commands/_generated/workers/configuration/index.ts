/**
 * configuration command group
 * @generated from apis/workers/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import edit from './edit.js';
import get from './get.js';

const command: CommandModule = {
  command: 'configuration',
  describe: 'Configuration operations',

  builder: (yargs) => {
    return yargs.command(create).command(edit).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
