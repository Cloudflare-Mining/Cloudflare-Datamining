/**
 * aegis command group
 * @generated from apis/zones/schema.ts
 */
import type { CommandModule } from 'yargs';
import edit from './edit.js';
import get from './get.js';

const command: CommandModule = {
  command: 'aegis',
  describe: 'Aegis operations',

  builder: (yargs) => {
    return yargs.command(edit).command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
