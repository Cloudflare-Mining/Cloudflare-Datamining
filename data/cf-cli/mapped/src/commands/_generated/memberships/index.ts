/**
 * memberships command
 * @generated from apis/memberships/schema.ts
 */
import type { CommandModule } from 'yargs';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'memberships',
  describe: 'List, accept, and manage the Cloudflare accounts your user belongs to',

  builder: (yargs) => {
    return yargs.command(delete_).command(get).command(list).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
