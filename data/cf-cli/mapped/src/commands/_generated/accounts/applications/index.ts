/**
 * applications command group
 * @generated from apis/accounts/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import getapplications from './get-applications.js';
import getbyid from './get-by-id.js';
import update from './update.js';

const command: CommandModule = {
  command: 'applications',
  describe: 'Applications operations',

  builder: (yargs) => {
    return yargs.command(create).command(getapplications).command(getbyid).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
