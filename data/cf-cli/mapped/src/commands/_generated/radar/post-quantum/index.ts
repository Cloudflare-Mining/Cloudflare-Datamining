/**
 * post-quantum command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import originsummary from './origin-summary.js';
import origintimeseriesgroups from './origin-timeseries-groups.js';
import tlssupport from './tls-support.js';

const command: CommandModule = {
  command: 'post-quantum',
  describe: 'Post-quantum encryption adoption and deployment trends across the Internet',

  builder: (yargs) => {
    return yargs.command(originsummary).command(origintimeseriesgroups).command(tlssupport).demandCommand(1);
  },

  handler: () => {},
};

export default command;
