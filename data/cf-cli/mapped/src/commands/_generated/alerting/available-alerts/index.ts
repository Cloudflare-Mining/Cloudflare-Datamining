/**
 * available-alerts command group
 * @generated from apis/alerting/schema.ts
 */
import type { CommandModule } from 'yargs';
import list from './list.js';

const command: CommandModule = {
  command: 'available-alerts',
  describe: 'List the alert types available for your account based on enabled products',

  builder: (yargs) => {
    return yargs.command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
