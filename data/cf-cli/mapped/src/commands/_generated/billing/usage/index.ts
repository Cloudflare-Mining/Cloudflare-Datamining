/**
 * usage command group
 * @generated from apis/billing/schema.ts
 */
import type { CommandModule } from 'yargs';
import paygo from './paygo.js';

const command: CommandModule = {
  command: 'usage',
  describe: 'Metered usage data for billed services — requests, bandwidth, and feature consumption',

  builder: (yargs) => {
    return yargs.command(paygo).demandCommand(1);
  },

  handler: () => {},
};

export default command;
