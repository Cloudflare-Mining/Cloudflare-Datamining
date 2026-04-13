/**
 * ips command group
 * @generated from apis/intel/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';

const command: CommandModule = {
  command: 'ips',
  describe: 'IP address intelligence — geolocation, risk assessment, and hosting provider details',

  builder: (yargs) => {
    return yargs.command(get).demandCommand(1);
  },

  handler: () => {},
};

export default command;
