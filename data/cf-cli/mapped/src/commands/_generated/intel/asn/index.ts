/**
 * asn command group
 * @generated from apis/intel/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import subnetsget from './subnets-get.js';

const command: CommandModule = {
  command: 'asn',
  describe: 'ASN intelligence — ownership, geolocation, and subnet details for autonomous systems',

  builder: (yargs) => {
    return yargs.command(get).command(subnetsget).demandCommand(1);
  },

  handler: () => {},
};

export default command;
