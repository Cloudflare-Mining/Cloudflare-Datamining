/**
 * colo command group
 * @generated from apis/analytics/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'colo',
  describe: 'Per-data-center (colo) traffic analytics breakdown for the zone',

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
