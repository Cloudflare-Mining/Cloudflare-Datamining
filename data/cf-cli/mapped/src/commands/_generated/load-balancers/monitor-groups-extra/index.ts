/**
 * monitor-groups-extra command group
 * @generated from apis/load-balancers/schema.ts
 */
import type { CommandModule } from 'yargs';
import referenceslist from './references-list.js';

const command: CommandModule = {
  command: 'monitor-groups-extra',
  describe: 'Monitor Groups (additional) operations',

  builder: (yargs) => {
    return yargs.command(referenceslist).demandCommand(1);
  },

  handler: () => {},
};

export default command;
