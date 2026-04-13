/**
 * tokens command group
 * @generated from apis/accounts/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import get from './get.js';
import list from './list.js';
import permissiongroupsget from './permission-groups-get.js';
import permissiongroupslist from './permission-groups-list.js';
import update from './update.js';
import valueupdate from './value-update.js';
import verify from './verify.js';

const command: CommandModule = {
  command: 'tokens',
  describe: 'Create and manage scoped API tokens for programmatic access to the Cloudflare API',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(get)
      .command(list)
      .command(permissiongroupsget)
      .command(permissiongroupslist)
      .command(update)
      .command(valueupdate)
      .command(verify)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
