/**
 * invites command group
 * @generated from apis/user/schema.ts
 */
import type { CommandModule } from 'yargs';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'invites',
  describe: 'View and respond to pending invitations to join Cloudflare accounts',

  builder: (yargs) => {
    return yargs.command(edit).command(get).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
