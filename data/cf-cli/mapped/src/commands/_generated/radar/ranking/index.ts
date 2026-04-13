/**
 * ranking command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import domainget from './domain-get.js';
import internetservicescategories from './internet-services-categories.js';
import internetservicestimeseriesgroups from './internet-services-timeseries-groups.js';
import internetservicestop from './internet-services-top.js';
import timeseriesgroups from './timeseries-groups.js';
import top from './top.js';

const command: CommandModule = {
  command: 'ranking',
  describe: 'Top domain rankings based on DNS query popularity across the Cloudflare network',

  builder: (yargs) => {
    return yargs
      .command(domainget)
      .command(internetservicescategories)
      .command(internetservicestimeseriesgroups)
      .command(internetservicestop)
      .command(timeseriesgroups)
      .command(top)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
