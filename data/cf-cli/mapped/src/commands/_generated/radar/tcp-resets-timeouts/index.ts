/**
 * tcp-resets-timeouts command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import summary from './summary.js';
import timeseriesgroups from './timeseries-groups.js';

const command: CommandModule = {
  command: 'tcp-resets-timeouts',
  describe: 'TCP connection reset and timeout statistics indicating network health issues',

  builder: (yargs) => {
    return yargs.command(summary).command(timeseriesgroups).demandCommand(1);
  },

  handler: () => {},
};

export default command;
