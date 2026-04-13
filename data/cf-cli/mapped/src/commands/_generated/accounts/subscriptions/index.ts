/**
 * subscriptions command group
 * @generated from apis/accounts/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'subscriptions',
  describe: 'View and manage plan subscriptions attached to this account',

  builder: (yargs) => {
    return yargs.command(create).command(delete_).command(get).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
