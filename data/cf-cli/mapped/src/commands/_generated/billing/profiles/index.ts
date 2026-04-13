/**
 * profiles command group
 * @generated from apis/billing/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'profiles',
  describe: 'Billing profile with payment method, address, and invoice preferences',

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
