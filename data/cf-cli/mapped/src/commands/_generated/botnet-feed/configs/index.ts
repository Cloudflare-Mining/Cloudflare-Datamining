/**
 * configs command group
 * @generated from apis/botnet-feed/schema.ts
 */
import type { CommandModule } from 'yargs';
import asndelete from './asn-delete.js';
import asnget from './asn-get.js';

const command: CommandModule = {
  command: 'configs',
  describe: 'Botnet feed subscription configuration and notification preferences',

  builder: (yargs) => {
    return yargs.command(asndelete).command(asnget).demandCommand(1);
  },

  handler: () => {},
};

export default command;
