/**
 * logs command group
 * @generated from apis/accounts/schema.ts
 */
import type { CommandModule } from 'yargs';
import auditlist from './audit-list.js';

const command: CommandModule = {
  command: 'logs',
  describe: 'Retrieve audit log entries that record actions taken on the account',

  builder: (yargs) => {
    return yargs.command(auditlist).demandCommand(1);
  },

  handler: () => {},
};

export default command;
