/**
 * logs command group
 * @generated from apis/organizations/schema.ts
 */
import type { CommandModule } from 'yargs';
import auditget from './audit-get.js';

const command: CommandModule = {
  command: 'logs',
  describe: 'Logs operations',

  builder: (yargs) => {
    return yargs.command(auditget).demandCommand(1);
  },

  handler: () => {},
};

export default command;
