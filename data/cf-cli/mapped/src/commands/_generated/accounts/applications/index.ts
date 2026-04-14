/**
 * applications command group
 * @generated from apis/accounts/schema.ts
 */
import type { CommandModule } from 'yargs';
import getapplications from './get-applications.js';
import getbyid from './get-by-id.js';

const command: CommandModule = {
  command: 'applications',
  describe: 'Applications operations',

  builder: (yargs) => {
    return yargs.command(getapplications).command(getbyid).demandCommand(1);
  },

  handler: () => {},
};

export default command;
