/**
 * traffic-anomalies command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import locationsget from './locations-get.js';

const command: CommandModule = {
  command: 'traffic-anomalies',
  describe: 'Detected traffic anomalies and unusual patterns in Internet traffic flows',

  builder: (yargs) => {
    return yargs.command(get).command(locationsget).demandCommand(1);
  },

  handler: () => {},
};

export default command;
