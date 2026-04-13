/**
 * identity-providers command group
 * @generated from apis/zero-trust/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import scimgroupslist from './scim-groups-list.js';
import scimuserslist from './scim-users-list.js';
import update from './update.js';

const command: CommandModule = {
  command: 'identity-providers',
  describe: 'Identity provider integrations (Okta, Azure AD, etc.) used to authenticate users in Access',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(get)
      .command(list)
      .command(scimgroupslist)
      .command(scimuserslist)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
