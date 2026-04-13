/**
 * seats command group
 * @generated from apis/zero-trust/schema.ts
 */
import type { CommandModule } from 'yargs';
import edit from './edit.js';

const command: CommandModule = {
  command: 'seats',
  describe: 'View and manage user seat allocations for your Zero Trust subscription',

  builder: (yargs) => {
    return yargs.command(edit).demandCommand(1);
  },

  handler: () => {},
};

export default command;
