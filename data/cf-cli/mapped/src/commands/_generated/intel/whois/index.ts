/**
 * whois command group
 * @generated from apis/intel/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'whois',
  describe: 'WHOIS registration data for domains including registrant, registrar, and nameservers',

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
