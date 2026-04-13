/**
 * analytics command group
 * @generated from apis/dns-firewall/schema.ts
 */
import type { CommandModule } from 'yargs';
import reportsbytimesget from './reports-bytimes-get.js';
import reportsget from './reports-get.js';

const command: CommandModule = {
  command: 'analytics',
  describe: 'Query volume, latency, and response code analytics for DNS Firewall clusters',

  builder: (yargs) => {
    return yargs.command(reportsbytimesget).command(reportsget).demandCommand(1);
  },

  handler: () => {},
};

export default command;
