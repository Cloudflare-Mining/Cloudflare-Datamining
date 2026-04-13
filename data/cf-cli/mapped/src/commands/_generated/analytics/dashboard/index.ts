/**
 * dashboard command group
 * @generated from apis/analytics/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'dashboard',
  describe: 'Aggregated zone dashboard analytics — requests, bandwidth, threats, and page views',

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
