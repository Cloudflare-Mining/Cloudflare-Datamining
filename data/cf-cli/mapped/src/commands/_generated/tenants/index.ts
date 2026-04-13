/**
 * tenants command
 * @generated from apis/tenants/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import accounttypes from './account-types/index.js';
import accounts from './accounts/index.js';
import entitlements from './entitlements/index.js';
import memberships from './memberships/index.js';

const command: CommandModule = {
  command: 'tenants',
  describe: 'Multi-tenant account management — manage tenant accounts, entitlements, and memberships',

  builder: (yargs) => {
    return yargs
      .command(get)
      .command(accounttypes)
      .command(accounts)
      .command(entitlements)
      .command(memberships)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
