/**
 * settings command group
 * @generated from apis/zero-trust/schema.ts
 */
import type { CommandModule } from 'yargs';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'settings',
  describe: 'Settings operations',

  builder: (yargs) => {
    return yargs.command(delete_).command(edit).command(get).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
