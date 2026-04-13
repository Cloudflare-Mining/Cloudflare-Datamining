/**
 * maintenance-configs command group
 * @generated from apis/r2-data-catalog/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'maintenance-configs',
  describe: 'Table maintenance settings — compaction schedules and snapshot expiration policies',

  builder: (yargs) => {
    return yargs.command(get).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
