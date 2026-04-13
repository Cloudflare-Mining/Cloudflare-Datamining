/**
 * failover command group
 * @generated from apis/zero-trust/schema.ts
 */
import type { CommandModule } from 'yargs';
import update from './update.js';

const command: CommandModule = {
  command: 'failover',
  describe: 'Failover operations',

  builder: (yargs) => {
    return yargs.command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
