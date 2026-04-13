/**
 * audit-logs command
 * @generated from apis/audit-logs/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';

const command: CommandModule = {
  command: 'audit-logs',
  describe: 'Immutable audit trail of actions taken by account members — who changed what and when',

  builder: (yargs) => {
    return yargs.command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
