/**
 * organizations command group
 * @generated from apis/zero-trust/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import dohget from './doh-get.js';
import dohupdate from './doh-update.js';
import list from './list.js';
import revokeusers from './revoke-users.js';
import update from './update.js';

const command: CommandModule = {
  command: 'organizations',
  describe: 'Zero Trust organization settings including login page, session duration, and user seat management',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(dohget)
      .command(dohupdate)
      .command(list)
      .command(revokeusers)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
