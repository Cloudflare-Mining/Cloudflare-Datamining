/**
 * organizations command
 * @generated from apis/organizations/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import listextra from './list-extra.js';
import update from './update.js';
import accounts from './accounts/index.js';
import logs from './logs/index.js';
import members from './members/index.js';
import membersbatchcreate from './members-batch-create/index.js';
import organizationprofile from './organization-profile/index.js';
import shares from './shares/index.js';

const command: CommandModule = {
  command: 'organizations',
  describe: 'Multi-user organizations that group accounts, members, and shared settings under a single entity',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(get)
      .command(list)
      .command(listextra)
      .command(update)
      .command(accounts)
      .command(logs)
      .command(members)
      .command(membersbatchcreate)
      .command(organizationprofile)
      .command(shares)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
