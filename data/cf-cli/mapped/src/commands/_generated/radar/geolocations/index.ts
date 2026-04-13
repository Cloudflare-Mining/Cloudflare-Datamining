/**
 * geolocations command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import list from './list.js';

const command: CommandModule = {
  command: 'geolocations',
  describe: 'Geographic location metadata used for regional traffic analysis',

  builder: (yargs) => {
    return yargs.command(get).command(list).demandCommand(1);
  },

  handler: () => {},
};

export default command;
