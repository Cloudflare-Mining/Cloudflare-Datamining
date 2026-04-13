/**
 * user-groups command group
 * @generated from apis/iam/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import memberscreate from './members-create.js';
import membersdelete from './members-delete.js';
import memberslist from './members-list.js';
import membersupdate from './members-update.js';
import update from './update.js';

const command: CommandModule = {
  command: 'user-groups',
  describe: 'Organize account members into groups for easier permission assignment',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(get)
      .command(list)
      .command(memberscreate)
      .command(membersdelete)
      .command(memberslist)
      .command(membersupdate)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
