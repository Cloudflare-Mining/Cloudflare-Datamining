/**
 * botnet-feed command
 * @generated from apis/botnet-feed/schema.ts
 */
import type { CommandModule } from 'yargs';
import asn from './asn/index.js';
import configs from './configs/index.js';

const command: CommandModule = {
  command: 'botnet-feed',
  describe: 'Botnet threat intelligence feeds — IP and ASN-level data on known command-and-control infrastructure',

  builder: (yargs) => {
    return yargs.command(asn).command(configs).demandCommand(1);
  },

  handler: () => {},
};

export default command;
